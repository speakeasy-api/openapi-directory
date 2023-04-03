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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.BatchUpdateClusterRequest{
        BatchUpdateClusterRequest: shared.BatchUpdateClusterRequest{
            ClusterNames: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            ServiceUpdate: &shared.ServiceUpdateRequest{
                ServiceUpdateNameToApply: "unde",
            },
        },
        XAmzAlgorithm: "nulla",
        XAmzContentSha256: "corrupti",
        XAmzCredential: "illum",
        XAmzDate: "vel",
        XAmzSecurityToken: "error",
        XAmzSignature: "deserunt",
        XAmzSignedHeaders: "suscipit",
        XAmzTarget: "AmazonMemoryDB.BatchUpdateCluster",
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