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
    res, err := s.GetEntitlements(ctx, operations.GetEntitlementsRequest{
        GetEntitlementsRequest: shared.GetEntitlementsRequest{
            Filter: map[string][]string{
                "provident": []string{
                    "quibusdam",
                    "unde",
                    "nulla",
                },
                "corrupti": []string{
                    "vel",
                    "error",
                    "deserunt",
                    "suscipit",
                },
                "iure": []string{
                    "debitis",
                    "ipsa",
                },
            },
            MaxResults: sdk.Int64(963663),
            NextToken: sdk.String("tempora"),
            ProductCode: "suscipit",
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("placeat"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("nisi"),
        XAmzTarget: operations.GetEntitlementsXAmzTargetEnumAwsmpEntitlementServiceGetEntitlements,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEntitlementsResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->