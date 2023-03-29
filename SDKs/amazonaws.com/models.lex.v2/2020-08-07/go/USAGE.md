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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.BatchCreateCustomVocabularyItemRequest{
        PathParams: operations.BatchCreateCustomVocabularyItemPathParams{
            BotID: "unde",
            BotVersion: "deserunt",
            LocaleID: "porro",
        },
        Headers: operations.BatchCreateCustomVocabularyItemHeaders{
            XAmzAlgorithm: "nulla",
            XAmzContentSha256: "id",
            XAmzCredential: "vero",
            XAmzDate: "perspiciatis",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "nihil",
            XAmzSignedHeaders: "fuga",
        },
        Request: operations.BatchCreateCustomVocabularyItemRequestBody{
            CustomVocabularyItemList: []shared.NewCustomVocabularyItem{
                shared.NewCustomVocabularyItem{
                    DisplayAs: "eum",
                    Phrase: "iusto",
                    Weight: 297534,
                },
                shared.NewCustomVocabularyItem{
                    DisplayAs: "saepe",
                    Phrase: "inventore",
                    Weight: 963663,
                },
                shared.NewCustomVocabularyItem{
                    DisplayAs: "enim",
                    Phrase: "eum",
                    Weight: 477665,
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.BatchCreateCustomVocabularyItem(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchCreateCustomVocabularyItemResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->