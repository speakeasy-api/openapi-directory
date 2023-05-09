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