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
    s := sdk.New()

    req := operations.PostCreatePermitRequest{
        Security: operations.PostCreatePermitSecurity{
            APIKeyAuth: &shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &shared.CreatePermitRequest{
            MerchantAccount: "corrupti",
            Permits: []shared.Permit{
                shared.Permit{
                    PartnerID: "distinctio",
                    ProfileReference: "quibusdam",
                    Restriction: &shared.PermitRestriction{
                        MaxAmount: &shared.Amount{
                            Currency: "unde",
                            Value: 857946,
                        },
                        SingleTransactionLimit: &shared.Amount{
                            Currency: "corrupti",
                            Value: 847252,
                        },
                        SingleUse: false,
                    },
                    ResultKey: "vel",
                    ValidTillDate: "2022-08-14T11:56:07.744Z",
                },
                shared.Permit{
                    PartnerID: "deserunt",
                    ProfileReference: "suscipit",
                    Restriction: &shared.PermitRestriction{
                        MaxAmount: &shared.Amount{
                            Currency: "iure",
                            Value: 297534,
                        },
                        SingleTransactionLimit: &shared.Amount{
                            Currency: "debitis",
                            Value: 56713,
                        },
                        SingleUse: false,
                    },
                    ResultKey: "delectus",
                    ValidTillDate: "2022-12-20T13:53:03.222Z",
                },
                shared.Permit{
                    PartnerID: "suscipit",
                    ProfileReference: "molestiae",
                    Restriction: &shared.PermitRestriction{
                        MaxAmount: &shared.Amount{
                            Currency: "minus",
                            Value: 812169,
                        },
                        SingleTransactionLimit: &shared.Amount{
                            Currency: "voluptatum",
                            Value: 479977,
                        },
                        SingleUse: false,
                    },
                    ResultKey: "excepturi",
                    ValidTillDate: "2022-11-06T17:33:31.011Z",
                },
            },
            RecurringDetailReference: "recusandae",
            ShopperReference: "temporibus",
        },
    }

    ctx := context.Background()
    res, err := s.General.PostCreatePermit(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePermitResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->