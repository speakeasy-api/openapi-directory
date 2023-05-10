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
use \OpenAPI\OpenAPI\Models\Operations\PostV1OrderFeedbackRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostV1OrderFeedbackActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostV1OrderFeedbackFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV1OrderFeedbackRequest();
    $request->action = PostV1OrderFeedbackActionEnum::REJECT;
    $request->format = PostV1OrderFeedbackFormatEnum::XML;
    $request->id = 'bd9d8d69-a674-4e0f-867c-c8796ed151a0';
    $request->key = 'ipsam';
    $request->notes = 'repellendus';

    $response = $sdk->postV1OrderFeedback($request);

    if ($response->postV1OrderFeedback200ApplicationJSONString !== null) {
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

* [postV1OrderFeedback](docs/sdk/README.md#postv1orderfeedback) - Feedback the status of an order transaction.
* [postV1OrderScreen](docs/sdk/README.md#postv1orderscreen) - Screen order for payment fraud.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
