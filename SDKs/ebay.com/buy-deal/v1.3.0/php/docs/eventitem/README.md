# eventItem

### Available Operations

* [getEventItems](#geteventitems) - This method returns a paginated set of event items. The result set contains all event items associated with the specified search criteria and marketplace ID. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.

## getEventItems

This method returns a paginated set of event items. The result set contains all event items associated with the specified search criteria and marketplace ID. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventItemsRequest();
    $request->xEbayCMarketplaceId = 'tempora';
    $request->categoryIds = 'suscipit';
    $request->deliveryCountry = 'molestiae';
    $request->eventIds = 'minus';
    $request->limit = 'placeat';
    $request->offset = 'voluptatum';

    $requestSecurity = new GetEventItemsSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->eventItem->getEventItems($request, $requestSecurity);

    if ($response->eventItemSearchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
