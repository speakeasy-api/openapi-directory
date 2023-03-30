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
                    ValidTillDate: "2021-09-16T11:56:06.019Z",
                },
                shared.Permit{
                    PartnerID: "suscipit",
                    ProfileReference: "iure",
                    Restriction: &shared.PermitRestriction{
                        MaxAmount: &shared.Amount{
                            Currency: "magnam",
                            Value: 891773,
                        },
                        SingleTransactionLimit: &shared.Amount{
                            Currency: "ipsa",
                            Value: 963663,
                        },
                        SingleUse: false,
                    },
                    ResultKey: "tempora",
                    ValidTillDate: "2022-07-10T15:39:12.517Z",
                },
                shared.Permit{
                    PartnerID: "minus",
                    ProfileReference: "placeat",
                    Restriction: &shared.PermitRestriction{
                        MaxAmount: &shared.Amount{
                            Currency: "voluptatum",
                            Value: 479977,
                        },
                        SingleTransactionLimit: &shared.Amount{
                            Currency: "excepturi",
                            Value: 392785,
                        },
                        SingleUse: false,
                    },
                    ResultKey: "recusandae",
                    ValidTillDate: "2022-10-15T05:10:19.629Z",
                },
            },
            RecurringDetailReference: "quis",
            ShopperReference: "veritatis",
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