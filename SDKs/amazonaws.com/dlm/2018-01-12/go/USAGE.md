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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateLifecyclePolicyRequestBody{
            Description: "illum",
            ExecutionRoleArn: "vel",
            PolicyDetails: operations.CreateLifecyclePolicyRequestBodyPolicyDetails{
                Actions: []shared.Action{
                    shared.Action{
                        CrossRegionCopy: []shared.CrossRegionCopyAction{
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "suscipit",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 437587,
                                    IntervalUnit: "WEEKS",
                                },
                                Target: "debitis",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "ipsa",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 963663,
                                    IntervalUnit: "WEEKS",
                                },
                                Target: "suscipit",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "molestiae",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 791725,
                                    IntervalUnit: "YEARS",
                                },
                                Target: "voluptatum",
                            },
                        },
                        Name: "iusto",
                    },
                    shared.Action{
                        CrossRegionCopy: []shared.CrossRegionCopyAction{
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "nisi",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 925597,
                                    IntervalUnit: "YEARS",
                                },
                                Target: "ab",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "quis",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 87129,
                                    IntervalUnit: "MONTHS",
                                },
                                Target: "perferendis",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "ipsam",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 832620,
                                    IntervalUnit: "YEARS",
                                },
                                Target: "quo",
                            },
                        },
                        Name: "odit",
                    },
                    shared.Action{
                        CrossRegionCopy: []shared.CrossRegionCopyAction{
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "at",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 978619,
                                    IntervalUnit: "WEEKS",
                                },
                                Target: "quod",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "quod",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 461479,
                                    IntervalUnit: "MONTHS",
                                },
                                Target: "porro",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "dolorum",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 118274,
                                    IntervalUnit: "MONTHS",
                                },
                                Target: "officia",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "occaecati",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 143353,
                                    IntervalUnit: "MONTHS",
                                },
                                Target: "hic",
                            },
                        },
                        Name: "optio",
                    },
                },
                EventSource: &shared.EventSource{
                    Parameters: &shared.EventParameters{
                        DescriptionRegex: "totam",
                        EventType: "shareSnapshot",
                        SnapshotOwner: []string{
                            "commodi",
                        },
                    },
                    Type: "MANAGED_CWE",
                },
                Parameters: &shared.Parameters{
                    ExcludeBootVolume: false,
                    ExcludeDataVolumeTags: []shared.Tag{
                        shared.Tag{
                            Key: "modi",
                            Value: "qui",
                        },
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