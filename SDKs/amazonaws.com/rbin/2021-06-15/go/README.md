# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/rbin/2021-06-15/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateRule](docs/sdk/README.md#createrule) - Creates a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-create-rule"> Create Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
* [DeleteRule](docs/sdk/README.md#deleterule) - Deletes a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-delete-rule"> Delete Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
* [GetRule](docs/sdk/README.md#getrule) - Gets information about a Recycle Bin retention rule.
* [ListRules](docs/sdk/README.md#listrules) - Lists the Recycle Bin retention rules in the Region.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags assigned to a retention rule.
* [LockRule](docs/sdk/README.md#lockrule) - Locks a retention rule. A locked retention rule can't be modified or deleted.
* [TagResource](docs/sdk/README.md#tagresource) - Assigns tags to the specified retention rule.
* [UnlockRule](docs/sdk/README.md#unlockrule) - Unlocks a retention rule. After a retention rule is unlocked, it can be modified or deleted only after the unlock delay period expires.
* [UntagResource](docs/sdk/README.md#untagresource) - Unassigns a tag from a retention rule.
* [UpdateRule](docs/sdk/README.md#updaterule) - Updates an existing Recycle Bin retention rule. You can update a retention rule's description, resource tags, and retention period at any time after creation. You can't update a retention rule's resource type after creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-update-rule"> Update Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
