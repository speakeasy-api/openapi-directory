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
    
    req := operations.CreateApplicationRequest{
        Headers: operations.CreateApplicationHeaders{
            XAmzAlgorithm: "laudantium",
            XAmzContentSha256: "odio",
            XAmzCredential: "deserunt",
            XAmzDate: "qui",
            XAmzSecurityToken: "inventore",
            XAmzSignature: "omnis",
            XAmzSignedHeaders: "veritatis",
            XAmzTarget: "EC2WindowsBarleyService.CreateApplication",
        },
        Request: shared.CreateApplicationRequest{
            CWEMonitorEnabled: false,
            OpsCenterEnabled: true,
            OpsItemSNSTopicArn: "vitae",
            ResourceGroupName: "quia",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "adipisci",
                    Value: "cupiditate",
                },
                shared.Tag{
                    Key: "similique",
                    Value: "omnis",
                },
            },
        },
    }
    
    res, err := s.CreateApplication(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplicationResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->