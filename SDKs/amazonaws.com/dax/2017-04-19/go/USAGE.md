<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateClusterRequest{
        Headers: operations.CreateClusterHeaders{
            XAmzAlgorithm: "dolor",
            XAmzContentSha256: "dolor",
            XAmzCredential: "ducimus",
            XAmzDate: "in",
            XAmzSecurityToken: "enim",
            XAmzSignature: "iusto",
            XAmzSignedHeaders: "dolor",
            XAmzTarget: "AmazonDAXV3.CreateCluster",
        },
        Request: shared.CreateClusterRequest{
            AvailabilityZones: []string{
                "dolores",
            },
            ClusterEndpointEncryptionType: "TLS",
            ClusterName: "voluptatem",
            Description: "rerum",
            IamRoleArn: "reiciendis",
            NodeType: "aut",
            NotificationTopicArn: "unde",
            ParameterGroupName: "saepe",
            PreferredMaintenanceWindow: "ratione",
            ReplicationFactor: 2367153732642039729,
            SSESpecification: &shared.SseSpecification{
                Enabled: false,
            },
            SecurityGroupIds: []string{
                "veniam",
                "consequatur",
                "corporis",
            },
            SubnetGroupName: "est",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "adipisci",
                    Value: "est",
                },
            },
        },
    }
    
    res, err := s.CreateCluster(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateClusterResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->