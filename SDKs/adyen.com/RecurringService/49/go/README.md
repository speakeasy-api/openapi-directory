# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/adyen.com/RecurringService/49/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostCreatePermit(ctx, shared.CreatePermitRequest{
        MerchantAccount: "corrupti",
        Permits: []shared.Permit{
            shared.Permit{
                PartnerID: sdk.String("distinctio"),
                ProfileReference: sdk.String("quibusdam"),
                Restriction: &shared.PermitRestriction{
                    MaxAmount: &shared.Amount{
                        Currency: "unde",
                        Value: 857946,
                    },
                    SingleTransactionLimit: &shared.Amount{
                        Currency: "corrupti",
                        Value: 847252,
                    },
                    SingleUse: sdk.Bool(false),
                },
                ResultKey: sdk.String("vel"),
                ValidTillDate: types.MustTimeFromString("2021-09-16T11:56:06.019Z"),
            },
            shared.Permit{
                PartnerID: sdk.String("suscipit"),
                ProfileReference: sdk.String("iure"),
                Restriction: &shared.PermitRestriction{
                    MaxAmount: &shared.Amount{
                        Currency: "magnam",
                        Value: 891773,
                    },
                    SingleTransactionLimit: &shared.Amount{
                        Currency: "ipsa",
                        Value: 963663,
                    },
                    SingleUse: sdk.Bool(false),
                },
                ResultKey: sdk.String("tempora"),
                ValidTillDate: types.MustTimeFromString("2022-07-10T15:39:12.517Z"),
            },
            shared.Permit{
                PartnerID: sdk.String("minus"),
                ProfileReference: sdk.String("placeat"),
                Restriction: &shared.PermitRestriction{
                    MaxAmount: &shared.Amount{
                        Currency: "voluptatum",
                        Value: 479977,
                    },
                    SingleTransactionLimit: &shared.Amount{
                        Currency: "excepturi",
                        Value: 392785,
                    },
                    SingleUse: sdk.Bool(false),
                },
                ResultKey: sdk.String("recusandae"),
                ValidTillDate: types.MustTimeFromString("2022-10-15T05:10:19.629Z"),
            },
        },
        RecurringDetailReference: "quis",
        ShopperReference: "veritatis",
    }, operations.PostCreatePermitSecurity{
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


### [General](docs/general/README.md)

* [PostCreatePermit](docs/general/README.md#postcreatepermit) - Create new permits linked to a recurring contract.
* [PostDisable](docs/general/README.md#postdisable) - Disable stored payment details
* [PostListRecurringDetails](docs/general/README.md#postlistrecurringdetails) - Get stored payment details
* [PostNotifyShopper](docs/general/README.md#postnotifyshopper) - Ask issuer to notify the shopper
* [PostScheduleAccountUpdater](docs/general/README.md#postscheduleaccountupdater) - Schedule running the Account Updater
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
