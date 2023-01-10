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
            XAmzAlgorithm: "et",
            XAmzContentSha256: "rem",
            XAmzCredential: "quas",
            XAmzDate: "animi",
            XAmzSecurityToken: "saepe",
            XAmzSignature: "harum",
            XAmzSignedHeaders: "animi",
            XAmzTarget: "OpsWorksCM_V2016_11_01.AssociateNode",
        },
        Request: shared.AssociateNodeRequest{
            EngineAttributes: []shared.EngineAttribute{
                shared.EngineAttribute{
                    Name: "optio",
                    Value: "amet",
                },
                shared.EngineAttribute{
                    Name: "eaque",
                    Value: "qui",
                },
            },
            NodeName: "et",
            ServerName: "ex",
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