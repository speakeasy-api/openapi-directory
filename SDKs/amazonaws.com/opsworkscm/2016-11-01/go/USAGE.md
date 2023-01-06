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
            XAmzAlgorithm: "perspiciatis",
            XAmzContentSha256: "suscipit",
            XAmzCredential: "inventore",
            XAmzDate: "voluptatem",
            XAmzSecurityToken: "soluta",
            XAmzSignature: "ut",
            XAmzSignedHeaders: "ullam",
            XAmzTarget: "OpsWorksCM_V2016_11_01.AssociateNode",
        },
        Request: shared.AssociateNodeRequest{
            EngineAttributes: []shared.EngineAttribute{
                shared.EngineAttribute{
                    Name: "est",
                    Value: "neque",
                },
                shared.EngineAttribute{
                    Name: "dolor",
                    Value: "nobis",
                },
                shared.EngineAttribute{
                    Name: "ipsam",
                    Value: "sed",
                },
            },
            NodeName: "nihil",
            ServerName: "harum",
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