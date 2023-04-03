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