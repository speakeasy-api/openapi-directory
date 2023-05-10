# SDK

## Overview

<p>Use the Amazon Web Services Budgets API to plan your service usage, service costs, and instance reservations. This API reference provides descriptions, syntax, and usage examples for each of the actions and data types for the Amazon Web Services Budgets feature. </p> <p>Budgets provide you with a way to see the following information:</p> <ul> <li> <p>How close your plan is to your budgeted amount or to the free tier limits</p> </li> <li> <p>Your usage-to-date, including how much you've used of your Reserved Instances (RIs)</p> </li> <li> <p>Your current estimated charges from Amazon Web Services, and how much your predicted usage will accrue in charges by the end of the month</p> </li> <li> <p>How much of your budget has been used</p> </li> </ul> <p>Amazon Web Services updates your budget status several times a day. Budgets track your unblended costs, subscriptions, refunds, and RIs. You can create the following types of budgets:</p> <ul> <li> <p> <b>Cost budgets</b> - Plan how much you want to spend on a service.</p> </li> <li> <p> <b>Usage budgets</b> - Plan how much you want to use one or more services.</p> </li> <li> <p> <b>RI utilization budgets</b> - Define a utilization threshold, and receive alerts when your RI usage falls below that threshold. This lets you see if your RIs are unused or under-utilized.</p> </li> <li> <p> <b>RI coverage budgets</b> - Define a coverage threshold, and receive alerts when the number of your instance hours that are covered by RIs fall below that threshold. This lets you see how much of your instance usage is covered by a reservation.</p> </li> </ul> <p>Service Endpoint</p> <p>The Amazon Web Services Budgets API provides the following endpoint:</p> <ul> <li> <p>https://budgets.amazonaws.com</p> </li> </ul> <p>For information about costs that are associated with the Amazon Web Services Budgets API, see <a href="https://aws.amazon.com/aws-cost-management/pricing/">Amazon Web Services Cost Management Pricing</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/budgets/>
### Available Operations

* [createBudget](#createbudget) - <p>Creates a budget and, if included, notifications and subscribers. </p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p> </important>
* [createBudgetAction](#createbudgetaction) -  Creates a budget action. 
* [createNotification](#createnotification) - Creates a notification. You must create the budget before you create the associated notification.
* [createSubscriber](#createsubscriber) - Creates a subscriber. You must create the associated budget and notification before you create the subscriber.
* [deleteBudget](#deletebudget) - <p>Deletes a budget. You can delete your budget at any time.</p> <important> <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p> </important>
* [deleteBudgetAction](#deletebudgetaction) -  Deletes a budget action. 
* [deleteNotification](#deletenotification) - <p>Deletes a notification.</p> <important> <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p> </important>
* [deleteSubscriber](#deletesubscriber) - <p>Deletes a subscriber.</p> <important> <p>Deleting the last subscriber to a notification also deletes the notification.</p> </important>
* [describeBudget](#describebudget) - <p>Describes a budget.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p> </important>
* [describeBudgetAction](#describebudgetaction) -  Describes a budget action detail. 
* [describeBudgetActionHistories](#describebudgetactionhistories) -  Describes a budget action history detail. 
* [describeBudgetActionsForAccount](#describebudgetactionsforaccount) -  Describes all of the budget actions for an account. 
* [describeBudgetActionsForBudget](#describebudgetactionsforbudget) -  Describes all of the budget actions for a budget. 
* [describeBudgetNotificationsForAccount](#describebudgetnotificationsforaccount) -  Lists the budget names and notifications that are associated with an account. 
* [describeBudgetPerformanceHistory](#describebudgetperformancehistory) - Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.
* [describeBudgets](#describebudgets) - <p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>
* [describeNotificationsForBudget](#describenotificationsforbudget) - Lists the notifications that are associated with a budget.
* [describeSubscribersForNotification](#describesubscribersfornotification) - Lists the subscribers that are associated with a notification.
* [executeBudgetAction](#executebudgetaction) -  Executes a budget action. 
* [updateBudget](#updatebudget) - <p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until Amazon Web Services has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>
* [updateBudgetAction](#updatebudgetaction) -  Updates a budget action. 
* [updateNotification](#updatenotification) - Updates a notification.
* [updateSubscriber](#updatesubscriber) - Updates a subscriber.

## createBudget

<p>Creates a budget and, if included, notifications and subscribers. </p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p> </important>

### Example Usage

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
    $request->createBudgetRequest->accountId = 'totam';
    $request->createBudgetRequest->budget = new Budget();
    $request->createBudgetRequest->budget->autoAdjustData = new AutoAdjustData();
    $request->createBudgetRequest->budget->autoAdjustData->autoAdjustType = AutoAdjustTypeEnum::HISTORICAL;
    $request->createBudgetRequest->budget->autoAdjustData->historicalOptions = new HistoricalOptions();
    $request->createBudgetRequest->budget->autoAdjustData->historicalOptions->budgetAdjustmentPeriod = 414662;
    $request->createBudgetRequest->budget->autoAdjustData->historicalOptions->lookBackAvailablePeriods = 473600;
    $request->createBudgetRequest->budget->autoAdjustData->lastAutoAdjustTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-24T23:43:42.369Z');
    $request->createBudgetRequest->budget->budgetLimit = new Spend();
    $request->createBudgetRequest->budget->budgetLimit->amount = 'impedit';
    $request->createBudgetRequest->budget->budgetLimit->unit = 'cum';
    $request->createBudgetRequest->budget->budgetName = 'esse';
    $request->createBudgetRequest->budget->budgetType = BudgetTypeEnum::COST;
    $request->createBudgetRequest->budget->calculatedSpend = new CalculatedSpend();
    $request->createBudgetRequest->budget->calculatedSpend->actualSpend = new Spend();
    $request->createBudgetRequest->budget->calculatedSpend->actualSpend->amount = 'excepturi';
    $request->createBudgetRequest->budget->calculatedSpend->actualSpend->unit = 'aspernatur';
    $request->createBudgetRequest->budget->calculatedSpend->forecastedSpend = new Spend();
    $request->createBudgetRequest->budget->calculatedSpend->forecastedSpend->amount = 'perferendis';
    $request->createBudgetRequest->budget->calculatedSpend->forecastedSpend->unit = 'ad';
    $request->createBudgetRequest->budget->costFilters = [
        'sed' => [
            'dolor',
            'natus',
            'laboriosam',
        ],
        'hic' => [
            'fuga',
            'in',
            'corporis',
            'iste',
        ],
        'iure' => [
            'quidem',
            'architecto',
            'ipsa',
            'reiciendis',
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
    $request->createBudgetRequest->budget->lastUpdatedTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-11T04:59:11.542Z');
    $request->createBudgetRequest->budget->plannedBudgetLimits = [
        'dolores' => new Spend(),
        'dolorem' => new Spend(),
        'corporis' => new Spend(),
    ];
    $request->createBudgetRequest->budget->timePeriod = new TimePeriod();
    $request->createBudgetRequest->budget->timePeriod->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-01T23:59:21.675Z');
    $request->createBudgetRequest->budget->timePeriod->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-24T03:24:11.703Z');
    $request->createBudgetRequest->budget->timeUnit = TimeUnitEnum::MONTHLY;
    $request->createBudgetRequest->notificationsWithSubscribers = [
        new NotificationWithSubscribers(),
        new NotificationWithSubscribers(),
    ];
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = CreateBudgetXAmzTargetEnum::AWS_BUDGET_SERVICE_GATEWAY_CREATE_BUDGET;

    $response = $sdk->sdk->createBudget($request);

    if ($response->createBudgetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBudgetAction

 Creates a budget action. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBudgetActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateBudgetActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActionThreshold;
use \OpenAPI\OpenAPI\Models\Shared\ThresholdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApprovalModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\Definition;
use \OpenAPI\OpenAPI\Models\Shared\IamActionDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ScpActionDefinition;
use \OpenAPI\OpenAPI\Models\Shared\SsmActionDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ActionSubTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Subscriber;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBudgetActionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBudgetActionRequest();
    $request->createBudgetActionRequest = new CreateBudgetActionRequest();
    $request->createBudgetActionRequest->accountId = 'mollitia';
    $request->createBudgetActionRequest->actionThreshold = new ActionThreshold();
    $request->createBudgetActionRequest->actionThreshold->actionThresholdType = ThresholdTypeEnum::PERCENTAGE;
    $request->createBudgetActionRequest->actionThreshold->actionThresholdValue = 6350.59;
    $request->createBudgetActionRequest->actionType = ActionTypeEnum::APPLY_IAM_POLICY;
    $request->createBudgetActionRequest->approvalModel = ApprovalModelEnum::MANUAL;
    $request->createBudgetActionRequest->budgetName = 'mollitia';
    $request->createBudgetActionRequest->definition = new Definition();
    $request->createBudgetActionRequest->definition->iamActionDefinition = new IamActionDefinition();
    $request->createBudgetActionRequest->definition->iamActionDefinition->groups = [
        'numquam',
        'commodi',
        'quam',
    ];
    $request->createBudgetActionRequest->definition->iamActionDefinition->policyArn = 'molestiae';
    $request->createBudgetActionRequest->definition->iamActionDefinition->roles = [
        'error',
    ];
    $request->createBudgetActionRequest->definition->iamActionDefinition->users = [
        'quis',
    ];
    $request->createBudgetActionRequest->definition->scpActionDefinition = new ScpActionDefinition();
    $request->createBudgetActionRequest->definition->scpActionDefinition->policyId = 'vitae';
    $request->createBudgetActionRequest->definition->scpActionDefinition->targetIds = [
        'animi',
        'enim',
        'odit',
    ];
    $request->createBudgetActionRequest->definition->ssmActionDefinition = new SsmActionDefinition();
    $request->createBudgetActionRequest->definition->ssmActionDefinition->actionSubType = ActionSubTypeEnum::STOP_RDS_INSTANCES;
    $request->createBudgetActionRequest->definition->ssmActionDefinition->instanceIds = [
        'tenetur',
    ];
    $request->createBudgetActionRequest->definition->ssmActionDefinition->region = 'ipsam';
    $request->createBudgetActionRequest->executionRoleArn = 'id';
    $request->createBudgetActionRequest->notificationType = NotificationTypeEnum::FORECASTED;
    $request->createBudgetActionRequest->subscribers = [
        new Subscriber(),
    ];
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = CreateBudgetActionXAmzTargetEnum::AWS_BUDGET_SERVICE_GATEWAY_CREATE_BUDGET_ACTION;

    $response = $sdk->sdk->createBudgetAction($request);

    if ($response->createBudgetActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNotification

Creates a notification. You must create the budget before you create the associated notification.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNotificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateNotificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Notification;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ThresholdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Subscriber;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNotificationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNotificationRequest();
    $request->createNotificationRequest = new CreateNotificationRequest();
    $request->createNotificationRequest->accountId = 'vero';
    $request->createNotificationRequest->budgetName = 'nihil';
    $request->createNotificationRequest->notification = new Notification();
    $request->createNotificationRequest->notification->comparisonOperator = ComparisonOperatorEnum::LESS_THAN;
    $request->createNotificationRequest->notification->notificationState = NotificationStateEnum::ALARM;
    $request->createNotificationRequest->notification->notificationType = NotificationTypeEnum::ACTUAL;
    $request->createNotificationRequest->notification->threshold = 6048.46;
    $request->createNotificationRequest->notification->thresholdType = ThresholdTypeEnum::PERCENTAGE;
    $request->createNotificationRequest->subscribers = [
        new Subscriber(),
        new Subscriber(),
        new Subscriber(),
    ];
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = CreateNotificationXAmzTargetEnum::AWS_BUDGET_SERVICE_GATEWAY_CREATE_NOTIFICATION;

    $response = $sdk->sdk->createNotification($request);

    if ($response->createNotificationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSubscriber

Creates a subscriber. You must create the associated budget and notification before you create the subscriber.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubscriberRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSubscriberRequest;
use \OpenAPI\OpenAPI\Models\Shared\Notification;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ThresholdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Subscriber;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubscriberXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSubscriberRequest();
    $request->createSubscriberRequest = new CreateSubscriberRequest();
    $request->createSubscriberRequest->accountId = 'dolore';
    $request->createSubscriberRequest->budgetName = 'iusto';
    $request->createSubscriberRequest->notification = new Notification();
    $request->createSubscriberRequest->notification->comparisonOperator = ComparisonOperatorEnum::GREATER_THAN;
    $request->createSubscriberRequest->notification->notificationState = NotificationStateEnum::ALARM;
    $request->createSubscriberRequest->notification->notificationType = NotificationTypeEnum::ACTUAL;
    $request->createSubscriberRequest->notification->threshold = 8804.76;
    $request->createSubscriberRequest->notification->thresholdType = ThresholdTypeEnum::PERCENTAGE;
    $request->createSubscriberRequest->subscriber = new Subscriber();
    $request->createSubscriberRequest->subscriber->address = 'repudiandae';
    $request->createSubscriberRequest->subscriber->subscriptionType = SubscriptionTypeEnum::SNS;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'molestias';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->xAmzTarget = CreateSubscriberXAmzTargetEnum::AWS_BUDGET_SERVICE_GATEWAY_CREATE_SUBSCRIBER;

    $response = $sdk->sdk->createSubscriber($request);

    if ($response->createSubscriberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBudget

<p>Deletes a budget. You can delete your budget at any time.</p> <important> <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBudgetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteBudgetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBudgetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBudgetRequest();
    $request->deleteBudgetRequest = new DeleteBudgetRequest();
    $request->deleteBudgetRequest->accountId = 'rem';
    $request->deleteBudgetRequest->budgetName = 'voluptates';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = DeleteBudgetXAmzTargetEnum::AWS_BUDGET_SERVICE_GATEWAY_DELETE_BUDGET;

    $response = $sdk->sdk->deleteBudget($request);

    if ($response->deleteBudgetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBudgetAction

 Deletes a budget action. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBudgetActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteBudgetActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBudgetActionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBudgetActionRequest();
    $request->deleteBudgetActionRequest = new DeleteBudgetActionRequest();
    $request->deleteBudgetActionRequest->accountId = 'consequatur';
    $request->deleteBudgetActionRequest->actionId = 'est';
    $request->deleteBudgetActionRequest->budgetName = 'quibusdam';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = DeleteBudgetActionXAmzTargetEnum::AWS_BUDGET_SERVICE_GATEWAY_DELETE_BUDGET_ACTION;

    $response = $sdk->sdk->deleteBudgetAction($request);

    if ($response->deleteBudgetActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNotification

<p>Deletes a notification.</p> <important> <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNotificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteNotificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Notification;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ThresholdTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNotificationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNotificationRequest();
    $request->deleteNotificationRequest = new DeleteNotificationRequest();
    $request->deleteNotificationRequest->accountId = 'aliquid';
    $request->deleteNotificationRequest->budgetName = 'cupiditate';
    $request->deleteNotificationRequest->notification = new Notification();
    $request->deleteNotificationRequest->notification->comparisonOperator = ComparisonOperatorEnum::LESS_THAN;
    $request->deleteNotificationRequest->notification->notificationState = NotificationStateEnum::OK;
    $request->deleteNotificationRequest->notification->notificationType = NotificationTypeEnum::ACTUAL;
    $request->deleteNotificationRequest->notification->threshold = 8289.4;
    $request->deleteNotificationRequest->notification->thresholdType = ThresholdTypeEnum::PERCENTAGE;
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'tempore';
    $request->xAmzTarget = DeleteNotificationXAmzTargetEnum::AWS_BUDGET_SERVICE_GATEWAY_DELETE_NOTIFICATION;

    $response = $sdk->sdk->deleteNotification($request);

    if ($response->deleteNotificationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSubscriber

<p>Deletes a subscriber.</p> <important> <p>Deleting the last subscriber to a notification also deletes the notification.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubscriberRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSubscriberRequest;
use \OpenAPI\OpenAPI\Models\Shared\Notification;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ThresholdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Subscriber;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubscriberXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSubscriberRequest();
    $request->deleteSubscriberRequest = new DeleteSubscriberRequest();
    $request->deleteSubscriberRequest->accountId = 'labore';
    $request->deleteSubscriberRequest->budgetName = 'delectus';
    $request->deleteSubscriberRequest->notification = new Notification();
    $request->deleteSubscriberRequest->notification->comparisonOperator = ComparisonOperatorEnum::LESS_THAN;
    $request->deleteSubscriberRequest->notification->notificationState = NotificationStateEnum::OK;
    $request->deleteSubscriberRequest->notification->notificationType = NotificationTypeEnum::FORECASTED;
    $request->deleteSubscriberRequest->notification->threshold = 5761.57;
    $request->deleteSubscriberRequest->notification->thresholdType = ThresholdTypeEnum::PERCENTAGE;
    $request->deleteSubscriberRequest->subscriber = new Subscriber();
    $request->deleteSubscriberRequest->subscriber->address = 'provident';
    $request->deleteSubscriberRequest->subscriber->subscriptionType = SubscriptionTypeEnum::EMAIL;
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = DeleteSubscriberXAmzTargetEnum::AWS_BUDGET_SERVICE_GATEWAY_DELETE_SUBSCRIBER;

    $response = $sdk->sdk->deleteSubscriber($request);

    if ($response->deleteSubscriberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBudget

<p>Describes a budget.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBudgetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeBudgetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBudgetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBudgetRequest();
    $request->describeBudgetRequest = new DescribeBudgetRequest();
    $request->describeBudgetRequest->accountId = 'in';
    $request->describeBudgetRequest->budgetName = 'illum';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = DescribeBudgetXAmzTargetEnum::AWS_BUDGET_SERVICE_GATEWAY_DESCRIBE_BUDGET;

    $response = $sdk->sdk->describeBudget($request);

    if ($response->describeBudgetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBudgetAction

 Describes a budget action detail. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBudgetActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeBudgetActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBudgetActionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBudgetActionRequest();
    $request->describeBudgetActionRequest = new DescribeBudgetActionRequest();
    $request->describeBudgetActionRequest->accountId = 'aliquid';
    $request->describeBudgetActionRequest->actionId = 'laborum';
    $request->describeBudgetActionRequest->budgetName = 'accusamus';
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = DescribeBudgetActionXAmzTargetEnum::AWS_BUDGET_SERVICE_GATEWAY_DESCRIBE_BUDGET_ACTION;

    $response = $sdk->sdk->describeBudgetAction($request);

    if ($response->describeBudgetActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBudgetActionHistories

 Describes a budget action history detail. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBudgetActionHistoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeBudgetActionHistoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\TimePeriod;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBudgetActionHistoriesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBudgetActionHistoriesRequest();
    $request->describeBudgetActionHistoriesRequest = new DescribeBudgetActionHistoriesRequest();
    $request->describeBudgetActionHistoriesRequest->accountId = 'nam';
    $request->describeBudgetActionHistoriesRequest->actionId = 'id';
    $request->describeBudgetActionHistoriesRequest->budgetName = 'blanditiis';
    $request->describeBudgetActionHistoriesRequest->maxResults = 533206;
    $request->describeBudgetActionHistoriesRequest->nextToken = 'sapiente';
    $request->describeBudgetActionHistoriesRequest->timePeriod = new TimePeriod();
    $request->describeBudgetActionHistoriesRequest->timePeriod->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-10T22:38:44.806Z');
    $request->describeBudgetActionHistoriesRequest->timePeriod->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-30T07:01:46.758Z');
    $request->maxResults = 'natus';
    $request->nextToken = 'omnis';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = DescribeBudgetActionHistoriesXAmzTargetEnum::AWS_BUDGET_SERVICE_GATEWAY_DESCRIBE_BUDGET_ACTION_HISTORIES;

    $response = $sdk->sdk->describeBudgetActionHistories($request);

    if ($response->describeBudgetActionHistoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBudgetActionsForAccount

 Describes all of the budget actions for an account. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBudgetActionsForAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeBudgetActionsForAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBudgetActionsForAccountXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBudgetActionsForAccountRequest();
    $request->describeBudgetActionsForAccountRequest = new DescribeBudgetActionsForAccountRequest();
    $request->describeBudgetActionsForAccountRequest->accountId = 'labore';
    $request->describeBudgetActionsForAccountRequest->maxResults = 383462;
    $request->describeBudgetActionsForAccountRequest->nextToken = 'natus';
    $request->maxResults = 'nobis';
    $request->nextToken = 'eum';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'ullam';
    $request->xAmzTarget = DescribeBudgetActionsForAccountXAmzTargetEnum::AWS_BUDGET_SERVICE_GATEWAY_DESCRIBE_BUDGET_ACTIONS_FOR_ACCOUNT;

    $response = $sdk->sdk->describeBudgetActionsForAccount($request);

    if ($response->describeBudgetActionsForAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBudgetActionsForBudget

 Describes all of the budget actions for a budget. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBudgetActionsForBudgetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeBudgetActionsForBudgetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBudgetActionsForBudgetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBudgetActionsForBudgetRequest();
    $request->describeBudgetActionsForBudgetRequest = new DescribeBudgetActionsForBudgetRequest();
    $request->describeBudgetActionsForBudgetRequest->accountId = 'provident';
    $request->describeBudgetActionsForBudgetRequest->budgetName = 'quos';
    $request->describeBudgetActionsForBudgetRequest->maxResults = 574325;
    $request->describeBudgetActionsForBudgetRequest->nextToken = 'accusantium';
    $request->maxResults = 'mollitia';
    $request->nextToken = 'reiciendis';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = DescribeBudgetActionsForBudgetXAmzTargetEnum::AWS_BUDGET_SERVICE_GATEWAY_DESCRIBE_BUDGET_ACTIONS_FOR_BUDGET;

    $response = $sdk->sdk->describeBudgetActionsForBudget($request);

    if ($response->describeBudgetActionsForBudgetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBudgetNotificationsForAccount

 Lists the budget names and notifications that are associated with an account. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBudgetNotificationsForAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeBudgetNotificationsForAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBudgetNotificationsForAccountXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBudgetNotificationsForAccountRequest();
    $request->describeBudgetNotificationsForAccountRequest = new DescribeBudgetNotificationsForAccountRequest();
    $request->describeBudgetNotificationsForAccountRequest->accountId = 'quasi';
    $request->describeBudgetNotificationsForAccountRequest->maxResults = 435865;
    $request->describeBudgetNotificationsForAccountRequest->nextToken = 'doloribus';
    $request->maxResults = 'debitis';
    $request->nextToken = 'eius';
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->xAmzTarget = DescribeBudgetNotificationsForAccountXAmzTargetEnum::AWS_BUDGET_SERVICE_GATEWAY_DESCRIBE_BUDGET_NOTIFICATIONS_FOR_ACCOUNT;

    $response = $sdk->sdk->describeBudgetNotificationsForAccount($request);

    if ($response->describeBudgetNotificationsForAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBudgetPerformanceHistory

Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBudgetPerformanceHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeBudgetPerformanceHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\TimePeriod;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBudgetPerformanceHistoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBudgetPerformanceHistoryRequest();
    $request->describeBudgetPerformanceHistoryRequest = new DescribeBudgetPerformanceHistoryRequest();
    $request->describeBudgetPerformanceHistoryRequest->accountId = 'ullam';
    $request->describeBudgetPerformanceHistoryRequest->budgetName = 'expedita';
    $request->describeBudgetPerformanceHistoryRequest->maxResults = 469249;
    $request->describeBudgetPerformanceHistoryRequest->nextToken = 'repellat';
    $request->describeBudgetPerformanceHistoryRequest->timePeriod = new TimePeriod();
    $request->describeBudgetPerformanceHistoryRequest->timePeriod->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-21T08:29:53.942Z');
    $request->describeBudgetPerformanceHistoryRequest->timePeriod->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-05-25T09:38:49.528Z');
    $request->maxResults = 'accusantium';
    $request->nextToken = 'consequuntur';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'sunt';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = DescribeBudgetPerformanceHistoryXAmzTargetEnum::AWS_BUDGET_SERVICE_GATEWAY_DESCRIBE_BUDGET_PERFORMANCE_HISTORY;

    $response = $sdk->sdk->describeBudgetPerformanceHistory($request);

    if ($response->describeBudgetPerformanceHistoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBudgets

<p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBudgetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeBudgetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBudgetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBudgetsRequest();
    $request->describeBudgetsRequest = new DescribeBudgetsRequest();
    $request->describeBudgetsRequest->accountId = 'maxime';
    $request->describeBudgetsRequest->maxResults = 411397;
    $request->describeBudgetsRequest->nextToken = 'excepturi';
    $request->maxResults = 'odit';
    $request->nextToken = 'ea';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'autem';
    $request->xAmzTarget = DescribeBudgetsXAmzTargetEnum::AWS_BUDGET_SERVICE_GATEWAY_DESCRIBE_BUDGETS;

    $response = $sdk->sdk->describeBudgets($request);

    if ($response->describeBudgetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeNotificationsForBudget

Lists the notifications that are associated with a budget.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeNotificationsForBudgetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeNotificationsForBudgetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeNotificationsForBudgetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeNotificationsForBudgetRequest();
    $request->describeNotificationsForBudgetRequest = new DescribeNotificationsForBudgetRequest();
    $request->describeNotificationsForBudgetRequest->accountId = 'nam';
    $request->describeNotificationsForBudgetRequest->budgetName = 'eaque';
    $request->describeNotificationsForBudgetRequest->maxResults = 866383;
    $request->describeNotificationsForBudgetRequest->nextToken = 'nemo';
    $request->maxResults = 'voluptatibus';
    $request->nextToken = 'perferendis';
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = DescribeNotificationsForBudgetXAmzTargetEnum::AWS_BUDGET_SERVICE_GATEWAY_DESCRIBE_NOTIFICATIONS_FOR_BUDGET;

    $response = $sdk->sdk->describeNotificationsForBudget($request);

    if ($response->describeNotificationsForBudgetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSubscribersForNotification

Lists the subscribers that are associated with a notification.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSubscribersForNotificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSubscribersForNotificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Notification;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ThresholdTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSubscribersForNotificationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSubscribersForNotificationRequest();
    $request->describeSubscribersForNotificationRequest = new DescribeSubscribersForNotificationRequest();
    $request->describeSubscribersForNotificationRequest->accountId = 'nobis';
    $request->describeSubscribersForNotificationRequest->budgetName = 'dolores';
    $request->describeSubscribersForNotificationRequest->maxResults = 339404;
    $request->describeSubscribersForNotificationRequest->nextToken = 'totam';
    $request->describeSubscribersForNotificationRequest->notification = new Notification();
    $request->describeSubscribersForNotificationRequest->notification->comparisonOperator = ComparisonOperatorEnum::LESS_THAN;
    $request->describeSubscribersForNotificationRequest->notification->notificationState = NotificationStateEnum::OK;
    $request->describeSubscribersForNotificationRequest->notification->notificationType = NotificationTypeEnum::ACTUAL;
    $request->describeSubscribersForNotificationRequest->notification->threshold = 1999.96;
    $request->describeSubscribersForNotificationRequest->notification->thresholdType = ThresholdTypeEnum::PERCENTAGE;
    $request->maxResults = 'perferendis';
    $request->nextToken = 'dolores';
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = DescribeSubscribersForNotificationXAmzTargetEnum::AWS_BUDGET_SERVICE_GATEWAY_DESCRIBE_SUBSCRIBERS_FOR_NOTIFICATION;

    $response = $sdk->sdk->describeSubscribersForNotification($request);

    if ($response->describeSubscribersForNotificationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## executeBudgetAction

 Executes a budget action. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteBudgetActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExecuteBudgetActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteBudgetActionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExecuteBudgetActionRequest();
    $request->executeBudgetActionRequest = new ExecuteBudgetActionRequest();
    $request->executeBudgetActionRequest->accountId = 'omnis';
    $request->executeBudgetActionRequest->actionId = 'facilis';
    $request->executeBudgetActionRequest->budgetName = 'perspiciatis';
    $request->executeBudgetActionRequest->executionType = ExecutionTypeEnum::APPROVE_BUDGET_ACTION;
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'rerum';
    $request->xAmzTarget = ExecuteBudgetActionXAmzTargetEnum::AWS_BUDGET_SERVICE_GATEWAY_EXECUTE_BUDGET_ACTION;

    $response = $sdk->sdk->executeBudgetAction($request);

    if ($response->executeBudgetActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBudget

<p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until Amazon Web Services has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBudgetRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateBudgetRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\UpdateBudgetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBudgetRequest();
    $request->updateBudgetRequest = new UpdateBudgetRequest();
    $request->updateBudgetRequest->accountId = 'adipisci';
    $request->updateBudgetRequest->newBudget = new Budget();
    $request->updateBudgetRequest->newBudget->autoAdjustData = new AutoAdjustData();
    $request->updateBudgetRequest->newBudget->autoAdjustData->autoAdjustType = AutoAdjustTypeEnum::FORECAST;
    $request->updateBudgetRequest->newBudget->autoAdjustData->historicalOptions = new HistoricalOptions();
    $request->updateBudgetRequest->newBudget->autoAdjustData->historicalOptions->budgetAdjustmentPeriod = 934214;
    $request->updateBudgetRequest->newBudget->autoAdjustData->historicalOptions->lookBackAvailablePeriods = 267262;
    $request->updateBudgetRequest->newBudget->autoAdjustData->lastAutoAdjustTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-23T06:19:56.211Z');
    $request->updateBudgetRequest->newBudget->budgetLimit = new Spend();
    $request->updateBudgetRequest->newBudget->budgetLimit->amount = 'deleniti';
    $request->updateBudgetRequest->newBudget->budgetLimit->unit = 'pariatur';
    $request->updateBudgetRequest->newBudget->budgetName = 'provident';
    $request->updateBudgetRequest->newBudget->budgetType = BudgetTypeEnum::SAVINGS_PLANS_UTILIZATION;
    $request->updateBudgetRequest->newBudget->calculatedSpend = new CalculatedSpend();
    $request->updateBudgetRequest->newBudget->calculatedSpend->actualSpend = new Spend();
    $request->updateBudgetRequest->newBudget->calculatedSpend->actualSpend->amount = 'libero';
    $request->updateBudgetRequest->newBudget->calculatedSpend->actualSpend->unit = 'delectus';
    $request->updateBudgetRequest->newBudget->calculatedSpend->forecastedSpend = new Spend();
    $request->updateBudgetRequest->newBudget->calculatedSpend->forecastedSpend->amount = 'quaerat';
    $request->updateBudgetRequest->newBudget->calculatedSpend->forecastedSpend->unit = 'quos';
    $request->updateBudgetRequest->newBudget->costFilters = [
        'dolorem' => [
            'dolor',
        ],
        'qui' => [
            'hic',
        ],
    ];
    $request->updateBudgetRequest->newBudget->costTypes = new CostTypes();
    $request->updateBudgetRequest->newBudget->costTypes->includeCredit = false;
    $request->updateBudgetRequest->newBudget->costTypes->includeDiscount = false;
    $request->updateBudgetRequest->newBudget->costTypes->includeOtherSubscription = false;
    $request->updateBudgetRequest->newBudget->costTypes->includeRecurring = false;
    $request->updateBudgetRequest->newBudget->costTypes->includeRefund = false;
    $request->updateBudgetRequest->newBudget->costTypes->includeSubscription = false;
    $request->updateBudgetRequest->newBudget->costTypes->includeSupport = false;
    $request->updateBudgetRequest->newBudget->costTypes->includeTax = false;
    $request->updateBudgetRequest->newBudget->costTypes->includeUpfront = false;
    $request->updateBudgetRequest->newBudget->costTypes->useAmortized = false;
    $request->updateBudgetRequest->newBudget->costTypes->useBlended = false;
    $request->updateBudgetRequest->newBudget->lastUpdatedTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-10T03:04:11.898Z');
    $request->updateBudgetRequest->newBudget->plannedBudgetLimits = [
        'dignissimos' => new Spend(),
        'reiciendis' => new Spend(),
    ];
    $request->updateBudgetRequest->newBudget->timePeriod = new TimePeriod();
    $request->updateBudgetRequest->newBudget->timePeriod->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-27T14:25:42.204Z');
    $request->updateBudgetRequest->newBudget->timePeriod->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-30T20:48:38.083Z');
    $request->updateBudgetRequest->newBudget->timeUnit = TimeUnitEnum::DAILY;
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = UpdateBudgetXAmzTargetEnum::AWS_BUDGET_SERVICE_GATEWAY_UPDATE_BUDGET;

    $response = $sdk->sdk->updateBudget($request);

    if ($response->updateBudgetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBudgetAction

 Updates a budget action. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBudgetActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateBudgetActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActionThreshold;
use \OpenAPI\OpenAPI\Models\Shared\ThresholdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApprovalModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\Definition;
use \OpenAPI\OpenAPI\Models\Shared\IamActionDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ScpActionDefinition;
use \OpenAPI\OpenAPI\Models\Shared\SsmActionDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ActionSubTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Subscriber;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBudgetActionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBudgetActionRequest();
    $request->updateBudgetActionRequest = new UpdateBudgetActionRequest();
    $request->updateBudgetActionRequest->accountId = 'voluptas';
    $request->updateBudgetActionRequest->actionId = 'natus';
    $request->updateBudgetActionRequest->actionThreshold = new ActionThreshold();
    $request->updateBudgetActionRequest->actionThreshold->actionThresholdType = ThresholdTypeEnum::PERCENTAGE;
    $request->updateBudgetActionRequest->actionThreshold->actionThresholdValue = 5424.99;
    $request->updateBudgetActionRequest->approvalModel = ApprovalModelEnum::AUTOMATIC;
    $request->updateBudgetActionRequest->budgetName = 'fugiat';
    $request->updateBudgetActionRequest->definition = new Definition();
    $request->updateBudgetActionRequest->definition->iamActionDefinition = new IamActionDefinition();
    $request->updateBudgetActionRequest->definition->iamActionDefinition->groups = [
        'soluta',
    ];
    $request->updateBudgetActionRequest->definition->iamActionDefinition->policyArn = 'dolorum';
    $request->updateBudgetActionRequest->definition->iamActionDefinition->roles = [
        'voluptate',
        'dolorum',
    ];
    $request->updateBudgetActionRequest->definition->iamActionDefinition->users = [
        'omnis',
        'necessitatibus',
        'distinctio',
    ];
    $request->updateBudgetActionRequest->definition->scpActionDefinition = new ScpActionDefinition();
    $request->updateBudgetActionRequest->definition->scpActionDefinition->policyId = 'asperiores';
    $request->updateBudgetActionRequest->definition->scpActionDefinition->targetIds = [
        'ipsum',
        'voluptate',
    ];
    $request->updateBudgetActionRequest->definition->ssmActionDefinition = new SsmActionDefinition();
    $request->updateBudgetActionRequest->definition->ssmActionDefinition->actionSubType = ActionSubTypeEnum::STOP_RDS_INSTANCES;
    $request->updateBudgetActionRequest->definition->ssmActionDefinition->instanceIds = [
        'eius',
        'aspernatur',
        'perferendis',
        'amet',
    ];
    $request->updateBudgetActionRequest->definition->ssmActionDefinition->region = 'optio';
    $request->updateBudgetActionRequest->executionRoleArn = 'accusamus';
    $request->updateBudgetActionRequest->notificationType = NotificationTypeEnum::ACTUAL;
    $request->updateBudgetActionRequest->subscribers = [
        new Subscriber(),
        new Subscriber(),
        new Subscriber(),
        new Subscriber(),
    ];
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'similique';
    $request->xAmzTarget = UpdateBudgetActionXAmzTargetEnum::AWS_BUDGET_SERVICE_GATEWAY_UPDATE_BUDGET_ACTION;

    $response = $sdk->sdk->updateBudgetAction($request);

    if ($response->updateBudgetActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNotification

Updates a notification.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNotificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateNotificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Notification;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ThresholdTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNotificationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNotificationRequest();
    $request->updateNotificationRequest = new UpdateNotificationRequest();
    $request->updateNotificationRequest->accountId = 'alias';
    $request->updateNotificationRequest->budgetName = 'at';
    $request->updateNotificationRequest->newNotification = new Notification();
    $request->updateNotificationRequest->newNotification->comparisonOperator = ComparisonOperatorEnum::GREATER_THAN;
    $request->updateNotificationRequest->newNotification->notificationState = NotificationStateEnum::OK;
    $request->updateNotificationRequest->newNotification->notificationType = NotificationTypeEnum::ACTUAL;
    $request->updateNotificationRequest->newNotification->threshold = 7980.47;
    $request->updateNotificationRequest->newNotification->thresholdType = ThresholdTypeEnum::ABSOLUTE_VALUE;
    $request->updateNotificationRequest->oldNotification = new Notification();
    $request->updateNotificationRequest->oldNotification->comparisonOperator = ComparisonOperatorEnum::GREATER_THAN;
    $request->updateNotificationRequest->oldNotification->notificationState = NotificationStateEnum::ALARM;
    $request->updateNotificationRequest->oldNotification->notificationType = NotificationTypeEnum::FORECASTED;
    $request->updateNotificationRequest->oldNotification->threshold = 4561.3;
    $request->updateNotificationRequest->oldNotification->thresholdType = ThresholdTypeEnum::ABSOLUTE_VALUE;
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = UpdateNotificationXAmzTargetEnum::AWS_BUDGET_SERVICE_GATEWAY_UPDATE_NOTIFICATION;

    $response = $sdk->sdk->updateNotification($request);

    if ($response->updateNotificationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSubscriber

Updates a subscriber.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriberRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSubscriberRequest;
use \OpenAPI\OpenAPI\Models\Shared\Subscriber;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Notification;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ThresholdTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriberXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSubscriberRequest();
    $request->updateSubscriberRequest = new UpdateSubscriberRequest();
    $request->updateSubscriberRequest->accountId = 'numquam';
    $request->updateSubscriberRequest->budgetName = 'enim';
    $request->updateSubscriberRequest->newSubscriber = new Subscriber();
    $request->updateSubscriberRequest->newSubscriber->address = 'dolorem';
    $request->updateSubscriberRequest->newSubscriber->subscriptionType = SubscriptionTypeEnum::EMAIL;
    $request->updateSubscriberRequest->notification = new Notification();
    $request->updateSubscriberRequest->notification->comparisonOperator = ComparisonOperatorEnum::LESS_THAN;
    $request->updateSubscriberRequest->notification->notificationState = NotificationStateEnum::OK;
    $request->updateSubscriberRequest->notification->notificationType = NotificationTypeEnum::ACTUAL;
    $request->updateSubscriberRequest->notification->threshold = 7115.84;
    $request->updateSubscriberRequest->notification->thresholdType = ThresholdTypeEnum::PERCENTAGE;
    $request->updateSubscriberRequest->oldSubscriber = new Subscriber();
    $request->updateSubscriberRequest->oldSubscriber->address = 'sed';
    $request->updateSubscriberRequest->oldSubscriber->subscriptionType = SubscriptionTypeEnum::SNS;
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = UpdateSubscriberXAmzTargetEnum::AWS_BUDGET_SERVICE_GATEWAY_UPDATE_SUBSCRIBER;

    $response = $sdk->sdk->updateSubscriber($request);

    if ($response->updateSubscriberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
