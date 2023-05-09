# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/adyen.com/TestCardService/1/go
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
    res, err := s.General.PostCreateTestCardRanges(ctx, shared.CreateTestCardRangesRequest{
        AccountCode: "corrupti",
        AccountTypeCode: "provident",
        TestCardRanges: []shared.TestCardRange{
            shared.TestCardRange{
                Address: &shared.AvsAddress{
                    StreetAddress: "quibusdam",
                    Zip: sdk.String("unde"),
                },
                CardHolderName: "nulla",
                Cvc: sdk.String("corrupti"),
                ExpiryMonth: shared.TestCardRangeExpiryMonthEnumOctober,
                ExpiryYear: 423655,
                RangeEnd: "error",
                RangeStart: "deserunt",
                ThreeDDirectoryServerResponse: shared.TestCardRangeThreeDDirectoryServerResponseEnumU.ToPointer(),
                ThreeDPassword: sdk.String("iure"),
                ThreeDUsername: sdk.String("magnam"),
            },
            shared.TestCardRange{
                Address: &shared.AvsAddress{
                    StreetAddress: "debitis",
                    Zip: sdk.String("ipsa"),
                },
                CardHolderName: "delectus",
                Cvc: sdk.String("tempora"),
                ExpiryMonth: shared.TestCardRangeExpiryMonthEnumJanuary,
                ExpiryYear: 477665,
                RangeEnd: "minus",
                RangeStart: "placeat",
                ThreeDDirectoryServerResponse: shared.TestCardRangeThreeDDirectoryServerResponseEnumU.ToPointer(),
                ThreeDPassword: sdk.String("iusto"),
                ThreeDUsername: sdk.String("excepturi"),
            },
            shared.TestCardRange{
                Address: &shared.AvsAddress{
                    StreetAddress: "nisi",
                    Zip: sdk.String("recusandae"),
                },
                CardHolderName: "temporibus",
                Cvc: sdk.String("ab"),
                ExpiryMonth: shared.TestCardRangeExpiryMonthEnumJanuary,
                ExpiryYear: 87129,
                RangeEnd: "deserunt",
                RangeStart: "perferendis",
                ThreeDDirectoryServerResponse: shared.TestCardRangeThreeDDirectoryServerResponseEnumU.ToPointer(),
                ThreeDPassword: sdk.String("repellendus"),
                ThreeDUsername: sdk.String("sapiente"),
            },
        },
    }, operations.PostCreateTestCardRangesSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTestCardRangesResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [General](docs/general/README.md)

* [PostCreateTestCardRanges](docs/general/README.md#postcreatetestcardranges) - Creates one or more test card ranges.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
