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

    req := operations.CreateKeyspaceRequest{
        Headers: operations.CreateKeyspaceHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "KeyspacesService.CreateKeyspace",
        },
        Request: shared.CreateKeyspaceRequest{
            KeyspaceName: "illum",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "error",
                    Value: "deserunt",
                },
                shared.Tag{
                    Key: "suscipit",
                    Value: "iure",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateKeyspace(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateKeyspaceResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->