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

    req := operations.AddAttributesToFindingsRequest{
        AddAttributesToFindingsRequest: shared.AddAttributesToFindingsRequest{
            Attributes: []shared.Attribute{
                shared.Attribute{
                    Key: "provident",
                    Value: "distinctio",
                },
                shared.Attribute{
                    Key: "quibusdam",
                    Value: "unde",
                },
                shared.Attribute{
                    Key: "nulla",
                    Value: "corrupti",
                },
            },
            FindingArns: []string{
                "vel",
                "error",
                "deserunt",
                "suscipit",
            },
        },
        XAmzAlgorithm: "iure",
        XAmzContentSha256: "magnam",
        XAmzCredential: "debitis",
        XAmzDate: "ipsa",
        XAmzSecurityToken: "delectus",
        XAmzSignature: "tempora",
        XAmzSignedHeaders: "suscipit",
        XAmzTarget: "InspectorService.AddAttributesToFindings",
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