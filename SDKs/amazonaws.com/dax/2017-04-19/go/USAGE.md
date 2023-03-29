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
            XAmzTarget: "AmazonDAXV3.CreateCluster",
        },
        Request: shared.CreateClusterRequest{
            AvailabilityZones: []string{
                "fuga",
                "facilis",
            },
            ClusterEndpointEncryptionType: "NONE",
            ClusterName: "iusto",
            Description: "ullam",
            IamRoleArn: "saepe",
            NodeType: "inventore",
            NotificationTopicArn: "sapiente",
            ParameterGroupName: "enim",
            PreferredMaintenanceWindow: "eum",
            ReplicationFactor: 477665,
            SSESpecification: &shared.SSESpecification{
                Enabled: false,
            },
            SecurityGroupIds: []string{
                "vel",
                "non",
                "deleniti",
                "similique",
            },
            SubnetGroupName: "reprehenderit",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quo",
                    Value: "quasi",
                },
                shared.Tag{
                    Key: "laboriosam",
                    Value: "dicta",
                },
                shared.Tag{
                    Key: "est",
                    Value: "voluptatem",
                },
                shared.Tag{
                    Key: "consequatur",
                    Value: "fugiat",
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