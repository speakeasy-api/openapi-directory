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

    req := operations.CreateApplicationRequest{
        Headers: operations.CreateApplicationHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "EC2WindowsBarleyService.CreateApplication",
        },
        Request: shared.CreateApplicationRequest{
            AutoConfigEnabled: false,
            AutoCreate: false,
            CWEMonitorEnabled: false,
            GroupingType: "ACCOUNT_BASED",
            OpsCenterEnabled: false,
            OpsItemSNSTopicArn: "fuga",
            ResourceGroupName: "facilis",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "iusto",
                    Value: "ullam",
                },
                shared.Tag{
                    Key: "saepe",
                    Value: "inventore",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateApplication(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplicationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->