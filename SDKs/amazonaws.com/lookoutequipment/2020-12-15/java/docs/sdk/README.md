# SDK

## Overview

Amazon Lookout for Equipment is a machine learning service that uses advanced analytics to identify anomalies in machines from sensor data for use in predictive maintenance. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/lookoutequipment/>
### Available Operations

* [createDataset](#createdataset) - Creates a container for a collection of data being ingested for analysis. The dataset contains the metadata describing where the data is and what the data actually looks like. In other words, it contains the location of the data source, the data schema, and other information. A dataset also contains any tags associated with the ingested data. 
* [createInferenceScheduler](#createinferencescheduler) -  Creates a scheduled inference. Scheduling an inference is setting up a continuous real-time inference plan to analyze new measurement data. When setting up the schedule, you provide an S3 bucket location for the input data, assign it a delimiter between separate entries in the data, set an offset delay if desired, and set the frequency of inferencing. You must also provide an S3 bucket location for the output data. 
* [createLabel](#createlabel) -  Creates a label for an event. 
* [createLabelGroup](#createlabelgroup) -  Creates a group of labels. 
* [createModel](#createmodel) - <p>Creates an ML model for data inference. </p> <p>A machine-learning (ML) model is a mathematical model that finds patterns in your data. In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal behavior that could be potential equipment failure (or maintenance events). The models are made by analyzing normal data and abnormalities in machine behavior that have already occurred.</p> <p>Your model is trained using a portion of the data from your dataset and uses that data to learn patterns of normal behavior and abnormal patterns that lead to equipment failure. Another portion of the data is used to evaluate the model's accuracy. </p>
* [deleteDataset](#deletedataset) -  Deletes a dataset and associated artifacts. The operation will check to see if any inference scheduler or data ingestion job is currently using the dataset, and if there isn't, the dataset, its metadata, and any associated data stored in S3 will be deleted. This does not affect any models that used this dataset for training and evaluation, but does prevent it from being used in the future. 
* [deleteInferenceScheduler](#deleteinferencescheduler) - Deletes an inference scheduler that has been set up. Already processed output results are not affected. 
* [deleteLabel](#deletelabel) -  Deletes a label. 
* [deleteLabelGroup](#deletelabelgroup) -  Deletes a group of labels. 
* [deleteModel](#deletemodel) - Deletes an ML model currently available for Amazon Lookout for Equipment. This will prevent it from being used with an inference scheduler, even one that is already set up. 
* [describeDataIngestionJob](#describedataingestionjob) - Provides information on a specific data ingestion job such as creation time, dataset ARN, and status.
* [describeDataset](#describedataset) - Provides a JSON description of the data in each time series dataset, including names, column names, and data types.
* [describeInferenceScheduler](#describeinferencescheduler) -  Specifies information about the inference scheduler being used, including name, model, status, and associated metadata 
* [describeLabel](#describelabel) -  Returns the name of the label. 
* [describeLabelGroup](#describelabelgroup) -  Returns information about the label group. 
* [describeModel](#describemodel) - Provides a JSON containing the overall information about a specific ML model, including model name and ARN, dataset, training and evaluation information, status, and so on. 
* [listDataIngestionJobs](#listdataingestionjobs) - Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location of the input data, status, and so on. 
* [listDatasets](#listdatasets) - Lists all datasets currently available in your account, filtering on the dataset name. 
* [listInferenceEvents](#listinferenceevents) -  Lists all inference events that have been found for the specified inference scheduler. 
* [listInferenceExecutions](#listinferenceexecutions) -  Lists all inference executions that have been performed by the specified inference scheduler. 
* [listInferenceSchedulers](#listinferenceschedulers) - Retrieves a list of all inference schedulers currently available for your account. 
* [listLabelGroups](#listlabelgroups) -  Returns a list of the label groups. 
* [listLabels](#listlabels) -  Provides a list of labels. 
* [listModels](#listmodels) - Generates a list of all models in the account, including model name and ARN, dataset, and status. 
* [listSensorStatistics](#listsensorstatistics) -  Lists statistics about the data collected for each of the sensors that have been successfully ingested in the particular dataset. Can also be used to retreive Sensor Statistics for a previous ingestion job. 
* [listTagsForResource](#listtagsforresource) - Lists all the tags for a specified resource, including key and value. 
* [startDataIngestionJob](#startdataingestionjob) - Starts a data ingestion job. Amazon Lookout for Equipment returns the job status. 
* [startInferenceScheduler](#startinferencescheduler) - Starts an inference scheduler. 
* [stopInferenceScheduler](#stopinferencescheduler) - Stops an inference scheduler. 
* [tagResource](#tagresource) - Associates a given tag to a resource in your account. A tag is a key-value pair which can be added to an Amazon Lookout for Equipment resource as metadata. Tags can be used for organizing your resources as well as helping you to search and filter by tag. Multiple tags can be added to a resource, either when you create it, or later. Up to 50 tags can be associated with each resource. 
* [untagResource](#untagresource) - Removes a specific tag from a given resource. The tag is specified by its key. 
* [updateInferenceScheduler](#updateinferencescheduler) - Updates an inference scheduler. 
* [updateLabelGroup](#updatelabelgroup) -  Updates the label group. 

## createDataset

Creates a container for a collection of data being ingested for analysis. The dataset contains the metadata describing where the data is and what the data actually looks like. In other words, it contains the location of the data source, the data schema, and other information. A dataset also contains any tags associated with the ingested data. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDatasetRequest;
import org.openapis.openapi.models.operations.CreateDatasetResponse;
import org.openapis.openapi.models.operations.CreateDatasetXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDatasetRequest;
import org.openapis.openapi.models.shared.DatasetSchema;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDatasetRequest req = new CreateDatasetRequest(                new CreateDatasetRequest("veritatis", "deserunt") {{
                                datasetSchema = new DatasetSchema() {{
                                    inlineDataSchema = "perferendis";
                                }};;
                                serverSideKmsKeyId = "ipsam";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("odit", "at") {{
                                        key = "sapiente";
                                        value = "quo";
                                    }}),
                                    add(new Tag("molestiae", "quod") {{
                                        key = "at";
                                        value = "maiores";
                                    }}),
                                    add(new Tag("totam", "porro") {{
                                        key = "quod";
                                        value = "esse";
                                    }}),
                                    add(new Tag("nam", "officia") {{
                                        key = "dolorum";
                                        value = "dicta";
                                    }}),
                                }};
                            }};, CreateDatasetXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_CREATE_DATASET) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "deleniti";
                xAmzDate = "hic";
                xAmzSecurityToken = "optio";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "beatae";
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

## createInferenceScheduler

 Creates a scheduled inference. Scheduling an inference is setting up a continuous real-time inference plan to analyze new measurement data. When setting up the schedule, you provide an S3 bucket location for the input data, assign it a delimiter between separate entries in the data, set an offset delay if desired, and set the frequency of inferencing. You must also provide an S3 bucket location for the output data. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInferenceSchedulerRequest;
import org.openapis.openapi.models.operations.CreateInferenceSchedulerResponse;
import org.openapis.openapi.models.operations.CreateInferenceSchedulerXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateInferenceSchedulerRequest;
import org.openapis.openapi.models.shared.DataUploadFrequencyEnum;
import org.openapis.openapi.models.shared.InferenceInputConfiguration;
import org.openapis.openapi.models.shared.InferenceInputNameConfiguration;
import org.openapis.openapi.models.shared.InferenceOutputConfiguration;
import org.openapis.openapi.models.shared.InferenceS3InputConfiguration;
import org.openapis.openapi.models.shared.InferenceS3OutputConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateInferenceSchedulerRequest req = new CreateInferenceSchedulerRequest(                new CreateInferenceSchedulerRequest("molestiae",                 new InferenceInputConfiguration() {{
                                                inferenceInputNameConfiguration = new InferenceInputNameConfiguration() {{
                                                    componentTimestampDelimiter = "modi";
                                                    timestampFormat = "qui";
                                                }};;
                                                inputTimeZoneOffset = "impedit";
                                                s3InputConfiguration = new InferenceS3InputConfiguration("cum") {{
                                                    prefix = "esse";
                                                }};;
                                            }};,                 new InferenceOutputConfiguration(                new InferenceS3OutputConfiguration("ipsum") {{
                                                                prefix = "excepturi";
                                                            }};) {{
                                                kmsKeyId = "aspernatur";
                                            }};, DataUploadFrequencyEnum.PT5_M, "ad", "natus", "sed") {{
                                dataDelayOffsetInMinutes = 612096L;
                                serverSideKmsKeyId = "dolor";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("saepe", "fuga") {{
                                        key = "laboriosam";
                                        value = "hic";
                                    }}),
                                    add(new Tag("iste", "iure") {{
                                        key = "in";
                                        value = "corporis";
                                    }}),
                                    add(new Tag("architecto", "ipsa") {{
                                        key = "saepe";
                                        value = "quidem";
                                    }}),
                                }};
                            }};, CreateInferenceSchedulerXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_CREATE_INFERENCE_SCHEDULER) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "est";
                xAmzCredential = "mollitia";
                xAmzDate = "laborum";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "corporis";
            }};            

            CreateInferenceSchedulerResponse res = sdk.sdk.createInferenceScheduler(req);

            if (res.createInferenceSchedulerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLabel

 Creates a label for an event. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLabelRequest;
import org.openapis.openapi.models.operations.CreateLabelResponse;
import org.openapis.openapi.models.operations.CreateLabelXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateLabelRequest;
import org.openapis.openapi.models.shared.LabelRatingEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLabelRequest req = new CreateLabelRequest(                new CreateLabelRequest("nobis", OffsetDateTime.parse("2022-05-24T03:24:11.703Z"), "nemo", LabelRatingEnum.ANOMALY, OffsetDateTime.parse("2022-12-03T22:47:10.600Z")) {{
                                equipment = "iure";
                                faultCode = "culpa";
                                notes = "doloribus";
                            }};, CreateLabelXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_CREATE_LABEL) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "mollitia";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "repellat";
            }};            

            CreateLabelResponse res = sdk.sdk.createLabel(req);

            if (res.createLabelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLabelGroup

 Creates a group of labels. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLabelGroupRequest;
import org.openapis.openapi.models.operations.CreateLabelGroupResponse;
import org.openapis.openapi.models.operations.CreateLabelGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateLabelGroupRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLabelGroupRequest req = new CreateLabelGroupRequest(                new CreateLabelGroupRequest("occaecati", "numquam") {{
                                faultCodes = new String[]{{
                                    add("quam"),
                                    add("molestiae"),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("quis", "vitae") {{
                                        key = "error";
                                        value = "quia";
                                    }}),
                                }};
                            }};, CreateLabelGroupXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_CREATE_LABEL_GROUP) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "animi";
                xAmzCredential = "enim";
                xAmzDate = "odit";
                xAmzSecurityToken = "quo";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "tenetur";
            }};            

            CreateLabelGroupResponse res = sdk.sdk.createLabelGroup(req);

            if (res.createLabelGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createModel

<p>Creates an ML model for data inference. </p> <p>A machine-learning (ML) model is a mathematical model that finds patterns in your data. In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal behavior that could be potential equipment failure (or maintenance events). The models are made by analyzing normal data and abnormalities in machine behavior that have already occurred.</p> <p>Your model is trained using a portion of the data from your dataset and uses that data to learn patterns of normal behavior and abnormal patterns that lead to equipment failure. Another portion of the data is used to evaluate the model's accuracy. </p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateModelRequest;
import org.openapis.openapi.models.operations.CreateModelResponse;
import org.openapis.openapi.models.operations.CreateModelXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateModelRequest;
import org.openapis.openapi.models.shared.DataPreProcessingConfiguration;
import org.openapis.openapi.models.shared.DatasetSchema;
import org.openapis.openapi.models.shared.LabelsInputConfiguration;
import org.openapis.openapi.models.shared.LabelsS3InputConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TargetSamplingRateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateModelRequest req = new CreateModelRequest(                new CreateModelRequest("id", "possimus", "aut") {{
                                dataPreProcessingConfiguration = new DataPreProcessingConfiguration() {{
                                    targetSamplingRate = TargetSamplingRateEnum.PT5_S;
                                }};;
                                datasetSchema = new DatasetSchema() {{
                                    inlineDataSchema = "error";
                                }};;
                                evaluationDataEndTime = OffsetDateTime.parse("2020-12-24T08:13:29.299Z");
                                evaluationDataStartTime = OffsetDateTime.parse("2022-01-11T05:45:42.485Z");
                                labelsInputConfiguration = new LabelsInputConfiguration() {{
                                    labelGroupName = "voluptatibus";
                                    s3InputConfiguration = new LabelsS3InputConfiguration("vero") {{
                                        prefix = "nihil";
                                    }};;
                                }};;
                                offCondition = "praesentium";
                                roleArn = "voluptatibus";
                                serverSideKmsKeyId = "ipsa";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("perferendis", "doloremque") {{
                                        key = "voluptate";
                                        value = "cum";
                                    }}),
                                    add(new Tag("maiores", "dicta") {{
                                        key = "reprehenderit";
                                        value = "ut";
                                    }}),
                                    add(new Tag("iusto", "dicta") {{
                                        key = "corporis";
                                        value = "dolore";
                                    }}),
                                }};
                                trainingDataEndTime = OffsetDateTime.parse("2022-05-13T20:56:04.612Z");
                                trainingDataStartTime = OffsetDateTime.parse("2021-10-04T09:10:06.610Z");
                            }};, CreateModelXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_CREATE_MODEL) {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "quae";
                xAmzCredential = "ipsum";
                xAmzDate = "quidem";
                xAmzSecurityToken = "molestias";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "pariatur";
            }};            

            CreateModelResponse res = sdk.sdk.createModel(req);

            if (res.createModelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDataset

 Deletes a dataset and associated artifacts. The operation will check to see if any inference scheduler or data ingestion job is currently using the dataset, and if there isn't, the dataset, its metadata, and any associated data stored in S3 will be deleted. This does not affect any models that used this dataset for training and evaluation, but does prevent it from being used in the future. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDatasetRequest;
import org.openapis.openapi.models.operations.DeleteDatasetResponse;
import org.openapis.openapi.models.operations.DeleteDatasetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDatasetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDatasetRequest req = new DeleteDatasetRequest(                new DeleteDatasetRequest("praesentium");, DeleteDatasetXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_DELETE_DATASET) {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "quasi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "sint";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "itaque";
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

## deleteInferenceScheduler

Deletes an inference scheduler that has been set up. Already processed output results are not affected. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteInferenceSchedulerRequest;
import org.openapis.openapi.models.operations.DeleteInferenceSchedulerResponse;
import org.openapis.openapi.models.operations.DeleteInferenceSchedulerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteInferenceSchedulerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteInferenceSchedulerRequest req = new DeleteInferenceSchedulerRequest(                new DeleteInferenceSchedulerRequest("enim");, DeleteInferenceSchedulerXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_DELETE_INFERENCE_SCHEDULER) {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "est";
                xAmzCredential = "quibusdam";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quibusdam";
            }};            

            DeleteInferenceSchedulerResponse res = sdk.sdk.deleteInferenceScheduler(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLabel

 Deletes a label. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLabelRequest;
import org.openapis.openapi.models.operations.DeleteLabelResponse;
import org.openapis.openapi.models.operations.DeleteLabelXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteLabelRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLabelRequest req = new DeleteLabelRequest(                new DeleteLabelRequest("modi", "qui");, DeleteLabelXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_DELETE_LABEL) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "quos";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "magni";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "ipsam";
            }};            

            DeleteLabelResponse res = sdk.sdk.deleteLabel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLabelGroup

 Deletes a group of labels. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLabelGroupRequest;
import org.openapis.openapi.models.operations.DeleteLabelGroupResponse;
import org.openapis.openapi.models.operations.DeleteLabelGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteLabelGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLabelGroupRequest req = new DeleteLabelGroupRequest(                new DeleteLabelGroupRequest("fugit");, DeleteLabelGroupXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_DELETE_LABEL_GROUP) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "tempora";
                xAmzDate = "facilis";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "delectus";
            }};            

            DeleteLabelGroupResponse res = sdk.sdk.deleteLabelGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteModel

Deletes an ML model currently available for Amazon Lookout for Equipment. This will prevent it from being used with an inference scheduler, even one that is already set up. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteModelRequest;
import org.openapis.openapi.models.operations.DeleteModelResponse;
import org.openapis.openapi.models.operations.DeleteModelXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteModelRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteModelRequest req = new DeleteModelRequest(                new DeleteModelRequest("non");, DeleteModelXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_DELETE_MODEL) {{
                xAmzAlgorithm = "eligendi";
                xAmzContentSha256 = "sint";
                xAmzCredential = "aliquid";
                xAmzDate = "provident";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "officia";
            }};            

            DeleteModelResponse res = sdk.sdk.deleteModel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDataIngestionJob

Provides information on a specific data ingestion job such as creation time, dataset ARN, and status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDataIngestionJobRequest;
import org.openapis.openapi.models.operations.DescribeDataIngestionJobResponse;
import org.openapis.openapi.models.operations.DescribeDataIngestionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDataIngestionJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDataIngestionJobRequest req = new DescribeDataIngestionJobRequest(                new DescribeDataIngestionJobRequest("debitis");, DescribeDataIngestionJobXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_DESCRIBE_DATA_INGESTION_JOB) {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "in";
                xAmzDate = "in";
                xAmzSecurityToken = "illum";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "rerum";
            }};            

            DescribeDataIngestionJobResponse res = sdk.sdk.describeDataIngestionJob(req);

            if (res.describeDataIngestionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDataset

Provides a JSON description of the data in each time series dataset, including names, column names, and data types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDatasetRequest;
import org.openapis.openapi.models.operations.DescribeDatasetResponse;
import org.openapis.openapi.models.operations.DescribeDatasetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDatasetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDatasetRequest req = new DescribeDatasetRequest(                new DescribeDatasetRequest("magnam");, DescribeDatasetXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_DESCRIBE_DATASET) {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "facere";
                xAmzCredential = "ea";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "non";
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

## describeInferenceScheduler

 Specifies information about the inference scheduler being used, including name, model, status, and associated metadata 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeInferenceSchedulerRequest;
import org.openapis.openapi.models.operations.DescribeInferenceSchedulerResponse;
import org.openapis.openapi.models.operations.DescribeInferenceSchedulerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeInferenceSchedulerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeInferenceSchedulerRequest req = new DescribeInferenceSchedulerRequest(                new DescribeInferenceSchedulerRequest("enim");, DescribeInferenceSchedulerXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_DESCRIBE_INFERENCE_SCHEDULER) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "quidem";
                xAmzDate = "provident";
                xAmzSecurityToken = "nam";
                xAmzSignature = "id";
                xAmzSignedHeaders = "blanditiis";
            }};            

            DescribeInferenceSchedulerResponse res = sdk.sdk.describeInferenceScheduler(req);

            if (res.describeInferenceSchedulerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLabel

 Returns the name of the label. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLabelRequest;
import org.openapis.openapi.models.operations.DescribeLabelResponse;
import org.openapis.openapi.models.operations.DescribeLabelXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeLabelRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLabelRequest req = new DescribeLabelRequest(                new DescribeLabelRequest("sapiente", "amet");, DescribeLabelXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_DESCRIBE_LABEL) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "vel";
                xAmzDate = "natus";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "perferendis";
            }};            

            DescribeLabelResponse res = sdk.sdk.describeLabel(req);

            if (res.describeLabelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLabelGroup

 Returns information about the label group. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLabelGroupRequest;
import org.openapis.openapi.models.operations.DescribeLabelGroupResponse;
import org.openapis.openapi.models.operations.DescribeLabelGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeLabelGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLabelGroupRequest req = new DescribeLabelGroupRequest(                new DescribeLabelGroupRequest("magnam");, DescribeLabelGroupXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_DESCRIBE_LABEL_GROUP) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "id";
                xAmzCredential = "labore";
                xAmzDate = "labore";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "nobis";
            }};            

            DescribeLabelGroupResponse res = sdk.sdk.describeLabelGroup(req);

            if (res.describeLabelGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeModel

Provides a JSON containing the overall information about a specific ML model, including model name and ARN, dataset, training and evaluation information, status, and so on. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeModelRequest;
import org.openapis.openapi.models.operations.DescribeModelResponse;
import org.openapis.openapi.models.operations.DescribeModelXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeModelRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeModelRequest req = new DescribeModelRequest(                new DescribeModelRequest("vero");, DescribeModelXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_DESCRIBE_MODEL) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "magnam";
                xAmzDate = "et";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "provident";
            }};            

            DescribeModelResponse res = sdk.sdk.describeModel(req);

            if (res.describeModelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDataIngestionJobs

Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location of the input data, status, and so on. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDataIngestionJobsRequest;
import org.openapis.openapi.models.operations.ListDataIngestionJobsResponse;
import org.openapis.openapi.models.operations.ListDataIngestionJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.IngestionJobStatusEnum;
import org.openapis.openapi.models.shared.ListDataIngestionJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDataIngestionJobsRequest req = new ListDataIngestionJobsRequest(                new ListDataIngestionJobsRequest() {{
                                datasetName = "sint";
                                maxResults = 33625L;
                                nextToken = "mollitia";
                                status = IngestionJobStatusEnum.FAILED;
                            }};, ListDataIngestionJobsXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_LIST_DATA_INGESTION_JOBS) {{
                maxResults = "mollitia";
                nextToken = "ad";
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "necessitatibus";
                xAmzDate = "odit";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "iure";
            }};            

            ListDataIngestionJobsResponse res = sdk.sdk.listDataIngestionJobs(req);

            if (res.listDataIngestionJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDatasets

Lists all datasets currently available in your account, filtering on the dataset name. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDatasetsRequest;
import org.openapis.openapi.models.operations.ListDatasetsResponse;
import org.openapis.openapi.models.operations.ListDatasetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListDatasetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDatasetsRequest req = new ListDatasetsRequest(                new ListDatasetsRequest() {{
                                datasetNameBeginsWith = "debitis";
                                maxResults = 260341L;
                                nextToken = "maxime";
                            }};, ListDatasetsXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_LIST_DATASETS) {{
                maxResults = "deleniti";
                nextToken = "facilis";
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "architecto";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "nihil";
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

## listInferenceEvents

 Lists all inference events that have been found for the specified inference scheduler. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInferenceEventsRequest;
import org.openapis.openapi.models.operations.ListInferenceEventsResponse;
import org.openapis.openapi.models.operations.ListInferenceEventsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListInferenceEventsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListInferenceEventsRequest req = new ListInferenceEventsRequest(                new ListInferenceEventsRequest("quibusdam", OffsetDateTime.parse("2022-02-04T19:17:08.641Z"), OffsetDateTime.parse("2022-11-20T20:56:20.791Z")) {{
                                maxResults = 162493L;
                                nextToken = "praesentium";
                            }};, ListInferenceEventsXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_LIST_INFERENCE_EVENTS) {{
                maxResults = "natus";
                nextToken = "magni";
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "quo";
                xAmzCredential = "illum";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "excepturi";
            }};            

            ListInferenceEventsResponse res = sdk.sdk.listInferenceEvents(req);

            if (res.listInferenceEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInferenceExecutions

 Lists all inference executions that have been performed by the specified inference scheduler. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInferenceExecutionsRequest;
import org.openapis.openapi.models.operations.ListInferenceExecutionsResponse;
import org.openapis.openapi.models.operations.ListInferenceExecutionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.InferenceExecutionStatusEnum;
import org.openapis.openapi.models.shared.ListInferenceExecutionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListInferenceExecutionsRequest req = new ListInferenceExecutionsRequest(                new ListInferenceExecutionsRequest("ea") {{
                                dataEndTimeBefore = OffsetDateTime.parse("2022-12-06T18:05:48.866Z");
                                dataStartTimeAfter = OffsetDateTime.parse("2020-11-28T07:34:18.392Z");
                                maxResults = 373291L;
                                nextToken = "voluptate";
                                status = InferenceExecutionStatusEnum.SUCCESS;
                            }};, ListInferenceExecutionsXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_LIST_INFERENCE_EXECUTIONS) {{
                maxResults = "nam";
                nextToken = "eaque";
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "voluptatibus";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "aut";
            }};            

            ListInferenceExecutionsResponse res = sdk.sdk.listInferenceExecutions(req);

            if (res.listInferenceExecutionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInferenceSchedulers

Retrieves a list of all inference schedulers currently available for your account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInferenceSchedulersRequest;
import org.openapis.openapi.models.operations.ListInferenceSchedulersResponse;
import org.openapis.openapi.models.operations.ListInferenceSchedulersXAmzTargetEnum;
import org.openapis.openapi.models.shared.InferenceSchedulerStatusEnum;
import org.openapis.openapi.models.shared.ListInferenceSchedulersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListInferenceSchedulersRequest req = new ListInferenceSchedulersRequest(                new ListInferenceSchedulersRequest() {{
                                inferenceSchedulerNameBeginsWith = "corporis";
                                maxResults = 944124L;
                                modelName = "libero";
                                nextToken = "nobis";
                                status = InferenceSchedulerStatusEnum.PENDING;
                            }};, ListInferenceSchedulersXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_LIST_INFERENCE_SCHEDULERS) {{
                maxResults = "quis";
                nextToken = "totam";
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "quis";
                xAmzDate = "nesciunt";
                xAmzSecurityToken = "eos";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "dolores";
            }};            

            ListInferenceSchedulersResponse res = sdk.sdk.listInferenceSchedulers(req);

            if (res.listInferenceSchedulersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLabelGroups

 Returns a list of the label groups. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLabelGroupsRequest;
import org.openapis.openapi.models.operations.ListLabelGroupsResponse;
import org.openapis.openapi.models.operations.ListLabelGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListLabelGroupsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLabelGroupsRequest req = new ListLabelGroupsRequest(                new ListLabelGroupsRequest() {{
                                labelGroupNameBeginsWith = "quam";
                                maxResults = 223924L;
                                nextToken = "vero";
                            }};, ListLabelGroupsXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_LIST_LABEL_GROUPS) {{
                maxResults = "nostrum";
                nextToken = "hic";
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "facilis";
                xAmzDate = "perspiciatis";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "consequuntur";
            }};            

            ListLabelGroupsResponse res = sdk.sdk.listLabelGroups(req);

            if (res.listLabelGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLabels

 Provides a list of labels. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLabelsRequest;
import org.openapis.openapi.models.operations.ListLabelsResponse;
import org.openapis.openapi.models.operations.ListLabelsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListLabelsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLabelsRequest req = new ListLabelsRequest(                new ListLabelsRequest("error") {{
                                equipment = "eaque";
                                faultCode = "occaecati";
                                intervalEndTime = OffsetDateTime.parse("2022-07-11T08:07:03.616Z");
                                intervalStartTime = OffsetDateTime.parse("2020-03-14T00:51:21.656Z");
                                maxResults = 267262L;
                                nextToken = "iste";
                            }};, ListLabelsXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_LIST_LABELS) {{
                maxResults = "dolorum";
                nextToken = "deleniti";
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "provident";
                xAmzCredential = "nobis";
                xAmzDate = "libero";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "quos";
            }};            

            ListLabelsResponse res = sdk.sdk.listLabels(req);

            if (res.listLabelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listModels

Generates a list of all models in the account, including model name and ARN, dataset, and status. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListModelsRequest;
import org.openapis.openapi.models.operations.ListModelsResponse;
import org.openapis.openapi.models.operations.ListModelsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListModelsRequest;
import org.openapis.openapi.models.shared.ModelStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListModelsRequest req = new ListModelsRequest(                new ListModelsRequest() {{
                                datasetNameBeginsWith = "dolorem";
                                maxResults = 209843L;
                                modelNameBeginsWith = "dolor";
                                nextToken = "qui";
                                status = ModelStatusEnum.IN_PROGRESS;
                            }};, ListModelsXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_LIST_MODELS) {{
                maxResults = "hic";
                nextToken = "excepturi";
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "dignissimos";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "amet";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "numquam";
            }};            

            ListModelsResponse res = sdk.sdk.listModels(req);

            if (res.listModelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSensorStatistics

 Lists statistics about the data collected for each of the sensors that have been successfully ingested in the particular dataset. Can also be used to retreive Sensor Statistics for a previous ingestion job. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSensorStatisticsRequest;
import org.openapis.openapi.models.operations.ListSensorStatisticsResponse;
import org.openapis.openapi.models.operations.ListSensorStatisticsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListSensorStatisticsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSensorStatisticsRequest req = new ListSensorStatisticsRequest(                new ListSensorStatisticsRequest("ipsa") {{
                                ingestionJobId = "ipsa";
                                maxResults = 434417L;
                                nextToken = "odio";
                            }};, ListSensorStatisticsXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_LIST_SENSOR_STATISTICS) {{
                maxResults = "quaerat";
                nextToken = "accusamus";
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "voluptas";
                xAmzDate = "natus";
                xAmzSecurityToken = "eos";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "sit";
            }};            

            ListSensorStatisticsResponse res = sdk.sdk.listSensorStatistics(req);

            if (res.listSensorStatisticsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists all the tags for a specified resource, including key and value. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("ab");, ListTagsForResourceXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "iusto";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "omnis";
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

## startDataIngestionJob

Starts a data ingestion job. Amazon Lookout for Equipment returns the job status. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartDataIngestionJobRequest;
import org.openapis.openapi.models.operations.StartDataIngestionJobResponse;
import org.openapis.openapi.models.operations.StartDataIngestionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.IngestionInputConfiguration;
import org.openapis.openapi.models.shared.IngestionS3InputConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartDataIngestionJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartDataIngestionJobRequest req = new StartDataIngestionJobRequest(                new StartDataIngestionJobRequest("distinctio", "asperiores",                 new IngestionInputConfiguration(                new IngestionS3InputConfiguration("nihil") {{
                                                                keyPattern = "ipsum";
                                                                prefix = "voluptate";
                                                            }};);, "id");, StartDataIngestionJobXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_START_DATA_INGESTION_JOB) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "eius";
                xAmzCredential = "aspernatur";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "amet";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "accusamus";
            }};            

            StartDataIngestionJobResponse res = sdk.sdk.startDataIngestionJob(req);

            if (res.startDataIngestionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startInferenceScheduler

Starts an inference scheduler. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartInferenceSchedulerRequest;
import org.openapis.openapi.models.operations.StartInferenceSchedulerResponse;
import org.openapis.openapi.models.operations.StartInferenceSchedulerXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartInferenceSchedulerRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartInferenceSchedulerRequest req = new StartInferenceSchedulerRequest(                new StartInferenceSchedulerRequest("saepe");, StartInferenceSchedulerXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_START_INFERENCE_SCHEDULER) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "provident";
                xAmzDate = "minima";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "similique";
            }};            

            StartInferenceSchedulerResponse res = sdk.sdk.startInferenceScheduler(req);

            if (res.startInferenceSchedulerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopInferenceScheduler

Stops an inference scheduler. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopInferenceSchedulerRequest;
import org.openapis.openapi.models.operations.StopInferenceSchedulerResponse;
import org.openapis.openapi.models.operations.StopInferenceSchedulerXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopInferenceSchedulerRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopInferenceSchedulerRequest req = new StopInferenceSchedulerRequest(                new StopInferenceSchedulerRequest("at");, StopInferenceSchedulerXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_STOP_INFERENCE_SCHEDULER) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "vel";
                xAmzDate = "quod";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "dolorum";
            }};            

            StopInferenceSchedulerResponse res = sdk.sdk.stopInferenceScheduler(req);

            if (res.stopInferenceSchedulerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Associates a given tag to a resource in your account. A tag is a key-value pair which can be added to an Amazon Lookout for Equipment resource as metadata. Tags can be used for organizing your resources as well as helping you to search and filter by tag. Multiple tags can be added to a resource, either when you create it, or later. Up to 50 tags can be associated with each resource. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("esse",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("quisquam", "tenetur") {{
                                                    key = "iusto";
                                                    value = "ipsum";
                                                }}),
                                                add(new Tag("accusamus", "numquam") {{
                                                    key = "amet";
                                                    value = "tempore";
                                                }}),
                                                add(new Tag("sapiente", "totam") {{
                                                    key = "enim";
                                                    value = "dolorem";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_TAG_RESOURCE) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "sit";
                xAmzCredential = "expedita";
                xAmzDate = "neque";
                xAmzSecurityToken = "sed";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "libero";
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

Removes a specific tag from a given resource. The tag is specified by its key. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("deserunt",                 new String[]{{
                                                add("ipsum"),
                                                add("incidunt"),
                                            }});, UntagResourceXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "maxime";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "laborum";
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

## updateInferenceScheduler

Updates an inference scheduler. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInferenceSchedulerRequest;
import org.openapis.openapi.models.operations.UpdateInferenceSchedulerResponse;
import org.openapis.openapi.models.operations.UpdateInferenceSchedulerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DataUploadFrequencyEnum;
import org.openapis.openapi.models.shared.InferenceInputConfiguration;
import org.openapis.openapi.models.shared.InferenceInputNameConfiguration;
import org.openapis.openapi.models.shared.InferenceOutputConfiguration;
import org.openapis.openapi.models.shared.InferenceS3InputConfiguration;
import org.openapis.openapi.models.shared.InferenceS3OutputConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateInferenceSchedulerRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateInferenceSchedulerRequest req = new UpdateInferenceSchedulerRequest(                new UpdateInferenceSchedulerRequest("incidunt") {{
                                dataDelayOffsetInMinutes = 132068L;
                                dataInputConfiguration = new InferenceInputConfiguration() {{
                                    inferenceInputNameConfiguration = new InferenceInputNameConfiguration() {{
                                        componentTimestampDelimiter = "dolores";
                                        timestampFormat = "distinctio";
                                    }};;
                                    inputTimeZoneOffset = "facilis";
                                    s3InputConfiguration = new InferenceS3InputConfiguration("aliquid") {{
                                        prefix = "quam";
                                    }};;
                                }};;
                                dataOutputConfiguration = new InferenceOutputConfiguration(                new InferenceS3OutputConfiguration("molestias") {{
                                                    prefix = "temporibus";
                                                }};) {{
                                    kmsKeyId = "qui";
                                }};;
                                dataUploadFrequency = DataUploadFrequencyEnum.PT10_M;
                                roleArn = "fugit";
                            }};, UpdateInferenceSchedulerXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_UPDATE_INFERENCE_SCHEDULER) {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "odio";
                xAmzCredential = "sunt";
                xAmzDate = "ullam";
                xAmzSecurityToken = "nam";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "voluptatem";
            }};            

            UpdateInferenceSchedulerResponse res = sdk.sdk.updateInferenceScheduler(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLabelGroup

 Updates the label group. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLabelGroupRequest;
import org.openapis.openapi.models.operations.UpdateLabelGroupResponse;
import org.openapis.openapi.models.operations.UpdateLabelGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateLabelGroupRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLabelGroupRequest req = new UpdateLabelGroupRequest(                new UpdateLabelGroupRequest("soluta") {{
                                faultCodes = new String[]{{
                                    add("et"),
                                    add("saepe"),
                                    add("ipsum"),
                                }};
                            }};, UpdateLabelGroupXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_UPDATE_LABEL_GROUP) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "quos";
                xAmzDate = "tempore";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "delectus";
            }};            

            UpdateLabelGroupResponse res = sdk.sdk.updateLabelGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
