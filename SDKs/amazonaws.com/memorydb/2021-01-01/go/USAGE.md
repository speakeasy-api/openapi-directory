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

    req := operations.BatchUpdateClusterRequest{
        Headers: operations.BatchUpdateClusterHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AmazonMemoryDB.BatchUpdateCluster",
        },
        Request: shared.BatchUpdateClusterRequest{
            ClusterNames: []string{
                "fuga",
                "facilis",
            },
            ServiceUpdate: &shared.ServiceUpdateRequest{
                ServiceUpdateNameToApply: "eum",
            },
        },
    }

    ctx := context.Background()
    res, err := s.BatchUpdateCluster(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdateClusterResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->