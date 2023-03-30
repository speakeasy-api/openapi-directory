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
                    LastAutoAdjustTime: "2022-07-25T06:44:09.184Z",
                },
                BudgetLimit: &shared.Spend{
                    Amount: "magnam",
                    Unit: "debitis",
                },
                BudgetName: "ipsa",
                BudgetType: "SAVINGS_PLANS_COVERAGE",
                CalculatedSpend: &shared.CalculatedSpend{
                    ActualSpend: shared.Spend{
                        Amount: "tempora",
                        Unit: "suscipit",
                    },
                    ForecastedSpend: &shared.Spend{
                        Amount: "molestiae",
                        Unit: "minus",
                    },
                },
                CostFilters: map[string][]string{
                    "voluptatum": []string{
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
                LastUpdatedTime: "2020-01-25T09:54:35.794Z",
                PlannedBudgetLimits: map[string]shared.Spend{
                    "quod": shared.Spend{
                        Amount: "quod",
                        Unit: "esse",
                    },
                    "totam": shared.Spend{
                        Amount: "porro",
                        Unit: "dolorum",
                    },
                },
                TimePeriod: &shared.TimePeriod{
                    End: "2022-04-12T23:15:28.420Z",
                    Start: "2021-11-02T03:00:47.309Z",
                },
                TimeUnit: "DAILY",
            },
            NotificationsWithSubscribers: []shared.NotificationWithSubscribers{
                shared.NotificationWithSubscribers{
                    Notification: shared.Notification{
                        ComparisonOperator: "EQUAL_TO",
                        NotificationState: "ALARM",
                        NotificationType: "FORECASTED",
                        Threshold: 1059.07,
                        ThresholdType: "PERCENTAGE",
                    },
                    Subscribers: []shared.Subscriber{
                        shared.Subscriber{
                            Address: "modi",
                            SubscriptionType: "SNS",
                        },
                        shared.Subscriber{
                            Address: "impedit",
                            SubscriptionType: "EMAIL",
                        },
                    },
                },
                shared.NotificationWithSubscribers{
                    Notification: shared.Notification{
                        ComparisonOperator: "LESS_THAN",
                        NotificationState: "OK",
                        NotificationType: "FORECASTED",
                        Threshold: 1352.18,
                        ThresholdType: "PERCENTAGE",
                    },
                    Subscribers: []shared.Subscriber{
                        shared.Subscriber{
                            Address: "natus",
                            SubscriptionType: "SNS",
                        },
                        shared.Subscriber{
                            Address: "iste",
                            SubscriptionType: "SNS",
                        },
                    },
                },
                shared.NotificationWithSubscribers{
                    Notification: shared.Notification{
                        ComparisonOperator: "LESS_THAN",
                        NotificationState: "OK",
                        NotificationType: "FORECASTED",
                        Threshold: 9025.99,
                        ThresholdType: "ABSOLUTE_VALUE",
                    },
                    Subscribers: []shared.Subscriber{
                        shared.Subscriber{
                            Address: "corporis",
                            SubscriptionType: "EMAIL",
                        },
                        shared.Subscriber{
                            Address: "iure",
                            SubscriptionType: "EMAIL",
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