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