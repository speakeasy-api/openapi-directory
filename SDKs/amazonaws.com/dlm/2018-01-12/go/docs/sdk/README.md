# SDK

## Overview

<fullname>Amazon Data Lifecycle Manager</fullname> <p>With Amazon Data Lifecycle Manager, you can manage the lifecycle of your Amazon Web Services resources. You create lifecycle policies, which are used to automate operations on the specified resources.</p> <p>Amazon Data Lifecycle Manager supports Amazon EBS volumes and snapshots. For information about using Amazon Data Lifecycle Manager with Amazon EBS, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html"> Amazon Data Lifecycle Manager</a> in the <i>Amazon EC2 User Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/dlm/>
### Available Operations

* [CreateLifecyclePolicy](#createlifecyclepolicy) - Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can create up to 100 lifecycle policies.
* [DeleteLifecyclePolicy](#deletelifecyclepolicy) - <p>Deletes the specified lifecycle policy and halts the automated operations that the policy specified.</p> <p>For more information about deleting a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#delete">Delete lifecycle policies</a>.</p>
* [GetLifecyclePolicies](#getlifecyclepolicies) - <p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
* [GetLifecyclePolicy](#getlifecyclepolicy) - Gets detailed information about the specified lifecycle policy.
* [ListTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [TagResource](#tagresource) - Adds the specified tags to the specified resource.
* [UntagResource](#untagresource) - Removes the specified tags from the specified resource.
* [UpdateLifecyclePolicy](#updatelifecyclepolicy) - <p>Updates the specified lifecycle policy.</p> <p>For more information about updating a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#modify">Modify lifecycle policies</a>.</p>

## CreateLifecyclePolicy

Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can create up to 100 lifecycle policies.

### Example Usage

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
    res, err := s.SDK.CreateLifecyclePolicy(ctx, operations.CreateLifecyclePolicyRequest{
        RequestBody: operations.CreateLifecyclePolicyRequestBody{
            Description: "maiores",
            ExecutionRoleArn: "rerum",
            PolicyDetails: operations.CreateLifecyclePolicyRequestBodyPolicyDetails{
                Actions: []shared.Action{
                    shared.Action{
                        CrossRegionCopy: []shared.CrossRegionCopyAction{
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: sdk.String("cumque"),
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(813798),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                                },
                                Target: "aliquid",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: sdk.String("laborum"),
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(881104),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumDays.ToPointer(),
                                },
                                Target: "occaecati",
                            },
                        },
                        Name: "Sophia Wintheiser",
                    },
                },
                EventSource: &shared.EventSource{
                    Parameters: &shared.EventParameters{
                        DescriptionRegex: "nam",
                        EventType: shared.EventTypeValuesEnumShareSnapshot,
                        SnapshotOwner: []string{
                            "blanditiis",
                            "deleniti",
                            "sapiente",
                        },
                    },
                    Type: shared.EventSourceValuesEnumManagedCwe,
                },
                Parameters: &shared.Parameters{
                    ExcludeBootVolume: sdk.Bool(false),
                    ExcludeDataVolumeTags: []shared.Tag{
                        shared.Tag{
                            Key: "deserunt",
                            Value: "nisi",
                        },
                    },
                    NoReboot: sdk.Bool(false),
                },
                PolicyType: shared.PolicyTypeValuesEnumImageManagement.ToPointer(),
                ResourceLocations: []shared.ResourceLocationValuesEnum{
                    shared.ResourceLocationValuesEnumOutpost,
                    shared.ResourceLocationValuesEnumCloud,
                    shared.ResourceLocationValuesEnumCloud,
                },
                ResourceTypes: []shared.ResourceTypeValuesEnum{
                    shared.ResourceTypeValuesEnumVolume,
                    shared.ResourceTypeValuesEnumInstance,
                },
                Schedules: []shared.Schedule{
                    shared.Schedule{
                        ArchiveRule: &shared.ArchiveRule{
                            RetainRule: shared.ArchiveRetainRule{
                                RetentionArchiveTier: shared.RetentionArchiveTier{
                                    Count: sdk.Int64(287991),
                                    Interval: sdk.Int64(290077),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                                },
                            },
                        },
                        CopyTags: sdk.Bool(false),
                        CreateRule: &shared.CreateRule{
                            CronExpression: sdk.String("natus"),
                            Interval: sdk.Int64(749170),
                            IntervalUnit: shared.IntervalUnitValuesEnumHours.ToPointer(),
                            Location: shared.LocationValuesEnumCloud.ToPointer(),
                            Times: []string{
                                "aspernatur",
                                "architecto",
                                "magnam",
                                "et",
                            },
                        },
                        CrossRegionCopyRules: []shared.CrossRegionCopyRule{
                            shared.CrossRegionCopyRule{
                                CmkArn: sdk.String("ullam"),
                                CopyTags: sdk.Bool(false),
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: sdk.Int64(590873),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(574325),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumDays.ToPointer(),
                                },
                                Target: sdk.String("mollitia"),
                                TargetRegion: sdk.String("reiciendis"),
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: sdk.String("mollitia"),
                                CopyTags: sdk.Bool(false),
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: sdk.Int64(320997),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(221262),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumYears.ToPointer(),
                                },
                                Target: sdk.String("odit"),
                                TargetRegion: sdk.String("nemo"),
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: sdk.String("quasi"),
                                CopyTags: sdk.Bool(false),
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: sdk.Int64(435865),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumYears.ToPointer(),
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(891924),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                                },
                                Target: sdk.String("maxime"),
                                TargetRegion: sdk.String("deleniti"),
                            },
                        },
                        DeprecateRule: &shared.DeprecateRule{
                            Count: sdk.Int64(703889),
                            Interval: sdk.Int64(447926),
                            IntervalUnit: shared.RetentionIntervalUnitValuesEnumDays.ToPointer(),
                        },
                        FastRestoreRule: &shared.FastRestoreRule{
                            AvailabilityZones: []string{
                                "repudiandae",
                            },
                            Count: sdk.Int64(352312),
                            Interval: sdk.Int64(714242),
                            IntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                        },
                        Name: sdk.String("Marty Cormier"),
                        RetainRule: &shared.RetainRule{
                            Count: sdk.Int64(37559),
                            Interval: sdk.Int64(162493),
                            IntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                        },
                        ShareRules: []shared.ShareRule{
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "sunt",
                                },
                                UnshareInterval: sdk.Int64(779051),
                                UnshareIntervalUnit: shared.RetentionIntervalUnitValuesEnumYears.ToPointer(),
                            },
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "maxime",
                                    "ea",
                                    "excepturi",
                                    "odit",
                                },
                                UnshareInterval: sdk.Int64(407183),
                                UnshareIntervalUnit: shared.RetentionIntervalUnitValuesEnumDays.ToPointer(),
                            },
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "maiores",
                                },
                                UnshareInterval: sdk.Int64(697429),
                                UnshareIntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                            },
                        },
                        TagsToAdd: []shared.Tag{
                            shared.Tag{
                                Key: "autem",
                                Value: "nam",
                            },
                            shared.Tag{
                                Key: "eaque",
                                Value: "pariatur",
                            },
                        },
                        VariableTags: []shared.Tag{
                            shared.Tag{
                                Key: "voluptatibus",
                                Value: "perferendis",
                            },
                            shared.Tag{
                                Key: "fugiat",
                                Value: "amet",
                            },
                        },
                    },
                    shared.Schedule{
                        ArchiveRule: &shared.ArchiveRule{
                            RetainRule: shared.ArchiveRetainRule{
                                RetentionArchiveTier: shared.RetentionArchiveTier{
                                    Count: sdk.Int64(11714),
                                    Interval: sdk.Int64(764912),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                                },
                            },
                        },
                        CopyTags: sdk.Bool(false),
                        CreateRule: &shared.CreateRule{
                            CronExpression: sdk.String("hic"),
                            Interval: sdk.Int64(729991),
                            IntervalUnit: shared.IntervalUnitValuesEnumHours.ToPointer(),
                            Location: shared.LocationValuesEnumOutpostLocal.ToPointer(),
                            Times: []string{
                                "quis",
                            },
                        },
                        CrossRegionCopyRules: []shared.CrossRegionCopyRule{
                            shared.CrossRegionCopyRule{
                                CmkArn: sdk.String("dignissimos"),
                                CopyTags: sdk.Bool(false),
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: sdk.Int64(54338),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(199996),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumDays.ToPointer(),
                                },
                                Target: sdk.String("perferendis"),
                                TargetRegion: sdk.String("dolores"),
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: sdk.String("minus"),
                                CopyTags: sdk.Bool(false),
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: sdk.Int64(463451),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumDays.ToPointer(),
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(874573),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                                },
                                Target: sdk.String("hic"),
                                TargetRegion: sdk.String("recusandae"),
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: sdk.String("omnis"),
                                CopyTags: sdk.Bool(false),
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: sdk.Int64(704415),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(31838),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumYears.ToPointer(),
                                },
                                Target: sdk.String("consequuntur"),
                                TargetRegion: sdk.String("blanditiis"),
                            },
                        },
                        DeprecateRule: &shared.DeprecateRule{
                            Count: sdk.Int64(621479),
                            Interval: sdk.Int64(50370),
                            IntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                        },
                        FastRestoreRule: &shared.FastRestoreRule{
                            AvailabilityZones: []string{
                                "adipisci",
                                "asperiores",
                                "earum",
                            },
                            Count: sdk.Int64(267262),
                            Interval: sdk.Int64(613966),
                            IntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                        },
                        Name: sdk.String("Ervin McLaughlin"),
                        RetainRule: &shared.RetainRule{
                            Count: sdk.Int64(964490),
                            Interval: sdk.Int64(311945),
                            IntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                        },
                        ShareRules: []shared.ShareRule{
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "dolorem",
                                },
                                UnshareInterval: sdk.Int64(222443),
                                UnshareIntervalUnit: shared.RetentionIntervalUnitValuesEnumDays.ToPointer(),
                            },
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "hic",
                                },
                                UnshareInterval: sdk.Int64(569574),
                                UnshareIntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                            },
                        },
                        TagsToAdd: []shared.Tag{
                            shared.Tag{
                                Key: "dignissimos",
                                Value: "reiciendis",
                            },
                            shared.Tag{
                                Key: "amet",
                                Value: "dolorum",
                            },
                        },
                        VariableTags: []shared.Tag{
                            shared.Tag{
                                Key: "veritatis",
                                Value: "ipsa",
                            },
                            shared.Tag{
                                Key: "ipsa",
                                Value: "iure",
                            },
                        },
                    },
                    shared.Schedule{
                        ArchiveRule: &shared.ArchiveRule{
                            RetainRule: shared.ArchiveRetainRule{
                                RetentionArchiveTier: shared.RetentionArchiveTier{
                                    Count: sdk.Int64(487838),
                                    Interval: sdk.Int64(311796),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumYears.ToPointer(),
                                },
                            },
                        },
                        CopyTags: sdk.Bool(false),
                        CreateRule: &shared.CreateRule{
                            CronExpression: sdk.String("quidem"),
                            Interval: sdk.Int64(976405),
                            IntervalUnit: shared.IntervalUnitValuesEnumHours.ToPointer(),
                            Location: shared.LocationValuesEnumCloud.ToPointer(),
                            Times: []string{
                                "eos",
                                "atque",
                                "sit",
                            },
                        },
                        CrossRegionCopyRules: []shared.CrossRegionCopyRule{
                            shared.CrossRegionCopyRule{
                                CmkArn: sdk.String("ab"),
                                CopyTags: sdk.Bool(false),
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: sdk.Int64(743835),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(478596),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                                },
                                Target: sdk.String("dolorum"),
                                TargetRegion: sdk.String("deleniti"),
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: sdk.String("omnis"),
                                CopyTags: sdk.Bool(false),
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: sdk.Int64(896672),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(990339),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                                },
                                Target: sdk.String("ipsum"),
                                TargetRegion: sdk.String("voluptate"),
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: sdk.String("id"),
                                CopyTags: sdk.Bool(false),
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: sdk.Int64(906418),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(137220),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumDays.ToPointer(),
                                },
                                Target: sdk.String("amet"),
                                TargetRegion: sdk.String("optio"),
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: sdk.String("accusamus"),
                                CopyTags: sdk.Bool(false),
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: sdk.Int64(320017),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumYears.ToPointer(),
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(383464),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                                },
                                Target: sdk.String("provident"),
                                TargetRegion: sdk.String("minima"),
                            },
                        },
                        DeprecateRule: &shared.DeprecateRule{
                            Count: sdk.Int64(831049),
                            Interval: sdk.Int64(519711),
                            IntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                        },
                        FastRestoreRule: &shared.FastRestoreRule{
                            AvailabilityZones: []string{
                                "at",
                            },
                            Count: sdk.Int64(311860),
                            Interval: sdk.Int64(273542),
                            IntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                        },
                        Name: sdk.String("Erick Denesik"),
                        RetainRule: &shared.RetainRule{
                            Count: sdk.Int64(456130),
                            Interval: sdk.Int64(687488),
                            IntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                        },
                        ShareRules: []shared.ShareRule{
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "tenetur",
                                    "amet",
                                    "tempore",
                                    "accusamus",
                                },
                                UnshareInterval: sdk.Int64(253941),
                                UnshareIntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                            },
                        },
                        TagsToAdd: []shared.Tag{
                            shared.Tag{
                                Key: "sapiente",
                                Value: "totam",
                            },
                        },
                        VariableTags: []shared.Tag{
                            shared.Tag{
                                Key: "sit",
                                Value: "expedita",
                            },
                            shared.Tag{
                                Key: "neque",
                                Value: "sed",
                            },
                        },
                    },
                },
                TargetTags: []shared.Tag{
                    shared.Tag{
                        Key: "libero",
                        Value: "voluptas",
                    },
                    shared.Tag{
                        Key: "deserunt",
                        Value: "quam",
                    },
                },
            },
            State: operations.CreateLifecyclePolicyRequestBodyStateEnumEnabled,
            Tags: map[string]string{
                "qui": "cupiditate",
                "maxime": "pariatur",
            },
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("dolores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLifecyclePolicyResponse != nil {
        // handle response
    }
}
```

## DeleteLifecyclePolicy

<p>Deletes the specified lifecycle policy and halts the automated operations that the policy specified.</p> <p>For more information about deleting a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#delete">Delete lifecycle policies</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteLifecyclePolicy(ctx, operations.DeleteLifecyclePolicyRequest{
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestias"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("qui"),
        PolicyID: "neque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteLifecyclePolicyResponse != nil {
        // handle response
    }
}
```

## GetLifecyclePolicies

<p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>

### Example Usage

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
    res, err := s.SDK.GetLifecyclePolicies(ctx, operations.GetLifecyclePoliciesRequest{
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("sunt"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("hic"),
        PolicyIds: []string{
            "cumque",
        },
        ResourceTypes: []shared.ResourceTypeValuesEnum{
            shared.ResourceTypeValuesEnumInstance,
            shared.ResourceTypeValuesEnumVolume,
            shared.ResourceTypeValuesEnumInstance,
        },
        State: operations.GetLifecyclePoliciesStateEnumEnabled.ToPointer(),
        TagsToAdd: []string{
            "nobis",
        },
        TargetTags: []string{
            "tempore",
            "cupiditate",
            "aperiam",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLifecyclePoliciesResponse != nil {
        // handle response
    }
}
```

## GetLifecyclePolicy

Gets detailed information about the specified lifecycle policy.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetLifecyclePolicy(ctx, operations.GetLifecyclePolicyRequest{
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("architecto"),
        PolicyID: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLifecyclePolicyResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags for the specified resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("porro"),
        ResourceArn: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds the specified tags to the specified resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "facilis": "cupiditate",
                "qui": "quae",
            },
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("omnis"),
        ResourceArn: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes the specified tags from the specified resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        ResourceArn: "hic",
        TagKeys: []string{
            "quod",
            "odio",
            "similique",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateLifecyclePolicy

<p>Updates the specified lifecycle policy.</p> <p>For more information about updating a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#modify">Modify lifecycle policies</a>.</p>

### Example Usage

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
    res, err := s.SDK.UpdateLifecyclePolicy(ctx, operations.UpdateLifecyclePolicyRequest{
        RequestBody: operations.UpdateLifecyclePolicyRequestBody{
            Description: sdk.String("facilis"),
            ExecutionRoleArn: sdk.String("vero"),
            PolicyDetails: &operations.UpdateLifecyclePolicyRequestBodyPolicyDetails{
                Actions: []shared.Action{
                    shared.Action{
                        CrossRegionCopy: []shared.CrossRegionCopyAction{
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: sdk.String("quibusdam"),
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(848944),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumDays.ToPointer(),
                                },
                                Target: "natus",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: sdk.String("impedit"),
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(13236),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumYears.ToPointer(),
                                },
                                Target: "exercitationem",
                            },
                        },
                        Name: "Louis Sauer",
                    },
                    shared.Action{
                        CrossRegionCopy: []shared.CrossRegionCopyAction{
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: sdk.String("eligendi"),
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(497391),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumDays.ToPointer(),
                                },
                                Target: "officia",
                            },
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: sdk.String("tempora"),
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(368584),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                                },
                                Target: "aspernatur",
                            },
                        },
                        Name: "Elena Gulgowski",
                    },
                },
                EventSource: &shared.EventSource{
                    Parameters: &shared.EventParameters{
                        DescriptionRegex: "laudantium",
                        EventType: shared.EventTypeValuesEnumShareSnapshot,
                        SnapshotOwner: []string{
                            "dolor",
                        },
                    },
                    Type: shared.EventSourceValuesEnumManagedCwe,
                },
                Parameters: &shared.Parameters{
                    ExcludeBootVolume: sdk.Bool(false),
                    ExcludeDataVolumeTags: []shared.Tag{
                        shared.Tag{
                            Key: "quasi",
                            Value: "ex",
                        },
                        shared.Tag{
                            Key: "nulla",
                            Value: "excepturi",
                        },
                        shared.Tag{
                            Key: "voluptatibus",
                            Value: "nostrum",
                        },
                        shared.Tag{
                            Key: "sapiente",
                            Value: "quisquam",
                        },
                    },
                    NoReboot: sdk.Bool(false),
                },
                PolicyType: shared.PolicyTypeValuesEnumEventBasedPolicy.ToPointer(),
                ResourceLocations: []shared.ResourceLocationValuesEnum{
                    shared.ResourceLocationValuesEnumOutpost,
                    shared.ResourceLocationValuesEnumCloud,
                },
                ResourceTypes: []shared.ResourceTypeValuesEnum{
                    shared.ResourceTypeValuesEnumVolume,
                    shared.ResourceTypeValuesEnumVolume,
                },
                Schedules: []shared.Schedule{
                    shared.Schedule{
                        ArchiveRule: &shared.ArchiveRule{
                            RetainRule: shared.ArchiveRetainRule{
                                RetentionArchiveTier: shared.RetentionArchiveTier{
                                    Count: sdk.Int64(407241),
                                    Interval: sdk.Int64(775220),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumDays.ToPointer(),
                                },
                            },
                        },
                        CopyTags: sdk.Bool(false),
                        CreateRule: &shared.CreateRule{
                            CronExpression: sdk.String("recusandae"),
                            Interval: sdk.Int64(132487),
                            IntervalUnit: shared.IntervalUnitValuesEnumHours.ToPointer(),
                            Location: shared.LocationValuesEnumCloud.ToPointer(),
                            Times: []string{
                                "a",
                            },
                        },
                        CrossRegionCopyRules: []shared.CrossRegionCopyRule{
                            shared.CrossRegionCopyRule{
                                CmkArn: sdk.String("aut"),
                                CopyTags: sdk.Bool(false),
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: sdk.Int64(11427),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(770581),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                                },
                                Target: sdk.String("fugit"),
                                TargetRegion: sdk.String("accusamus"),
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: sdk.String("inventore"),
                                CopyTags: sdk.Bool(false),
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: sdk.Int64(250622),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumDays.ToPointer(),
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(677412),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                                },
                                Target: sdk.String("placeat"),
                                TargetRegion: sdk.String("velit"),
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: sdk.String("eum"),
                                CopyTags: sdk.Bool(false),
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: sdk.Int64(420539),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumYears.ToPointer(),
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(557369),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumYears.ToPointer(),
                                },
                                Target: sdk.String("nulla"),
                                TargetRegion: sdk.String("voluptas"),
                            },
                        },
                        DeprecateRule: &shared.DeprecateRule{
                            Count: sdk.Int64(727044),
                            Interval: sdk.Int64(96549),
                            IntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                        },
                        FastRestoreRule: &shared.FastRestoreRule{
                            AvailabilityZones: []string{
                                "explicabo",
                                "provident",
                            },
                            Count: sdk.Int64(55374),
                            Interval: sdk.Int64(476477),
                            IntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                        },
                        Name: sdk.String("Esther Koch"),
                        RetainRule: &shared.RetainRule{
                            Count: sdk.Int64(683282),
                            Interval: sdk.Int64(442015),
                            IntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                        },
                        ShareRules: []shared.ShareRule{
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "eum",
                                    "suscipit",
                                },
                                UnshareInterval: sdk.Int64(826871),
                                UnshareIntervalUnit: shared.RetentionIntervalUnitValuesEnumDays.ToPointer(),
                            },
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "quisquam",
                                    "veritatis",
                                    "ipsa",
                                },
                                UnshareInterval: sdk.Int64(660040),
                                UnshareIntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                            },
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "quo",
                                },
                                UnshareInterval: sdk.Int64(847276),
                                UnshareIntervalUnit: shared.RetentionIntervalUnitValuesEnumYears.ToPointer(),
                            },
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "eius",
                                    "eos",
                                    "voluptas",
                                },
                                UnshareInterval: sdk.Int64(69859),
                                UnshareIntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                            },
                        },
                        TagsToAdd: []shared.Tag{
                            shared.Tag{
                                Key: "tempora",
                                Value: "debitis",
                            },
                        },
                        VariableTags: []shared.Tag{
                            shared.Tag{
                                Key: "aspernatur",
                                Value: "sequi",
                            },
                            shared.Tag{
                                Key: "quo",
                                Value: "esse",
                            },
                        },
                    },
                    shared.Schedule{
                        ArchiveRule: &shared.ArchiveRule{
                            RetainRule: shared.ArchiveRetainRule{
                                RetentionArchiveTier: shared.RetentionArchiveTier{
                                    Count: sdk.Int64(925164),
                                    Interval: sdk.Int64(44612),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                                },
                            },
                        },
                        CopyTags: sdk.Bool(false),
                        CreateRule: &shared.CreateRule{
                            CronExpression: sdk.String("quod"),
                            Interval: sdk.Int64(490819),
                            IntervalUnit: shared.IntervalUnitValuesEnumHours.ToPointer(),
                            Location: shared.LocationValuesEnumCloud.ToPointer(),
                            Times: []string{
                                "totam",
                                "accusamus",
                            },
                        },
                        CrossRegionCopyRules: []shared.CrossRegionCopyRule{
                            shared.CrossRegionCopyRule{
                                CmkArn: sdk.String("odio"),
                                CopyTags: sdk.Bool(false),
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: sdk.Int64(577543),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(959434),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumDays.ToPointer(),
                                },
                                Target: sdk.String("deserunt"),
                                TargetRegion: sdk.String("molestiae"),
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: sdk.String("accusantium"),
                                CopyTags: sdk.Bool(false),
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: sdk.Int64(783648),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumWeeks.ToPointer(),
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: sdk.Int64(556429),
                                    IntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                                },
                                Target: sdk.String("consequuntur"),
                                TargetRegion: sdk.String("deleniti"),
                            },
                        },
                        DeprecateRule: &shared.DeprecateRule{
                            Count: sdk.Int64(143829),
                            Interval: sdk.Int64(681393),
                            IntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                        },
                        FastRestoreRule: &shared.FastRestoreRule{
                            AvailabilityZones: []string{
                                "atque",
                                "explicabo",
                            },
                            Count: sdk.Int64(325685),
                            Interval: sdk.Int64(392676),
                            IntervalUnit: shared.RetentionIntervalUnitValuesEnumDays.ToPointer(),
                        },
                        Name: sdk.String("Eugene Dibbert"),
                        RetainRule: &shared.RetainRule{
                            Count: sdk.Int64(578922),
                            Interval: sdk.Int64(543806),
                            IntervalUnit: shared.RetentionIntervalUnitValuesEnumDays.ToPointer(),
                        },
                        ShareRules: []shared.ShareRule{
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "accusamus",
                                    "veritatis",
                                    "esse",
                                    "quod",
                                },
                                UnshareInterval: sdk.Int64(724168),
                                UnshareIntervalUnit: shared.RetentionIntervalUnitValuesEnumYears.ToPointer(),
                            },
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "quasi",
                                    "saepe",
                                },
                                UnshareInterval: sdk.Int64(426306),
                                UnshareIntervalUnit: shared.RetentionIntervalUnitValuesEnumMonths.ToPointer(),
                            },
                        },
                        TagsToAdd: []shared.Tag{
                            shared.Tag{
                                Key: "rerum",
                                Value: "occaecati",
                            },
                            shared.Tag{
                                Key: "minima",
                                Value: "distinctio",
                            },
                        },
                        VariableTags: []shared.Tag{
                            shared.Tag{
                                Key: "sit",
                                Value: "culpa",
                            },
                            shared.Tag{
                                Key: "tempore",
                                Value: "adipisci",
                            },
                            shared.Tag{
                                Key: "cumque",
                                Value: "consequuntur",
                            },
                            shared.Tag{
                                Key: "consequatur",
                                Value: "minus",
                            },
                        },
                    },
                },
                TargetTags: []shared.Tag{
                    shared.Tag{
                        Key: "sapiente",
                        Value: "consectetur",
                    },
                    shared.Tag{
                        Key: "esse",
                        Value: "blanditiis",
                    },
                },
            },
            State: operations.UpdateLifecyclePolicyRequestBodyStateEnumDisabled.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("error"),
        PolicyID: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLifecyclePolicyResponse != nil {
        // handle response
    }
}
```
