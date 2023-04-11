# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/budgets/2016-10-20/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/budgets/2016-10-20/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateBudgetRequest,
  CreateBudgetResponse,
  CreateBudgetXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  SubscriptionTypeEnum,
  ThresholdTypeEnum,
  NotificationTypeEnum,
  NotificationStateEnum,
  ComparisonOperatorEnum,
  TimeUnitEnum,
  BudgetTypeEnum,
  AutoAdjustTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateBudgetRequest = {
  createBudgetRequest: {
    accountId: "corrupti",
    budget: {
      autoAdjustData: {
        autoAdjustType: AutoAdjustTypeEnum.Forecast,
        historicalOptions: {
          budgetAdjustmentPeriod: 715190,
          lookBackAvailablePeriods: 844266,
        },
        lastAutoAdjustTime: "2021-04-14T16:47:33.722Z",
      },
      budgetLimit: {
        amount: "corrupti",
        unit: "illum",
      },
      budgetName: "vel",
      budgetType: BudgetTypeEnum.RiCoverage,
      calculatedSpend: {
        actualSpend: {
          amount: "deserunt",
          unit: "suscipit",
        },
        forecastedSpend: {
          amount: "iure",
          unit: "magnam",
        },
      },
      costFilters: {
        "ipsa": [
          "tempora",
          "suscipit",
          "molestiae",
          "minus",
        ],
        "placeat": [
          "iusto",
          "excepturi",
          "nisi",
        ],
        "recusandae": [
          "ab",
          "quis",
          "veritatis",
          "deserunt",
        ],
        "perferendis": [
          "repellendus",
          "sapiente",
        ],
      },
      costTypes: {
        includeCredit: false,
        includeDiscount: false,
        includeOtherSubscription: false,
        includeRecurring: false,
        includeRefund: false,
        includeSubscription: false,
        includeSupport: false,
        includeTax: false,
        includeUpfront: false,
        useAmortized: false,
        useBlended: false,
      },
      lastUpdatedTime: "2022-07-31T07:34:52.790Z",
      plannedBudgetLimits: {
        "at": {
          amount: "maiores",
          unit: "molestiae",
        },
        "quod": {
          amount: "quod",
          unit: "esse",
        },
        "totam": {
          amount: "porro",
          unit: "dolorum",
        },
        "dicta": {
          amount: "nam",
          unit: "officia",
        },
      },
      timePeriod: {
        end: "2022-09-18T08:27:00.721Z",
        start: "2021-02-10T09:24:01.909Z",
      },
      timeUnit: TimeUnitEnum.Annually,
    },
    notificationsWithSubscribers: [
      {
        notification: {
          comparisonOperator: ComparisonOperatorEnum.GreaterThan,
          notificationState: NotificationStateEnum.Ok,
          notificationType: NotificationTypeEnum.Actual,
          threshold: 2645.55,
          thresholdType: ThresholdTypeEnum.Percentage,
        },
        subscribers: [
          {
            address: "cum",
            subscriptionType: SubscriptionTypeEnum.Sns,
          },
          {
            address: "ipsum",
            subscriptionType: SubscriptionTypeEnum.Email,
          },
          {
            address: "aspernatur",
            subscriptionType: SubscriptionTypeEnum.Sns,
          },
          {
            address: "ad",
            subscriptionType: SubscriptionTypeEnum.Email,
          },
        ],
      },
      {
        notification: {
          comparisonOperator: ComparisonOperatorEnum.GreaterThan,
          notificationState: NotificationStateEnum.Alarm,
          notificationType: NotificationTypeEnum.Actual,
          threshold: 6169.34,
          thresholdType: ThresholdTypeEnum.Percentage,
        },
        subscribers: [
          {
            address: "saepe",
            subscriptionType: SubscriptionTypeEnum.Email,
          },
          {
            address: "in",
            subscriptionType: SubscriptionTypeEnum.Sns,
          },
          {
            address: "iste",
            subscriptionType: SubscriptionTypeEnum.Sns,
          },
          {
            address: "saepe",
            subscriptionType: SubscriptionTypeEnum.Email,
          },
        ],
      },
      {
        notification: {
          comparisonOperator: ComparisonOperatorEnum.GreaterThan,
          notificationState: NotificationStateEnum.Ok,
          notificationType: NotificationTypeEnum.Forecasted,
          threshold: 6667.67,
          thresholdType: ThresholdTypeEnum.AbsoluteValue,
        },
        subscribers: [
          {
            address: "dolores",
            subscriptionType: SubscriptionTypeEnum.Sns,
          },
          {
            address: "corporis",
            subscriptionType: SubscriptionTypeEnum.Sns,
          },
          {
            address: "nobis",
            subscriptionType: SubscriptionTypeEnum.Sns,
          },
        ],
      },
    ],
  },
  xAmzAlgorithm: "omnis",
  xAmzContentSha256: "nemo",
  xAmzCredential: "minima",
  xAmzDate: "excepturi",
  xAmzSecurityToken: "accusantium",
  xAmzSignature: "iure",
  xAmzSignedHeaders: "culpa",
  xAmzTarget: CreateBudgetXAmzTargetEnum.AWSBudgetServiceGatewayCreateBudget,
};

sdk.createBudget(req).then((res: CreateBudgetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createBudget` - <p>Creates a budget and, if included, notifications and subscribers. </p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p> </important>
* `createBudgetAction` -  Creates a budget action. 
* `createNotification` - Creates a notification. You must create the budget before you create the associated notification.
* `createSubscriber` - Creates a subscriber. You must create the associated budget and notification before you create the subscriber.
* `deleteBudget` - <p>Deletes a budget. You can delete your budget at any time.</p> <important> <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p> </important>
* `deleteBudgetAction` -  Deletes a budget action. 
* `deleteNotification` - <p>Deletes a notification.</p> <important> <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p> </important>
* `deleteSubscriber` - <p>Deletes a subscriber.</p> <important> <p>Deleting the last subscriber to a notification also deletes the notification.</p> </important>
* `describeBudget` - <p>Describes a budget.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p> </important>
* `describeBudgetAction` -  Describes a budget action detail. 
* `describeBudgetActionHistories` -  Describes a budget action history detail. 
* `describeBudgetActionsForAccount` -  Describes all of the budget actions for an account. 
* `describeBudgetActionsForBudget` -  Describes all of the budget actions for a budget. 
* `describeBudgetNotificationsForAccount` -  Lists the budget names and notifications that are associated with an account. 
* `describeBudgetPerformanceHistory` - Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.
* `describeBudgets` - <p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>
* `describeNotificationsForBudget` - Lists the notifications that are associated with a budget.
* `describeSubscribersForNotification` - Lists the subscribers that are associated with a notification.
* `executeBudgetAction` -  Executes a budget action. 
* `updateBudget` - <p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until Amazon Web Services has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>
* `updateBudgetAction` -  Updates a budget action. 
* `updateNotification` - Updates a notification.
* `updateSubscriber` - Updates a subscriber.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

