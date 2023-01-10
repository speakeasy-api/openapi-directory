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
    
    req := operations.CreateClusterRequest{
        Headers: operations.CreateClusterHeaders{
            XAmzAlgorithm: "omnis",
            XAmzContentSha256: "velit",
            XAmzCredential: "commodi",
            XAmzDate: "ut",
            XAmzSecurityToken: "aut",
            XAmzSignature: "explicabo",
            XAmzSignedHeaders: "sit",
        },
        Request: operations.CreateClusterRequestBody{
            ClientToken: "sed",
            ClusterName: "est",
        },
    }
    
    res, err := s.CreateCluster(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateClusterResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->