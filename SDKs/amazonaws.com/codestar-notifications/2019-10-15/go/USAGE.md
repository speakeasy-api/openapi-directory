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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.CreateNotificationRuleRequestBody{
            ClientRequestToken: "voluptas",
            DetailType: "BASIC",
            EventTypeIds: []string{
                "nihil",
            },
            Name: "rerum",
            Resource: "dicta",
            Status: "ENABLED",
            Tags: map[string]string{
                "et": "ut",
            },
            Targets: []shared.Target{
                shared.Target{
                    TargetAddress: "et",
                    TargetType: "voluptate",
                },
                shared.Target{
                    TargetAddress: "iste",
                    TargetType: "vitae",
                },
                shared.Target{
                    TargetAddress: "totam",
                    TargetType: "dolores",
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