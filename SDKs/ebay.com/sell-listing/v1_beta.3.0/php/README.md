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
use \OpenAPI\OpenAPI\Models\Operations\CreateItemDraftRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItemDraft;
use \OpenAPI\OpenAPI\Models\Shared\Charity;
use \OpenAPI\OpenAPI\Models\Shared\PricingSummary;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\Product;
use \OpenAPI\OpenAPI\Models\Shared\Aspect;
use \OpenAPI\OpenAPI\Models\Operations\CreateItemDraftSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateItemDraftRequest();
    $request->contentLanguage = 'corrupti';
    $request->itemDraft = new ItemDraft();
    $request->itemDraft->categoryId = 'provident';
    $request->itemDraft->charity = new Charity();
    $request->itemDraft->charity->charityId = 'distinctio';
    $request->itemDraft->charity->donationPercentage = 'quibusdam';
    $request->itemDraft->condition = 'unde';
    $request->itemDraft->format = 'nulla';
    $request->itemDraft->pricingSummary = new PricingSummary();
    $request->itemDraft->pricingSummary->auctionReservePrice = new Amount();
    $request->itemDraft->pricingSummary->auctionReservePrice->currency = 'corrupti';
    $request->itemDraft->pricingSummary->auctionReservePrice->value = 'illum';
    $request->itemDraft->pricingSummary->auctionStartPrice = new Amount();
    $request->itemDraft->pricingSummary->auctionStartPrice->currency = 'vel';
    $request->itemDraft->pricingSummary->auctionStartPrice->value = 'error';
    $request->itemDraft->pricingSummary->price = new Amount();
    $request->itemDraft->pricingSummary->price->currency = 'deserunt';
    $request->itemDraft->pricingSummary->price->value = 'suscipit';
    $request->itemDraft->product = new Product();
    $request->itemDraft->product->aspects = [
        new Aspect(),
        new Aspect(),
    ];
    $request->itemDraft->product->brand = 'magnam';
    $request->itemDraft->product->description = 'debitis';
    $request->itemDraft->product->epid = 'ipsa';
    $request->itemDraft->product->imageUrls = [
        'tempora',
        'suscipit',
        'molestiae',
        'minus',
    ];
    $request->itemDraft->product->title = 'Dr.';
    $request->xEbayCMarketplaceId = 'voluptatum';

    $requestSecurity = new CreateItemDraftSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itemDraft->createItemDraft($request, $requestSecurity);

    if ($response->itemDraftResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [itemDraft](docs/itemdraft/README.md)

* [createItemDraft](docs/itemdraft/README.md#createitemdraft) - This call gives Partners the ability to create an eBay draft of a item for their seller using information from their site. This lets the Partner increase the exposure of items on their site and leverage the eBay user listing experience seamlessly. This experience provides guidance on pricing, aspects, etc. and recommendations that help create a listing that is complete and improves the exposure of the listing in search results. After the listing draft is created, the seller logs into their eBay account and uses the listing experience to finish the listing and publish the item on eBay.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
