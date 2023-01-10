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
            XAmzAlgorithm: "cupiditate",
            XAmzContentSha256: "omnis",
            XAmzCredential: "iste",
            XAmzDate: "unde",
            XAmzSecurityToken: "adipisci",
            XAmzSignature: "impedit",
            XAmzSignedHeaders: "tempora",
            XAmzTarget: "AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2",
        },
        Request: shared.CreateEnvironmentEc2Request{
            AutomaticStopTimeMinutes: 3876518618080918046,
            ClientRequestToken: "corrupti",
            ConnectionType: "CONNECT_SSM",
            Description: "cum",
            DryRun: false,
            ImageID: "ea",
            InstanceType: "architecto",
            Name: "esse",
            OwnerArn: "explicabo",
            SubnetID: "distinctio",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "non",
                    Value: "accusantium",
                },
                shared.Tag{
                    Key: "ut",
                    Value: "consequatur",
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