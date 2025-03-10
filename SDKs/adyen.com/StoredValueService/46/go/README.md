# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/adyen.com/StoredValueService/46/go
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
    res, err := s.General.PostChangeStatus(ctx, shared.StoredValueStatusChangeRequest{
        Amount: &shared.Amount{
            Currency: "corrupti",
            Value: 592845,
        },
        MerchantAccount: "distinctio",
        PaymentMethod: map[string]string{
            "unde": "nulla",
            "corrupti": "illum",
            "vel": "error",
            "deserunt": "suscipit",
        },
        RecurringDetailReference: sdk.String("iure"),
        Reference: "magnam",
        ShopperInteraction: shared.StoredValueStatusChangeRequestShopperInteractionEnumPos.ToPointer(),
        ShopperReference: sdk.String("ipsa"),
        Status: shared.StoredValueStatusChangeRequestStatusEnumInactive,
        Store: sdk.String("tempora"),
    }, operations.PostChangeStatusSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoredValueStatusChangeResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [General](docs/general/README.md)

* [PostChangeStatus](docs/general/README.md#postchangestatus) - Changes the status of the payment method.
* [PostCheckBalance](docs/general/README.md#postcheckbalance) - Checks the balance.
* [PostIssue](docs/general/README.md#postissue) - Issues a new card.
* [PostLoad](docs/general/README.md#postload) - Loads the payment method.
* [PostMergeBalance](docs/general/README.md#postmergebalance) - Merge the balance of two cards.
* [PostVoidTransaction](docs/general/README.md#postvoidtransaction) - Voids a transaction.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
