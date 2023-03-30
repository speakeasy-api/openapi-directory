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

    req := operations.CreateEnvironmentEc2Request{
        Headers: operations.CreateEnvironmentEc2Headers{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2",
        },
        Request: shared.CreateEnvironmentEc2Request{
            AutomaticStopTimeMinutes: 847252,
            ClientRequestToken: "vel",
            ConnectionType: "CONNECT_SSM",
            Description: "deserunt",
            DryRun: false,
            ImageID: "suscipit",
            InstanceType: "iure",
            Name: "magnam",
            OwnerArn: "debitis",
            SubnetID: "ipsa",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "tempora",
                    Value: "suscipit",
                },
                shared.Tag{
                    Key: "molestiae",
                    Value: "minus",
                },
                shared.Tag{
                    Key: "placeat",
                    Value: "voluptatum",
                },
                shared.Tag{
                    Key: "iusto",
                    Value: "excepturi",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateEnvironmentEc2(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEnvironmentEc2Result != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->