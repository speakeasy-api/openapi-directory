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
    res, err := s.CreateLink(ctx, operations.CreateLinkRequest{
        RequestBody: operations.CreateLinkRequestBody{
            LabelTemplate: "corrupti",
            ResourceTypes: []shared.ResourceTypeEnum{
                shared.ResourceTypeEnumAwsXRayTrace,
                shared.ResourceTypeEnumAwsXRayTrace,
                shared.ResourceTypeEnumAwsLogsLogGroup,
            },
            SinkIdentifier: "nulla",
            Tags: map[string]string{
                "illum": "vel",
                "error": "deserunt",
                "suscipit": "iure",
            },
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLinkOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->