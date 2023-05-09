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

* [CreateClip](#createclip) - create clip
* [CreateMedia](#createmedia) - create media
* [CreateWebhookSubscription](#createwebhooksubscription) - create webhook subscription
* [DeleteClipByID](#deleteclipbyid) - delete clip
* [DeleteMediaByID](#deletemediabyid) - delete media
* [DeleteWebhookSubscriptionByID](#deletewebhooksubscriptionbyid) - delete webhook subscription
* [GetClipByID](#getclipbyid) - show clip
* [GetClips](#getclips) - list clips
* [GetMediaByID](#getmediabyid) - show media
* [GetMedias](#getmedias) - list medias
* [GetUploadURL](#getuploadurl) - prepare presigned upload url
* [GetWebhookSubscriptionByID](#getwebhooksubscriptionbyid) - show webhook subscription
* [GetWebhookSubscriptions](#getwebhooksubscriptions) - list webhook subscriptions
* [UpdateClipByID](#updateclipbyid) - update clip
* [UpdateMediaByID](#updatemediabyid) - update media

## CreateClip

create clip

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateClip(ctx, operations.CreateClipRequestBody{
        Data: operations.CreateClipRequestBodyData{
            Attributes: operations.CreateClipRequestBodyDataAttributes{
                EndTime: 12.3,
                MediaID: "9b9a2e82-5b47-4f59-831d-4c239824b983",
                Name: "Example New Clip",
                StartTime: 10.1,
            },
        },
    }, operations.CreateClipSecurity{
        BearerHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClipResponseObject != nil {
        // handle response
    }
}
```

## CreateMedia

create media

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/callbacks"
	"net/http"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateMedia(ctx, operations.CreateMediaRequestBody{
        Data: operations.CreateMediaRequestBodyData{
            Attributes: operations.CreateMediaRequestBodyDataAttributes{
                Description: sdk.String("Video description"),
                Name: sdk.String("Video name"),
                SourceURL: sdk.String("(required if importing a video from a source url) https://archive.org/download/SF143/SF143_512kb.mp4"),
                UploadID: sdk.String("(required if uploading a local file) ey399vjdkdjf0jslcjd0wjc0ujffj3432lo23kk2o22"),
            },
        },
    }, operations.CreateMediaSecurity{
        BearerHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaResponseObject != nil {
        // handle response
    }
}
```

## CreateWebhookSubscription

create webhook subscription

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateWebhookSubscription(ctx, operations.CreateWebhookSubscriptionRequestBody{
        Data: operations.CreateWebhookSubscriptionRequestBodyData{
            Attributes: operations.CreateWebhookSubscriptionRequestBodyDataAttributes{
                SubscribedEvents: []string{
                    "media.processing_finished",
                    "media.processing_finished",
                    "media.processing_finished",
                },
                URL: "https://example.com/contentgroove_webhooks/12345",
            },
        },
    }, operations.CreateWebhookSubscriptionSecurity{
        BearerHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookSubscriptionResponseObject != nil {
        // handle response
    }
}
```

## DeleteClipByID

delete clip

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteClipByID(ctx, operations.DeleteClipByIDRequest{
        ID: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
    }, operations.DeleteClipByIDSecurity{
        BearerHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteMediaByID

delete media

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteMediaByID(ctx, operations.DeleteMediaByIDRequest{
        ID: "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
    }, operations.DeleteMediaByIDSecurity{
        BearerHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteWebhookSubscriptionByID

delete webhook subscription

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteWebhookSubscriptionByID(ctx, operations.DeleteWebhookSubscriptionByIDRequest{
        ID: "b7392059-2939-46fe-a759-6eb10faaa235",
    }, operations.DeleteWebhookSubscriptionByIDSecurity{
        BearerHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetClipByID

show clip

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetClipByID(ctx, operations.GetClipByIDRequest{
        ID: "2c595590-7aff-41a3-a2fa-9467739251aa",
    }, operations.GetClipByIDSecurity{
        BearerHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClipResponseObject != nil {
        // handle response
    }
}
```

## GetClips

list clips

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetClips(ctx, operations.GetClipsRequest{
        Filter: map[string]interface{}{
            "odit": "quo",
            "sequi": "tenetur",
        },
        Page: map[string]interface{}{
            "id": "possimus",
            "aut": "quasi",
        },
        Sort: operations.GetClipsSortEnumMinusOriginalCreatedAt.ToPointer(),
    }, operations.GetClipsSecurity{
        BearerHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClipsResponseObject != nil {
        // handle response
    }
}
```

## GetMediaByID

show media

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMediaByID(ctx, operations.GetMediaByIDRequest{
        ID: "da1ffe78-f097-4b00-b4f1-5471b5e6e13b",
    }, operations.GetMediaByIDSecurity{
        BearerHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaResponseObject != nil {
        // handle response
    }
}
```

## GetMedias

list medias

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMedias(ctx, operations.GetMediasRequest{
        Filter: map[string]interface{}{
            "excepturi": "pariatur",
            "modi": "praesentium",
            "rem": "voluptates",
        },
        Page: map[string]interface{}{
            "repudiandae": "sint",
        },
        Sort: operations.GetMediasSortEnumCreatedAt.ToPointer(),
    }, operations.GetMediasSecurity{
        BearerHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediasResponseObject != nil {
        // handle response
    }
}
```

## GetUploadURL

prepare presigned upload url

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUploadURL(ctx, operations.GetUploadURLSecurity{
        BearerHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DirectUploadResponseObject != nil {
        // handle response
    }
}
```

## GetWebhookSubscriptionByID

show webhook subscription

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetWebhookSubscriptionByID(ctx, operations.GetWebhookSubscriptionByIDRequest{
        ID: "e450ad2a-bd44-4269-802d-502a94bb4f63",
    }, operations.GetWebhookSubscriptionByIDSecurity{
        BearerHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookSubscriptionResponseObject != nil {
        // handle response
    }
}
```

## GetWebhookSubscriptions

list webhook subscriptions

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetWebhookSubscriptions(ctx, operations.GetWebhookSubscriptionsRequest{
        Filter: map[string]interface{}{
            "sint": "aliquid",
            "provident": "necessitatibus",
            "sint": "officia",
            "dolor": "debitis",
        },
        Sort: operations.GetWebhookSubscriptionsSortEnumMinusName.ToPointer(),
    }, operations.GetWebhookSubscriptionsSecurity{
        BearerHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookSubscriptionsResponseObject != nil {
        // handle response
    }
}
```

## UpdateClipByID

update clip

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateClipByID(ctx, operations.UpdateClipByIDRequest{
        RequestBody: operations.UpdateClipByIDRequestBody{
            Data: operations.UpdateClipByIDRequestBodyData{
                Attributes: operations.UpdateClipByIDRequestBodyDataAttributes{
                    EndTime: sdk.Float64(12.3),
                    Name: sdk.String("Example Clip"),
                    StartTime: sdk.Float64(10.1),
                },
            },
        },
        ID: "a77dfb14-cd66-4ae3-95ef-b9ba88f3a669",
    }, operations.UpdateClipByIDSecurity{
        BearerHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClipResponseObject != nil {
        // handle response
    }
}
```

## UpdateMediaByID

update media

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateMediaByID(ctx, operations.UpdateMediaByIDRequest{
        RequestBody: operations.UpdateMediaByIDRequestBody{
            Data: operations.UpdateMediaByIDRequestBodyData{
                Attributes: operations.UpdateMediaByIDRequestBodyDataAttributes{
                    Description: sdk.String("Writing by Sam Denby; Research by Sam Denby and Tristan Purdy"),
                    Name: sdk.String("Why Electric Planes are Inevitably Coming"),
                },
            },
        },
        ID: "97074ba4-469b-46e2-9419-59890afa563e",
    }, operations.UpdateMediaByIDSecurity{
        BearerHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaResponseObject != nil {
        // handle response
    }
}
```
