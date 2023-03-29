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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateLifecyclePolicyRequest{
        Headers: operations.CreateLifecyclePolicyHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateLifecyclePolicyRequestBody{
            Description: "nulla",
            ExecutionRoleArn: "nihil",
            PolicyDetails: operations.CreateLifecyclePolicyRequestBodyPolicyDetails{
                Actions: []shared.Action{
                    shared.Action{
                        CrossRegionCopy: []shared.CrossRegionCopyAction{
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "eum",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 437587,
                                    IntervalUnit: "WEEKS",
                                },
                                Target: "saepe",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "inventore",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 963663,
                                    IntervalUnit: "WEEKS",
                                },
                                Target: "eum",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "voluptatum",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 791725,
                                    IntervalUnit: "YEARS",
                                },
                                Target: "non",
                            },
                        },
                        Name: "deleniti",
                    },
                    shared.Action{
                        CrossRegionCopy: []shared.CrossRegionCopyAction{
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "reprehenderit",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 925597,
                                    IntervalUnit: "YEARS",
                                },
                                Target: "quasi",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "laboriosam",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 87129,
                                    IntervalUnit: "MONTHS",
                                },
                                Target: "voluptatem",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "consequatur",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 832620,
                                    IntervalUnit: "YEARS",
                                },
                                Target: "omnis",
                            },
                        },
                        Name: "eos",
                    },
                    shared.Action{
                        CrossRegionCopy: []shared.CrossRegionCopyAction{
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "accusamus",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 978619,
                                    IntervalUnit: "WEEKS",
                                },
                                Target: "quibusdam",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "et",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 461479,
                                    IntervalUnit: "MONTHS",
                                },
                                Target: "dolor",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "soluta",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 118274,
                                    IntervalUnit: "MONTHS",
                                },
                                Target: "rerum",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "culpa",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 143353,
                                    IntervalUnit: "MONTHS",
                                },
                                Target: "rerum",
                            },
                        },
                        Name: "possimus",
                    },
                },
                EventSource: &shared.EventSource{
                    Parameters: &shared.EventParameters{
                        DescriptionRegex: "occaecati",
                        EventType: "shareSnapshot",
                        SnapshotOwner: []string{
                            "rem",
                            "voluptatem",
                        },
                    },
                    Type: "MANAGED_CWE",
                },
                Parameters: &shared.Parameters{
                    ExcludeBootVolume: false,
                    ExcludeDataVolumeTags: []shared.Tag{
                        shared.Tag{
                            Key: "id",
                            Value: "blanditiis",
                        },
                        shared.Tag{
                            Key: "numquam",
                            Value: "similique",
                        },
                        shared.Tag{
                            Key: "dolores",
                            Value: "sit",
                        },
                        shared.Tag{
                            Key: "quia",
                            Value: "et",
                        },
                    },
                    NoReboot: false,
                },
                PolicyType: "EBS_SNAPSHOT_MANAGEMENT",
                ResourceLocations: []shared.ResourceLocationValuesEnum{
                    "CLOUD",
                    "OUTPOST",
                    "CLOUD",
                },
                ResourceTypes: []shared.ResourceTypeValuesEnum{
                    "INSTANCE",
                    "INSTANCE",
                    "VOLUME",
                    "VOLUME",
                },
                Schedules: []shared.Schedule{
                    shared.Schedule{
                        ArchiveRule: &shared.ArchiveRule{
                            RetainRule: shared.ArchiveRetainRule{
                                RetentionArchiveTier: shared.RetentionArchiveTier{
                                    Count: 437032,
                                    Interval: 902349,
                                    IntervalUnit: "MONTHS",
                                },
                            },
                        },
                        CopyTags: false,
                        CreateRule: &shared.CreateRule{
                            CronExpression: "aspernatur",
                            Interval: 60225,
                            IntervalUnit: "HOURS",
                            Location: "OUTPOST_LOCAL",
                            Times: []string{
                                "libero",
                                "ipsum",
                                "non",
                            },
                        },
                        CrossRegionCopyRules: []shared.CrossRegionCopyRule{
                            shared.CrossRegionCopyRule{
                                CmkArn: "magni",
                                CopyTags: false,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 750686,
                                    IntervalUnit: "WEEKS",
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 607831,
                                    IntervalUnit: "WEEKS",
                                },
                                Target: "quia",
                                TargetRegion: "similique",
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: "eaque",
                                CopyTags: false,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 438601,
                                    IntervalUnit: "MONTHS",
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 988374,
                                    IntervalUnit: "YEARS",
                                },
                                Target: "aut",
                                TargetRegion: "et",
                            },
                        },
                        DeprecateRule: &shared.DeprecateRule{
                            Count: 208876,
                            Interval: 635059,
                            IntervalUnit: "DAYS",
                        },
                        FastRestoreRule: &shared.FastRestoreRule{
                            AvailabilityZones: []string{
                                "et",
                                "culpa",
                                "aliquam",
                                "esse",
                            },
                            Count: 466311,
                            Interval: 474697,
                            IntervalUnit: "DAYS",
                        },
                        Name: "fuga",
                        RetainRule: &shared.RetainRule{
                            Count: 158969,
                            Interval: 338007,
                            IntervalUnit: "DAYS",
                        },
                        ShareRules: []shared.ShareRule{
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "ipsam",
                                    "eos",
                                    "omnis",
                                },
                                UnshareInterval: 196582,
                                UnshareIntervalUnit: "YEARS",
                            },
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "distinctio",
                                    "qui",
                                },
                                UnshareInterval: 13571,
                                UnshareIntervalUnit: "DAYS",
                            },
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "quo",
                                    "tempore",
                                    "explicabo",
                                },
                                UnshareInterval: 971945,
                                UnshareIntervalUnit: "YEARS",
                            },
                        },
                        TagsToAdd: []shared.Tag{
                            shared.Tag{
                                Key: "totam",
                                Value: "molestias",
                            },
                            shared.Tag{
                                Key: "reiciendis",
                                Value: "illo",
                            },
                            shared.Tag{
                                Key: "id",
                                Value: "qui",
                            },
                            shared.Tag{
                                Key: "quod",
                                Value: "sit",
                            },
                        },
                        VariableTags: []shared.Tag{
                            shared.Tag{
                                Key: "odio",
                                Value: "veniam",
                            },
                        },
                    },
                    shared.Schedule{
                        ArchiveRule: &shared.ArchiveRule{
                            RetainRule: shared.ArchiveRetainRule{
                                RetentionArchiveTier: shared.RetentionArchiveTier{
                                    Count: 979587,
                                    Interval: 120196,
                                    IntervalUnit: "WEEKS",
                                },
                            },
                        },
                        CopyTags: false,
                        CreateRule: &shared.CreateRule{
                            CronExpression: "exercitationem",
                            Interval: 480894,
                            IntervalUnit: "HOURS",
                            Location: "OUTPOST_LOCAL",
                            Times: []string{
                                "aut",
                                "esse",
                            },
                        },
                        CrossRegionCopyRules: []shared.CrossRegionCopyRule{
                            shared.CrossRegionCopyRule{
                                CmkArn: "veritatis",
                                CopyTags: false,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 216822,
                                    IntervalUnit: "MONTHS",
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 565189,
                                    IntervalUnit: "MONTHS",
                                },
                                Target: "et",
                                TargetRegion: "ut",
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: "molestias",
                                CopyTags: false,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 523248,
                                    IntervalUnit: "YEARS",
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 93940,
                                    IntervalUnit: "YEARS",
                                },
                                Target: "in",
                                TargetRegion: "vitae",
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: "non",
                                CopyTags: false,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 277718,
                                    IntervalUnit: "WEEKS",
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 9356,
                                    IntervalUnit: "MONTHS",
                                },
                                Target: "voluptas",
                                TargetRegion: "magni",
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: "est",
                                CopyTags: false,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 716327,
                                    IntervalUnit: "YEARS",
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 289406,
                                    IntervalUnit: "WEEKS",
                                },
                                Target: "sit",
                                TargetRegion: "in",
                            },
                        },
                        DeprecateRule: &shared.DeprecateRule{
                            Count: 586513,
                            Interval: 552822,
                            IntervalUnit: "DAYS",
                        },
                        FastRestoreRule: &shared.FastRestoreRule{
                            AvailabilityZones: []string{
                                "eum",
                            },
                            Count: 369808,
                            Interval: 4695,
                            IntervalUnit: "DAYS",
                        },
                        Name: "cum",
                        RetainRule: &shared.RetainRule{
                            Count: 569618,
                            Interval: 270008,
                            IntervalUnit: "MONTHS",
                        },
                        ShareRules: []shared.ShareRule{
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "sapiente",
                                    "et",
                                },
                                UnshareInterval: 248753,
                                UnshareIntervalUnit: "YEARS",
                            },
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "qui",
                                    "deserunt",
                                    "eveniet",
                                },
                                UnshareInterval: 572252,
                                UnshareIntervalUnit: "MONTHS",
                            },
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "necessitatibus",
                                },
                                UnshareInterval: 952749,
                                UnshareIntervalUnit: "MONTHS",
                            },
                        },
                        TagsToAdd: []shared.Tag{
                            shared.Tag{
                                Key: "ducimus",
                                Value: "nulla",
                            },
                            shared.Tag{
                                Key: "reiciendis",
                                Value: "cumque",
                            },
                        },
                        VariableTags: []shared.Tag{
                            shared.Tag{
                                Key: "ullam",
                                Value: "voluptas",
                            },
                        },
                    },
                    shared.Schedule{
                        ArchiveRule: &shared.ArchiveRule{
                            RetainRule: shared.ArchiveRetainRule{
                                RetentionArchiveTier: shared.RetentionArchiveTier{
                                    Count: 813798,
                                    Interval: 411820,
                                    IntervalUnit: "WEEKS",
                                },
                            },
                        },
                        CopyTags: false,
                        CreateRule: &shared.CreateRule{
                            CronExpression: "cum",
                            Interval: 881104,
                            IntervalUnit: "HOURS",
                            Location: "OUTPOST_LOCAL",
                            Times: []string{
                                "aut",
                                "delectus",
                            },
                        },
                        CrossRegionCopyRules: []shared.CrossRegionCopyRule{
                            shared.CrossRegionCopyRule{
                                CmkArn: "officia",
                                CopyTags: false,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 725255,
                                    IntervalUnit: "MONTHS",
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 501324,
                                    IntervalUnit: "MONTHS",
                                },
                                Target: "a",
                                TargetRegion: "incidunt",
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: "facilis",
                                CopyTags: false,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 394869,
                                    IntervalUnit: "WEEKS",
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 618809,
                                    IntervalUnit: "MONTHS",
                                },
                                Target: "voluptatum",
                                TargetRegion: "sit",
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: "rem",
                                CopyTags: false,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 301575,
                                    IntervalUnit: "MONTHS",
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 660174,
                                    IntervalUnit: "WEEKS",
                                },
                                Target: "nostrum",
                                TargetRegion: "eum",
                            },
                        },
                        DeprecateRule: &shared.DeprecateRule{
                            Count: 618016,
                            Interval: 749170,
                            IntervalUnit: "WEEKS",
                        },
                        FastRestoreRule: &shared.FastRestoreRule{
                            AvailabilityZones: []string{
                                "dolores",
                                "aut",
                                "ullam",
                                "explicabo",
                            },
                            Count: 569965,
                            Interval: 354047,
                            IntervalUnit: "MONTHS",
                        },
                        Name: "omnis",
                        RetainRule: &shared.RetainRule{
                            Count: 574325,
                            Interval: 33625,
                            IntervalUnit: "MONTHS",
                        },
                        ShareRules: []shared.ShareRule{
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "voluptatem",
                                    "et",
                                    "modi",
                                },
                                UnshareInterval: 896547,
                                UnshareIntervalUnit: "DAYS",
                            },
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "aspernatur",
                                    "iusto",
                                },
                                UnshareInterval: 984043,
                                UnshareIntervalUnit: "YEARS",
                            },
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "aut",
                                    "sed",
                                },
                                UnshareInterval: 703889,
                                UnshareIntervalUnit: "WEEKS",
                            },
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "aspernatur",
                                },
                                UnshareInterval: 919483,
                                UnshareIntervalUnit: "WEEKS",
                            },
                        },
                        TagsToAdd: []shared.Tag{
                            shared.Tag{
                                Key: "totam",
                                Value: "repellat",
                            },
                            shared.Tag{
                                Key: "voluptas",
                                Value: "voluptatem",
                            },
                            shared.Tag{
                                Key: "et",
                                Value: "accusamus",
                            },
                        },
                        VariableTags: []shared.Tag{
                            shared.Tag{
                                Key: "neque",
                                Value: "molestias",
                            },
                        },
                    },
                },
                TargetTags: []shared.Tag{
                    shared.Tag{
                        Key: "dolorem",
                        Value: "quia",
                    },
                    shared.Tag{
                        Key: "omnis",
                        Value: "pariatur",
                    },
                    shared.Tag{
                        Key: "et",
                        Value: "consequatur",
                    },
                },
            },
            State: "ENABLED",
            Tags: map[string]string{
                "eos": "voluptate",
                "aperiam": "quasi",
                "voluptatibus": "optio",
            },
        },
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
## SDK Available Operations

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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
