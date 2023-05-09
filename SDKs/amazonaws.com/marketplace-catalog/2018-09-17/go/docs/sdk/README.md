# SDK

## Overview

<p>Catalog API actions allow you to manage your entities through list, describe, and update capabilities. An entity can be a product or an offer on AWS Marketplace. </p> <p>You can automate your entity update process by integrating the AWS Marketplace Catalog API with your AWS Marketplace product build or deployment pipelines. You can also create your own applications on top of the Catalog API to manage your products on AWS Marketplace.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/marketplace/>
### Available Operations

* [CancelChangeSet](#cancelchangeset) - Used to cancel an open change request. Must be sent before the status of the request changes to <code>APPLYING</code>, the final stage of completing your change request. You can describe a change during the 60-day request history retention period for API calls.
* [DeleteResourcePolicy](#deleteresourcepolicy) - Deletes a resource-based policy on an Entity that is identified by its resource ARN.
* [DescribeChangeSet](#describechangeset) - Provides information about a given change set.
* [DescribeEntity](#describeentity) - Returns the metadata and content of the entity.
* [GetResourcePolicy](#getresourcepolicy) - Gets a resource-based policy of an Entity that is identified by its resource ARN.
* [ListChangeSets](#listchangesets) - <p>Returns the list of change sets owned by the account being used to make the call. You can filter this list by providing any combination of <code>entityId</code>, <code>ChangeSetName</code>, and status. If you provide more than one filter, the API operation applies a logical AND between the filters.</p> <p>You can describe a change during the 60-day request history retention period for API calls.</p>
* [ListEntities](#listentities) - Provides the list of entities of a given type.
* [ListTagsForResource](#listtagsforresource) - Lists all tags that have been added to a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).
* [PutResourcePolicy](#putresourcepolicy) - Attaches a resource-based policy to an Entity. Examples of an entity include: <code>AmiProduct</code> and <code>ContainerProduct</code>.
* [StartChangeSet](#startchangeset) - <p>Allows you to request changes for your entities. Within a single <code>ChangeSet</code>, you can't start the same change type against the same entity multiple times. Additionally, when a <code>ChangeSet</code> is running, all the entities targeted by the different changes are locked until the change set has completed (either succeeded, cancelled, or failed). If you try to start a change set containing a change against an entity that is already locked, you will receive a <code>ResourceInUseException</code> error.</p> <p>For example, you can't start the <code>ChangeSet</code> described in the <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_Examples">example</a> later in this topic because it contains two changes to run the same change type (<code>AddRevisions</code>) against the same entity (<code>entity-id@1</code>).</p> <p>For more information about working with change sets, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets"> Working with change sets</a>. For information on change types for single-AMI products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/ami-products.html#working-with-single-AMI-products">Working with single-AMI products</a>. Als, for more information on change types available for container-based products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/container-products.html#working-with-container-products">Working with container products</a>.</p>
* [TagResource](#tagresource) - Tags a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).
* [UntagResource](#untagresource) - Removes a tag or list of tags from a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).

## CancelChangeSet

Used to cancel an open change request. Must be sent before the status of the request changes to <code>APPLYING</code>, the final stage of completing your change request. You can describe a change during the 60-day request history retention period for API calls.

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
    res, err := s.SDK.CancelChangeSet(ctx, operations.CancelChangeSetRequest{
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        Catalog: "delectus",
        ChangeSetID: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelChangeSetResponse != nil {
        // handle response
    }
}
```

## DeleteResourcePolicy

Deletes a resource-based policy on an Entity that is identified by its resource ARN.

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
    res, err := s.SDK.DeleteResourcePolicy(ctx, operations.DeleteResourcePolicyRequest{
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        ResourceArn: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResourcePolicyResponse != nil {
        // handle response
    }
}
```

## DescribeChangeSet

Provides information about a given change set.

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
    res, err := s.SDK.DescribeChangeSet(ctx, operations.DescribeChangeSetRequest{
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        Catalog: "ipsam",
        ChangeSetID: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeChangeSetResponse != nil {
        // handle response
    }
}
```

## DescribeEntity

Returns the metadata and content of the entity.

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
    res, err := s.SDK.DescribeEntity(ctx, operations.DescribeEntityRequest{
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        Catalog: "quod",
        EntityID: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEntityResponse != nil {
        // handle response
    }
}
```

## GetResourcePolicy

Gets a resource-based policy of an Entity that is identified by its resource ARN.

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
    res, err := s.SDK.GetResourcePolicy(ctx, operations.GetResourcePolicyRequest{
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("officia"),
        ResourceArn: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourcePolicyResponse != nil {
        // handle response
    }
}
```

## ListChangeSets

<p>Returns the list of change sets owned by the account being used to make the call. You can filter this list by providing any combination of <code>entityId</code>, <code>ChangeSetName</code>, and status. If you provide more than one filter, the API operation applies a logical AND between the filters.</p> <p>You can describe a change during the 60-day request history retention period for API calls.</p>

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
    res, err := s.SDK.ListChangeSets(ctx, operations.ListChangeSetsRequest{
        MaxResults: sdk.String("fugit"),
        NextToken: sdk.String("deleniti"),
        RequestBody: operations.ListChangeSetsRequestBody{
            Catalog: "hic",
            FilterList: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Jack Johns"),
                    ValueList: []string{
                        "impedit",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Cory Emmerich"),
                    ValueList: []string{
                        "ad",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Louis Moore"),
                    ValueList: []string{
                        "hic",
                        "saepe",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Harvey Hessel"),
                    ValueList: []string{
                        "quidem",
                        "architecto",
                        "ipsa",
                        "reiciendis",
                    },
                },
            },
            MaxResults: sdk.Int64(666767),
            NextToken: sdk.String("mollitia"),
            Sort: &operations.ListChangeSetsRequestBodySort{
                SortBy: sdk.String("laborum"),
                SortOrder: shared.SortOrderEnumAscending.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListChangeSetsResponse != nil {
        // handle response
    }
}
```

## ListEntities

Provides the list of entities of a given type.

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
    res, err := s.SDK.ListEntities(ctx, operations.ListEntitiesRequest{
        MaxResults: sdk.String("minima"),
        NextToken: sdk.String("excepturi"),
        RequestBody: operations.ListEntitiesRequestBody{
            Catalog: "accusantium",
            EntityType: "iure",
            FilterList: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Darrin Brakus"),
                    ValueList: []string{
                        "consequuntur",
                        "repellat",
                        "mollitia",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Francis Jerde"),
                    ValueList: []string{
                        "error",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Beatrice Brown"),
                    ValueList: []string{
                        "odit",
                        "quo",
                    },
                },
            },
            MaxResults: sdk.Int64(196582),
            NextToken: sdk.String("tenetur"),
            OwnershipType: operations.ListEntitiesRequestBodyOwnershipTypeEnumSelf.ToPointer(),
            Sort: &operations.ListEntitiesRequestBodySort{
                SortBy: sdk.String("id"),
                SortOrder: shared.SortOrderEnumDescending.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEntitiesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists all tags that have been added to a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).

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
        RequestBody: operations.ListTagsForResourceRequestBody{
            ResourceArn: "voluptatibus",
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## PutResourcePolicy

Attaches a resource-based policy to an Entity. Examples of an entity include: <code>AmiProduct</code> and <code>ContainerProduct</code>.

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
    res, err := s.SDK.PutResourcePolicy(ctx, operations.PutResourcePolicyRequest{
        RequestBody: operations.PutResourcePolicyRequestBody{
            Policy: "cum",
            ResourceArn: "perferendis",
        },
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("dolore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutResourcePolicyResponse != nil {
        // handle response
    }
}
```

## StartChangeSet

<p>Allows you to request changes for your entities. Within a single <code>ChangeSet</code>, you can't start the same change type against the same entity multiple times. Additionally, when a <code>ChangeSet</code> is running, all the entities targeted by the different changes are locked until the change set has completed (either succeeded, cancelled, or failed). If you try to start a change set containing a change against an entity that is already locked, you will receive a <code>ResourceInUseException</code> error.</p> <p>For example, you can't start the <code>ChangeSet</code> described in the <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_Examples">example</a> later in this topic because it contains two changes to run the same change type (<code>AddRevisions</code>) against the same entity (<code>entity-id@1</code>).</p> <p>For more information about working with change sets, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets"> Working with change sets</a>. For information on change types for single-AMI products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/ami-products.html#working-with-single-AMI-products">Working with single-AMI products</a>. Als, for more information on change types available for container-based products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/container-products.html#working-with-container-products">Working with container products</a>.</p>

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
    res, err := s.SDK.StartChangeSet(ctx, operations.StartChangeSetRequest{
        RequestBody: operations.StartChangeSetRequestBody{
            Catalog: "iusto",
            ChangeSet: []shared.Change{
                shared.Change{
                    ChangeName: sdk.String("harum"),
                    ChangeType: "enim",
                    Details: "accusamus",
                    Entity: shared.Entity{
                        Identifier: sdk.String("commodi"),
                        Type: "repudiandae",
                    },
                    EntityTags: []shared.Tag{
                        shared.Tag{
                            Key: "ipsum",
                            Value: "quidem",
                        },
                    },
                },
            },
            ChangeSetName: sdk.String("molestias"),
            ChangeSetTags: []shared.Tag{
                shared.Tag{
                    Key: "pariatur",
                    Value: "modi",
                },
                shared.Tag{
                    Key: "praesentium",
                    Value: "rem",
                },
                shared.Tag{
                    Key: "voluptates",
                    Value: "quasi",
                },
            },
            ClientRequestToken: sdk.String("repudiandae"),
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartChangeSetResponse != nil {
        // handle response
    }
}
```

## TagResource

Tags a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).

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
            ResourceArn: "quibusdam",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "deserunt",
                    Value: "distinctio",
                },
            },
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("quos"),
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

Removes a tag or list of tags from a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).

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
        RequestBody: operations.UntagResourceRequestBody{
            ResourceArn: "perferendis",
            TagKeys: []string{
                "assumenda",
            },
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```
