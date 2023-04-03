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

    req := operations.CreateRuleRequest{
        RequestBody: operations.CreateRuleRequestBody{
            Description: "corrupti",
            LockConfiguration: &operations.CreateRuleRequestBodyLockConfiguration{
                UnlockDelay: &shared.UnlockDelay{
                    UnlockDelayUnit: "DAYS",
                    UnlockDelayValue: 592845,
                },
            },
            ResourceTags: []shared.ResourceTag{
                shared.ResourceTag{
                    ResourceTagKey: "quibusdam",
                    ResourceTagValue: "unde",
                },
                shared.ResourceTag{
                    ResourceTagKey: "nulla",
                    ResourceTagValue: "corrupti",
                },
                shared.ResourceTag{
                    ResourceTagKey: "illum",
                    ResourceTagValue: "vel",
                },
            },
            ResourceType: "EC2_IMAGE",
            RetentionPeriod: operations.CreateRuleRequestBodyRetentionPeriod{
                RetentionPeriodUnit: "DAYS",
                RetentionPeriodValue: 645894,
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "iure",
                    Value: "magnam",
                },
                shared.Tag{
                    Key: "debitis",
                    Value: "ipsa",
                },
            },
        },
        XAmzAlgorithm: "delectus",
        XAmzContentSha256: "tempora",
        XAmzCredential: "suscipit",
        XAmzDate: "molestiae",
        XAmzSecurityToken: "minus",
        XAmzSignature: "placeat",
        XAmzSignedHeaders: "voluptatum",
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