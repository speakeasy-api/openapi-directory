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