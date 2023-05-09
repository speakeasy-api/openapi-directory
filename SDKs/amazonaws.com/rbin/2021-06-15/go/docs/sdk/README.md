# SDK

## Overview

<p>This is the <i>Recycle Bin API Reference</i>. This documentation provides descriptions and syntax for each of the actions and data types in Recycle Bin.</p> <p>Recycle Bin is a resource recovery feature that enables you to restore accidentally deleted snapshots and EBS-backed AMIs. When using Recycle Bin, if your resources are deleted, they are retained in the Recycle Bin for a time period that you specify.</p> <p>You can restore a resource from the Recycle Bin at any time before its retention period expires. After you restore a resource from the Recycle Bin, the resource is removed from the Recycle Bin, and you can then use it in the same way you use any other resource of that type in your account. If the retention period expires and the resource is not restored, the resource is permanently deleted from the Recycle Bin and is no longer available for recovery. For more information about Recycle Bin, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-recycle-bin.html"> Recycle Bin</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/rbin/>
### Available Operations

* [CreateRule](#createrule) - Creates a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-create-rule"> Create Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
* [DeleteRule](#deleterule) - Deletes a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-delete-rule"> Delete Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
* [GetRule](#getrule) - Gets information about a Recycle Bin retention rule.
* [ListRules](#listrules) - Lists the Recycle Bin retention rules in the Region.
* [ListTagsForResource](#listtagsforresource) - Lists the tags assigned to a retention rule.
* [LockRule](#lockrule) - Locks a retention rule. A locked retention rule can't be modified or deleted.
* [TagResource](#tagresource) - Assigns tags to the specified retention rule.
* [UnlockRule](#unlockrule) - Unlocks a retention rule. After a retention rule is unlocked, it can be modified or deleted only after the unlock delay period expires.
* [UntagResource](#untagresource) - Unassigns a tag from a retention rule.
* [UpdateRule](#updaterule) - Updates an existing Recycle Bin retention rule. You can update a retention rule's description, resource tags, and retention period at any time after creation. You can't update a retention rule's resource type after creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-update-rule"> Update Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.

## CreateRule

Creates a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-create-rule"> Create Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.

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
    res, err := s.SDK.CreateRule(ctx, operations.CreateRuleRequest{
        RequestBody: operations.CreateRuleRequestBody{
            Description: sdk.String("iusto"),
            LockConfiguration: &operations.CreateRuleRequestBodyLockConfiguration{
                UnlockDelay: &shared.UnlockDelay{
                    UnlockDelayUnit: shared.UnlockDelayUnitEnumDays,
                    UnlockDelayValue: 568045,
                },
            },
            ResourceTags: []shared.ResourceTag{
                shared.ResourceTag{
                    ResourceTagKey: "recusandae",
                    ResourceTagValue: sdk.String("temporibus"),
                },
                shared.ResourceTag{
                    ResourceTagKey: "ab",
                    ResourceTagValue: sdk.String("quis"),
                },
            },
            ResourceType: operations.CreateRuleRequestBodyResourceTypeEnumEbsSnapshot,
            RetentionPeriod: operations.CreateRuleRequestBodyRetentionPeriod{
                RetentionPeriodUnit: shared.RetentionPeriodUnitEnumDays.ToPointer(),
                RetentionPeriodValue: sdk.Int64(648172),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ipsam",
                    Value: "repellendus",
                },
            },
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRuleResponse != nil {
        // handle response
    }
}
```

## DeleteRule

Deletes a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-delete-rule"> Delete Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.

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
    res, err := s.SDK.DeleteRule(ctx, operations.DeleteRuleRequest{
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("dicta"),
        Identifier: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRuleResponse != nil {
        // handle response
    }
}
```

## GetRule

Gets information about a Recycle Bin retention rule.

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
    res, err := s.SDK.GetRule(ctx, operations.GetRuleRequest{
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("totam"),
        Identifier: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRuleResponse != nil {
        // handle response
    }
}
```

## ListRules

Lists the Recycle Bin retention rules in the Region.

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
    res, err := s.SDK.ListRules(ctx, operations.ListRulesRequest{
        MaxResults: sdk.String("commodi"),
        NextToken: sdk.String("molestiae"),
        RequestBody: operations.ListRulesRequestBody{
            LockState: operations.ListRulesRequestBodyLockStateEnumLocked.ToPointer(),
            MaxResults: sdk.Int64(186332),
            NextToken: sdk.String("impedit"),
            ResourceTags: []shared.ResourceTag{
                shared.ResourceTag{
                    ResourceTagKey: "esse",
                    ResourceTagValue: sdk.String("ipsum"),
                },
                shared.ResourceTag{
                    ResourceTagKey: "excepturi",
                    ResourceTagValue: sdk.String("aspernatur"),
                },
                shared.ResourceTag{
                    ResourceTagKey: "perferendis",
                    ResourceTagValue: sdk.String("ad"),
                },
            },
            ResourceType: operations.ListRulesRequestBodyResourceTypeEnumEc2Image,
        },
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRulesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags assigned to a retention rule.

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
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("quidem"),
        ResourceArn: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## LockRule

Locks a retention rule. A locked retention rule can't be modified or deleted.

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
    res, err := s.SDK.LockRule(ctx, operations.LockRuleRequest{
        RequestBody: operations.LockRuleRequestBody{
            LockConfiguration: operations.LockRuleRequestBodyLockConfiguration{
                UnlockDelay: &shared.UnlockDelay{
                    UnlockDelayUnit: shared.UnlockDelayUnitEnumDays,
                    UnlockDelayValue: 60225,
                },
            },
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("corporis"),
        Identifier: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LockRuleResponse != nil {
        // handle response
    }
}
```

## TagResource

Assigns tags to the specified retention rule.

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "enim",
                    Value: "omnis",
                },
                shared.Tag{
                    Key: "nemo",
                    Value: "minima",
                },
                shared.Tag{
                    Key: "excepturi",
                    Value: "accusantium",
                },
                shared.Tag{
                    Key: "iure",
                    Value: "culpa",
                },
            },
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        ResourceArn: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UnlockRule

Unlocks a retention rule. After a retention rule is unlocked, it can be modified or deleted only after the unlock delay period expires.

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
    res, err := s.SDK.UnlockRule(ctx, operations.UnlockRuleRequest{
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("quam"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("velit"),
        Identifier: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnlockRuleResponse != nil {
        // handle response
    }
}
```

## UntagResource

Unassigns a tag from a retention rule.

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
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("odit"),
        ResourceArn: "quo",
        TagKeys: []string{
            "tenetur",
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

## UpdateRule

Updates an existing Recycle Bin retention rule. You can update a retention rule's description, resource tags, and retention period at any time after creation. You can't update a retention rule's resource type after creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-update-rule"> Update Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.

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
    res, err := s.SDK.UpdateRule(ctx, operations.UpdateRuleRequest{
        RequestBody: operations.UpdateRuleRequestBody{
            Description: sdk.String("ipsam"),
            ResourceTags: []shared.ResourceTag{
                shared.ResourceTag{
                    ResourceTagKey: "possimus",
                    ResourceTagValue: sdk.String("aut"),
                },
                shared.ResourceTag{
                    ResourceTagKey: "quasi",
                    ResourceTagValue: sdk.String("error"),
                },
                shared.ResourceTag{
                    ResourceTagKey: "temporibus",
                    ResourceTagValue: sdk.String("laborum"),
                },
            },
            ResourceType: operations.UpdateRuleRequestBodyResourceTypeEnumEbsSnapshot.ToPointer(),
            RetentionPeriod: &operations.UpdateRuleRequestBodyRetentionPeriod{
                RetentionPeriodUnit: shared.RetentionPeriodUnitEnumDays.ToPointer(),
                RetentionPeriodValue: sdk.Int64(971945),
            },
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("omnis"),
        Identifier: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateRuleResponse != nil {
        // handle response
    }
}
```
