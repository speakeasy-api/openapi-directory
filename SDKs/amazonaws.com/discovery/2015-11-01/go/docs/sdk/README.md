# SDK

## Overview

<fullname>Amazon Web Services Application Discovery Service</fullname> <p>Amazon Web Services Application Discovery Service helps you plan application migration projects. It automatically identifies servers, virtual machines (VMs), and network dependencies in your on-premises data centers. For more information, see the <a href="http://aws.amazon.com/application-discovery/faqs/">Amazon Web Services Application Discovery Service FAQ</a>. Application Discovery Service offers three ways of performing discovery and collecting data about your on-premises servers:</p> <ul> <li> <p> <b>Agentless discovery</b> is recommended for environments that use VMware vCenter Server. This mode doesn't require you to install an agent on each host. It does not work in non-VMware environments.</p> <ul> <li> <p>Agentless discovery gathers server information regardless of the operating systems, which minimizes the time required for initial on-premises infrastructure assessment.</p> </li> <li> <p>Agentless discovery doesn't collect information about network dependencies, only agent-based discovery collects that information.</p> </li> </ul> </li> </ul> <ul> <li> <p> <b>Agent-based discovery</b> collects a richer set of data than agentless discovery by using the Amazon Web Services Application Discovery Agent, which you install on one or more hosts in your data center.</p> <ul> <li> <p> The agent captures infrastructure and application information, including an inventory of running processes, system performance information, resource utilization, and network dependencies.</p> </li> <li> <p>The information collected by agents is secured at rest and in transit to the Application Discovery Service database in the cloud. </p> </li> </ul> </li> </ul> <ul> <li> <p> <b>Amazon Web Services Partner Network (APN) solutions</b> integrate with Application Discovery Service, enabling you to import details of your on-premises environment directly into Migration Hub without using the discovery connector or discovery agent.</p> <ul> <li> <p>Third-party application discovery tools can query Amazon Web Services Application Discovery Service, and they can write to the Application Discovery Service database using the public API.</p> </li> <li> <p>In this way, you can import data into Migration Hub and view it, so that you can associate applications with servers and track migrations.</p> </li> </ul> </li> </ul> <p> <b>Recommendations</b> </p> <p>We recommend that you use agent-based discovery for non-VMware environments, and whenever you want to collect information about network dependencies. You can run agent-based and agentless discovery simultaneously. Use agentless discovery to complete the initial infrastructure assessment quickly, and then install agents on select hosts to collect additional information.</p> <p> <b>Working With This Guide</b> </p> <p>This API reference provides descriptions, syntax, and usage examples for each of the actions and data types for Application Discovery Service. The topic for each action shows the API request parameters and the response. Alternatively, you can use one of the Amazon Web Services SDKs to access an API that is tailored to the programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p> <note> <ul> <li> <p>Remember that you must set your Migration Hub home region before you call any of these APIs.</p> </li> <li> <p>You must make API calls for write actions (create, notify, associate, disassociate, import, or put) while in your home region, or a <code>HomeRegionNotSetException</code> error is returned.</p> </li> <li> <p>API calls for read actions (list, describe, stop, and delete) are permitted outside of your home region.</p> </li> <li> <p>Although it is unlikely, the Migration Hub home region could change. If you call APIs outside the home region, an <code>InvalidInputException</code> is returned.</p> </li> <li> <p>You must call <code>GetHomeRegion</code> to obtain the latest Migration Hub home region.</p> </li> </ul> </note> <p>This guide is intended for use with the <a href="http://docs.aws.amazon.com/application-discovery/latest/userguide/">Amazon Web Services Application Discovery Service User Guide</a>.</p> <important> <p>All data is handled according to the <a href="http://aws.amazon.com/privacy/">Amazon Web Services Privacy Policy</a>. You can operate Application Discovery Service offline to inspect collected data before it is shared with the service.</p> </important>

Amazon Web Services documentation
<https://docs.aws.amazon.com/discovery/>
### Available Operations

* [AssociateConfigurationItemsToApplication](#associateconfigurationitemstoapplication) - Associates one or more configuration items with an application.
* [BatchDeleteImportData](#batchdeleteimportdata) - <p>Deletes one or more import tasks, each identified by their import ID. Each import task has a number of records that can identify servers or applications. </p> <p>Amazon Web Services Application Discovery Service has built-in matching logic that will identify when discovered servers match existing entries that you've previously discovered, the information for the already-existing discovered server is updated. When you delete an import task that contains records that were used to match, the information in those matched records that comes from the deleted records will also be deleted.</p>
* [CreateApplication](#createapplication) - Creates an application with the given name and description.
* [CreateTags](#createtags) - <p>Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items.</p> <important> <p>Do not store sensitive information (like personal data) in tags.</p> </important>
* [DeleteApplications](#deleteapplications) - Deletes a list of applications and their associations with configuration items.
* [DeleteTags](#deletetags) - Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.
* [DescribeAgents](#describeagents) - Lists agents or connectors as specified by ID or other filters. All agents/connectors associated with your user account can be listed if you call <code>DescribeAgents</code> as is without passing any parameters.
* [DescribeConfigurations](#describeconfigurations) - <p>Retrieves attributes for a list of configuration item IDs.</p> <note> <p>All of the supplied IDs must be for the same asset type from one of the following:</p> <ul> <li> <p>server</p> </li> <li> <p>application</p> </li> <li> <p>process</p> </li> <li> <p>connection</p> </li> </ul> <p>Output fields are specific to the asset type specified. For example, the output for a <i>server</i> configuration item includes a list of attributes about the server, such as host name, operating system, number of network cards, etc.</p> <p>For a complete list of outputs for each asset type, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#DescribeConfigurations">Using the DescribeConfigurations Action</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> </note>
* [DescribeContinuousExports](#describecontinuousexports) - Lists exports as specified by ID. All continuous exports associated with your user account can be listed if you call <code>DescribeContinuousExports</code> as is without passing any parameters.
* [~~DescribeExportConfigurations~~](#describeexportconfigurations) -  <code>DescribeExportConfigurations</code> is deprecated. Use <a href="https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html">DescribeExportTasks</a>, instead. :warning: **Deprecated**
* [DescribeExportTasks](#describeexporttasks) - Retrieve status of one or more export tasks. You can retrieve the status of up to 100 export tasks.
* [DescribeImportTasks](#describeimporttasks) - Returns an array of import tasks for your account, including status information, times, IDs, the Amazon S3 Object URL for the import file, and more.
* [DescribeTags](#describetags) - <p>Retrieves a list of configuration items that have tags as specified by the key-value pairs, name and value, passed to the optional parameter <code>filters</code>.</p> <p>There are three valid tag filter names:</p> <ul> <li> <p>tagKey</p> </li> <li> <p>tagValue</p> </li> <li> <p>configurationId</p> </li> </ul> <p>Also, all configuration items associated with your user account that have tags can be listed if you call <code>DescribeTags</code> as is without passing any parameters.</p>
* [DisassociateConfigurationItemsFromApplication](#disassociateconfigurationitemsfromapplication) - Disassociates one or more configuration items from an application.
* [~~ExportConfigurations~~](#exportconfigurations) - <p>Deprecated. Use <code>StartExportTask</code> instead.</p> <p>Exports all discovered configuration data to an Amazon S3 bucket or an application that enables you to view and evaluate the data. Data includes tags and tag associations, processes, connections, servers, and system performance. This API returns an export ID that you can query using the <i>DescribeExportConfigurations</i> API. The system imposes a limit of two configuration exports in six hours.</p> :warning: **Deprecated**
* [GetDiscoverySummary](#getdiscoverysummary) - <p>Retrieves a short summary of discovered assets.</p> <p>This API operation takes no request parameters and is called as is at the command prompt as shown in the example.</p>
* [ListConfigurations](#listconfigurations) - Retrieves a list of configuration items as specified by the value passed to the required parameter <code>configurationType</code>. Optional filtering may be applied to refine search results.
* [ListServerNeighbors](#listserverneighbors) - Retrieves a list of servers that are one network hop away from a specified server.
* [StartContinuousExport](#startcontinuousexport) - Start the continuous flow of agent's discovered data into Amazon Athena.
* [StartDataCollectionByAgentIds](#startdatacollectionbyagentids) - Instructs the specified agents or connectors to start collecting data.
* [StartExportTask](#startexporttask) - <p> Begins the export of discovered data to an S3 bucket.</p> <p> If you specify <code>agentIds</code> in a filter, the task exports up to 72 hours of detailed data collected by the identified Application Discovery Agent, including network, process, and performance details. A time range for exported agent data may be set by using <code>startTime</code> and <code>endTime</code>. Export of detailed agent data is limited to five concurrently running exports. </p> <p> If you do not include an <code>agentIds</code> filter, summary data is exported that includes both Amazon Web Services Agentless Discovery Connector data and summary data from Amazon Web Services Discovery Agents. Export of summary data is limited to two exports per day. </p>
* [StartImportTask](#startimporttask) - <p>Starts an import task, which allows you to import details of your on-premises environment directly into Amazon Web Services Migration Hub without having to use the Application Discovery Service (ADS) tools such as the Discovery Connector or Discovery Agent. This gives you the option to perform migration assessment and planning directly from your imported data, including the ability to group your devices as applications and track their migration status.</p> <p>To start an import request, do this:</p> <ol> <li> <p>Download the specially formatted comma separated value (CSV) import template, which you can find here: <a href="https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv">https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv</a>.</p> </li> <li> <p>Fill out the template with your server and application data.</p> </li> <li> <p>Upload your import file to an Amazon S3 bucket, and make a note of it's Object URL. Your import file must be in the CSV format.</p> </li> <li> <p>Use the console or the <code>StartImportTask</code> command with the Amazon Web Services CLI or one of the Amazon Web Services SDKs to import the records from your file.</p> </li> </ol> <p>For more information, including step-by-step procedures, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-import.html">Migration Hub Import</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> <note> <p>There are limits to the number of import tasks you can create (and delete) in an Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/ads_service_limits.html">Amazon Web Services Application Discovery Service Limits</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> </note>
* [StopContinuousExport](#stopcontinuousexport) - Stop the continuous flow of agent's discovered data into Amazon Athena.
* [StopDataCollectionByAgentIds](#stopdatacollectionbyagentids) - Instructs the specified agents or connectors to stop collecting data.
* [UpdateApplication](#updateapplication) - Updates metadata about an application.

## AssociateConfigurationItemsToApplication

Associates one or more configuration items with an application.

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
    res, err := s.SDK.AssociateConfigurationItemsToApplication(ctx, operations.AssociateConfigurationItemsToApplicationRequest{
        AssociateConfigurationItemsToApplicationRequest: shared.AssociateConfigurationItemsToApplicationRequest{
            ApplicationConfigurationID: "iure",
            ConfigurationIds: []string{
                "debitis",
                "ipsa",
            },
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("placeat"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
        XAmzTarget: operations.AssociateConfigurationItemsToApplicationXAmzTargetEnumAwsPoseidonServiceV20151101AssociateConfigurationItemsToApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateConfigurationItemsToApplicationResponse != nil {
        // handle response
    }
}
```

## BatchDeleteImportData

<p>Deletes one or more import tasks, each identified by their import ID. Each import task has a number of records that can identify servers or applications. </p> <p>Amazon Web Services Application Discovery Service has built-in matching logic that will identify when discovered servers match existing entries that you've previously discovered, the information for the already-existing discovered server is updated. When you delete an import task that contains records that were used to match, the information in those matched records that comes from the deleted records will also be deleted.</p>

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
    res, err := s.SDK.BatchDeleteImportData(ctx, operations.BatchDeleteImportDataRequest{
        BatchDeleteImportDataRequest: shared.BatchDeleteImportDataRequest{
            ImportTaskIds: []string{
                "excepturi",
                "nisi",
            },
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.BatchDeleteImportDataXAmzTargetEnumAwsPoseidonServiceV20151101BatchDeleteImportData,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteImportDataResponse != nil {
        // handle response
    }
}
```

## CreateApplication

Creates an application with the given name and description.

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
    res, err := s.SDK.CreateApplication(ctx, operations.CreateApplicationRequest{
        CreateApplicationRequest: shared.CreateApplicationRequest{
            Description: sdk.String("ipsam"),
            Name: "Timmy Satterfield",
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.CreateApplicationXAmzTargetEnumAwsPoseidonServiceV20151101CreateApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplicationResponse != nil {
        // handle response
    }
}
```

## CreateTags

<p>Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items.</p> <important> <p>Do not store sensitive information (like personal data) in tags.</p> </important>

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
    res, err := s.SDK.CreateTags(ctx, operations.CreateTagsRequest{
        CreateTagsRequest: shared.CreateTagsRequest{
            ConfigurationIds: []string{
                "dolorum",
                "dicta",
                "nam",
                "officia",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "fugit",
                    Value: "deleniti",
                },
                shared.Tag{
                    Key: "hic",
                    Value: "optio",
                },
                shared.Tag{
                    Key: "totam",
                    Value: "beatae",
                },
            },
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.CreateTagsXAmzTargetEnumAwsPoseidonServiceV20151101CreateTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTagsResponse != nil {
        // handle response
    }
}
```

## DeleteApplications

Deletes a list of applications and their associations with configuration items.

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
    res, err := s.SDK.DeleteApplications(ctx, operations.DeleteApplicationsRequest{
        DeleteApplicationsRequest: shared.DeleteApplicationsRequest{
            ConfigurationIds: []string{
                "excepturi",
            },
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.DeleteApplicationsXAmzTargetEnumAwsPoseidonServiceV20151101DeleteApplications,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteApplicationsResponse != nil {
        // handle response
    }
}
```

## DeleteTags

Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.

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
    res, err := s.SDK.DeleteTags(ctx, operations.DeleteTagsRequest{
        DeleteTagsRequest: shared.DeleteTagsRequest{
            ConfigurationIds: []string{
                "laboriosam",
                "hic",
                "saepe",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "in",
                    Value: "corporis",
                },
                shared.Tag{
                    Key: "iste",
                    Value: "iure",
                },
                shared.Tag{
                    Key: "saepe",
                    Value: "quidem",
                },
            },
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.DeleteTagsXAmzTargetEnumAwsPoseidonServiceV20151101DeleteTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTagsResponse != nil {
        // handle response
    }
}
```

## DescribeAgents

Lists agents or connectors as specified by ID or other filters. All agents/connectors associated with your user account can be listed if you call <code>DescribeAgents</code> as is without passing any parameters.

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
    res, err := s.SDK.DescribeAgents(ctx, operations.DescribeAgentsRequest{
        DescribeAgentsRequest: shared.DescribeAgentsRequest{
            AgentIds: []string{
                "corporis",
            },
            Filters: []shared.Filter{
                shared.Filter{
                    Condition: "nobis",
                    Name: "Guadalupe Hickle",
                    Values: []string{
                        "iure",
                    },
                },
            },
            MaxResults: sdk.Int64(634274),
            NextToken: sdk.String("doloribus"),
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("repellat"),
        XAmzTarget: operations.DescribeAgentsXAmzTargetEnumAwsPoseidonServiceV20151101DescribeAgents,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAgentsResponse != nil {
        // handle response
    }
}
```

## DescribeConfigurations

<p>Retrieves attributes for a list of configuration item IDs.</p> <note> <p>All of the supplied IDs must be for the same asset type from one of the following:</p> <ul> <li> <p>server</p> </li> <li> <p>application</p> </li> <li> <p>process</p> </li> <li> <p>connection</p> </li> </ul> <p>Output fields are specific to the asset type specified. For example, the output for a <i>server</i> configuration item includes a list of attributes about the server, such as host name, operating system, number of network cards, etc.</p> <p>For a complete list of outputs for each asset type, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#DescribeConfigurations">Using the DescribeConfigurations Action</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> </note>

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
    res, err := s.SDK.DescribeConfigurations(ctx, operations.DescribeConfigurationsRequest{
        DescribeConfigurationsRequest: shared.DescribeConfigurationsRequest{
            ConfigurationIds: []string{
                "occaecati",
                "numquam",
                "commodi",
            },
        },
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("quia"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("vitae"),
        XAmzTarget: operations.DescribeConfigurationsXAmzTargetEnumAwsPoseidonServiceV20151101DescribeConfigurations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConfigurationsResponse != nil {
        // handle response
    }
}
```

## DescribeContinuousExports

Lists exports as specified by ID. All continuous exports associated with your user account can be listed if you call <code>DescribeContinuousExports</code> as is without passing any parameters.

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
    res, err := s.SDK.DescribeContinuousExports(ctx, operations.DescribeContinuousExportsRequest{
        DescribeContinuousExportsRequest: shared.DescribeContinuousExportsRequest{
            ExportIds: []string{
                "animi",
                "enim",
                "odit",
            },
            MaxResults: sdk.Int64(778346),
            NextToken: sdk.String("sequi"),
        },
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.DescribeContinuousExportsXAmzTargetEnumAwsPoseidonServiceV20151101DescribeContinuousExports,
        MaxResults: sdk.String("temporibus"),
        NextToken: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeContinuousExportsResponse != nil {
        // handle response
    }
}
```

## ~~DescribeExportConfigurations~~

 <code>DescribeExportConfigurations</code> is deprecated. Use <a href="https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html">DescribeExportTasks</a>, instead.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.DescribeExportConfigurations(ctx, operations.DescribeExportConfigurationsRequest{
        DescribeExportConfigurationsRequest: shared.DescribeExportConfigurationsRequest{
            ExportIds: []string{
                "reiciendis",
            },
            MaxResults: sdk.Int64(976460),
            NextToken: sdk.String("vero"),
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.DescribeExportConfigurationsXAmzTargetEnumAwsPoseidonServiceV20151101DescribeExportConfigurations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeExportConfigurationsResponse != nil {
        // handle response
    }
}
```

## DescribeExportTasks

Retrieve status of one or more export tasks. You can retrieve the status of up to 100 export tasks.

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
    res, err := s.SDK.DescribeExportTasks(ctx, operations.DescribeExportTasksRequest{
        DescribeExportTasksRequest: shared.DescribeExportTasksRequest{
            ExportIds: []string{
                "doloremque",
            },
            Filters: []shared.ExportFilter{
                shared.ExportFilter{
                    Condition: "ut",
                    Name: "Willie Hessel",
                    Values: []string{
                        "harum",
                    },
                },
                shared.ExportFilter{
                    Condition: "enim",
                    Name: "Mrs. Leslie VonRueden",
                    Values: []string{
                        "excepturi",
                        "pariatur",
                        "modi",
                    },
                },
            },
            MaxResults: sdk.Int64(508969),
            NextToken: sdk.String("rem"),
        },
        XAmzAlgorithm: sdk.String("voluptates"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.DescribeExportTasksXAmzTargetEnumAwsPoseidonServiceV20151101DescribeExportTasks,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeExportTasksResponse != nil {
        // handle response
    }
}
```

## DescribeImportTasks

Returns an array of import tasks for your account, including status information, times, IDs, the Amazon S3 Object URL for the import file, and more.

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
    res, err := s.SDK.DescribeImportTasks(ctx, operations.DescribeImportTasksRequest{
        DescribeImportTasksRequest: shared.DescribeImportTasksRequest{
            Filters: []shared.ImportTaskFilter{
                shared.ImportTaskFilter{
                    Name: shared.ImportTaskFilterNameEnumImportTaskID.ToPointer(),
                    Values: []string{
                        "quibusdam",
                        "explicabo",
                        "deserunt",
                    },
                },
                shared.ImportTaskFilter{
                    Name: shared.ImportTaskFilterNameEnumName.ToPointer(),
                    Values: []string{
                        "labore",
                        "modi",
                        "qui",
                        "aliquid",
                    },
                },
            },
            MaxResults: sdk.Int64(586513),
            NextToken: sdk.String("quos"),
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.DescribeImportTasksXAmzTargetEnumAwsPoseidonServiceV20151101DescribeImportTasks,
        MaxResults: sdk.String("excepturi"),
        NextToken: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeImportTasksResponse != nil {
        // handle response
    }
}
```

## DescribeTags

<p>Retrieves a list of configuration items that have tags as specified by the key-value pairs, name and value, passed to the optional parameter <code>filters</code>.</p> <p>There are three valid tag filter names:</p> <ul> <li> <p>tagKey</p> </li> <li> <p>tagValue</p> </li> <li> <p>configurationId</p> </li> </ul> <p>Also, all configuration items associated with your user account that have tags can be listed if you call <code>DescribeTags</code> as is without passing any parameters.</p>

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
    res, err := s.SDK.DescribeTags(ctx, operations.DescribeTagsRequest{
        DescribeTagsRequest: shared.DescribeTagsRequest{
            Filters: []shared.TagFilter{
                shared.TagFilter{
                    Name: "Francisco Windler",
                    Values: []string{
                        "sint",
                        "aliquid",
                        "provident",
                        "necessitatibus",
                    },
                },
                shared.TagFilter{
                    Name: "Luke Fadel",
                    Values: []string{
                        "in",
                        "in",
                        "illum",
                    },
                },
                shared.TagFilter{
                    Name: "Jean Buckridge",
                    Values: []string{
                        "ea",
                        "aliquid",
                        "laborum",
                        "accusamus",
                    },
                },
            },
            MaxResults: sdk.Int64(249796),
            NextToken: sdk.String("occaecati"),
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.DescribeTagsXAmzTargetEnumAwsPoseidonServiceV20151101DescribeTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTagsResponse != nil {
        // handle response
    }
}
```

## DisassociateConfigurationItemsFromApplication

Disassociates one or more configuration items from an application.

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
    res, err := s.SDK.DisassociateConfigurationItemsFromApplication(ctx, operations.DisassociateConfigurationItemsFromApplicationRequest{
        DisassociateConfigurationItemsFromApplicationRequest: shared.DisassociateConfigurationItemsFromApplicationRequest{
            ApplicationConfigurationID: "blanditiis",
            ConfigurationIds: []string{
                "sapiente",
                "amet",
                "deserunt",
            },
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.DisassociateConfigurationItemsFromApplicationXAmzTargetEnumAwsPoseidonServiceV20151101DisassociateConfigurationItemsFromApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateConfigurationItemsFromApplicationResponse != nil {
        // handle response
    }
}
```

## ~~ExportConfigurations~~

<p>Deprecated. Use <code>StartExportTask</code> instead.</p> <p>Exports all discovered configuration data to an Amazon S3 bucket or an application that enables you to view and evaluate the data. Data includes tags and tag associations, processes, connections, servers, and system performance. This API returns an export ID that you can query using the <i>DescribeExportConfigurations</i> API. The system imposes a limit of two configuration exports in six hours.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.ExportConfigurations(ctx, operations.ExportConfigurationsRequest{
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.ExportConfigurationsXAmzTargetEnumAwsPoseidonServiceV20151101ExportConfigurations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportConfigurationsResponse != nil {
        // handle response
    }
}
```

## GetDiscoverySummary

<p>Retrieves a short summary of discovered assets.</p> <p>This API operation takes no request parameters and is called as is at the command prompt as shown in the example.</p>

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
    res, err := s.SDK.GetDiscoverySummary(ctx, operations.GetDiscoverySummaryRequest{
        RequestBody: map[string]interface{}{
            "eum": "vero",
            "aspernatur": "architecto",
            "magnam": "et",
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.GetDiscoverySummaryXAmzTargetEnumAwsPoseidonServiceV20151101GetDiscoverySummary,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDiscoverySummaryResponse != nil {
        // handle response
    }
}
```

## ListConfigurations

Retrieves a list of configuration items as specified by the value passed to the required parameter <code>configurationType</code>. Optional filtering may be applied to refine search results.

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
    res, err := s.SDK.ListConfigurations(ctx, operations.ListConfigurationsRequest{
        ListConfigurationsRequest: shared.ListConfigurationsRequest{
            ConfigurationType: shared.ConfigurationItemTypeEnumApplication,
            Filters: []shared.Filter{
                shared.Filter{
                    Condition: "ad",
                    Name: "Carmen Treutel",
                    Values: []string{
                        "iure",
                    },
                },
                shared.Filter{
                    Condition: "doloribus",
                    Name: "Frederick Schoen",
                    Values: []string{
                        "architecto",
                        "architecto",
                    },
                },
                shared.Filter{
                    Condition: "repudiandae",
                    Name: "Lola Koss",
                    Values: []string{
                        "saepe",
                    },
                },
            },
            MaxResults: sdk.Int64(868126),
            NextToken: sdk.String("accusantium"),
            OrderBy: []shared.OrderByElement{
                shared.OrderByElement{
                    FieldName: "praesentium",
                    SortOrder: shared.OrderStringEnumDesc.ToPointer(),
                },
            },
        },
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.ListConfigurationsXAmzTargetEnumAwsPoseidonServiceV20151101ListConfigurations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConfigurationsResponse != nil {
        // handle response
    }
}
```

## ListServerNeighbors

Retrieves a list of servers that are one network hop away from a specified server.

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
    res, err := s.SDK.ListServerNeighbors(ctx, operations.ListServerNeighborsRequest{
        ListServerNeighborsRequest: shared.ListServerNeighborsRequest{
            ConfigurationID: "excepturi",
            MaxResults: sdk.Int64(139972),
            NeighborConfigurationIds: []string{
                "accusantium",
                "ab",
            },
            NextToken: sdk.String("maiores"),
            PortInformationNeeded: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("autem"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.ListServerNeighborsXAmzTargetEnumAwsPoseidonServiceV20151101ListServerNeighbors,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServerNeighborsResponse != nil {
        // handle response
    }
}
```

## StartContinuousExport

Start the continuous flow of agent's discovered data into Amazon Athena.

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
    res, err := s.SDK.StartContinuousExport(ctx, operations.StartContinuousExportRequest{
        RequestBody: map[string]interface{}{
            "voluptatibus": "perferendis",
            "fugiat": "amet",
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.StartContinuousExportXAmzTargetEnumAwsPoseidonServiceV20151101StartContinuousExport,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartContinuousExportResponse != nil {
        // handle response
    }
}
```

## StartDataCollectionByAgentIds

Instructs the specified agents or connectors to start collecting data.

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
    res, err := s.SDK.StartDataCollectionByAgentIds(ctx, operations.StartDataCollectionByAgentIdsRequest{
        StartDataCollectionByAgentIdsRequest: shared.StartDataCollectionByAgentIdsRequest{
            AgentIds: []string{
                "totam",
                "dignissimos",
            },
        },
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("nesciunt"),
        XAmzDate: sdk.String("eos"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("minus"),
        XAmzTarget: operations.StartDataCollectionByAgentIdsXAmzTargetEnumAwsPoseidonServiceV20151101StartDataCollectionByAgentIds,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartDataCollectionByAgentIdsResponse != nil {
        // handle response
    }
}
```

## StartExportTask

<p> Begins the export of discovered data to an S3 bucket.</p> <p> If you specify <code>agentIds</code> in a filter, the task exports up to 72 hours of detailed data collected by the identified Application Discovery Agent, including network, process, and performance details. A time range for exported agent data may be set by using <code>startTime</code> and <code>endTime</code>. Export of detailed agent data is limited to five concurrently running exports. </p> <p> If you do not include an <code>agentIds</code> filter, summary data is exported that includes both Amazon Web Services Agentless Discovery Connector data and summary data from Amazon Web Services Discovery Agents. Export of summary data is limited to two exports per day. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartExportTask(ctx, operations.StartExportTaskRequest{
        StartExportTaskRequest: shared.StartExportTaskRequest{
            EndTime: types.MustTimeFromString("2022-10-11T06:25:10.430Z"),
            ExportDataFormat: []shared.ExportDataFormatEnum{
                shared.ExportDataFormatEnumCsv,
                shared.ExportDataFormatEnumGraphml,
                shared.ExportDataFormatEnumGraphml,
                shared.ExportDataFormatEnumGraphml,
            },
            Filters: []shared.ExportFilter{
                shared.ExportFilter{
                    Condition: "perspiciatis",
                    Name: "Robyn Cruickshank",
                    Values: []string{
                        "occaecati",
                    },
                },
                shared.ExportFilter{
                    Condition: "rerum",
                    Name: "Ollie Watsica",
                    Values: []string{
                        "deleniti",
                        "pariatur",
                        "provident",
                    },
                },
                shared.ExportFilter{
                    Condition: "nobis",
                    Name: "Toby Hahn",
                    Values: []string{
                        "dolorem",
                    },
                },
            },
            StartTime: types.MustTimeFromString("2022-10-25T00:56:56.568Z"),
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.StartExportTaskXAmzTargetEnumAwsPoseidonServiceV20151101StartExportTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartExportTaskResponse != nil {
        // handle response
    }
}
```

## StartImportTask

<p>Starts an import task, which allows you to import details of your on-premises environment directly into Amazon Web Services Migration Hub without having to use the Application Discovery Service (ADS) tools such as the Discovery Connector or Discovery Agent. This gives you the option to perform migration assessment and planning directly from your imported data, including the ability to group your devices as applications and track their migration status.</p> <p>To start an import request, do this:</p> <ol> <li> <p>Download the specially formatted comma separated value (CSV) import template, which you can find here: <a href="https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv">https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv</a>.</p> </li> <li> <p>Fill out the template with your server and application data.</p> </li> <li> <p>Upload your import file to an Amazon S3 bucket, and make a note of it's Object URL. Your import file must be in the CSV format.</p> </li> <li> <p>Use the console or the <code>StartImportTask</code> command with the Amazon Web Services CLI or one of the Amazon Web Services SDKs to import the records from your file.</p> </li> </ol> <p>For more information, including step-by-step procedures, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-import.html">Migration Hub Import</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> <note> <p>There are limits to the number of import tasks you can create (and delete) in an Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/ads_service_limits.html">Amazon Web Services Application Discovery Service Limits</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> </note>

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
    res, err := s.SDK.StartImportTask(ctx, operations.StartImportTaskRequest{
        StartImportTaskRequest: shared.StartImportTaskRequest{
            ClientRequestToken: sdk.String("amet"),
            ImportURL: "dolorum",
            Name: "Ms. Christine Beer",
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("eos"),
        XAmzTarget: operations.StartImportTaskXAmzTargetEnumAwsPoseidonServiceV20151101StartImportTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartImportTaskResponse != nil {
        // handle response
    }
}
```

## StopContinuousExport

Stop the continuous flow of agent's discovered data into Amazon Athena.

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
    res, err := s.SDK.StopContinuousExport(ctx, operations.StopContinuousExportRequest{
        StopContinuousExportRequest: shared.StopContinuousExportRequest{
            ExportID: "atque",
        },
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.StopContinuousExportXAmzTargetEnumAwsPoseidonServiceV20151101StopContinuousExport,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopContinuousExportResponse != nil {
        // handle response
    }
}
```

## StopDataCollectionByAgentIds

Instructs the specified agents or connectors to stop collecting data.

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
    res, err := s.SDK.StopDataCollectionByAgentIds(ctx, operations.StopDataCollectionByAgentIdsRequest{
        StopDataCollectionByAgentIdsRequest: shared.StopDataCollectionByAgentIdsRequest{
            AgentIds: []string{
                "deleniti",
                "omnis",
                "necessitatibus",
            },
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.StopDataCollectionByAgentIdsXAmzTargetEnumAwsPoseidonServiceV20151101StopDataCollectionByAgentIds,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopDataCollectionByAgentIdsResponse != nil {
        // handle response
    }
}
```

## UpdateApplication

Updates metadata about an application.

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
    res, err := s.SDK.UpdateApplication(ctx, operations.UpdateApplicationRequest{
        UpdateApplicationRequest: shared.UpdateApplicationRequest{
            ConfigurationID: "eius",
            Description: sdk.String("aspernatur"),
            Name: sdk.String("Wendy Rosenbaum"),
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.UpdateApplicationXAmzTargetEnumAwsPoseidonServiceV20151101UpdateApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateApplicationResponse != nil {
        // handle response
    }
}
```
