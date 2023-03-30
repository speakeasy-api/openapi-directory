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

    req := operations.CancelClusterRequest{
        Headers: operations.CancelClusterHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AWSIESnowballJobManagementService.CancelCluster",
        },
        Request: shared.CancelClusterRequest{
            ClusterID: "illum",
        },
    }

    ctx := context.Background()
    res, err := s.CancelCluster(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelClusterResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->