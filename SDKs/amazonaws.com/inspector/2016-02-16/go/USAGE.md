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

    req := operations.AddAttributesToFindingsRequest{
        Headers: operations.AddAttributesToFindingsHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "InspectorService.AddAttributesToFindings",
        },
        Request: shared.AddAttributesToFindingsRequest{
            Attributes: []shared.Attribute{
                shared.Attribute{
                    Key: "vel",
                    Value: "error",
                },
                shared.Attribute{
                    Key: "deserunt",
                    Value: "suscipit",
                },
                shared.Attribute{
                    Key: "iure",
                    Value: "magnam",
                },
                shared.Attribute{
                    Key: "debitis",
                    Value: "ipsa",
                },
            },
            FindingArns: []string{
                "tempora",
                "suscipit",
                "molestiae",
                "minus",
            },
        },
    }

    ctx := context.Background()
    res, err := s.AddAttributesToFindings(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddAttributesToFindingsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->