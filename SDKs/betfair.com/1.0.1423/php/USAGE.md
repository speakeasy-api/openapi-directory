<!-- Start SDK Example Usage -->
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
    $request->authentication->appKey = 'corrupti';
    $request->authentication->id = 592845;
    $request->authentication->op = 'distinctio';
    $request->authentication->session = 'quibusdam';
    $request->heartbeat = new HeartbeatMessage();
    $request->heartbeat->id = 602763;
    $request->heartbeat->op = 'nulla';
    $request->marketSubscription = new MarketSubscriptionMessage();
    $request->marketSubscription->clk = 'corrupti';
    $request->marketSubscription->conflateMs = 847252;
    $request->marketSubscription->heartbeatMs = 423655;
    $request->marketSubscription->id = 623564;
    $request->marketSubscription->initialClk = 'deserunt';
    $request->marketSubscription->marketDataFilter = new MarketDataFilter();
    $request->marketSubscription->marketDataFilter->fields = [
        MarketDataFilterFieldsEnum::EX_TRADED,
        MarketDataFilterFieldsEnum::EX_ALL_OFFERS,
    ];
    $request->marketSubscription->marketDataFilter->ladderLevels = 891773;
    $request->marketSubscription->marketFilter = new MarketFilter();
    $request->marketSubscription->marketFilter->bettingTypes = [
        MarketFilterBettingTypesEnum::ASIAN_HANDICAP_SINGLE_LINE,
    ];
    $request->marketSubscription->marketFilter->bspMarket = false;
    $request->marketSubscription->marketFilter->countryCodes = [
        'suscipit',
        'molestiae',
    ];
    $request->marketSubscription->marketFilter->eventIds = [
        'placeat',
        'voluptatum',
        'iusto',
        'excepturi',
    ];
    $request->marketSubscription->marketFilter->eventTypeIds = [
        'recusandae',
        'temporibus',
    ];
    $request->marketSubscription->marketFilter->marketIds = [
        'quis',
    ];
    $request->marketSubscription->marketFilter->marketTypes = [
        'deserunt',
    ];
    $request->marketSubscription->marketFilter->raceTypes = [
        'ipsam',
    ];
    $request->marketSubscription->marketFilter->turnInPlayEnabled = false;
    $request->marketSubscription->marketFilter->venues = [
        'sapiente',
        'quo',
        'odit',
        'at',
    ];
    $request->marketSubscription->op = 'at';
    $request->marketSubscription->segmentationEnabled = false;
    $request->opTypes = AllRequestTypesExampleOpTypesEnum::ORDER_SUBSCRIPTION;
    $request->orderSubscriptionMessage = new OrderSubscriptionMessage();
    $request->orderSubscriptionMessage->clk = 'molestiae';
    $request->orderSubscriptionMessage->conflateMs = 799159;
    $request->orderSubscriptionMessage->heartbeatMs = 800911;
    $request->orderSubscriptionMessage->id = 461479;
    $request->orderSubscriptionMessage->initialClk = 'totam';
    $request->orderSubscriptionMessage->op = 'porro';
    $request->orderSubscriptionMessage->orderFilter = new OrderFilter();
    $request->orderSubscriptionMessage->orderFilter->accountIds = [
        118274,
        720633,
        639921,
    ];
    $request->orderSubscriptionMessage->orderFilter->customerStrategyRefs = [
        'fugit',
        'deleniti',
        'hic',
    ];
    $request->orderSubscriptionMessage->orderFilter->includeOverallPosition = false;
    $request->orderSubscriptionMessage->orderFilter->partitionMatchedByStrategyRef = false;
    $request->orderSubscriptionMessage->segmentationEnabled = false;

    $response = $sdk->postRequest($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->