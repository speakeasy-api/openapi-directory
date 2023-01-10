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
            XAmzAlgorithm: "ea",
            XAmzContentSha256: "ad",
            XAmzCredential: "et",
            XAmzDate: "nemo",
            XAmzSecurityToken: "illo",
            XAmzSignature: "animi",
            XAmzSignedHeaders: "earum",
            XAmzTarget: "AWSBudgetServiceGateway.CreateBudget",
        },
        Request: shared.CreateBudgetRequest{
            AccountID: "vero",
            Budget: shared.Budget{
                BudgetLimit: &shared.Spend{
                    Amount: "et",
                    Unit: "quam",
                },
                BudgetName: "iste",
                BudgetType: "SAVINGS_PLANS_UTILIZATION",
                CalculatedSpend: &shared.CalculatedSpend{
                    ActualSpend: shared.Spend{
                        Amount: "eos",
                        Unit: "aut",
                    },
                    ForecastedSpend: &shared.Spend{
                        Amount: "ut",
                        Unit: "enim",
                    },
                },
                CostFilters: map[string][]string{
                    "cupiditate": []string{
                        "id",
                        "molestiae",
                    },
                },
                CostTypes: &shared.CostTypes{
                    IncludeCredit: true,
                    IncludeDiscount: true,
                    IncludeOtherSubscription: false,
                    IncludeRecurring: false,
                    IncludeRefund: false,
                    IncludeSubscription: true,
                    IncludeSupport: true,
                    IncludeTax: false,
                    IncludeUpfront: true,
                    UseAmortized: true,
                    UseBlended: true,
                },
                LastUpdatedTime: "2020-04-14T04:17:49Z",
                PlannedBudgetLimits: map[string]shared.Spend{
                    "modi": shared.Spend{
                        Amount: "dolor",
                        Unit: "omnis",
                    },
                    "explicabo": shared.Spend{
                        Amount: "voluptatum",
                        Unit: "quia",
                    },
                    "perferendis": shared.Spend{
                        Amount: "temporibus",
                        Unit: "incidunt",
                    },
                },
                TimePeriod: &shared.TimePeriod{
                    End: "1983-12-01T15:56:44Z",
                    Start: "2006-01-19T06:53:53Z",
                },
                TimeUnit: "QUARTERLY",
            },
            NotificationsWithSubscribers: []shared.NotificationWithSubscribers{
                shared.NotificationWithSubscribers{
                    Notification: shared.Notification{
                        ComparisonOperator: "EQUAL_TO",
                        NotificationState: "OK",
                        NotificationType: "FORECASTED",
                        Threshold: 7.100000,
                        ThresholdType: "ABSOLUTE_VALUE",
                    },
                    Subscribers: []shared.Subscriber{
                        shared.Subscriber{
                            Address: "iste",
                            SubscriptionType: "EMAIL",
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