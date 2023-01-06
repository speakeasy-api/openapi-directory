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
            XAmzAlgorithm: "sint",
            XAmzContentSha256: "culpa",
            XAmzCredential: "in",
            XAmzDate: "qui",
            XAmzSecurityToken: "impedit",
            XAmzSignature: "culpa",
            XAmzSignedHeaders: "voluptatibus",
        },
        Request: operations.CreateClusterRequestBody{
            ClientToken: "consequuntur",
            ClusterName: "sapiente",
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