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
    
    req := operations.CreateHomeRegionControlRequest{
        Headers: operations.CreateHomeRegionControlHeaders{
            XAmzAlgorithm: "totam",
            XAmzContentSha256: "sit",
            XAmzCredential: "et",
            XAmzDate: "et",
            XAmzSecurityToken: "praesentium",
            XAmzSignature: "voluptates",
            XAmzSignedHeaders: "inventore",
            XAmzTarget: "AWSMigrationHubMultiAccountService.CreateHomeRegionControl",
        },
        Request: shared.CreateHomeRegionControlRequest{
            DryRun: true,
            HomeRegion: "facere",
            Target: shared.Target{
                ID: "numquam",
                Type: "ACCOUNT",
            },
        },
    }
    
    res, err := s.CreateHomeRegionControl(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateHomeRegionControlResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->