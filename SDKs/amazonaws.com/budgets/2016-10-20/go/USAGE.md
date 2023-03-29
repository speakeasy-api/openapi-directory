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