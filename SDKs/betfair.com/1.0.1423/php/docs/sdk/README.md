# SDK

## Overview

API to receive streamed updates. This is an ssl socket connection of CRLF delimited json messages (see RequestMessage & ResponseMessage)

### Available Operations

* [postRequest](#postrequest) - This is a socket protocol delimited by CRLF (not http)

## postRequest

This is a socket protocol delimited by CRLF (not http)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AllRequestTypesExample;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationMessage;
use \OpenAPI\OpenAPI\Models\Shared\HeartbeatMessage;
use \OpenAPI\OpenAPI\Models\Shared\MarketSubscriptionMessage;
use \OpenAPI\OpenAPI\Models\Shared\MarketDataFilter;
use \OpenAPI\OpenAPI\Models\Shared\MarketDataFilterFieldsEnum;
use \OpenAPI\OpenAPI\Models\Shared\MarketFilter;
use \OpenAPI\OpenAPI\Models\Shared\MarketFilterBettingTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AllRequestTypesExampleOpTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderSubscriptionMessage;
use \OpenAPI\OpenAPI\Models\Shared\OrderFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AllRequestTypesExample();
    $request->authentication = new AuthenticationMessage();
    $request->authentication->appKey = 'optio';
    $request->authentication->id = 521848;
    $request->authentication->op = 'beatae';
    $request->authentication->session = 'commodi';
    $request->heartbeat = new HeartbeatMessage();
    $request->heartbeat->id = 473600;
    $request->heartbeat->op = 'modi';
    $request->marketSubscription = new MarketSubscriptionMessage();
    $request->marketSubscription->clk = 'qui';
    $request->marketSubscription->conflateMs = 774234;
    $request->marketSubscription->heartbeatMs = 736918;
    $request->marketSubscription->id = 456150;
    $request->marketSubscription->initialClk = 'ipsum';
    $request->marketSubscription->marketDataFilter = new MarketDataFilter();
    $request->marketSubscription->marketDataFilter->fields = [
        MarketDataFilterFieldsEnum::EX_BEST_OFFERS,
        MarketDataFilterFieldsEnum::EX_BEST_OFFERS_DISP,
        MarketDataFilterFieldsEnum::EX_ALL_OFFERS,
    ];
    $request->marketSubscription->marketDataFilter->ladderLevels = 617636;
    $request->marketSubscription->marketFilter = new MarketFilter();
    $request->marketSubscription->marketFilter->bettingTypes = [
        MarketFilterBettingTypesEnum::ASIAN_HANDICAP_DOUBLE_LINE,
    ];
    $request->marketSubscription->marketFilter->bspMarket = false;
    $request->marketSubscription->marketFilter->countryCodes = [
        'natus',
    ];
    $request->marketSubscription->marketFilter->eventIds = [
        'hic',
        'saepe',
    ];
    $request->marketSubscription->marketFilter->eventTypeIds = [
        'in',
        'corporis',
        'iste',
    ];
    $request->marketSubscription->marketFilter->marketIds = [
        'saepe',
        'quidem',
    ];
    $request->marketSubscription->marketFilter->marketTypes = [
        'ipsa',
    ];
    $request->marketSubscription->marketFilter->raceTypes = [
        'est',
        'mollitia',
        'laborum',
        'dolores',
    ];
    $request->marketSubscription->marketFilter->turnInPlayEnabled = false;
    $request->marketSubscription->marketFilter->venues = [
        'corporis',
    ];
    $request->marketSubscription->op = 'explicabo';
    $request->marketSubscription->segmentationEnabled = false;
    $request->opTypes = AllRequestTypesExampleOpTypesEnum::ORDER_SUBSCRIPTION;
    $request->orderSubscriptionMessage = new OrderSubscriptionMessage();
    $request->orderSubscriptionMessage->clk = 'enim';
    $request->orderSubscriptionMessage->conflateMs = 607831;
    $request->orderSubscriptionMessage->heartbeatMs = 363711;
    $request->orderSubscriptionMessage->id = 325047;
    $request->orderSubscriptionMessage->initialClk = 'excepturi';
    $request->orderSubscriptionMessage->op = 'accusantium';
    $request->orderSubscriptionMessage->orderFilter = new OrderFilter();
    $request->orderSubscriptionMessage->orderFilter->accountIds = [
        634274,
        988374,
    ];
    $request->orderSubscriptionMessage->orderFilter->customerStrategyRefs = [
        'architecto',
        'mollitia',
        'dolorem',
        'culpa',
    ];
    $request->orderSubscriptionMessage->orderFilter->includeOverallPosition = false;
    $request->orderSubscriptionMessage->orderFilter->partitionMatchedByStrategyRef = false;
    $request->orderSubscriptionMessage->segmentationEnabled = false;

    $response = $sdk->sdk->postRequest($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
