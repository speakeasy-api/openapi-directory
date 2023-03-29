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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "OpsWorksCM_V2016_11_01.AssociateNode",
        },
        Request: shared.AssociateNodeRequest{
            EngineAttributes: []shared.EngineAttribute{
                shared.EngineAttribute{
                    Name: "fuga",
                    Value: "facilis",
                },
                shared.EngineAttribute{
                    Name: "eum",
                    Value: "iusto",
                },
            },
            NodeName: "ullam",
            ServerName: "saepe",
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