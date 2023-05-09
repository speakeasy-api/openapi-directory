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
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateConfigurationItemsToApplicationRequest req = new AssociateConfigurationItemsToApplicationRequest(                new AssociateConfigurationItemsToApplicationRequest("debitis",                 new String[]{{
                                                add("delectus"),
                                            }});, AssociateConfigurationItemsToApplicationXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_ASSOCIATE_CONFIGURATION_ITEMS_TO_APPLICATION) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            AssociateConfigurationItemsToApplicationResponse res = sdk.sdk.associateConfigurationItemsToApplication(req);

            if (res.associateConfigurationItemsToApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDeleteImportData

<p>Deletes one or more import tasks, each identified by their import ID. Each import task has a number of records that can identify servers or applications. </p> <p>Amazon Web Services Application Discovery Service has built-in matching logic that will identify when discovered servers match existing entries that you've previously discovered, the information for the already-existing discovered server is updated. When you delete an import task that contains records that were used to match, the information in those matched records that comes from the deleted records will also be deleted.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDeleteImportDataRequest;
import org.openapis.openapi.models.operations.BatchDeleteImportDataResponse;
import org.openapis.openapi.models.operations.BatchDeleteImportDataXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchDeleteImportDataRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDeleteImportDataRequest req = new BatchDeleteImportDataRequest(                new BatchDeleteImportDataRequest(                new String[]{{
                                                add("recusandae"),
                                                add("temporibus"),
                                            }});, BatchDeleteImportDataXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_BATCH_DELETE_IMPORT_DATA) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "quis";
                xAmzCredential = "veritatis";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "repellendus";
            }};            

            BatchDeleteImportDataResponse res = sdk.sdk.batchDeleteImportData(req);

            if (res.batchDeleteImportDataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createApplication

Creates an application with the given name and description.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApplicationRequest;
import org.openapis.openapi.models.operations.CreateApplicationResponse;
import org.openapis.openapi.models.operations.CreateApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateApplicationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApplicationRequest req = new CreateApplicationRequest(                new CreateApplicationRequest("quo") {{
                                description = "odit";
                            }};, CreateApplicationXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_CREATE_APPLICATION) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "at";
                xAmzCredential = "maiores";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "quod";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "esse";
            }};            

            CreateApplicationResponse res = sdk.sdk.createApplication(req);

            if (res.createApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTags

<p>Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items.</p> <important> <p>Do not store sensitive information (like personal data) in tags.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTagsRequest;
import org.openapis.openapi.models.operations.CreateTagsResponse;
import org.openapis.openapi.models.operations.CreateTagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateTagsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTagsRequest req = new CreateTagsRequest(                new CreateTagsRequest(                new String[]{{
                                                add("dolorum"),
                                                add("dicta"),
                                                add("nam"),
                                                add("officia"),
                                            }},                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("hic", "optio") {{
                                                    key = "fugit";
                                                    value = "deleniti";
                                                }}),
                                                add(new Tag("commodi", "molestiae") {{
                                                    key = "totam";
                                                    value = "beatae";
                                                }}),
                                                add(new Tag("impedit", "cum") {{
                                                    key = "modi";
                                                    value = "qui";
                                                }}),
                                            }});, CreateTagsXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_CREATE_TAGS) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "excepturi";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "natus";
            }};            

            CreateTagsResponse res = sdk.sdk.createTags(req);

            if (res.createTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApplications

Deletes a list of applications and their associations with configuration items.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApplicationsRequest;
import org.openapis.openapi.models.operations.DeleteApplicationsResponse;
import org.openapis.openapi.models.operations.DeleteApplicationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteApplicationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApplicationsRequest req = new DeleteApplicationsRequest(                new DeleteApplicationsRequest(                new String[]{{
                                                add("dolor"),
                                                add("natus"),
                                                add("laboriosam"),
                                            }});, DeleteApplicationsXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_DELETE_APPLICATIONS) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "fuga";
                xAmzDate = "in";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "iure";
            }};            

            DeleteApplicationsResponse res = sdk.sdk.deleteApplications(req);

            if (res.deleteApplicationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTags

Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTagsRequest;
import org.openapis.openapi.models.operations.DeleteTagsResponse;
import org.openapis.openapi.models.operations.DeleteTagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteTagsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTagsRequest req = new DeleteTagsRequest(                new DeleteTagsRequest(                new String[]{{
                                                add("architecto"),
                                                add("ipsa"),
                                                add("reiciendis"),
                                            }}) {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("dolores", "dolorem") {{
                                        key = "mollitia";
                                        value = "laborum";
                                    }}),
                                    add(new Tag("nobis", "enim") {{
                                        key = "corporis";
                                        value = "explicabo";
                                    }}),
                                    add(new Tag("minima", "excepturi") {{
                                        key = "omnis";
                                        value = "nemo";
                                    }}),
                                }};
                            }};, DeleteTagsXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_DELETE_TAGS) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "iure";
                xAmzCredential = "culpa";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "mollitia";
            }};            

            DeleteTagsResponse res = sdk.sdk.deleteTags(req);

            if (res.deleteTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAgents

Lists agents or connectors as specified by ID or other filters. All agents/connectors associated with your user account can be listed if you call <code>DescribeAgents</code> as is without passing any parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAgentsRequest;
import org.openapis.openapi.models.operations.DescribeAgentsResponse;
import org.openapis.openapi.models.operations.DescribeAgentsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAgentsRequest;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAgentsRequest req = new DescribeAgentsRequest(                new DescribeAgentsRequest() {{
                                agentIds = new String[]{{
                                    add("consequuntur"),
                                    add("repellat"),
                                    add("mollitia"),
                                }};
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("vitae", "laborum",                 new String[]{{
                                                        add("enim"),
                                                        add("odit"),
                                                        add("quo"),
                                                    }}) {{
                                        condition = "numquam";
                                        name = "Claudia Krajcik";
                                        values = new String[]{{
                                            add("quis"),
                                        }};
                                    }}),
                                    add(new Filter("reiciendis", "voluptatibus",                 new String[]{{
                                                        add("nihil"),
                                                        add("praesentium"),
                                                        add("voluptatibus"),
                                                        add("ipsa"),
                                                    }}) {{
                                        condition = "sequi";
                                        name = "Vernon Ondricka Sr.";
                                        values = new String[]{{
                                            add("temporibus"),
                                            add("laborum"),
                                            add("quasi"),
                                        }};
                                    }}),
                                    add(new Filter("dicta", "harum",                 new String[]{{
                                                        add("accusamus"),
                                                        add("commodi"),
                                                    }}) {{
                                        condition = "omnis";
                                        name = "Ms. Karla Aufderhar";
                                        values = new String[]{{
                                            add("dicta"),
                                            add("corporis"),
                                            add("dolore"),
                                            add("iusto"),
                                        }};
                                    }}),
                                }};
                                maxResults = 918236L;
                                nextToken = "quae";
                            }};, DescribeAgentsXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_DESCRIBE_AGENTS) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "molestias";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "praesentium";
            }};            

            DescribeAgentsResponse res = sdk.sdk.describeAgents(req);

            if (res.describeAgentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConfigurations

<p>Retrieves attributes for a list of configuration item IDs.</p> <note> <p>All of the supplied IDs must be for the same asset type from one of the following:</p> <ul> <li> <p>server</p> </li> <li> <p>application</p> </li> <li> <p>process</p> </li> <li> <p>connection</p> </li> </ul> <p>Output fields are specific to the asset type specified. For example, the output for a <i>server</i> configuration item includes a list of attributes about the server, such as host name, operating system, number of network cards, etc.</p> <p>For a complete list of outputs for each asset type, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#DescribeConfigurations">Using the DescribeConfigurations Action</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConfigurationsRequest;
import org.openapis.openapi.models.operations.DescribeConfigurationsResponse;
import org.openapis.openapi.models.operations.DescribeConfigurationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeConfigurationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConfigurationsRequest req = new DescribeConfigurationsRequest(                new DescribeConfigurationsRequest(                new String[]{{
                                                add("quasi"),
                                                add("repudiandae"),
                                                add("sint"),
                                                add("veritatis"),
                                            }});, DescribeConfigurationsXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_DESCRIBE_CONFIGURATIONS) {{
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "enim";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "explicabo";
            }};            

            DescribeConfigurationsResponse res = sdk.sdk.describeConfigurations(req);

            if (res.describeConfigurationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeContinuousExports

Lists exports as specified by ID. All continuous exports associated with your user account can be listed if you call <code>DescribeContinuousExports</code> as is without passing any parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeContinuousExportsRequest;
import org.openapis.openapi.models.operations.DescribeContinuousExportsResponse;
import org.openapis.openapi.models.operations.DescribeContinuousExportsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeContinuousExportsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeContinuousExportsRequest req = new DescribeContinuousExportsRequest(                new DescribeContinuousExportsRequest() {{
                                exportIds = new String[]{{
                                    add("quibusdam"),
                                    add("labore"),
                                    add("modi"),
                                }};
                                maxResults = 183191L;
                                nextToken = "aliquid";
                            }};, DescribeContinuousExportsXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_DESCRIBE_CONTINUOUS_EXPORTS) {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "quos";
                xAmzCredential = "perferendis";
                xAmzDate = "magni";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "alias";
                maxResults = "fugit";
                nextToken = "dolorum";
            }};            

            DescribeContinuousExportsResponse res = sdk.sdk.describeContinuousExports(req);

            if (res.describeContinuousExportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~describeExportConfigurations~~

 <code>DescribeExportConfigurations</code> is deprecated. Use <a href="https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html">DescribeExportTasks</a>, instead.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeExportConfigurationsRequest;
import org.openapis.openapi.models.operations.DescribeExportConfigurationsResponse;
import org.openapis.openapi.models.operations.DescribeExportConfigurationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeExportConfigurationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeExportConfigurationsRequest req = new DescribeExportConfigurationsRequest(                new DescribeExportConfigurationsRequest() {{
                                exportIds = new String[]{{
                                    add("facilis"),
                                    add("tempore"),
                                }};
                                maxResults = 288476L;
                                nextToken = "delectus";
                            }};, DescribeExportConfigurationsXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_DESCRIBE_EXPORT_CONFIGURATIONS) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "non";
                xAmzCredential = "eligendi";
                xAmzDate = "sint";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            DescribeExportConfigurationsResponse res = sdk.sdk.describeExportConfigurations(req);

            if (res.describeExportConfigurationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeExportTasks

Retrieve status of one or more export tasks. You can retrieve the status of up to 100 export tasks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeExportTasksRequest;
import org.openapis.openapi.models.operations.DescribeExportTasksResponse;
import org.openapis.openapi.models.operations.DescribeExportTasksXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeExportTasksRequest;
import org.openapis.openapi.models.shared.ExportFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeExportTasksRequest req = new DescribeExportTasksRequest(                new DescribeExportTasksRequest() {{
                                exportIds = new String[]{{
                                    add("dolor"),
                                    add("debitis"),
                                    add("a"),
                                }};
                                filters = new org.openapis.openapi.models.shared.ExportFilter[]{{
                                    add(new ExportFilter("accusamus", "non",                 new String[]{{
                                                        add("enim"),
                                                        add("accusamus"),
                                                        add("delectus"),
                                                    }}) {{
                                        condition = "in";
                                        name = "Angel Wolff II";
                                        values = new String[]{{
                                            add("facere"),
                                            add("ea"),
                                            add("aliquid"),
                                            add("laborum"),
                                        }};
                                    }}),
                                    add(new ExportFilter("natus", "omnis",                 new String[]{{
                                                        add("perferendis"),
                                                        add("nihil"),
                                                    }}) {{
                                        condition = "quidem";
                                        name = "Marco Olson";
                                        values = new String[]{{
                                            add("amet"),
                                            add("deserunt"),
                                            add("nisi"),
                                            add("vel"),
                                        }};
                                    }}),
                                    add(new ExportFilter("aspernatur", "architecto",                 new String[]{{
                                                        add("et"),
                                                        add("excepturi"),
                                                    }}) {{
                                        condition = "magnam";
                                        name = "Alfonso Green";
                                        values = new String[]{{
                                            add("nobis"),
                                            add("eum"),
                                            add("vero"),
                                        }};
                                    }}),
                                }};
                                maxResults = 354047L;
                                nextToken = "provident";
                            }};, DescribeExportTasksXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_DESCRIBE_EXPORT_TASKS) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "sint";
                xAmzCredential = "accusantium";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "ad";
            }};            

            DescribeExportTasksResponse res = sdk.sdk.describeExportTasks(req);

            if (res.describeExportTasksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeImportTasks

Returns an array of import tasks for your account, including status information, times, IDs, the Amazon S3 Object URL for the import file, and more.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeImportTasksRequest;
import org.openapis.openapi.models.operations.DescribeImportTasksResponse;
import org.openapis.openapi.models.operations.DescribeImportTasksXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeImportTasksRequest;
import org.openapis.openapi.models.shared.ImportTaskFilter;
import org.openapis.openapi.models.shared.ImportTaskFilterNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeImportTasksRequest req = new DescribeImportTasksRequest(                new DescribeImportTasksRequest() {{
                                filters = new org.openapis.openapi.models.shared.ImportTaskFilter[]{{
                                    add(new ImportTaskFilter() {{
                                        name = ImportTaskFilterNameEnum.NAME;
                                        values = new String[]{{
                                            add("nemo"),
                                        }};
                                    }}),
                                }};
                                maxResults = 97260L;
                                nextToken = "iure";
                            }};, DescribeImportTasksXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_DESCRIBE_IMPORT_TASKS) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "eius";
                xAmzDate = "maxime";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "in";
                maxResults = "architecto";
                nextToken = "architecto";
            }};            

            DescribeImportTasksResponse res = sdk.sdk.describeImportTasks(req);

            if (res.describeImportTasksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTags

<p>Retrieves a list of configuration items that have tags as specified by the key-value pairs, name and value, passed to the optional parameter <code>filters</code>.</p> <p>There are three valid tag filter names:</p> <ul> <li> <p>tagKey</p> </li> <li> <p>tagValue</p> </li> <li> <p>configurationId</p> </li> </ul> <p>Also, all configuration items associated with your user account that have tags can be listed if you call <code>DescribeTags</code> as is without passing any parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTagsRequest;
import org.openapis.openapi.models.operations.DescribeTagsResponse;
import org.openapis.openapi.models.operations.DescribeTagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeTagsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTagsRequest req = new DescribeTagsRequest(                new DescribeTagsRequest() {{
                                filters = new org.openapis.openapi.models.shared.TagFilter[]{{
                                    add(new TagFilter("natus",                 new String[]{{
                                                        add("sunt"),
                                                    }}) {{
                                        name = "Jessie Zulauf";
                                        values = new String[]{{
                                            add("pariatur"),
                                            add("accusantium"),
                                            add("consequuntur"),
                                            add("praesentium"),
                                        }};
                                    }}),
                                    add(new TagFilter("ab",                 new String[]{{
                                                        add("quidem"),
                                                        add("ipsam"),
                                                        add("voluptate"),
                                                        add("autem"),
                                                    }}) {{
                                        name = "Gilberto Streich";
                                        values = new String[]{{
                                            add("odit"),
                                            add("ea"),
                                            add("accusantium"),
                                        }};
                                    }}),
                                }};
                                maxResults = 722056L;
                                nextToken = "eaque";
                            }};, DescribeTagsXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_DESCRIBE_TAGS) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "voluptatibus";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "aut";
            }};            

            DescribeTagsResponse res = sdk.sdk.describeTags(req);

            if (res.describeTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateConfigurationItemsFromApplication

Disassociates one or more configuration items from an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateConfigurationItemsFromApplicationRequest;
import org.openapis.openapi.models.operations.DisassociateConfigurationItemsFromApplicationResponse;
import org.openapis.openapi.models.operations.DisassociateConfigurationItemsFromApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateConfigurationItemsFromApplicationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateConfigurationItemsFromApplicationRequest req = new DisassociateConfigurationItemsFromApplicationRequest(                new DisassociateConfigurationItemsFromApplicationRequest("corporis",                 new String[]{{
                                                add("libero"),
                                                add("nobis"),
                                                add("dolores"),
                                                add("quis"),
                                            }});, DisassociateConfigurationItemsFromApplicationXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_DISASSOCIATE_CONFIGURATION_ITEMS_FROM_APPLICATION) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "eaque";
                xAmzDate = "quis";
                xAmzSecurityToken = "nesciunt";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "perferendis";
            }};            

            DisassociateConfigurationItemsFromApplicationResponse res = sdk.sdk.disassociateConfigurationItemsFromApplication(req);

            if (res.disassociateConfigurationItemsFromApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~exportConfigurations~~

<p>Deprecated. Use <code>StartExportTask</code> instead.</p> <p>Exports all discovered configuration data to an Amazon S3 bucket or an application that enables you to view and evaluate the data. Data includes tags and tag associations, processes, connections, servers, and system performance. This API returns an export ID that you can query using the <i>DescribeExportConfigurations</i> API. The system imposes a limit of two configuration exports in six hours.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportConfigurationsRequest;
import org.openapis.openapi.models.operations.ExportConfigurationsResponse;
import org.openapis.openapi.models.operations.ExportConfigurationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExportConfigurationsRequest req = new ExportConfigurationsRequest(ExportConfigurationsXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_EXPORT_CONFIGURATIONS) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "quam";
                xAmzCredential = "dolor";
                xAmzDate = "vero";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "recusandae";
            }};            

            ExportConfigurationsResponse res = sdk.sdk.exportConfigurations(req);

            if (res.exportConfigurationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDiscoverySummary

<p>Retrieves a short summary of discovered assets.</p> <p>This API operation takes no request parameters and is called as is at the command prompt as shown in the example.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDiscoverySummaryRequest;
import org.openapis.openapi.models.operations.GetDiscoverySummaryResponse;
import org.openapis.openapi.models.operations.GetDiscoverySummaryXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDiscoverySummaryRequest req = new GetDiscoverySummaryRequest(                new java.util.HashMap<String, Object>() {{
                                put("perspiciatis", "voluptatem");
                                put("porro", "consequuntur");
                                put("blanditiis", "error");
                            }}, GetDiscoverySummaryXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_GET_DISCOVERY_SUMMARY) {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "rerum";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "modi";
            }};            

            GetDiscoverySummaryResponse res = sdk.sdk.getDiscoverySummary(req);

            if (res.getDiscoverySummaryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConfigurations

Retrieves a list of configuration items as specified by the value passed to the required parameter <code>configurationType</code>. Optional filtering may be applied to refine search results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConfigurationsRequest;
import org.openapis.openapi.models.operations.ListConfigurationsResponse;
import org.openapis.openapi.models.operations.ListConfigurationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConfigurationItemTypeEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.ListConfigurationsRequest;
import org.openapis.openapi.models.shared.OrderByElement;
import org.openapis.openapi.models.shared.OrderStringEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListConfigurationsRequest req = new ListConfigurationsRequest(                new ListConfigurationsRequest(ConfigurationItemTypeEnum.CONNECTION) {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("dolor", "qui",                 new String[]{{
                                                        add("hic"),
                                                    }}) {{
                                        condition = "pariatur";
                                        name = "Loren Renner";
                                        values = new String[]{{
                                            add("aliquid"),
                                            add("dolorem"),
                                            add("dolorem"),
                                        }};
                                    }}),
                                    add(new Filter("ipsa", "iure",                 new String[]{{
                                                        add("quaerat"),
                                                        add("accusamus"),
                                                    }}) {{
                                        condition = "excepturi";
                                        name = "Adrian Kuhn";
                                        values = new String[]{{
                                            add("numquam"),
                                            add("veritatis"),
                                            add("ipsa"),
                                        }};
                                    }}),
                                    add(new Filter("ab", "soluta",                 new String[]{{
                                                        add("iusto"),
                                                        add("voluptate"),
                                                        add("dolorum"),
                                                    }}) {{
                                        condition = "quidem";
                                        name = "Hector Mosciski";
                                        values = new String[]{{
                                            add("fugiat"),
                                        }};
                                    }}),
                                }};
                                maxResults = 536579L;
                                nextToken = "omnis";
                                orderBy = new org.openapis.openapi.models.shared.OrderByElement[]{{
                                    add(new OrderByElement("nihil") {{
                                        fieldName = "distinctio";
                                        sortOrder = OrderStringEnum.DESC;
                                    }}),
                                    add(new OrderByElement("id") {{
                                        fieldName = "ipsum";
                                        sortOrder = OrderStringEnum.ASC;
                                    }}),
                                    add(new OrderByElement("aspernatur") {{
                                        fieldName = "saepe";
                                        sortOrder = OrderStringEnum.ASC;
                                    }}),
                                    add(new OrderByElement("optio") {{
                                        fieldName = "perferendis";
                                        sortOrder = OrderStringEnum.ASC;
                                    }}),
                                }};
                            }};, ListConfigurationsXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_LIST_CONFIGURATIONS) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "ad";
                xAmzCredential = "saepe";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "minima";
            }};            

            ListConfigurationsResponse res = sdk.sdk.listConfigurations(req);

            if (res.listConfigurationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServerNeighbors

Retrieves a list of servers that are one network hop away from a specified server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServerNeighborsRequest;
import org.openapis.openapi.models.operations.ListServerNeighborsResponse;
import org.openapis.openapi.models.operations.ListServerNeighborsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListServerNeighborsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServerNeighborsRequest req = new ListServerNeighborsRequest(                new ListServerNeighborsRequest("totam") {{
                                maxResults = 628982L;
                                neighborConfigurationIds = new String[]{{
                                    add("at"),
                                }};
                                nextToken = "quaerat";
                                portInformationNeeded = false;
                            }};, ListServerNeighborsXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_LIST_SERVER_NEIGHBORS) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "vel";
                xAmzCredential = "quod";
                xAmzDate = "officiis";
                xAmzSecurityToken = "qui";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "a";
            }};            

            ListServerNeighborsResponse res = sdk.sdk.listServerNeighbors(req);

            if (res.listServerNeighborsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startContinuousExport

Start the continuous flow of agent's discovered data into Amazon Athena.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartContinuousExportRequest;
import org.openapis.openapi.models.operations.StartContinuousExportResponse;
import org.openapis.openapi.models.operations.StartContinuousExportXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartContinuousExportRequest req = new StartContinuousExportRequest(                new java.util.HashMap<String, Object>() {{
                                put("iusto", "ipsum");
                                put("quisquam", "tenetur");
                                put("amet", "tempore");
                            }}, StartContinuousExportXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_START_CONTINUOUS_EXPORT) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "enim";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "nihil";
            }};            

            StartContinuousExportResponse res = sdk.sdk.startContinuousExport(req);

            if (res.startContinuousExportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startDataCollectionByAgentIds

Instructs the specified agents or connectors to start collecting data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartDataCollectionByAgentIdsRequest;
import org.openapis.openapi.models.operations.StartDataCollectionByAgentIdsResponse;
import org.openapis.openapi.models.operations.StartDataCollectionByAgentIdsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartDataCollectionByAgentIdsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartDataCollectionByAgentIdsRequest req = new StartDataCollectionByAgentIdsRequest(                new StartDataCollectionByAgentIdsRequest(                new String[]{{
                                                add("neque"),
                                                add("sed"),
                                                add("vel"),
                                            }});, StartDataCollectionByAgentIdsXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_START_DATA_COLLECTION_BY_AGENT_IDS) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "deserunt";
                xAmzDate = "quam";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "qui";
            }};            

            StartDataCollectionByAgentIdsResponse res = sdk.sdk.startDataCollectionByAgentIds(req);

            if (res.startDataCollectionByAgentIdsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startExportTask

<p> Begins the export of discovered data to an S3 bucket.</p> <p> If you specify <code>agentIds</code> in a filter, the task exports up to 72 hours of detailed data collected by the identified Application Discovery Agent, including network, process, and performance details. A time range for exported agent data may be set by using <code>startTime</code> and <code>endTime</code>. Export of detailed agent data is limited to five concurrently running exports. </p> <p> If you do not include an <code>agentIds</code> filter, summary data is exported that includes both Amazon Web Services Agentless Discovery Connector data and summary data from Amazon Web Services Discovery Agents. Export of summary data is limited to two exports per day. </p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartExportTaskRequest;
import org.openapis.openapi.models.operations.StartExportTaskResponse;
import org.openapis.openapi.models.operations.StartExportTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.ExportDataFormatEnum;
import org.openapis.openapi.models.shared.ExportFilter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartExportTaskRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartExportTaskRequest req = new StartExportTaskRequest(                new StartExportTaskRequest() {{
                                endTime = OffsetDateTime.parse("2020-05-30T01:52:29.137Z");
                                exportDataFormat = new org.openapis.openapi.models.shared.ExportDataFormatEnum[]{{
                                    add(ExportDataFormatEnum.CSV),
                                    add(ExportDataFormatEnum.GRAPHML),
                                    add(ExportDataFormatEnum.GRAPHML),
                                }};
                                filters = new org.openapis.openapi.models.shared.ExportFilter[]{{
                                    add(new ExportFilter("fugit", "magni",                 new String[]{{
                                                        add("sunt"),
                                                        add("ullam"),
                                                    }}) {{
                                        condition = "aspernatur";
                                        name = "Verna Purdy";
                                        values = new String[]{{
                                            add("temporibus"),
                                            add("qui"),
                                            add("neque"),
                                        }};
                                    }}),
                                    add(new ExportFilter("ipsum", "veritatis",                 new String[]{{
                                                        add("quos"),
                                                        add("tempore"),
                                                        add("cupiditate"),
                                                    }}) {{
                                        condition = "nam";
                                        name = "George Runolfsdottir";
                                        values = new String[]{{
                                            add("saepe"),
                                        }};
                                    }}),
                                }};
                                startTime = OffsetDateTime.parse("2022-01-14T21:26:14.171Z");
                            }};, StartExportTaskXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_START_EXPORT_TASK) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "labore";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "quae";
            }};            

            StartExportTaskResponse res = sdk.sdk.startExportTask(req);

            if (res.startExportTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startImportTask

<p>Starts an import task, which allows you to import details of your on-premises environment directly into Amazon Web Services Migration Hub without having to use the Application Discovery Service (ADS) tools such as the Discovery Connector or Discovery Agent. This gives you the option to perform migration assessment and planning directly from your imported data, including the ability to group your devices as applications and track their migration status.</p> <p>To start an import request, do this:</p> <ol> <li> <p>Download the specially formatted comma separated value (CSV) import template, which you can find here: <a href="https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv">https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv</a>.</p> </li> <li> <p>Fill out the template with your server and application data.</p> </li> <li> <p>Upload your import file to an Amazon S3 bucket, and make a note of it's Object URL. Your import file must be in the CSV format.</p> </li> <li> <p>Use the console or the <code>StartImportTask</code> command with the Amazon Web Services CLI or one of the Amazon Web Services SDKs to import the records from your file.</p> </li> </ol> <p>For more information, including step-by-step procedures, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-import.html">Migration Hub Import</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> <note> <p>There are limits to the number of import tasks you can create (and delete) in an Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/ads_service_limits.html">Amazon Web Services Application Discovery Service Limits</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartImportTaskRequest;
import org.openapis.openapi.models.operations.StartImportTaskResponse;
import org.openapis.openapi.models.operations.StartImportTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartImportTaskRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartImportTaskRequest req = new StartImportTaskRequest(                new StartImportTaskRequest("quas", "itaque") {{
                                clientRequestToken = "consequatur";
                            }};, StartImportTaskXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_START_IMPORT_TASK) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "porro";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "ut";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "cupiditate";
            }};            

            StartImportTaskResponse res = sdk.sdk.startImportTask(req);

            if (res.startImportTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopContinuousExport

Stop the continuous flow of agent's discovered data into Amazon Athena.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopContinuousExportRequest;
import org.openapis.openapi.models.operations.StopContinuousExportResponse;
import org.openapis.openapi.models.operations.StopContinuousExportXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopContinuousExportRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopContinuousExportRequest req = new StopContinuousExportRequest(                new StopContinuousExportRequest("quae");, StopContinuousExportXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_STOP_CONTINUOUS_EXPORT) {{
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "odio";
                xAmzCredential = "occaecati";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "omnis";
            }};            

            StopContinuousExportResponse res = sdk.sdk.stopContinuousExport(req);

            if (res.stopContinuousExportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopDataCollectionByAgentIds

Instructs the specified agents or connectors to stop collecting data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopDataCollectionByAgentIdsRequest;
import org.openapis.openapi.models.operations.StopDataCollectionByAgentIdsResponse;
import org.openapis.openapi.models.operations.StopDataCollectionByAgentIdsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopDataCollectionByAgentIdsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopDataCollectionByAgentIdsRequest req = new StopDataCollectionByAgentIdsRequest(                new StopDataCollectionByAgentIdsRequest(                new String[]{{
                                                add("delectus"),
                                            }});, StopDataCollectionByAgentIdsXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_STOP_DATA_COLLECTION_BY_AGENT_IDS) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "vero";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "distinctio";
            }};            

            StopDataCollectionByAgentIdsResponse res = sdk.sdk.stopDataCollectionByAgentIds(req);

            if (res.stopDataCollectionByAgentIdsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateApplication

Updates metadata about an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApplicationRequest;
import org.openapis.openapi.models.operations.UpdateApplicationResponse;
import org.openapis.openapi.models.operations.UpdateApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateApplicationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateApplicationRequest req = new UpdateApplicationRequest(                new UpdateApplicationRequest("odio") {{
                                description = "similique";
                                name = "Hugo Kuphal";
                            }};, UpdateApplicationXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_UPDATE_APPLICATION) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "natus";
                xAmzDate = "impedit";
                xAmzSecurityToken = "aut";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "exercitationem";
            }};            

            UpdateApplicationResponse res = sdk.sdk.updateApplication(req);

            if (res.updateApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
