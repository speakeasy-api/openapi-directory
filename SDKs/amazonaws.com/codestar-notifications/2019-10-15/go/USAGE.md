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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateNotificationRuleRequestBody{
            ClientRequestToken: "nulla",
            DetailType: "BASIC",
            EventTypeIds: []string{
                "facilis",
                "eum",
                "iusto",
            },
            Name: "ullam",
            Resource: "saepe",
            Status: "ENABLED",
            Tags: map[string]string{
                "enim": "eum",
                "voluptatum": "autem",
                "vel": "non",
                "deleniti": "similique",
            },
            Targets: []shared.Target{
                shared.Target{
                    TargetAddress: "molestiae",
                    TargetType: "quo",
                },
                shared.Target{
                    TargetAddress: "quasi",
                    TargetType: "laboriosam",
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