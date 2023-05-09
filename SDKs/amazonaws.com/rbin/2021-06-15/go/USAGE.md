<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateRule(ctx, operations.CreateRuleRequest{
        RequestBody: operations.CreateRuleRequestBody{
            Description: sdk.String("corrupti"),
            LockConfiguration: &operations.CreateRuleRequestBodyLockConfiguration{
                UnlockDelay: &shared.UnlockDelay{
                    UnlockDelayUnit: shared.UnlockDelayUnitEnumDays,
                    UnlockDelayValue: 592845,
                },
            },
            ResourceTags: []shared.ResourceTag{
                shared.ResourceTag{
                    ResourceTagKey: "quibusdam",
                    ResourceTagValue: sdk.String("unde"),
                },
                shared.ResourceTag{
                    ResourceTagKey: "nulla",
                    ResourceTagValue: sdk.String("corrupti"),
                },
                shared.ResourceTag{
                    ResourceTagKey: "illum",
                    ResourceTagValue: sdk.String("vel"),
                },
            },
            ResourceType: operations.CreateRuleRequestBodyResourceTypeEnumEc2Image,
            RetentionPeriod: operations.CreateRuleRequestBodyRetentionPeriod{
                RetentionPeriodUnit: shared.RetentionPeriodUnitEnumDays.ToPointer(),
                RetentionPeriodValue: sdk.Int64(645894),
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
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("placeat"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRuleResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->