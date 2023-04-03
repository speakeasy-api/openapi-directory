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

    req := operations.CreateLifecyclePolicyRequest{
        RequestBody: operations.CreateLifecyclePolicyRequestBody{
            Description: "corrupti",
            ExecutionRoleArn: "provident",
            PolicyDetails: operations.CreateLifecyclePolicyRequestBodyPolicyDetails{
                Actions: []shared.Action{
                    shared.Action{
                        CrossRegionCopy: []shared.CrossRegionCopyAction{
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "unde",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 857946,
                                    IntervalUnit: "MONTHS",
                                },
                                Target: "illum",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "vel",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 623564,
                                    IntervalUnit: "MONTHS",
                                },
                                Target: "suscipit",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "iure",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 297534,
                                    IntervalUnit: "YEARS",
                                },
                                Target: "ipsa",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "delectus",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 272656,
                                    IntervalUnit: "WEEKS",
                                },
                                Target: "molestiae",
                            },
                        },
                        Name: "minus",
                    },
                    shared.Action{
                        CrossRegionCopy: []shared.CrossRegionCopyAction{
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "voluptatum",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 479977,
                                    IntervalUnit: "MONTHS",
                                },
                                Target: "nisi",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "recusandae",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 836079,
                                    IntervalUnit: "DAYS",
                                },
                                Target: "quis",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "veritatis",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 648172,
                                    IntervalUnit: "DAYS",
                                },
                                Target: "ipsam",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "repellendus",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 957156,
                                    IntervalUnit: "YEARS",
                                },
                                Target: "odit",
                            },
                        },
                        Name: "at",
                    },
                    shared.Action{
                        CrossRegionCopy: []shared.CrossRegionCopyAction{
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "maiores",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 473608,
                                    IntervalUnit: "YEARS",
                                },
                                Target: "quod",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "esse",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 520478,
                                    IntervalUnit: "YEARS",
                                },
                                Target: "dolorum",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "dicta",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 720633,
                                    IntervalUnit: "MONTHS",
                                },
                                Target: "occaecati",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "fugit",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 537373,
                                    IntervalUnit: "YEARS",
                                },
                                Target: "optio",
                            },
                        },
                        Name: "totam",
                    },
                },
                EventSource: &shared.EventSource{
                    Parameters: &shared.EventParameters{
                        DescriptionRegex: "beatae",
                        EventType: "shareSnapshot",
                        SnapshotOwner: []string{
                            "molestiae",
                            "modi",
                        },
                    },
                    Type: "MANAGED_CWE",
                },
                Parameters: &shared.Parameters{
                    ExcludeBootVolume: false,
                    ExcludeDataVolumeTags: []shared.Tag{
                        shared.Tag{
                            Key: "impedit",
                            Value: "cum",
                        },
                    },
                    NoReboot: false,
                },
                PolicyType: "IMAGE_MANAGEMENT",
                ResourceLocations: []shared.ResourceLocationValuesEnum{
                    "OUTPOST",
                },
                ResourceTypes: []shared.ResourceTypeValuesEnum{
                    "VOLUME",
                },
                Schedules: []shared.Schedule{
                    shared.Schedule{
                        ArchiveRule: &shared.ArchiveRule{
                            RetainRule: shared.ArchiveRetainRule{
                                RetentionArchiveTier: shared.RetentionArchiveTier{
                                    Count: 617636,
                                    Interval: 149675,
                                    IntervalUnit: "MONTHS",
                                },
                            },
                        },
                        CopyTags: false,
                        CreateRule: &shared.CreateRule{
                            CronExpression: "dolor",
                            Interval: 616934,
                            IntervalUnit: "HOURS",
                            Location: "CLOUD",
                            Times: []string{
                                "saepe",
                                "fuga",
                                "in",
                                "corporis",
                            },
                        },
                        CrossRegionCopyRules: []shared.CrossRegionCopyRule{
                            shared.CrossRegionCopyRule{
                                CmkArn: "iure",
                                CopyTags: false,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 902349,
                                    IntervalUnit: "MONTHS",
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 99280,
                                    IntervalUnit: "DAYS",
                                },
                                Target: "reiciendis",
                                TargetRegion: "est",
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: "mollitia",
                                CopyTags: false,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 670638,
                                    IntervalUnit: "DAYS",
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 210382,
                                    IntervalUnit: "WEEKS",
                                },
                                Target: "explicabo",
                                TargetRegion: "nobis",
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: "enim",
                                CopyTags: false,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 607831,
                                    IntervalUnit: "WEEKS",
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 325047,
                                    IntervalUnit: "MONTHS",
                                },
                                Target: "accusantium",
                                TargetRegion: "iure",
                            },
                        },
                        DeprecateRule: &shared.DeprecateRule{
                            Count: 634274,
                            Interval: 988374,
                            IntervalUnit: "YEARS",
                        },
                        FastRestoreRule: &shared.FastRestoreRule{
                            AvailabilityZones: []string{
                                "mollitia",
                            },
                            Count: 208876,
                            Interval: 635059,
                            IntervalUnit: "DAYS",
                        },
                        Name: "repellat",
                        RetainRule: &shared.RetainRule{
                            Count: 653108,
                            Interval: 581850,
                            IntervalUnit: "WEEKS",
                        },
                        ShareRules: []shared.ShareRule{
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "molestiae",
                                    "velit",
                                },
                                UnshareInterval: 623510,
                                UnshareIntervalUnit: "DAYS",
                            },
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "vitae",
                                    "laborum",
                                },
                                UnshareInterval: 656330,
                                UnshareIntervalUnit: "WEEKS",
                            },
                        },
                        TagsToAdd: []shared.Tag{
                            shared.Tag{
                                Key: "quo",
                                Value: "sequi",
                            },
                        },
                        VariableTags: []shared.Tag{
                            shared.Tag{
                                Key: "ipsam",
                                Value: "id",
                            },
                            shared.Tag{
                                Key: "possimus",
                                Value: "aut",
                            },
                            shared.Tag{
                                Key: "quasi",
                                Value: "error",
                            },
                            shared.Tag{
                                Key: "temporibus",
                                Value: "laborum",
                            },
                        },
                    },
                    shared.Schedule{
                        ArchiveRule: &shared.ArchiveRule{
                            RetainRule: shared.ArchiveRetainRule{
                                RetentionArchiveTier: shared.RetentionArchiveTier{
                                    Count: 96098,
                                    Interval: 971945,
                                    IntervalUnit: "YEARS",
                                },
                            },
                        },
                        CopyTags: false,
                        CreateRule: &shared.CreateRule{
                            CronExpression: "vero",
                            Interval: 468651,
                            IntervalUnit: "HOURS",
                            Location: "OUTPOST_LOCAL",
                            Times: []string{
                                "ipsa",
                                "omnis",
                                "voluptate",
                                "cum",
                            },
                        },
                        CrossRegionCopyRules: []shared.CrossRegionCopyRule{
                            shared.CrossRegionCopyRule{
                                CmkArn: "doloremque",
                                CopyTags: false,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 441711,
                                    IntervalUnit: "WEEKS",
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 979587,
                                    IntervalUnit: "DAYS",
                                },
                                Target: "corporis",
                                TargetRegion: "dolore",
                            },
                        },
                        DeprecateRule: &shared.DeprecateRule{
                            Count: 480894,
                            Interval: 118727,
                            IntervalUnit: "MONTHS",
                        },
                        FastRestoreRule: &shared.FastRestoreRule{
                            AvailabilityZones: []string{
                                "accusamus",
                                "commodi",
                            },
                            Count: 918236,
                            Interval: 64147,
                            IntervalUnit: "DAYS",
                        },
                        Name: "quidem",
                        RetainRule: &shared.RetainRule{
                            Count: 565189,
                            Interval: 566602,
                            IntervalUnit: "YEARS",
                        },
                        ShareRules: []shared.ShareRule{
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "rem",
                                    "voluptates",
                                    "quasi",
                                },
                                UnshareInterval: 921158,
                                UnshareIntervalUnit: "MONTHS",
                            },
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "itaque",
                                },
                                UnshareInterval: 277718,
                                UnshareIntervalUnit: "WEEKS",
                            },
                        },
                        TagsToAdd: []shared.Tag{
                            shared.Tag{
                                Key: "est",
                                Value: "quibusdam",
                            },
                        },
                        VariableTags: []shared.Tag{
                            shared.Tag{
                                Key: "deserunt",
                                Value: "distinctio",
                            },
                        },
                    },
                },
                TargetTags: []shared.Tag{
                    shared.Tag{
                        Key: "labore",
                        Value: "modi",
                    },
                    shared.Tag{
                        Key: "qui",
                        Value: "aliquid",
                    },
                    shared.Tag{
                        Key: "cupiditate",
                        Value: "quos",
                    },
                    shared.Tag{
                        Key: "perferendis",
                        Value: "magni",
                    },
                },
            },
            State: "DISABLED",
            Tags: map[string]string{
                "alias": "fugit",
                "dolorum": "excepturi",
            },
        },
        XAmzAlgorithm: "tempora",
        XAmzContentSha256: "facilis",
        XAmzCredential: "tempore",
        XAmzDate: "labore",
        XAmzSecurityToken: "delectus",
        XAmzSignature: "eum",
        XAmzSignedHeaders: "non",
    }

    ctx := context.Background()
    res, err := s.CreateLifecyclePolicy(ctx, req)
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

### SDK SDK

* `CreateLifecyclePolicy` - Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can create up to 100 lifecycle policies.
* `DeleteLifecyclePolicy` - <p>Deletes the specified lifecycle policy and halts the automated operations that the policy specified.</p> <p>For more information about deleting a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#delete">Delete lifecycle policies</a>.</p>
* `GetLifecyclePolicies` - <p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
* `GetLifecyclePolicy` - Gets detailed information about the specified lifecycle policy.
* `ListTagsForResource` - Lists the tags for the specified resource.
* `TagResource` - Adds the specified tags to the specified resource.
* `UntagResource` - Removes the specified tags from the specified resource.
* `UpdateLifecyclePolicy` - <p>Updates the specified lifecycle policy.</p> <p>For more information about updating a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#modify">Modify lifecycle policies</a>.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
