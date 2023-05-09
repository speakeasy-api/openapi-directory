<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Search(ctx, operations.SearchRequest{
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("unde"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("corrupti"),
        Cursor: sdk.String("illum"),
        Expr: sdk.String("vel"),
        Facet: sdk.String("error"),
        Format: operations.SearchFormatEnumSDK,
        Fq: sdk.String("deserunt"),
        Highlight: sdk.String("suscipit"),
        Partial: sdk.Bool(false),
        Pretty: operations.SearchPrettyEnumTrue,
        Q: "iure",
        QOptions: sdk.String("magnam"),
        QParser: operations.SearchQParserEnumDismax.ToPointer(),
        Return: sdk.String("ipsa"),
        Size: sdk.Int64(963663),
        Sort: sdk.String("tempora"),
        Start: sdk.Int64(383441),
        Stats: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->