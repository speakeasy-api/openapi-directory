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
            XAmzAlgorithm: "et",
            XAmzContentSha256: "deleniti",
            XAmzCredential: "laudantium",
            XAmzDate: "fuga",
            XAmzSecurityToken: "doloribus",
            XAmzSignature: "quasi",
            XAmzSignedHeaders: "et",
            XAmzTarget: "AWSMigrationHubMultiAccountService.CreateHomeRegionControl",
        },
        Request: shared.CreateHomeRegionControlRequest{
            DryRun: false,
            HomeRegion: "doloremque",
            Target: shared.Target{
                ID: "minus",
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