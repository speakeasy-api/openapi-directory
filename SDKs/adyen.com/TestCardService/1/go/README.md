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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := shared.CreateTestCardRangesRequest{
        AccountCode: "corrupti",
        AccountTypeCode: "provident",
        TestCardRanges: []shared.TestCardRange{
            shared.TestCardRange{
                Address: &shared.AvsAddress{
                    StreetAddress: "quibusdam",
                    Zip: "unde",
                },
                CardHolderName: "nulla",
                Cvc: "corrupti",
                ExpiryMonth: "OCTOBER",
                ExpiryYear: 423655,
                RangeEnd: "error",
                RangeStart: "deserunt",
                ThreeDDirectoryServerResponse: "U",
                ThreeDPassword: "iure",
                ThreeDUsername: "magnam",
            },
            shared.TestCardRange{
                Address: &shared.AvsAddress{
                    StreetAddress: "debitis",
                    Zip: "ipsa",
                },
                CardHolderName: "delectus",
                Cvc: "tempora",
                ExpiryMonth: "JANUARY",
                ExpiryYear: 477665,
                RangeEnd: "minus",
                RangeStart: "placeat",
                ThreeDDirectoryServerResponse: "U",
                ThreeDPassword: "iusto",
                ThreeDUsername: "excepturi",
            },
            shared.TestCardRange{
                Address: &shared.AvsAddress{
                    StreetAddress: "nisi",
                    Zip: "recusandae",
                },
                CardHolderName: "temporibus",
                Cvc: "ab",
                ExpiryMonth: "JANUARY",
                ExpiryYear: 87129,
                RangeEnd: "deserunt",
                RangeStart: "perferendis",
                ThreeDDirectoryServerResponse: "U",
                ThreeDPassword: "repellendus",
                ThreeDUsername: "sapiente",
            },
        },
    }

    ctx := context.Background()
    res, err := s.General.PostCreateTestCardRanges(ctx, req, operations.PostCreateTestCardRangesSecurity{
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


### General

* `PostCreateTestCardRanges` - Creates one or more test card ranges.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
