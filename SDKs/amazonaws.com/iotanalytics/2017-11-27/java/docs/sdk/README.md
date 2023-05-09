# SDK

## Overview

<p>IoT Analytics allows you to collect large amounts of device data, process messages, and store them. You can then query the data and run sophisticated analytics on it. IoT Analytics enables advanced data exploration through integration with Jupyter Notebooks and data visualization through integration with Amazon QuickSight.</p> <p>Traditional analytics and business intelligence tools are designed to process structured data. IoT data often comes from devices that record noisy processes (such as temperature, motion, or sound). As a result the data from these devices can have significant gaps, corrupted messages, and false readings that must be cleaned up before analysis can occur. Also, IoT data is often only meaningful in the context of other data from external sources. </p> <p>IoT Analytics automates the steps required to analyze data from IoT devices. IoT Analytics filters, transforms, and enriches IoT data before storing it in a time-series data store for analysis. You can set up the service to collect only the data you need from your devices, apply mathematical transforms to process the data, and enrich the data with device-specific metadata such as device type and location before storing it. Then, you can analyze your data by running queries using the built-in SQL query engine, or perform more complex analytics and machine learning inference. IoT Analytics includes pre-built models for common IoT use cases so you can answer questions like which devices are about to fail or which customers are at risk of abandoning their wearable devices.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/iotanalytics/>
### Available Operations

* [batchPutMessage](#batchputmessage) - Sends messages to a channel.
* [cancelPipelineReprocessing](#cancelpipelinereprocessing) - Cancels the reprocessing of data through the pipeline.
* [createChannel](#createchannel) - Used to create a channel. A channel collects data from an MQTT topic and archives the raw, unprocessed messages before publishing the data to a pipeline.
* [createDataset](#createdataset) - Used to create a dataset. A dataset stores data retrieved from a data store by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application). This operation creates the skeleton of a dataset. The dataset can be populated manually by calling <code>CreateDatasetContent</code> or automatically according to a trigger you specify.
* [createDatasetContent](#createdatasetcontent) - Creates the content of a dataset by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application).
* [createDatastore](#createdatastore) - Creates a data store, which is a repository for messages.
* [createPipeline](#createpipeline) - Creates a pipeline. A pipeline consumes messages from a channel and allows you to process the messages before storing them in a data store. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.
* [deleteChannel](#deletechannel) - Deletes the specified channel.
* [deleteDataset](#deletedataset) - <p>Deletes the specified dataset.</p> <p>You do not have to delete the content of the dataset before you perform this operation.</p>
* [deleteDatasetContent](#deletedatasetcontent) - Deletes the content of the specified dataset.
* [deleteDatastore](#deletedatastore) - Deletes the specified data store.
* [deletePipeline](#deletepipeline) - Deletes the specified pipeline.
* [describeChannel](#describechannel) - Retrieves information about a channel.
* [describeDataset](#describedataset) - Retrieves information about a dataset.
* [describeDatastore](#describedatastore) - Retrieves information about a data store.
* [describeLoggingOptions](#describeloggingoptions) - Retrieves the current settings of the IoT Analytics logging options.
* [describePipeline](#describepipeline) - Retrieves information about a pipeline.
* [getDatasetContent](#getdatasetcontent) - Retrieves the contents of a dataset as presigned URIs.
* [listChannels](#listchannels) - Retrieves a list of channels.
* [listDatasetContents](#listdatasetcontents) - Lists information about dataset contents that have been created.
* [listDatasets](#listdatasets) - Retrieves information about datasets.
* [listDatastores](#listdatastores) - Retrieves a list of data stores.
* [listPipelines](#listpipelines) - Retrieves a list of pipelines.
* [listTagsForResource](#listtagsforresource) - Lists the tags (metadata) that you have assigned to the resource.
* [putLoggingOptions](#putloggingoptions) - <p>Sets or updates the IoT Analytics logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect. </p>
* [runPipelineActivity](#runpipelineactivity) - Simulates the results of running a pipeline activity on a message payload.
* [sampleChannelData](#samplechanneldata) - Retrieves a sample of messages from the specified channel ingested during the specified timeframe. Up to 10 messages can be retrieved.
* [startPipelineReprocessing](#startpipelinereprocessing) - Starts the reprocessing of raw message data through the pipeline.
* [tagResource](#tagresource) - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
* [untagResource](#untagresource) - Removes the given tags (metadata) from the resource.
* [updateChannel](#updatechannel) - Used to update the settings of a channel.
* [updateDataset](#updatedataset) - Updates the settings of a dataset.
* [updateDatastore](#updatedatastore) - Used to update the settings of a data store.
* [updatePipeline](#updatepipeline) - Updates the settings of a pipeline. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.

## batchPutMessage

Sends messages to a channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchPutMessageRequest;
import org.openapis.openapi.models.operations.BatchPutMessageRequestBody;
import org.openapis.openapi.models.operations.BatchPutMessageResponse;
import org.openapis.openapi.models.shared.Message;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchPutMessageRequest req = new BatchPutMessageRequest(                new BatchPutMessageRequestBody("iusto",                 new org.openapis.openapi.models.shared.Message[]{{
                                                add(new Message("temporibus", "ab") {{
                                                    messageId = "nisi";
                                                    payload = "recusandae";
                                                }}),
                                                add(new Message("deserunt", "perferendis") {{
                                                    messageId = "quis";
                                                    payload = "veritatis";
                                                }}),
                                                add(new Message("sapiente", "quo") {{
                                                    messageId = "ipsam";
                                                    payload = "repellendus";
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "at";
                xAmzCredential = "at";
                xAmzDate = "maiores";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "quod";
            }};            

            BatchPutMessageResponse res = sdk.sdk.batchPutMessage(req);

            if (res.batchPutMessageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelPipelineReprocessing

Cancels the reprocessing of data through the pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelPipelineReprocessingRequest;
import org.openapis.openapi.models.operations.CancelPipelineReprocessingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelPipelineReprocessingRequest req = new CancelPipelineReprocessingRequest("totam", "porro") {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "nam";
                xAmzDate = "officia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "deleniti";
            }};            

            CancelPipelineReprocessingResponse res = sdk.sdk.cancelPipelineReprocessing(req);

            if (res.cancelPipelineReprocessingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createChannel

Used to create a channel. A channel collects data from an MQTT topic and archives the raw, unprocessed messages before publishing the data to a pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateChannelRequest;
import org.openapis.openapi.models.operations.CreateChannelRequestBody;
import org.openapis.openapi.models.operations.CreateChannelRequestBodyChannelStorage;
import org.openapis.openapi.models.operations.CreateChannelRequestBodyRetentionPeriod;
import org.openapis.openapi.models.operations.CreateChannelResponse;
import org.openapis.openapi.models.shared.CustomerManagedChannelS3Storage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateChannelRequest req = new CreateChannelRequest(                new CreateChannelRequestBody("optio") {{
                                channelStorage = new CreateChannelRequestBodyChannelStorage() {{
                                    customerManagedS3 = new CustomerManagedChannelS3Storage("totam", "beatae") {{
                                        keyPrefix = "commodi";
                                    }};;
                                    serviceManagedS3 = new java.util.HashMap<String, Object>() {{
                                        put("modi", "qui");
                                        put("impedit", "cum");
                                    }};
                                }};;
                                retentionPeriod = new CreateChannelRequestBodyRetentionPeriod() {{
                                    numberOfDays = 456150L;
                                    unlimited = false;
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("perferendis", "ad") {{
                                        key = "excepturi";
                                        value = "aspernatur";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "sed";
                xAmzCredential = "iste";
                xAmzDate = "dolor";
                xAmzSecurityToken = "natus";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "hic";
            }};            

            CreateChannelResponse res = sdk.sdk.createChannel(req);

            if (res.createChannelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDataset

Used to create a dataset. A dataset stores data retrieved from a data store by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application). This operation creates the skeleton of a dataset. The dataset can be populated manually by calling <code>CreateDatasetContent</code> or automatically according to a trigger you specify.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDatasetRequest;
import org.openapis.openapi.models.operations.CreateDatasetRequestBody;
import org.openapis.openapi.models.operations.CreateDatasetRequestBodyRetentionPeriod;
import org.openapis.openapi.models.operations.CreateDatasetRequestBodyVersioningConfiguration;
import org.openapis.openapi.models.operations.CreateDatasetResponse;
import org.openapis.openapi.models.shared.ComputeTypeEnum;
import org.openapis.openapi.models.shared.ContainerDatasetAction;
import org.openapis.openapi.models.shared.DatasetAction;
import org.openapis.openapi.models.shared.DatasetContentDeliveryDestination;
import org.openapis.openapi.models.shared.DatasetContentDeliveryRule;
import org.openapis.openapi.models.shared.DatasetContentVersionValue;
import org.openapis.openapi.models.shared.DatasetTrigger;
import org.openapis.openapi.models.shared.DeltaTime;
import org.openapis.openapi.models.shared.DeltaTimeSessionWindowConfiguration;
import org.openapis.openapi.models.shared.GlueConfiguration;
import org.openapis.openapi.models.shared.IotEventsDestinationConfiguration;
import org.openapis.openapi.models.shared.LateDataRule;
import org.openapis.openapi.models.shared.LateDataRuleConfiguration;
import org.openapis.openapi.models.shared.OutputFileUriValue;
import org.openapis.openapi.models.shared.QueryFilter;
import org.openapis.openapi.models.shared.ResourceConfiguration;
import org.openapis.openapi.models.shared.S3DestinationConfiguration;
import org.openapis.openapi.models.shared.Schedule;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SqlQueryDatasetAction;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TriggeringDataset;
import org.openapis.openapi.models.shared.Variable;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDatasetRequest req = new CreateDatasetRequest(                new CreateDatasetRequestBody(                new org.openapis.openapi.models.shared.DatasetAction[]{{
                                                add(new DatasetAction() {{
                                                    actionName = "in";
                                                    containerAction = new ContainerDatasetAction("minima", "excepturi",                 new ResourceConfiguration(ComputeTypeEnum.ACU1, 438601L);) {{
                                                        executionRoleArn = "corporis";
                                                        image = "iste";
                                                        resourceConfiguration = new ResourceConfiguration(ComputeTypeEnum.ACU2, 99280L) {{
                                                            computeType = ComputeTypeEnum.ACU1;
                                                            volumeSizeInGB = 902349L;
                                                        }};
                                                        variables = new org.openapis.openapi.models.shared.Variable[]{{
                                                            add(new Variable("nemo") {{
                                                                datasetContentVersionValue = new DatasetContentVersionValue("est") {{
                                                                    datasetName = "reiciendis";
                                                                }};
                                                                doubleValue = 6531.4;
                                                                name = "Ernest Ebert";
                                                                outputFileUriValue = new OutputFileUriValue("enim") {{
                                                                    fileName = "nobis";
                                                                }};
                                                                stringValue = "omnis";
                                                            }}),
                                                        }};
                                                    }};
                                                    queryAction = new SqlQueryDatasetAction("molestiae") {{
                                                        filters = new org.openapis.openapi.models.shared.QueryFilter[]{{
                                                            add(new QueryFilter() {{
                                                                deltaTime = new DeltaTime(102044L, "mollitia") {{
                                                                    offsetSeconds = 988374L;
                                                                    timeExpression = "sapiente";
                                                                }};
                                                            }}),
                                                            add(new QueryFilter() {{
                                                                deltaTime = new DeltaTime(161309L, "repellat") {{
                                                                    offsetSeconds = 208876L;
                                                                    timeExpression = "culpa";
                                                                }};
                                                            }}),
                                                            add(new QueryFilter() {{
                                                                deltaTime = new DeltaTime(253291L, "commodi") {{
                                                                    offsetSeconds = 653108L;
                                                                    timeExpression = "occaecati";
                                                                }};
                                                            }}),
                                                        }};
                                                        sqlQuery = "quam";
                                                    }};
                                                }}),
                                                add(new DatasetAction() {{
                                                    actionName = "velit";
                                                    containerAction = new ContainerDatasetAction("ut", "maiores",                 new ResourceConfiguration(ComputeTypeEnum.ACU1, 359444L);) {{
                                                        executionRoleArn = "error";
                                                        image = "quia";
                                                        resourceConfiguration = new ResourceConfiguration(ComputeTypeEnum.ACU2, 656330L) {{
                                                            computeType = ComputeTypeEnum.ACU1;
                                                            volumeSizeInGB = 110375L;
                                                        }};
                                                        variables = new org.openapis.openapi.models.shared.Variable[]{{
                                                            add(new Variable("quasi") {{
                                                                datasetContentVersionValue = new DatasetContentVersionValue("quo") {{
                                                                    datasetName = "odit";
                                                                }};
                                                                doubleValue = 1965.82;
                                                                name = "Vernon Ondricka Sr.";
                                                                outputFileUriValue = new OutputFileUriValue("temporibus") {{
                                                                    fileName = "error";
                                                                }};
                                                                stringValue = "laborum";
                                                            }}),
                                                            add(new Variable("reprehenderit") {{
                                                                datasetContentVersionValue = new DatasetContentVersionValue("voluptatibus") {{
                                                                    datasetName = "reiciendis";
                                                                }};
                                                                doubleValue = 8781.94;
                                                                name = "Miss Irma Wolff";
                                                                outputFileUriValue = new OutputFileUriValue("perferendis") {{
                                                                    fileName = "cum";
                                                                }};
                                                                stringValue = "doloremque";
                                                            }}),
                                                        }};
                                                    }};
                                                    queryAction = new SqlQueryDatasetAction("quidem") {{
                                                        filters = new org.openapis.openapi.models.shared.QueryFilter[]{{
                                                            add(new QueryFilter() {{
                                                                deltaTime = new DeltaTime(688661L, "enim") {{
                                                                    offsetSeconds = 480894L;
                                                                    timeExpression = "dicta";
                                                                }};
                                                            }}),
                                                            add(new QueryFilter() {{
                                                                deltaTime = new DeltaTime(918236L, "quae") {{
                                                                    offsetSeconds = 880476L;
                                                                    timeExpression = "commodi";
                                                                }};
                                                            }}),
                                                        }};
                                                        sqlQuery = "ipsum";
                                                    }};
                                                }}),
                                                add(new DatasetAction() {{
                                                    actionName = "molestias";
                                                    containerAction = new ContainerDatasetAction("labore", "modi",                 new ResourceConfiguration(ComputeTypeEnum.ACU1, 397821L);) {{
                                                        executionRoleArn = "excepturi";
                                                        image = "pariatur";
                                                        resourceConfiguration = new ResourceConfiguration(ComputeTypeEnum.ACU2, 916723L) {{
                                                            computeType = ComputeTypeEnum.ACU1;
                                                            volumeSizeInGB = 508969L;
                                                        }};
                                                        variables = new org.openapis.openapi.models.shared.Variable[]{{
                                                            add(new Variable("quibusdam") {{
                                                                datasetContentVersionValue = new DatasetContentVersionValue("sint") {{
                                                                    datasetName = "repudiandae";
                                                                }};
                                                                doubleValue = 831.12;
                                                                name = "Miss Randall Hamill";
                                                                outputFileUriValue = new OutputFileUriValue("deserunt") {{
                                                                    fileName = "explicabo";
                                                                }};
                                                                stringValue = "distinctio";
                                                            }}),
                                                        }};
                                                    }};
                                                    queryAction = new SqlQueryDatasetAction("delectus") {{
                                                        filters = new org.openapis.openapi.models.shared.QueryFilter[]{{
                                                            add(new QueryFilter() {{
                                                                deltaTime = new DeltaTime(164940L, "assumenda") {{
                                                                    offsetSeconds = 552822L;
                                                                    timeExpression = "perferendis";
                                                                }};
                                                            }}),
                                                            add(new QueryFilter() {{
                                                                deltaTime = new DeltaTime(146441L, "dolorum") {{
                                                                    offsetSeconds = 369808L;
                                                                    timeExpression = "alias";
                                                                }};
                                                            }}),
                                                            add(new QueryFilter() {{
                                                                deltaTime = new DeltaTime(703737L, "tempore") {{
                                                                    offsetSeconds = 569618L;
                                                                    timeExpression = "tempora";
                                                                }};
                                                            }}),
                                                        }};
                                                        sqlQuery = "labore";
                                                    }};
                                                }}),
                                            }}, "eum") {{
                                contentDeliveryRules = new org.openapis.openapi.models.shared.DatasetContentDeliveryRule[]{{
                                    add(new DatasetContentDeliveryRule(                new DatasetContentDeliveryDestination() {{
                                                        iotEventsDestinationConfiguration = new IotEventsDestinationConfiguration("rerum", "dicta");;
                                                        s3DestinationConfiguration = new S3DestinationConfiguration("magnam", "cumque", "facere") {{
                                                            glueConfiguration = new GlueConfiguration("ea", "aliquid");;
                                                        }};;
                                                    }};) {{
                                        destination = new DatasetContentDeliveryDestination() {{
                                            iotEventsDestinationConfiguration = new IotEventsDestinationConfiguration("aliquid", "provident") {{
                                                inputName = "eligendi";
                                                roleArn = "sint";
                                            }};
                                            s3DestinationConfiguration = new S3DestinationConfiguration("in", "in", "illum") {{
                                                bucket = "necessitatibus";
                                                glueConfiguration = new GlueConfiguration("dolor", "debitis") {{
                                                    databaseName = "sint";
                                                    tableName = "officia";
                                                }};
                                                key = "a";
                                                roleArn = "dolorum";
                                            }};
                                        }};
                                        entryName = "maiores";
                                    }}),
                                }};
                                lateDataRules = new org.openapis.openapi.models.shared.LateDataRule[]{{
                                    add(new LateDataRule(                new LateDataRuleConfiguration() {{
                                                        deltaTimeSessionWindowConfiguration = new DeltaTimeSessionWindowConfiguration(313218L);;
                                                    }};) {{
                                        ruleConfiguration = new LateDataRuleConfiguration() {{
                                            deltaTimeSessionWindowConfiguration = new DeltaTimeSessionWindowConfiguration(249796L) {{
                                                timeoutInMinutes = 881104L;
                                            }};
                                        }};
                                        ruleName = "occaecati";
                                    }}),
                                    add(new LateDataRule(                new LateDataRuleConfiguration() {{
                                                        deltaTimeSessionWindowConfiguration = new DeltaTimeSessionWindowConfiguration(588465L);;
                                                    }};) {{
                                        ruleConfiguration = new LateDataRuleConfiguration() {{
                                            deltaTimeSessionWindowConfiguration = new DeltaTimeSessionWindowConfiguration(965417L) {{
                                                timeoutInMinutes = 881736L;
                                            }};
                                        }};
                                        ruleName = "quidem";
                                    }}),
                                    add(new LateDataRule(                new LateDataRuleConfiguration() {{
                                                        deltaTimeSessionWindowConfiguration = new DeltaTimeSessionWindowConfiguration(533206L);;
                                                    }};) {{
                                        ruleConfiguration = new LateDataRuleConfiguration() {{
                                            deltaTimeSessionWindowConfiguration = new DeltaTimeSessionWindowConfiguration(659669L) {{
                                                timeoutInMinutes = 725255L;
                                            }};
                                        }};
                                        ruleName = "blanditiis";
                                    }}),
                                }};
                                retentionPeriod = new CreateDatasetRequestBodyRetentionPeriod() {{
                                    numberOfDays = 956084L;
                                    unlimited = false;
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("vel", "natus") {{
                                        key = "deserunt";
                                        value = "nisi";
                                    }}),
                                }};
                                triggers = new org.openapis.openapi.models.shared.DatasetTrigger[]{{
                                    add(new DatasetTrigger() {{
                                        dataset = new TriggeringDataset("id") {{
                                            name = "Dorothy Kovacek";
                                        }};
                                        schedule = new Schedule() {{
                                            expression = "labore";
                                        }};
                                    }}),
                                    add(new DatasetTrigger() {{
                                        dataset = new TriggeringDataset("vero") {{
                                            name = "Laurie Mosciski";
                                        }};
                                        schedule = new Schedule() {{
                                            expression = "aspernatur";
                                        }};
                                    }}),
                                    add(new DatasetTrigger() {{
                                        dataset = new TriggeringDataset("provident") {{
                                            name = "Danielle Bosco";
                                        }};
                                        schedule = new Schedule() {{
                                            expression = "quos";
                                        }};
                                    }}),
                                }};
                                versioningConfiguration = new CreateDatasetRequestBodyVersioningConfiguration() {{
                                    maxVersions = 574325L;
                                    unlimited = false;
                                }};;
                            }};) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "reiciendis";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "ad";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "dolor";
            }};            

            CreateDatasetResponse res = sdk.sdk.createDataset(req);

            if (res.createDatasetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDatasetContent

Creates the content of a dataset by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDatasetContentRequest;
import org.openapis.openapi.models.operations.CreateDatasetContentRequestBody;
import org.openapis.openapi.models.operations.CreateDatasetContentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDatasetContentRequest req = new CreateDatasetContentRequest(                new CreateDatasetContentRequestBody() {{
                                versionId = "odit";
                            }};, "nemo") {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "iure";
                xAmzCredential = "doloribus";
                xAmzDate = "debitis";
                xAmzSecurityToken = "eius";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "deleniti";
            }};            

            CreateDatasetContentResponse res = sdk.sdk.createDatasetContent(req);

            if (res.createDatasetContentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDatastore

Creates a data store, which is a repository for messages.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDatastoreRequest;
import org.openapis.openapi.models.operations.CreateDatastoreRequestBody;
import org.openapis.openapi.models.operations.CreateDatastoreRequestBodyDatastorePartitions;
import org.openapis.openapi.models.operations.CreateDatastoreRequestBodyDatastoreStorage;
import org.openapis.openapi.models.operations.CreateDatastoreRequestBodyFileFormatConfiguration;
import org.openapis.openapi.models.operations.CreateDatastoreRequestBodyRetentionPeriod;
import org.openapis.openapi.models.operations.CreateDatastoreResponse;
import org.openapis.openapi.models.shared.Column;
import org.openapis.openapi.models.shared.CustomerManagedDatastoreS3Storage;
import org.openapis.openapi.models.shared.DatastoreIotSiteWiseMultiLayerStorage;
import org.openapis.openapi.models.shared.DatastorePartition;
import org.openapis.openapi.models.shared.IotSiteWiseCustomerManagedDatastoreS3Storage;
import org.openapis.openapi.models.shared.ParquetConfiguration;
import org.openapis.openapi.models.shared.Partition;
import org.openapis.openapi.models.shared.SchemaDefinition;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TimestampPartition;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDatastoreRequest req = new CreateDatastoreRequest(                new CreateDatastoreRequestBody("in") {{
                                datastorePartitions = new CreateDatastoreRequestBodyDatastorePartitions() {{
                                    partitions = new org.openapis.openapi.models.shared.DatastorePartition[]{{
                                        add(new DatastorePartition() {{
                                            attributePartition = new Partition("repudiandae") {{
                                                attributeName = "architecto";
                                            }};
                                            timestampPartition = new TimestampPartition("nihil") {{
                                                attributeName = "ullam";
                                                timestampFormat = "expedita";
                                            }};
                                        }}),
                                    }};
                                }};;
                                datastoreStorage = new CreateDatastoreRequestBodyDatastoreStorage() {{
                                    customerManagedS3 = new CustomerManagedDatastoreS3Storage("repellat", "quibusdam") {{
                                        keyPrefix = "sed";
                                    }};;
                                    iotSiteWiseMultiLayerStorage = new DatastoreIotSiteWiseMultiLayerStorage(                new IotSiteWiseCustomerManagedDatastoreS3Storage("saepe") {{
                                                        keyPrefix = "pariatur";
                                                    }};);;
                                    serviceManagedS3 = new java.util.HashMap<String, Object>() {{
                                        put("consequuntur", "praesentium");
                                    }};
                                }};;
                                fileFormatConfiguration = new CreateDatastoreRequestBodyFileFormatConfiguration() {{
                                    jsonConfiguration = new java.util.HashMap<String, Object>() {{
                                        put("magni", "sunt");
                                        put("quo", "illum");
                                        put("pariatur", "maxime");
                                    }};
                                    parquetConfiguration = new ParquetConfiguration() {{
                                        schemaDefinition = new SchemaDefinition() {{
                                            columns = new org.openapis.openapi.models.shared.Column[]{{
                                                add(new Column("ipsam", "voluptate") {{
                                                    name = "Mr. Harry Jaskolski";
                                                    type = "quidem";
                                                }}),
                                                add(new Column("perferendis", "fugiat") {{
                                                    name = "Candice Beatty";
                                                    type = "voluptatibus";
                                                }}),
                                            }};
                                        }};;
                                    }};;
                                }};;
                                retentionPeriod = new CreateDatastoreRequestBodyRetentionPeriod() {{
                                    numberOfDays = 230742L;
                                    unlimited = false;
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("hic", "libero") {{
                                        key = "cumque";
                                        value = "corporis";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "quis";
                xAmzDate = "totam";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "quis";
            }};            

            CreateDatastoreResponse res = sdk.sdk.createDatastore(req);

            if (res.createDatastoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPipeline

Creates a pipeline. A pipeline consumes messages from a channel and allows you to process the messages before storing them in a data store. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePipelineRequest;
import org.openapis.openapi.models.operations.CreatePipelineRequestBody;
import org.openapis.openapi.models.operations.CreatePipelineResponse;
import org.openapis.openapi.models.shared.AddAttributesActivity;
import org.openapis.openapi.models.shared.ChannelActivity;
import org.openapis.openapi.models.shared.DatastoreActivity;
import org.openapis.openapi.models.shared.DeviceRegistryEnrichActivity;
import org.openapis.openapi.models.shared.DeviceShadowEnrichActivity;
import org.openapis.openapi.models.shared.FilterActivity;
import org.openapis.openapi.models.shared.LambdaActivity;
import org.openapis.openapi.models.shared.MathActivity;
import org.openapis.openapi.models.shared.PipelineActivity;
import org.openapis.openapi.models.shared.RemoveAttributesActivity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SelectAttributesActivity;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePipelineRequest req = new CreatePipelineRequest(                new CreatePipelineRequestBody(                new org.openapis.openapi.models.shared.PipelineActivity[]{{
                                                add(new PipelineActivity() {{
                                                    addAttributes = new AddAttributesActivity(                new java.util.HashMap<String, String>() {{
                                                                        put("facilis", "perspiciatis");
                                                                        put("voluptatem", "porro");
                                                                        put("consequuntur", "blanditiis");
                                                                    }}, "error") {{
                                                        attributes = new java.util.HashMap<String, String>() {{
                                                            put("dolores", "minus");
                                                        }};
                                                        name = "Rosa Swift";
                                                        next = "recusandae";
                                                    }};
                                                    channel = new ChannelActivity("iste", "dolorum") {{
                                                        channelName = "eaque";
                                                        name = "Jean Ferry";
                                                        next = "modi";
                                                    }};
                                                    datastore = new DatastoreActivity("quaerat", "quos") {{
                                                        datastoreName = "deleniti";
                                                        name = "Rene Rolfson";
                                                    }};
                                                    deviceRegistryEnrich = new DeviceRegistryEnrichActivity("voluptate", "dignissimos", "reiciendis", "amet") {{
                                                        attribute = "aliquid";
                                                        name = "Dawn Fadel";
                                                        next = "hic";
                                                        roleArn = "excepturi";
                                                        thingName = "cum";
                                                    }};
                                                    deviceShadowEnrich = new DeviceShadowEnrichActivity("voluptatibus", "voluptas", "natus", "eos") {{
                                                        attribute = "dolorum";
                                                        name = "Ms. Christine Beer";
                                                        next = "quaerat";
                                                        roleArn = "accusamus";
                                                        thingName = "quidem";
                                                    }};
                                                    filter = new FilterActivity("voluptate", "dolorum") {{
                                                        filter = "atque";
                                                        name = "Ginger Bergstrom";
                                                        next = "iusto";
                                                    }};
                                                    lambda = new LambdaActivity(663078L, "saepe", "eius") {{
                                                        batchSize = 536579L;
                                                        lambdaName = "omnis";
                                                        name = "Kelvin Zboncak";
                                                        next = "voluptate";
                                                    }};
                                                    math = new MathActivity("deserunt", "provident", "minima") {{
                                                        attribute = "aspernatur";
                                                        math = "perferendis";
                                                        name = "Marianne Thompson";
                                                        next = "suscipit";
                                                    }};
                                                    removeAttributes = new RemoveAttributesActivity(                new String[]{{
                                                                        add("a"),
                                                                        add("esse"),
                                                                        add("harum"),
                                                                    }}, "iusto") {{
                                                        attributes = new String[]{{
                                                            add("totam"),
                                                            add("similique"),
                                                            add("alias"),
                                                            add("at"),
                                                        }};
                                                        name = "Rhonda Kautzer";
                                                        next = "qui";
                                                    }};
                                                    selectAttributes = new SelectAttributesActivity(                new String[]{{
                                                                        add("sapiente"),
                                                                    }}, "totam") {{
                                                        attributes = new String[]{{
                                                            add("quisquam"),
                                                        }};
                                                        name = "Marvin Renner";
                                                        next = "enim";
                                                    }};
                                                }}),
                                            }}, "nihil") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("sed", "vel") {{
                                        key = "expedita";
                                        value = "neque";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "deserunt";
                xAmzDate = "quam";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "qui";
            }};            

            CreatePipelineResponse res = sdk.sdk.createPipeline(req);

            if (res.createPipelineResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteChannel

Deletes the specified channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteChannelRequest;
import org.openapis.openapi.models.operations.DeleteChannelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteChannelRequest req = new DeleteChannelRequest("maxime") {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "dicta";
                xAmzDate = "laborum";
                xAmzSecurityToken = "totam";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "aspernatur";
            }};            

            DeleteChannelResponse res = sdk.sdk.deleteChannel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDataset

<p>Deletes the specified dataset.</p> <p>You do not have to delete the content of the dataset before you perform this operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDatasetRequest;
import org.openapis.openapi.models.operations.DeleteDatasetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDatasetRequest req = new DeleteDatasetRequest("distinctio") {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "quam";
                xAmzDate = "molestias";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "neque";
            }};            

            DeleteDatasetResponse res = sdk.sdk.deleteDataset(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDatasetContent

Deletes the content of the specified dataset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDatasetContentRequest;
import org.openapis.openapi.models.operations.DeleteDatasetContentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDatasetContentRequest req = new DeleteDatasetContentRequest("magni") {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "ullam";
                xAmzDate = "nam";
                xAmzSecurityToken = "hic";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "cumque";
                versionId = "soluta";
            }};            

            DeleteDatasetContentResponse res = sdk.sdk.deleteDatasetContent(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDatastore

Deletes the specified data store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDatastoreRequest;
import org.openapis.openapi.models.operations.DeleteDatastoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDatastoreRequest req = new DeleteDatastoreRequest("et") {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "veritatis";
                xAmzDate = "nobis";
                xAmzSecurityToken = "quos";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "cupiditate";
            }};            

            DeleteDatastoreResponse res = sdk.sdk.deleteDatastore(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePipeline

Deletes the specified pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePipelineRequest;
import org.openapis.openapi.models.operations.DeletePipelineResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePipelineRequest req = new DeletePipelineRequest("delectus") {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "labore";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "quae";
            }};            

            DeletePipelineResponse res = sdk.sdk.deletePipeline(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeChannel

Retrieves information about a channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeChannelRequest;
import org.openapis.openapi.models.operations.DescribeChannelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeChannelRequest req = new DescribeChannelRequest("quas") {{
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "est";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "porro";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "ut";
                includeStatistics = false;
            }};            

            DescribeChannelResponse res = sdk.sdk.describeChannel(req);

            if (res.describeChannelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDataset

Retrieves information about a dataset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDatasetRequest;
import org.openapis.openapi.models.operations.DescribeDatasetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDatasetRequest req = new DescribeDatasetRequest("cupiditate") {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "quae";
                xAmzCredential = "laudantium";
                xAmzDate = "odio";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "quisquam";
            }};            

            DescribeDatasetResponse res = sdk.sdk.describeDataset(req);

            if (res.describeDatasetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDatastore

Retrieves information about a data store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDatastoreRequest;
import org.openapis.openapi.models.operations.DescribeDatastoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDatastoreRequest req = new DescribeDatastoreRequest("omnis") {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "delectus";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "tenetur";
                includeStatistics = false;
            }};            

            DescribeDatastoreResponse res = sdk.sdk.describeDatastore(req);

            if (res.describeDatastoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLoggingOptions

Retrieves the current settings of the IoT Analytics logging options.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLoggingOptionsRequest;
import org.openapis.openapi.models.operations.DescribeLoggingOptionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLoggingOptionsRequest req = new DescribeLoggingOptionsRequest() {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quod";
                xAmzDate = "odio";
                xAmzSecurityToken = "similique";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "vero";
            }};            

            DescribeLoggingOptionsResponse res = sdk.sdk.describeLoggingOptions(req);

            if (res.describeLoggingOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePipeline

Retrieves information about a pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePipelineRequest;
import org.openapis.openapi.models.operations.DescribePipelineResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePipelineRequest req = new DescribePipelineRequest("dolore") {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "illum";
                xAmzCredential = "sequi";
                xAmzDate = "natus";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            DescribePipelineResponse res = sdk.sdk.describePipeline(req);

            if (res.describePipelineResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDatasetContent

Retrieves the contents of a dataset as presigned URIs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDatasetContentRequest;
import org.openapis.openapi.models.operations.GetDatasetContentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDatasetContentRequest req = new GetDatasetContentRequest("nulla") {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "porro";
                xAmzCredential = "maiores";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "eligendi";
                xAmzSignedHeaders = "ducimus";
                versionId = "alias";
            }};            

            GetDatasetContentResponse res = sdk.sdk.getDatasetContent(req);

            if (res.getDatasetContentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listChannels

Retrieves a list of channels.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListChannelsRequest;
import org.openapis.openapi.models.operations.ListChannelsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListChannelsRequest req = new ListChannelsRequest() {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "ea";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "vel";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "magnam";
                maxResults = 189848L;
                nextToken = "ex";
            }};            

            ListChannelsResponse res = sdk.sdk.listChannels(req);

            if (res.listChannelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDatasetContents

Lists information about dataset contents that have been created.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDatasetContentsRequest;
import org.openapis.openapi.models.operations.ListDatasetContentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDatasetContentsRequest req = new ListDatasetContentsRequest("dicta") {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "quasi";
                xAmzDate = "ex";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "voluptatibus";
                maxResults = 343605L;
                nextToken = "sapiente";
                scheduledBefore = OffsetDateTime.parse("2020-04-13T07:43:17.350Z");
                scheduledOnOrAfter = OffsetDateTime.parse("2022-03-24T11:20:42.976Z");
            }};            

            ListDatasetContentsResponse res = sdk.sdk.listDatasetContents(req);

            if (res.listDatasetContentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDatasets

Retrieves information about datasets.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDatasetsRequest;
import org.openapis.openapi.models.operations.ListDatasetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDatasetsRequest req = new ListDatasetsRequest() {{
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "inventore";
                xAmzDate = "magnam";
                xAmzSecurityToken = "ea";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "consectetur";
                maxResults = 926213L;
                nextToken = "aspernatur";
            }};            

            ListDatasetsResponse res = sdk.sdk.listDatasets(req);

            if (res.listDatasetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDatastores

Retrieves a list of data stores.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDatastoresRequest;
import org.openapis.openapi.models.operations.ListDatastoresResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDatastoresRequest req = new ListDatastoresRequest() {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "a";
                xAmzCredential = "libero";
                xAmzDate = "aut";
                xAmzSecurityToken = "aut";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "impedit";
                maxResults = 304582L;
                nextToken = "fugit";
            }};            

            ListDatastoresResponse res = sdk.sdk.listDatastores(req);

            if (res.listDatastoresResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPipelines

Retrieves a list of pipelines.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPipelinesRequest;
import org.openapis.openapi.models.operations.ListPipelinesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPipelinesRequest req = new ListPipelinesRequest() {{
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "non";
                xAmzCredential = "et";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "velit";
                maxResults = 432148L;
                nextToken = "autem";
            }};            

            ListPipelinesResponse res = sdk.sdk.listPipelines(req);

            if (res.listPipelinesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags (metadata) that you have assigned to the resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("quas") {{
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "voluptas";
                xAmzDate = "libero";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "numquam";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putLoggingOptions

<p>Sets or updates the IoT Analytics logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutLoggingOptionsRequest;
import org.openapis.openapi.models.operations.PutLoggingOptionsRequestBody;
import org.openapis.openapi.models.operations.PutLoggingOptionsRequestBodyLoggingOptions;
import org.openapis.openapi.models.operations.PutLoggingOptionsResponse;
import org.openapis.openapi.models.shared.LoggingLevelEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutLoggingOptionsRequest req = new PutLoggingOptionsRequest(                new PutLoggingOptionsRequestBody(                new PutLoggingOptionsRequestBodyLoggingOptions() {{
                                                enabled = false;
                                                level = LoggingLevelEnum.ERROR;
                                                roleArn = "provident";
                                            }};);) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "magnam";
                xAmzDate = "odio";
                xAmzSecurityToken = "eius";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "esse";
            }};            

            PutLoggingOptionsResponse res = sdk.sdk.putLoggingOptions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runPipelineActivity

Simulates the results of running a pipeline activity on a message payload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunPipelineActivityRequest;
import org.openapis.openapi.models.operations.RunPipelineActivityRequestBody;
import org.openapis.openapi.models.operations.RunPipelineActivityRequestBodyPipelineActivity;
import org.openapis.openapi.models.operations.RunPipelineActivityResponse;
import org.openapis.openapi.models.shared.AddAttributesActivity;
import org.openapis.openapi.models.shared.ChannelActivity;
import org.openapis.openapi.models.shared.DatastoreActivity;
import org.openapis.openapi.models.shared.DeviceRegistryEnrichActivity;
import org.openapis.openapi.models.shared.DeviceShadowEnrichActivity;
import org.openapis.openapi.models.shared.FilterActivity;
import org.openapis.openapi.models.shared.LambdaActivity;
import org.openapis.openapi.models.shared.MathActivity;
import org.openapis.openapi.models.shared.RemoveAttributesActivity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SelectAttributesActivity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RunPipelineActivityRequest req = new RunPipelineActivityRequest(                new RunPipelineActivityRequestBody(                new String[]{{
                                                add("reprehenderit"),
                                                add("quidem"),
                                                add("fugiat"),
                                            }},                 new RunPipelineActivityRequestBodyPipelineActivity() {{
                                                addAttributes = new AddAttributesActivity(                new java.util.HashMap<String, String>() {{
                                                                    put("eum", "suscipit");
                                                                    put("assumenda", "eos");
                                                                }}, "praesentium") {{
                                                    next = "quisquam";
                                                }};;
                                                channel = new ChannelActivity("veritatis", "ipsa") {{
                                                    next = "id";
                                                }};;
                                                datastore = new DatastoreActivity("quidem", "neque");;
                                                deviceRegistryEnrich = new DeviceRegistryEnrichActivity("quo", "illum", "quo", "fuga") {{
                                                    next = "eius";
                                                }};;
                                                deviceShadowEnrich = new DeviceShadowEnrichActivity("eos", "voluptas", "ab", "cupiditate") {{
                                                    next = "consequatur";
                                                }};;
                                                filter = new FilterActivity("tempora", "debitis") {{
                                                    next = "ipsam";
                                                }};;
                                                lambda = new LambdaActivity(133465L, "sequi", "quo") {{
                                                    next = "esse";
                                                }};;
                                                math = new MathActivity("recusandae", "aperiam", "distinctio") {{
                                                    next = "quod";
                                                }};;
                                                removeAttributes = new RemoveAttributesActivity(                new String[]{{
                                                                    add("inventore"),
                                                                    add("nihil"),
                                                                }}, "totam") {{
                                                    next = "accusamus";
                                                }};;
                                                selectAttributes = new SelectAttributesActivity(                new String[]{{
                                                                    add("odio"),
                                                                    add("occaecati"),
                                                                }}, "commodi") {{
                                                    next = "sapiente";
                                                }};;
                                            }};);) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "molestiae";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "porro";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "quas";
            }};            

            RunPipelineActivityResponse res = sdk.sdk.runPipelineActivity(req);

            if (res.runPipelineActivityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sampleChannelData

Retrieves a sample of messages from the specified channel ingested during the specified timeframe. Up to 10 messages can be retrieved.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SampleChannelDataRequest;
import org.openapis.openapi.models.operations.SampleChannelDataResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SampleChannelDataRequest req = new SampleChannelDataRequest("consequuntur") {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "fuga";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "explicabo";
                endTime = OffsetDateTime.parse("2022-08-10T16:09:39.108Z");
                maxMessages = 147014L;
                startTime = OffsetDateTime.parse("2022-07-09T22:36:51.892Z");
            }};            

            SampleChannelDataResponse res = sdk.sdk.sampleChannelData(req);

            if (res.sampleChannelDataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startPipelineReprocessing

Starts the reprocessing of raw message data through the pipeline.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartPipelineReprocessingRequest;
import org.openapis.openapi.models.operations.StartPipelineReprocessingRequestBody;
import org.openapis.openapi.models.operations.StartPipelineReprocessingRequestBodyChannelMessages;
import org.openapis.openapi.models.operations.StartPipelineReprocessingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartPipelineReprocessingRequest req = new StartPipelineReprocessingRequest(                new StartPipelineReprocessingRequestBody() {{
                                channelMessages = new StartPipelineReprocessingRequestBodyChannelMessages() {{
                                    s3Paths = new String[]{{
                                        add("saepe"),
                                    }};
                                }};;
                                endTime = OffsetDateTime.parse("2021-11-30T00:31:10.440Z");
                                startTime = OffsetDateTime.parse("2022-07-18T05:27:20.858Z");
                            }};, "eveniet") {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "esse";
                xAmzDate = "quod";
                xAmzSecurityToken = "nam";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "aliquid";
            }};            

            StartPipelineReprocessingResponse res = sdk.sdk.startPipelineReprocessing(req);

            if (res.startPipelineReprocessingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("molestiae", "rerum") {{
                                                    key = "vel";
                                                    value = "harum";
                                                }}),
                                                add(new Tag("distinctio", "eligendi") {{
                                                    key = "occaecati";
                                                    value = "minima";
                                                }}),
                                                add(new Tag("tempore", "adipisci") {{
                                                    key = "sit";
                                                    value = "culpa";
                                                }}),
                                                add(new Tag("consequatur", "minus") {{
                                                    key = "cumque";
                                                    value = "consequuntur";
                                                }}),
                                            }});, "quaerat") {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "esse";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "provident";
                xAmzSignature = "a";
                xAmzSignedHeaders = "nulla";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes the given tags (metadata) from the resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("esse",                 new String[]{{
                                add("a"),
                            }}) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "sint";
                xAmzCredential = "pariatur";
                xAmzDate = "possimus";
                xAmzSecurityToken = "quia";
                xAmzSignature = "eveniet";
                xAmzSignedHeaders = "asperiores";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateChannel

Used to update the settings of a channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateChannelRequest;
import org.openapis.openapi.models.operations.UpdateChannelRequestBody;
import org.openapis.openapi.models.operations.UpdateChannelRequestBodyChannelStorage;
import org.openapis.openapi.models.operations.UpdateChannelRequestBodyRetentionPeriod;
import org.openapis.openapi.models.operations.UpdateChannelResponse;
import org.openapis.openapi.models.shared.CustomerManagedChannelS3Storage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateChannelRequest req = new UpdateChannelRequest(                new UpdateChannelRequestBody() {{
                                channelStorage = new UpdateChannelRequestBodyChannelStorage() {{
                                    customerManagedS3 = new CustomerManagedChannelS3Storage("veritatis", "consequuntur") {{
                                        keyPrefix = "quasi";
                                    }};;
                                    serviceManagedS3 = new java.util.HashMap<String, Object>() {{
                                        put("culpa", "aliquid");
                                        put("tenetur", "quae");
                                        put("earum", "vel");
                                    }};
                                }};;
                                retentionPeriod = new UpdateChannelRequestBodyRetentionPeriod() {{
                                    numberOfDays = 447378L;
                                    unlimited = false;
                                }};;
                            }};, "eius") {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "illum";
                xAmzCredential = "soluta";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "dicta";
            }};            

            UpdateChannelResponse res = sdk.sdk.updateChannel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDataset

Updates the settings of a dataset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDatasetRequest;
import org.openapis.openapi.models.operations.UpdateDatasetRequestBody;
import org.openapis.openapi.models.operations.UpdateDatasetRequestBodyRetentionPeriod;
import org.openapis.openapi.models.operations.UpdateDatasetRequestBodyVersioningConfiguration;
import org.openapis.openapi.models.operations.UpdateDatasetResponse;
import org.openapis.openapi.models.shared.ComputeTypeEnum;
import org.openapis.openapi.models.shared.ContainerDatasetAction;
import org.openapis.openapi.models.shared.DatasetAction;
import org.openapis.openapi.models.shared.DatasetContentDeliveryDestination;
import org.openapis.openapi.models.shared.DatasetContentDeliveryRule;
import org.openapis.openapi.models.shared.DatasetContentVersionValue;
import org.openapis.openapi.models.shared.DatasetTrigger;
import org.openapis.openapi.models.shared.DeltaTime;
import org.openapis.openapi.models.shared.DeltaTimeSessionWindowConfiguration;
import org.openapis.openapi.models.shared.GlueConfiguration;
import org.openapis.openapi.models.shared.IotEventsDestinationConfiguration;
import org.openapis.openapi.models.shared.LateDataRule;
import org.openapis.openapi.models.shared.LateDataRuleConfiguration;
import org.openapis.openapi.models.shared.OutputFileUriValue;
import org.openapis.openapi.models.shared.QueryFilter;
import org.openapis.openapi.models.shared.ResourceConfiguration;
import org.openapis.openapi.models.shared.S3DestinationConfiguration;
import org.openapis.openapi.models.shared.Schedule;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SqlQueryDatasetAction;
import org.openapis.openapi.models.shared.TriggeringDataset;
import org.openapis.openapi.models.shared.Variable;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDatasetRequest req = new UpdateDatasetRequest(                new UpdateDatasetRequestBody(                new org.openapis.openapi.models.shared.DatasetAction[]{{
                                                add(new DatasetAction() {{
                                                    actionName = "ullam";
                                                    containerAction = new ContainerDatasetAction("voluptatibus", "voluptas",                 new ResourceConfiguration(ComputeTypeEnum.ACU2, 45659L);) {{
                                                        executionRoleArn = "nisi";
                                                        image = "aut";
                                                        resourceConfiguration = new ResourceConfiguration(ComputeTypeEnum.ACU2, 401259L) {{
                                                            computeType = ComputeTypeEnum.ACU2;
                                                            volumeSizeInGB = 185232L;
                                                        }};
                                                        variables = new org.openapis.openapi.models.shared.Variable[]{{
                                                            add(new Variable("consectetur") {{
                                                                datasetContentVersionValue = new DatasetContentVersionValue("dolorum") {{
                                                                    datasetName = "itaque";
                                                                }};
                                                                doubleValue = 996.15;
                                                                name = "Irvin Boyle III";
                                                                outputFileUriValue = new OutputFileUriValue("minima") {{
                                                                    fileName = "ipsa";
                                                                }};
                                                                stringValue = "veritatis";
                                                            }}),
                                                            add(new Variable("non") {{
                                                                datasetContentVersionValue = new DatasetContentVersionValue("iste") {{
                                                                    datasetName = "adipisci";
                                                                }};
                                                                doubleValue = 8395.13;
                                                                name = "Patsy Armstrong";
                                                                outputFileUriValue = new OutputFileUriValue("ab") {{
                                                                    fileName = "mollitia";
                                                                }};
                                                                stringValue = "corrupti";
                                                            }}),
                                                            add(new Variable("velit") {{
                                                                datasetContentVersionValue = new DatasetContentVersionValue("dolor") {{
                                                                    datasetName = "voluptatem";
                                                                }};
                                                                doubleValue = 5801.52;
                                                                name = "Leticia Christiansen IV";
                                                                outputFileUriValue = new OutputFileUriValue("maiores") {{
                                                                    fileName = "dicta";
                                                                }};
                                                                stringValue = "natus";
                                                            }}),
                                                        }};
                                                    }};
                                                    queryAction = new SqlQueryDatasetAction("quae") {{
                                                        filters = new org.openapis.openapi.models.shared.QueryFilter[]{{
                                                            add(new QueryFilter() {{
                                                                deltaTime = new DeltaTime(831520L, "officia") {{
                                                                    offsetSeconds = 310067L;
                                                                    timeExpression = "consequuntur";
                                                                }};
                                                            }}),
                                                            add(new QueryFilter() {{
                                                                deltaTime = new DeltaTime(640024L, "asperiores") {{
                                                                    offsetSeconds = 807023L;
                                                                    timeExpression = "dignissimos";
                                                                }};
                                                            }}),
                                                        }};
                                                        sqlQuery = "nemo";
                                                    }};
                                                }}),
                                                add(new DatasetAction() {{
                                                    actionName = "quaerat";
                                                    containerAction = new ContainerDatasetAction("necessitatibus", "dolore",                 new ResourceConfiguration(ComputeTypeEnum.ACU1, 992012L);) {{
                                                        executionRoleArn = "porro";
                                                        image = "quod";
                                                        resourceConfiguration = new ResourceConfiguration(ComputeTypeEnum.ACU1, 683573L) {{
                                                            computeType = ComputeTypeEnum.ACU1;
                                                            volumeSizeInGB = 70447L;
                                                        }};
                                                        variables = new org.openapis.openapi.models.shared.Variable[]{{
                                                            add(new Variable("labore") {{
                                                                datasetContentVersionValue = new DatasetContentVersionValue("velit") {{
                                                                    datasetName = "suscipit";
                                                                }};
                                                                doubleValue = 6339.31;
                                                                name = "Clay Larson";
                                                                outputFileUriValue = new OutputFileUriValue("quos") {{
                                                                    fileName = "ducimus";
                                                                }};
                                                                stringValue = "vel";
                                                            }}),
                                                            add(new Variable("aperiam") {{
                                                                datasetContentVersionValue = new DatasetContentVersionValue("facilis") {{
                                                                    datasetName = "possimus";
                                                                }};
                                                                doubleValue = 7382.27;
                                                                name = "Pearl Hessel";
                                                                outputFileUriValue = new OutputFileUriValue("recusandae") {{
                                                                    fileName = "nemo";
                                                                }};
                                                                stringValue = "aliquid";
                                                            }}),
                                                            add(new Variable("saepe") {{
                                                                datasetContentVersionValue = new DatasetContentVersionValue("consectetur") {{
                                                                    datasetName = "cum";
                                                                }};
                                                                doubleValue = 4490.83;
                                                                name = "Lila Schultz";
                                                                outputFileUriValue = new OutputFileUriValue("reiciendis") {{
                                                                    fileName = "suscipit";
                                                                }};
                                                                stringValue = "quidem";
                                                            }}),
                                                        }};
                                                    }};
                                                    queryAction = new SqlQueryDatasetAction("debitis") {{
                                                        filters = new org.openapis.openapi.models.shared.QueryFilter[]{{
                                                            add(new QueryFilter() {{
                                                                deltaTime = new DeltaTime(105906L, "dignissimos") {{
                                                                    offsetSeconds = 249420L;
                                                                    timeExpression = "amet";
                                                                }};
                                                            }}),
                                                        }};
                                                        sqlQuery = "a";
                                                    }};
                                                }}),
                                            }}) {{
                                contentDeliveryRules = new org.openapis.openapi.models.shared.DatasetContentDeliveryRule[]{{
                                    add(new DatasetContentDeliveryRule(                new DatasetContentDeliveryDestination() {{
                                                        iotEventsDestinationConfiguration = new IotEventsDestinationConfiguration("nobis", "dolorum");;
                                                        s3DestinationConfiguration = new S3DestinationConfiguration("adipisci", "minus", "dolores") {{
                                                            glueConfiguration = new GlueConfiguration("blanditiis", "in");;
                                                        }};;
                                                    }};) {{
                                        destination = new DatasetContentDeliveryDestination() {{
                                            iotEventsDestinationConfiguration = new IotEventsDestinationConfiguration("laboriosam", "ipsa") {{
                                                inputName = "corporis";
                                                roleArn = "harum";
                                            }};
                                            s3DestinationConfiguration = new S3DestinationConfiguration("voluptas", "voluptas", "voluptas") {{
                                                bucket = "voluptates";
                                                glueConfiguration = new GlueConfiguration("accusamus", "similique") {{
                                                    databaseName = "libero";
                                                    tableName = "vitae";
                                                }};
                                                key = "tempora";
                                                roleArn = "aspernatur";
                                            }};
                                        }};
                                        entryName = "minima";
                                    }}),
                                }};
                                lateDataRules = new org.openapis.openapi.models.shared.LateDataRule[]{{
                                    add(new LateDataRule(                new LateDataRuleConfiguration() {{
                                                        deltaTimeSessionWindowConfiguration = new DeltaTimeSessionWindowConfiguration(351870L);;
                                                    }};) {{
                                        ruleConfiguration = new LateDataRuleConfiguration() {{
                                            deltaTimeSessionWindowConfiguration = new DeltaTimeSessionWindowConfiguration(885963L) {{
                                                timeoutInMinutes = 304468L;
                                            }};
                                        }};
                                        ruleName = "temporibus";
                                    }}),
                                    add(new LateDataRule(                new LateDataRuleConfiguration() {{
                                                        deltaTimeSessionWindowConfiguration = new DeltaTimeSessionWindowConfiguration(555361L);;
                                                    }};) {{
                                        ruleConfiguration = new LateDataRuleConfiguration() {{
                                            deltaTimeSessionWindowConfiguration = new DeltaTimeSessionWindowConfiguration(738391L) {{
                                                timeoutInMinutes = 237742L;
                                            }};
                                        }};
                                        ruleName = "blanditiis";
                                    }}),
                                }};
                                retentionPeriod = new UpdateDatasetRequestBodyRetentionPeriod() {{
                                    numberOfDays = 942584L;
                                    unlimited = false;
                                }};;
                                triggers = new org.openapis.openapi.models.shared.DatasetTrigger[]{{
                                    add(new DatasetTrigger() {{
                                        dataset = new TriggeringDataset("exercitationem") {{
                                            name = "Byron Stroman";
                                        }};
                                        schedule = new Schedule() {{
                                            expression = "nobis";
                                        }};
                                    }}),
                                }};
                                versioningConfiguration = new UpdateDatasetRequestBodyVersioningConfiguration() {{
                                    maxVersions = 24619L;
                                    unlimited = false;
                                }};;
                            }};, "rerum") {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "explicabo";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "expedita";
            }};            

            UpdateDatasetResponse res = sdk.sdk.updateDataset(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDatastore

Used to update the settings of a data store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDatastoreRequest;
import org.openapis.openapi.models.operations.UpdateDatastoreRequestBody;
import org.openapis.openapi.models.operations.UpdateDatastoreRequestBodyDatastoreStorage;
import org.openapis.openapi.models.operations.UpdateDatastoreRequestBodyFileFormatConfiguration;
import org.openapis.openapi.models.operations.UpdateDatastoreRequestBodyRetentionPeriod;
import org.openapis.openapi.models.operations.UpdateDatastoreResponse;
import org.openapis.openapi.models.shared.Column;
import org.openapis.openapi.models.shared.CustomerManagedDatastoreS3Storage;
import org.openapis.openapi.models.shared.DatastoreIotSiteWiseMultiLayerStorage;
import org.openapis.openapi.models.shared.IotSiteWiseCustomerManagedDatastoreS3Storage;
import org.openapis.openapi.models.shared.ParquetConfiguration;
import org.openapis.openapi.models.shared.SchemaDefinition;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDatastoreRequest req = new UpdateDatastoreRequest(                new UpdateDatastoreRequestBody() {{
                                datastoreStorage = new UpdateDatastoreRequestBodyDatastoreStorage() {{
                                    customerManagedS3 = new CustomerManagedDatastoreS3Storage("iste", "dolore") {{
                                        keyPrefix = "laborum";
                                    }};;
                                    iotSiteWiseMultiLayerStorage = new DatastoreIotSiteWiseMultiLayerStorage(                new IotSiteWiseCustomerManagedDatastoreS3Storage("sed") {{
                                                        keyPrefix = "in";
                                                    }};);;
                                    serviceManagedS3 = new java.util.HashMap<String, Object>() {{
                                        put("quidem", "explicabo");
                                        put("voluptas", "unde");
                                    }};
                                }};;
                                fileFormatConfiguration = new UpdateDatastoreRequestBodyFileFormatConfiguration() {{
                                    jsonConfiguration = new java.util.HashMap<String, Object>() {{
                                        put("suscipit", "sapiente");
                                    }};
                                    parquetConfiguration = new ParquetConfiguration() {{
                                        schemaDefinition = new SchemaDefinition() {{
                                            columns = new org.openapis.openapi.models.shared.Column[]{{
                                                add(new Column("sed", "provident") {{
                                                    name = "Faith Aufderhar";
                                                    type = "incidunt";
                                                }}),
                                                add(new Column("voluptatibus", "tempora") {{
                                                    name = "Jana Emard";
                                                    type = "quos";
                                                }}),
                                                add(new Column("praesentium", "facilis") {{
                                                    name = "Allison Wisozk I";
                                                    type = "officiis";
                                                }}),
                                                add(new Column("nobis", "error") {{
                                                    name = "Amber Hintz";
                                                    type = "sit";
                                                }}),
                                            }};
                                        }};;
                                    }};;
                                }};;
                                retentionPeriod = new UpdateDatastoreRequestBodyRetentionPeriod() {{
                                    numberOfDays = 333507L;
                                    unlimited = false;
                                }};;
                            }};, "minima") {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "nulla";
                xAmzDate = "magni";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "numquam";
            }};            

            UpdateDatastoreResponse res = sdk.sdk.updateDatastore(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePipeline

Updates the settings of a pipeline. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePipelineRequest;
import org.openapis.openapi.models.operations.UpdatePipelineRequestBody;
import org.openapis.openapi.models.operations.UpdatePipelineResponse;
import org.openapis.openapi.models.shared.AddAttributesActivity;
import org.openapis.openapi.models.shared.ChannelActivity;
import org.openapis.openapi.models.shared.DatastoreActivity;
import org.openapis.openapi.models.shared.DeviceRegistryEnrichActivity;
import org.openapis.openapi.models.shared.DeviceShadowEnrichActivity;
import org.openapis.openapi.models.shared.FilterActivity;
import org.openapis.openapi.models.shared.LambdaActivity;
import org.openapis.openapi.models.shared.MathActivity;
import org.openapis.openapi.models.shared.PipelineActivity;
import org.openapis.openapi.models.shared.RemoveAttributesActivity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SelectAttributesActivity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePipelineRequest req = new UpdatePipelineRequest(                new UpdatePipelineRequestBody(                new org.openapis.openapi.models.shared.PipelineActivity[]{{
                                                add(new PipelineActivity() {{
                                                    addAttributes = new AddAttributesActivity(                new java.util.HashMap<String, String>() {{
                                                                        put("officia", "dolorum");
                                                                        put("corrupti", "accusamus");
                                                                    }}, "tempora") {{
                                                        attributes = new java.util.HashMap<String, String>() {{
                                                            put("beatae", "laudantium");
                                                            put("exercitationem", "praesentium");
                                                            put("cum", "laboriosam");
                                                            put("dolorum", "voluptatum");
                                                        }};
                                                        name = "Irvin Rath";
                                                        next = "dolorum";
                                                    }};
                                                    channel = new ChannelActivity("consequatur", "esse") {{
                                                        channelName = "atque";
                                                        name = "Miss April Stiedemann";
                                                        next = "magnam";
                                                    }};
                                                    datastore = new DatastoreActivity("et", "blanditiis") {{
                                                        datastoreName = "ipsam";
                                                        name = "Nora Lynch";
                                                    }};
                                                    deviceRegistryEnrich = new DeviceRegistryEnrichActivity("reiciendis", "dolorem", "harum", "dicta") {{
                                                        attribute = "ex";
                                                        name = "Karen Kautzer";
                                                        next = "error";
                                                        roleArn = "consequatur";
                                                        thingName = "incidunt";
                                                    }};
                                                    deviceShadowEnrich = new DeviceShadowEnrichActivity("alias", "amet", "deserunt", "voluptate") {{
                                                        attribute = "architecto";
                                                        name = "Francisco Powlowski";
                                                        next = "nam";
                                                        roleArn = "tenetur";
                                                        thingName = "laboriosam";
                                                    }};
                                                    filter = new FilterActivity("est", "quidem") {{
                                                        filter = "unde";
                                                        name = "Rene Skiles";
                                                        next = "perferendis";
                                                    }};
                                                    lambda = new LambdaActivity(97243L, "atque", "reprehenderit") {{
                                                        batchSize = 440666L;
                                                        lambdaName = "facere";
                                                        name = "Max O'Connell DDS";
                                                        next = "repudiandae";
                                                    }};
                                                    math = new MathActivity("ea", "atque", "error") {{
                                                        attribute = "asperiores";
                                                        math = "totam";
                                                        name = "Ms. Alison Schoen";
                                                        next = "assumenda";
                                                    }};
                                                    removeAttributes = new RemoveAttributesActivity(                new String[]{{
                                                                        add("suscipit"),
                                                                        add("repudiandae"),
                                                                        add("atque"),
                                                                    }}, "atque") {{
                                                        attributes = new String[]{{
                                                            add("officiis"),
                                                            add("accusamus"),
                                                            add("natus"),
                                                            add("minima"),
                                                        }};
                                                        name = "Tara Wuckert";
                                                        next = "error";
                                                    }};
                                                    selectAttributes = new SelectAttributesActivity(                new String[]{{
                                                                        add("beatae"),
                                                                    }}, "dolores") {{
                                                        attributes = new String[]{{
                                                            add("recusandae"),
                                                        }};
                                                        name = "Mack Grant DVM";
                                                        next = "dicta";
                                                    }};
                                                }}),
                                                add(new PipelineActivity() {{
                                                    addAttributes = new AddAttributesActivity(                new java.util.HashMap<String, String>() {{
                                                                        put("adipisci", "eveniet");
                                                                        put("occaecati", "consequuntur");
                                                                    }}, "fugit") {{
                                                        attributes = new java.util.HashMap<String, String>() {{
                                                            put("laboriosam", "velit");
                                                            put("a", "molestias");
                                                        }};
                                                        name = "Tricia Cronin";
                                                        next = "perspiciatis";
                                                    }};
                                                    channel = new ChannelActivity("non", "vero") {{
                                                        channelName = "id";
                                                        name = "Mrs. Bessie Muller";
                                                        next = "eveniet";
                                                    }};
                                                    datastore = new DatastoreActivity("qui", "cum") {{
                                                        datastoreName = "doloremque";
                                                        name = "Ms. Melissa Larson";
                                                    }};
                                                    deviceRegistryEnrich = new DeviceRegistryEnrichActivity("repellat", "alias", "corporis", "perspiciatis") {{
                                                        attribute = "iure";
                                                        name = "Sean Pacocha";
                                                        next = "rem";
                                                        roleArn = "aliquam";
                                                        thingName = "ad";
                                                    }};
                                                    deviceShadowEnrich = new DeviceShadowEnrichActivity("dolore", "dolorum", "nesciunt", "quae") {{
                                                        attribute = "nihil";
                                                        name = "Shane Abshire";
                                                        next = "dolores";
                                                        roleArn = "id";
                                                        thingName = "minima";
                                                    }};
                                                    filter = new FilterActivity("adipisci", "debitis") {{
                                                        filter = "recusandae";
                                                        name = "Calvin Kreiger";
                                                        next = "culpa";
                                                    }};
                                                    lambda = new LambdaActivity(970494L, "provident", "aspernatur") {{
                                                        batchSize = 514513L;
                                                        lambdaName = "eum";
                                                        name = "Patti Klocko";
                                                        next = "eum";
                                                    }};
                                                    math = new MathActivity("ex", "aliquid", "accusantium") {{
                                                        attribute = "ullam";
                                                        math = "quasi";
                                                        name = "Gordon O'Hara";
                                                        next = "animi";
                                                    }};
                                                    removeAttributes = new RemoveAttributesActivity(                new String[]{{
                                                                        add("officiis"),
                                                                        add("sapiente"),
                                                                        add("cumque"),
                                                                    }}, "vitae") {{
                                                        attributes = new String[]{{
                                                            add("doloribus"),
                                                            add("ullam"),
                                                            add("in"),
                                                            add("nam"),
                                                        }};
                                                        name = "Oliver Osinski";
                                                        next = "voluptatibus";
                                                    }};
                                                    selectAttributes = new SelectAttributesActivity(                new String[]{{
                                                                        add("rem"),
                                                                        add("at"),
                                                                    }}, "impedit") {{
                                                        attributes = new String[]{{
                                                            add("tempora"),
                                                            add("quis"),
                                                            add("inventore"),
                                                        }};
                                                        name = "Mrs. Erma Berge";
                                                        next = "eum";
                                                    }};
                                                }}),
                                            }});, "eos") {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "eum";
                xAmzCredential = "dicta";
                xAmzDate = "minima";
                xAmzSecurityToken = "beatae";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "provident";
            }};            

            UpdatePipelineResponse res = sdk.sdk.updatePipeline(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
