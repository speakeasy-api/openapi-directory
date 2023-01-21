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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.CreateLifecyclePolicyRequestBody{
            Description: "voluptas",
            ExecutionRoleArn: "fugit",
            PolicyDetails: operations.CreateLifecyclePolicyRequestBodyPolicyDetails{
                Actions: []shared.Action{
                    shared.Action{
                        CrossRegionCopy: []shared.CrossRegionCopyAction{
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "rerum",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 2518412263346885298,
                                    IntervalUnit: "DAYS",
                                },
                                Target: "et",
                            },
                        },
                        Name: "ut",
                    },
                },
                EventSource: &shared.EventSource{
                    Parameters: &shared.EventParameters{
                        DescriptionRegex: "dolorem",
                        EventType: "shareSnapshot",
                        SnapshotOwner: []string{
                            "iste",
                        },
                    },
                    Type: "MANAGED_CWE",
                },
                Parameters: &shared.Parameters{
                    ExcludeBootVolume: true,
                    NoReboot: true,
                },
                PolicyType: "EVENT_BASED_POLICY",
                ResourceLocations: []shared.ResourceLocationValuesEnum{
                    "CLOUD",
                },
                ResourceTypes: []shared.ResourceTypeValuesEnum{
                    "INSTANCE",
                },
                Schedules: []shared.Schedule{
                    shared.Schedule{
                        CopyTags: true,
                        CreateRule: &shared.CreateRule{
                            CronExpression: "accusantium",
                            Interval: 1395437218309923052,
                            IntervalUnit: "HOURS",
                            Location: "CLOUD",
                            Times: []string{
                                "aut",
                                "odit",
                            },
                        },
                        CrossRegionCopyRules: []shared.CrossRegionCopyRule{
                            shared.CrossRegionCopyRule{
                                CmkArn: "voluptas",
                                CopyTags: true,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 1059542851699319360,
                                    IntervalUnit: "DAYS",
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 7845762441295307478,
                                    IntervalUnit: "YEARS",
                                },
                                Target: "consectetur",
                                TargetRegion: "nobis",
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: "odio",
                                CopyTags: false,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 388440063886460141,
                                    IntervalUnit: "DAYS",
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 8902041070398994519,
                                    IntervalUnit: "YEARS",
                                },
                                Target: "sint",
                                TargetRegion: "inventore",
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: "ut",
                                CopyTags: false,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 4756106358532488297,
                                    IntervalUnit: "MONTHS",
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 2264299874001785192,
                                    IntervalUnit: "MONTHS",
                                },
                                Target: "dolor",
                                TargetRegion: "beatae",
                            },
                        },
                        DeprecateRule: &shared.DeprecateRule{
                            Count: 4112921325496946042,
                            Interval: 2671030200101705776,
                            IntervalUnit: "WEEKS",
                        },
                        FastRestoreRule: &shared.FastRestoreRule{
                            AvailabilityZones: []string{
                                "ipsum",
                                "ex",
                            },
                            Count: 7014402135919778893,
                            Interval: 3983722386484812742,
                            IntervalUnit: "MONTHS",
                        },
                        Name: "rerum",
                        RetainRule: &shared.RetainRule{
                            Count: 8489437897698681073,
                            Interval: 1938800996802160635,
                            IntervalUnit: "YEARS",
                        },
                        ShareRules: []shared.ShareRule{
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "qui",
                                },
                                UnshareInterval: 4308690457412179793,
                                UnshareIntervalUnit: "YEARS",
                            },
                        },
                        TagsToAdd: []shared.Tag{
                            shared.Tag{
                                Key: "qui",
                                Value: "ut",
                            },
                            shared.Tag{
                                Key: "itaque",
                                Value: "ab",
                            },
                        },
                        VariableTags: []shared.Tag{
                            shared.Tag{
                                Key: "ullam",
                                Value: "et",
                            },
                        },
                    },
                    shared.Schedule{
                        CopyTags: false,
                        CreateRule: &shared.CreateRule{
                            CronExpression: "esse",
                            Interval: 5902760509050140210,
                            IntervalUnit: "HOURS",
                            Location: "OUTPOST_LOCAL",
                            Times: []string{
                                "soluta",
                                "sunt",
                            },
                        },
                        CrossRegionCopyRules: []shared.CrossRegionCopyRule{
                            shared.CrossRegionCopyRule{
                                CmkArn: "magni",
                                CopyTags: false,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 6651829488660799814,
                                    IntervalUnit: "MONTHS",
                                },
                                Encrypted: true,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 4391202566038595699,
                                    IntervalUnit: "MONTHS",
                                },
                                Target: "ut",
                                TargetRegion: "consequatur",
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: "dolor",
                                CopyTags: true,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 1925401661646756611,
                                    IntervalUnit: "YEARS",
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 2803285039048912676,
                                    IntervalUnit: "YEARS",
                                },
                                Target: "laboriosam",
                                TargetRegion: "sed",
                            },
                        },
                        DeprecateRule: &shared.DeprecateRule{
                            Count: 6604365855503062775,
                            Interval: 1836598054518427835,
                            IntervalUnit: "DAYS",
                        },
                        FastRestoreRule: &shared.FastRestoreRule{
                            AvailabilityZones: []string{
                                "consequuntur",
                                "laudantium",
                                "autem",
                            },
                            Count: 1891001667378689416,
                            Interval: 1627381309359808899,
                            IntervalUnit: "DAYS",
                        },
                        Name: "perferendis",
                        RetainRule: &shared.RetainRule{
                            Count: 8497925768463229012,
                            Interval: 5311927246208705713,
                            IntervalUnit: "YEARS",
                        },
                        ShareRules: []shared.ShareRule{
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "maxime",
                                },
                                UnshareInterval: 8392001091488039958,
                                UnshareIntervalUnit: "WEEKS",
                            },
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "rerum",
                                },
                                UnshareInterval: 6394356307858046544,
                                UnshareIntervalUnit: "WEEKS",
                            },
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "minima",
                                    "necessitatibus",
                                },
                                UnshareInterval: 9205243623417456715,
                                UnshareIntervalUnit: "DAYS",
                            },
                        },
                        TagsToAdd: []shared.Tag{
                            shared.Tag{
                                Key: "labore",
                                Value: "et",
                            },
                        },
                        VariableTags: []shared.Tag{
                            shared.Tag{
                                Key: "ad",
                                Value: "expedita",
                            },
                            shared.Tag{
                                Key: "vel",
                                Value: "qui",
                            },
                        },
                    },
                },
                TargetTags: []shared.Tag{
                    shared.Tag{
                        Key: "nihil",
                        Value: "tempora",
                    },
                    shared.Tag{
                        Key: "deserunt",
                        Value: "eaque",
                    },
                },
            },
            State: "ENABLED",
            Tags: map[string]string{
                "autem": "quis",
                "vel": "vel",
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