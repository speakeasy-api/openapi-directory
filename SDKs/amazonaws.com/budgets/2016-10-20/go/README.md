# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/budgets/2016-10-20/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateBudgetRequest{
        CreateBudgetRequest: shared.CreateBudgetRequest{
            AccountID: "corrupti",
            Budget: shared.Budget{
                AutoAdjustData: &shared.AutoAdjustData{
                    AutoAdjustType: "FORECAST",
                    HistoricalOptions: &shared.HistoricalOptions{
                        BudgetAdjustmentPeriod: 715190,
                        LookBackAvailablePeriods: 844266,
                    },
                    LastAutoAdjustTime: "2021-04-14T16:47:33.722Z",
                },
                BudgetLimit: &shared.Spend{
                    Amount: "corrupti",
                    Unit: "illum",
                },
                BudgetName: "vel",
                BudgetType: "RI_COVERAGE",
                CalculatedSpend: &shared.CalculatedSpend{
                    ActualSpend: shared.Spend{
                        Amount: "deserunt",
                        Unit: "suscipit",
                    },
                    ForecastedSpend: &shared.Spend{
                        Amount: "iure",
                        Unit: "magnam",
                    },
                },
                CostFilters: map[string][]string{
                    "ipsa": []string{
                        "tempora",
                        "suscipit",
                        "molestiae",
                        "minus",
                    },
                    "placeat": []string{
                        "iusto",
                        "excepturi",
                        "nisi",
                    },
                    "recusandae": []string{
                        "ab",
                        "quis",
                        "veritatis",
                        "deserunt",
                    },
                    "perferendis": []string{
                        "repellendus",
                        "sapiente",
                    },
                },
                CostTypes: &shared.CostTypes{
                    IncludeCredit: false,
                    IncludeDiscount: false,
                    IncludeOtherSubscription: false,
                    IncludeRecurring: false,
                    IncludeRefund: false,
                    IncludeSubscription: false,
                    IncludeSupport: false,
                    IncludeTax: false,
                    IncludeUpfront: false,
                    UseAmortized: false,
                    UseBlended: false,
                },
                LastUpdatedTime: "2022-07-31T07:34:52.790Z",
                PlannedBudgetLimits: map[string]shared.Spend{
                    "at": shared.Spend{
                        Amount: "maiores",
                        Unit: "molestiae",
                    },
                    "quod": shared.Spend{
                        Amount: "quod",
                        Unit: "esse",
                    },
                    "totam": shared.Spend{
                        Amount: "porro",
                        Unit: "dolorum",
                    },
                    "dicta": shared.Spend{
                        Amount: "nam",
                        Unit: "officia",
                    },
                },
                TimePeriod: &shared.TimePeriod{
                    End: "2022-09-18T08:27:00.721Z",
                    Start: "2021-02-10T09:24:01.909Z",
                },
                TimeUnit: "ANNUALLY",
            },
            NotificationsWithSubscribers: []shared.NotificationWithSubscribers{
                shared.NotificationWithSubscribers{
                    Notification: shared.Notification{
                        ComparisonOperator: "GREATER_THAN",
                        NotificationState: "OK",
                        NotificationType: "ACTUAL",
                        Threshold: 2645.55,
                        ThresholdType: "PERCENTAGE",
                    },
                    Subscribers: []shared.Subscriber{
                        shared.Subscriber{
                            Address: "cum",
                            SubscriptionType: "SNS",
                        },
                        shared.Subscriber{
                            Address: "ipsum",
                            SubscriptionType: "EMAIL",
                        },
                        shared.Subscriber{
                            Address: "aspernatur",
                            SubscriptionType: "SNS",
                        },
                        shared.Subscriber{
                            Address: "ad",
                            SubscriptionType: "EMAIL",
                        },
                    },
                },
                shared.NotificationWithSubscribers{
                    Notification: shared.Notification{
                        ComparisonOperator: "GREATER_THAN",
                        NotificationState: "ALARM",
                        NotificationType: "ACTUAL",
                        Threshold: 6169.34,
                        ThresholdType: "PERCENTAGE",
                    },
                    Subscribers: []shared.Subscriber{
                        shared.Subscriber{
                            Address: "saepe",
                            SubscriptionType: "EMAIL",
                        },
                        shared.Subscriber{
                            Address: "in",
                            SubscriptionType: "SNS",
                        },
                        shared.Subscriber{
                            Address: "iste",
                            SubscriptionType: "SNS",
                        },
                        shared.Subscriber{
                            Address: "saepe",
                            SubscriptionType: "EMAIL",
                        },
                    },
                },
                shared.NotificationWithSubscribers{
                    Notification: shared.Notification{
                        ComparisonOperator: "GREATER_THAN",
                        NotificationState: "OK",
                        NotificationType: "FORECASTED",
                        Threshold: 6667.67,
                        ThresholdType: "ABSOLUTE_VALUE",
                    },
                    Subscribers: []shared.Subscriber{
                        shared.Subscriber{
                            Address: "dolores",
                            SubscriptionType: "SNS",
                        },
                        shared.Subscriber{
                            Address: "corporis",
                            SubscriptionType: "SNS",
                        },
                        shared.Subscriber{
                            Address: "nobis",
                            SubscriptionType: "SNS",
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: "omnis",
        XAmzContentSha256: "nemo",
        XAmzCredential: "minima",
        XAmzDate: "excepturi",
        XAmzSecurityToken: "accusantium",
        XAmzSignature: "iure",
        XAmzSignedHeaders: "culpa",
        XAmzTarget: "AWSBudgetServiceGateway.CreateBudget",
    }

    ctx := context.Background()
    res, err := s.CreateBudget(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBudgetResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateBudget` - <p>Creates a budget and, if included, notifications and subscribers. </p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p> </important>
* `CreateBudgetAction` -  Creates a budget action. 
* `CreateNotification` - Creates a notification. You must create the budget before you create the associated notification.
* `CreateSubscriber` - Creates a subscriber. You must create the associated budget and notification before you create the subscriber.
* `DeleteBudget` - <p>Deletes a budget. You can delete your budget at any time.</p> <important> <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p> </important>
* `DeleteBudgetAction` -  Deletes a budget action. 
* `DeleteNotification` - <p>Deletes a notification.</p> <important> <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p> </important>
* `DeleteSubscriber` - <p>Deletes a subscriber.</p> <important> <p>Deleting the last subscriber to a notification also deletes the notification.</p> </important>
* `DescribeBudget` - <p>Describes a budget.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p> </important>
* `DescribeBudgetAction` -  Describes a budget action detail. 
* `DescribeBudgetActionHistories` -  Describes a budget action history detail. 
* `DescribeBudgetActionsForAccount` -  Describes all of the budget actions for an account. 
* `DescribeBudgetActionsForBudget` -  Describes all of the budget actions for a budget. 
* `DescribeBudgetNotificationsForAccount` -  Lists the budget names and notifications that are associated with an account. 
* `DescribeBudgetPerformanceHistory` - Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.
* `DescribeBudgets` - <p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>
* `DescribeNotificationsForBudget` - Lists the notifications that are associated with a budget.
* `DescribeSubscribersForNotification` - Lists the subscribers that are associated with a notification.
* `ExecuteBudgetAction` -  Executes a budget action. 
* `UpdateBudget` - <p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until Amazon Web Services has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>
* `UpdateBudgetAction` -  Updates a budget action. 
* `UpdateNotification` - Updates a notification.
* `UpdateSubscriber` - Updates a subscriber.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
