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
            BotID: "corrupti",
            BotVersion: "provident",
            LocaleID: "distinctio",
        },
        Headers: operations.BatchCreateCustomVocabularyItemHeaders{
            XAmzAlgorithm: "quibusdam",
            XAmzContentSha256: "unde",
            XAmzCredential: "nulla",
            XAmzDate: "corrupti",
            XAmzSecurityToken: "illum",
            XAmzSignature: "vel",
            XAmzSignedHeaders: "error",
        },
        Request: operations.BatchCreateCustomVocabularyItemRequestBody{
            CustomVocabularyItemList: []shared.NewCustomVocabularyItem{
                shared.NewCustomVocabularyItem{
                    DisplayAs: "suscipit",
                    Phrase: "iure",
                    Weight: 297534,
                },
                shared.NewCustomVocabularyItem{
                    DisplayAs: "debitis",
                    Phrase: "ipsa",
                    Weight: 963663,
                },
                shared.NewCustomVocabularyItem{
                    DisplayAs: "tempora",
                    Phrase: "suscipit",
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