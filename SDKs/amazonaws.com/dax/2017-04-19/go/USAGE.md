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
            XAmzAlgorithm: "non",
            XAmzContentSha256: "deleniti",
            XAmzCredential: "totam",
            XAmzDate: "nemo",
            XAmzSecurityToken: "eligendi",
            XAmzSignature: "quo",
            XAmzSignedHeaders: "et",
            XAmzTarget: "AmazonDAXV3.CreateCluster",
        },
        Request: shared.CreateClusterRequest{
            AvailabilityZones: []string{
                "enim",
            },
            ClusterEndpointEncryptionType: "TLS",
            ClusterName: "quia",
            Description: "vel",
            IamRoleArn: "placeat",
            NodeType: "rem",
            NotificationTopicArn: "laudantium",
            ParameterGroupName: "corporis",
            PreferredMaintenanceWindow: "qui",
            ReplicationFactor: 3762724418158293461,
            SSESpecification: &shared.SseSpecification{
                Enabled: true,
            },
            SecurityGroupIds: []string{
                "minima",
                "blanditiis",
                "sit",
            },
            SubnetGroupName: "dolorem",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "fugiat",
                    Value: "dolores",
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