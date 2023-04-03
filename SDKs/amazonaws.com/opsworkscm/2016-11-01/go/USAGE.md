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

    req := operations.AssociateNodeRequest{
        AssociateNodeRequest: shared.AssociateNodeRequest{
            EngineAttributes: []shared.EngineAttribute{
                shared.EngineAttribute{
                    Name: "provident",
                    Value: "distinctio",
                },
                shared.EngineAttribute{
                    Name: "quibusdam",
                    Value: "unde",
                },
                shared.EngineAttribute{
                    Name: "nulla",
                    Value: "corrupti",
                },
            },
            NodeName: "illum",
            ServerName: "vel",
        },
        XAmzAlgorithm: "error",
        XAmzContentSha256: "deserunt",
        XAmzCredential: "suscipit",
        XAmzDate: "iure",
        XAmzSecurityToken: "magnam",
        XAmzSignature: "debitis",
        XAmzSignedHeaders: "ipsa",
        XAmzTarget: "OpsWorksCM_V2016_11_01.AssociateNode",
    }

    ctx := context.Background()
    res, err := s.AssociateNode(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateNodeResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->