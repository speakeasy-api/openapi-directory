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