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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AmazonDAXV3.CreateCluster",
        },
        Request: shared.CreateClusterRequest{
            AvailabilityZones: []string{
                "et",
            },
            ClusterEndpointEncryptionType: "NONE",
            ClusterName: "rerum",
            Description: "dicta",
            IamRoleArn: "debitis",
            NodeType: "voluptatum",
            NotificationTopicArn: "et",
            ParameterGroupName: "ut",
            PreferredMaintenanceWindow: "dolorem",
            ReplicationFactor: 7259475919510918339,
            SSESpecification: &shared.SseSpecification{
                Enabled: false,
            },
            SecurityGroupIds: []string{
                "vitae",
                "totam",
                "dolores",
            },
            SubnetGroupName: "illum",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "vel",
                    Value: "odio",
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