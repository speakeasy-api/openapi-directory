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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateClusterRequestBody{
            AdminUserName: "nulla",
            AdminUserPassword: "nihil",
            AuthType: "SECRET_ARN",
            ClientToken: "facilis",
            ClusterName: "eum",
            KmsKeyID: "iusto",
            PreferredMaintenanceWindow: "ullam",
            ShardCapacity: 891773,
            ShardCount: 56713,
            SubnetIds: []string{
                "enim",
                "eum",
                "voluptatum",
                "autem",
            },
            Tags: map[string]string{
                "non": "deleniti",
                "similique": "reprehenderit",
                "molestiae": "quo",
                "quasi": "laboriosam",
            },
            VpcSecurityGroupIds: []string{
                "est",
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