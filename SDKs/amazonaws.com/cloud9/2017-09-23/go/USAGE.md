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
    
    req := operations.CreateEnvironmentEc2Request{
        Headers: operations.CreateEnvironmentEc2Headers{
            XAmzAlgorithm: "maxime",
            XAmzContentSha256: "omnis",
            XAmzCredential: "dolor",
            XAmzDate: "non",
            XAmzSecurityToken: "veniam",
            XAmzSignature: "dolorem",
            XAmzSignedHeaders: "minima",
            XAmzTarget: "AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2",
        },
        Request: shared.CreateEnvironmentEc2Request{
            AutomaticStopTimeMinutes: 8783871116342809002,
            ClientRequestToken: "magni",
            ConnectionType: "CONNECT_SSM",
            Description: "omnis",
            DryRun: false,
            ImageID: "unde",
            InstanceType: "adipisci",
            Name: "impedit",
            OwnerArn: "tempora",
            SubnetID: "aut",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "corrupti",
                    Value: "animi",
                },
                shared.Tag{
                    Key: "cum",
                    Value: "occaecati",
                },
            },
        },
    }
    
    res, err := s.CreateEnvironmentEc2(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEnvironmentEc2Result != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->