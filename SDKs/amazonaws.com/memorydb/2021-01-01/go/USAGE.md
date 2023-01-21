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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AmazonMemoryDB.BatchUpdateCluster",
        },
        Request: shared.BatchUpdateClusterRequest{
            ClusterNames: []string{
                "et",
            },
            ServiceUpdate: &shared.ServiceUpdateRequest{
                ServiceUpdateNameToApply: "nihil",
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