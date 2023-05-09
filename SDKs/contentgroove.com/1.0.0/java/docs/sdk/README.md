# SDK

## Overview

# Overview

The ContentGroove Developer API enables you to add the power of ContentGroove's video AI to your own applications and workflows.

Webhooks are a way for ContentGroove to send video information
to your application, to update your system and/or trigger other business processes.

You can use Webhooks and the Developer API separately or together.

# Getting Started with Webhooks

- Sign up for an account at [app.contentgroove.com](https://app.contentgroove.com)
- Read "Using Webhooks" on the [API Reference page](https://developers.contentgroove.com/api_reference)
- Visit the [Webhooks page](https://app.contentgroove.com/webhook_subscriptions) and create a new webhook

# Using Webhooks

Webhooks, also known as callbacks, are a way for ContentGroove to notify your application as soon as possible after an event has occurred in ContentGroove.
For example after a media completes processing, ContentGroove can use a webhook to notify your application with information about the video: Suggested clips, transcription, and so on.
You can use the information sent to update your system and/or use the
webhook to trigger other business processes.

The webhook request is sent as an HTTP POST containing a payload of JSON-formatted data.
For the details of the payload format see the "CALLBACKS" sections below.

When your application receives the webhook request, it must respond with
a 200 HTTP status code (success).
If a 200 HTTP status code is not returned,
ContentGroove will assume that the webhook was not delivered and
will retry a limited number of times, using an exponential backoff algorithm.

ContentGroove makes a best effort to attempt to send the webhook at
least once.
Applications receiving webhooks must tolerate the
possibility of a single webhook payload being sent more than once
(idempotent behavior).
Applications receiving webhooks should tolerate the possibility that
a webhook could not be delivered
(for example your application was down when delivery was attempted).

# Getting Started with the Developer API

- Sign up for an account at [app.contentgroove.com](https://app.contentgroove.com)
- Visit the [API Keys page](https://app.contentgroove.com/api_keys)
  - Create a new API Key then copy and save the value.
    > ⚠️ **IMPORTANT**: This API Key is intended only for use on the server side. Be sure never to use a server-side API Key in client-side (web, mobile, or otherwise) code. ⚠️
- View all available endpoints, and try the API, on our [API Reference page](https://developers.contentgroove.com/api_reference)

# Using the Developer API

- Create a new media (video or audio) in ContentGroove
  - If the video or audio is available from a URL, you can create a media by providing the `source_url` parameter. ContentGroove will fetch the video or audio from the URL if possible.
  - Or, you can create a media from a video or audio file which you upload directly to ContentGroove (see File Uploading section below).
- After the new media is created, at first it will be in a "processing" state.
  Depending on the size and duration of the video or audio file, it will take some time for processing to complete.
  - You can use ContentGroove Webhooks to be notified immediately when processing has completed. (Details coming soon.)
  - You can also use the API to read the state of the media, to determine if the media has completed processing yet.
- After the media has completed processing, you can access all of these details about the media:
  - The media name and description
  - The transcription of spoken words
  - Topics and keywords which were discussed in the transcription
  - Suggested video clips are automatically created
- In addition to the automatically created video clips, you can create more video clips from the media

# Response Codes

The following is a comprehensive list of the status codes you may receive while using the ContentGroove API:

- 200 "Ok"
  - The request was valid
- 400 "Bad Request
  - This is returned when there was a problem parsing the JSON body of your request if you supplied the 'Content-Type': 'application/json' header, or if your request is missing the 'Content-Type' header altogether
- 401 "Unauthorized"
  - This is returned when you are attempting to perform an action on a resource that you are not authorized to do
- 402 "Payment Required"
  - This is returned when you are attempting to perform an action that would push your account above a usage limit. You can view your usage at: https://app.contentgroove.com/quota_usage
- 404 "Not Found"
  - This is returned when the resource you are trying to view does not exist
- 429 "Too Many Requests"
  - This is returned when you have performed too many requests within a given period of time
- 500 "Internal Server Error"
  - This is returned when your request was valid but there was a problem on our end

# File Uploading

- Step 1: Make a GET request to the direct uploads URL endpoint (/api/v1/direct_uploads) to receive an upload URL to upload the file to and an upload id.
- Step 2: Make a PUT request with the file as the body to the upload URL received in step 1. The response will have a 200 status with no body if the upload is successful.
  ```
  curl -T /path/to/file upload_url
  ```
- Step 3: After uploading the file to the upload URL, make a POST request to the create medias endpoint (/api/v1/medias), with the upload id and optionally a name and description for the new media.
  > At this time, file uploads are limited to 5gb per file.

# Allowed media types

Video:

- Supported: Most common video formats and codecs are supported.
- Recommended: mp4

Audio:

- Supported: aac, mp3, flac, ogg, wav, and wma
- Recommended: aac

# Authentication

You can use the API Key to authenticate your API requests using any of these methods. (Replace abc123 with your actual API Key.)

- Request header `Authorization: Bearer abc123`
- Request header `X-API-KEY: abc123`
- Query parameter `api_key=abc123`
  > ⚠️ **IMPORTANT**: This API Key is intended only for use on the server side. Be sure never to use a server-side API Key in client-side (web, mobile, or otherwise) code. ⚠️

# Link to openapi.json spec

- https://api.contentgroove.com/api-docs/v1/openapi.json


### Available Operations

* [createClip](#createclip) - create clip
* [createMedia](#createmedia) - create media
* [createWebhookSubscription](#createwebhooksubscription) - create webhook subscription
* [deleteClipById](#deleteclipbyid) - delete clip
* [deleteMediaById](#deletemediabyid) - delete media
* [deleteWebhookSubscriptionById](#deletewebhooksubscriptionbyid) - delete webhook subscription
* [getClipById](#getclipbyid) - show clip
* [getClips](#getclips) - list clips
* [getMediaById](#getmediabyid) - show media
* [getMedias](#getmedias) - list medias
* [getUploadUrl](#getuploadurl) - prepare presigned upload url
* [getWebhookSubscriptionById](#getwebhooksubscriptionbyid) - show webhook subscription
* [getWebhookSubscriptions](#getwebhooksubscriptions) - list webhook subscriptions
* [updateClipById](#updateclipbyid) - update clip
* [updateMediaById](#updatemediabyid) - update media

## createClip

create clip

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateClipRequestBody;
import org.openapis.openapi.models.operations.CreateClipRequestBodyData;
import org.openapis.openapi.models.operations.CreateClipRequestBodyDataAttributes;
import org.openapis.openapi.models.operations.CreateClipResponse;
import org.openapis.openapi.models.operations.CreateClipSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateClipRequestBody req = new CreateClipRequestBody(                new CreateClipRequestBodyData(                new CreateClipRequestBodyDataAttributes(12.3, "9b9a2e82-5b47-4f59-831d-4c239824b983", "Example New Clip", 10.1);););            

            CreateClipResponse res = sdk.sdk.createClip(req, new CreateClipSecurity("provident") {{
                bearerHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.clipResponseObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMedia

create media

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.callbacks.CreateMediaMediaProcessingFinishedRequestBody;
import org.openapis.openapi.models.callbacks.CreateMediaMediaProcessingFinishedRequestBodyPayload;
import org.openapis.openapi.models.callbacks.CreateMediaMediaProcessingFinishedRequestBodyPayloadData;
import org.openapis.openapi.models.callbacks.CreateMediaMediaProcessingFinishedRequestBodyPayloadDataAttributes;
import org.openapis.openapi.models.callbacks.CreateMediaMediaProcessingFinishedRequestBodyPayloadDataRelationships;
import org.openapis.openapi.models.callbacks.CreateMediaMediaProcessingFinishedRequestBodyPayloadDataRelationshipsClips;
import org.openapis.openapi.models.callbacks.CreateMediaMediaProcessingFinishedRequestBodyPayloadDataRelationshipsClipsData;
import org.openapis.openapi.models.callbacks.CreateMediaMediaProcessingFinishedRequestBodyPayloadDataTranscription;
import org.openapis.openapi.models.callbacks.CreateMediaMediaProcessingFinishedRequestBodyPayloadDataTranscriptionData;
import org.openapis.openapi.models.callbacks.CreateMediaMediaProcessingFinishedRequestBodyPayloadIncluded1;
import org.openapis.openapi.models.callbacks.CreateMediaMediaProcessingFinishedRequestBodyPayloadIncluded1Attributes;
import org.openapis.openapi.models.callbacks.CreateMediaMediaProcessingFinishedRequestBodyPayloadIncluded1Relationships;
import org.openapis.openapi.models.callbacks.CreateMediaMediaProcessingFinishedRequestBodyPayloadIncluded1RelationshipsMedia;
import org.openapis.openapi.models.callbacks.CreateMediaMediaProcessingFinishedRequestBodyPayloadIncluded1RelationshipsMediaData;
import org.openapis.openapi.models.callbacks.CreateMediaMediaProcessingFinishedRequestBodyPayloadIncluded2;
import org.openapis.openapi.models.callbacks.CreateMediaMediaProcessingFinishedRequestBodyPayloadIncluded2Attributes;
import org.openapis.openapi.models.callbacks.CreateMediaMediaProcessingFinishedResponse;
import org.openapis.openapi.models.operations.CreateMediaRequestBody;
import org.openapis.openapi.models.operations.CreateMediaRequestBodyData;
import org.openapis.openapi.models.operations.CreateMediaRequestBodyDataAttributes;
import org.openapis.openapi.models.operations.CreateMediaResponse;
import org.openapis.openapi.models.operations.CreateMediaSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateMediaRequestBody req = new CreateMediaRequestBody(                new CreateMediaRequestBodyData(                new CreateMediaRequestBodyDataAttributes() {{
                                                description = "Video description";
                                                name = "Video name";
                                                sourceUrl = "(required if importing a video from a source url) https://archive.org/download/SF143/SF143_512kb.mp4";
                                                uploadId = "(required if uploading a local file) ey399vjdkdjf0jslcjd0wjc0ujffj3432lo23kk2o22";
                                            }};););            

            CreateMediaResponse res = sdk.sdk.createMedia(req, new CreateMediaSecurity("distinctio") {{
                bearerHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.mediaResponseObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWebhookSubscription

create webhook subscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWebhookSubscriptionRequestBody;
import org.openapis.openapi.models.operations.CreateWebhookSubscriptionRequestBodyData;
import org.openapis.openapi.models.operations.CreateWebhookSubscriptionRequestBodyDataAttributes;
import org.openapis.openapi.models.operations.CreateWebhookSubscriptionResponse;
import org.openapis.openapi.models.operations.CreateWebhookSubscriptionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateWebhookSubscriptionRequestBody req = new CreateWebhookSubscriptionRequestBody(                new CreateWebhookSubscriptionRequestBodyData(                new CreateWebhookSubscriptionRequestBodyDataAttributes("https://example.com/contentgroove_webhooks/12345") {{
                                                subscribedEvents = new String[]{{
                                                    add("media.processing_finished"),
                                                    add("media.processing_finished"),
                                                    add("media.processing_finished"),
                                                    add("media.processing_finished"),
                                                }};
                                            }};););            

            CreateWebhookSubscriptionResponse res = sdk.sdk.createWebhookSubscription(req, new CreateWebhookSubscriptionSecurity("unde") {{
                bearerHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.webhookSubscriptionResponseObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteClipById

delete clip

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteClipByIdRequest;
import org.openapis.openapi.models.operations.DeleteClipByIdResponse;
import org.openapis.openapi.models.operations.DeleteClipByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteClipByIdRequest req = new DeleteClipByIdRequest("nulla");            

            DeleteClipByIdResponse res = sdk.sdk.deleteClipById(req, new DeleteClipByIdSecurity("corrupti") {{
                bearerHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMediaById

delete media

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMediaByIdRequest;
import org.openapis.openapi.models.operations.DeleteMediaByIdResponse;
import org.openapis.openapi.models.operations.DeleteMediaByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteMediaByIdRequest req = new DeleteMediaByIdRequest("illum");            

            DeleteMediaByIdResponse res = sdk.sdk.deleteMediaById(req, new DeleteMediaByIdSecurity("vel") {{
                bearerHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWebhookSubscriptionById

delete webhook subscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWebhookSubscriptionByIdRequest;
import org.openapis.openapi.models.operations.DeleteWebhookSubscriptionByIdResponse;
import org.openapis.openapi.models.operations.DeleteWebhookSubscriptionByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWebhookSubscriptionByIdRequest req = new DeleteWebhookSubscriptionByIdRequest("error");            

            DeleteWebhookSubscriptionByIdResponse res = sdk.sdk.deleteWebhookSubscriptionById(req, new DeleteWebhookSubscriptionByIdSecurity("deserunt") {{
                bearerHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getClipById

show clip

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClipByIdRequest;
import org.openapis.openapi.models.operations.GetClipByIdResponse;
import org.openapis.openapi.models.operations.GetClipByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClipByIdRequest req = new GetClipByIdRequest("suscipit");            

            GetClipByIdResponse res = sdk.sdk.getClipById(req, new GetClipByIdSecurity("iure") {{
                bearerHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.clipResponseObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getClips

list clips

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClipsRequest;
import org.openapis.openapi.models.operations.GetClipsResponse;
import org.openapis.openapi.models.operations.GetClipsSecurity;
import org.openapis.openapi.models.operations.GetClipsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClipsRequest req = new GetClipsRequest() {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("debitis", "ipsa");
                    put("delectus", "tempora");
                }};
                page = new java.util.HashMap<String, Object>() {{
                    put("molestiae", "minus");
                    put("placeat", "voluptatum");
                }};
                sort = GetClipsSortEnum.ORIGINAL_CREATED_AT;
            }};            

            GetClipsResponse res = sdk.sdk.getClips(req, new GetClipsSecurity("excepturi") {{
                bearerHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.clipsResponseObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMediaById

show media

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMediaByIdRequest;
import org.openapis.openapi.models.operations.GetMediaByIdResponse;
import org.openapis.openapi.models.operations.GetMediaByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMediaByIdRequest req = new GetMediaByIdRequest("nisi");            

            GetMediaByIdResponse res = sdk.sdk.getMediaById(req, new GetMediaByIdSecurity("recusandae") {{
                bearerHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.mediaResponseObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMedias

list medias

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMediasRequest;
import org.openapis.openapi.models.operations.GetMediasResponse;
import org.openapis.openapi.models.operations.GetMediasSecurity;
import org.openapis.openapi.models.operations.GetMediasSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMediasRequest req = new GetMediasRequest() {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("ab", "quis");
                    put("veritatis", "deserunt");
                    put("perferendis", "ipsam");
                    put("repellendus", "sapiente");
                }};
                page = new java.util.HashMap<String, Object>() {{
                    put("odit", "at");
                    put("at", "maiores");
                    put("molestiae", "quod");
                    put("quod", "esse");
                }};
                sort = GetMediasSortEnum.MINUS_ORIGINAL_CREATED_AT;
            }};            

            GetMediasResponse res = sdk.sdk.getMedias(req, new GetMediasSecurity("porro") {{
                bearerHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.mediasResponseObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUploadUrl

prepare presigned upload url

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUploadUrlResponse;
import org.openapis.openapi.models.operations.GetUploadUrlSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUploadUrlResponse res = sdk.sdk.getUploadUrl(new GetUploadUrlSecurity("dolorum") {{
                bearerHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.directUploadResponseObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWebhookSubscriptionById

show webhook subscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebhookSubscriptionByIdRequest;
import org.openapis.openapi.models.operations.GetWebhookSubscriptionByIdResponse;
import org.openapis.openapi.models.operations.GetWebhookSubscriptionByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWebhookSubscriptionByIdRequest req = new GetWebhookSubscriptionByIdRequest("dicta");            

            GetWebhookSubscriptionByIdResponse res = sdk.sdk.getWebhookSubscriptionById(req, new GetWebhookSubscriptionByIdSecurity("nam") {{
                bearerHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.webhookSubscriptionResponseObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWebhookSubscriptions

list webhook subscriptions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebhookSubscriptionsRequest;
import org.openapis.openapi.models.operations.GetWebhookSubscriptionsResponse;
import org.openapis.openapi.models.operations.GetWebhookSubscriptionsSecurity;
import org.openapis.openapi.models.operations.GetWebhookSubscriptionsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWebhookSubscriptionsRequest req = new GetWebhookSubscriptionsRequest() {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("occaecati", "fugit");
                    put("deleniti", "hic");
                    put("optio", "totam");
                }};
                sort = GetWebhookSubscriptionsSortEnum.CREATED_AT;
            }};            

            GetWebhookSubscriptionsResponse res = sdk.sdk.getWebhookSubscriptions(req, new GetWebhookSubscriptionsSecurity("commodi") {{
                bearerHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.webhookSubscriptionsResponseObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateClipById

update clip

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateClipByIdRequest;
import org.openapis.openapi.models.operations.UpdateClipByIdRequestBody;
import org.openapis.openapi.models.operations.UpdateClipByIdRequestBodyData;
import org.openapis.openapi.models.operations.UpdateClipByIdRequestBodyDataAttributes;
import org.openapis.openapi.models.operations.UpdateClipByIdResponse;
import org.openapis.openapi.models.operations.UpdateClipByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateClipByIdRequest req = new UpdateClipByIdRequest(                new UpdateClipByIdRequestBody(                new UpdateClipByIdRequestBodyData(                new UpdateClipByIdRequestBodyDataAttributes() {{
                                                                endTime = 12.3;
                                                                name = "Example Clip";
                                                                startTime = 10.1;
                                                            }};););, "molestiae");            

            UpdateClipByIdResponse res = sdk.sdk.updateClipById(req, new UpdateClipByIdSecurity("modi") {{
                bearerHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.clipResponseObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMediaById

update media

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMediaByIdRequest;
import org.openapis.openapi.models.operations.UpdateMediaByIdRequestBody;
import org.openapis.openapi.models.operations.UpdateMediaByIdRequestBodyData;
import org.openapis.openapi.models.operations.UpdateMediaByIdRequestBodyDataAttributes;
import org.openapis.openapi.models.operations.UpdateMediaByIdResponse;
import org.openapis.openapi.models.operations.UpdateMediaByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateMediaByIdRequest req = new UpdateMediaByIdRequest(                new UpdateMediaByIdRequestBody(                new UpdateMediaByIdRequestBodyData(                new UpdateMediaByIdRequestBodyDataAttributes() {{
                                                                description = "Writing by Sam Denby; Research by Sam Denby and Tristan Purdy";
                                                                name = "Why Electric Planes are Inevitably Coming";
                                                            }};););, "qui");            

            UpdateMediaByIdResponse res = sdk.sdk.updateMediaById(req, new UpdateMediaByIdSecurity("impedit") {{
                bearerHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.mediaResponseObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
