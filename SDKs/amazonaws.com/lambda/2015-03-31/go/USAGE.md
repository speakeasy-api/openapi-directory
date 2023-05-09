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
    res, err := s.AddLayerVersionPermission(ctx, operations.AddLayerVersionPermissionRequest{
        LayerName: "corrupti",
        RequestBody: operations.AddLayerVersionPermissionRequestBody{
            Action: "provident",
            OrganizationID: sdk.String("distinctio"),
            Principal: "quibusdam",
            StatementID: "unde",
        },
        RevisionID: sdk.String("nulla"),
        VersionNumber: 544883,
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddLayerVersionPermissionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->