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
    res, err := s.CreateDestination(ctx, operations.CreateDestinationRequest{
        RequestBody: operations.CreateDestinationRequestBody{
            AdditionalFixedProperties: sdk.String("corrupti"),
            ClientToken: sdk.String("provident"),
            Name: "Ellis Mitchell",
            Site: "illum",
            State: operations.CreateDestinationRequestBodyStateEnumDisabled.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDestinationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->