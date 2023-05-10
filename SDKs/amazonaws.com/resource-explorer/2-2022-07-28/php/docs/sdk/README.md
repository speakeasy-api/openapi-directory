# SDK

## Overview

<p>Amazon Web Services Resource Explorer is a resource search and discovery service. By using Resource Explorer, you can explore your resources using an internet search engine-like experience. Examples of resources include Amazon Relational Database Service (Amazon RDS) instances, Amazon Simple Storage Service (Amazon S3) buckets, or Amazon DynamoDB tables. You can search for your resources using resource metadata like names, tags, and IDs. Resource Explorer can search across all of the Amazon Web Services Regions in your account in which you turn the service on, to simplify your cross-Region workloads.</p> <p>Resource Explorer scans the resources in each of the Amazon Web Services Regions in your Amazon Web Services account in which you turn on Resource Explorer. Resource Explorer <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/getting-started-terms-and-concepts.html#term-index">creates and maintains an index</a> in each Region, with the details of that Region's resources.</p> <p>You can <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">search across all of the indexed Regions in your account</a> by designating one of your Amazon Web Services Regions to contain the aggregator index for the account. When you <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region-turn-on.html">promote a local index in a Region to become the aggregator index for the account</a>, Resource Explorer automatically replicates the index information from all local indexes in the other Regions to the aggregator index. Therefore, the Region with the aggregator index has a copy of all resource information for all Regions in the account where you turned on Resource Explorer. As a result, views in the aggregator index Region include resources from all of the indexed Regions in your account.</p> <p>For more information about Amazon Web Services Resource Explorer, including how to enable and configure the service, see the <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/">Amazon Web Services Resource Explorer User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/resource-explorer-2/>
### Available Operations

* [associateDefaultView](#associatedefaultview) - <p>Sets the specified view as the default for the Amazon Web Services Region in which you call this operation. When a user performs a <a>Search</a> that doesn't explicitly specify which view to use, then Amazon Web Services Resource Explorer automatically chooses this default view for searches performed in this Amazon Web Services Region.</p> <p>If an Amazon Web Services Region doesn't have a default view configured, then users must explicitly specify a view with every <code>Search</code> operation performed in that Region.</p>
* [batchGetView](#batchgetview) - Retrieves details about a list of views.
* [createIndex](#createindex) - <p>Turns on Amazon Web Services Resource Explorer in the Amazon Web Services Region in which you called this operation by creating an index. Resource Explorer begins discovering the resources in this Region and stores the details about the resources in the index so that they can be queried by using the <a>Search</a> operation. You can create only one index in a Region.</p> <note> <p>This operation creates only a <i>local</i> index. To promote the local index in one Amazon Web Services Region into the aggregator index for the Amazon Web Services account, use the <a>UpdateIndexType</a> operation. For more information, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">Turning on cross-Region search by creating an aggregator index</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> </note> <p>For more details about what happens when you turn on Resource Explorer in an Amazon Web Services Region, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-service-activate.html">Turn on Resource Explorer to index your resources in an Amazon Web Services Region</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> <p>If this is the first Amazon Web Services Region in which you've created an index for Resource Explorer, then this operation also <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/security_iam_service-linked-roles.html">creates a service-linked role</a> in your Amazon Web Services account that allows Resource Explorer to enumerate your resources to populate the index.</p> <ul> <li> <p> <b>Action</b>: <code>resource-explorer-2:CreateIndex</code> </p> <p> <b>Resource</b>: The ARN of the index (as it will exist after the operation completes) in the Amazon Web Services Region and account in which you're trying to create the index. Use the wildcard character (<code>*</code>) at the end of the string to match the eventual UUID. For example, the following <code>Resource</code> element restricts the role or user to creating an index in only the <code>us-east-2</code> Region of the specified account.</p> <p> <code>"Resource": "arn:aws:resource-explorer-2:us-west-2:<i>&lt;account-id&gt;</i>:index/*"</code> </p> <p>Alternatively, you can use <code>"Resource": "*"</code> to allow the role or user to create an index in any Region.</p> </li> <li> <p> <b>Action</b>: <code>iam:CreateServiceLinkedRole</code> </p> <p> <b>Resource</b>: No specific resource (*). </p> <p>This permission is required only the first time you create an index to turn on Resource Explorer in the account. Resource Explorer uses this to create the <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/security_iam_service-linked-roles.html">service-linked role needed to index the resources in your account</a>. Resource Explorer uses the same service-linked role for all additional indexes you create afterwards.</p> </li> </ul>
* [createView](#createview) - <p>Creates a view that users can query by using the <a>Search</a> operation. Results from queries that you make using this view include only resources that match the view's <code>Filters</code>. For more information about Amazon Web Services Resource Explorer views, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-views.html">Managing views</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> <p>Only the principals with an IAM identity-based policy that grants <code>Allow</code> to the <code>Search</code> action on a <code>Resource</code> with the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of this view can <a>Search</a> using views you create with this operation.</p>
* [deleteIndex](#deleteindex) - <p>Deletes the specified index and turns off Amazon Web Services Resource Explorer in the specified Amazon Web Services Region. When you delete an index, Resource Explorer stops discovering and indexing resources in that Region. Resource Explorer also deletes all views in that Region. These actions occur as asynchronous background tasks. You can check to see when the actions are complete by using the <a>GetIndex</a> operation and checking the <code>Status</code> response value.</p> <note> <p>If the index you delete is the aggregator index for the Amazon Web Services account, you must wait 24 hours before you can promote another local index to be the aggregator index for the account. Users can't perform account-wide searches using Resource Explorer until another aggregator index is configured.</p> </note>
* [deleteView](#deleteview) - <p>Deletes the specified view.</p> <p>If the specified view is the default view for its Amazon Web Services Region, then all <a>Search</a> operations in that Region must explicitly specify the view to use until you configure a new default by calling the <a>AssociateDefaultView</a> operation.</p>
* [disassociateDefaultView](#disassociatedefaultview) - <p>After you call this operation, the affected Amazon Web Services Region no longer has a default view. All <a>Search</a> operations in that Region must explicitly specify a view or the operation fails. You can configure a new default by calling the <a>AssociateDefaultView</a> operation.</p> <p>If an Amazon Web Services Region doesn't have a default view configured, then users must explicitly specify a view with every <code>Search</code> operation performed in that Region.</p>
* [getDefaultView](#getdefaultview) - Retrieves the Amazon Resource Name (ARN) of the view that is the default for the Amazon Web Services Region in which you call this operation. You can then call <a>GetView</a> to retrieve the details of that view.
* [getIndex](#getindex) - Retrieves details about the Amazon Web Services Resource Explorer index in the Amazon Web Services Region in which you invoked the operation.
* [getView](#getview) - Retrieves details of the specified view.
* [listIndexes](#listindexes) - Retrieves a list of all of the indexes in Amazon Web Services Regions that are currently collecting resource information for Amazon Web Services Resource Explorer.
* [listSupportedResourceTypes](#listsupportedresourcetypes) - Retrieves a list of all resource types currently supported by Amazon Web Services Resource Explorer.
* [listTagsForResource](#listtagsforresource) - Lists the tags that are attached to the specified resource.
* [listViews](#listviews) - <p>Lists the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource names (ARNs)</a> of the views available in the Amazon Web Services Region in which you call this operation.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note>
* [search](#search) - <p>Searches for resources and displays details about all resources that match the specified criteria. You must specify a query string.</p> <p>All search queries must use a view. If you don't explicitly specify a view, then Amazon Web Services Resource Explorer uses the default view for the Amazon Web Services Region in which you call this operation. The results are the logical intersection of the results that match both the <code>QueryString</code> parameter supplied to this operation and the <code>SearchFilter</code> parameter attached to the view.</p> <p>For the complete syntax supported by the <code>QueryString</code> parameter, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/APIReference/about-query-syntax.html">Search query syntax reference for Resource Explorer</a>.</p> <p>If your search results are empty, or are missing results that you think should be there, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/troubleshooting_search.html">Troubleshooting Resource Explorer search</a>.</p>
* [tagResource](#tagresource) - Adds one or more tag key and value pairs to an Amazon Web Services Resource Explorer view or index.
* [untagResource](#untagresource) - Removes one or more tag key and value pairs from an Amazon Web Services Resource Explorer view or index.
* [updateIndexType](#updateindextype) - <p>Changes the type of the index from one of the following types to the other. For more information about indexes and the role they perform in Amazon Web Services Resource Explorer, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">Turning on cross-Region search by creating an aggregator index</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> <ul> <li> <p> <b> <code>AGGREGATOR</code> index type</b> </p> <p>The index contains information about resources from all Amazon Web Services Regions in the Amazon Web Services account in which you've created a Resource Explorer index. Resource information from all other Regions is replicated to this Region's index.</p> <p>When you change the index type to <code>AGGREGATOR</code>, Resource Explorer turns on replication of all discovered resource information from the other Amazon Web Services Regions in your account to this index. You can then, from this Region only, perform resource search queries that span all Amazon Web Services Regions in the Amazon Web Services account. Turning on replication from all other Regions is performed by asynchronous background tasks. You can check the status of the asynchronous tasks by using the <a>GetIndex</a> operation. When the asynchronous tasks complete, the <code>Status</code> response of that operation changes from <code>UPDATING</code> to <code>ACTIVE</code>. After that, you can start to see results from other Amazon Web Services Regions in query results. However, it can take several hours for replication from all other Regions to complete.</p> <important> <p>You can have only one aggregator index per Amazon Web Services account. Before you can promote a different index to be the aggregator index for the account, you must first demote the existing aggregator index to type <code>LOCAL</code>.</p> </important> </li> <li> <p> <b> <code>LOCAL</code> index type</b> </p> <p>The index contains information about resources in only the Amazon Web Services Region in which the index exists. If an aggregator index in another Region exists, then information in this local index is replicated to the aggregator index.</p> <p>When you change the index type to <code>LOCAL</code>, Resource Explorer turns off the replication of resource information from all other Amazon Web Services Regions in the Amazon Web Services account to this Region. The aggregator index remains in the <code>UPDATING</code> state until all replication with other Regions successfully stops. You can check the status of the asynchronous task by using the <a>GetIndex</a> operation. When Resource Explorer successfully stops all replication with other Regions, the <code>Status</code> response of that operation changes from <code>UPDATING</code> to <code>ACTIVE</code>. Separately, the resource information from other Regions that was previously stored in the index is deleted within 30 days by another background task. Until that asynchronous task completes, some results from other Regions can continue to appear in search results.</p> <important> <p>After you demote an aggregator index to a local index, you must wait 24 hours before you can promote another index to be the new aggregator index for the account.</p> </important> </li> </ul>
* [updateView](#updateview) - Modifies some of the details of a view. You can change the filter string and the list of included properties. You can't change the name of the view.

## associateDefaultView

<p>Sets the specified view as the default for the Amazon Web Services Region in which you call this operation. When a user performs a <a>Search</a> that doesn't explicitly specify which view to use, then Amazon Web Services Resource Explorer automatically chooses this default view for searches performed in this Amazon Web Services Region.</p> <p>If an Amazon Web Services Region doesn't have a default view configured, then users must explicitly specify a view with every <code>Search</code> operation performed in that Region.</p>

### Example Usage

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
    $request->requestBody->viewArn = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->associateDefaultView($request);

    if ($response->associateDefaultViewOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetView

Retrieves details about a list of views.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetViewRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetViewRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetViewRequest();
    $request->requestBody = new BatchGetViewRequestBody();
    $request->requestBody->viewArns = [
        'tempora',
        'suscipit',
        'molestiae',
        'minus',
    ];
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'temporibus';

    $response = $sdk->sdk->batchGetView($request);

    if ($response->batchGetViewOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createIndex

<p>Turns on Amazon Web Services Resource Explorer in the Amazon Web Services Region in which you called this operation by creating an index. Resource Explorer begins discovering the resources in this Region and stores the details about the resources in the index so that they can be queried by using the <a>Search</a> operation. You can create only one index in a Region.</p> <note> <p>This operation creates only a <i>local</i> index. To promote the local index in one Amazon Web Services Region into the aggregator index for the Amazon Web Services account, use the <a>UpdateIndexType</a> operation. For more information, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">Turning on cross-Region search by creating an aggregator index</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> </note> <p>For more details about what happens when you turn on Resource Explorer in an Amazon Web Services Region, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-service-activate.html">Turn on Resource Explorer to index your resources in an Amazon Web Services Region</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> <p>If this is the first Amazon Web Services Region in which you've created an index for Resource Explorer, then this operation also <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/security_iam_service-linked-roles.html">creates a service-linked role</a> in your Amazon Web Services account that allows Resource Explorer to enumerate your resources to populate the index.</p> <ul> <li> <p> <b>Action</b>: <code>resource-explorer-2:CreateIndex</code> </p> <p> <b>Resource</b>: The ARN of the index (as it will exist after the operation completes) in the Amazon Web Services Region and account in which you're trying to create the index. Use the wildcard character (<code>*</code>) at the end of the string to match the eventual UUID. For example, the following <code>Resource</code> element restricts the role or user to creating an index in only the <code>us-east-2</code> Region of the specified account.</p> <p> <code>"Resource": "arn:aws:resource-explorer-2:us-west-2:<i>&lt;account-id&gt;</i>:index/*"</code> </p> <p>Alternatively, you can use <code>"Resource": "*"</code> to allow the role or user to create an index in any Region.</p> </li> <li> <p> <b>Action</b>: <code>iam:CreateServiceLinkedRole</code> </p> <p> <b>Resource</b>: No specific resource (*). </p> <p>This permission is required only the first time you create an index to turn on Resource Explorer in the account. Resource Explorer uses this to create the <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/security_iam_service-linked-roles.html">service-linked role needed to index the resources in your account</a>. Resource Explorer uses the same service-linked role for all additional indexes you create afterwards.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateIndexRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateIndexRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateIndexRequest();
    $request->requestBody = new CreateIndexRequestBody();
    $request->requestBody->clientToken = 'ab';
    $request->requestBody->tags = [
        'veritatis' => 'deserunt',
        'perferendis' => 'ipsam',
    ];
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->sdk->createIndex($request);

    if ($response->createIndexOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createView

<p>Creates a view that users can query by using the <a>Search</a> operation. Results from queries that you make using this view include only resources that match the view's <code>Filters</code>. For more information about Amazon Web Services Resource Explorer views, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-views.html">Managing views</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> <p>Only the principals with an IAM identity-based policy that grants <code>Allow</code> to the <code>Search</code> action on a <code>Resource</code> with the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of this view can <a>Search</a> using views you create with this operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateViewRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateViewRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateViewRequestBodyFilters;
use \OpenAPI\OpenAPI\Models\Shared\IncludedProperty;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateViewRequest();
    $request->requestBody = new CreateViewRequestBody();
    $request->requestBody->clientToken = 'molestiae';
    $request->requestBody->filters = new CreateViewRequestBodyFilters();
    $request->requestBody->filters->filterString = 'quod';
    $request->requestBody->includedProperties = [
        new IncludedProperty(),
        new IncludedProperty(),
        new IncludedProperty(),
        new IncludedProperty(),
    ];
    $request->requestBody->tags = [
        'totam' => 'porro',
        'dolorum' => 'dicta',
    ];
    $request->requestBody->viewName = 'nam';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->createView($request);

    if ($response->createViewOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteIndex

<p>Deletes the specified index and turns off Amazon Web Services Resource Explorer in the specified Amazon Web Services Region. When you delete an index, Resource Explorer stops discovering and indexing resources in that Region. Resource Explorer also deletes all views in that Region. These actions occur as asynchronous background tasks. You can check to see when the actions are complete by using the <a>GetIndex</a> operation and checking the <code>Status</code> response value.</p> <note> <p>If the index you delete is the aggregator index for the Amazon Web Services account, you must wait 24 hours before you can promote another local index to be the aggregator index for the account. Users can't perform account-wide searches using Resource Explorer until another aggregator index is configured.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIndexRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIndexRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIndexRequest();
    $request->requestBody = new DeleteIndexRequestBody();
    $request->requestBody->arn = 'beatae';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->deleteIndex($request);

    if ($response->deleteIndexOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteView

<p>Deletes the specified view.</p> <p>If the specified view is the default view for its Amazon Web Services Region, then all <a>Search</a> operations in that Region must explicitly specify the view to use until you configure a new default by calling the <a>AssociateDefaultView</a> operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteViewRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteViewRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteViewRequest();
    $request->requestBody = new DeleteViewRequestBody();
    $request->requestBody->viewArn = 'ipsum';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'iste';

    $response = $sdk->sdk->deleteView($request);

    if ($response->deleteViewOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateDefaultView

<p>After you call this operation, the affected Amazon Web Services Region no longer has a default view. All <a>Search</a> operations in that Region must explicitly specify a view or the operation fails. You can configure a new default by calling the <a>AssociateDefaultView</a> operation.</p> <p>If an Amazon Web Services Region doesn't have a default view configured, then users must explicitly specify a view with every <code>Search</code> operation performed in that Region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateDefaultViewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateDefaultViewRequest();
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'laboriosam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'in';

    $response = $sdk->sdk->disassociateDefaultView($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDefaultView

Retrieves the Amazon Resource Name (ARN) of the view that is the default for the Amazon Web Services Region in which you call this operation. You can then call <a>GetView</a> to retrieve the details of that view.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDefaultViewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDefaultViewRequest();
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->getDefaultView($request);

    if ($response->getDefaultViewOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIndex

Retrieves details about the Amazon Web Services Resource Explorer index in the Amazon Web Services Region in which you invoked the operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIndexRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIndexRequest();
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->getIndex($request);

    if ($response->getIndexOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getView

Retrieves details of the specified view.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetViewRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetViewRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetViewRequest();
    $request->requestBody = new GetViewRequestBody();
    $request->requestBody->viewArn = 'explicabo';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'accusantium';

    $response = $sdk->sdk->getView($request);

    if ($response->getViewOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIndexes

Retrieves a list of all of the indexes in Amazon Web Services Regions that are currently collecting resource information for Amazon Web Services Resource Explorer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListIndexesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListIndexesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListIndexesRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIndexesRequest();
    $request->maxResults = 'iure';
    $request->nextToken = 'culpa';
    $request->requestBody = new ListIndexesRequestBody();
    $request->requestBody->maxResults = 988374;
    $request->requestBody->nextToken = 'sapiente';
    $request->requestBody->regions = [
        'mollitia',
    ];
    $request->requestBody->type = ListIndexesRequestBodyTypeEnum::LOCAL;
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'commodi';

    $response = $sdk->sdk->listIndexes($request);

    if ($response->listIndexesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSupportedResourceTypes

Retrieves a list of all resource types currently supported by Amazon Web Services Resource Explorer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSupportedResourceTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSupportedResourceTypesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSupportedResourceTypesRequest();
    $request->maxResults = 'quam';
    $request->nextToken = 'molestiae';
    $request->requestBody = new ListSupportedResourceTypesRequestBody();
    $request->requestBody->maxResults = 244425;
    $request->requestBody->nextToken = 'error';
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->listSupportedResourceTypes($request);

    if ($response->listSupportedResourceTypesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags that are attached to the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'aut';
    $request->resourceArn = 'quasi';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listViews

<p>Lists the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource names (ARNs)</a> of the views available in the Amazon Web Services Region in which you call this operation.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListViewsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListViewsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListViewsRequest();
    $request->maxResults = 'error';
    $request->nextToken = 'temporibus';
    $request->requestBody = new ListViewsRequestBody();
    $request->requestBody->maxResults = 673660;
    $request->requestBody->nextToken = 'quasi';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->listViews($request);

    if ($response->listViewsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## search

<p>Searches for resources and displays details about all resources that match the specified criteria. You must specify a query string.</p> <p>All search queries must use a view. If you don't explicitly specify a view, then Amazon Web Services Resource Explorer uses the default view for the Amazon Web Services Region in which you call this operation. The results are the logical intersection of the results that match both the <code>QueryString</code> parameter supplied to this operation and the <code>SearchFilter</code> parameter attached to the view.</p> <p>For the complete syntax supported by the <code>QueryString</code> parameter, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/APIReference/about-query-syntax.html">Search query syntax reference for Resource Explorer</a>.</p> <p>If your search results are empty, or are missing results that you think should be there, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/troubleshooting_search.html">Troubleshooting Resource Explorer search</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchRequest();
    $request->maxResults = 'omnis';
    $request->nextToken = 'voluptate';
    $request->requestBody = new SearchRequestBody();
    $request->requestBody->maxResults = 739264;
    $request->requestBody->nextToken = 'perferendis';
    $request->requestBody->queryString = 'doloremque';
    $request->requestBody->viewArn = 'reprehenderit';
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->search($request);

    if ($response->searchOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds one or more tag key and value pairs to an Amazon Web Services Resource Explorer view or index.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'enim' => 'accusamus',
        'commodi' => 'repudiandae',
        'quae' => 'ipsum',
    ];
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'rem';
    $request->resourceArn = 'voluptates';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tag key and value pairs from an Amazon Web Services Resource Explorer view or index.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'enim';
    $request->resourceArn = 'consequatur';
    $request->tagKeys = [
        'quibusdam',
        'explicabo',
        'deserunt',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateIndexType

<p>Changes the type of the index from one of the following types to the other. For more information about indexes and the role they perform in Amazon Web Services Resource Explorer, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">Turning on cross-Region search by creating an aggregator index</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> <ul> <li> <p> <b> <code>AGGREGATOR</code> index type</b> </p> <p>The index contains information about resources from all Amazon Web Services Regions in the Amazon Web Services account in which you've created a Resource Explorer index. Resource information from all other Regions is replicated to this Region's index.</p> <p>When you change the index type to <code>AGGREGATOR</code>, Resource Explorer turns on replication of all discovered resource information from the other Amazon Web Services Regions in your account to this index. You can then, from this Region only, perform resource search queries that span all Amazon Web Services Regions in the Amazon Web Services account. Turning on replication from all other Regions is performed by asynchronous background tasks. You can check the status of the asynchronous tasks by using the <a>GetIndex</a> operation. When the asynchronous tasks complete, the <code>Status</code> response of that operation changes from <code>UPDATING</code> to <code>ACTIVE</code>. After that, you can start to see results from other Amazon Web Services Regions in query results. However, it can take several hours for replication from all other Regions to complete.</p> <important> <p>You can have only one aggregator index per Amazon Web Services account. Before you can promote a different index to be the aggregator index for the account, you must first demote the existing aggregator index to type <code>LOCAL</code>.</p> </important> </li> <li> <p> <b> <code>LOCAL</code> index type</b> </p> <p>The index contains information about resources in only the Amazon Web Services Region in which the index exists. If an aggregator index in another Region exists, then information in this local index is replicated to the aggregator index.</p> <p>When you change the index type to <code>LOCAL</code>, Resource Explorer turns off the replication of resource information from all other Amazon Web Services Regions in the Amazon Web Services account to this Region. The aggregator index remains in the <code>UPDATING</code> state until all replication with other Regions successfully stops. You can check the status of the asynchronous task by using the <a>GetIndex</a> operation. When Resource Explorer successfully stops all replication with other Regions, the <code>Status</code> response of that operation changes from <code>UPDATING</code> to <code>ACTIVE</code>. Separately, the resource information from other Regions that was previously stored in the index is deleted within 30 days by another background task. Until that asynchronous task completes, some results from other Regions can continue to appear in search results.</p> <important> <p>After you demote an aggregator index to a local index, you must wait 24 hours before you can promote another index to be the new aggregator index for the account.</p> </important> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIndexTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIndexTypeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIndexTypeRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateIndexTypeRequest();
    $request->requestBody = new UpdateIndexTypeRequestBody();
    $request->requestBody->arn = 'distinctio';
    $request->requestBody->type = UpdateIndexTypeRequestBodyTypeEnum::AGGREGATOR;
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->updateIndexType($request);

    if ($response->updateIndexTypeOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateView

Modifies some of the details of a view. You can change the filter string and the list of included properties. You can't change the name of the view.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateViewRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateViewRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateViewRequestBodyFilters;
use \OpenAPI\OpenAPI\Models\Shared\IncludedProperty;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateViewRequest();
    $request->requestBody = new UpdateViewRequestBody();
    $request->requestBody->filters = new UpdateViewRequestBodyFilters();
    $request->requestBody->filters->filterString = 'magni';
    $request->requestBody->includedProperties = [
        new IncludedProperty(),
        new IncludedProperty(),
        new IncludedProperty(),
        new IncludedProperty(),
    ];
    $request->requestBody->viewArn = 'ipsam';
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'tempore';

    $response = $sdk->sdk->updateView($request);

    if ($response->updateViewOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
