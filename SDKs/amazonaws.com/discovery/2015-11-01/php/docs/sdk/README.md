# SDK

## Overview

<fullname>Amazon Web Services Application Discovery Service</fullname> <p>Amazon Web Services Application Discovery Service helps you plan application migration projects. It automatically identifies servers, virtual machines (VMs), and network dependencies in your on-premises data centers. For more information, see the <a href="http://aws.amazon.com/application-discovery/faqs/">Amazon Web Services Application Discovery Service FAQ</a>. Application Discovery Service offers three ways of performing discovery and collecting data about your on-premises servers:</p> <ul> <li> <p> <b>Agentless discovery</b> is recommended for environments that use VMware vCenter Server. This mode doesn't require you to install an agent on each host. It does not work in non-VMware environments.</p> <ul> <li> <p>Agentless discovery gathers server information regardless of the operating systems, which minimizes the time required for initial on-premises infrastructure assessment.</p> </li> <li> <p>Agentless discovery doesn't collect information about network dependencies, only agent-based discovery collects that information.</p> </li> </ul> </li> </ul> <ul> <li> <p> <b>Agent-based discovery</b> collects a richer set of data than agentless discovery by using the Amazon Web Services Application Discovery Agent, which you install on one or more hosts in your data center.</p> <ul> <li> <p> The agent captures infrastructure and application information, including an inventory of running processes, system performance information, resource utilization, and network dependencies.</p> </li> <li> <p>The information collected by agents is secured at rest and in transit to the Application Discovery Service database in the cloud. </p> </li> </ul> </li> </ul> <ul> <li> <p> <b>Amazon Web Services Partner Network (APN) solutions</b> integrate with Application Discovery Service, enabling you to import details of your on-premises environment directly into Migration Hub without using the discovery connector or discovery agent.</p> <ul> <li> <p>Third-party application discovery tools can query Amazon Web Services Application Discovery Service, and they can write to the Application Discovery Service database using the public API.</p> </li> <li> <p>In this way, you can import data into Migration Hub and view it, so that you can associate applications with servers and track migrations.</p> </li> </ul> </li> </ul> <p> <b>Recommendations</b> </p> <p>We recommend that you use agent-based discovery for non-VMware environments, and whenever you want to collect information about network dependencies. You can run agent-based and agentless discovery simultaneously. Use agentless discovery to complete the initial infrastructure assessment quickly, and then install agents on select hosts to collect additional information.</p> <p> <b>Working With This Guide</b> </p> <p>This API reference provides descriptions, syntax, and usage examples for each of the actions and data types for Application Discovery Service. The topic for each action shows the API request parameters and the response. Alternatively, you can use one of the Amazon Web Services SDKs to access an API that is tailored to the programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p> <note> <ul> <li> <p>Remember that you must set your Migration Hub home region before you call any of these APIs.</p> </li> <li> <p>You must make API calls for write actions (create, notify, associate, disassociate, import, or put) while in your home region, or a <code>HomeRegionNotSetException</code> error is returned.</p> </li> <li> <p>API calls for read actions (list, describe, stop, and delete) are permitted outside of your home region.</p> </li> <li> <p>Although it is unlikely, the Migration Hub home region could change. If you call APIs outside the home region, an <code>InvalidInputException</code> is returned.</p> </li> <li> <p>You must call <code>GetHomeRegion</code> to obtain the latest Migration Hub home region.</p> </li> </ul> </note> <p>This guide is intended for use with the <a href="http://docs.aws.amazon.com/application-discovery/latest/userguide/">Amazon Web Services Application Discovery Service User Guide</a>.</p> <important> <p>All data is handled according to the <a href="http://aws.amazon.com/privacy/">Amazon Web Services Privacy Policy</a>. You can operate Application Discovery Service offline to inspect collected data before it is shared with the service.</p> </important>

Amazon Web Services documentation
<https://docs.aws.amazon.com/discovery/>
### Available Operations

* [associateConfigurationItemsToApplication](#associateconfigurationitemstoapplication) - Associates one or more configuration items with an application.
* [batchDeleteImportData](#batchdeleteimportdata) - <p>Deletes one or more import tasks, each identified by their import ID. Each import task has a number of records that can identify servers or applications. </p> <p>Amazon Web Services Application Discovery Service has built-in matching logic that will identify when discovered servers match existing entries that you've previously discovered, the information for the already-existing discovered server is updated. When you delete an import task that contains records that were used to match, the information in those matched records that comes from the deleted records will also be deleted.</p>
* [createApplication](#createapplication) - Creates an application with the given name and description.
* [createTags](#createtags) - <p>Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items.</p> <important> <p>Do not store sensitive information (like personal data) in tags.</p> </important>
* [deleteApplications](#deleteapplications) - Deletes a list of applications and their associations with configuration items.
* [deleteTags](#deletetags) - Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.
* [describeAgents](#describeagents) - Lists agents or connectors as specified by ID or other filters. All agents/connectors associated with your user account can be listed if you call <code>DescribeAgents</code> as is without passing any parameters.
* [describeConfigurations](#describeconfigurations) - <p>Retrieves attributes for a list of configuration item IDs.</p> <note> <p>All of the supplied IDs must be for the same asset type from one of the following:</p> <ul> <li> <p>server</p> </li> <li> <p>application</p> </li> <li> <p>process</p> </li> <li> <p>connection</p> </li> </ul> <p>Output fields are specific to the asset type specified. For example, the output for a <i>server</i> configuration item includes a list of attributes about the server, such as host name, operating system, number of network cards, etc.</p> <p>For a complete list of outputs for each asset type, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#DescribeConfigurations">Using the DescribeConfigurations Action</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> </note>
* [describeContinuousExports](#describecontinuousexports) - Lists exports as specified by ID. All continuous exports associated with your user account can be listed if you call <code>DescribeContinuousExports</code> as is without passing any parameters.
* [~~describeExportConfigurations~~](#describeexportconfigurations) -  <code>DescribeExportConfigurations</code> is deprecated. Use <a href="https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html">DescribeExportTasks</a>, instead. :warning: **Deprecated**
* [describeExportTasks](#describeexporttasks) - Retrieve status of one or more export tasks. You can retrieve the status of up to 100 export tasks.
* [describeImportTasks](#describeimporttasks) - Returns an array of import tasks for your account, including status information, times, IDs, the Amazon S3 Object URL for the import file, and more.
* [describeTags](#describetags) - <p>Retrieves a list of configuration items that have tags as specified by the key-value pairs, name and value, passed to the optional parameter <code>filters</code>.</p> <p>There are three valid tag filter names:</p> <ul> <li> <p>tagKey</p> </li> <li> <p>tagValue</p> </li> <li> <p>configurationId</p> </li> </ul> <p>Also, all configuration items associated with your user account that have tags can be listed if you call <code>DescribeTags</code> as is without passing any parameters.</p>
* [disassociateConfigurationItemsFromApplication](#disassociateconfigurationitemsfromapplication) - Disassociates one or more configuration items from an application.
* [~~exportConfigurations~~](#exportconfigurations) - <p>Deprecated. Use <code>StartExportTask</code> instead.</p> <p>Exports all discovered configuration data to an Amazon S3 bucket or an application that enables you to view and evaluate the data. Data includes tags and tag associations, processes, connections, servers, and system performance. This API returns an export ID that you can query using the <i>DescribeExportConfigurations</i> API. The system imposes a limit of two configuration exports in six hours.</p> :warning: **Deprecated**
* [getDiscoverySummary](#getdiscoverysummary) - <p>Retrieves a short summary of discovered assets.</p> <p>This API operation takes no request parameters and is called as is at the command prompt as shown in the example.</p>
* [listConfigurations](#listconfigurations) - Retrieves a list of configuration items as specified by the value passed to the required parameter <code>configurationType</code>. Optional filtering may be applied to refine search results.
* [listServerNeighbors](#listserverneighbors) - Retrieves a list of servers that are one network hop away from a specified server.
* [startContinuousExport](#startcontinuousexport) - Start the continuous flow of agent's discovered data into Amazon Athena.
* [startDataCollectionByAgentIds](#startdatacollectionbyagentids) - Instructs the specified agents or connectors to start collecting data.
* [startExportTask](#startexporttask) - <p> Begins the export of discovered data to an S3 bucket.</p> <p> If you specify <code>agentIds</code> in a filter, the task exports up to 72 hours of detailed data collected by the identified Application Discovery Agent, including network, process, and performance details. A time range for exported agent data may be set by using <code>startTime</code> and <code>endTime</code>. Export of detailed agent data is limited to five concurrently running exports. </p> <p> If you do not include an <code>agentIds</code> filter, summary data is exported that includes both Amazon Web Services Agentless Discovery Connector data and summary data from Amazon Web Services Discovery Agents. Export of summary data is limited to two exports per day. </p>
* [startImportTask](#startimporttask) - <p>Starts an import task, which allows you to import details of your on-premises environment directly into Amazon Web Services Migration Hub without having to use the Application Discovery Service (ADS) tools such as the Discovery Connector or Discovery Agent. This gives you the option to perform migration assessment and planning directly from your imported data, including the ability to group your devices as applications and track their migration status.</p> <p>To start an import request, do this:</p> <ol> <li> <p>Download the specially formatted comma separated value (CSV) import template, which you can find here: <a href="https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv">https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv</a>.</p> </li> <li> <p>Fill out the template with your server and application data.</p> </li> <li> <p>Upload your import file to an Amazon S3 bucket, and make a note of it's Object URL. Your import file must be in the CSV format.</p> </li> <li> <p>Use the console or the <code>StartImportTask</code> command with the Amazon Web Services CLI or one of the Amazon Web Services SDKs to import the records from your file.</p> </li> </ol> <p>For more information, including step-by-step procedures, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-import.html">Migration Hub Import</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> <note> <p>There are limits to the number of import tasks you can create (and delete) in an Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/ads_service_limits.html">Amazon Web Services Application Discovery Service Limits</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> </note>
* [stopContinuousExport](#stopcontinuousexport) - Stop the continuous flow of agent's discovered data into Amazon Athena.
* [stopDataCollectionByAgentIds](#stopdatacollectionbyagentids) - Instructs the specified agents or connectors to stop collecting data.
* [updateApplication](#updateapplication) - Updates metadata about an application.

## associateConfigurationItemsToApplication

Associates one or more configuration items with an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateConfigurationItemsToApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateConfigurationItemsToApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateConfigurationItemsToApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateConfigurationItemsToApplicationRequest();
    $request->associateConfigurationItemsToApplicationRequest = new AssociateConfigurationItemsToApplicationRequest();
    $request->associateConfigurationItemsToApplicationRequest->applicationConfigurationId = 'iure';
    $request->associateConfigurationItemsToApplicationRequest->configurationIds = [
        'debitis',
        'ipsa',
    ];
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'voluptatum';
    $request->xAmzTarget = AssociateConfigurationItemsToApplicationXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_ASSOCIATE_CONFIGURATION_ITEMS_TO_APPLICATION;

    $response = $sdk->sdk->associateConfigurationItemsToApplication($request);

    if ($response->associateConfigurationItemsToApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDeleteImportData

<p>Deletes one or more import tasks, each identified by their import ID. Each import task has a number of records that can identify servers or applications. </p> <p>Amazon Web Services Application Discovery Service has built-in matching logic that will identify when discovered servers match existing entries that you've previously discovered, the information for the already-existing discovered server is updated. When you delete an import task that contains records that were used to match, the information in those matched records that comes from the deleted records will also be deleted.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteImportDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchDeleteImportDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteImportDataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDeleteImportDataRequest();
    $request->batchDeleteImportDataRequest = new BatchDeleteImportDataRequest();
    $request->batchDeleteImportDataRequest->importTaskIds = [
        'excepturi',
        'nisi',
    ];
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = BatchDeleteImportDataXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_BATCH_DELETE_IMPORT_DATA;

    $response = $sdk->sdk->batchDeleteImportData($request);

    if ($response->batchDeleteImportDataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createApplication

Creates an application with the given name and description.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApplicationRequest();
    $request->createApplicationRequest = new CreateApplicationRequest();
    $request->createApplicationRequest->description = 'ipsam';
    $request->createApplicationRequest->name = 'Timmy Satterfield';
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = CreateApplicationXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_CREATE_APPLICATION;

    $response = $sdk->sdk->createApplication($request);

    if ($response->createApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTags

<p>Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items.</p> <important> <p>Do not store sensitive information (like personal data) in tags.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTagsRequest();
    $request->createTagsRequest = new CreateTagsRequest();
    $request->createTagsRequest->configurationIds = [
        'dolorum',
        'dicta',
        'nam',
        'officia',
    ];
    $request->createTagsRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = CreateTagsXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_CREATE_TAGS;

    $response = $sdk->sdk->createTags($request);

    if ($response->createTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApplications

Deletes a list of applications and their associations with configuration items.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteApplicationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApplicationsRequest();
    $request->deleteApplicationsRequest = new DeleteApplicationsRequest();
    $request->deleteApplicationsRequest->configurationIds = [
        'modi',
        'qui',
    ];
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = DeleteApplicationsXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_DELETE_APPLICATIONS;

    $response = $sdk->sdk->deleteApplications($request);

    if ($response->deleteApplicationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTags

Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTagsRequest();
    $request->deleteTagsRequest = new DeleteTagsRequest();
    $request->deleteTagsRequest->configurationIds = [
        'natus',
        'sed',
    ];
    $request->deleteTagsRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'laboriosam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = DeleteTagsXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_DELETE_TAGS;

    $response = $sdk->sdk->deleteTags($request);

    if ($response->deleteTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAgents

Lists agents or connectors as specified by ID or other filters. All agents/connectors associated with your user account can be listed if you call <code>DescribeAgents</code> as is without passing any parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAgentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAgentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAgentsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAgentsRequest();
    $request->describeAgentsRequest = new DescribeAgentsRequest();
    $request->describeAgentsRequest->agentIds = [
        'iste',
        'iure',
    ];
    $request->describeAgentsRequest->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->describeAgentsRequest->maxResults = 697631;
    $request->describeAgentsRequest->nextToken = 'architecto';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = DescribeAgentsXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_DESCRIBE_AGENTS;

    $response = $sdk->sdk->describeAgents($request);

    if ($response->describeAgentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConfigurations

<p>Retrieves attributes for a list of configuration item IDs.</p> <note> <p>All of the supplied IDs must be for the same asset type from one of the following:</p> <ul> <li> <p>server</p> </li> <li> <p>application</p> </li> <li> <p>process</p> </li> <li> <p>connection</p> </li> </ul> <p>Output fields are specific to the asset type specified. For example, the output for a <i>server</i> configuration item includes a list of attributes about the server, such as host name, operating system, number of network cards, etc.</p> <p>For a complete list of outputs for each asset type, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#DescribeConfigurations">Using the DescribeConfigurations Action</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConfigurationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConfigurationsRequest();
    $request->describeConfigurationsRequest = new DescribeConfigurationsRequest();
    $request->describeConfigurationsRequest->configurationIds = [
        'explicabo',
        'nobis',
    ];
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = DescribeConfigurationsXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_DESCRIBE_CONFIGURATIONS;

    $response = $sdk->sdk->describeConfigurations($request);

    if ($response->describeConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeContinuousExports

Lists exports as specified by ID. All continuous exports associated with your user account can be listed if you call <code>DescribeContinuousExports</code> as is without passing any parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeContinuousExportsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeContinuousExportsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeContinuousExportsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeContinuousExportsRequest();
    $request->describeContinuousExportsRequest = new DescribeContinuousExportsRequest();
    $request->describeContinuousExportsRequest->exportIds = [
        'doloribus',
        'sapiente',
        'architecto',
    ];
    $request->describeContinuousExportsRequest->maxResults = 652790;
    $request->describeContinuousExportsRequest->nextToken = 'dolorem';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = DescribeContinuousExportsXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_DESCRIBE_CONTINUOUS_EXPORTS;
    $request->maxResults = 'quam';
    $request->nextToken = 'molestiae';

    $response = $sdk->sdk->describeContinuousExports($request);

    if ($response->describeContinuousExportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~describeExportConfigurations~~

 <code>DescribeExportConfigurations</code> is deprecated. Use <a href="https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html">DescribeExportTasks</a>, instead.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeExportConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeExportConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeExportConfigurationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeExportConfigurationsRequest();
    $request->describeExportConfigurationsRequest = new DescribeExportConfigurationsRequest();
    $request->describeExportConfigurationsRequest->exportIds = [
        'error',
    ];
    $request->describeExportConfigurationsRequest->maxResults = 158969;
    $request->describeExportConfigurationsRequest->nextToken = 'quis';
    $request->xAmzAlgorithm = 'vitae';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'animi';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'sequi';
    $request->xAmzTarget = DescribeExportConfigurationsXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_DESCRIBE_EXPORT_CONFIGURATIONS;

    $response = $sdk->sdk->describeExportConfigurations($request);

    if ($response->describeExportConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeExportTasks

Retrieve status of one or more export tasks. You can retrieve the status of up to 100 export tasks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeExportTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeExportTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportFilter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeExportTasksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeExportTasksRequest();
    $request->describeExportTasksRequest = new DescribeExportTasksRequest();
    $request->describeExportTasksRequest->exportIds = [
        'ipsam',
        'id',
        'possimus',
        'aut',
    ];
    $request->describeExportTasksRequest->filters = [
        new ExportFilter(),
    ];
    $request->describeExportTasksRequest->maxResults = 622846;
    $request->describeExportTasksRequest->nextToken = 'temporibus';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->xAmzTarget = DescribeExportTasksXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_DESCRIBE_EXPORT_TASKS;

    $response = $sdk->sdk->describeExportTasks($request);

    if ($response->describeExportTasksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeImportTasks

Returns an array of import tasks for your account, including status information, times, IDs, the Amazon S3 Object URL for the import file, and more.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImportTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeImportTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportTaskFilter;
use \OpenAPI\OpenAPI\Models\Shared\ImportTaskFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImportTasksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeImportTasksRequest();
    $request->describeImportTasksRequest = new DescribeImportTasksRequest();
    $request->describeImportTasksRequest->filters = [
        new ImportTaskFilter(),
        new ImportTaskFilter(),
        new ImportTaskFilter(),
        new ImportTaskFilter(),
    ];
    $request->describeImportTasksRequest->maxResults = 55714;
    $request->describeImportTasksRequest->nextToken = 'omnis';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = DescribeImportTasksXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_DESCRIBE_IMPORT_TASKS;
    $request->maxResults = 'dicta';
    $request->nextToken = 'corporis';

    $response = $sdk->sdk->describeImportTasks($request);

    if ($response->describeImportTasksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTags

<p>Retrieves a list of configuration items that have tags as specified by the key-value pairs, name and value, passed to the optional parameter <code>filters</code>.</p> <p>There are three valid tag filter names:</p> <ul> <li> <p>tagKey</p> </li> <li> <p>tagValue</p> </li> <li> <p>configurationId</p> </li> </ul> <p>Also, all configuration items associated with your user account that have tags can be listed if you call <code>DescribeTags</code> as is without passing any parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagFilter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTagsRequest();
    $request->describeTagsRequest = new DescribeTagsRequest();
    $request->describeTagsRequest->filters = [
        new TagFilter(),
        new TagFilter(),
    ];
    $request->describeTagsRequest->maxResults = 480894;
    $request->describeTagsRequest->nextToken = 'dicta';
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = DescribeTagsXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_DESCRIBE_TAGS;

    $response = $sdk->sdk->describeTags($request);

    if ($response->describeTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateConfigurationItemsFromApplication

Disassociates one or more configuration items from an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateConfigurationItemsFromApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateConfigurationItemsFromApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateConfigurationItemsFromApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateConfigurationItemsFromApplicationRequest();
    $request->disassociateConfigurationItemsFromApplicationRequest = new DisassociateConfigurationItemsFromApplicationRequest();
    $request->disassociateConfigurationItemsFromApplicationRequest->applicationConfigurationId = 'quidem';
    $request->disassociateConfigurationItemsFromApplicationRequest->configurationIds = [
        'excepturi',
        'pariatur',
        'modi',
    ];
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = DisassociateConfigurationItemsFromApplicationXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_DISASSOCIATE_CONFIGURATION_ITEMS_FROM_APPLICATION;

    $response = $sdk->sdk->disassociateConfigurationItemsFromApplication($request);

    if ($response->disassociateConfigurationItemsFromApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~exportConfigurations~~

<p>Deprecated. Use <code>StartExportTask</code> instead.</p> <p>Exports all discovered configuration data to an Amazon S3 bucket or an application that enables you to view and evaluate the data. Data includes tags and tag associations, processes, connections, servers, and system performance. This API returns an export ID that you can query using the <i>DescribeExportConfigurations</i> API. The system imposes a limit of two configuration exports in six hours.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportConfigurationsRequest();
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = ExportConfigurationsXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_EXPORT_CONFIGURATIONS;

    $response = $sdk->sdk->exportConfigurations($request);

    if ($response->exportConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDiscoverySummary

<p>Retrieves a short summary of discovered assets.</p> <p>This API operation takes no request parameters and is called as is at the command prompt as shown in the example.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoverySummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoverySummaryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDiscoverySummaryRequest();
    $request->requestBody = [
        'distinctio' => 'quibusdam',
        'labore' => 'modi',
        'qui' => 'aliquid',
    ];
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzTarget = GetDiscoverySummaryXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_GET_DISCOVERY_SUMMARY;

    $response = $sdk->sdk->getDiscoverySummary($request);

    if ($response->getDiscoverySummaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConfigurations

Retrieves a list of configuration items as specified by the value passed to the required parameter <code>configurationType</code>. Optional filtering may be applied to refine search results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\OrderByElement;
use \OpenAPI\OpenAPI\Models\Shared\OrderStringEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListConfigurationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConfigurationsRequest();
    $request->listConfigurationsRequest = new ListConfigurationsRequest();
    $request->listConfigurationsRequest->configurationType = ConfigurationItemTypeEnum::SERVER;
    $request->listConfigurationsRequest->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->listConfigurationsRequest->maxResults = 569618;
    $request->listConfigurationsRequest->nextToken = 'tempora';
    $request->listConfigurationsRequest->orderBy = [
        new OrderByElement(),
        new OrderByElement(),
        new OrderByElement(),
    ];
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = ListConfigurationsXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_LIST_CONFIGURATIONS;

    $response = $sdk->sdk->listConfigurations($request);

    if ($response->listConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServerNeighbors

Retrieves a list of servers that are one network hop away from a specified server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServerNeighborsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListServerNeighborsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListServerNeighborsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServerNeighborsRequest();
    $request->listServerNeighborsRequest = new ListServerNeighborsRequest();
    $request->listServerNeighborsRequest->configurationId = 'aliquid';
    $request->listServerNeighborsRequest->maxResults = 592042;
    $request->listServerNeighborsRequest->neighborConfigurationIds = [
        'sint',
        'officia',
        'dolor',
        'debitis',
    ];
    $request->listServerNeighborsRequest->nextToken = 'a';
    $request->listServerNeighborsRequest->portInformationNeeded = false;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = ListServerNeighborsXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_LIST_SERVER_NEIGHBORS;

    $response = $sdk->sdk->listServerNeighbors($request);

    if ($response->listServerNeighborsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startContinuousExport

Start the continuous flow of agent's discovered data into Amazon Athena.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartContinuousExportRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartContinuousExportXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartContinuousExportRequest();
    $request->requestBody = [
        'cumque' => 'facere',
        'ea' => 'aliquid',
    ];
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = StartContinuousExportXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_START_CONTINUOUS_EXPORT;

    $response = $sdk->sdk->startContinuousExport($request);

    if ($response->startContinuousExportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startDataCollectionByAgentIds

Instructs the specified agents or connectors to start collecting data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartDataCollectionByAgentIdsRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartDataCollectionByAgentIdsRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartDataCollectionByAgentIdsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartDataCollectionByAgentIdsRequest();
    $request->startDataCollectionByAgentIdsRequest = new StartDataCollectionByAgentIdsRequest();
    $request->startDataCollectionByAgentIdsRequest->agentIds = [
        'provident',
        'nam',
        'id',
    ];
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = StartDataCollectionByAgentIdsXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_START_DATA_COLLECTION_BY_AGENT_IDS;

    $response = $sdk->sdk->startDataCollectionByAgentIds($request);

    if ($response->startDataCollectionByAgentIdsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startExportTask

<p> Begins the export of discovered data to an S3 bucket.</p> <p> If you specify <code>agentIds</code> in a filter, the task exports up to 72 hours of detailed data collected by the identified Application Discovery Agent, including network, process, and performance details. A time range for exported agent data may be set by using <code>startTime</code> and <code>endTime</code>. Export of detailed agent data is limited to five concurrently running exports. </p> <p> If you do not include an <code>agentIds</code> filter, summary data is exported that includes both Amazon Web Services Agentless Discovery Connector data and summary data from Amazon Web Services Discovery Agents. Export of summary data is limited to two exports per day. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartExportTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartExportTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportDataFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExportFilter;
use \OpenAPI\OpenAPI\Models\Operations\StartExportTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartExportTaskRequest();
    $request->startExportTaskRequest = new StartExportTaskRequest();
    $request->startExportTaskRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-15T07:59:26.631Z');
    $request->startExportTaskRequest->exportDataFormat = [
        ExportDataFormatEnum::CSV,
        ExportDataFormatEnum::CSV,
    ];
    $request->startExportTaskRequest->filters = [
        new ExportFilter(),
        new ExportFilter(),
    ];
    $request->startExportTaskRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-06T01:45:34.248Z');
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = StartExportTaskXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_START_EXPORT_TASK;

    $response = $sdk->sdk->startExportTask($request);

    if ($response->startExportTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startImportTask

<p>Starts an import task, which allows you to import details of your on-premises environment directly into Amazon Web Services Migration Hub without having to use the Application Discovery Service (ADS) tools such as the Discovery Connector or Discovery Agent. This gives you the option to perform migration assessment and planning directly from your imported data, including the ability to group your devices as applications and track their migration status.</p> <p>To start an import request, do this:</p> <ol> <li> <p>Download the specially formatted comma separated value (CSV) import template, which you can find here: <a href="https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv">https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv</a>.</p> </li> <li> <p>Fill out the template with your server and application data.</p> </li> <li> <p>Upload your import file to an Amazon S3 bucket, and make a note of it's Object URL. Your import file must be in the CSV format.</p> </li> <li> <p>Use the console or the <code>StartImportTask</code> command with the Amazon Web Services CLI or one of the Amazon Web Services SDKs to import the records from your file.</p> </li> </ol> <p>For more information, including step-by-step procedures, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-import.html">Migration Hub Import</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> <note> <p>There are limits to the number of import tasks you can create (and delete) in an Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/ads_service_limits.html">Amazon Web Services Application Discovery Service Limits</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartImportTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartImportTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartImportTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartImportTaskRequest();
    $request->startImportTaskRequest = new StartImportTaskRequest();
    $request->startImportTaskRequest->clientRequestToken = 'aspernatur';
    $request->startImportTaskRequest->importUrl = 'architecto';
    $request->startImportTaskRequest->name = 'Frances Marks';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'ad';
    $request->xAmzTarget = StartImportTaskXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_START_IMPORT_TASK;

    $response = $sdk->sdk->startImportTask($request);

    if ($response->startImportTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopContinuousExport

Stop the continuous flow of agent's discovered data into Amazon Athena.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopContinuousExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopContinuousExportRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopContinuousExportXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopContinuousExportRequest();
    $request->stopContinuousExportRequest = new StopContinuousExportRequest();
    $request->stopContinuousExportRequest->exportId = 'eum';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzTarget = StopContinuousExportXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_STOP_CONTINUOUS_EXPORT;

    $response = $sdk->sdk->stopContinuousExport($request);

    if ($response->stopContinuousExportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopDataCollectionByAgentIds

Instructs the specified agents or connectors to stop collecting data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopDataCollectionByAgentIdsRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopDataCollectionByAgentIdsRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopDataCollectionByAgentIdsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopDataCollectionByAgentIdsRequest();
    $request->stopDataCollectionByAgentIdsRequest = new StopDataCollectionByAgentIdsRequest();
    $request->stopDataCollectionByAgentIdsRequest->agentIds = [
        'eius',
        'maxime',
        'deleniti',
        'facilis',
    ];
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = StopDataCollectionByAgentIdsXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_STOP_DATA_COLLECTION_BY_AGENT_IDS;

    $response = $sdk->sdk->stopDataCollectionByAgentIds($request);

    if ($response->stopDataCollectionByAgentIdsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApplication

Updates metadata about an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApplicationRequest();
    $request->updateApplicationRequest = new UpdateApplicationRequest();
    $request->updateApplicationRequest->configurationId = 'repellat';
    $request->updateApplicationRequest->description = 'quibusdam';
    $request->updateApplicationRequest->name = 'Mr. Jenna Stroman';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'maxime';
    $request->xAmzTarget = UpdateApplicationXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_UPDATE_APPLICATION;

    $response = $sdk->sdk->updateApplication($request);

    if ($response->updateApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
