# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/dlm/2018-01-12/go
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
    res, err := s.CreateLifecyclePolicy(ctx, operations.CreateLifecyclePolicyRequest{
        RequestBody: operations.CreateLifecyclePolicyRequestBody{
            Description: "corrupti",
            ExecutionRoleArn: "provident",
            PolicyDetails: operations.CreateLifecyclePolicyRequestBodyPolicyDetails{
                Actions: []shared.Action{
                    shared.Action{
                        CrossRegionCopy: []shared.CrossRegionCopyAction{
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: sdk.String("unde"),
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(857946),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                                },
                                Target: "illum",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: sdk.String("vel"),
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(623564),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                                },
                                Target: "suscipit",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: sdk.String("iure"),
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(297534),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumYears.ToPointer(),
                                },
                                Target: "ipsa",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: sdk.String("delectus"),
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(272656),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                                },
                                Target: "molestiae",
                            },
                        },
                        Name: "Irving Lehner",
                    },
                    shared.Action{
                        CrossRegionCopy: []shared.CrossRegionCopyAction{
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: sdk.String("recusandae"),
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(836079),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumDays.ToPointer(),
                                },
                                Target: "quis",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: sdk.String("veritatis"),
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(648172),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumDays.ToPointer(),
                                },
                                Target: "ipsam",
                            },
                        },
                        Name: "Timmy Satterfield",
                    },
                    shared.Action{
                        CrossRegionCopy: []shared.CrossRegionCopyAction{
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: sdk.String("maiores"),
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(473608),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumYears.ToPointer(),
                                },
                                Target: "quod",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: sdk.String("esse"),
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(520478),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumYears.ToPointer(),
                                },
                                Target: "dolorum",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: sdk.String("dicta"),
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(720633),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                                },
                                Target: "occaecati",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: sdk.String("fugit"),
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(537373),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumYears.ToPointer(),
                                },
                                Target: "optio",
                            },
                        },
                        Name: "Jack Johns",
                    },
                },
                EventSource: &shared.EventSource{
                    Parameters: &shared.EventParameters{
                        DescriptionRegex: "qui",
                        EventType: shared.EventTypeValuesEnumShareSnapshot,
                        SnapshotOwner: []string{
                            "cum",
                            "esse",
                            "ipsum",
                            "excepturi",
                        },
                    },
                    Type: shared.EventSourceValuesEnumManagedCwe,
                },
                Parameters: &shared.Parameters{
                    ExcludeBootVolume: sdk.Bool(false),
                    ExcludeDataVolumeTags: []shared.Tag{
                        shared.Tag{
                            Key: "perferendis",
                            Value: "ad",
                        },
                    },
                    NoReboot: sdk.Bool(false),
                },
                PolicyType: shared.PolicyTypeValuesEnumImageManagement.ToPointer(),
                ResourceLocations: []shared.ResourceLocationValuesEnum{
                    shared.ResourceLocationValuesEnumOutpost,
                },
                ResourceTypes: []shared.ResourceTypeValuesEnum{
                    shared.ResourceTypeValuesEnumInstance,
                },
                Schedules: []shared.Schedule{
                    shared.Schedule{
                        ArchiveRule: &shared.ArchiveRule{
                            RetainRule: shared.ArchiveRetainRule{
                                RetentionArchiveTier: shared.RetentionArchiveTier{
                                    Count: sdk.Int64(943749),
                                    Interval: sdk.Int64(902599),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                                },
                            },
                        },
                        CopyTags: sdk.Bool(false),
                        CreateRule: &shared.CreateRule{
                            CronExpression: sdk.String("in"),
                            Interval: sdk.Int64(359508),
                            IntervalUnit: shared.IntervalUnitValuesEnumHours.ToPointer(),
                            Location: shared.LocationValuesEnumOutpostLocal.ToPointer(),
                            Times: []string{
                                "saepe",
                                "quidem",
                            },
                        },
                        CrossRegionCopyRules: []shared.CrossRegionCopyRule{
                            shared.CrossRegionCopyRule{
                                CmkArn: sdk.String("ipsa"),
                                CopyTags: sdk.Bool(false),
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: sdk.Int64(969810),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(653140),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                                },
                                Target: sdk.String("dolores"),
                                TargetRegion: sdk.String("dolorem"),
                            },
                        },
                        DeprecateRule: &shared.DeprecateRule{
                            Count: sdk.Int64(358152),
                            Interval: sdk.Int64(128926),
                            IntervalUnit: shared.RetentionIntervalUnitValuesEnumYears.ToPointer(),
                        },
                        FastRestoreRule: &shared.FastRestoreRule{
                            AvailabilityZones: []string{
                                "omnis",
                                "nemo",
                            },
                            Count: sdk.Int64(325047),
                            Interval: sdk.Int64(570197),
                            IntervalUnit: shared.RetentionIntervalUnitValuesEnumDays.ToPointer(),
                        },
                        Name: sdk.String("Cecilia Yundt MD"),
                        RetainRule: &shared.RetainRule{
                            Count: sdk.Int64(208876),
                            Interval: sdk.Int64(635059),
                            IntervalUnit: shared.RetentionIntervalUnitValuesEnumDays.ToPointer(),
                        },
                        ShareRules: []shared.ShareRule{
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "occaecati",
                                    "numquam",
                                    "commodi",
                                },
                                UnshareInterval: sdk.Int64(466311),
                                UnshareIntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                            },
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "error",
                                },
                                UnshareInterval: sdk.Int64(158969),
                                UnshareIntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                            },
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "laborum",
                                },
                                UnshareInterval: sdk.Int64(656330),
                                UnshareIntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                            },
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "quo",
                                },
                                UnshareInterval: sdk.Int64(196582),
                                UnshareIntervalUnit: shared.RetentionIntervalUnitValuesEnumYears.ToPointer(),
                            },
                        },
                        TagsToAdd: []shared.Tag{
                            shared.Tag{
                                Key: "id",
                                Value: "possimus",
                            },
                            shared.Tag{
                                Key: "aut",
                                Value: "quasi",
                            },
                        },
                        VariableTags: []shared.Tag{
                            shared.Tag{
                                Key: "temporibus",
                                Value: "laborum",
                            },
                            shared.Tag{
                                Key: "quasi",
                                Value: "reiciendis",
                            },
                            shared.Tag{
                                Key: "voluptatibus",
                                Value: "vero",
                            },
                        },
                    },
                    shared.Schedule{
                        ArchiveRule: &shared.ArchiveRule{
                            RetainRule: shared.ArchiveRetainRule{
                                RetentionArchiveTier: shared.RetentionArchiveTier{
                                    Count: sdk.Int64(468651),
                                    Interval: sdk.Int64(509624),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumYears.ToPointer(),
                                },
                            },
                        },
                        CopyTags: sdk.Bool(false),
                        CreateRule: &shared.CreateRule{
                            CronExpression: sdk.String("ipsa"),
                            Interval: sdk.Int64(604846),
                            IntervalUnit: shared.IntervalUnitValuesEnumHours.ToPointer(),
                            Location: shared.LocationValuesEnumCloud.ToPointer(),
                            Times: []string{
                                "perferendis",
                                "doloremque",
                                "reprehenderit",
                            },
                        },
                        CrossRegionCopyRules: []shared.CrossRegionCopyRule{
                            shared.CrossRegionCopyRule{
                                CmkArn: sdk.String("maiores"),
                                CopyTags: sdk.Bool(false),
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: sdk.Int64(120196),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(296140),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                                },
                                Target: sdk.String("dicta"),
                                TargetRegion: sdk.String("harum"),
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: sdk.String("enim"),
                                CopyTags: sdk.Bool(false),
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: sdk.Int64(880476),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(918236),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumDays.ToPointer(),
                                },
                                Target: sdk.String("ipsum"),
                                TargetRegion: sdk.String("quidem"),
                            },
                        },
                        DeprecateRule: &shared.DeprecateRule{
                            Count: sdk.Int64(565189),
                            Interval: sdk.Int64(566602),
                            IntervalUnit: shared.RetentionIntervalUnitValuesEnumYears.ToPointer(),
                        },
                        FastRestoreRule: &shared.FastRestoreRule{
                            AvailabilityZones: []string{
                                "praesentium",
                                "rem",
                            },
                            Count: sdk.Int64(916723),
                            Interval: sdk.Int64(93940),
                            IntervalUnit: shared.RetentionIntervalUnitValuesEnumYears.ToPointer(),
                        },
                        Name: sdk.String("Patrick Ward"),
                        RetainRule: &shared.RetainRule{
                            Count: sdk.Int64(9356),
                            Interval: sdk.Int64(667411),
                            IntervalUnit: shared.RetentionIntervalUnitValuesEnumYears.ToPointer(),
                        },
                        ShareRules: []shared.ShareRule{
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "distinctio",
                                    "quibusdam",
                                    "labore",
                                },
                                UnshareInterval: sdk.Int64(264730),
                                UnshareIntervalUnit: shared.RetentionIntervalUnitValuesEnumDays.ToPointer(),
                            },
                        },
                        TagsToAdd: []shared.Tag{
                            shared.Tag{
                                Key: "cupiditate",
                                Value: "quos",
                            },
                            shared.Tag{
                                Key: "perferendis",
                                Value: "magni",
                            },
                        },
                        VariableTags: []shared.Tag{
                            shared.Tag{
                                Key: "ipsam",
                                Value: "alias",
                            },
                            shared.Tag{
                                Key: "fugit",
                                Value: "dolorum",
                            },
                            shared.Tag{
                                Key: "excepturi",
                                Value: "tempora",
                            },
                            shared.Tag{
                                Key: "facilis",
                                Value: "tempore",
                            },
                        },
                    },
                },
                TargetTags: []shared.Tag{
                    shared.Tag{
                        Key: "delectus",
                        Value: "eum",
                    },
                    shared.Tag{
                        Key: "non",
                        Value: "eligendi",
                    },
                },
            },
            State: operations.CreateLifecyclePolicyRequestBodyStateEnumDisabled,
            Tags: map[string]string{
                "provident": "necessitatibus",
                "sint": "officia",
            },
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLifecyclePolicyResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateLifecyclePolicy](docs/sdk/README.md#createlifecyclepolicy) - Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can create up to 100 lifecycle policies.
* [DeleteLifecyclePolicy](docs/sdk/README.md#deletelifecyclepolicy) - <p>Deletes the specified lifecycle policy and halts the automated operations that the policy specified.</p> <p>For more information about deleting a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#delete">Delete lifecycle policies</a>.</p>
* [GetLifecyclePolicies](docs/sdk/README.md#getlifecyclepolicies) - <p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
* [GetLifecyclePolicy](docs/sdk/README.md#getlifecyclepolicy) - Gets detailed information about the specified lifecycle policy.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags for the specified resource.
* [TagResource](docs/sdk/README.md#tagresource) - Adds the specified tags to the specified resource.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes the specified tags from the specified resource.
* [UpdateLifecyclePolicy](docs/sdk/README.md#updatelifecyclepolicy) - <p>Updates the specified lifecycle policy.</p> <p>For more information about updating a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#modify">Modify lifecycle policies</a>.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
