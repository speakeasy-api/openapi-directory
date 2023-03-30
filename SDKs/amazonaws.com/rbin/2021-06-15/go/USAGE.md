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

    req := operations.CreateRuleRequest{
        Headers: operations.CreateRuleHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateRuleRequestBody{
            Description: "illum",
            LockConfiguration: &operations.CreateRuleRequestBodyLockConfiguration{
                UnlockDelay: &shared.UnlockDelay{
                    UnlockDelayUnit: "DAYS",
                    UnlockDelayValue: 423655,
                },
            },
            ResourceTags: []shared.ResourceTag{
                shared.ResourceTag{
                    ResourceTagKey: "deserunt",
                    ResourceTagValue: "suscipit",
                },
                shared.ResourceTag{
                    ResourceTagKey: "iure",
                    ResourceTagValue: "magnam",
                },
                shared.ResourceTag{
                    ResourceTagKey: "debitis",
                    ResourceTagValue: "ipsa",
                },
            },
            ResourceType: "EC2_IMAGE",
            RetentionPeriod: operations.CreateRuleRequestBodyRetentionPeriod{
                RetentionPeriodUnit: "DAYS",
                RetentionPeriodValue: 272656,
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "molestiae",
                    Value: "minus",
                },
                shared.Tag{
                    Key: "placeat",
                    Value: "voluptatum",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateRule(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRuleResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->