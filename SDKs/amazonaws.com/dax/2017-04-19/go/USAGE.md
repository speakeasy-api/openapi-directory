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
        CreateClusterRequest: shared.CreateClusterRequest{
            AvailabilityZones: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            ClusterEndpointEncryptionType: "TLS",
            ClusterName: "nulla",
            Description: "corrupti",
            IamRoleArn: "illum",
            NodeType: "vel",
            NotificationTopicArn: "error",
            ParameterGroupName: "deserunt",
            PreferredMaintenanceWindow: "suscipit",
            ReplicationFactor: 437587,
            SSESpecification: &shared.SSESpecification{
                Enabled: false,
            },
            SecurityGroupIds: []string{
                "debitis",
                "ipsa",
            },
            SubnetGroupName: "delectus",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "suscipit",
                    Value: "molestiae",
                },
                shared.Tag{
                    Key: "minus",
                    Value: "placeat",
                },
            },
        },
        XAmzAlgorithm: "voluptatum",
        XAmzContentSha256: "iusto",
        XAmzCredential: "excepturi",
        XAmzDate: "nisi",
        XAmzSecurityToken: "recusandae",
        XAmzSignature: "temporibus",
        XAmzSignedHeaders: "ab",
        XAmzTarget: "AmazonDAXV3.CreateCluster",
    }

    ctx := context.Background()
    res, err := s.CreateCluster(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateClusterResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->