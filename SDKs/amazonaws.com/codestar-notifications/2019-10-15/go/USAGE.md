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
            XAmzAlgorithm: "occaecati",
            XAmzContentSha256: "maiores",
            XAmzCredential: "rerum",
            XAmzDate: "nobis",
            XAmzSecurityToken: "libero",
            XAmzSignature: "cumque",
            XAmzSignedHeaders: "accusamus",
        },
        Request: operations.CreateNotificationRuleRequestBody{
            ClientRequestToken: "voluptates",
            DetailType: "BASIC",
            EventTypeIds: []string{
                "quibusdam",
            },
            Name: "minima",
            Resource: "iusto",
            Status: "ENABLED",
            Tags: map[string]string{
                "sed": "quo",
                "animi": "et",
            },
            Targets: []shared.Target{
                shared.Target{
                    TargetAddress: "est",
                    TargetType: "quod",
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