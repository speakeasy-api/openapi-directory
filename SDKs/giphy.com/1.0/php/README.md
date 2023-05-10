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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGifByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGifByIdRequest();
    $request->gifId = 548814;

    $response = $sdk->gifs->getGifById($request);

    if ($response->getGifById200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [gifs](docs/gifs/README.md)

* [getGifById](docs/gifs/README.md#getgifbyid) - Get GIF by Id
* [getGifsById](docs/gifs/README.md#getgifsbyid) - Get GIFs by ID
* [randomGif](docs/gifs/README.md#randomgif) - Random GIF
* [searchGifs](docs/gifs/README.md#searchgifs) - Search GIFs
* [translateGif](docs/gifs/README.md#translategif) - Translate phrase to GIF
* [trendingGifs](docs/gifs/README.md#trendinggifs) - Trending GIFs

### [stickers](docs/stickers/README.md)

* [randomSticker](docs/stickers/README.md#randomsticker) - Random Sticker
* [searchStickers](docs/stickers/README.md#searchstickers) - Search Stickers
* [translateSticker](docs/stickers/README.md#translatesticker) - Translate phrase to Sticker
* [trendingStickers](docs/stickers/README.md#trendingstickers) - Trending Stickers
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
