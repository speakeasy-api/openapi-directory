<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BatchUpdateCluster(ctx, operations.BatchUpdateClusterRequest{
        BatchUpdateClusterRequest: shared.BatchUpdateClusterRequest{
            ClusterNames: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            ServiceUpdate: &shared.ServiceUpdateRequest{
                ServiceUpdateNameToApply: sdk.String("unde"),
            },
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.BatchUpdateClusterXAmzTargetEnumAmazonMemoryDbBatchUpdateCluster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdateClusterResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->