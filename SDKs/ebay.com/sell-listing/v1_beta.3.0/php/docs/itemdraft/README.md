# itemDraft

### Available Operations

* [createItemDraft](#createitemdraft) - This call gives Partners the ability to create an eBay draft of a item for their seller using information from their site. This lets the Partner increase the exposure of items on their site and leverage the eBay user listing experience seamlessly. This experience provides guidance on pricing, aspects, etc. and recommendations that help create a listing that is complete and improves the exposure of the listing in search results. After the listing draft is created, the seller logs into their eBay account and uses the listing experience to finish the listing and publish the item on eBay.

## createItemDraft

This call gives Partners the ability to create an eBay draft of a item for their seller using information from their site. This lets the Partner increase the exposure of items on their site and leverage the eBay user listing experience seamlessly. This experience provides guidance on pricing, aspects, etc. and recommendations that help create a listing that is complete and improves the exposure of the listing in search results. After the listing draft is created, the seller logs into their eBay account and uses the listing experience to finish the listing and publish the item on eBay.

### Example Usage

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
    $request->contentLanguage = 'iusto';
    $request->itemDraft = new ItemDraft();
    $request->itemDraft->categoryId = 'excepturi';
    $request->itemDraft->charity = new Charity();
    $request->itemDraft->charity->charityId = 'nisi';
    $request->itemDraft->charity->donationPercentage = 'recusandae';
    $request->itemDraft->condition = 'temporibus';
    $request->itemDraft->format = 'ab';
    $request->itemDraft->pricingSummary = new PricingSummary();
    $request->itemDraft->pricingSummary->auctionReservePrice = new Amount();
    $request->itemDraft->pricingSummary->auctionReservePrice->currency = 'quis';
    $request->itemDraft->pricingSummary->auctionReservePrice->value = 'veritatis';
    $request->itemDraft->pricingSummary->auctionStartPrice = new Amount();
    $request->itemDraft->pricingSummary->auctionStartPrice->currency = 'deserunt';
    $request->itemDraft->pricingSummary->auctionStartPrice->value = 'perferendis';
    $request->itemDraft->pricingSummary->price = new Amount();
    $request->itemDraft->pricingSummary->price->currency = 'ipsam';
    $request->itemDraft->pricingSummary->price->value = 'repellendus';
    $request->itemDraft->product = new Product();
    $request->itemDraft->product->aspects = [
        new Aspect(),
        new Aspect(),
        new Aspect(),
        new Aspect(),
    ];
    $request->itemDraft->product->brand = 'quo';
    $request->itemDraft->product->description = 'odit';
    $request->itemDraft->product->epid = 'at';
    $request->itemDraft->product->imageUrls = [
        'maiores',
        'molestiae',
        'quod',
        'quod',
    ];
    $request->itemDraft->product->title = 'Ms.';
    $request->xEbayCMarketplaceId = 'totam';

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
