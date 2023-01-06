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
            XAmzAlgorithm: "quae",
            XAmzContentSha256: "id",
            XAmzCredential: "eaque",
            XAmzDate: "et",
            XAmzSecurityToken: "et",
            XAmzSignature: "ea",
            XAmzSignedHeaders: "aliquid",
            XAmzTarget: "AWSBudgetServiceGateway.CreateBudget",
        },
        Request: shared.CreateBudgetRequest{
            AccountID: "beatae",
            Budget: shared.Budget{
                BudgetLimit: &shared.Spend{
                    Amount: "tempore",
                    Unit: "reprehenderit",
                },
                BudgetName: "nostrum",
                BudgetType: "RI_COVERAGE",
                CalculatedSpend: &shared.CalculatedSpend{
                    ActualSpend: shared.Spend{
                        Amount: "necessitatibus",
                        Unit: "illo",
                    },
                    ForecastedSpend: &shared.Spend{
                        Amount: "aut",
                        Unit: "quis",
                    },
                },
                CostFilters: map[string][]string{
                    "ab": []string{
                        "eveniet",
                        "id",
                        "placeat",
                    },
                    "error": []string{
                        "qui",
                    },
                    "ea": []string{
                        "et",
                        "nemo",
                        "illo",
                    },
                },
                CostTypes: &shared.CostTypes{
                    IncludeCredit: false,
                    IncludeDiscount: true,
                    IncludeOtherSubscription: false,
                    IncludeRecurring: false,
                    IncludeRefund: false,
                    IncludeSubscription: true,
                    IncludeSupport: false,
                    IncludeTax: false,
                    IncludeUpfront: false,
                    UseAmortized: true,
                    UseBlended: true,
                },
                LastUpdatedTime: "1975-11-18T11:17:30Z",
                PlannedBudgetLimits: map[string]shared.Spend{
                    "cupiditate": shared.Spend{
                        Amount: "aperiam",
                        Unit: "id",
                    },
                },
                TimePeriod: &shared.TimePeriod{
                    End: "1998-02-23T08:29:03Z",
                    Start: "1985-02-16T06:56:35Z",
                },
                TimeUnit: "QUARTERLY",
            },
            NotificationsWithSubscribers: []shared.NotificationWithSubscribers{
                shared.NotificationWithSubscribers{
                    Notification: shared.Notification{
                        ComparisonOperator: "EQUAL_TO",
                        NotificationState: "ALARM",
                        NotificationType: "ACTUAL",
                        Threshold: 24.200001,
                        ThresholdType: "PERCENTAGE",
                    },
                    Subscribers: []shared.Subscriber{
                        shared.Subscriber{
                            Address: "exercitationem",
                            SubscriptionType: "SNS",
                        },
                    },
                },
                shared.NotificationWithSubscribers{
                    Notification: shared.Notification{
                        ComparisonOperator: "EQUAL_TO",
                        NotificationState: "OK",
                        NotificationType: "FORECASTED",
                        Threshold: 61.099998,
                        ThresholdType: "PERCENTAGE",
                    },
                    Subscribers: []shared.Subscriber{
                        shared.Subscriber{
                            Address: "perferendis",
                            SubscriptionType: "EMAIL",
                        },
                        shared.Subscriber{
                            Address: "incidunt",
                            SubscriptionType: "EMAIL",
                        },
                        shared.Subscriber{
                            Address: "velit",
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