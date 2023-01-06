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
            XAmzAlgorithm: "cupiditate",
            XAmzContentSha256: "similique",
            XAmzCredential: "omnis",
            XAmzDate: "voluptatem",
            XAmzSecurityToken: "et",
            XAmzSignature: "maiores",
            XAmzSignedHeaders: "est",
            XAmzTarget: "EC2WindowsBarleyService.CreateApplication",
        },
        Request: shared.CreateApplicationRequest{
            CWEMonitorEnabled: true,
            OpsCenterEnabled: true,
            OpsItemSNSTopicArn: "quo",
            ResourceGroupName: "nihil",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "et",
                    Value: "vel",
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