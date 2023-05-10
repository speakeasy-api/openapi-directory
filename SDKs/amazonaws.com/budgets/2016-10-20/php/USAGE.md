<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBudgetRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateBudgetRequest;
use \OpenAPI\OpenAPI\Models\Shared\Budget;
use \OpenAPI\OpenAPI\Models\Shared\AutoAdjustData;
use \OpenAPI\OpenAPI\Models\Shared\AutoAdjustTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HistoricalOptions;
use \OpenAPI\OpenAPI\Models\Shared\Spend;
use \OpenAPI\OpenAPI\Models\Shared\BudgetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CalculatedSpend;
use \OpenAPI\OpenAPI\Models\Shared\CostTypes;
use \OpenAPI\OpenAPI\Models\Shared\TimePeriod;
use \OpenAPI\OpenAPI\Models\Shared\TimeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationWithSubscribers;
use \OpenAPI\OpenAPI\Models\Shared\Notification;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ThresholdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Subscriber;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBudgetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBudgetRequest();
    $request->createBudgetRequest = new CreateBudgetRequest();
    $request->createBudgetRequest->accountId = 'corrupti';
    $request->createBudgetRequest->budget = new Budget();
    $request->createBudgetRequest->budget->autoAdjustData = new AutoAdjustData();
    $request->createBudgetRequest->budget->autoAdjustData->autoAdjustType = AutoAdjustTypeEnum::FORECAST;
    $request->createBudgetRequest->budget->autoAdjustData->historicalOptions = new HistoricalOptions();
    $request->createBudgetRequest->budget->autoAdjustData->historicalOptions->budgetAdjustmentPeriod = 715190;
    $request->createBudgetRequest->budget->autoAdjustData->historicalOptions->lookBackAvailablePeriods = 844266;
    $request->createBudgetRequest->budget->autoAdjustData->lastAutoAdjustTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-14T16:47:33.722Z');
    $request->createBudgetRequest->budget->budgetLimit = new Spend();
    $request->createBudgetRequest->budget->budgetLimit->amount = 'corrupti';
    $request->createBudgetRequest->budget->budgetLimit->unit = 'illum';
    $request->createBudgetRequest->budget->budgetName = 'vel';
    $request->createBudgetRequest->budget->budgetType = BudgetTypeEnum::RI_COVERAGE;
    $request->createBudgetRequest->budget->calculatedSpend = new CalculatedSpend();
    $request->createBudgetRequest->budget->calculatedSpend->actualSpend = new Spend();
    $request->createBudgetRequest->budget->calculatedSpend->actualSpend->amount = 'deserunt';
    $request->createBudgetRequest->budget->calculatedSpend->actualSpend->unit = 'suscipit';
    $request->createBudgetRequest->budget->calculatedSpend->forecastedSpend = new Spend();
    $request->createBudgetRequest->budget->calculatedSpend->forecastedSpend->amount = 'iure';
    $request->createBudgetRequest->budget->calculatedSpend->forecastedSpend->unit = 'magnam';
    $request->createBudgetRequest->budget->costFilters = [
        'ipsa' => [
            'tempora',
            'suscipit',
            'molestiae',
            'minus',
        ],
        'placeat' => [
            'iusto',
            'excepturi',
            'nisi',
        ],
        'recusandae' => [
            'ab',
            'quis',
            'veritatis',
            'deserunt',
        ],
        'perferendis' => [
            'repellendus',
            'sapiente',
        ],
    ];
    $request->createBudgetRequest->budget->costTypes = new CostTypes();
    $request->createBudgetRequest->budget->costTypes->includeCredit = false;
    $request->createBudgetRequest->budget->costTypes->includeDiscount = false;
    $request->createBudgetRequest->budget->costTypes->includeOtherSubscription = false;
    $request->createBudgetRequest->budget->costTypes->includeRecurring = false;
    $request->createBudgetRequest->budget->costTypes->includeRefund = false;
    $request->createBudgetRequest->budget->costTypes->includeSubscription = false;
    $request->createBudgetRequest->budget->costTypes->includeSupport = false;
    $request->createBudgetRequest->budget->costTypes->includeTax = false;
    $request->createBudgetRequest->budget->costTypes->includeUpfront = false;
    $request->createBudgetRequest->budget->costTypes->useAmortized = false;
    $request->createBudgetRequest->budget->costTypes->useBlended = false;
    $request->createBudgetRequest->budget->lastUpdatedTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-31T07:34:52.790Z');
    $request->createBudgetRequest->budget->plannedBudgetLimits = [
        'at' => new Spend(),
        'maiores' => new Spend(),
        'molestiae' => new Spend(),
        'quod' => new Spend(),
    ];
    $request->createBudgetRequest->budget->timePeriod = new TimePeriod();
    $request->createBudgetRequest->budget->timePeriod->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-13T16:19:19.906Z');
    $request->createBudgetRequest->budget->timePeriod->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-10T05:07:43.614Z');
    $request->createBudgetRequest->budget->timeUnit = TimeUnitEnum::QUARTERLY;
    $request->createBudgetRequest->notificationsWithSubscribers = [
        new NotificationWithSubscribers(),
    ];
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'optio';
    $request->xAmzTarget = CreateBudgetXAmzTargetEnum::AWS_BUDGET_SERVICE_GATEWAY_CREATE_BUDGET;

    $response = $sdk->createBudget($request);

    if ($response->createBudgetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->