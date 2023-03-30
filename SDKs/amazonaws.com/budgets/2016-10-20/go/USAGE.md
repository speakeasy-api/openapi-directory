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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AWSBudgetServiceGateway.CreateBudget",
        },
        Request: shared.CreateBudgetRequest{
            AccountID: "illum",
            Budget: shared.Budget{
                AutoAdjustData: &shared.AutoAdjustData{
                    AutoAdjustType: "HISTORICAL",
                    HistoricalOptions: &shared.HistoricalOptions{
                        BudgetAdjustmentPeriod: 623564,
                        LookBackAvailablePeriods: 645894,
                    },
                    LastAutoAdjustTime: "2022-11-09T19:10:38.474Z",
                },
                BudgetLimit: &shared.Spend{
                    Amount: "iure",
                    Unit: "magnam",
                },
                BudgetName: "debitis",
                BudgetType: "USAGE",
                CalculatedSpend: &shared.CalculatedSpend{
                    ActualSpend: shared.Spend{
                        Amount: "delectus",
                        Unit: "tempora",
                    },
                    ForecastedSpend: &shared.Spend{
                        Amount: "suscipit",
                        Unit: "molestiae",
                    },
                },
                CostFilters: map[string][]string{
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
                    "quo": []string{
                        "at",
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
                LastUpdatedTime: "2022-05-16T12:23:48.964Z",
                PlannedBudgetLimits: map[string]shared.Spend{
                    "molestiae": shared.Spend{
                        Amount: "quod",
                        Unit: "quod",
                    },
                    "esse": shared.Spend{
                        Amount: "totam",
                        Unit: "porro",
                    },
                    "dolorum": shared.Spend{
                        Amount: "dicta",
                        Unit: "nam",
                    },
                    "officia": shared.Spend{
                        Amount: "occaecati",
                        Unit: "fugit",
                    },
                },
                TimePeriod: &shared.TimePeriod{
                    End: "2022-09-14T22:58:18.059Z",
                    Start: "2022-04-19T07:03:41.574Z",
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