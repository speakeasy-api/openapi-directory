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
            MerchantAccount: "unde",
            Permits: []shared.Permit{
                shared.Permit{
                    PartnerID: "porro",
                    ProfileReference: "nulla",
                    Restriction: &shared.PermitRestriction{
                        MaxAmount: &shared.Amount{
                            Currency: "id",
                            Value: 857946,
                        },
                        SingleTransactionLimit: &shared.Amount{
                            Currency: "perspiciatis",
                            Value: 847252,
                        },
                        SingleUse: false,
                    },
                    ResultKey: "nihil",
                    ValidTillDate: "2022-08-14T09:24:44.576Z",
                },
                shared.Permit{
                    PartnerID: "facilis",
                    ProfileReference: "eum",
                    Restriction: &shared.PermitRestriction{
                        MaxAmount: &shared.Amount{
                            Currency: "iusto",
                            Value: 297534,
                        },
                        SingleTransactionLimit: &shared.Amount{
                            Currency: "saepe",
                            Value: 56713,
                        },
                        SingleUse: false,
                    },
                    ResultKey: "sapiente",
                    ValidTillDate: "2022-12-20T11:21:40.052Z",
                },
                shared.Permit{
                    PartnerID: "eum",
                    ProfileReference: "voluptatum",
                    Restriction: &shared.PermitRestriction{
                        MaxAmount: &shared.Amount{
                            Currency: "autem",
                            Value: 812169,
                        },
                        SingleTransactionLimit: &shared.Amount{
                            Currency: "non",
                            Value: 479977,
                        },
                        SingleUse: false,
                    },
                    ResultKey: "similique",
                    ValidTillDate: "2022-11-06T15:02:07.840Z",
                },
            },
            RecurringDetailReference: "molestiae",
            ShopperReference: "quo",
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