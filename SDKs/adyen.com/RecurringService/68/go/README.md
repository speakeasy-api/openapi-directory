# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/adyen.com/RecurringService/68/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

    req := shared.CreatePermitRequest{
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
    }

    ctx := context.Background()
    res, err := s.General.PostCreatePermit(ctx, req, operations.PostCreatePermitSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePermitResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### General

* `PostCreatePermit` - Create new permits linked to a recurring contract.
* `PostDisable` - Disable stored payment details
* `PostDisablePermit` - Disable an existing permit.
* `PostListRecurringDetails` - Get stored payment details
* `PostNotifyShopper` - Ask issuer to notify the shopper
* `PostScheduleAccountUpdater` - Schedule running the Account Updater
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
