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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateBudget(ctx, operations.CreateBudgetRequest{
        CreateBudgetRequest: shared.CreateBudgetRequest{
            AccountID: "corrupti",
            Budget: shared.Budget{
                AutoAdjustData: &shared.AutoAdjustData{
                    AutoAdjustType: shared.AutoAdjustTypeEnumForecast,
                    HistoricalOptions: &shared.HistoricalOptions{
                        BudgetAdjustmentPeriod: 715190,
                        LookBackAvailablePeriods: sdk.Int64(844266),
                    },
                    LastAutoAdjustTime: types.MustTimeFromString("2021-04-14T16:47:33.722Z"),
                },
                BudgetLimit: &shared.Spend{
                    Amount: "corrupti",
                    Unit: "illum",
                },
                BudgetName: "vel",
                BudgetType: shared.BudgetTypeEnumRiCoverage,
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
                    IncludeCredit: sdk.Bool(false),
                    IncludeDiscount: sdk.Bool(false),
                    IncludeOtherSubscription: sdk.Bool(false),
                    IncludeRecurring: sdk.Bool(false),
                    IncludeRefund: sdk.Bool(false),
                    IncludeSubscription: sdk.Bool(false),
                    IncludeSupport: sdk.Bool(false),
                    IncludeTax: sdk.Bool(false),
                    IncludeUpfront: sdk.Bool(false),
                    UseAmortized: sdk.Bool(false),
                    UseBlended: sdk.Bool(false),
                },
                LastUpdatedTime: types.MustTimeFromString("2022-07-31T07:34:52.790Z"),
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
                    End: types.MustTimeFromString("2022-09-18T08:27:00.721Z"),
                    Start: types.MustTimeFromString("2021-02-10T09:24:01.909Z"),
                },
                TimeUnit: shared.TimeUnitEnumAnnually,
            },
            NotificationsWithSubscribers: []shared.NotificationWithSubscribers{
                shared.NotificationWithSubscribers{
                    Notification: shared.Notification{
                        ComparisonOperator: shared.ComparisonOperatorEnumGreaterThan,
                        NotificationState: shared.NotificationStateEnumOk.ToPointer(),
                        NotificationType: shared.NotificationTypeEnumActual,
                        Threshold: 2645.55,
                        ThresholdType: shared.ThresholdTypeEnumPercentage.ToPointer(),
                    },
                    Subscribers: []shared.Subscriber{
                        shared.Subscriber{
                            Address: "cum",
                            SubscriptionType: shared.SubscriptionTypeEnumSns,
                        },
                        shared.Subscriber{
                            Address: "ipsum",
                            SubscriptionType: shared.SubscriptionTypeEnumEmail,
                        },
                        shared.Subscriber{
                            Address: "aspernatur",
                            SubscriptionType: shared.SubscriptionTypeEnumSns,
                        },
                        shared.Subscriber{
                            Address: "ad",
                            SubscriptionType: shared.SubscriptionTypeEnumEmail,
                        },
                    },
                },
                shared.NotificationWithSubscribers{
                    Notification: shared.Notification{
                        ComparisonOperator: shared.ComparisonOperatorEnumGreaterThan,
                        NotificationState: shared.NotificationStateEnumAlarm.ToPointer(),
                        NotificationType: shared.NotificationTypeEnumActual,
                        Threshold: 6169.34,
                        ThresholdType: shared.ThresholdTypeEnumPercentage.ToPointer(),
                    },
                    Subscribers: []shared.Subscriber{
                        shared.Subscriber{
                            Address: "saepe",
                            SubscriptionType: shared.SubscriptionTypeEnumEmail,
                        },
                        shared.Subscriber{
                            Address: "in",
                            SubscriptionType: shared.SubscriptionTypeEnumSns,
                        },
                        shared.Subscriber{
                            Address: "iste",
                            SubscriptionType: shared.SubscriptionTypeEnumSns,
                        },
                        shared.Subscriber{
                            Address: "saepe",
                            SubscriptionType: shared.SubscriptionTypeEnumEmail,
                        },
                    },
                },
                shared.NotificationWithSubscribers{
                    Notification: shared.Notification{
                        ComparisonOperator: shared.ComparisonOperatorEnumGreaterThan,
                        NotificationState: shared.NotificationStateEnumOk.ToPointer(),
                        NotificationType: shared.NotificationTypeEnumForecasted,
                        Threshold: 6667.67,
                        ThresholdType: shared.ThresholdTypeEnumAbsoluteValue.ToPointer(),
                    },
                    Subscribers: []shared.Subscriber{
                        shared.Subscriber{
                            Address: "dolores",
                            SubscriptionType: shared.SubscriptionTypeEnumSns,
                        },
                        shared.Subscriber{
                            Address: "corporis",
                            SubscriptionType: shared.SubscriptionTypeEnumSns,
                        },
                        shared.Subscriber{
                            Address: "nobis",
                            SubscriptionType: shared.SubscriptionTypeEnumSns,
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("culpa"),
        XAmzTarget: operations.CreateBudgetXAmzTargetEnumAwsBudgetServiceGatewayCreateBudget,
    })
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

### [SDK](docs/sdk/README.md)

* [CreateBudget](docs/sdk/README.md#createbudget) - <p>Creates a budget and, if included, notifications and subscribers. </p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p> </important>
* [CreateBudgetAction](docs/sdk/README.md#createbudgetaction) -  Creates a budget action. 
* [CreateNotification](docs/sdk/README.md#createnotification) - Creates a notification. You must create the budget before you create the associated notification.
* [CreateSubscriber](docs/sdk/README.md#createsubscriber) - Creates a subscriber. You must create the associated budget and notification before you create the subscriber.
* [DeleteBudget](docs/sdk/README.md#deletebudget) - <p>Deletes a budget. You can delete your budget at any time.</p> <important> <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p> </important>
* [DeleteBudgetAction](docs/sdk/README.md#deletebudgetaction) -  Deletes a budget action. 
* [DeleteNotification](docs/sdk/README.md#deletenotification) - <p>Deletes a notification.</p> <important> <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p> </important>
* [DeleteSubscriber](docs/sdk/README.md#deletesubscriber) - <p>Deletes a subscriber.</p> <important> <p>Deleting the last subscriber to a notification also deletes the notification.</p> </important>
* [DescribeBudget](docs/sdk/README.md#describebudget) - <p>Describes a budget.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p> </important>
* [DescribeBudgetAction](docs/sdk/README.md#describebudgetaction) -  Describes a budget action detail. 
* [DescribeBudgetActionHistories](docs/sdk/README.md#describebudgetactionhistories) -  Describes a budget action history detail. 
* [DescribeBudgetActionsForAccount](docs/sdk/README.md#describebudgetactionsforaccount) -  Describes all of the budget actions for an account. 
* [DescribeBudgetActionsForBudget](docs/sdk/README.md#describebudgetactionsforbudget) -  Describes all of the budget actions for a budget. 
* [DescribeBudgetNotificationsForAccount](docs/sdk/README.md#describebudgetnotificationsforaccount) -  Lists the budget names and notifications that are associated with an account. 
* [DescribeBudgetPerformanceHistory](docs/sdk/README.md#describebudgetperformancehistory) - Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.
* [DescribeBudgets](docs/sdk/README.md#describebudgets) - <p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>
* [DescribeNotificationsForBudget](docs/sdk/README.md#describenotificationsforbudget) - Lists the notifications that are associated with a budget.
* [DescribeSubscribersForNotification](docs/sdk/README.md#describesubscribersfornotification) - Lists the subscribers that are associated with a notification.
* [ExecuteBudgetAction](docs/sdk/README.md#executebudgetaction) -  Executes a budget action. 
* [UpdateBudget](docs/sdk/README.md#updatebudget) - <p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until Amazon Web Services has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>
* [UpdateBudgetAction](docs/sdk/README.md#updatebudgetaction) -  Updates a budget action. 
* [UpdateNotification](docs/sdk/README.md#updatenotification) - Updates a notification.
* [UpdateSubscriber](docs/sdk/README.md#updatesubscriber) - Updates a subscriber.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
