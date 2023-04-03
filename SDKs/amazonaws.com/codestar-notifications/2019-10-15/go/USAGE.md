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

    req := operations.CreateNotificationRuleRequest{
        RequestBody: operations.CreateNotificationRuleRequestBody{
            ClientRequestToken: "corrupti",
            DetailType: "FULL",
            EventTypeIds: []string{
                "quibusdam",
                "unde",
                "nulla",
            },
            Name: "corrupti",
            Resource: "illum",
            Status: "ENABLED",
            Tags: map[string]string{
                "deserunt": "suscipit",
                "iure": "magnam",
                "debitis": "ipsa",
            },
            Targets: []shared.Target{
                shared.Target{
                    TargetAddress: "tempora",
                    TargetType: "suscipit",
                },
                shared.Target{
                    TargetAddress: "molestiae",
                    TargetType: "minus",
                },
                shared.Target{
                    TargetAddress: "placeat",
                    TargetType: "voluptatum",
                },
                shared.Target{
                    TargetAddress: "iusto",
                    TargetType: "excepturi",
                },
            },
        },
        XAmzAlgorithm: "nisi",
        XAmzContentSha256: "recusandae",
        XAmzCredential: "temporibus",
        XAmzDate: "ab",
        XAmzSecurityToken: "quis",
        XAmzSignature: "veritatis",
        XAmzSignedHeaders: "deserunt",
    }

    ctx := context.Background()
    res, err := s.CreateNotificationRule(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNotificationRuleResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->