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

    req := operations.CreateEnvironmentEc2Request{
        CreateEnvironmentEc2Request: shared.CreateEnvironmentEc2Request{
            AutomaticStopTimeMinutes: 548814,
            ClientRequestToken: "provident",
            ConnectionType: "CONNECT_SSM",
            Description: "quibusdam",
            DryRun: false,
            ImageID: "unde",
            InstanceType: "nulla",
            Name: "corrupti",
            OwnerArn: "illum",
            SubnetID: "vel",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "deserunt",
                    Value: "suscipit",
                },
                shared.Tag{
                    Key: "iure",
                    Value: "magnam",
                },
                shared.Tag{
                    Key: "debitis",
                    Value: "ipsa",
                },
            },
        },
        XAmzAlgorithm: "delectus",
        XAmzContentSha256: "tempora",
        XAmzCredential: "suscipit",
        XAmzDate: "molestiae",
        XAmzSecurityToken: "minus",
        XAmzSignature: "placeat",
        XAmzSignedHeaders: "voluptatum",
        XAmzTarget: "AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2",
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