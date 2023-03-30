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

    req := operations.CreateNotificationRuleRequest{
        Headers: operations.CreateNotificationRuleHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateNotificationRuleRequestBody{
            ClientRequestToken: "illum",
            DetailType: "BASIC",
            EventTypeIds: []string{
                "deserunt",
                "suscipit",
                "iure",
            },
            Name: "magnam",
            Resource: "debitis",
            Status: "ENABLED",
            Tags: map[string]string{
                "tempora": "suscipit",
                "molestiae": "minus",
                "placeat": "voluptatum",
                "iusto": "excepturi",
            },
            Targets: []shared.Target{
                shared.Target{
                    TargetAddress: "recusandae",
                    TargetType: "temporibus",
                },
                shared.Target{
                    TargetAddress: "ab",
                    TargetType: "quis",
                },
            },
        },
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