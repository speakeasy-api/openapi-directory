<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BatchCreateCustomVocabularyItem(ctx, operations.BatchCreateCustomVocabularyItemRequest{
        RequestBody: operations.BatchCreateCustomVocabularyItemRequestBody{
            CustomVocabularyItemList: []shared.NewCustomVocabularyItem{
                shared.NewCustomVocabularyItem{
                    DisplayAs: sdk.String("provident"),
                    Phrase: "distinctio",
                    Weight: sdk.Int64(844266),
                },
                shared.NewCustomVocabularyItem{
                    DisplayAs: sdk.String("unde"),
                    Phrase: "nulla",
                    Weight: sdk.Int64(544883),
                },
                shared.NewCustomVocabularyItem{
                    DisplayAs: sdk.String("illum"),
                    Phrase: "vel",
                    Weight: sdk.Int64(623564),
                },
            },
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("delectus"),
        BotID: "tempora",
        BotVersion: "suscipit",
        LocaleID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchCreateCustomVocabularyItemResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->