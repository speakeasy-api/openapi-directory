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
            XAmzTarget: "AmazonDAXV3.CreateCluster",
        },
        Request: shared.CreateClusterRequest{
            AvailabilityZones: []string{
                "vel",
                "error",
                "deserunt",
                "suscipit",
            },
            ClusterEndpointEncryptionType: "NONE",
            ClusterName: "magnam",
            Description: "debitis",
            IamRoleArn: "ipsa",
            NodeType: "delectus",
            NotificationTopicArn: "tempora",
            ParameterGroupName: "suscipit",
            PreferredMaintenanceWindow: "molestiae",
            ReplicationFactor: 791725,
            SSESpecification: &shared.SSESpecification{
                Enabled: false,
            },
            SecurityGroupIds: []string{
                "voluptatum",
                "iusto",
                "excepturi",
                "nisi",
            },
            SubnetGroupName: "recusandae",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ab",
                    Value: "quis",
                },
                shared.Tag{
                    Key: "veritatis",
                    Value: "deserunt",
                },
                shared.Tag{
                    Key: "perferendis",
                    Value: "ipsam",
                },
                shared.Tag{
                    Key: "repellendus",
                    Value: "sapiente",
                },
            },
        },
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