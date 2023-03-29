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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateRuleRequestBody{
            Description: "nulla",
            LockConfiguration: &operations.CreateRuleRequestBodyLockConfiguration{
                UnlockDelay: &shared.UnlockDelay{
                    UnlockDelayUnit: "DAYS",
                    UnlockDelayValue: 623564,
                },
            },
            ResourceTags: []shared.ResourceTag{
                shared.ResourceTag{
                    ResourceTagKey: "eum",
                    ResourceTagValue: "iusto",
                },
                shared.ResourceTag{
                    ResourceTagKey: "ullam",
                    ResourceTagValue: "saepe",
                },
                shared.ResourceTag{
                    ResourceTagKey: "inventore",
                    ResourceTagValue: "sapiente",
                },
            },
            ResourceType: "EBS_SNAPSHOT",
            RetentionPeriod: operations.CreateRuleRequestBodyRetentionPeriod{
                RetentionPeriodUnit: "DAYS",
                RetentionPeriodValue: 477665,
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "vel",
                    Value: "non",
                },
                shared.Tag{
                    Key: "deleniti",
                    Value: "similique",
                },
                shared.Tag{
                    Key: "reprehenderit",
                    Value: "molestiae",
                },
                shared.Tag{
                    Key: "quo",
                    Value: "quasi",
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