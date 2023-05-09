# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateConfigurationItemsToApplicationRequest;
import org.openapis.openapi.models.operations.AssociateConfigurationItemsToApplicationResponse;
import org.openapis.openapi.models.operations.AssociateConfigurationItemsToApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateConfigurationItemsToApplicationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateConfigurationItemsToApplicationRequest req = new AssociateConfigurationItemsToApplicationRequest(                new AssociateConfigurationItemsToApplicationRequest("provident",                 new String[]{{
                                                add("quibusdam"),
                                                add("unde"),
                                                add("nulla"),
                                            }});, AssociateConfigurationItemsToApplicationXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_ASSOCIATE_CONFIGURATION_ITEMS_TO_APPLICATION) {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "illum";
                xAmzCredential = "vel";
                xAmzDate = "error";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "iure";
            }};            

            AssociateConfigurationItemsToApplicationResponse res = sdk.associateConfigurationItemsToApplication(req);

            if (res.associateConfigurationItemsToApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [associateConfigurationItemsToApplication](docs/sdk/README.md#associateconfigurationitemstoapplication) - Associates one or more configuration items with an application.
* [batchDeleteImportData](docs/sdk/README.md#batchdeleteimportdata) - <p>Deletes one or more import tasks, each identified by their import ID. Each import task has a number of records that can identify servers or applications. </p> <p>Amazon Web Services Application Discovery Service has built-in matching logic that will identify when discovered servers match existing entries that you've previously discovered, the information for the already-existing discovered server is updated. When you delete an import task that contains records that were used to match, the information in those matched records that comes from the deleted records will also be deleted.</p>
* [createApplication](docs/sdk/README.md#createapplication) - Creates an application with the given name and description.
* [createTags](docs/sdk/README.md#createtags) - <p>Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items.</p> <important> <p>Do not store sensitive information (like personal data) in tags.</p> </important>
* [deleteApplications](docs/sdk/README.md#deleteapplications) - Deletes a list of applications and their associations with configuration items.
* [deleteTags](docs/sdk/README.md#deletetags) - Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.
* [describeAgents](docs/sdk/README.md#describeagents) - Lists agents or connectors as specified by ID or other filters. All agents/connectors associated with your user account can be listed if you call <code>DescribeAgents</code> as is without passing any parameters.
* [describeConfigurations](docs/sdk/README.md#describeconfigurations) - <p>Retrieves attributes for a list of configuration item IDs.</p> <note> <p>All of the supplied IDs must be for the same asset type from one of the following:</p> <ul> <li> <p>server</p> </li> <li> <p>application</p> </li> <li> <p>process</p> </li> <li> <p>connection</p> </li> </ul> <p>Output fields are specific to the asset type specified. For example, the output for a <i>server</i> configuration item includes a list of attributes about the server, such as host name, operating system, number of network cards, etc.</p> <p>For a complete list of outputs for each asset type, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#DescribeConfigurations">Using the DescribeConfigurations Action</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> </note>
* [describeContinuousExports](docs/sdk/README.md#describecontinuousexports) - Lists exports as specified by ID. All continuous exports associated with your user account can be listed if you call <code>DescribeContinuousExports</code> as is without passing any parameters.
* [~~describeExportConfigurations~~](docs/sdk/README.md#describeexportconfigurations) -  <code>DescribeExportConfigurations</code> is deprecated. Use <a href="https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html">DescribeExportTasks</a>, instead. :warning: **Deprecated**
* [describeExportTasks](docs/sdk/README.md#describeexporttasks) - Retrieve status of one or more export tasks. You can retrieve the status of up to 100 export tasks.
* [describeImportTasks](docs/sdk/README.md#describeimporttasks) - Returns an array of import tasks for your account, including status information, times, IDs, the Amazon S3 Object URL for the import file, and more.
* [describeTags](docs/sdk/README.md#describetags) - <p>Retrieves a list of configuration items that have tags as specified by the key-value pairs, name and value, passed to the optional parameter <code>filters</code>.</p> <p>There are three valid tag filter names:</p> <ul> <li> <p>tagKey</p> </li> <li> <p>tagValue</p> </li> <li> <p>configurationId</p> </li> </ul> <p>Also, all configuration items associated with your user account that have tags can be listed if you call <code>DescribeTags</code> as is without passing any parameters.</p>
* [disassociateConfigurationItemsFromApplication](docs/sdk/README.md#disassociateconfigurationitemsfromapplication) - Disassociates one or more configuration items from an application.
* [~~exportConfigurations~~](docs/sdk/README.md#exportconfigurations) - <p>Deprecated. Use <code>StartExportTask</code> instead.</p> <p>Exports all discovered configuration data to an Amazon S3 bucket or an application that enables you to view and evaluate the data. Data includes tags and tag associations, processes, connections, servers, and system performance. This API returns an export ID that you can query using the <i>DescribeExportConfigurations</i> API. The system imposes a limit of two configuration exports in six hours.</p> :warning: **Deprecated**
* [getDiscoverySummary](docs/sdk/README.md#getdiscoverysummary) - <p>Retrieves a short summary of discovered assets.</p> <p>This API operation takes no request parameters and is called as is at the command prompt as shown in the example.</p>
* [listConfigurations](docs/sdk/README.md#listconfigurations) - Retrieves a list of configuration items as specified by the value passed to the required parameter <code>configurationType</code>. Optional filtering may be applied to refine search results.
* [listServerNeighbors](docs/sdk/README.md#listserverneighbors) - Retrieves a list of servers that are one network hop away from a specified server.
* [startContinuousExport](docs/sdk/README.md#startcontinuousexport) - Start the continuous flow of agent's discovered data into Amazon Athena.
* [startDataCollectionByAgentIds](docs/sdk/README.md#startdatacollectionbyagentids) - Instructs the specified agents or connectors to start collecting data.
* [startExportTask](docs/sdk/README.md#startexporttask) - <p> Begins the export of discovered data to an S3 bucket.</p> <p> If you specify <code>agentIds</code> in a filter, the task exports up to 72 hours of detailed data collected by the identified Application Discovery Agent, including network, process, and performance details. A time range for exported agent data may be set by using <code>startTime</code> and <code>endTime</code>. Export of detailed agent data is limited to five concurrently running exports. </p> <p> If you do not include an <code>agentIds</code> filter, summary data is exported that includes both Amazon Web Services Agentless Discovery Connector data and summary data from Amazon Web Services Discovery Agents. Export of summary data is limited to two exports per day. </p>
* [startImportTask](docs/sdk/README.md#startimporttask) - <p>Starts an import task, which allows you to import details of your on-premises environment directly into Amazon Web Services Migration Hub without having to use the Application Discovery Service (ADS) tools such as the Discovery Connector or Discovery Agent. This gives you the option to perform migration assessment and planning directly from your imported data, including the ability to group your devices as applications and track their migration status.</p> <p>To start an import request, do this:</p> <ol> <li> <p>Download the specially formatted comma separated value (CSV) import template, which you can find here: <a href="https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv">https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv</a>.</p> </li> <li> <p>Fill out the template with your server and application data.</p> </li> <li> <p>Upload your import file to an Amazon S3 bucket, and make a note of it's Object URL. Your import file must be in the CSV format.</p> </li> <li> <p>Use the console or the <code>StartImportTask</code> command with the Amazon Web Services CLI or one of the Amazon Web Services SDKs to import the records from your file.</p> </li> </ol> <p>For more information, including step-by-step procedures, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-import.html">Migration Hub Import</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> <note> <p>There are limits to the number of import tasks you can create (and delete) in an Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/ads_service_limits.html">Amazon Web Services Application Discovery Service Limits</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> </note>
* [stopContinuousExport](docs/sdk/README.md#stopcontinuousexport) - Stop the continuous flow of agent's discovered data into Amazon Athena.
* [stopDataCollectionByAgentIds](docs/sdk/README.md#stopdatacollectionbyagentids) - Instructs the specified agents or connectors to stop collecting data.
* [updateApplication](docs/sdk/README.md#updateapplication) - Updates metadata about an application.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
