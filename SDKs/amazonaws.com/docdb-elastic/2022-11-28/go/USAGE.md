<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateCluster(ctx, operations.CreateClusterRequest{
        RequestBody: operations.CreateClusterRequestBody{
            AdminUserName: "corrupti",
            AdminUserPassword: "provident",
            AuthType: operations.CreateClusterRequestBodyAuthTypeEnumSecretArn,
            ClientToken: sdk.String("quibusdam"),
            ClusterName: "unde",
            KmsKeyID: sdk.String("nulla"),
            PreferredMaintenanceWindow: sdk.String("corrupti"),
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
        XAmzAlgorithm: sdk.String("placeat"),
        XAmzContentSha256: sdk.String("voluptatum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateClusterOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->