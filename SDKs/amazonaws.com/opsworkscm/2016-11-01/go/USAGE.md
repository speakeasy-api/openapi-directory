<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AssociateNodeRequest{
        Headers: operations.AssociateNodeHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "OpsWorksCM_V2016_11_01.AssociateNode",
        },
        Request: shared.AssociateNodeRequest{
            EngineAttributes: []shared.EngineAttribute{
                shared.EngineAttribute{
                    Name: "et",
                    Value: "nihil",
                },
            },
            NodeName: "rerum",
            ServerName: "dicta",
        },
    }
    
    res, err := s.AssociateNode(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateNodeResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->