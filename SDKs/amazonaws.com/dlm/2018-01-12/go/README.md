# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            XAmzAlgorithm: "doloremque",
            XAmzContentSha256: "nulla",
            XAmzCredential: "et",
            XAmzDate: "ut",
            XAmzSecurityToken: "praesentium",
            XAmzSignature: "labore",
            XAmzSignedHeaders: "accusamus",
        },
        Request: operations.CreateLifecyclePolicyRequestBody{
            Description: "aut",
            ExecutionRoleArn: "alias",
            PolicyDetails: operations.CreateLifecyclePolicyRequestBodyPolicyDetails{
                Actions: []shared.Action{
                    shared.Action{
                        CrossRegionCopy: []shared.CrossRegionCopyAction{
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "voluptatem",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 5320768077586043095,
                                    IntervalUnit: "DAYS",
                                },
                                Target: "nostrum",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "adipisci",
                                    Encrypted: true,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 6537984888763423894,
                                    IntervalUnit: "WEEKS",
                                },
                                Target: "delectus",
                            },
                        },
                        Name: "tenetur",
                    },
                    shared.Action{
                        CrossRegionCopy: []shared.CrossRegionCopyAction{
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "quia",
                                    Encrypted: true,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 8697756961697963853,
                                    IntervalUnit: "YEARS",
                                },
                                Target: "nostrum",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "autem",
                                    Encrypted: true,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 4506911669298280718,
                                    IntervalUnit: "YEARS",
                                },
                                Target: "molestias",
                            },
                        },
                        Name: "nihil",
                    },
                },
                EventSource: &shared.EventSource{
                    Parameters: &shared.EventParameters{
                        DescriptionRegex: "consequatur",
                        EventType: "shareSnapshot",
                        SnapshotOwner: []string{
                            "quae",
                            "natus",
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
                    "OUTPOST",
                    "CLOUD",
                },
                ResourceTypes: []shared.ResourceTypeValuesEnum{
                    "INSTANCE",
                    "INSTANCE",
                    "INSTANCE",
                },
                Schedules: []shared.Schedule{
                    shared.Schedule{
                        CopyTags: false,
                        CreateRule: &shared.CreateRule{
                            CronExpression: "sapiente",
                            Interval: 4642672273651120892,
                            IntervalUnit: "HOURS",
                            Location: "CLOUD",
                            Times: []string{
                                "quo",
                            },
                        },
                        CrossRegionCopyRules: []shared.CrossRegionCopyRule{
                            shared.CrossRegionCopyRule{
                                CmkArn: "ratione",
                                CopyTags: false,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 6134675409536001115,
                                    IntervalUnit: "DAYS",
                                },
                                Encrypted: true,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 1000668831263546934,
                                    IntervalUnit: "MONTHS",
                                },
                                Target: "aut",
                                TargetRegion: "minima",
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: "at",
                                CopyTags: true,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 127225875950264235,
                                    IntervalUnit: "YEARS",
                                },
                                Encrypted: true,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 1325682419092169393,
                                    IntervalUnit: "MONTHS",
                                },
                                Target: "accusantium",
                                TargetRegion: "qui",
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: "ea",
                                CopyTags: true,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 8037355963908866572,
                                    IntervalUnit: "MONTHS",
                                },
                                Encrypted: true,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 5643905309582698835,
                                    IntervalUnit: "MONTHS",
                                },
                                Target: "vero",
                                TargetRegion: "quis",
                            },
                        },
                        DeprecateRule: &shared.DeprecateRule{
                            Count: 3816780269387027271,
                            Interval: 3292878388625507251,
                            IntervalUnit: "WEEKS",
                        },
                        FastRestoreRule: &shared.FastRestoreRule{
                            AvailabilityZones: []string{
                                "vitae",
                                "nesciunt",
                                "fugit",
                            },
                            Count: 2502521760373555910,
                            Interval: 4666865012529559949,
                            IntervalUnit: "DAYS",
                        },
                        Name: "magni",
                        RetainRule: &shared.RetainRule{
                            Count: 5403100475415031532,
                            Interval: 500970383850890347,
                            IntervalUnit: "MONTHS",
                        },
                        ShareRules: []shared.ShareRule{
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "qui",
                                },
                                UnshareInterval: 4416889129261804116,
                                UnshareIntervalUnit: "YEARS",
                            },
                        },
                        TagsToAdd: []shared.Tag{
                            shared.Tag{
                                Key: "doloribus",
                                Value: "accusantium",
                            },
                            shared.Tag{
                                Key: "explicabo",
                                Value: "rem",
                            },
                            shared.Tag{
                                Key: "corporis",
                                Value: "pariatur",
                            },
                        },
                        VariableTags: []shared.Tag{
                            shared.Tag{
                                Key: "quisquam",
                                Value: "animi",
                            },
                        },
                    },
                },
                TargetTags: []shared.Tag{
                    shared.Tag{
                        Key: "beatae",
                        Value: "iste",
                    },
                },
            },
            State: "DISABLED",
            Tags: map[string]string{
                "corporis": "quo",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateLifecyclePolicy` - Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can create up to 100 lifecycle policies.
* `DeleteLifecyclePolicy` - Deletes the specified lifecycle policy and halts the automated operations that the policy specified.
* `GetLifecyclePolicies` - <p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
* `GetLifecyclePolicy` - Gets detailed information about the specified lifecycle policy.
* `ListTagsForResource` - Lists the tags for the specified resource.
* `TagResource` - Adds the specified tags to the specified resource.
* `UntagResource` - Removes the specified tags from the specified resource.
* `UpdateLifecyclePolicy` - Updates the specified lifecycle policy.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
