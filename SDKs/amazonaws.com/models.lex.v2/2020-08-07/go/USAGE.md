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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.BatchCreateCustomVocabularyItemRequest{
        RequestBody: operations.BatchCreateCustomVocabularyItemRequestBody{
            CustomVocabularyItemList: []shared.NewCustomVocabularyItem{
                shared.NewCustomVocabularyItem{
                    DisplayAs: "provident",
                    Phrase: "distinctio",
                    Weight: 844266,
                },
                shared.NewCustomVocabularyItem{
                    DisplayAs: "unde",
                    Phrase: "nulla",
                    Weight: 544883,
                },
                shared.NewCustomVocabularyItem{
                    DisplayAs: "illum",
                    Phrase: "vel",
                    Weight: 623564,
                },
            },
        },
        XAmzAlgorithm: "deserunt",
        XAmzContentSha256: "suscipit",
        XAmzCredential: "iure",
        XAmzDate: "magnam",
        XAmzSecurityToken: "debitis",
        XAmzSignature: "ipsa",
        XAmzSignedHeaders: "delectus",
        BotID: "tempora",
        BotVersion: "suscipit",
        LocaleID: "molestiae",
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