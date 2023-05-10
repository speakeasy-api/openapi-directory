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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateClipRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateClipRequestBodyData;
use \OpenAPI\OpenAPI\Models\Operations\CreateClipRequestBodyDataAttributes;
use \OpenAPI\OpenAPI\Models\Operations\CreateClipSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateClipRequestBody();
    $request->data = new CreateClipRequestBodyData();
    $request->data->attributes = new CreateClipRequestBodyDataAttributes();
    $request->data->attributes->endTime = 12.3;
    $request->data->attributes->mediaId = '9b9a2e82-5b47-4f59-831d-4c239824b983';
    $request->data->attributes->name = 'Example New Clip';
    $request->data->attributes->startTime = 10.1;

    $requestSecurity = new CreateClipSecurity();
    $requestSecurity->bearerHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->createClip($request, $requestSecurity);

    if ($response->clipResponseObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMedia

create media

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateMediaRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateMediaRequestBodyData;
use \OpenAPI\OpenAPI\Models\Operations\CreateMediaRequestBodyDataAttributes;
use \OpenAPI\OpenAPI\Models\Operations\CreateMediaSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMediaRequestBody();
    $request->data = new CreateMediaRequestBodyData();
    $request->data->attributes = new CreateMediaRequestBodyDataAttributes();
    $request->data->attributes->description = 'Video description';
    $request->data->attributes->name = 'Video name';
    $request->data->attributes->sourceUrl = '(required if importing a video from a source url) https://archive.org/download/SF143/SF143_512kb.mp4';
    $request->data->attributes->uploadId = '(required if uploading a local file) ey399vjdkdjf0jslcjd0wjc0ujffj3432lo23kk2o22';

    $requestSecurity = new CreateMediaSecurity();
    $requestSecurity->bearerHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->createMedia($request, $requestSecurity);

    if ($response->mediaResponseObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWebhookSubscription

create webhook subscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebhookSubscriptionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebhookSubscriptionRequestBodyData;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebhookSubscriptionRequestBodyDataAttributes;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebhookSubscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWebhookSubscriptionRequestBody();
    $request->data = new CreateWebhookSubscriptionRequestBodyData();
    $request->data->attributes = new CreateWebhookSubscriptionRequestBodyDataAttributes();
    $request->data->attributes->subscribedEvents = [
        'media.processing_finished',
        'media.processing_finished',
        'media.processing_finished',
    ];
    $request->data->attributes->url = 'https://example.com/contentgroove_webhooks/12345';

    $requestSecurity = new CreateWebhookSubscriptionSecurity();
    $requestSecurity->bearerHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->createWebhookSubscription($request, $requestSecurity);

    if ($response->webhookSubscriptionResponseObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteClipById

delete clip

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteClipByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteClipByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteClipByIdRequest();
    $request->id = '9bd9d8d6-9a67-44e0-b467-cc8796ed151a';

    $requestSecurity = new DeleteClipByIdSecurity();
    $requestSecurity->bearerHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->deleteClipById($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMediaById

delete media

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMediaByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMediaByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMediaByIdRequest();
    $request->id = '05dfc2dd-f7cc-478c-a1ba-928fc816742c';

    $requestSecurity = new DeleteMediaByIdSecurity();
    $requestSecurity->bearerHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->deleteMediaById($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWebhookSubscriptionById

delete webhook subscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhookSubscriptionByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhookSubscriptionByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWebhookSubscriptionByIdRequest();
    $request->id = 'b7392059-2939-46fe-a759-6eb10faaa235';

    $requestSecurity = new DeleteWebhookSubscriptionByIdSecurity();
    $requestSecurity->bearerHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->deleteWebhookSubscriptionById($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getClipById

show clip

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClipByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetClipByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClipByIdRequest();
    $request->id = '2c595590-7aff-41a3-a2fa-9467739251aa';

    $requestSecurity = new GetClipByIdSecurity();
    $requestSecurity->bearerHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getClipById($request, $requestSecurity);

    if ($response->clipResponseObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getClips

list clips

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClipsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetClipsSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetClipsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClipsRequest();
    $request->filter = [
        'odit' => 'quo',
        'sequi' => 'tenetur',
    ];
    $request->page = [
        'id' => 'possimus',
        'aut' => 'quasi',
    ];
    $request->sort = GetClipsSortEnum::MINUS_ORIGINAL_CREATED_AT;

    $requestSecurity = new GetClipsSecurity();
    $requestSecurity->bearerHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getClips($request, $requestSecurity);

    if ($response->clipsResponseObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMediaById

show media

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMediaByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMediaByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMediaByIdRequest();
    $request->id = 'da1ffe78-f097-4b00-b4f1-5471b5e6e13b';

    $requestSecurity = new GetMediaByIdSecurity();
    $requestSecurity->bearerHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getMediaById($request, $requestSecurity);

    if ($response->mediaResponseObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMedias

list medias

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMediasRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMediasSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMediasSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMediasRequest();
    $request->filter = [
        'excepturi' => 'pariatur',
        'modi' => 'praesentium',
        'rem' => 'voluptates',
    ];
    $request->page = [
        'repudiandae' => 'sint',
    ];
    $request->sort = GetMediasSortEnum::CREATED_AT;

    $requestSecurity = new GetMediasSecurity();
    $requestSecurity->bearerHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getMedias($request, $requestSecurity);

    if ($response->mediasResponseObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUploadUrl

prepare presigned upload url

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUploadUrlSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetUploadUrlSecurity();
    $requestSecurity->bearerHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getUploadUrl($requestSecurity);

    if ($response->directUploadResponseObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebhookSubscriptionById

show webhook subscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhookSubscriptionByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhookSubscriptionByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWebhookSubscriptionByIdRequest();
    $request->id = 'e450ad2a-bd44-4269-802d-502a94bb4f63';

    $requestSecurity = new GetWebhookSubscriptionByIdSecurity();
    $requestSecurity->bearerHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getWebhookSubscriptionById($request, $requestSecurity);

    if ($response->webhookSubscriptionResponseObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebhookSubscriptions

list webhook subscriptions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhookSubscriptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhookSubscriptionsSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhookSubscriptionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWebhookSubscriptionsRequest();
    $request->filter = [
        'sint' => 'aliquid',
        'provident' => 'necessitatibus',
        'sint' => 'officia',
        'dolor' => 'debitis',
    ];
    $request->sort = GetWebhookSubscriptionsSortEnum::MINUS_NAME;

    $requestSecurity = new GetWebhookSubscriptionsSecurity();
    $requestSecurity->bearerHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getWebhookSubscriptions($request, $requestSecurity);

    if ($response->webhookSubscriptionsResponseObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateClipById

update clip

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClipByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClipByIdRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClipByIdRequestBodyData;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClipByIdRequestBodyDataAttributes;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClipByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateClipByIdRequest();
    $request->requestBody = new UpdateClipByIdRequestBody();
    $request->requestBody->data = new UpdateClipByIdRequestBodyData();
    $request->requestBody->data->attributes = new UpdateClipByIdRequestBodyDataAttributes();
    $request->requestBody->data->attributes->endTime = 12.3;
    $request->requestBody->data->attributes->name = 'Example Clip';
    $request->requestBody->data->attributes->startTime = 10.1;
    $request->id = 'a77dfb14-cd66-4ae3-95ef-b9ba88f3a669';

    $requestSecurity = new UpdateClipByIdSecurity();
    $requestSecurity->bearerHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->updateClipById($request, $requestSecurity);

    if ($response->clipResponseObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMediaById

update media

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMediaByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMediaByIdRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMediaByIdRequestBodyData;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMediaByIdRequestBodyDataAttributes;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMediaByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMediaByIdRequest();
    $request->requestBody = new UpdateMediaByIdRequestBody();
    $request->requestBody->data = new UpdateMediaByIdRequestBodyData();
    $request->requestBody->data->attributes = new UpdateMediaByIdRequestBodyDataAttributes();
    $request->requestBody->data->attributes->description = 'Writing by Sam Denby; Research by Sam Denby and Tristan Purdy';
    $request->requestBody->data->attributes->name = 'Why Electric Planes are Inevitably Coming';
    $request->id = '97074ba4-469b-46e2-9419-59890afa563e';

    $requestSecurity = new UpdateMediaByIdSecurity();
    $requestSecurity->bearerHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->updateMediaById($request, $requestSecurity);

    if ($response->mediaResponseObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
