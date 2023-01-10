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
    
    req := operations.CreateNotificationRuleRequest{
        Headers: operations.CreateNotificationRuleHeaders{
            XAmzAlgorithm: "labore",
            XAmzContentSha256: "est",
            XAmzCredential: "quod",
            XAmzDate: "et",
            XAmzSecurityToken: "sit",
            XAmzSignature: "quo",
            XAmzSignedHeaders: "omnis",
        },
        Request: operations.CreateNotificationRuleRequestBody{
            ClientRequestToken: "reprehenderit",
            DetailType: "BASIC",
            EventTypeIds: []string{
                "veniam",
            },
            Name: "impedit",
            Resource: "ex",
            Status: "DISABLED",
            Tags: map[string]string{
                "sunt": "incidunt",
                "sed": "repellendus",
                "error": "nostrum",
            },
            Targets: []shared.Target{
                shared.Target{
                    TargetAddress: "nihil",
                    TargetType: "ipsa",
                },
                shared.Target{
                    TargetAddress: "nihil",
                    TargetType: "sed",
                },
                shared.Target{
                    TargetAddress: "autem",
                    TargetType: "consequatur",
                },
            },
        },
    }
    
    res, err := s.CreateNotificationRule(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNotificationRuleResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->