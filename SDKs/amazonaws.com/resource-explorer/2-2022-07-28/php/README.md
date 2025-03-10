# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDefaultViewRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDefaultViewRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateDefaultViewRequest();
    $request->requestBody = new AssociateDefaultViewRequestBody();
    $request->requestBody->viewArn = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->associateDefaultView($request);

    if ($response->associateDefaultViewOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [associateDefaultView](docs/sdk/README.md#associatedefaultview) - <p>Sets the specified view as the default for the Amazon Web Services Region in which you call this operation. When a user performs a <a>Search</a> that doesn't explicitly specify which view to use, then Amazon Web Services Resource Explorer automatically chooses this default view for searches performed in this Amazon Web Services Region.</p> <p>If an Amazon Web Services Region doesn't have a default view configured, then users must explicitly specify a view with every <code>Search</code> operation performed in that Region.</p>
* [batchGetView](docs/sdk/README.md#batchgetview) - Retrieves details about a list of views.
* [createIndex](docs/sdk/README.md#createindex) - <p>Turns on Amazon Web Services Resource Explorer in the Amazon Web Services Region in which you called this operation by creating an index. Resource Explorer begins discovering the resources in this Region and stores the details about the resources in the index so that they can be queried by using the <a>Search</a> operation. You can create only one index in a Region.</p> <note> <p>This operation creates only a <i>local</i> index. To promote the local index in one Amazon Web Services Region into the aggregator index for the Amazon Web Services account, use the <a>UpdateIndexType</a> operation. For more information, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">Turning on cross-Region search by creating an aggregator index</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> </note> <p>For more details about what happens when you turn on Resource Explorer in an Amazon Web Services Region, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-service-activate.html">Turn on Resource Explorer to index your resources in an Amazon Web Services Region</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> <p>If this is the first Amazon Web Services Region in which you've created an index for Resource Explorer, then this operation also <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/security_iam_service-linked-roles.html">creates a service-linked role</a> in your Amazon Web Services account that allows Resource Explorer to enumerate your resources to populate the index.</p> <ul> <li> <p> <b>Action</b>: <code>resource-explorer-2:CreateIndex</code> </p> <p> <b>Resource</b>: The ARN of the index (as it will exist after the operation completes) in the Amazon Web Services Region and account in which you're trying to create the index. Use the wildcard character (<code>*</code>) at the end of the string to match the eventual UUID. For example, the following <code>Resource</code> element restricts the role or user to creating an index in only the <code>us-east-2</code> Region of the specified account.</p> <p> <code>"Resource": "arn:aws:resource-explorer-2:us-west-2:<i>&lt;account-id&gt;</i>:index/*"</code> </p> <p>Alternatively, you can use <code>"Resource": "*"</code> to allow the role or user to create an index in any Region.</p> </li> <li> <p> <b>Action</b>: <code>iam:CreateServiceLinkedRole</code> </p> <p> <b>Resource</b>: No specific resource (*). </p> <p>This permission is required only the first time you create an index to turn on Resource Explorer in the account. Resource Explorer uses this to create the <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/security_iam_service-linked-roles.html">service-linked role needed to index the resources in your account</a>. Resource Explorer uses the same service-linked role for all additional indexes you create afterwards.</p> </li> </ul>
* [createView](docs/sdk/README.md#createview) - <p>Creates a view that users can query by using the <a>Search</a> operation. Results from queries that you make using this view include only resources that match the view's <code>Filters</code>. For more information about Amazon Web Services Resource Explorer views, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-views.html">Managing views</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> <p>Only the principals with an IAM identity-based policy that grants <code>Allow</code> to the <code>Search</code> action on a <code>Resource</code> with the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of this view can <a>Search</a> using views you create with this operation.</p>
* [deleteIndex](docs/sdk/README.md#deleteindex) - <p>Deletes the specified index and turns off Amazon Web Services Resource Explorer in the specified Amazon Web Services Region. When you delete an index, Resource Explorer stops discovering and indexing resources in that Region. Resource Explorer also deletes all views in that Region. These actions occur as asynchronous background tasks. You can check to see when the actions are complete by using the <a>GetIndex</a> operation and checking the <code>Status</code> response value.</p> <note> <p>If the index you delete is the aggregator index for the Amazon Web Services account, you must wait 24 hours before you can promote another local index to be the aggregator index for the account. Users can't perform account-wide searches using Resource Explorer until another aggregator index is configured.</p> </note>
* [deleteView](docs/sdk/README.md#deleteview) - <p>Deletes the specified view.</p> <p>If the specified view is the default view for its Amazon Web Services Region, then all <a>Search</a> operations in that Region must explicitly specify the view to use until you configure a new default by calling the <a>AssociateDefaultView</a> operation.</p>
* [disassociateDefaultView](docs/sdk/README.md#disassociatedefaultview) - <p>After you call this operation, the affected Amazon Web Services Region no longer has a default view. All <a>Search</a> operations in that Region must explicitly specify a view or the operation fails. You can configure a new default by calling the <a>AssociateDefaultView</a> operation.</p> <p>If an Amazon Web Services Region doesn't have a default view configured, then users must explicitly specify a view with every <code>Search</code> operation performed in that Region.</p>
* [getDefaultView](docs/sdk/README.md#getdefaultview) - Retrieves the Amazon Resource Name (ARN) of the view that is the default for the Amazon Web Services Region in which you call this operation. You can then call <a>GetView</a> to retrieve the details of that view.
* [getIndex](docs/sdk/README.md#getindex) - Retrieves details about the Amazon Web Services Resource Explorer index in the Amazon Web Services Region in which you invoked the operation.
* [getView](docs/sdk/README.md#getview) - Retrieves details of the specified view.
* [listIndexes](docs/sdk/README.md#listindexes) - Retrieves a list of all of the indexes in Amazon Web Services Regions that are currently collecting resource information for Amazon Web Services Resource Explorer.
* [listSupportedResourceTypes](docs/sdk/README.md#listsupportedresourcetypes) - Retrieves a list of all resource types currently supported by Amazon Web Services Resource Explorer.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags that are attached to the specified resource.
* [listViews](docs/sdk/README.md#listviews) - <p>Lists the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource names (ARNs)</a> of the views available in the Amazon Web Services Region in which you call this operation.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note>
* [search](docs/sdk/README.md#search) - <p>Searches for resources and displays details about all resources that match the specified criteria. You must specify a query string.</p> <p>All search queries must use a view. If you don't explicitly specify a view, then Amazon Web Services Resource Explorer uses the default view for the Amazon Web Services Region in which you call this operation. The results are the logical intersection of the results that match both the <code>QueryString</code> parameter supplied to this operation and the <code>SearchFilter</code> parameter attached to the view.</p> <p>For the complete syntax supported by the <code>QueryString</code> parameter, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/APIReference/about-query-syntax.html">Search query syntax reference for Resource Explorer</a>.</p> <p>If your search results are empty, or are missing results that you think should be there, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/troubleshooting_search.html">Troubleshooting Resource Explorer search</a>.</p>
* [tagResource](docs/sdk/README.md#tagresource) - Adds one or more tag key and value pairs to an Amazon Web Services Resource Explorer view or index.
* [untagResource](docs/sdk/README.md#untagresource) - Removes one or more tag key and value pairs from an Amazon Web Services Resource Explorer view or index.
* [updateIndexType](docs/sdk/README.md#updateindextype) - <p>Changes the type of the index from one of the following types to the other. For more information about indexes and the role they perform in Amazon Web Services Resource Explorer, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">Turning on cross-Region search by creating an aggregator index</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> <ul> <li> <p> <b> <code>AGGREGATOR</code> index type</b> </p> <p>The index contains information about resources from all Amazon Web Services Regions in the Amazon Web Services account in which you've created a Resource Explorer index. Resource information from all other Regions is replicated to this Region's index.</p> <p>When you change the index type to <code>AGGREGATOR</code>, Resource Explorer turns on replication of all discovered resource information from the other Amazon Web Services Regions in your account to this index. You can then, from this Region only, perform resource search queries that span all Amazon Web Services Regions in the Amazon Web Services account. Turning on replication from all other Regions is performed by asynchronous background tasks. You can check the status of the asynchronous tasks by using the <a>GetIndex</a> operation. When the asynchronous tasks complete, the <code>Status</code> response of that operation changes from <code>UPDATING</code> to <code>ACTIVE</code>. After that, you can start to see results from other Amazon Web Services Regions in query results. However, it can take several hours for replication from all other Regions to complete.</p> <important> <p>You can have only one aggregator index per Amazon Web Services account. Before you can promote a different index to be the aggregator index for the account, you must first demote the existing aggregator index to type <code>LOCAL</code>.</p> </important> </li> <li> <p> <b> <code>LOCAL</code> index type</b> </p> <p>The index contains information about resources in only the Amazon Web Services Region in which the index exists. If an aggregator index in another Region exists, then information in this local index is replicated to the aggregator index.</p> <p>When you change the index type to <code>LOCAL</code>, Resource Explorer turns off the replication of resource information from all other Amazon Web Services Regions in the Amazon Web Services account to this Region. The aggregator index remains in the <code>UPDATING</code> state until all replication with other Regions successfully stops. You can check the status of the asynchronous task by using the <a>GetIndex</a> operation. When Resource Explorer successfully stops all replication with other Regions, the <code>Status</code> response of that operation changes from <code>UPDATING</code> to <code>ACTIVE</code>. Separately, the resource information from other Regions that was previously stored in the index is deleted within 30 days by another background task. Until that asynchronous task completes, some results from other Regions can continue to appear in search results.</p> <important> <p>After you demote an aggregator index to a local index, you must wait 24 hours before you can promote another index to be the new aggregator index for the account.</p> </important> </li> </ul>
* [updateView](docs/sdk/README.md#updateview) - Modifies some of the details of a view. You can change the filter string and the list of included properties. You can't change the name of the view.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
