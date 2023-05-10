# offer

### Available Operations

* [findEligibleItems](#findeligibleitems) - This method evaluates a seller's current listings and returns the set of IDs that are eligible for a seller-initiated discount offer to a buyer. A listing ID is returned only when one or more buyers have shown an &quot;interest&quot; in the listing. If any buyers have shown interest in a listing, the seller can initiate a &quot;negotiation&quot; with them by calling sendOfferToInterestedBuyers, which sends all interested buyers a message that offers the listing at a discount. For details about how to create seller offers to buyers, see Sending offers to buyers.
* [sendOfferToInterestedBuyers](#sendoffertointerestedbuyers) - This method sends eligible buyers offers to purchase items in a listing at a discount. When a buyer has shown interest in a listing, they become &quot;eligible&quot; to receive a seller-initiated offer to purchase the item(s). Sellers use findEligibleItems to get the set of listings that have interested buyers. If a listing has interested buyers, sellers can use this method (sendOfferToInterestedBuyers) to send an offer to the buyers who are interested in the listing. The offer gives buyers the ability to purchase the associated listings at a discounted price. For details about how to create seller offers to buyers, see Sending offers to buyers.

## findEligibleItems

This method evaluates a seller's current listings and returns the set of IDs that are eligible for a seller-initiated discount offer to a buyer. A listing ID is returned only when one or more buyers have shown an &quot;interest&quot; in the listing. If any buyers have shown interest in a listing, the seller can initiate a &quot;negotiation&quot; with them by calling sendOfferToInterestedBuyers, which sends all interested buyers a message that offers the listing at a discount. For details about how to create seller offers to buyers, see Sending offers to buyers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindEligibleItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindEligibleItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindEligibleItemsRequest();
    $request->xEbayCMarketplaceId = 'quibusdam';
    $request->limit = 'unde';
    $request->offset = 'nulla';

    $requestSecurity = new FindEligibleItemsSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->offer->findEligibleItems($request, $requestSecurity);

    if ($response->pagedEligibleItemCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendOfferToInterestedBuyers

This method sends eligible buyers offers to purchase items in a listing at a discount. When a buyer has shown interest in a listing, they become &quot;eligible&quot; to receive a seller-initiated offer to purchase the item(s). Sellers use findEligibleItems to get the set of listings that have interested buyers. If a listing has interested buyers, sellers can use this method (sendOfferToInterestedBuyers) to send an offer to the buyers who are interested in the listing. The offer gives buyers the ability to purchase the associated listings at a discounted price. For details about how to create seller offers to buyers, see Sending offers to buyers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SendOfferToInterestedBuyersRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateOffersRequest;
use \OpenAPI\OpenAPI\Models\Shared\TimeDuration;
use \OpenAPI\OpenAPI\Models\Shared\OfferedItem;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Operations\SendOfferToInterestedBuyersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendOfferToInterestedBuyersRequest();
    $request->createOffersRequest = new CreateOffersRequest();
    $request->createOffersRequest->allowCounterOffer = false;
    $request->createOffersRequest->message = 'corrupti';
    $request->createOffersRequest->offerDuration = new TimeDuration();
    $request->createOffersRequest->offerDuration->unit = 'illum';
    $request->createOffersRequest->offerDuration->value = 423655;
    $request->createOffersRequest->offeredItems = [
        new OfferedItem(),
        new OfferedItem(),
        new OfferedItem(),
    ];
    $request->xEbayCMarketplaceId = 'deserunt';

    $requestSecurity = new SendOfferToInterestedBuyersSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->offer->sendOfferToInterestedBuyers($request, $requestSecurity);

    if ($response->sendOfferToInterestedBuyersCollectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
