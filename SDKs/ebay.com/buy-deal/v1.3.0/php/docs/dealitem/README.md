# dealItem

### Available Operations

* [getDealItems](#getdealitems) - This method retrieves a paginated set of deal items. The result set contains all deal items associated with the specified search criteria and marketplace ID. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.

## getDealItems

This method retrieves a paginated set of deal items. The result set contains all deal items associated with the specified search criteria and marketplace ID. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDealItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDealItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDealItemsRequest();
    $request->xEbayCMarketplaceId = 'corrupti';
    $request->categoryIds = 'illum';
    $request->commissionable = 'vel';
    $request->deliveryCountry = 'error';
    $request->limit = 'deserunt';
    $request->offset = 'suscipit';

    $requestSecurity = new GetDealItemsSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->dealItem->getDealItems($request, $requestSecurity);

    if ($response->dealItemSearchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
