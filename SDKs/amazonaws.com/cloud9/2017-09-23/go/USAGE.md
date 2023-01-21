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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2",
        },
        Request: shared.CreateEnvironmentEc2Request{
            AutomaticStopTimeMinutes: 8274930044578894929,
            ClientRequestToken: "et",
            ConnectionType: "CONNECT_SSH",
            Description: "rerum",
            DryRun: false,
            ImageID: "debitis",
            InstanceType: "voluptatum",
            Name: "et",
            OwnerArn: "ut",
            SubnetID: "dolorem",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "voluptate",
                    Value: "iste",
                },
                shared.Tag{
                    Key: "vitae",
                    Value: "totam",
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