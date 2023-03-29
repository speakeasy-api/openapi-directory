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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2",
        },
        Request: shared.CreateEnvironmentEc2Request{
            AutomaticStopTimeMinutes: 423655,
            ClientRequestToken: "fuga",
            ConnectionType: "CONNECT_SSM",
            Description: "eum",
            DryRun: false,
            ImageID: "iusto",
            InstanceType: "ullam",
            Name: "saepe",
            OwnerArn: "inventore",
            SubnetID: "sapiente",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "eum",
                    Value: "voluptatum",
                },
                shared.Tag{
                    Key: "autem",
                    Value: "vel",
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