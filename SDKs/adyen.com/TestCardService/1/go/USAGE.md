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

    req := operations.PostCreateTestCardRangesRequest{
        Security: operations.PostCreateTestCardRangesSecurity{
            APIKeyAuth: &shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &shared.CreateTestCardRangesRequest{
            AccountCode: "unde",
            AccountTypeCode: "deserunt",
            TestCardRanges: []shared.TestCardRange{
                shared.TestCardRange{
                    Address: &shared.AvsAddress{
                        StreetAddress: "nulla",
                        Zip: "id",
                    },
                    CardHolderName: "vero",
                    Cvc: "perspiciatis",
                    ExpiryMonth: "OCTOBER",
                    ExpiryYear: 423655,
                    RangeEnd: "fuga",
                    RangeStart: "facilis",
                    ThreeDDirectoryServerResponse: "U",
                    ThreeDPassword: "iusto",
                    ThreeDUsername: "ullam",
                },
                shared.TestCardRange{
                    Address: &shared.AvsAddress{
                        StreetAddress: "saepe",
                        Zip: "inventore",
                    },
                    CardHolderName: "sapiente",
                    Cvc: "enim",
                    ExpiryMonth: "JANUARY",
                    ExpiryYear: 477665,
                    RangeEnd: "autem",
                    RangeStart: "vel",
                    ThreeDDirectoryServerResponse: "U",
                    ThreeDPassword: "deleniti",
                    ThreeDUsername: "similique",
                },
                shared.TestCardRange{
                    Address: &shared.AvsAddress{
                        StreetAddress: "reprehenderit",
                        Zip: "molestiae",
                    },
                    CardHolderName: "quo",
                    Cvc: "quasi",
                    ExpiryMonth: "JANUARY",
                    ExpiryYear: 87129,
                    RangeEnd: "est",
                    RangeStart: "voluptatem",
                    ThreeDDirectoryServerResponse: "U",
                    ThreeDPassword: "fugiat",
                    ThreeDUsername: "a",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.General.PostCreateTestCardRanges(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTestCardRangesResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->