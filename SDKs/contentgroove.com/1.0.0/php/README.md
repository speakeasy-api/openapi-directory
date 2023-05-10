# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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

    $response = $sdk->createClip($request, $requestSecurity);

    if ($response->clipResponseObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createClip](docs/sdk/README.md#createclip) - create clip
* [createMedia](docs/sdk/README.md#createmedia) - create media
* [createWebhookSubscription](docs/sdk/README.md#createwebhooksubscription) - create webhook subscription
* [deleteClipById](docs/sdk/README.md#deleteclipbyid) - delete clip
* [deleteMediaById](docs/sdk/README.md#deletemediabyid) - delete media
* [deleteWebhookSubscriptionById](docs/sdk/README.md#deletewebhooksubscriptionbyid) - delete webhook subscription
* [getClipById](docs/sdk/README.md#getclipbyid) - show clip
* [getClips](docs/sdk/README.md#getclips) - list clips
* [getMediaById](docs/sdk/README.md#getmediabyid) - show media
* [getMedias](docs/sdk/README.md#getmedias) - list medias
* [getUploadUrl](docs/sdk/README.md#getuploadurl) - prepare presigned upload url
* [getWebhookSubscriptionById](docs/sdk/README.md#getwebhooksubscriptionbyid) - show webhook subscription
* [getWebhookSubscriptions](docs/sdk/README.md#getwebhooksubscriptions) - list webhook subscriptions
* [updateClipById](docs/sdk/README.md#updateclipbyid) - update clip
* [updateMediaById](docs/sdk/README.md#updatemediabyid) - update media
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
