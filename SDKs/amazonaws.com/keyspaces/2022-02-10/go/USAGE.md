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
    res, err := s.CreateKeyspace(ctx, operations.CreateKeyspaceRequest{
        CreateKeyspaceRequest: shared.CreateKeyspaceRequest{
            KeyspaceName: "corrupti",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "distinctio",
                    Value: "quibusdam",
                },
                shared.Tag{
                    Key: "unde",
                    Value: "nulla",
                },
                shared.Tag{
                    Key: "corrupti",
                    Value: "illum",
                },
            },
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("debitis"),
        XAmzTarget: operations.CreateKeyspaceXAmzTargetEnumKeyspacesServiceCreateKeyspace,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateKeyspaceResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->