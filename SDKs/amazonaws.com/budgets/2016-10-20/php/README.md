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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createBudget](docs/sdk/README.md#createbudget) - <p>Creates a budget and, if included, notifications and subscribers. </p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p> </important>
* [createBudgetAction](docs/sdk/README.md#createbudgetaction) -  Creates a budget action. 
* [createNotification](docs/sdk/README.md#createnotification) - Creates a notification. You must create the budget before you create the associated notification.
* [createSubscriber](docs/sdk/README.md#createsubscriber) - Creates a subscriber. You must create the associated budget and notification before you create the subscriber.
* [deleteBudget](docs/sdk/README.md#deletebudget) - <p>Deletes a budget. You can delete your budget at any time.</p> <important> <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p> </important>
* [deleteBudgetAction](docs/sdk/README.md#deletebudgetaction) -  Deletes a budget action. 
* [deleteNotification](docs/sdk/README.md#deletenotification) - <p>Deletes a notification.</p> <important> <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p> </important>
* [deleteSubscriber](docs/sdk/README.md#deletesubscriber) - <p>Deletes a subscriber.</p> <important> <p>Deleting the last subscriber to a notification also deletes the notification.</p> </important>
* [describeBudget](docs/sdk/README.md#describebudget) - <p>Describes a budget.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p> </important>
* [describeBudgetAction](docs/sdk/README.md#describebudgetaction) -  Describes a budget action detail. 
* [describeBudgetActionHistories](docs/sdk/README.md#describebudgetactionhistories) -  Describes a budget action history detail. 
* [describeBudgetActionsForAccount](docs/sdk/README.md#describebudgetactionsforaccount) -  Describes all of the budget actions for an account. 
* [describeBudgetActionsForBudget](docs/sdk/README.md#describebudgetactionsforbudget) -  Describes all of the budget actions for a budget. 
* [describeBudgetNotificationsForAccount](docs/sdk/README.md#describebudgetnotificationsforaccount) -  Lists the budget names and notifications that are associated with an account. 
* [describeBudgetPerformanceHistory](docs/sdk/README.md#describebudgetperformancehistory) - Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.
* [describeBudgets](docs/sdk/README.md#describebudgets) - <p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>
* [describeNotificationsForBudget](docs/sdk/README.md#describenotificationsforbudget) - Lists the notifications that are associated with a budget.
* [describeSubscribersForNotification](docs/sdk/README.md#describesubscribersfornotification) - Lists the subscribers that are associated with a notification.
* [executeBudgetAction](docs/sdk/README.md#executebudgetaction) -  Executes a budget action. 
* [updateBudget](docs/sdk/README.md#updatebudget) - <p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until Amazon Web Services has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>
* [updateBudgetAction](docs/sdk/README.md#updatebudgetaction) -  Updates a budget action. 
* [updateNotification](docs/sdk/README.md#updatenotification) - Updates a notification.
* [updateSubscriber](docs/sdk/README.md#updatesubscriber) - Updates a subscriber.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
