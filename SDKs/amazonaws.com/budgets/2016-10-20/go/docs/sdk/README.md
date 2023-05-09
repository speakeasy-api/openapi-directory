# SDK

## Overview

<p>Use the Amazon Web Services Budgets API to plan your service usage, service costs, and instance reservations. This API reference provides descriptions, syntax, and usage examples for each of the actions and data types for the Amazon Web Services Budgets feature. </p> <p>Budgets provide you with a way to see the following information:</p> <ul> <li> <p>How close your plan is to your budgeted amount or to the free tier limits</p> </li> <li> <p>Your usage-to-date, including how much you've used of your Reserved Instances (RIs)</p> </li> <li> <p>Your current estimated charges from Amazon Web Services, and how much your predicted usage will accrue in charges by the end of the month</p> </li> <li> <p>How much of your budget has been used</p> </li> </ul> <p>Amazon Web Services updates your budget status several times a day. Budgets track your unblended costs, subscriptions, refunds, and RIs. You can create the following types of budgets:</p> <ul> <li> <p> <b>Cost budgets</b> - Plan how much you want to spend on a service.</p> </li> <li> <p> <b>Usage budgets</b> - Plan how much you want to use one or more services.</p> </li> <li> <p> <b>RI utilization budgets</b> - Define a utilization threshold, and receive alerts when your RI usage falls below that threshold. This lets you see if your RIs are unused or under-utilized.</p> </li> <li> <p> <b>RI coverage budgets</b> - Define a coverage threshold, and receive alerts when the number of your instance hours that are covered by RIs fall below that threshold. This lets you see how much of your instance usage is covered by a reservation.</p> </li> </ul> <p>Service Endpoint</p> <p>The Amazon Web Services Budgets API provides the following endpoint:</p> <ul> <li> <p>https://budgets.amazonaws.com</p> </li> </ul> <p>For information about costs that are associated with the Amazon Web Services Budgets API, see <a href="https://aws.amazon.com/aws-cost-management/pricing/">Amazon Web Services Cost Management Pricing</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/budgets/>
### Available Operations

* [CreateBudget](#createbudget) - <p>Creates a budget and, if included, notifications and subscribers. </p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p> </important>
* [CreateBudgetAction](#createbudgetaction) -  Creates a budget action. 
* [CreateNotification](#createnotification) - Creates a notification. You must create the budget before you create the associated notification.
* [CreateSubscriber](#createsubscriber) - Creates a subscriber. You must create the associated budget and notification before you create the subscriber.
* [DeleteBudget](#deletebudget) - <p>Deletes a budget. You can delete your budget at any time.</p> <important> <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p> </important>
* [DeleteBudgetAction](#deletebudgetaction) -  Deletes a budget action. 
* [DeleteNotification](#deletenotification) - <p>Deletes a notification.</p> <important> <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p> </important>
* [DeleteSubscriber](#deletesubscriber) - <p>Deletes a subscriber.</p> <important> <p>Deleting the last subscriber to a notification also deletes the notification.</p> </important>
* [DescribeBudget](#describebudget) - <p>Describes a budget.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p> </important>
* [DescribeBudgetAction](#describebudgetaction) -  Describes a budget action detail. 
* [DescribeBudgetActionHistories](#describebudgetactionhistories) -  Describes a budget action history detail. 
* [DescribeBudgetActionsForAccount](#describebudgetactionsforaccount) -  Describes all of the budget actions for an account. 
* [DescribeBudgetActionsForBudget](#describebudgetactionsforbudget) -  Describes all of the budget actions for a budget. 
* [DescribeBudgetNotificationsForAccount](#describebudgetnotificationsforaccount) -  Lists the budget names and notifications that are associated with an account. 
* [DescribeBudgetPerformanceHistory](#describebudgetperformancehistory) - Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.
* [DescribeBudgets](#describebudgets) - <p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>
* [DescribeNotificationsForBudget](#describenotificationsforbudget) - Lists the notifications that are associated with a budget.
* [DescribeSubscribersForNotification](#describesubscribersfornotification) - Lists the subscribers that are associated with a notification.
* [ExecuteBudgetAction](#executebudgetaction) -  Executes a budget action. 
* [UpdateBudget](#updatebudget) - <p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until Amazon Web Services has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>
* [UpdateBudgetAction](#updatebudgetaction) -  Updates a budget action. 
* [UpdateNotification](#updatenotification) - Updates a notification.
* [UpdateSubscriber](#updatesubscriber) - Updates a subscriber.

## CreateBudget

<p>Creates a budget and, if included, notifications and subscribers. </p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p> </important>

### Example Usage

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
    res, err := s.SDK.CreateBudget(ctx, operations.CreateBudgetRequest{
        CreateBudgetRequest: shared.CreateBudgetRequest{
            AccountID: "doloribus",
            Budget: shared.Budget{
                AutoAdjustData: &shared.AutoAdjustData{
                    AutoAdjustType: shared.AutoAdjustTypeEnumForecast,
                    HistoricalOptions: &shared.HistoricalOptions{
                        BudgetAdjustmentPeriod: 102044,
                        LookBackAvailablePeriods: sdk.Int64(652790),
                    },
                    LastAutoAdjustTime: types.MustTimeFromString("2022-05-14T04:53:02.888Z"),
                },
                BudgetLimit: &shared.Spend{
                    Amount: "consequuntur",
                    Unit: "repellat",
                },
                BudgetName: "mollitia",
                BudgetType: shared.BudgetTypeEnumRiCoverage,
                CalculatedSpend: &shared.CalculatedSpend{
                    ActualSpend: shared.Spend{
                        Amount: "numquam",
                        Unit: "commodi",
                    },
                    ForecastedSpend: &shared.Spend{
                        Amount: "quam",
                        Unit: "molestiae",
                    },
                },
                CostFilters: map[string][]string{
                    "error": []string{
                        "quis",
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
                LastUpdatedTime: types.MustTimeFromString("2022-04-29T17:10:10.440Z"),
                PlannedBudgetLimits: map[string]shared.Spend{
                    "enim": shared.Spend{
                        Amount: "odit",
                        Unit: "quo",
                    },
                    "sequi": shared.Spend{
                        Amount: "tenetur",
                        Unit: "ipsam",
                    },
                    "id": shared.Spend{
                        Amount: "possimus",
                        Unit: "aut",
                    },
                },
                TimePeriod: &shared.TimePeriod{
                    End: types.MustTimeFromString("2022-05-18T15:52:05.226Z"),
                    Start: types.MustTimeFromString("2020-12-24T08:13:29.299Z"),
                },
                TimeUnit: shared.TimeUnitEnumDaily,
            },
            NotificationsWithSubscribers: []shared.NotificationWithSubscribers{
                shared.NotificationWithSubscribers{
                    Notification: shared.Notification{
                        ComparisonOperator: shared.ComparisonOperatorEnumEqualTo,
                        NotificationState: shared.NotificationStateEnumAlarm.ToPointer(),
                        NotificationType: shared.NotificationTypeEnumActual,
                        Threshold: 5096.24,
                        ThresholdType: shared.ThresholdTypeEnumAbsoluteValue.ToPointer(),
                    },
                    Subscribers: []shared.Subscriber{
                        shared.Subscriber{
                            Address: "omnis",
                            SubscriptionType: shared.SubscriptionTypeEnumSns,
                        },
                    },
                },
                shared.NotificationWithSubscribers{
                    Notification: shared.Notification{
                        ComparisonOperator: shared.ComparisonOperatorEnumEqualTo,
                        NotificationState: shared.NotificationStateEnumOk.ToPointer(),
                        NotificationType: shared.NotificationTypeEnumActual,
                        Threshold: 4417.11,
                        ThresholdType: shared.ThresholdTypeEnumPercentage.ToPointer(),
                    },
                    Subscribers: []shared.Subscriber{
                        shared.Subscriber{
                            Address: "dicta",
                            SubscriptionType: shared.SubscriptionTypeEnumSns,
                        },
                        shared.Subscriber{
                            Address: "dolore",
                            SubscriptionType: shared.SubscriptionTypeEnumSns,
                        },
                        shared.Subscriber{
                            Address: "dicta",
                            SubscriptionType: shared.SubscriptionTypeEnumEmail,
                        },
                        shared.Subscriber{
                            Address: "enim",
                            SubscriptionType: shared.SubscriptionTypeEnumEmail,
                        },
                    },
                },
                shared.NotificationWithSubscribers{
                    Notification: shared.Notification{
                        ComparisonOperator: shared.ComparisonOperatorEnumLessThan,
                        NotificationState: shared.NotificationStateEnumAlarm.ToPointer(),
                        NotificationType: shared.NotificationTypeEnumActual,
                        Threshold: 2168.22,
                        ThresholdType: shared.ThresholdTypeEnumAbsoluteValue.ToPointer(),
                    },
                    Subscribers: []shared.Subscriber{
                        shared.Subscriber{
                            Address: "excepturi",
                            SubscriptionType: shared.SubscriptionTypeEnumEmail,
                        },
                        shared.Subscriber{
                            Address: "modi",
                            SubscriptionType: shared.SubscriptionTypeEnumEmail,
                        },
                        shared.Subscriber{
                            Address: "rem",
                            SubscriptionType: shared.SubscriptionTypeEnumEmail,
                        },
                    },
                },
                shared.NotificationWithSubscribers{
                    Notification: shared.Notification{
                        ComparisonOperator: shared.ComparisonOperatorEnumGreaterThan,
                        NotificationState: shared.NotificationStateEnumAlarm.ToPointer(),
                        NotificationType: shared.NotificationTypeEnumForecasted,
                        Threshold: 831.12,
                        ThresholdType: shared.ThresholdTypeEnumAbsoluteValue.ToPointer(),
                    },
                    Subscribers: []shared.Subscriber{
                        shared.Subscriber{
                            Address: "enim",
                            SubscriptionType: shared.SubscriptionTypeEnumSns,
                        },
                        shared.Subscriber{
                            Address: "est",
                            SubscriptionType: shared.SubscriptionTypeEnumEmail,
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("qui"),
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

## CreateBudgetAction

 Creates a budget action. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateBudgetAction(ctx, operations.CreateBudgetActionRequest{
        CreateBudgetActionRequest: shared.CreateBudgetActionRequest{
            AccountID: "aliquid",
            ActionThreshold: shared.ActionThreshold{
                ActionThresholdType: shared.ThresholdTypeEnumAbsoluteValue,
                ActionThresholdValue: 5528.22,
            },
            ActionType: shared.ActionTypeEnumApplyIamPolicy,
            ApprovalModel: shared.ApprovalModelEnumAutomatic,
            BudgetName: "assumenda",
            Definition: shared.Definition{
                IamActionDefinition: &shared.IamActionDefinition{
                    Groups: []string{
                        "alias",
                        "fugit",
                    },
                    PolicyArn: "dolorum",
                    Roles: []string{
                        "tempora",
                        "facilis",
                        "tempore",
                    },
                    Users: []string{
                        "delectus",
                        "eum",
                    },
                },
                ScpActionDefinition: &shared.ScpActionDefinition{
                    PolicyID: "non",
                    TargetIds: []string{
                        "sint",
                        "aliquid",
                        "provident",
                        "necessitatibus",
                    },
                },
                SsmActionDefinition: &shared.SsmActionDefinition{
                    ActionSubType: shared.ActionSubTypeEnumStopRdsInstances,
                    InstanceIds: []string{
                        "dolor",
                        "debitis",
                        "a",
                    },
                    Region: "dolorum",
                },
            },
            ExecutionRoleArn: "in",
            NotificationType: shared.NotificationTypeEnumActual,
            Subscribers: []shared.Subscriber{
                shared.Subscriber{
                    Address: "maiores",
                    SubscriptionType: shared.SubscriptionTypeEnumEmail,
                },
                shared.Subscriber{
                    Address: "dicta",
                    SubscriptionType: shared.SubscriptionTypeEnumSns,
                },
                shared.Subscriber{
                    Address: "cumque",
                    SubscriptionType: shared.SubscriptionTypeEnumEmail,
                },
                shared.Subscriber{
                    Address: "ea",
                    SubscriptionType: shared.SubscriptionTypeEnumSns,
                },
            },
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.CreateBudgetActionXAmzTargetEnumAwsBudgetServiceGatewayCreateBudgetAction,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBudgetActionResponse != nil {
        // handle response
    }
}
```

## CreateNotification

Creates a notification. You must create the budget before you create the associated notification.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateNotification(ctx, operations.CreateNotificationRequest{
        CreateNotificationRequest: shared.CreateNotificationRequest{
            AccountID: "quidem",
            BudgetName: "provident",
            Notification: shared.Notification{
                ComparisonOperator: shared.ComparisonOperatorEnumEqualTo,
                NotificationState: shared.NotificationStateEnumAlarm.ToPointer(),
                NotificationType: shared.NotificationTypeEnumForecasted,
                Threshold: 5332.06,
                ThresholdType: shared.ThresholdTypeEnumAbsoluteValue.ToPointer(),
            },
            Subscribers: []shared.Subscriber{
                shared.Subscriber{
                    Address: "deserunt",
                    SubscriptionType: shared.SubscriptionTypeEnumSns,
                },
            },
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.CreateNotificationXAmzTargetEnumAwsBudgetServiceGatewayCreateNotification,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNotificationResponse != nil {
        // handle response
    }
}
```

## CreateSubscriber

Creates a subscriber. You must create the associated budget and notification before you create the subscriber.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateSubscriber(ctx, operations.CreateSubscriberRequest{
        CreateSubscriberRequest: shared.CreateSubscriberRequest{
            AccountID: "distinctio",
            BudgetName: "id",
            Notification: shared.Notification{
                ComparisonOperator: shared.ComparisonOperatorEnumGreaterThan,
                NotificationState: shared.NotificationStateEnumOk.ToPointer(),
                NotificationType: shared.NotificationTypeEnumActual,
                Threshold: 6180.16,
                ThresholdType: shared.ThresholdTypeEnumAbsoluteValue.ToPointer(),
            },
            Subscriber: shared.Subscriber{
                Address: "eum",
                SubscriptionType: shared.SubscriptionTypeEnumEmail,
            },
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.CreateSubscriberXAmzTargetEnumAwsBudgetServiceGatewayCreateSubscriber,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSubscriberResponse != nil {
        // handle response
    }
}
```

## DeleteBudget

<p>Deletes a budget. You can delete your budget at any time.</p> <important> <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteBudget(ctx, operations.DeleteBudgetRequest{
        DeleteBudgetRequest: shared.DeleteBudgetRequest{
            AccountID: "quos",
            BudgetName: "sint",
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.DeleteBudgetXAmzTargetEnumAwsBudgetServiceGatewayDeleteBudget,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteBudgetResponse != nil {
        // handle response
    }
}
```

## DeleteBudgetAction

 Deletes a budget action. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteBudgetAction(ctx, operations.DeleteBudgetActionRequest{
        DeleteBudgetActionRequest: shared.DeleteBudgetActionRequest{
            AccountID: "necessitatibus",
            ActionID: "odit",
            BudgetName: "nemo",
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.DeleteBudgetActionXAmzTargetEnumAwsBudgetServiceGatewayDeleteBudgetAction,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteBudgetActionResponse != nil {
        // handle response
    }
}
```

## DeleteNotification

<p>Deletes a notification.</p> <important> <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteNotification(ctx, operations.DeleteNotificationRequest{
        DeleteNotificationRequest: shared.DeleteNotificationRequest{
            AccountID: "facilis",
            BudgetName: "in",
            Notification: shared.Notification{
                ComparisonOperator: shared.ComparisonOperatorEnumGreaterThan,
                NotificationState: shared.NotificationStateEnumOk.ToPointer(),
                NotificationType: shared.NotificationTypeEnumForecasted,
                Threshold: 3523.12,
                ThresholdType: shared.ThresholdTypeEnumAbsoluteValue.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("repellat"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.DeleteNotificationXAmzTargetEnumAwsBudgetServiceGatewayDeleteNotification,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteNotificationResponse != nil {
        // handle response
    }
}
```

## DeleteSubscriber

<p>Deletes a subscriber.</p> <important> <p>Deleting the last subscriber to a notification also deletes the notification.</p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSubscriber(ctx, operations.DeleteSubscriberRequest{
        DeleteSubscriberRequest: shared.DeleteSubscriberRequest{
            AccountID: "consequuntur",
            BudgetName: "praesentium",
            Notification: shared.Notification{
                ComparisonOperator: shared.ComparisonOperatorEnumLessThan,
                NotificationState: shared.NotificationStateEnumOk.ToPointer(),
                NotificationType: shared.NotificationTypeEnumActual,
                Threshold: 7790.51,
                ThresholdType: shared.ThresholdTypeEnumAbsoluteValue.ToPointer(),
            },
            Subscriber: shared.Subscriber{
                Address: "pariatur",
                SubscriptionType: shared.SubscriptionTypeEnumEmail,
            },
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.DeleteSubscriberXAmzTargetEnumAwsBudgetServiceGatewayDeleteSubscriber,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSubscriberResponse != nil {
        // handle response
    }
}
```

## DescribeBudget

<p>Describes a budget.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeBudget(ctx, operations.DescribeBudgetRequest{
        DescribeBudgetRequest: shared.DescribeBudgetRequest{
            AccountID: "quidem",
            BudgetName: "ipsam",
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("autem"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.DescribeBudgetXAmzTargetEnumAwsBudgetServiceGatewayDescribeBudget,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeBudgetResponse != nil {
        // handle response
    }
}
```

## DescribeBudgetAction

 Describes a budget action detail. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeBudgetAction(ctx, operations.DescribeBudgetActionRequest{
        DescribeBudgetActionRequest: shared.DescribeBudgetActionRequest{
            AccountID: "perferendis",
            ActionID: "fugiat",
            BudgetName: "amet",
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.DescribeBudgetActionXAmzTargetEnumAwsBudgetServiceGatewayDescribeBudgetAction,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeBudgetActionResponse != nil {
        // handle response
    }
}
```

## DescribeBudgetActionHistories

 Describes a budget action history detail. 

### Example Usage

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
    res, err := s.SDK.DescribeBudgetActionHistories(ctx, operations.DescribeBudgetActionHistoriesRequest{
        DescribeBudgetActionHistoriesRequest: shared.DescribeBudgetActionHistoriesRequest{
            AccountID: "quis",
            ActionID: "totam",
            BudgetName: "dignissimos",
            MaxResults: sdk.Int64(54338),
            NextToken: sdk.String("quis"),
            TimePeriod: &shared.TimePeriod{
                End: types.MustTimeFromString("2022-10-27T11:39:54.088Z"),
                Start: types.MustTimeFromString("2022-10-30T14:09:25.982Z"),
            },
        },
        MaxResults: sdk.String("minus"),
        NextToken: sdk.String("quam"),
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.DescribeBudgetActionHistoriesXAmzTargetEnumAwsBudgetServiceGatewayDescribeBudgetActionHistories,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeBudgetActionHistoriesResponse != nil {
        // handle response
    }
}
```

## DescribeBudgetActionsForAccount

 Describes all of the budget actions for an account. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeBudgetActionsForAccount(ctx, operations.DescribeBudgetActionsForAccountRequest{
        DescribeBudgetActionsForAccountRequest: shared.DescribeBudgetActionsForAccountRequest{
            AccountID: "perspiciatis",
            MaxResults: sdk.Int64(31838),
            NextToken: sdk.String("porro"),
        },
        MaxResults: sdk.String("consequuntur"),
        NextToken: sdk.String("blanditiis"),
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("earum"),
        XAmzTarget: operations.DescribeBudgetActionsForAccountXAmzTargetEnumAwsBudgetServiceGatewayDescribeBudgetActionsForAccount,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeBudgetActionsForAccountResponse != nil {
        // handle response
    }
}
```

## DescribeBudgetActionsForBudget

 Describes all of the budget actions for a budget. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeBudgetActionsForBudget(ctx, operations.DescribeBudgetActionsForBudgetRequest{
        DescribeBudgetActionsForBudgetRequest: shared.DescribeBudgetActionsForBudgetRequest{
            AccountID: "modi",
            BudgetName: "iste",
            MaxResults: sdk.Int64(679091),
            NextToken: sdk.String("deleniti"),
        },
        MaxResults: sdk.String("pariatur"),
        NextToken: sdk.String("provident"),
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.DescribeBudgetActionsForBudgetXAmzTargetEnumAwsBudgetServiceGatewayDescribeBudgetActionsForBudget,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeBudgetActionsForBudgetResponse != nil {
        // handle response
    }
}
```

## DescribeBudgetNotificationsForAccount

 Lists the budget names and notifications that are associated with an account. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeBudgetNotificationsForAccount(ctx, operations.DescribeBudgetNotificationsForAccountRequest{
        DescribeBudgetNotificationsForAccountRequest: shared.DescribeBudgetNotificationsForAccountRequest{
            AccountID: "dolorem",
            MaxResults: sdk.Int64(222443),
            NextToken: sdk.String("qui"),
        },
        MaxResults: sdk.String("ipsum"),
        NextToken: sdk.String("hic"),
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.DescribeBudgetNotificationsForAccountXAmzTargetEnumAwsBudgetServiceGatewayDescribeBudgetNotificationsForAccount,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeBudgetNotificationsForAccountResponse != nil {
        // handle response
    }
}
```

## DescribeBudgetPerformanceHistory

Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.

### Example Usage

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
    res, err := s.SDK.DescribeBudgetPerformanceHistory(ctx, operations.DescribeBudgetPerformanceHistoryRequest{
        DescribeBudgetPerformanceHistoryRequest: shared.DescribeBudgetPerformanceHistoryRequest{
            AccountID: "numquam",
            BudgetName: "veritatis",
            MaxResults: sdk.Int64(58029),
            NextToken: sdk.String("ipsa"),
            TimePeriod: &shared.TimePeriod{
                End: types.MustTimeFromString("2022-07-06T22:32:29.592Z"),
                Start: types.MustTimeFromString("2022-02-13T10:24:00.119Z"),
            },
        },
        MaxResults: sdk.String("quidem"),
        NextToken: sdk.String("voluptatibus"),
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.DescribeBudgetPerformanceHistoryXAmzTargetEnumAwsBudgetServiceGatewayDescribeBudgetPerformanceHistory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeBudgetPerformanceHistoryResponse != nil {
        // handle response
    }
}
```

## DescribeBudgets

<p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeBudgets(ctx, operations.DescribeBudgetsRequest{
        DescribeBudgetsRequest: shared.DescribeBudgetsRequest{
            AccountID: "soluta",
            MaxResults: sdk.Int64(679393),
            NextToken: sdk.String("iusto"),
        },
        MaxResults: sdk.String("voluptate"),
        NextToken: sdk.String("dolorum"),
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.DescribeBudgetsXAmzTargetEnumAwsBudgetServiceGatewayDescribeBudgets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeBudgetsResponse != nil {
        // handle response
    }
}
```

## DescribeNotificationsForBudget

Lists the notifications that are associated with a budget.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeNotificationsForBudget(ctx, operations.DescribeNotificationsForBudgetRequest{
        DescribeNotificationsForBudgetRequest: shared.DescribeNotificationsForBudgetRequest{
            AccountID: "voluptate",
            BudgetName: "id",
            MaxResults: sdk.Int64(906418),
            NextToken: sdk.String("eius"),
        },
        MaxResults: sdk.String("aspernatur"),
        NextToken: sdk.String("perferendis"),
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.DescribeNotificationsForBudgetXAmzTargetEnumAwsBudgetServiceGatewayDescribeNotificationsForBudget,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeNotificationsForBudgetResponse != nil {
        // handle response
    }
}
```

## DescribeSubscribersForNotification

Lists the subscribers that are associated with a notification.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeSubscribersForNotification(ctx, operations.DescribeSubscribersForNotificationRequest{
        DescribeSubscribersForNotificationRequest: shared.DescribeSubscribersForNotificationRequest{
            AccountID: "provident",
            BudgetName: "minima",
            MaxResults: sdk.Int64(831049),
            NextToken: sdk.String("totam"),
            Notification: shared.Notification{
                ComparisonOperator: shared.ComparisonOperatorEnumLessThan,
                NotificationState: shared.NotificationStateEnumOk.ToPointer(),
                NotificationType: shared.NotificationTypeEnumForecasted,
                Threshold: 3118.6,
                ThresholdType: shared.ThresholdTypeEnumPercentage.ToPointer(),
            },
        },
        MaxResults: sdk.String("vel"),
        NextToken: sdk.String("quod"),
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("iusto"),
        XAmzTarget: operations.DescribeSubscribersForNotificationXAmzTargetEnumAwsBudgetServiceGatewayDescribeSubscribersForNotification,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSubscribersForNotificationResponse != nil {
        // handle response
    }
}
```

## ExecuteBudgetAction

 Executes a budget action. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ExecuteBudgetAction(ctx, operations.ExecuteBudgetActionRequest{
        ExecuteBudgetActionRequest: shared.ExecuteBudgetActionRequest{
            AccountID: "ipsum",
            ActionID: "quisquam",
            BudgetName: "tenetur",
            ExecutionType: shared.ExecutionTypeEnumApproveBudgetAction,
        },
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.ExecuteBudgetActionXAmzTargetEnumAwsBudgetServiceGatewayExecuteBudgetAction,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExecuteBudgetActionResponse != nil {
        // handle response
    }
}
```

## UpdateBudget

<p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until Amazon Web Services has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>

### Example Usage

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
    res, err := s.SDK.UpdateBudget(ctx, operations.UpdateBudgetRequest{
        UpdateBudgetRequest: shared.UpdateBudgetRequest{
            AccountID: "nihil",
            NewBudget: shared.Budget{
                AutoAdjustData: &shared.AutoAdjustData{
                    AutoAdjustType: shared.AutoAdjustTypeEnumHistorical,
                    HistoricalOptions: &shared.HistoricalOptions{
                        BudgetAdjustmentPeriod: 711584,
                        LookBackAvailablePeriods: sdk.Int64(207470),
                    },
                    LastAutoAdjustTime: types.MustTimeFromString("2022-07-29T23:45:18.595Z"),
                },
                BudgetLimit: &shared.Spend{
                    Amount: "libero",
                    Unit: "voluptas",
                },
                BudgetName: "deserunt",
                BudgetType: shared.BudgetTypeEnumRiUtilization,
                CalculatedSpend: &shared.CalculatedSpend{
                    ActualSpend: shared.Spend{
                        Amount: "ipsum",
                        Unit: "incidunt",
                    },
                    ForecastedSpend: &shared.Spend{
                        Amount: "qui",
                        Unit: "cupiditate",
                    },
                },
                CostFilters: map[string][]string{
                    "pariatur": []string{
                        "dicta",
                        "laborum",
                        "totam",
                    },
                    "incidunt": []string{
                        "dolores",
                    },
                    "distinctio": []string{
                        "aliquid",
                        "quam",
                        "molestias",
                    },
                    "temporibus": []string{
                        "neque",
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
                LastUpdatedTime: types.MustTimeFromString("2022-11-01T18:57:36.196Z"),
                PlannedBudgetLimits: map[string]shared.Spend{
                    "sunt": shared.Spend{
                        Amount: "ullam",
                        Unit: "nam",
                    },
                    "hic": shared.Spend{
                        Amount: "voluptatem",
                        Unit: "cumque",
                    },
                },
                TimePeriod: &shared.TimePeriod{
                    End: types.MustTimeFromString("2021-07-03T11:24:47.623Z"),
                    Start: types.MustTimeFromString("2022-02-05T03:24:54.198Z"),
                },
                TimeUnit: shared.TimeUnitEnumDaily,
            },
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.UpdateBudgetXAmzTargetEnumAwsBudgetServiceGatewayUpdateBudget,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBudgetResponse != nil {
        // handle response
    }
}
```

## UpdateBudgetAction

 Updates a budget action. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateBudgetAction(ctx, operations.UpdateBudgetActionRequest{
        UpdateBudgetActionRequest: shared.UpdateBudgetActionRequest{
            AccountID: "dolorem",
            ActionID: "dolore",
            ActionThreshold: &shared.ActionThreshold{
                ActionThresholdType: shared.ThresholdTypeEnumPercentage,
                ActionThresholdValue: 2408.29,
            },
            ApprovalModel: shared.ApprovalModelEnumManual.ToPointer(),
            BudgetName: "architecto",
            Definition: &shared.Definition{
                IamActionDefinition: &shared.IamActionDefinition{
                    Groups: []string{
                        "aut",
                    },
                    PolicyArn: "quas",
                    Roles: []string{
                        "consequatur",
                        "est",
                        "repellendus",
                        "porro",
                    },
                    Users: []string{
                        "ut",
                        "facilis",
                        "cupiditate",
                        "qui",
                    },
                },
                ScpActionDefinition: &shared.ScpActionDefinition{
                    PolicyID: "quae",
                    TargetIds: []string{
                        "odio",
                        "occaecati",
                        "voluptatibus",
                    },
                },
                SsmActionDefinition: &shared.SsmActionDefinition{
                    ActionSubType: shared.ActionSubTypeEnumStopRdsInstances,
                    InstanceIds: []string{
                        "omnis",
                        "quis",
                        "ipsum",
                        "delectus",
                    },
                    Region: "voluptate",
                },
            },
            ExecutionRoleArn: sdk.String("consectetur"),
            NotificationType: shared.NotificationTypeEnumForecasted.ToPointer(),
            Subscribers: []shared.Subscriber{
                shared.Subscriber{
                    Address: "dignissimos",
                    SubscriptionType: shared.SubscriptionTypeEnumEmail,
                },
                shared.Subscriber{
                    Address: "distinctio",
                    SubscriptionType: shared.SubscriptionTypeEnumEmail,
                },
                shared.Subscriber{
                    Address: "odio",
                    SubscriptionType: shared.SubscriptionTypeEnumEmail,
                },
                shared.Subscriber{
                    Address: "facilis",
                    SubscriptionType: shared.SubscriptionTypeEnumEmail,
                },
            },
        },
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.UpdateBudgetActionXAmzTargetEnumAwsBudgetServiceGatewayUpdateBudgetAction,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBudgetActionResponse != nil {
        // handle response
    }
}
```

## UpdateNotification

Updates a notification.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateNotification(ctx, operations.UpdateNotificationRequest{
        UpdateNotificationRequest: shared.UpdateNotificationRequest{
            AccountID: "aut",
            BudgetName: "voluptatibus",
            NewNotification: shared.Notification{
                ComparisonOperator: shared.ComparisonOperatorEnumLessThan,
                NotificationState: shared.NotificationStateEnumAlarm.ToPointer(),
                NotificationType: shared.NotificationTypeEnumActual,
                Threshold: 7804.27,
                ThresholdType: shared.ThresholdTypeEnumAbsoluteValue.ToPointer(),
            },
            OldNotification: shared.Notification{
                ComparisonOperator: shared.ComparisonOperatorEnumEqualTo,
                NotificationState: shared.NotificationStateEnumOk.ToPointer(),
                NotificationType: shared.NotificationTypeEnumForecasted,
                Threshold: 4973.91,
                ThresholdType: shared.ThresholdTypeEnumPercentage.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("possimus"),
        XAmzTarget: operations.UpdateNotificationXAmzTargetEnumAwsBudgetServiceGatewayUpdateNotification,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNotificationResponse != nil {
        // handle response
    }
}
```

## UpdateSubscriber

Updates a subscriber.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateSubscriber(ctx, operations.UpdateSubscriberRequest{
        UpdateSubscriberRequest: shared.UpdateSubscriberRequest{
            AccountID: "magnam",
            BudgetName: "ratione",
            NewSubscriber: shared.Subscriber{
                Address: "ex",
                SubscriptionType: shared.SubscriptionTypeEnumEmail,
            },
            Notification: shared.Notification{
                ComparisonOperator: shared.ComparisonOperatorEnumGreaterThan,
                NotificationState: shared.NotificationStateEnumOk.ToPointer(),
                NotificationType: shared.NotificationTypeEnumForecasted,
                Threshold: 978.44,
                ThresholdType: shared.ThresholdTypeEnumPercentage.ToPointer(),
            },
            OldSubscriber: shared.Subscriber{
                Address: "nulla",
                SubscriptionType: shared.SubscriptionTypeEnumEmail,
            },
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.UpdateSubscriberXAmzTargetEnumAwsBudgetServiceGatewayUpdateSubscriber,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSubscriberResponse != nil {
        // handle response
    }
}
```
