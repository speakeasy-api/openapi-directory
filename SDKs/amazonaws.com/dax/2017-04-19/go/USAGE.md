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
    res, err := s.CreateCluster(ctx, operations.CreateClusterRequest{
        CreateClusterRequest: shared.CreateClusterRequest{
            AvailabilityZones: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            ClusterEndpointEncryptionType: shared.ClusterEndpointEncryptionTypeEnumTLS.ToPointer(),
            ClusterName: "nulla",
            Description: sdk.String("corrupti"),
            IamRoleArn: "illum",
            NodeType: "vel",
            NotificationTopicArn: sdk.String("error"),
            ParameterGroupName: sdk.String("deserunt"),
            PreferredMaintenanceWindow: sdk.String("suscipit"),
            ReplicationFactor: 437587,
            SSESpecification: &shared.SSESpecification{
                Enabled: false,
            },
            SecurityGroupIds: []string{
                "debitis",
                "ipsa",
            },
            SubnetGroupName: sdk.String("delectus"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("suscipit"),
                    Value: sdk.String("molestiae"),
                },
                shared.Tag{
                    Key: sdk.String("minus"),
                    Value: sdk.String("placeat"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.CreateClusterXAmzTargetEnumAmazonDaxv3CreateCluster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateClusterResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->