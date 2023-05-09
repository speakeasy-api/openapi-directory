# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/adyen.com/RecurringService/25/go
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
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostDisable(ctx, shared.DisableRequest{
        Contract: sdk.String("corrupti"),
        MerchantAccount: "provident",
        RecurringDetailReference: sdk.String("distinctio"),
        ShopperReference: "quibusdam",
    }, operations.PostDisableSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [General](docs/general/README.md)

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
