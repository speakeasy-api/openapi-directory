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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateBudgetRequest{
        Headers: operations.CreateBudgetHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AWSBudgetServiceGateway.CreateBudget",
        },
        Request: shared.CreateBudgetRequest{
            AccountID: "nihil",
            Budget: shared.Budget{
                AutoAdjustData: &shared.AutoAdjustData{
                    AutoAdjustType: "FORECAST",
                    HistoricalOptions: &shared.HistoricalOptions{
                        BudgetAdjustmentPeriod: 645894,
                        LookBackAvailablePeriods: 384382,
                    },
                    LastAutoAdjustTime: "2022-10-20T19:14:38.951Z",
                },
                BudgetLimit: &shared.Spend{
                    Amount: "ullam",
                    Unit: "saepe",
                },
                BudgetName: "inventore",
                BudgetType: "SAVINGS_PLANS_COVERAGE",
                CalculatedSpend: &shared.CalculatedSpend{
                    ActualSpend: shared.Spend{
                        Amount: "enim",
                        Unit: "eum",
                    },
                    ForecastedSpend: &shared.Spend{
                        Amount: "voluptatum",
                        Unit: "autem",
                    },
                },
                CostFilters: map[string][]string{
                    "non": []string{
                        "similique",
                        "reprehenderit",
                    },
                    "molestiae": []string{
                        "quasi",
                        "laboriosam",
                        "dicta",
                        "est",
                    },
                    "voluptatem": []string{
                        "fugiat",
                        "a",
                    },
                    "omnis": []string{
                        "accusamus",
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
                LastUpdatedTime: "2022-05-15T22:32:38.090Z",
                PlannedBudgetLimits: map[string]shared.Spend{
                    "rem": shared.Spend{
                        Amount: "quibusdam",
                        Unit: "et",
                    },
                    "praesentium": shared.Spend{
                        Amount: "occaecati",
                        Unit: "dolor",
                    },
                    "soluta": shared.Spend{
                        Amount: "sed",
                        Unit: "quisquam",
                    },
                    "rerum": shared.Spend{
                        Amount: "culpa",
                        Unit: "qui",
                    },
                },
                TimePeriod: &shared.TimePeriod{
                    End: "2022-09-14T09:07:07.183Z",
                    Start: "2022-04-18T17:12:30.698Z",
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
                            Address: "id",
                            SubscriptionType: "SNS",
                        },
                        shared.Subscriber{
                            Address: "numquam",
                            SubscriptionType: "EMAIL",
                        },
                        shared.Subscriber{
                            Address: "dolores",
                            SubscriptionType: "SNS",
                        },
                        shared.Subscriber{
                            Address: "quia",
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
                            Address: "ut",
                            SubscriptionType: "EMAIL",
                        },
                        shared.Subscriber{
                            Address: "qui",
                            SubscriptionType: "SNS",
                        },
                        shared.Subscriber{
                            Address: "laborum",
                            SubscriptionType: "SNS",
                        },
                        shared.Subscriber{
                            Address: "ut",
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
                            Address: "ipsum",
                            SubscriptionType: "SNS",
                        },
                        shared.Subscriber{
                            Address: "ea",
                            SubscriptionType: "SNS",
                        },
                        shared.Subscriber{
                            Address: "placeat",
                            SubscriptionType: "SNS",
                        },
                    },
                },
            },
        },
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
## SDK Available Operations

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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
