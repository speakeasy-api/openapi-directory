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
    
    req := operations.CreateLifecyclePolicyRequest{
        Headers: operations.CreateLifecyclePolicyHeaders{
            XAmzAlgorithm: "nesciunt",
            XAmzContentSha256: "nihil",
            XAmzCredential: "aspernatur",
            XAmzDate: "hic",
            XAmzSecurityToken: "vitae",
            XAmzSignature: "libero",
            XAmzSignedHeaders: "accusantium",
        },
        Request: operations.CreateLifecyclePolicyRequestBody{
            Description: "facere",
            ExecutionRoleArn: "pariatur",
            PolicyDetails: operations.CreateLifecyclePolicyRequestBodyPolicyDetails{
                Actions: []shared.Action{
                    shared.Action{
                        CrossRegionCopy: []shared.CrossRegionCopyAction{
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "architecto",
                                    Encrypted: true,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 7203846571005902486,
                                    IntervalUnit: "YEARS",
                                },
                                Target: "aut",
                            },
                        },
                        Name: "voluptate",
                    },
                },
                EventSource: &shared.EventSource{
                    Parameters: &shared.EventParameters{
                        DescriptionRegex: "a",
                        EventType: "shareSnapshot",
                        SnapshotOwner: []string{
                            "assumenda",
                            "rerum",
                        },
                    },
                    Type: "MANAGED_CWE",
                },
                Parameters: &shared.Parameters{
                    ExcludeBootVolume: false,
                    NoReboot: true,
                },
                PolicyType: "EBS_SNAPSHOT_MANAGEMENT",
                ResourceLocations: []shared.ResourceLocationValuesEnum{
                    "CLOUD",
                },
                ResourceTypes: []shared.ResourceTypeValuesEnum{
                    "VOLUME",
                    "VOLUME",
                    "VOLUME",
                },
                Schedules: []shared.Schedule{
                    shared.Schedule{
                        CopyTags: true,
                        CreateRule: &shared.CreateRule{
                            CronExpression: "ut",
                            Interval: 8218380994177616248,
                            IntervalUnit: "HOURS",
                            Location: "CLOUD",
                            Times: []string{
                                "aut",
                                "ea",
                                "magnam",
                            },
                        },
                        CrossRegionCopyRules: []shared.CrossRegionCopyRule{
                            shared.CrossRegionCopyRule{
                                CmkArn: "et",
                                CopyTags: true,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 7908210036433338918,
                                    IntervalUnit: "YEARS",
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 3689896237130650524,
                                    IntervalUnit: "WEEKS",
                                },
                                Target: "nulla",
                                TargetRegion: map[string]interface{}{
                                    "ut": "praesentium",
                                },
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: "labore",
                                CopyTags: false,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 3741474008618675548,
                                    IntervalUnit: "WEEKS",
                                },
                                Encrypted: true,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 5205322607280625859,
                                    IntervalUnit: "DAYS",
                                },
                                Target: "dolorum",
                                TargetRegion: map[string]interface{}{
                                    "quos": "nostrum",
                                },
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: "adipisci",
                                CopyTags: true,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 6537984888763423894,
                                    IntervalUnit: "WEEKS",
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 7203633296547136081,
                                    IntervalUnit: "DAYS",
                                },
                                Target: "quia",
                                TargetRegion: map[string]interface{}{
                                    "sed": "qui",
                                    "nostrum": "autem",
                                    "fuga": "sequi",
                                },
                            },
                        },
                        DeprecateRule: &shared.DeprecateRule{
                            Count: 8511278003760870047,
                            Interval: 2471594197341838774,
                            IntervalUnit: "YEARS",
                        },
                        FastRestoreRule: &shared.FastRestoreRule{
                            AvailabilityZones: []string{
                                "quae",
                                "et",
                                "quae",
                            },
                            Count: 6590953431360156800,
                            Interval: 95582894219885355,
                            IntervalUnit: "DAYS",
                        },
                        Name: "ipsum",
                        RetainRule: &shared.RetainRule{
                            Count: 2268883771712989414,
                            Interval: 393797875542834105,
                            IntervalUnit: "YEARS",
                        },
                        ShareRules: []shared.ShareRule{
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "rerum",
                                    "sit",
                                    "eaque",
                                },
                                UnshareInterval: 6812306629431358903,
                                UnshareIntervalUnit: "DAYS",
                            },
                        },
                        TagsToAdd: []shared.Tag{
                            shared.Tag{
                                Key: "eum",
                                Value: "incidunt",
                            },
                            shared.Tag{
                                Key: "incidunt",
                                Value: "neque",
                            },
                            shared.Tag{
                                Key: "quo",
                                Value: "omnis",
                            },
                        },
                        VariableTags: []shared.Tag{
                            shared.Tag{
                                Key: "tempora",
                                Value: "cupiditate",
                            },
                        },
                    },
                },
                TargetTags: []shared.Tag{
                    shared.Tag{
                        Key: "odit",
                        Value: "hic",
                    },
                    shared.Tag{
                        Key: "porro",
                        Value: "aut",
                    },
                },
            },
            State: "ENABLED",
            Tags: map[string]string{
                "maiores": "rem",
                "aperiam": "aliquid",
            },
        },
    }
    
    res, err := s.CreateLifecyclePolicy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLifecyclePolicyResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->