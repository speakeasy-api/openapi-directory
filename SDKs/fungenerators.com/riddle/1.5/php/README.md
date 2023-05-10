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
use \OpenAPI\OpenAPI\Models\Operations\DeleteRiddleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRiddleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRiddleRequest();
    $request->id = 'corrupti';

    $requestSecurity = new DeleteRiddleSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->privateRiddles->deleteRiddle($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [privateRiddles](docs/privateriddles/README.md)

* [deleteRiddle](docs/privateriddles/README.md#deleteriddle) - Create a random Riddle entry.
* [getRiddle](docs/privateriddles/README.md#getriddle) - Get a Riddle entry for a given id. Retrieves a riddle question and answer based on the id.
* [postRiddle](docs/privateriddles/README.md#postriddle) - Create a random Riddle entry. Same as 'PUT' but can be used when some of the client libraries don't support 'PUT'.
* [putRiddle](docs/privateriddles/README.md#putriddle) - Create a random Riddle entry.

### [randomRiddle](docs/randomriddle/README.md)

* [getRiddleRandom](docs/randomriddle/README.md#getriddlerandom) - Get a random riddle for a given category(optional)
* [getRiddleSearch](docs/randomriddle/README.md#getriddlesearch) - Search for random riddle which has the text in the query, for a given category(optional).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
