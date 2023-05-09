# General

### Available Operations

* [PostCreateTestCardRanges](#postcreatetestcardranges) - Creates one or more test card ranges.

## PostCreateTestCardRanges

Creates one or more test card ranges.

### Example Usage

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
        AccountCode: "quo",
        AccountTypeCode: "odit",
        TestCardRanges: []shared.TestCardRange{
            shared.TestCardRange{
                Address: &shared.AvsAddress{
                    StreetAddress: "at",
                    Zip: sdk.String("maiores"),
                },
                CardHolderName: "molestiae",
                Cvc: sdk.String("quod"),
                ExpiryMonth: shared.TestCardRangeExpiryMonthEnumNovember,
                ExpiryYear: 461479,
                RangeEnd: "totam",
                RangeStart: "porro",
                ThreeDDirectoryServerResponse: shared.TestCardRangeThreeDDirectoryServerResponseEnumY.ToPointer(),
                ThreeDPassword: sdk.String("dicta"),
                ThreeDUsername: sdk.String("nam"),
            },
            shared.TestCardRange{
                Address: &shared.AvsAddress{
                    StreetAddress: "officia",
                    Zip: sdk.String("occaecati"),
                },
                CardHolderName: "fugit",
                Cvc: sdk.String("deleniti"),
                ExpiryMonth: shared.TestCardRangeExpiryMonthEnumSeptember,
                ExpiryYear: 758616,
                RangeEnd: "totam",
                RangeStart: "beatae",
                ThreeDDirectoryServerResponse: shared.TestCardRangeThreeDDirectoryServerResponseEnumU.ToPointer(),
                ThreeDPassword: sdk.String("molestiae"),
                ThreeDUsername: sdk.String("modi"),
            },
            shared.TestCardRange{
                Address: &shared.AvsAddress{
                    StreetAddress: "qui",
                    Zip: sdk.String("impedit"),
                },
                CardHolderName: "cum",
                Cvc: sdk.String("esse"),
                ExpiryMonth: shared.TestCardRangeExpiryMonthEnumDecember,
                ExpiryYear: 568434,
                RangeEnd: "aspernatur",
                RangeStart: "perferendis",
                ThreeDDirectoryServerResponse: shared.TestCardRangeThreeDDirectoryServerResponseEnumN.ToPointer(),
                ThreeDPassword: sdk.String("natus"),
                ThreeDUsername: sdk.String("sed"),
            },
            shared.TestCardRange{
                Address: &shared.AvsAddress{
                    StreetAddress: "iste",
                    Zip: sdk.String("dolor"),
                },
                CardHolderName: "natus",
                Cvc: sdk.String("laboriosam"),
                ExpiryMonth: shared.TestCardRangeExpiryMonthEnumSeptember,
                ExpiryYear: 902599,
                RangeEnd: "fuga",
                RangeStart: "in",
                ThreeDDirectoryServerResponse: shared.TestCardRangeThreeDDirectoryServerResponseEnumU.ToPointer(),
                ThreeDPassword: sdk.String("iste"),
                ThreeDUsername: sdk.String("iure"),
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
