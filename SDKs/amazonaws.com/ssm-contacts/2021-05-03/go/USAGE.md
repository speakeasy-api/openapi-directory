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
    res, err := s.AcceptPage(ctx, operations.AcceptPageRequest{
        AcceptPageRequest: shared.AcceptPageRequest{
            AcceptCode: "corrupti",
            AcceptCodeValidation: shared.AcceptCodeValidationEnumEnforce.ToPointer(),
            AcceptType: shared.AcceptTypeEnumRead,
            ContactChannelID: sdk.String("quibusdam"),
            Note: sdk.String("unde"),
            PageID: "nulla",
        },
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.AcceptPageXAmzTargetEnumSsmContactsAcceptPage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptPageResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->