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
    
    req := operations.BatchUpdateClusterRequest{
        Headers: operations.BatchUpdateClusterHeaders{
            XAmzAlgorithm: "consequatur",
            XAmzContentSha256: "vero",
            XAmzCredential: "quae",
            XAmzDate: "fuga",
            XAmzSecurityToken: "et",
            XAmzSignature: "neque",
            XAmzSignedHeaders: "necessitatibus",
            XAmzTarget: "AmazonMemoryDB.BatchUpdateCluster",
        },
        Request: shared.BatchUpdateClusterRequest{
            ClusterNames: []string{
                "sit",
                "est",
                "a",
            },
            ServiceUpdate: &shared.ServiceUpdateRequest{
                ServiceUpdateNameToApply: "in",
            },
        },
    }
    
    res, err := s.BatchUpdateCluster(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdateClusterResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->