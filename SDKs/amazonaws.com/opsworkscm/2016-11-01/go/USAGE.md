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

    req := operations.AssociateNodeRequest{
        Headers: operations.AssociateNodeHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "OpsWorksCM_V2016_11_01.AssociateNode",
        },
        Request: shared.AssociateNodeRequest{
            EngineAttributes: []shared.EngineAttribute{
                shared.EngineAttribute{
                    Name: "vel",
                    Value: "error",
                },
                shared.EngineAttribute{
                    Name: "deserunt",
                    Value: "suscipit",
                },
                shared.EngineAttribute{
                    Name: "iure",
                    Value: "magnam",
                },
                shared.EngineAttribute{
                    Name: "debitis",
                    Value: "ipsa",
                },
            },
            NodeName: "delectus",
            ServerName: "tempora",
        },
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