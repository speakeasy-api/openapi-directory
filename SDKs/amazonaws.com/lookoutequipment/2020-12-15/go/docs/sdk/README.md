# SDK

## Overview

Amazon Lookout for Equipment is a machine learning service that uses advanced analytics to identify anomalies in machines from sensor data for use in predictive maintenance. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/lookoutequipment/>
### Available Operations

* [CreateDataset](#createdataset) - Creates a container for a collection of data being ingested for analysis. The dataset contains the metadata describing where the data is and what the data actually looks like. In other words, it contains the location of the data source, the data schema, and other information. A dataset also contains any tags associated with the ingested data. 
* [CreateInferenceScheduler](#createinferencescheduler) -  Creates a scheduled inference. Scheduling an inference is setting up a continuous real-time inference plan to analyze new measurement data. When setting up the schedule, you provide an S3 bucket location for the input data, assign it a delimiter between separate entries in the data, set an offset delay if desired, and set the frequency of inferencing. You must also provide an S3 bucket location for the output data. 
* [CreateLabel](#createlabel) -  Creates a label for an event. 
* [CreateLabelGroup](#createlabelgroup) -  Creates a group of labels. 
* [CreateModel](#createmodel) - <p>Creates an ML model for data inference. </p> <p>A machine-learning (ML) model is a mathematical model that finds patterns in your data. In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal behavior that could be potential equipment failure (or maintenance events). The models are made by analyzing normal data and abnormalities in machine behavior that have already occurred.</p> <p>Your model is trained using a portion of the data from your dataset and uses that data to learn patterns of normal behavior and abnormal patterns that lead to equipment failure. Another portion of the data is used to evaluate the model's accuracy. </p>
* [DeleteDataset](#deletedataset) -  Deletes a dataset and associated artifacts. The operation will check to see if any inference scheduler or data ingestion job is currently using the dataset, and if there isn't, the dataset, its metadata, and any associated data stored in S3 will be deleted. This does not affect any models that used this dataset for training and evaluation, but does prevent it from being used in the future. 
* [DeleteInferenceScheduler](#deleteinferencescheduler) - Deletes an inference scheduler that has been set up. Already processed output results are not affected. 
* [DeleteLabel](#deletelabel) -  Deletes a label. 
* [DeleteLabelGroup](#deletelabelgroup) -  Deletes a group of labels. 
* [DeleteModel](#deletemodel) - Deletes an ML model currently available for Amazon Lookout for Equipment. This will prevent it from being used with an inference scheduler, even one that is already set up. 
* [DescribeDataIngestionJob](#describedataingestionjob) - Provides information on a specific data ingestion job such as creation time, dataset ARN, and status.
* [DescribeDataset](#describedataset) - Provides a JSON description of the data in each time series dataset, including names, column names, and data types.
* [DescribeInferenceScheduler](#describeinferencescheduler) -  Specifies information about the inference scheduler being used, including name, model, status, and associated metadata 
* [DescribeLabel](#describelabel) -  Returns the name of the label. 
* [DescribeLabelGroup](#describelabelgroup) -  Returns information about the label group. 
* [DescribeModel](#describemodel) - Provides a JSON containing the overall information about a specific ML model, including model name and ARN, dataset, training and evaluation information, status, and so on. 
* [ListDataIngestionJobs](#listdataingestionjobs) - Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location of the input data, status, and so on. 
* [ListDatasets](#listdatasets) - Lists all datasets currently available in your account, filtering on the dataset name. 
* [ListInferenceEvents](#listinferenceevents) -  Lists all inference events that have been found for the specified inference scheduler. 
* [ListInferenceExecutions](#listinferenceexecutions) -  Lists all inference executions that have been performed by the specified inference scheduler. 
* [ListInferenceSchedulers](#listinferenceschedulers) - Retrieves a list of all inference schedulers currently available for your account. 
* [ListLabelGroups](#listlabelgroups) -  Returns a list of the label groups. 
* [ListLabels](#listlabels) -  Provides a list of labels. 
* [ListModels](#listmodels) - Generates a list of all models in the account, including model name and ARN, dataset, and status. 
* [ListSensorStatistics](#listsensorstatistics) -  Lists statistics about the data collected for each of the sensors that have been successfully ingested in the particular dataset. Can also be used to retreive Sensor Statistics for a previous ingestion job. 
* [ListTagsForResource](#listtagsforresource) - Lists all the tags for a specified resource, including key and value. 
* [StartDataIngestionJob](#startdataingestionjob) - Starts a data ingestion job. Amazon Lookout for Equipment returns the job status. 
* [StartInferenceScheduler](#startinferencescheduler) - Starts an inference scheduler. 
* [StopInferenceScheduler](#stopinferencescheduler) - Stops an inference scheduler. 
* [TagResource](#tagresource) - Associates a given tag to a resource in your account. A tag is a key-value pair which can be added to an Amazon Lookout for Equipment resource as metadata. Tags can be used for organizing your resources as well as helping you to search and filter by tag. Multiple tags can be added to a resource, either when you create it, or later. Up to 50 tags can be associated with each resource. 
* [UntagResource](#untagresource) - Removes a specific tag from a given resource. The tag is specified by its key. 
* [UpdateInferenceScheduler](#updateinferencescheduler) - Updates an inference scheduler. 
* [UpdateLabelGroup](#updatelabelgroup) -  Updates the label group. 

## CreateDataset

Creates a container for a collection of data being ingested for analysis. The dataset contains the metadata describing where the data is and what the data actually looks like. In other words, it contains the location of the data source, the data schema, and other information. A dataset also contains any tags associated with the ingested data. 

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
        CreateDatasetRequest: shared.CreateDatasetRequest{
            ClientToken: "suscipit",
            DatasetName: "molestiae",
            DatasetSchema: &shared.DatasetSchema{
                InlineDataSchema: sdk.String("minus"),
            },
            ServerSideKmsKeyID: sdk.String("placeat"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "iusto",
                    Value: "excepturi",
                },
                shared.Tag{
                    Key: "nisi",
                    Value: "recusandae",
                },
                shared.Tag{
                    Key: "temporibus",
                    Value: "ab",
                },
            },
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.CreateDatasetXAmzTargetEnumAwsLookoutEquipmentFrontendServiceCreateDataset,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDatasetResponse != nil {
        // handle response
    }
}
```

## CreateInferenceScheduler

 Creates a scheduled inference. Scheduling an inference is setting up a continuous real-time inference plan to analyze new measurement data. When setting up the schedule, you provide an S3 bucket location for the input data, assign it a delimiter between separate entries in the data, set an offset delay if desired, and set the frequency of inferencing. You must also provide an S3 bucket location for the output data. 

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
    res, err := s.SDK.CreateInferenceScheduler(ctx, operations.CreateInferenceSchedulerRequest{
        CreateInferenceSchedulerRequest: shared.CreateInferenceSchedulerRequest{
            ClientToken: "quo",
            DataDelayOffsetInMinutes: sdk.Int64(140350),
            DataInputConfiguration: shared.InferenceInputConfiguration{
                InferenceInputNameConfiguration: &shared.InferenceInputNameConfiguration{
                    ComponentTimestampDelimiter: sdk.String("at"),
                    TimestampFormat: sdk.String("at"),
                },
                InputTimeZoneOffset: sdk.String("maiores"),
                S3InputConfiguration: &shared.InferenceS3InputConfiguration{
                    Bucket: "molestiae",
                    Prefix: sdk.String("quod"),
                },
            },
            DataOutputConfiguration: shared.InferenceOutputConfiguration{
                KmsKeyID: sdk.String("quod"),
                S3OutputConfiguration: shared.InferenceS3OutputConfiguration{
                    Bucket: "esse",
                    Prefix: sdk.String("totam"),
                },
            },
            DataUploadFrequency: shared.DataUploadFrequencyEnumPt30M,
            InferenceSchedulerName: "dolorum",
            ModelName: "dicta",
            RoleArn: "nam",
            ServerSideKmsKeyID: sdk.String("officia"),
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
        XAmzTarget: operations.CreateInferenceSchedulerXAmzTargetEnumAwsLookoutEquipmentFrontendServiceCreateInferenceScheduler,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateInferenceSchedulerResponse != nil {
        // handle response
    }
}
```

## CreateLabel

 Creates a label for an event. 

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
    res, err := s.SDK.CreateLabel(ctx, operations.CreateLabelRequest{
        CreateLabelRequest: shared.CreateLabelRequest{
            ClientToken: "ipsum",
            EndTime: types.MustTimeFromString("2022-09-24T06:58:38.511Z"),
            Equipment: sdk.String("perferendis"),
            FaultCode: sdk.String("ad"),
            LabelGroupName: "natus",
            Notes: sdk.String("sed"),
            Rating: shared.LabelRatingEnumNoAnomaly,
            StartTime: types.MustTimeFromString("2022-05-20T19:39:29.035Z"),
        },
        XAmzAlgorithm: sdk.String("laboriosam"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("iste"),
        XAmzTarget: operations.CreateLabelXAmzTargetEnumAwsLookoutEquipmentFrontendServiceCreateLabel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLabelResponse != nil {
        // handle response
    }
}
```

## CreateLabelGroup

 Creates a group of labels. 

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
    res, err := s.SDK.CreateLabelGroup(ctx, operations.CreateLabelGroupRequest{
        CreateLabelGroupRequest: shared.CreateLabelGroupRequest{
            ClientToken: "iure",
            FaultCodes: []string{
                "quidem",
                "architecto",
                "ipsa",
                "reiciendis",
            },
            LabelGroupName: "est",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "laborum",
                    Value: "dolores",
                },
                shared.Tag{
                    Key: "dolorem",
                    Value: "corporis",
                },
                shared.Tag{
                    Key: "explicabo",
                    Value: "nobis",
                },
            },
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.CreateLabelGroupXAmzTargetEnumAwsLookoutEquipmentFrontendServiceCreateLabelGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLabelGroupResponse != nil {
        // handle response
    }
}
```

## CreateModel

<p>Creates an ML model for data inference. </p> <p>A machine-learning (ML) model is a mathematical model that finds patterns in your data. In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal behavior that could be potential equipment failure (or maintenance events). The models are made by analyzing normal data and abnormalities in machine behavior that have already occurred.</p> <p>Your model is trained using a portion of the data from your dataset and uses that data to learn patterns of normal behavior and abnormal patterns that lead to equipment failure. Another portion of the data is used to evaluate the model's accuracy. </p>

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
    res, err := s.SDK.CreateModel(ctx, operations.CreateModelRequest{
        CreateModelRequest: shared.CreateModelRequest{
            ClientToken: "culpa",
            DataPreProcessingConfiguration: &shared.DataPreProcessingConfiguration{
                TargetSamplingRate: shared.TargetSamplingRateEnumPt1H.ToPointer(),
            },
            DatasetName: "sapiente",
            DatasetSchema: &shared.DatasetSchema{
                InlineDataSchema: sdk.String("architecto"),
            },
            EvaluationDataEndTime: types.MustTimeFromString("2022-08-01T12:28:44.292Z"),
            EvaluationDataStartTime: types.MustTimeFromString("2022-09-05T05:51:25.673Z"),
            LabelsInputConfiguration: &shared.LabelsInputConfiguration{
                LabelGroupName: sdk.String("repellat"),
                S3InputConfiguration: &shared.LabelsS3InputConfiguration{
                    Bucket: "mollitia",
                    Prefix: sdk.String("occaecati"),
                },
            },
            ModelName: "numquam",
            OffCondition: sdk.String("commodi"),
            RoleArn: sdk.String("quam"),
            ServerSideKmsKeyID: sdk.String("molestiae"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "error",
                    Value: "quia",
                },
            },
            TrainingDataEndTime: types.MustTimeFromString("2022-11-21T17:06:48.722Z"),
            TrainingDataStartTime: types.MustTimeFromString("2021-09-08T21:06:19.630Z"),
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.CreateModelXAmzTargetEnumAwsLookoutEquipmentFrontendServiceCreateModel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateModelResponse != nil {
        // handle response
    }
}
```

## DeleteDataset

 Deletes a dataset and associated artifacts. The operation will check to see if any inference scheduler or data ingestion job is currently using the dataset, and if there isn't, the dataset, its metadata, and any associated data stored in S3 will be deleted. This does not affect any models that used this dataset for training and evaluation, but does prevent it from being used in the future. 

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
    res, err := s.SDK.DeleteDataset(ctx, operations.DeleteDatasetRequest{
        DeleteDatasetRequest: shared.DeleteDatasetRequest{
            DatasetName: "possimus",
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.DeleteDatasetXAmzTargetEnumAwsLookoutEquipmentFrontendServiceDeleteDataset,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteInferenceScheduler

Deletes an inference scheduler that has been set up. Already processed output results are not affected. 

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
    res, err := s.SDK.DeleteInferenceScheduler(ctx, operations.DeleteInferenceSchedulerRequest{
        DeleteInferenceSchedulerRequest: shared.DeleteInferenceSchedulerRequest{
            InferenceSchedulerName: "voluptatibus",
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.DeleteInferenceSchedulerXAmzTargetEnumAwsLookoutEquipmentFrontendServiceDeleteInferenceScheduler,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteLabel

 Deletes a label. 

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
    res, err := s.SDK.DeleteLabel(ctx, operations.DeleteLabelRequest{
        DeleteLabelRequest: shared.DeleteLabelRequest{
            LabelGroupName: "cum",
            LabelID: "perferendis",
        },
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("dolore"),
        XAmzTarget: operations.DeleteLabelXAmzTargetEnumAwsLookoutEquipmentFrontendServiceDeleteLabel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteLabelGroup

 Deletes a group of labels. 

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
    res, err := s.SDK.DeleteLabelGroup(ctx, operations.DeleteLabelGroupRequest{
        DeleteLabelGroupRequest: shared.DeleteLabelGroupRequest{
            LabelGroupName: "iusto",
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.DeleteLabelGroupXAmzTargetEnumAwsLookoutEquipmentFrontendServiceDeleteLabelGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteModel

Deletes an ML model currently available for Amazon Lookout for Equipment. This will prevent it from being used with an inference scheduler, even one that is already set up. 

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
    res, err := s.SDK.DeleteModel(ctx, operations.DeleteModelRequest{
        DeleteModelRequest: shared.DeleteModelRequest{
            ModelName: "ipsum",
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.DeleteModelXAmzTargetEnumAwsLookoutEquipmentFrontendServiceDeleteModel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeDataIngestionJob

Provides information on a specific data ingestion job such as creation time, dataset ARN, and status.

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
    res, err := s.SDK.DescribeDataIngestionJob(ctx, operations.DescribeDataIngestionJobRequest{
        DescribeDataIngestionJobRequest: shared.DescribeDataIngestionJobRequest{
            JobID: "voluptates",
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("itaque"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.DescribeDataIngestionJobXAmzTargetEnumAwsLookoutEquipmentFrontendServiceDescribeDataIngestionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDataIngestionJobResponse != nil {
        // handle response
    }
}
```

## DescribeDataset

Provides a JSON description of the data in each time series dataset, including names, column names, and data types.

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
    res, err := s.SDK.DescribeDataset(ctx, operations.DescribeDatasetRequest{
        DescribeDatasetRequest: shared.DescribeDatasetRequest{
            DatasetName: "consequatur",
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("labore"),
        XAmzTarget: operations.DescribeDatasetXAmzTargetEnumAwsLookoutEquipmentFrontendServiceDescribeDataset,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDatasetResponse != nil {
        // handle response
    }
}
```

## DescribeInferenceScheduler

 Specifies information about the inference scheduler being used, including name, model, status, and associated metadata 

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
    res, err := s.SDK.DescribeInferenceScheduler(ctx, operations.DescribeInferenceSchedulerRequest{
        DescribeInferenceSchedulerRequest: shared.DescribeInferenceSchedulerRequest{
            InferenceSchedulerName: "modi",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("assumenda"),
        XAmzTarget: operations.DescribeInferenceSchedulerXAmzTargetEnumAwsLookoutEquipmentFrontendServiceDescribeInferenceScheduler,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeInferenceSchedulerResponse != nil {
        // handle response
    }
}
```

## DescribeLabel

 Returns the name of the label. 

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
    res, err := s.SDK.DescribeLabel(ctx, operations.DescribeLabelRequest{
        DescribeLabelRequest: shared.DescribeLabelRequest{
            LabelGroupName: "ipsam",
            LabelID: "alias",
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("labore"),
        XAmzTarget: operations.DescribeLabelXAmzTargetEnumAwsLookoutEquipmentFrontendServiceDescribeLabel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLabelResponse != nil {
        // handle response
    }
}
```

## DescribeLabelGroup

 Returns information about the label group. 

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
    res, err := s.SDK.DescribeLabelGroup(ctx, operations.DescribeLabelGroupRequest{
        DescribeLabelGroupRequest: shared.DescribeLabelGroupRequest{
            LabelGroupName: "delectus",
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.DescribeLabelGroupXAmzTargetEnumAwsLookoutEquipmentFrontendServiceDescribeLabelGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLabelGroupResponse != nil {
        // handle response
    }
}
```

## DescribeModel

Provides a JSON containing the overall information about a specific ML model, including model name and ARN, dataset, training and evaluation information, status, and so on. 

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
    res, err := s.SDK.DescribeModel(ctx, operations.DescribeModelRequest{
        DescribeModelRequest: shared.DescribeModelRequest{
            ModelName: "sint",
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.DescribeModelXAmzTargetEnumAwsLookoutEquipmentFrontendServiceDescribeModel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeModelResponse != nil {
        // handle response
    }
}
```

## ListDataIngestionJobs

Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location of the input data, status, and so on. 

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
    res, err := s.SDK.ListDataIngestionJobs(ctx, operations.ListDataIngestionJobsRequest{
        ListDataIngestionJobsRequest: shared.ListDataIngestionJobsRequest{
            DatasetName: sdk.String("illum"),
            MaxResults: sdk.Int64(978571),
            NextToken: sdk.String("rerum"),
            Status: shared.IngestionJobStatusEnumInProgress.ToPointer(),
        },
        MaxResults: sdk.String("magnam"),
        NextToken: sdk.String("cumque"),
        XAmzAlgorithm: sdk.String("facere"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.ListDataIngestionJobsXAmzTargetEnumAwsLookoutEquipmentFrontendServiceListDataIngestionJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDataIngestionJobsResponse != nil {
        // handle response
    }
}
```

## ListDatasets

Lists all datasets currently available in your account, filtering on the dataset name. 

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
    res, err := s.SDK.ListDatasets(ctx, operations.ListDatasetsRequest{
        ListDatasetsRequest: shared.ListDatasetsRequest{
            DatasetNameBeginsWith: sdk.String("enim"),
            MaxResults: sdk.Int64(881736),
            NextToken: sdk.String("delectus"),
        },
        MaxResults: sdk.String("quidem"),
        NextToken: sdk.String("provident"),
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.ListDatasetsXAmzTargetEnumAwsLookoutEquipmentFrontendServiceListDatasets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDatasetsResponse != nil {
        // handle response
    }
}
```

## ListInferenceEvents

 Lists all inference events that have been found for the specified inference scheduler. 

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
    res, err := s.SDK.ListInferenceEvents(ctx, operations.ListInferenceEventsRequest{
        ListInferenceEventsRequest: shared.ListInferenceEventsRequest{
            InferenceSchedulerName: "nisi",
            IntervalEndTime: types.MustTimeFromString("2022-05-20T03:14:12.839Z"),
            IntervalStartTime: types.MustTimeFromString("2022-01-19T08:19:15.156Z"),
            MaxResults: sdk.Int64(19193),
            NextToken: sdk.String("nihil"),
        },
        MaxResults: sdk.String("magnam"),
        NextToken: sdk.String("distinctio"),
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.ListInferenceEventsXAmzTargetEnumAwsLookoutEquipmentFrontendServiceListInferenceEvents,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInferenceEventsResponse != nil {
        // handle response
    }
}
```

## ListInferenceExecutions

 Lists all inference executions that have been performed by the specified inference scheduler. 

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
    res, err := s.SDK.ListInferenceExecutions(ctx, operations.ListInferenceExecutionsRequest{
        ListInferenceExecutionsRequest: shared.ListInferenceExecutionsRequest{
            DataEndTimeBefore: types.MustTimeFromString("2022-08-05T15:44:28.456Z"),
            DataStartTimeAfter: types.MustTimeFromString("2022-09-14T03:02:47.808Z"),
            InferenceSchedulerName: "et",
            MaxResults: sdk.Int64(569965),
            NextToken: sdk.String("ullam"),
            Status: shared.InferenceExecutionStatusEnumSuccess.ToPointer(),
        },
        MaxResults: sdk.String("quos"),
        NextToken: sdk.String("sint"),
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.ListInferenceExecutionsXAmzTargetEnumAwsLookoutEquipmentFrontendServiceListInferenceExecutions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInferenceExecutionsResponse != nil {
        // handle response
    }
}
```

## ListInferenceSchedulers

Retrieves a list of all inference schedulers currently available for your account. 

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
    res, err := s.SDK.ListInferenceSchedulers(ctx, operations.ListInferenceSchedulersRequest{
        ListInferenceSchedulersRequest: shared.ListInferenceSchedulersRequest{
            InferenceSchedulerNameBeginsWith: sdk.String("necessitatibus"),
            MaxResults: sdk.Int64(141264),
            ModelName: sdk.String("nemo"),
            NextToken: sdk.String("quasi"),
            Status: shared.InferenceSchedulerStatusEnumRunning.ToPointer(),
        },
        MaxResults: sdk.String("doloribus"),
        NextToken: sdk.String("debitis"),
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.ListInferenceSchedulersXAmzTargetEnumAwsLookoutEquipmentFrontendServiceListInferenceSchedulers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInferenceSchedulersResponse != nil {
        // handle response
    }
}
```

## ListLabelGroups

 Returns a list of the label groups. 

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
    res, err := s.SDK.ListLabelGroups(ctx, operations.ListLabelGroupsRequest{
        ListLabelGroupsRequest: shared.ListLabelGroupsRequest{
            LabelGroupNameBeginsWith: sdk.String("repudiandae"),
            MaxResults: sdk.Int64(352312),
            NextToken: sdk.String("expedita"),
        },
        MaxResults: sdk.String("nihil"),
        NextToken: sdk.String("repellat"),
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.ListLabelGroupsXAmzTargetEnumAwsLookoutEquipmentFrontendServiceListLabelGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLabelGroupsResponse != nil {
        // handle response
    }
}
```

## ListLabels

 Provides a list of labels. 

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
    res, err := s.SDK.ListLabels(ctx, operations.ListLabelsRequest{
        ListLabelsRequest: shared.ListLabelsRequest{
            Equipment: sdk.String("natus"),
            FaultCode: sdk.String("magni"),
            IntervalEndTime: types.MustTimeFromString("2022-03-22T15:30:46.869Z"),
            IntervalStartTime: types.MustTimeFromString("2020-05-28T21:33:10.895Z"),
            LabelGroupName: "maxime",
            MaxResults: sdk.Int64(411397),
            NextToken: sdk.String("excepturi"),
        },
        MaxResults: sdk.String("odit"),
        NextToken: sdk.String("ea"),
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("autem"),
        XAmzTarget: operations.ListLabelsXAmzTargetEnumAwsLookoutEquipmentFrontendServiceListLabels,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLabelsResponse != nil {
        // handle response
    }
}
```

## ListModels

Generates a list of all models in the account, including model name and ARN, dataset, and status. 

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
    res, err := s.SDK.ListModels(ctx, operations.ListModelsRequest{
        ListModelsRequest: shared.ListModelsRequest{
            DatasetNameBeginsWith: sdk.String("nam"),
            MaxResults: sdk.Int64(50588),
            ModelNameBeginsWith: sdk.String("pariatur"),
            NextToken: sdk.String("nemo"),
            Status: shared.ModelStatusEnumFailed.ToPointer(),
        },
        MaxResults: sdk.String("perferendis"),
        NextToken: sdk.String("fugiat"),
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.ListModelsXAmzTargetEnumAwsLookoutEquipmentFrontendServiceListModels,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListModelsResponse != nil {
        // handle response
    }
}
```

## ListSensorStatistics

 Lists statistics about the data collected for each of the sensors that have been successfully ingested in the particular dataset. Can also be used to retreive Sensor Statistics for a previous ingestion job. 

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
    res, err := s.SDK.ListSensorStatistics(ctx, operations.ListSensorStatisticsRequest{
        ListSensorStatisticsRequest: shared.ListSensorStatisticsRequest{
            DatasetName: "dolores",
            IngestionJobID: sdk.String("quis"),
            MaxResults: sdk.Int64(521037),
            NextToken: sdk.String("dignissimos"),
        },
        MaxResults: sdk.String("eaque"),
        NextToken: sdk.String("quis"),
        XAmzAlgorithm: sdk.String("nesciunt"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.ListSensorStatisticsXAmzTargetEnumAwsLookoutEquipmentFrontendServiceListSensorStatistics,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSensorStatisticsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists all the tags for a specified resource, including key and value. 

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceArn: "vero",
        },
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumAwsLookoutEquipmentFrontendServiceListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## StartDataIngestionJob

Starts a data ingestion job. Amazon Lookout for Equipment returns the job status. 

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
    res, err := s.SDK.StartDataIngestionJob(ctx, operations.StartDataIngestionJobRequest{
        StartDataIngestionJobRequest: shared.StartDataIngestionJobRequest{
            ClientToken: "porro",
            DatasetName: "consequuntur",
            IngestionInputConfiguration: shared.IngestionInputConfiguration{
                S3InputConfiguration: shared.IngestionS3InputConfiguration{
                    Bucket: "blanditiis",
                    KeyPattern: sdk.String("error"),
                    Prefix: sdk.String("eaque"),
                },
            },
            RoleArn: "occaecati",
        },
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.StartDataIngestionJobXAmzTargetEnumAwsLookoutEquipmentFrontendServiceStartDataIngestionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartDataIngestionJobResponse != nil {
        // handle response
    }
}
```

## StartInferenceScheduler

Starts an inference scheduler. 

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
    res, err := s.SDK.StartInferenceScheduler(ctx, operations.StartInferenceSchedulerRequest{
        StartInferenceSchedulerRequest: shared.StartInferenceSchedulerRequest{
            InferenceSchedulerName: "deleniti",
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("quos"),
        XAmzTarget: operations.StartInferenceSchedulerXAmzTargetEnumAwsLookoutEquipmentFrontendServiceStartInferenceScheduler,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartInferenceSchedulerResponse != nil {
        // handle response
    }
}
```

## StopInferenceScheduler

Stops an inference scheduler. 

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
    res, err := s.SDK.StopInferenceScheduler(ctx, operations.StopInferenceSchedulerRequest{
        StopInferenceSchedulerRequest: shared.StopInferenceSchedulerRequest{
            InferenceSchedulerName: "aliquid",
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.StopInferenceSchedulerXAmzTargetEnumAwsLookoutEquipmentFrontendServiceStopInferenceScheduler,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopInferenceSchedulerResponse != nil {
        // handle response
    }
}
```

## TagResource

Associates a given tag to a resource in your account. A tag is a key-value pair which can be added to an Amazon Lookout for Equipment resource as metadata. Tags can be used for organizing your resources as well as helping you to search and filter by tag. Multiple tags can be added to a resource, either when you create it, or later. Up to 50 tags can be associated with each resource. 

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
        TagResourceRequest: shared.TagResourceRequest{
            ResourceArn: "cum",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dignissimos",
                    Value: "reiciendis",
                },
                shared.Tag{
                    Key: "amet",
                    Value: "dolorum",
                },
            },
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumAwsLookoutEquipmentFrontendServiceTagResource,
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

Removes a specific tag from a given resource. The tag is specified by its key. 

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceArn: "accusamus",
            TagKeys: []string{
                "voluptatibus",
                "voluptas",
                "natus",
            },
        },
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumAwsLookoutEquipmentFrontendServiceUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateInferenceScheduler

Updates an inference scheduler. 

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
    res, err := s.SDK.UpdateInferenceScheduler(ctx, operations.UpdateInferenceSchedulerRequest{
        UpdateInferenceSchedulerRequest: shared.UpdateInferenceSchedulerRequest{
            DataDelayOffsetInMinutes: sdk.Int64(478596),
            DataInputConfiguration: &shared.InferenceInputConfiguration{
                InferenceInputNameConfiguration: &shared.InferenceInputNameConfiguration{
                    ComponentTimestampDelimiter: sdk.String("voluptate"),
                    TimestampFormat: sdk.String("dolorum"),
                },
                InputTimeZoneOffset: sdk.String("deleniti"),
                S3InputConfiguration: &shared.InferenceS3InputConfiguration{
                    Bucket: "omnis",
                    Prefix: sdk.String("necessitatibus"),
                },
            },
            DataOutputConfiguration: &shared.InferenceOutputConfiguration{
                KmsKeyID: sdk.String("distinctio"),
                S3OutputConfiguration: shared.InferenceS3OutputConfiguration{
                    Bucket: "asperiores",
                    Prefix: sdk.String("nihil"),
                },
            },
            DataUploadFrequency: shared.DataUploadFrequencyEnumPt10M.ToPointer(),
            InferenceSchedulerName: "voluptate",
            RoleArn: sdk.String("id"),
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.UpdateInferenceSchedulerXAmzTargetEnumAwsLookoutEquipmentFrontendServiceUpdateInferenceScheduler,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateLabelGroup

 Updates the label group. 

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
    res, err := s.SDK.UpdateLabelGroup(ctx, operations.UpdateLabelGroupRequest{
        UpdateLabelGroupRequest: shared.UpdateLabelGroupRequest{
            FaultCodes: []string{
                "saepe",
                "suscipit",
            },
            LabelGroupName: "deserunt",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("at"),
        XAmzTarget: operations.UpdateLabelGroupXAmzTargetEnumAwsLookoutEquipmentFrontendServiceUpdateLabelGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
