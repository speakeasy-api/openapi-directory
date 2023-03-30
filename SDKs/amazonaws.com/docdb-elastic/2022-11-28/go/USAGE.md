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

    req := operations.CreateClusterRequest{
        Headers: operations.CreateClusterHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateClusterRequestBody{
            AdminUserName: "illum",
            AdminUserPassword: "vel",
            AuthType: "SECRET_ARN",
            ClientToken: "deserunt",
            ClusterName: "suscipit",
            KmsKeyID: "iure",
            PreferredMaintenanceWindow: "magnam",
            ShardCapacity: 891773,
            ShardCount: 56713,
            SubnetIds: []string{
                "tempora",
                "suscipit",
                "molestiae",
                "minus",
            },
            Tags: map[string]string{
                "voluptatum": "iusto",
                "excepturi": "nisi",
                "recusandae": "temporibus",
                "ab": "quis",
            },
            VpcSecurityGroupIds: []string{
                "deserunt",
            },
        },
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