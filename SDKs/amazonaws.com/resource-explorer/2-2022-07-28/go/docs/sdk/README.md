# SDK

## Overview

<p>Amazon Web Services Resource Explorer is a resource search and discovery service. By using Resource Explorer, you can explore your resources using an internet search engine-like experience. Examples of resources include Amazon Relational Database Service (Amazon RDS) instances, Amazon Simple Storage Service (Amazon S3) buckets, or Amazon DynamoDB tables. You can search for your resources using resource metadata like names, tags, and IDs. Resource Explorer can search across all of the Amazon Web Services Regions in your account in which you turn the service on, to simplify your cross-Region workloads.</p> <p>Resource Explorer scans the resources in each of the Amazon Web Services Regions in your Amazon Web Services account in which you turn on Resource Explorer. Resource Explorer <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/getting-started-terms-and-concepts.html#term-index">creates and maintains an index</a> in each Region, with the details of that Region's resources.</p> <p>You can <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">search across all of the indexed Regions in your account</a> by designating one of your Amazon Web Services Regions to contain the aggregator index for the account. When you <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region-turn-on.html">promote a local index in a Region to become the aggregator index for the account</a>, Resource Explorer automatically replicates the index information from all local indexes in the other Regions to the aggregator index. Therefore, the Region with the aggregator index has a copy of all resource information for all Regions in the account where you turned on Resource Explorer. As a result, views in the aggregator index Region include resources from all of the indexed Regions in your account.</p> <p>For more information about Amazon Web Services Resource Explorer, including how to enable and configure the service, see the <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/">Amazon Web Services Resource Explorer User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/resource-explorer-2/>
### Available Operations

* [AssociateDefaultView](#associatedefaultview) - <p>Sets the specified view as the default for the Amazon Web Services Region in which you call this operation. When a user performs a <a>Search</a> that doesn't explicitly specify which view to use, then Amazon Web Services Resource Explorer automatically chooses this default view for searches performed in this Amazon Web Services Region.</p> <p>If an Amazon Web Services Region doesn't have a default view configured, then users must explicitly specify a view with every <code>Search</code> operation performed in that Region.</p>
* [BatchGetView](#batchgetview) - Retrieves details about a list of views.
* [CreateIndex](#createindex) - <p>Turns on Amazon Web Services Resource Explorer in the Amazon Web Services Region in which you called this operation by creating an index. Resource Explorer begins discovering the resources in this Region and stores the details about the resources in the index so that they can be queried by using the <a>Search</a> operation. You can create only one index in a Region.</p> <note> <p>This operation creates only a <i>local</i> index. To promote the local index in one Amazon Web Services Region into the aggregator index for the Amazon Web Services account, use the <a>UpdateIndexType</a> operation. For more information, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">Turning on cross-Region search by creating an aggregator index</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> </note> <p>For more details about what happens when you turn on Resource Explorer in an Amazon Web Services Region, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-service-activate.html">Turn on Resource Explorer to index your resources in an Amazon Web Services Region</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> <p>If this is the first Amazon Web Services Region in which you've created an index for Resource Explorer, then this operation also <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/security_iam_service-linked-roles.html">creates a service-linked role</a> in your Amazon Web Services account that allows Resource Explorer to enumerate your resources to populate the index.</p> <ul> <li> <p> <b>Action</b>: <code>resource-explorer-2:CreateIndex</code> </p> <p> <b>Resource</b>: The ARN of the index (as it will exist after the operation completes) in the Amazon Web Services Region and account in which you're trying to create the index. Use the wildcard character (<code>*</code>) at the end of the string to match the eventual UUID. For example, the following <code>Resource</code> element restricts the role or user to creating an index in only the <code>us-east-2</code> Region of the specified account.</p> <p> <code>"Resource": "arn:aws:resource-explorer-2:us-west-2:<i>&lt;account-id&gt;</i>:index/*"</code> </p> <p>Alternatively, you can use <code>"Resource": "*"</code> to allow the role or user to create an index in any Region.</p> </li> <li> <p> <b>Action</b>: <code>iam:CreateServiceLinkedRole</code> </p> <p> <b>Resource</b>: No specific resource (*). </p> <p>This permission is required only the first time you create an index to turn on Resource Explorer in the account. Resource Explorer uses this to create the <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/security_iam_service-linked-roles.html">service-linked role needed to index the resources in your account</a>. Resource Explorer uses the same service-linked role for all additional indexes you create afterwards.</p> </li> </ul>
* [CreateView](#createview) - <p>Creates a view that users can query by using the <a>Search</a> operation. Results from queries that you make using this view include only resources that match the view's <code>Filters</code>. For more information about Amazon Web Services Resource Explorer views, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-views.html">Managing views</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> <p>Only the principals with an IAM identity-based policy that grants <code>Allow</code> to the <code>Search</code> action on a <code>Resource</code> with the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of this view can <a>Search</a> using views you create with this operation.</p>
* [DeleteIndex](#deleteindex) - <p>Deletes the specified index and turns off Amazon Web Services Resource Explorer in the specified Amazon Web Services Region. When you delete an index, Resource Explorer stops discovering and indexing resources in that Region. Resource Explorer also deletes all views in that Region. These actions occur as asynchronous background tasks. You can check to see when the actions are complete by using the <a>GetIndex</a> operation and checking the <code>Status</code> response value.</p> <note> <p>If the index you delete is the aggregator index for the Amazon Web Services account, you must wait 24 hours before you can promote another local index to be the aggregator index for the account. Users can't perform account-wide searches using Resource Explorer until another aggregator index is configured.</p> </note>
* [DeleteView](#deleteview) - <p>Deletes the specified view.</p> <p>If the specified view is the default view for its Amazon Web Services Region, then all <a>Search</a> operations in that Region must explicitly specify the view to use until you configure a new default by calling the <a>AssociateDefaultView</a> operation.</p>
* [DisassociateDefaultView](#disassociatedefaultview) - <p>After you call this operation, the affected Amazon Web Services Region no longer has a default view. All <a>Search</a> operations in that Region must explicitly specify a view or the operation fails. You can configure a new default by calling the <a>AssociateDefaultView</a> operation.</p> <p>If an Amazon Web Services Region doesn't have a default view configured, then users must explicitly specify a view with every <code>Search</code> operation performed in that Region.</p>
* [GetDefaultView](#getdefaultview) - Retrieves the Amazon Resource Name (ARN) of the view that is the default for the Amazon Web Services Region in which you call this operation. You can then call <a>GetView</a> to retrieve the details of that view.
* [GetIndex](#getindex) - Retrieves details about the Amazon Web Services Resource Explorer index in the Amazon Web Services Region in which you invoked the operation.
* [GetView](#getview) - Retrieves details of the specified view.
* [ListIndexes](#listindexes) - Retrieves a list of all of the indexes in Amazon Web Services Regions that are currently collecting resource information for Amazon Web Services Resource Explorer.
* [ListSupportedResourceTypes](#listsupportedresourcetypes) - Retrieves a list of all resource types currently supported by Amazon Web Services Resource Explorer.
* [ListTagsForResource](#listtagsforresource) - Lists the tags that are attached to the specified resource.
* [ListViews](#listviews) - <p>Lists the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource names (ARNs)</a> of the views available in the Amazon Web Services Region in which you call this operation.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note>
* [Search](#search) - <p>Searches for resources and displays details about all resources that match the specified criteria. You must specify a query string.</p> <p>All search queries must use a view. If you don't explicitly specify a view, then Amazon Web Services Resource Explorer uses the default view for the Amazon Web Services Region in which you call this operation. The results are the logical intersection of the results that match both the <code>QueryString</code> parameter supplied to this operation and the <code>SearchFilter</code> parameter attached to the view.</p> <p>For the complete syntax supported by the <code>QueryString</code> parameter, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/APIReference/about-query-syntax.html">Search query syntax reference for Resource Explorer</a>.</p> <p>If your search results are empty, or are missing results that you think should be there, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/troubleshooting_search.html">Troubleshooting Resource Explorer search</a>.</p>
* [TagResource](#tagresource) - Adds one or more tag key and value pairs to an Amazon Web Services Resource Explorer view or index.
* [UntagResource](#untagresource) - Removes one or more tag key and value pairs from an Amazon Web Services Resource Explorer view or index.
* [UpdateIndexType](#updateindextype) - <p>Changes the type of the index from one of the following types to the other. For more information about indexes and the role they perform in Amazon Web Services Resource Explorer, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">Turning on cross-Region search by creating an aggregator index</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> <ul> <li> <p> <b> <code>AGGREGATOR</code> index type</b> </p> <p>The index contains information about resources from all Amazon Web Services Regions in the Amazon Web Services account in which you've created a Resource Explorer index. Resource information from all other Regions is replicated to this Region's index.</p> <p>When you change the index type to <code>AGGREGATOR</code>, Resource Explorer turns on replication of all discovered resource information from the other Amazon Web Services Regions in your account to this index. You can then, from this Region only, perform resource search queries that span all Amazon Web Services Regions in the Amazon Web Services account. Turning on replication from all other Regions is performed by asynchronous background tasks. You can check the status of the asynchronous tasks by using the <a>GetIndex</a> operation. When the asynchronous tasks complete, the <code>Status</code> response of that operation changes from <code>UPDATING</code> to <code>ACTIVE</code>. After that, you can start to see results from other Amazon Web Services Regions in query results. However, it can take several hours for replication from all other Regions to complete.</p> <important> <p>You can have only one aggregator index per Amazon Web Services account. Before you can promote a different index to be the aggregator index for the account, you must first demote the existing aggregator index to type <code>LOCAL</code>.</p> </important> </li> <li> <p> <b> <code>LOCAL</code> index type</b> </p> <p>The index contains information about resources in only the Amazon Web Services Region in which the index exists. If an aggregator index in another Region exists, then information in this local index is replicated to the aggregator index.</p> <p>When you change the index type to <code>LOCAL</code>, Resource Explorer turns off the replication of resource information from all other Amazon Web Services Regions in the Amazon Web Services account to this Region. The aggregator index remains in the <code>UPDATING</code> state until all replication with other Regions successfully stops. You can check the status of the asynchronous task by using the <a>GetIndex</a> operation. When Resource Explorer successfully stops all replication with other Regions, the <code>Status</code> response of that operation changes from <code>UPDATING</code> to <code>ACTIVE</code>. Separately, the resource information from other Regions that was previously stored in the index is deleted within 30 days by another background task. Until that asynchronous task completes, some results from other Regions can continue to appear in search results.</p> <important> <p>After you demote an aggregator index to a local index, you must wait 24 hours before you can promote another index to be the new aggregator index for the account.</p> </important> </li> </ul>
* [UpdateView](#updateview) - Modifies some of the details of a view. You can change the filter string and the list of included properties. You can't change the name of the view.

## AssociateDefaultView

<p>Sets the specified view as the default for the Amazon Web Services Region in which you call this operation. When a user performs a <a>Search</a> that doesn't explicitly specify which view to use, then Amazon Web Services Resource Explorer automatically chooses this default view for searches performed in this Amazon Web Services Region.</p> <p>If an Amazon Web Services Region doesn't have a default view configured, then users must explicitly specify a view with every <code>Search</code> operation performed in that Region.</p>

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
    res, err := s.SDK.AssociateDefaultView(ctx, operations.AssociateDefaultViewRequest{
        RequestBody: operations.AssociateDefaultViewRequestBody{
            ViewArn: "vel",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateDefaultViewOutput != nil {
        // handle response
    }
}
```

## BatchGetView

Retrieves details about a list of views.

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
    res, err := s.SDK.BatchGetView(ctx, operations.BatchGetViewRequest{
        RequestBody: operations.BatchGetViewRequestBody{
            ViewArns: []string{
                "tempora",
                "suscipit",
                "molestiae",
                "minus",
            },
        },
        XAmzAlgorithm: sdk.String("placeat"),
        XAmzContentSha256: sdk.String("voluptatum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetViewOutput != nil {
        // handle response
    }
}
```

## CreateIndex

<p>Turns on Amazon Web Services Resource Explorer in the Amazon Web Services Region in which you called this operation by creating an index. Resource Explorer begins discovering the resources in this Region and stores the details about the resources in the index so that they can be queried by using the <a>Search</a> operation. You can create only one index in a Region.</p> <note> <p>This operation creates only a <i>local</i> index. To promote the local index in one Amazon Web Services Region into the aggregator index for the Amazon Web Services account, use the <a>UpdateIndexType</a> operation. For more information, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">Turning on cross-Region search by creating an aggregator index</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> </note> <p>For more details about what happens when you turn on Resource Explorer in an Amazon Web Services Region, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-service-activate.html">Turn on Resource Explorer to index your resources in an Amazon Web Services Region</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> <p>If this is the first Amazon Web Services Region in which you've created an index for Resource Explorer, then this operation also <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/security_iam_service-linked-roles.html">creates a service-linked role</a> in your Amazon Web Services account that allows Resource Explorer to enumerate your resources to populate the index.</p> <ul> <li> <p> <b>Action</b>: <code>resource-explorer-2:CreateIndex</code> </p> <p> <b>Resource</b>: The ARN of the index (as it will exist after the operation completes) in the Amazon Web Services Region and account in which you're trying to create the index. Use the wildcard character (<code>*</code>) at the end of the string to match the eventual UUID. For example, the following <code>Resource</code> element restricts the role or user to creating an index in only the <code>us-east-2</code> Region of the specified account.</p> <p> <code>"Resource": "arn:aws:resource-explorer-2:us-west-2:<i>&lt;account-id&gt;</i>:index/*"</code> </p> <p>Alternatively, you can use <code>"Resource": "*"</code> to allow the role or user to create an index in any Region.</p> </li> <li> <p> <b>Action</b>: <code>iam:CreateServiceLinkedRole</code> </p> <p> <b>Resource</b>: No specific resource (*). </p> <p>This permission is required only the first time you create an index to turn on Resource Explorer in the account. Resource Explorer uses this to create the <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/security_iam_service-linked-roles.html">service-linked role needed to index the resources in your account</a>. Resource Explorer uses the same service-linked role for all additional indexes you create afterwards.</p> </li> </ul>

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
    res, err := s.SDK.CreateIndex(ctx, operations.CreateIndexRequest{
        RequestBody: operations.CreateIndexRequestBody{
            ClientToken: sdk.String("ab"),
            Tags: map[string]string{
                "veritatis": "deserunt",
                "perferendis": "ipsam",
            },
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateIndexOutput != nil {
        // handle response
    }
}
```

## CreateView

<p>Creates a view that users can query by using the <a>Search</a> operation. Results from queries that you make using this view include only resources that match the view's <code>Filters</code>. For more information about Amazon Web Services Resource Explorer views, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-views.html">Managing views</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> <p>Only the principals with an IAM identity-based policy that grants <code>Allow</code> to the <code>Search</code> action on a <code>Resource</code> with the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of this view can <a>Search</a> using views you create with this operation.</p>

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
    res, err := s.SDK.CreateView(ctx, operations.CreateViewRequest{
        RequestBody: operations.CreateViewRequestBody{
            ClientToken: sdk.String("molestiae"),
            Filters: &operations.CreateViewRequestBodyFilters{
                FilterString: sdk.String("quod"),
            },
            IncludedProperties: []shared.IncludedProperty{
                shared.IncludedProperty{
                    Name: "Deanna Sauer MD",
                },
                shared.IncludedProperty{
                    Name: "Seth Conroy",
                },
                shared.IncludedProperty{
                    Name: "Everett Breitenberg",
                },
                shared.IncludedProperty{
                    Name: "Norma Ryan",
                },
            },
            Tags: map[string]string{
                "excepturi": "aspernatur",
            },
            ViewName: "perferendis",
        },
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateViewOutput != nil {
        // handle response
    }
}
```

## DeleteIndex

<p>Deletes the specified index and turns off Amazon Web Services Resource Explorer in the specified Amazon Web Services Region. When you delete an index, Resource Explorer stops discovering and indexing resources in that Region. Resource Explorer also deletes all views in that Region. These actions occur as asynchronous background tasks. You can check to see when the actions are complete by using the <a>GetIndex</a> operation and checking the <code>Status</code> response value.</p> <note> <p>If the index you delete is the aggregator index for the Amazon Web Services account, you must wait 24 hours before you can promote another local index to be the aggregator index for the account. Users can't perform account-wide searches using Resource Explorer until another aggregator index is configured.</p> </note>

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
    res, err := s.SDK.DeleteIndex(ctx, operations.DeleteIndexRequest{
        RequestBody: operations.DeleteIndexRequestBody{
            Arn: "hic",
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteIndexOutput != nil {
        // handle response
    }
}
```

## DeleteView

<p>Deletes the specified view.</p> <p>If the specified view is the default view for its Amazon Web Services Region, then all <a>Search</a> operations in that Region must explicitly specify the view to use until you configure a new default by calling the <a>AssociateDefaultView</a> operation.</p>

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
    res, err := s.SDK.DeleteView(ctx, operations.DeleteViewRequest{
        RequestBody: operations.DeleteViewRequestBody{
            ViewArn: "quidem",
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("dolores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteViewOutput != nil {
        // handle response
    }
}
```

## DisassociateDefaultView

<p>After you call this operation, the affected Amazon Web Services Region no longer has a default view. All <a>Search</a> operations in that Region must explicitly specify a view or the operation fails. You can configure a new default by calling the <a>AssociateDefaultView</a> operation.</p> <p>If an Amazon Web Services Region doesn't have a default view configured, then users must explicitly specify a view with every <code>Search</code> operation performed in that Region.</p>

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
    res, err := s.SDK.DisassociateDefaultView(ctx, operations.DisassociateDefaultViewRequest{
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

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDefaultView

Retrieves the Amazon Resource Name (ARN) of the view that is the default for the Amazon Web Services Region in which you call this operation. You can then call <a>GetView</a> to retrieve the details of that view.

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
    res, err := s.SDK.GetDefaultView(ctx, operations.GetDefaultViewRequest{
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDefaultViewOutput != nil {
        // handle response
    }
}
```

## GetIndex

Retrieves details about the Amazon Web Services Resource Explorer index in the Amazon Web Services Region in which you invoked the operation.

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
    res, err := s.SDK.GetIndex(ctx, operations.GetIndexRequest{
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetIndexOutput != nil {
        // handle response
    }
}
```

## GetView

Retrieves details of the specified view.

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
    res, err := s.SDK.GetView(ctx, operations.GetViewRequest{
        RequestBody: operations.GetViewRequestBody{
            ViewArn: "occaecati",
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("quia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetViewOutput != nil {
        // handle response
    }
}
```

## ListIndexes

Retrieves a list of all of the indexes in Amazon Web Services Regions that are currently collecting resource information for Amazon Web Services Resource Explorer.

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
    res, err := s.SDK.ListIndexes(ctx, operations.ListIndexesRequest{
        MaxResults: sdk.String("quis"),
        NextToken: sdk.String("vitae"),
        RequestBody: operations.ListIndexesRequestBody{
            MaxResults: sdk.Int64(674752),
            NextToken: sdk.String("animi"),
            Regions: []string{
                "odit",
                "quo",
            },
            Type: operations.ListIndexesRequestBodyTypeEnumLocal.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIndexesOutput != nil {
        // handle response
    }
}
```

## ListSupportedResourceTypes

Retrieves a list of all resource types currently supported by Amazon Web Services Resource Explorer.

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
    res, err := s.SDK.ListSupportedResourceTypes(ctx, operations.ListSupportedResourceTypesRequest{
        MaxResults: sdk.String("temporibus"),
        NextToken: sdk.String("laborum"),
        RequestBody: operations.ListSupportedResourceTypesRequestBody{
            MaxResults: sdk.Int64(96098),
            NextToken: sdk.String("reiciendis"),
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSupportedResourceTypesOutput != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags that are attached to the specified resource.

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
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("doloremque"),
        XAmzSecurityToken: sdk.String("reprehenderit"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("maiores"),
        ResourceArn: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceOutput != nil {
        // handle response
    }
}
```

## ListViews

<p>Lists the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource names (ARNs)</a> of the views available in the Amazon Web Services Region in which you call this operation.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note>

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
    res, err := s.SDK.ListViews(ctx, operations.ListViewsRequest{
        MaxResults: sdk.String("corporis"),
        NextToken: sdk.String("dolore"),
        RequestBody: operations.ListViewsRequestBody{
            MaxResults: sdk.Int64(480894),
            NextToken: sdk.String("dicta"),
        },
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListViewsOutput != nil {
        // handle response
    }
}
```

## Search

<p>Searches for resources and displays details about all resources that match the specified criteria. You must specify a query string.</p> <p>All search queries must use a view. If you don't explicitly specify a view, then Amazon Web Services Resource Explorer uses the default view for the Amazon Web Services Region in which you call this operation. The results are the logical intersection of the results that match both the <code>QueryString</code> parameter supplied to this operation and the <code>SearchFilter</code> parameter attached to the view.</p> <p>For the complete syntax supported by the <code>QueryString</code> parameter, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/APIReference/about-query-syntax.html">Search query syntax reference for Resource Explorer</a>.</p> <p>If your search results are empty, or are missing results that you think should be there, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/troubleshooting_search.html">Troubleshooting Resource Explorer search</a>.</p>

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
    res, err := s.SDK.Search(ctx, operations.SearchRequest{
        MaxResults: sdk.String("quidem"),
        NextToken: sdk.String("molestias"),
        RequestBody: operations.SearchRequestBody{
            MaxResults: sdk.Int64(566602),
            NextToken: sdk.String("pariatur"),
            QueryString: "modi",
            ViewArn: sdk.String("praesentium"),
        },
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("voluptates"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("itaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchOutput != nil {
        // handle response
    }
}
```

## TagResource

Adds one or more tag key and value pairs to an Amazon Web Services Resource Explorer view or index.

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
                "enim": "consequatur",
                "est": "quibusdam",
            },
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("qui"),
        ResourceArn: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceOutput != nil {
        // handle response
    }
}
```

## UntagResource

Removes one or more tag key and value pairs from an Amazon Web Services Resource Explorer view or index.

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
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("alias"),
        ResourceArn: "fugit",
        TagKeys: []string{
            "excepturi",
            "tempora",
            "facilis",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceOutput != nil {
        // handle response
    }
}
```

## UpdateIndexType

<p>Changes the type of the index from one of the following types to the other. For more information about indexes and the role they perform in Amazon Web Services Resource Explorer, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">Turning on cross-Region search by creating an aggregator index</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> <ul> <li> <p> <b> <code>AGGREGATOR</code> index type</b> </p> <p>The index contains information about resources from all Amazon Web Services Regions in the Amazon Web Services account in which you've created a Resource Explorer index. Resource information from all other Regions is replicated to this Region's index.</p> <p>When you change the index type to <code>AGGREGATOR</code>, Resource Explorer turns on replication of all discovered resource information from the other Amazon Web Services Regions in your account to this index. You can then, from this Region only, perform resource search queries that span all Amazon Web Services Regions in the Amazon Web Services account. Turning on replication from all other Regions is performed by asynchronous background tasks. You can check the status of the asynchronous tasks by using the <a>GetIndex</a> operation. When the asynchronous tasks complete, the <code>Status</code> response of that operation changes from <code>UPDATING</code> to <code>ACTIVE</code>. After that, you can start to see results from other Amazon Web Services Regions in query results. However, it can take several hours for replication from all other Regions to complete.</p> <important> <p>You can have only one aggregator index per Amazon Web Services account. Before you can promote a different index to be the aggregator index for the account, you must first demote the existing aggregator index to type <code>LOCAL</code>.</p> </important> </li> <li> <p> <b> <code>LOCAL</code> index type</b> </p> <p>The index contains information about resources in only the Amazon Web Services Region in which the index exists. If an aggregator index in another Region exists, then information in this local index is replicated to the aggregator index.</p> <p>When you change the index type to <code>LOCAL</code>, Resource Explorer turns off the replication of resource information from all other Amazon Web Services Regions in the Amazon Web Services account to this Region. The aggregator index remains in the <code>UPDATING</code> state until all replication with other Regions successfully stops. You can check the status of the asynchronous task by using the <a>GetIndex</a> operation. When Resource Explorer successfully stops all replication with other Regions, the <code>Status</code> response of that operation changes from <code>UPDATING</code> to <code>ACTIVE</code>. Separately, the resource information from other Regions that was previously stored in the index is deleted within 30 days by another background task. Until that asynchronous task completes, some results from other Regions can continue to appear in search results.</p> <important> <p>After you demote an aggregator index to a local index, you must wait 24 hours before you can promote another index to be the new aggregator index for the account.</p> </important> </li> </ul>

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
    res, err := s.SDK.UpdateIndexType(ctx, operations.UpdateIndexTypeRequest{
        RequestBody: operations.UpdateIndexTypeRequestBody{
            Arn: "tempore",
            Type: operations.UpdateIndexTypeRequestBodyTypeEnumLocal,
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("eligendi"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateIndexTypeOutput != nil {
        // handle response
    }
}
```

## UpdateView

Modifies some of the details of a view. You can change the filter string and the list of included properties. You can't change the name of the view.

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
    res, err := s.SDK.UpdateView(ctx, operations.UpdateViewRequest{
        RequestBody: operations.UpdateViewRequestBody{
            Filters: &operations.UpdateViewRequestBodyFilters{
                FilterString: sdk.String("necessitatibus"),
            },
            IncludedProperties: []shared.IncludedProperty{
                shared.IncludedProperty{
                    Name: "Curtis Toy",
                },
                shared.IncludedProperty{
                    Name: "Arlene Stamm",
                },
                shared.IncludedProperty{
                    Name: "Valerie Runolfsson",
                },
            },
            ViewArn: "aliquid",
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateViewOutput != nil {
        // handle response
    }
}
```
