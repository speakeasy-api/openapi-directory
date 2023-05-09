# SDK

## Overview

<p>IoT Analytics allows you to collect large amounts of device data, process messages, and store them. You can then query the data and run sophisticated analytics on it. IoT Analytics enables advanced data exploration through integration with Jupyter Notebooks and data visualization through integration with Amazon QuickSight.</p> <p>Traditional analytics and business intelligence tools are designed to process structured data. IoT data often comes from devices that record noisy processes (such as temperature, motion, or sound). As a result the data from these devices can have significant gaps, corrupted messages, and false readings that must be cleaned up before analysis can occur. Also, IoT data is often only meaningful in the context of other data from external sources. </p> <p>IoT Analytics automates the steps required to analyze data from IoT devices. IoT Analytics filters, transforms, and enriches IoT data before storing it in a time-series data store for analysis. You can set up the service to collect only the data you need from your devices, apply mathematical transforms to process the data, and enrich the data with device-specific metadata such as device type and location before storing it. Then, you can analyze your data by running queries using the built-in SQL query engine, or perform more complex analytics and machine learning inference. IoT Analytics includes pre-built models for common IoT use cases so you can answer questions like which devices are about to fail or which customers are at risk of abandoning their wearable devices.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/iotanalytics/>
### Available Operations

* [BatchPutMessage](#batchputmessage) - Sends messages to a channel.
* [CancelPipelineReprocessing](#cancelpipelinereprocessing) - Cancels the reprocessing of data through the pipeline.
* [CreateChannel](#createchannel) - Used to create a channel. A channel collects data from an MQTT topic and archives the raw, unprocessed messages before publishing the data to a pipeline.
* [CreateDataset](#createdataset) - Used to create a dataset. A dataset stores data retrieved from a data store by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application). This operation creates the skeleton of a dataset. The dataset can be populated manually by calling <code>CreateDatasetContent</code> or automatically according to a trigger you specify.
* [CreateDatasetContent](#createdatasetcontent) - Creates the content of a dataset by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application).
* [CreateDatastore](#createdatastore) - Creates a data store, which is a repository for messages.
* [CreatePipeline](#createpipeline) - Creates a pipeline. A pipeline consumes messages from a channel and allows you to process the messages before storing them in a data store. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.
* [DeleteChannel](#deletechannel) - Deletes the specified channel.
* [DeleteDataset](#deletedataset) - <p>Deletes the specified dataset.</p> <p>You do not have to delete the content of the dataset before you perform this operation.</p>
* [DeleteDatasetContent](#deletedatasetcontent) - Deletes the content of the specified dataset.
* [DeleteDatastore](#deletedatastore) - Deletes the specified data store.
* [DeletePipeline](#deletepipeline) - Deletes the specified pipeline.
* [DescribeChannel](#describechannel) - Retrieves information about a channel.
* [DescribeDataset](#describedataset) - Retrieves information about a dataset.
* [DescribeDatastore](#describedatastore) - Retrieves information about a data store.
* [DescribeLoggingOptions](#describeloggingoptions) - Retrieves the current settings of the IoT Analytics logging options.
* [DescribePipeline](#describepipeline) - Retrieves information about a pipeline.
* [GetDatasetContent](#getdatasetcontent) - Retrieves the contents of a dataset as presigned URIs.
* [ListChannels](#listchannels) - Retrieves a list of channels.
* [ListDatasetContents](#listdatasetcontents) - Lists information about dataset contents that have been created.
* [ListDatasets](#listdatasets) - Retrieves information about datasets.
* [ListDatastores](#listdatastores) - Retrieves a list of data stores.
* [ListPipelines](#listpipelines) - Retrieves a list of pipelines.
* [ListTagsForResource](#listtagsforresource) - Lists the tags (metadata) that you have assigned to the resource.
* [PutLoggingOptions](#putloggingoptions) - <p>Sets or updates the IoT Analytics logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect. </p>
* [RunPipelineActivity](#runpipelineactivity) - Simulates the results of running a pipeline activity on a message payload.
* [SampleChannelData](#samplechanneldata) - Retrieves a sample of messages from the specified channel ingested during the specified timeframe. Up to 10 messages can be retrieved.
* [StartPipelineReprocessing](#startpipelinereprocessing) - Starts the reprocessing of raw message data through the pipeline.
* [TagResource](#tagresource) - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
* [UntagResource](#untagresource) - Removes the given tags (metadata) from the resource.
* [UpdateChannel](#updatechannel) - Used to update the settings of a channel.
* [UpdateDataset](#updatedataset) - Updates the settings of a dataset.
* [UpdateDatastore](#updatedatastore) - Used to update the settings of a data store.
* [UpdatePipeline](#updatepipeline) - Updates the settings of a pipeline. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.

## BatchPutMessage

Sends messages to a channel.

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
    res, err := s.SDK.BatchPutMessage(ctx, operations.BatchPutMessageRequest{
        RequestBody: operations.BatchPutMessageRequestBody{
            ChannelName: "ipsa",
            Messages: []shared.Message{
                shared.Message{
                    MessageID: "tempora",
                    Payload: "suscipit",
                },
                shared.Message{
                    MessageID: "molestiae",
                    Payload: "minus",
                },
                shared.Message{
                    MessageID: "placeat",
                    Payload: "voluptatum",
                },
                shared.Message{
                    MessageID: "iusto",
                    Payload: "excepturi",
                },
            },
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPutMessageResponse != nil {
        // handle response
    }
}
```

## CancelPipelineReprocessing

Cancels the reprocessing of data through the pipeline.

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
    res, err := s.SDK.CancelPipelineReprocessing(ctx, operations.CancelPipelineReprocessingRequest{
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("at"),
        PipelineName: "at",
        ReprocessingID: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelPipelineReprocessingResponse != nil {
        // handle response
    }
}
```

## CreateChannel

Used to create a channel. A channel collects data from an MQTT topic and archives the raw, unprocessed messages before publishing the data to a pipeline.

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
    res, err := s.SDK.CreateChannel(ctx, operations.CreateChannelRequest{
        RequestBody: operations.CreateChannelRequestBody{
            ChannelName: "molestiae",
            ChannelStorage: &operations.CreateChannelRequestBodyChannelStorage{
                CustomerManagedS3: &shared.CustomerManagedChannelS3Storage{
                    Bucket: "quod",
                    KeyPrefix: sdk.String("quod"),
                    RoleArn: "esse",
                },
                ServiceManagedS3: map[string]interface{}{
                    "porro": "dolorum",
                    "dicta": "nam",
                    "officia": "occaecati",
                },
            },
            RetentionPeriod: &operations.CreateChannelRequestBodyRetentionPeriod{
                NumberOfDays: sdk.Int64(143353),
                Unlimited: sdk.Bool(false),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "hic",
                    Value: "optio",
                },
                shared.Tag{
                    Key: "totam",
                    Value: "beatae",
                },
                shared.Tag{
                    Key: "commodi",
                    Value: "molestiae",
                },
            },
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateChannelResponse != nil {
        // handle response
    }
}
```

## CreateDataset

Used to create a dataset. A dataset stores data retrieved from a data store by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application). This operation creates the skeleton of a dataset. The dataset can be populated manually by calling <code>CreateDatasetContent</code> or automatically according to a trigger you specify.

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
    res, err := s.SDK.CreateDataset(ctx, operations.CreateDatasetRequest{
        RequestBody: operations.CreateDatasetRequestBody{
            Actions: []shared.DatasetAction{
                shared.DatasetAction{
                    ActionName: sdk.String("perferendis"),
                    ContainerAction: &shared.ContainerDatasetAction{
                        ExecutionRoleArn: "ad",
                        Image: "natus",
                        ResourceConfiguration: shared.ResourceConfiguration{
                            ComputeType: shared.ComputeTypeEnumAcu1,
                            VolumeSizeInGB: 612096,
                        },
                        Variables: []shared.Variable{
                            shared.Variable{
                                DatasetContentVersionValue: &shared.DatasetContentVersionValue{
                                    DatasetName: "natus",
                                },
                                DoubleValue: sdk.Float64(3864.89),
                                Name: "Elias Parker",
                                OutputFileURIValue: &shared.OutputFileURIValue{
                                    FileName: "iste",
                                },
                                StringValue: sdk.String("iure"),
                            },
                        },
                    },
                    QueryAction: &shared.SQLQueryDatasetAction{
                        Filters: []shared.QueryFilter{
                            shared.QueryFilter{
                                DeltaTime: &shared.DeltaTime{
                                    OffsetSeconds: 697631,
                                    TimeExpression: "architecto",
                                },
                            },
                            shared.QueryFilter{
                                DeltaTime: &shared.DeltaTime{
                                    OffsetSeconds: 60225,
                                    TimeExpression: "reiciendis",
                                },
                            },
                            shared.QueryFilter{
                                DeltaTime: &shared.DeltaTime{
                                    OffsetSeconds: 666767,
                                    TimeExpression: "mollitia",
                                },
                            },
                            shared.QueryFilter{
                                DeltaTime: &shared.DeltaTime{
                                    OffsetSeconds: 670638,
                                    TimeExpression: "dolores",
                                },
                            },
                        },
                        SQLQuery: "dolorem",
                    },
                },
            },
            ContentDeliveryRules: []shared.DatasetContentDeliveryRule{
                shared.DatasetContentDeliveryRule{
                    Destination: shared.DatasetContentDeliveryDestination{
                        IotEventsDestinationConfiguration: &shared.IotEventsDestinationConfiguration{
                            InputName: "explicabo",
                            RoleArn: "nobis",
                        },
                        S3DestinationConfiguration: &shared.S3DestinationConfiguration{
                            Bucket: "enim",
                            GlueConfiguration: &shared.GlueConfiguration{
                                DatabaseName: "omnis",
                                TableName: "nemo",
                            },
                            Key: "minima",
                            RoleArn: "excepturi",
                        },
                    },
                    EntryName: sdk.String("accusantium"),
                },
                shared.DatasetContentDeliveryRule{
                    Destination: shared.DatasetContentDeliveryDestination{
                        IotEventsDestinationConfiguration: &shared.IotEventsDestinationConfiguration{
                            InputName: "iure",
                            RoleArn: "culpa",
                        },
                        S3DestinationConfiguration: &shared.S3DestinationConfiguration{
                            Bucket: "doloribus",
                            GlueConfiguration: &shared.GlueConfiguration{
                                DatabaseName: "sapiente",
                                TableName: "architecto",
                            },
                            Key: "mollitia",
                            RoleArn: "dolorem",
                        },
                    },
                    EntryName: sdk.String("culpa"),
                },
            },
            DatasetName: "consequuntur",
            LateDataRules: []shared.LateDataRule{
                shared.LateDataRule{
                    RuleConfiguration: shared.LateDataRuleConfiguration{
                        DeltaTimeSessionWindowConfiguration: &shared.DeltaTimeSessionWindowConfiguration{
                            TimeoutInMinutes: 653108,
                        },
                    },
                    RuleName: sdk.String("occaecati"),
                },
                shared.LateDataRule{
                    RuleConfiguration: shared.LateDataRuleConfiguration{
                        DeltaTimeSessionWindowConfiguration: &shared.DeltaTimeSessionWindowConfiguration{
                            TimeoutInMinutes: 253291,
                        },
                    },
                    RuleName: sdk.String("commodi"),
                },
                shared.LateDataRule{
                    RuleConfiguration: shared.LateDataRuleConfiguration{
                        DeltaTimeSessionWindowConfiguration: &shared.DeltaTimeSessionWindowConfiguration{
                            TimeoutInMinutes: 466311,
                        },
                    },
                    RuleName: sdk.String("molestiae"),
                },
                shared.LateDataRule{
                    RuleConfiguration: shared.LateDataRuleConfiguration{
                        DeltaTimeSessionWindowConfiguration: &shared.DeltaTimeSessionWindowConfiguration{
                            TimeoutInMinutes: 244425,
                        },
                    },
                    RuleName: sdk.String("error"),
                },
            },
            RetentionPeriod: &operations.CreateDatasetRequestBodyRetentionPeriod{
                NumberOfDays: sdk.Int64(158969),
                Unlimited: sdk.Bool(false),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "vitae",
                    Value: "laborum",
                },
                shared.Tag{
                    Key: "animi",
                    Value: "enim",
                },
            },
            Triggers: []shared.DatasetTrigger{
                shared.DatasetTrigger{
                    Dataset: &shared.TriggeringDataset{
                        Name: "Jimmy Wiegand",
                    },
                    Schedule: &shared.Schedule{
                        Expression: sdk.String("possimus"),
                    },
                },
            },
            VersioningConfiguration: &operations.CreateDatasetRequestBodyVersioningConfiguration{
                MaxVersions: sdk.Int64(13571),
                Unlimited: sdk.Bool(false),
            },
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDatasetResponse != nil {
        // handle response
    }
}
```

## CreateDatasetContent

Creates the content of a dataset by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application).

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
    res, err := s.SDK.CreateDatasetContent(ctx, operations.CreateDatasetContentRequest{
        RequestBody: operations.CreateDatasetContentRequestBody{
            VersionID: sdk.String("vero"),
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("cum"),
        DatasetName: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDatasetContentResponse != nil {
        // handle response
    }
}
```

## CreateDatastore

Creates a data store, which is a repository for messages.

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
    res, err := s.SDK.CreateDatastore(ctx, operations.CreateDatastoreRequest{
        RequestBody: operations.CreateDatastoreRequestBody{
            DatastoreName: "doloremque",
            DatastorePartitions: &operations.CreateDatastoreRequestBodyDatastorePartitions{
                Partitions: []shared.DatastorePartition{
                    shared.DatastorePartition{
                        AttributePartition: &shared.Partition{
                            AttributeName: "ut",
                        },
                        TimestampPartition: &shared.TimestampPartition{
                            AttributeName: "maiores",
                            TimestampFormat: sdk.String("dicta"),
                        },
                    },
                    shared.DatastorePartition{
                        AttributePartition: &shared.Partition{
                            AttributeName: "corporis",
                        },
                        TimestampPartition: &shared.TimestampPartition{
                            AttributeName: "dolore",
                            TimestampFormat: sdk.String("iusto"),
                        },
                    },
                },
            },
            DatastoreStorage: &operations.CreateDatastoreRequestBodyDatastoreStorage{
                CustomerManagedS3: &shared.CustomerManagedDatastoreS3Storage{
                    Bucket: "dicta",
                    KeyPrefix: sdk.String("harum"),
                    RoleArn: "enim",
                },
                IotSiteWiseMultiLayerStorage: &shared.DatastoreIotSiteWiseMultiLayerStorage{
                    CustomerManagedS3Storage: shared.IotSiteWiseCustomerManagedDatastoreS3Storage{
                        Bucket: "accusamus",
                        KeyPrefix: sdk.String("commodi"),
                    },
                },
                ServiceManagedS3: map[string]interface{}{
                    "quae": "ipsum",
                    "quidem": "molestias",
                    "excepturi": "pariatur",
                    "modi": "praesentium",
                },
            },
            FileFormatConfiguration: &operations.CreateDatastoreRequestBodyFileFormatConfiguration{
                JSONConfiguration: map[string]interface{}{
                    "voluptates": "quasi",
                    "repudiandae": "sint",
                    "veritatis": "itaque",
                },
                ParquetConfiguration: &shared.ParquetConfiguration{
                    SchemaDefinition: &shared.SchemaDefinition{
                        Columns: []shared.Column{
                            shared.Column{
                                Name: "Elizabeth Orn",
                                Type: "deserunt",
                            },
                            shared.Column{
                                Name: "Marty Green",
                                Type: "aliquid",
                            },
                        },
                    },
                },
            },
            RetentionPeriod: &operations.CreateDatastoreRequestBodyRetentionPeriod{
                NumberOfDays: sdk.Int64(586513),
                Unlimited: sdk.Bool(false),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "perferendis",
                    Value: "magni",
                },
                shared.Tag{
                    Key: "assumenda",
                    Value: "ipsam",
                },
                shared.Tag{
                    Key: "alias",
                    Value: "fugit",
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDatastoreResponse != nil {
        // handle response
    }
}
```

## CreatePipeline

Creates a pipeline. A pipeline consumes messages from a channel and allows you to process the messages before storing them in a data store. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.

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
    res, err := s.SDK.CreatePipeline(ctx, operations.CreatePipelineRequest{
        RequestBody: operations.CreatePipelineRequestBody{
            PipelineActivities: []shared.PipelineActivity{
                shared.PipelineActivity{
                    AddAttributes: &shared.AddAttributesActivity{
                        Attributes: map[string]string{
                            "eligendi": "sint",
                        },
                        Name: "Sherri Tremblay",
                        Next: sdk.String("dolor"),
                    },
                    Channel: &shared.ChannelActivity{
                        ChannelName: "debitis",
                        Name: "Wilbur King",
                        Next: sdk.String("maiores"),
                    },
                    Datastore: &shared.DatastoreActivity{
                        DatastoreName: "rerum",
                        Name: "Valerie Runolfsson",
                    },
                    DeviceRegistryEnrich: &shared.DeviceRegistryEnrichActivity{
                        Attribute: "aliquid",
                        Name: "Tomas Friesen",
                        Next: sdk.String("accusamus"),
                        RoleArn: "delectus",
                        ThingName: "quidem",
                    },
                    DeviceShadowEnrich: &shared.DeviceShadowEnrichActivity{
                        Attribute: "provident",
                        Name: "Lynn Kuvalis",
                        Next: sdk.String("amet"),
                        RoleArn: "deserunt",
                        ThingName: "nisi",
                    },
                    Filter: &shared.FilterActivity{
                        Filter: "vel",
                        Name: "Ms. Arturo Krajcik",
                        Next: sdk.String("distinctio"),
                    },
                    Lambda: &shared.LambdaActivity{
                        BatchSize: 660174,
                        LambdaName: "labore",
                        Name: "Laurie Mosciski",
                        Next: sdk.String("vero"),
                    },
                    Math: &shared.MathActivity{
                        Attribute: "aspernatur",
                        Math: "architecto",
                        Name: "Frances Marks",
                        Next: sdk.String("quos"),
                    },
                    RemoveAttributes: &shared.RemoveAttributesActivity{
                        Attributes: []string{
                            "accusantium",
                            "mollitia",
                            "reiciendis",
                        },
                        Name: "Tommy Kemmer",
                        Next: sdk.String("odit"),
                    },
                    SelectAttributes: &shared.SelectAttributesActivity{
                        Attributes: []string{
                            "quasi",
                            "iure",
                        },
                        Name: "Doyle Gibson",
                        Next: sdk.String("facilis"),
                    },
                },
                shared.PipelineActivity{
                    AddAttributes: &shared.AddAttributesActivity{
                        Attributes: map[string]string{
                            "architecto": "architecto",
                            "repudiandae": "ullam",
                        },
                        Name: "Jessie Zulauf",
                        Next: sdk.String("saepe"),
                    },
                    Channel: &shared.ChannelActivity{
                        ChannelName: "pariatur",
                        Name: "Kathryn Lang",
                        Next: sdk.String("sunt"),
                    },
                    Datastore: &shared.DatastoreActivity{
                        DatastoreName: "quo",
                        Name: "Ervin Schoen",
                    },
                    DeviceRegistryEnrich: &shared.DeviceRegistryEnrichActivity{
                        Attribute: "odit",
                        Name: "Donna Bernhard",
                        Next: sdk.String("ipsam"),
                        RoleArn: "voluptate",
                        ThingName: "autem",
                    },
                    DeviceShadowEnrich: &shared.DeviceShadowEnrichActivity{
                        Attribute: "nam",
                        Name: "Meredith Hickle PhD",
                        Next: sdk.String("amet"),
                        RoleArn: "aut",
                        ThingName: "cumque",
                    },
                    Filter: &shared.FilterActivity{
                        Filter: "corporis",
                        Name: "Pete Rohan",
                        Next: sdk.String("totam"),
                    },
                    Lambda: &shared.LambdaActivity{
                        BatchSize: 489549,
                        LambdaName: "eaque",
                        Name: "Mr. Robin Daugherty",
                        Next: sdk.String("quam"),
                    },
                    Math: &shared.MathActivity{
                        Attribute: "dolor",
                        Math: "vero",
                        Name: "Mindy Walter",
                        Next: sdk.String("perspiciatis"),
                    },
                    RemoveAttributes: &shared.RemoveAttributesActivity{
                        Attributes: []string{
                            "porro",
                        },
                        Name: "Ms. Vickie Mraz",
                        Next: sdk.String("adipisci"),
                    },
                    SelectAttributes: &shared.SelectAttributesActivity{
                        Attributes: []string{
                            "earum",
                            "modi",
                            "iste",
                            "dolorum",
                        },
                        Name: "Ervin McLaughlin",
                        Next: sdk.String("delectus"),
                    },
                },
            },
            PipelineName: "quaerat",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "aliquid",
                    Value: "dolorem",
                },
                shared.Tag{
                    Key: "dolorem",
                    Value: "dolor",
                },
                shared.Tag{
                    Key: "qui",
                    Value: "ipsum",
                },
            },
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePipelineResponse != nil {
        // handle response
    }
}
```

## DeleteChannel

Deletes the specified channel.

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
    res, err := s.SDK.DeleteChannel(ctx, operations.DeleteChannelRequest{
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("odio"),
        ChannelName: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDataset

<p>Deletes the specified dataset.</p> <p>You do not have to delete the content of the dataset before you perform this operation.</p>

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
    res, err := s.SDK.DeleteDataset(ctx, operations.DeleteDatasetRequest{
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("atque"),
        DatasetName: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDatasetContent

Deletes the content of the specified dataset.

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
    res, err := s.SDK.DeleteDatasetContent(ctx, operations.DeleteDatasetContentRequest{
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        DatasetName: "deleniti",
        VersionID: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDatastore

Deletes the specified data store.

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
    res, err := s.SDK.DeleteDatastore(ctx, operations.DeleteDatastoreRequest{
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("id"),
        DatastoreName: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePipeline

Deletes the specified pipeline.

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
    res, err := s.SDK.DeletePipeline(ctx, operations.DeletePipelineRequest{
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("ad"),
        PipelineName: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeChannel

Retrieves information about a channel.

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
    res, err := s.SDK.DescribeChannel(ctx, operations.DescribeChannelRequest{
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("similique"),
        ChannelName: "alias",
        IncludeStatistics: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeChannelResponse != nil {
        // handle response
    }
}
```

## DescribeDataset

Retrieves information about a dataset.

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
    res, err := s.SDK.DescribeDataset(ctx, operations.DescribeDatasetRequest{
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("qui"),
        DatasetName: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDatasetResponse != nil {
        // handle response
    }
}
```

## DescribeDatastore

Retrieves information about a data store.

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
    res, err := s.SDK.DescribeDatastore(ctx, operations.DescribeDatastoreRequest{
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        DatastoreName: "amet",
        IncludeStatistics: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDatastoreResponse != nil {
        // handle response
    }
}
```

## DescribeLoggingOptions

Retrieves the current settings of the IoT Analytics logging options.

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
    res, err := s.SDK.DescribeLoggingOptions(ctx, operations.DescribeLoggingOptionsRequest{
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLoggingOptionsResponse != nil {
        // handle response
    }
}
```

## DescribePipeline

Retrieves information about a pipeline.

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
    res, err := s.SDK.DescribePipeline(ctx, operations.DescribePipelineRequest{
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("libero"),
        PipelineName: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePipelineResponse != nil {
        // handle response
    }
}
```

## GetDatasetContent

Retrieves the contents of a dataset as presigned URIs.

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
    res, err := s.SDK.GetDatasetContent(ctx, operations.GetDatasetContentRequest{
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("maxime"),
        DatasetName: "pariatur",
        VersionID: sdk.String("soluta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDatasetContentResponse != nil {
        // handle response
    }
}
```

## ListChannels

Retrieves a list of channels.

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
    res, err := s.SDK.ListChannels(ctx, operations.ListChannelsRequest{
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        MaxResults: sdk.Int64(704474),
        NextToken: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListChannelsResponse != nil {
        // handle response
    }
}
```

## ListDatasetContents

Lists information about dataset contents that have been created.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDatasetContents(ctx, operations.ListDatasetContentsRequest{
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("magni"),
        DatasetName: "odio",
        MaxResults: sdk.Int64(124833),
        NextToken: sdk.String("ullam"),
        ScheduledBefore: types.MustTimeFromString("2021-02-13T11:37:55.892Z"),
        ScheduledOnOrAfter: types.MustTimeFromString("2022-03-27T15:45:02.604Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDatasetContentsResponse != nil {
        // handle response
    }
}
```

## ListDatasets

Retrieves information about datasets.

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
    res, err := s.SDK.ListDatasets(ctx, operations.ListDatasetsRequest{
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("nobis"),
        MaxResults: sdk.Int64(552193),
        NextToken: sdk.String("tempore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDatasetsResponse != nil {
        // handle response
    }
}
```

## ListDatastores

Retrieves a list of data stores.

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
    res, err := s.SDK.ListDatastores(ctx, operations.ListDatastoresRequest{
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        MaxResults: sdk.Int64(677263),
        NextToken: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDatastoresResponse != nil {
        // handle response
    }
}
```

## ListPipelines

Retrieves a list of pipelines.

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
    res, err := s.SDK.ListPipelines(ctx, operations.ListPipelinesRequest{
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        MaxResults: sdk.Int64(785153),
        NextToken: sdk.String("doloribus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPipelinesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags (metadata) that you have assigned to the resource.

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
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("odio"),
        ResourceArn: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## PutLoggingOptions

<p>Sets or updates the IoT Analytics logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect. </p>

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
    res, err := s.SDK.PutLoggingOptions(ctx, operations.PutLoggingOptionsRequest{
        RequestBody: operations.PutLoggingOptionsRequestBody{
            LoggingOptions: operations.PutLoggingOptionsRequestBodyLoggingOptions{
                Enabled: sdk.Bool(false),
                Level: shared.LoggingLevelEnumError.ToPointer(),
                RoleArn: sdk.String("voluptatibus"),
            },
        },
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RunPipelineActivity

Simulates the results of running a pipeline activity on a message payload.

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
    res, err := s.SDK.RunPipelineActivity(ctx, operations.RunPipelineActivityRequest{
        RequestBody: operations.RunPipelineActivityRequestBody{
            Payloads: []string{
                "vero",
            },
            PipelineActivity: operations.RunPipelineActivityRequestBodyPipelineActivity{
                AddAttributes: &shared.AddAttributesActivity{
                    Attributes: map[string]string{
                        "dignissimos": "hic",
                        "distinctio": "quod",
                        "odio": "similique",
                        "facilis": "vero",
                    },
                    Name: "Joanne Sporer",
                    Next: sdk.String("natus"),
                },
                Channel: &shared.ChannelActivity{
                    ChannelName: "impedit",
                    Name: "Camille Heidenreich",
                    Next: sdk.String("porro"),
                },
                Datastore: &shared.DatastoreActivity{
                    DatastoreName: "maiores",
                    Name: "Ted Romaguera MD",
                },
                DeviceRegistryEnrich: &shared.DeviceRegistryEnrichActivity{
                    Attribute: "tempora",
                    Name: "Terri Collins",
                    Next: sdk.String("magnam"),
                    RoleArn: "ratione",
                    ThingName: "ex",
                },
                DeviceShadowEnrich: &shared.DeviceShadowEnrichActivity{
                    Attribute: "laudantium",
                    Name: "Ms. Cindy Wuckert",
                    Next: sdk.String("excepturi"),
                    RoleArn: "voluptatibus",
                    ThingName: "nostrum",
                },
                Filter: &shared.FilterActivity{
                    Filter: "sapiente",
                    Name: "Elbert Jenkins",
                    Next: sdk.String("veniam"),
                },
                Lambda: &shared.LambdaActivity{
                    BatchSize: 399499,
                    LambdaName: "inventore",
                    Name: "Rosemary Ryan",
                    Next: sdk.String("aspernatur"),
                },
                Math: &shared.MathActivity{
                    Attribute: "minima",
                    Math: "eaque",
                    Name: "Ms. Marco Ankunding",
                    Next: sdk.String("aliquam"),
                },
                RemoveAttributes: &shared.RemoveAttributesActivity{
                    Attributes: []string{
                        "accusamus",
                    },
                    Name: "Ellen Borer",
                    Next: sdk.String("placeat"),
                },
                SelectAttributes: &shared.SelectAttributesActivity{
                    Attributes: []string{
                        "eum",
                    },
                    Name: "Vicky Lynch",
                    Next: sdk.String("voluptas"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunPipelineActivityResponse != nil {
        // handle response
    }
}
```

## SampleChannelData

Retrieves a sample of messages from the specified channel ingested during the specified timeframe. Up to 10 messages can be retrieved.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SampleChannelData(ctx, operations.SampleChannelDataRequest{
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("rem"),
        ChannelName: "fuga",
        EndTime: types.MustTimeFromString("2022-04-22T02:19:15.622Z"),
        MaxMessages: sdk.Int64(852635),
        StartTime: types.MustTimeFromString("2022-07-26T19:04:27.877Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SampleChannelDataResponse != nil {
        // handle response
    }
}
```

## StartPipelineReprocessing

Starts the reprocessing of raw message data through the pipeline.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartPipelineReprocessing(ctx, operations.StartPipelineReprocessingRequest{
        RequestBody: operations.StartPipelineReprocessingRequestBody{
            ChannelMessages: &operations.StartPipelineReprocessingRequestBodyChannelMessages{
                S3Paths: []string{
                    "assumenda",
                    "eos",
                },
            },
            EndTime: types.MustTimeFromString("2021-06-04T08:40:57.100Z"),
            StartTime: types.MustTimeFromString("2022-12-11T06:00:38.230Z"),
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("neque"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("fuga"),
        PipelineName: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartPipelineReprocessingResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.

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
                    Key: "voluptas",
                    Value: "ab",
                },
            },
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("sequi"),
        ResourceArn: "quo",
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

Removes the given tags (metadata) from the resource.

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
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("inventore"),
        ResourceArn: "nihil",
        TagKeys: []string{
            "accusamus",
            "aliquam",
            "odio",
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

## UpdateChannel

Used to update the settings of a channel.

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
    res, err := s.SDK.UpdateChannel(ctx, operations.UpdateChannelRequest{
        RequestBody: operations.UpdateChannelRequestBody{
            ChannelStorage: &operations.UpdateChannelRequestBodyChannelStorage{
                CustomerManagedS3: &shared.CustomerManagedChannelS3Storage{
                    Bucket: "occaecati",
                    KeyPrefix: sdk.String("commodi"),
                    RoleArn: "sapiente",
                },
                ServiceManagedS3: map[string]interface{}{
                    "deserunt": "molestiae",
                },
            },
            RetentionPeriod: &operations.UpdateChannelRequestBodyRetentionPeriod{
                NumberOfDays: sdk.Int64(35362),
                Unlimited: sdk.Bool(false),
            },
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("fugit"),
        ChannelName: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateDataset

Updates the settings of a dataset.

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
    res, err := s.SDK.UpdateDataset(ctx, operations.UpdateDatasetRequest{
        RequestBody: operations.UpdateDatasetRequestBody{
            Actions: []shared.DatasetAction{
                shared.DatasetAction{
                    ActionName: sdk.String("incidunt"),
                    ContainerAction: &shared.ContainerDatasetAction{
                        ExecutionRoleArn: "atque",
                        Image: "explicabo",
                        ResourceConfiguration: shared.ResourceConfiguration{
                            ComputeType: shared.ComputeTypeEnumAcu1,
                            VolumeSizeInGB: 392676,
                        },
                        Variables: []shared.Variable{
                            shared.Variable{
                                DatasetContentVersionValue: &shared.DatasetContentVersionValue{
                                    DatasetName: "sapiente",
                                },
                                DoubleValue: sdk.Float64(1598.7),
                                Name: "Rose Turner",
                                OutputFileURIValue: &shared.OutputFileURIValue{
                                    FileName: "et",
                                },
                                StringValue: sdk.String("esse"),
                            },
                        },
                    },
                    QueryAction: &shared.SQLQueryDatasetAction{
                        Filters: []shared.QueryFilter{
                            shared.QueryFilter{
                                DeltaTime: &shared.DeltaTime{
                                    OffsetSeconds: 882042,
                                    TimeExpression: "veritatis",
                                },
                            },
                            shared.QueryFilter{
                                DeltaTime: &shared.DeltaTime{
                                    OffsetSeconds: 458604,
                                    TimeExpression: "quod",
                                },
                            },
                            shared.QueryFilter{
                                DeltaTime: &shared.DeltaTime{
                                    OffsetSeconds: 724168,
                                    TimeExpression: "vero",
                                },
                            },
                            shared.QueryFilter{
                                DeltaTime: &shared.DeltaTime{
                                    OffsetSeconds: 399025,
                                    TimeExpression: "quasi",
                                },
                            },
                        },
                        SQLQuery: "saepe",
                    },
                },
                shared.DatasetAction{
                    ActionName: sdk.String("vel"),
                    ContainerAction: &shared.ContainerDatasetAction{
                        ExecutionRoleArn: "harum",
                        Image: "molestiae",
                        ResourceConfiguration: shared.ResourceConfiguration{
                            ComputeType: shared.ComputeTypeEnumAcu2,
                            VolumeSizeInGB: 580197,
                        },
                        Variables: []shared.Variable{
                            shared.Variable{
                                DatasetContentVersionValue: &shared.DatasetContentVersionValue{
                                    DatasetName: "distinctio",
                                },
                                DoubleValue: sdk.Float64(7567.79),
                                Name: "Kristi Renner",
                                OutputFileURIValue: &shared.OutputFileURIValue{
                                    FileName: "consequuntur",
                                },
                                StringValue: sdk.String("consequatur"),
                            },
                            shared.Variable{
                                DatasetContentVersionValue: &shared.DatasetContentVersionValue{
                                    DatasetName: "minus",
                                },
                                DoubleValue: sdk.Float64(3082.86),
                                Name: "Glenn Koch",
                                OutputFileURIValue: &shared.OutputFileURIValue{
                                    FileName: "a",
                                },
                                StringValue: sdk.String("nulla"),
                            },
                        },
                    },
                    QueryAction: &shared.SQLQueryDatasetAction{
                        Filters: []shared.QueryFilter{
                            shared.QueryFilter{
                                DeltaTime: &shared.DeltaTime{
                                    OffsetSeconds: 457223,
                                    TimeExpression: "quasi",
                                },
                            },
                            shared.QueryFilter{
                                DeltaTime: &shared.DeltaTime{
                                    OffsetSeconds: 951875,
                                    TimeExpression: "error",
                                },
                            },
                            shared.QueryFilter{
                                DeltaTime: &shared.DeltaTime{
                                    OffsetSeconds: 575751,
                                    TimeExpression: "pariatur",
                                },
                            },
                        },
                        SQLQuery: "possimus",
                    },
                },
                shared.DatasetAction{
                    ActionName: sdk.String("quia"),
                    ContainerAction: &shared.ContainerDatasetAction{
                        ExecutionRoleArn: "eveniet",
                        Image: "asperiores",
                        ResourceConfiguration: shared.ResourceConfiguration{
                            ComputeType: shared.ComputeTypeEnumAcu2,
                            VolumeSizeInGB: 85001,
                        },
                        Variables: []shared.Variable{
                            shared.Variable{
                                DatasetContentVersionValue: &shared.DatasetContentVersionValue{
                                    DatasetName: "quasi",
                                },
                                DoubleValue: sdk.Float64(6288.99),
                                Name: "Dr. Gene Wiegand",
                                OutputFileURIValue: &shared.OutputFileURIValue{
                                    FileName: "in",
                                },
                                StringValue: sdk.String("eius"),
                            },
                        },
                    },
                    QueryAction: &shared.SQLQueryDatasetAction{
                        Filters: []shared.QueryFilter{
                            shared.QueryFilter{
                                DeltaTime: &shared.DeltaTime{
                                    OffsetSeconds: 849039,
                                    TimeExpression: "soluta",
                                },
                            },
                            shared.QueryFilter{
                                DeltaTime: &shared.DeltaTime{
                                    OffsetSeconds: 33304,
                                    TimeExpression: "aliquam",
                                },
                            },
                            shared.QueryFilter{
                                DeltaTime: &shared.DeltaTime{
                                    OffsetSeconds: 958983,
                                    TimeExpression: "dicta",
                                },
                            },
                        },
                        SQLQuery: "ullam",
                    },
                },
            },
            ContentDeliveryRules: []shared.DatasetContentDeliveryRule{
                shared.DatasetContentDeliveryRule{
                    Destination: shared.DatasetContentDeliveryDestination{
                        IotEventsDestinationConfiguration: &shared.IotEventsDestinationConfiguration{
                            InputName: "ullam",
                            RoleArn: "nisi",
                        },
                        S3DestinationConfiguration: &shared.S3DestinationConfiguration{
                            Bucket: "aut",
                            GlueConfiguration: &shared.GlueConfiguration{
                                DatabaseName: "voluptatum",
                                TableName: "qui",
                            },
                            Key: "quibusdam",
                            RoleArn: "ex",
                        },
                    },
                    EntryName: sdk.String("deleniti"),
                },
                shared.DatasetContentDeliveryRule{
                    Destination: shared.DatasetContentDeliveryDestination{
                        IotEventsDestinationConfiguration: &shared.IotEventsDestinationConfiguration{
                            InputName: "itaque",
                            RoleArn: "dolorum",
                        },
                        S3DestinationConfiguration: &shared.S3DestinationConfiguration{
                            Bucket: "architecto",
                            GlueConfiguration: &shared.GlueConfiguration{
                                DatabaseName: "omnis",
                                TableName: "tenetur",
                            },
                            Key: "quasi",
                            RoleArn: "at",
                        },
                    },
                    EntryName: sdk.String("et"),
                },
            },
            LateDataRules: []shared.LateDataRule{
                shared.LateDataRule{
                    RuleConfiguration: shared.LateDataRuleConfiguration{
                        DeltaTimeSessionWindowConfiguration: &shared.DeltaTimeSessionWindowConfiguration{
                            TimeoutInMinutes: 55965,
                        },
                    },
                    RuleName: sdk.String("minima"),
                },
                shared.LateDataRule{
                    RuleConfiguration: shared.LateDataRuleConfiguration{
                        DeltaTimeSessionWindowConfiguration: &shared.DeltaTimeSessionWindowConfiguration{
                            TimeoutInMinutes: 86532,
                        },
                    },
                    RuleName: sdk.String("consectetur"),
                },
            },
            RetentionPeriod: &operations.UpdateDatasetRequestBodyRetentionPeriod{
                NumberOfDays: sdk.Int64(237173),
                Unlimited: sdk.Bool(false),
            },
            Triggers: []shared.DatasetTrigger{
                shared.DatasetTrigger{
                    Dataset: &shared.TriggeringDataset{
                        Name: "Ms. Kenneth Ledner",
                    },
                    Schedule: &shared.Schedule{
                        Expression: sdk.String("mollitia"),
                    },
                },
                shared.DatasetTrigger{
                    Dataset: &shared.TriggeringDataset{
                        Name: "Mrs. Priscilla Fritsch",
                    },
                    Schedule: &shared.Schedule{
                        Expression: sdk.String("numquam"),
                    },
                },
                shared.DatasetTrigger{
                    Dataset: &shared.TriggeringDataset{
                        Name: "Ms. Benjamin Hirthe DVM",
                    },
                    Schedule: &shared.Schedule{
                        Expression: sdk.String("natus"),
                    },
                },
            },
            VersioningConfiguration: &operations.UpdateDatasetRequestBodyVersioningConfiguration{
                MaxVersions: sdk.Int64(244651),
                Unlimited: sdk.Bool(false),
            },
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        DatasetName: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateDatastore

Used to update the settings of a data store.

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
    res, err := s.SDK.UpdateDatastore(ctx, operations.UpdateDatastoreRequest{
        RequestBody: operations.UpdateDatastoreRequestBody{
            DatastoreStorage: &operations.UpdateDatastoreRequestBodyDatastoreStorage{
                CustomerManagedS3: &shared.CustomerManagedDatastoreS3Storage{
                    Bucket: "officia",
                    KeyPrefix: sdk.String("maxime"),
                    RoleArn: "dignissimos",
                },
                IotSiteWiseMultiLayerStorage: &shared.DatastoreIotSiteWiseMultiLayerStorage{
                    CustomerManagedS3Storage: shared.IotSiteWiseCustomerManagedDatastoreS3Storage{
                        Bucket: "officia",
                        KeyPrefix: sdk.String("asperiores"),
                    },
                },
                ServiceManagedS3: map[string]interface{}{
                    "quae": "quaerat",
                    "porro": "quod",
                },
            },
            FileFormatConfiguration: &operations.UpdateDatastoreRequestBodyFileFormatConfiguration{
                JSONConfiguration: map[string]interface{}{
                    "ab": "adipisci",
                    "fuga": "id",
                },
                ParquetConfiguration: &shared.ParquetConfiguration{
                    SchemaDefinition: &shared.SchemaDefinition{
                        Columns: []shared.Column{
                            shared.Column{
                                Name: "Molly O'Reilly",
                                Type: "fugiat",
                            },
                            shared.Column{
                                Name: "Dora Luettgen",
                                Type: "possimus",
                            },
                        },
                    },
                },
            },
            RetentionPeriod: &operations.UpdateDatastoreRequestBodyRetentionPeriod{
                NumberOfDays: sdk.Int64(706575),
                Unlimited: sdk.Bool(false),
            },
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("nemo"),
        DatastoreName: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdatePipeline

Updates the settings of a pipeline. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.

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
    res, err := s.SDK.UpdatePipeline(ctx, operations.UpdatePipelineRequest{
        RequestBody: operations.UpdatePipelineRequestBody{
            PipelineActivities: []shared.PipelineActivity{
                shared.PipelineActivity{
                    AddAttributes: &shared.AddAttributesActivity{
                        Attributes: map[string]string{
                            "cum": "consectetur",
                        },
                        Name: "Annette Wehner",
                        Next: sdk.String("doloribus"),
                    },
                    Channel: &shared.ChannelActivity{
                        ChannelName: "suscipit",
                        Name: "Rickey Ullrich",
                        Next: sdk.String("sunt"),
                    },
                    Datastore: &shared.DatastoreActivity{
                        DatastoreName: "asperiores",
                        Name: "Ms. Ethel Farrell",
                    },
                    DeviceRegistryEnrich: &shared.DeviceRegistryEnrichActivity{
                        Attribute: "debitis",
                        Name: "Stacy Pollich DVM",
                        Next: sdk.String("libero"),
                        RoleArn: "vitae",
                        ThingName: "accusamus",
                    },
                    DeviceShadowEnrich: &shared.DeviceShadowEnrichActivity{
                        Attribute: "similique",
                        Name: "Kelly Hoeger",
                        Next: sdk.String("minima"),
                        RoleArn: "nobis",
                        ThingName: "dolorum",
                    },
                    Filter: &shared.FilterActivity{
                        Filter: "adipisci",
                        Name: "Ernest Labadie",
                        Next: sdk.String("aliquam"),
                    },
                    Lambda: &shared.LambdaActivity{
                        BatchSize: 885963,
                        LambdaName: "temporibus",
                        Name: "Sherry Ritchie",
                        Next: sdk.String("hic"),
                    },
                    Math: &shared.MathActivity{
                        Attribute: "nesciunt",
                        Math: "culpa",
                        Name: "Dewey Leannon",
                        Next: sdk.String("nobis"),
                    },
                    RemoveAttributes: &shared.RemoveAttributesActivity{
                        Attributes: []string{
                            "rerum",
                        },
                        Name: "Faith Cole",
                        Next: sdk.String("voluptate"),
                    },
                    SelectAttributes: &shared.SelectAttributesActivity{
                        Attributes: []string{
                            "ab",
                            "iste",
                            "dolore",
                        },
                        Name: "Aaron King",
                        Next: sdk.String("explicabo"),
                    },
                },
                shared.PipelineActivity{
                    AddAttributes: &shared.AddAttributesActivity{
                        Attributes: map[string]string{
                            "unde": "architecto",
                            "suscipit": "sapiente",
                        },
                        Name: "Ms. Gregory Wisoky",
                        Next: sdk.String("incidunt"),
                    },
                    Channel: &shared.ChannelActivity{
                        ChannelName: "sed",
                        Name: "Herbert Treutel",
                        Next: sdk.String("occaecati"),
                    },
                    Datastore: &shared.DatastoreActivity{
                        DatastoreName: "quos",
                        Name: "Eddie Goodwin",
                    },
                    DeviceRegistryEnrich: &shared.DeviceRegistryEnrichActivity{
                        Attribute: "ex",
                        Name: "Ethel Towne",
                        Next: sdk.String("quaerat"),
                        RoleArn: "incidunt",
                        ThingName: "ipsam",
                    },
                    DeviceShadowEnrich: &shared.DeviceShadowEnrichActivity{
                        Attribute: "debitis",
                        Name: "Mark Rolfson",
                        Next: sdk.String("minima"),
                        RoleArn: "recusandae",
                        ThingName: "reiciendis",
                    },
                    Filter: &shared.FilterActivity{
                        Filter: "nulla",
                        Name: "Deborah Turcotte",
                        Next: sdk.String("in"),
                    },
                    Lambda: &shared.LambdaActivity{
                        BatchSize: 889234,
                        LambdaName: "beatae",
                        Name: "Jorge Langosh",
                        Next: sdk.String("dolorum"),
                    },
                    Math: &shared.MathActivity{
                        Attribute: "voluptatum",
                        Math: "error",
                        Name: "Rudolph Trantow",
                        Next: sdk.String("nostrum"),
                    },
                    RemoveAttributes: &shared.RemoveAttributesActivity{
                        Attributes: []string{
                            "dolorum",
                            "corrupti",
                            "accusamus",
                        },
                        Name: "Kay Cormier",
                        Next: sdk.String("voluptatem"),
                    },
                    SelectAttributes: &shared.SelectAttributesActivity{
                        Attributes: []string{
                            "expedita",
                            "magnam",
                            "consequatur",
                        },
                        Name: "Brittany Bailey",
                        Next: sdk.String("repudiandae"),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("vel"),
        PipelineName: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
