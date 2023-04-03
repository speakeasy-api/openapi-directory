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

    req := operations.CreateClusterRequest{
        RequestBody: operations.CreateClusterRequestBody{
            AdminUserName: "corrupti",
            AdminUserPassword: "provident",
            AuthType: "SECRET_ARN",
            ClientToken: "quibusdam",
            ClusterName: "unde",
            KmsKeyID: "nulla",
            PreferredMaintenanceWindow: "corrupti",
            ShardCapacity: 847252,
            ShardCount: 423655,
            SubnetIds: []string{
                "deserunt",
                "suscipit",
                "iure",
            },
            Tags: map[string]string{
                "debitis": "ipsa",
                "delectus": "tempora",
            },
            VpcSecurityGroupIds: []string{
                "molestiae",
                "minus",
            },
        },
        XAmzAlgorithm: "placeat",
        XAmzContentSha256: "voluptatum",
        XAmzCredential: "iusto",
        XAmzDate: "excepturi",
        XAmzSecurityToken: "nisi",
        XAmzSignature: "recusandae",
        XAmzSignedHeaders: "temporibus",
    }

    ctx := context.Background()
    res, err := s.CreateCluster(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateClusterOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->