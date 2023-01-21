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