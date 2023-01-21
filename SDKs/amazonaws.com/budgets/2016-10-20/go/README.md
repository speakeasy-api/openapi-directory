# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateBudgetRequest{
        Headers: operations.CreateBudgetHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AWSBudgetServiceGateway.CreateBudget",
        },
        Request: shared.CreateBudgetRequest{
            AccountID: "fugit",
            Budget: shared.Budget{
                BudgetLimit: &shared.Spend{
                    Amount: "et",
                    Unit: "nihil",
                },
                BudgetName: "rerum",
                BudgetType: "SAVINGS_PLANS_COVERAGE",
                CalculatedSpend: &shared.CalculatedSpend{
                    ActualSpend: shared.Spend{
                        Amount: "debitis",
                        Unit: "voluptatum",
                    },
                    ForecastedSpend: &shared.Spend{
                        Amount: "et",
                        Unit: "ut",
                    },
                },
                CostFilters: map[string][]string{
                    "et": []string{
                        "iste",
                    },
                    "vitae": []string{
                        "dolores",
                        "illum",
                        "debitis",
                    },
                    "vel": []string{
                        "dolore",
                    },
                },
                CostTypes: &shared.CostTypes{
                    IncludeCredit: false,
                    IncludeDiscount: true,
                    IncludeOtherSubscription: true,
                    IncludeRecurring: false,
                    IncludeRefund: false,
                    IncludeSubscription: true,
                    IncludeSupport: false,
                    IncludeTax: true,
                    IncludeUpfront: true,
                    UseAmortized: true,
                    UseBlended: false,
                },
                LastUpdatedTime: "1987-09-29T10:21:53Z",
                PlannedBudgetLimits: map[string]shared.Spend{
                    "illo": shared.Spend{
                        Amount: "sed",
                        Unit: "officiis",
                    },
                },
                TimePeriod: &shared.TimePeriod{
                    End: "2017-04-22T14:51:53Z",
                    Start: "1990-12-08T19:16:18Z",
                },
                TimeUnit: "MONTHLY",
            },
            NotificationsWithSubscribers: []shared.NotificationWithSubscribers{
                shared.NotificationWithSubscribers{
                    Notification: shared.Notification{
                        ComparisonOperator: "LESS_THAN",
                        NotificationState: "OK",
                        NotificationType: "ACTUAL",
                        Threshold: 19.100000,
                        ThresholdType: "ABSOLUTE_VALUE",
                    },
                    Subscribers: []shared.Subscriber{
                        shared.Subscriber{
                            Address: "exercitationem",
                            SubscriptionType: "SNS",
                        },
                        shared.Subscriber{
                            Address: "reprehenderit",
                            SubscriptionType: "EMAIL",
                        },
                        shared.Subscriber{
                            Address: "maiores",
                            SubscriptionType: "SNS",
                        },
                    },
                },
                shared.NotificationWithSubscribers{
                    Notification: shared.Notification{
                        ComparisonOperator: "LESS_THAN",
                        NotificationState: "ALARM",
                        NotificationType: "FORECASTED",
                        Threshold: 80.199997,
                        ThresholdType: "ABSOLUTE_VALUE",
                    },
                    Subscribers: []shared.Subscriber{
                        shared.Subscriber{
                            Address: "ex",
                            SubscriptionType: "SNS",
                        },
                    },
                },
                shared.NotificationWithSubscribers{
                    Notification: shared.Notification{
                        ComparisonOperator: "GREATER_THAN",
                        NotificationState: "OK",
                        NotificationType: "FORECASTED",
                        Threshold: 89.099998,
                        ThresholdType: "ABSOLUTE_VALUE",
                    },
                    Subscribers: []shared.Subscriber{
                        shared.Subscriber{
                            Address: "qui",
                            SubscriptionType: "SNS",
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.CreateBudget(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBudgetResponse != nil {
        // handle response
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
* `DescribeBudgetPerformanceHistory` - Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.
* `DescribeBudgets` - <p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>
* `DescribeNotificationsForBudget` - Lists the notifications that are associated with a budget.
* `DescribeSubscribersForNotification` - Lists the subscribers that are associated with a notification.
* `ExecuteBudgetAction` -  Executes a budget action. 
* `UpdateBudget` - <p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until AWS has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>
* `UpdateBudgetAction` -  Updates a budget action. 
* `UpdateNotification` - Updates a notification.
* `UpdateSubscriber` - Updates a subscriber.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
