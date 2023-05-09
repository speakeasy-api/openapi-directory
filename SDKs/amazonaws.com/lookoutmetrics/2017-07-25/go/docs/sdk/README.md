# SDK

## Overview

This is the <i>Amazon Lookout for Metrics API Reference</i>. For an introduction to the service with tutorials for getting started, visit <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev">Amazon Lookout for Metrics Developer Guide</a>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/lookoutmetrics/>
### Available Operations

* [ActivateAnomalyDetector](#activateanomalydetector) - Activates an anomaly detector.
* [BackTestAnomalyDetector](#backtestanomalydetector) - Runs a backtest for anomaly detection for the specified resource.
* [CreateAlert](#createalert) - Creates an alert for an anomaly detector.
* [CreateAnomalyDetector](#createanomalydetector) - Creates an anomaly detector.
* [CreateMetricSet](#createmetricset) - Creates a dataset.
* [DeactivateAnomalyDetector](#deactivateanomalydetector) - Deactivates an anomaly detector.
* [DeleteAlert](#deletealert) - Deletes an alert.
* [DeleteAnomalyDetector](#deleteanomalydetector) - Deletes a detector. Deleting an anomaly detector will delete all of its corresponding resources including any configured datasets and alerts.
* [DescribeAlert](#describealert) - <p>Describes an alert.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [DescribeAnomalyDetectionExecutions](#describeanomalydetectionexecutions) - Returns information about the status of the specified anomaly detection jobs.
* [DescribeAnomalyDetector](#describeanomalydetector) - <p>Describes a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [DescribeMetricSet](#describemetricset) - <p>Describes a dataset.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [DetectMetricSetConfig](#detectmetricsetconfig) - Detects an Amazon S3 dataset's file format, interval, and offset.
* [GetAnomalyGroup](#getanomalygroup) - Returns details about a group of anomalous metrics.
* [GetDataQualityMetrics](#getdataqualitymetrics) - Returns details about the requested data quality metrics.
* [GetFeedback](#getfeedback) - Get feedback for an anomaly group.
* [GetSampleData](#getsampledata) - Returns a selection of sample records from an Amazon S3 datasource.
* [ListAlerts](#listalerts) - <p>Lists the alerts attached to a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [ListAnomalyDetectors](#listanomalydetectors) - <p>Lists the detectors in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [ListAnomalyGroupRelatedMetrics](#listanomalygrouprelatedmetrics) - Returns a list of measures that are potential causes or effects of an anomaly group.
* [ListAnomalyGroupSummaries](#listanomalygroupsummaries) - Returns a list of anomaly groups.
* [ListAnomalyGroupTimeSeries](#listanomalygrouptimeseries) - Gets a list of anomalous metrics for a measure in an anomaly group.
* [ListMetricSets](#listmetricsets) - <p>Lists the datasets in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [ListTagsForResource](#listtagsforresource) - Gets a list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> for a detector, dataset, or alert.
* [PutFeedback](#putfeedback) - Add feedback for an anomalous metric.
* [TagResource](#tagresource) - Adds <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to a detector, dataset, or alert.
* [UntagResource](#untagresource) - Removes <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> from a detector, dataset, or alert.
* [UpdateAlert](#updatealert) - Make changes to an existing alert.
* [UpdateAnomalyDetector](#updateanomalydetector) - Updates a detector. After activation, you can only change a detector's ingestion delay and description.
* [UpdateMetricSet](#updatemetricset) - Updates a dataset.

## ActivateAnomalyDetector

Activates an anomaly detector.

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
    res, err := s.SDK.ActivateAnomalyDetector(ctx, operations.ActivateAnomalyDetectorRequest{
        RequestBody: operations.ActivateAnomalyDetectorRequestBody{
            AnomalyDetectorArn: "vel",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActivateAnomalyDetectorResponse != nil {
        // handle response
    }
}
```

## BackTestAnomalyDetector

Runs a backtest for anomaly detection for the specified resource.

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
    res, err := s.SDK.BackTestAnomalyDetector(ctx, operations.BackTestAnomalyDetectorRequest{
        RequestBody: operations.BackTestAnomalyDetectorRequestBody{
            AnomalyDetectorArn: "delectus",
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BackTestAnomalyDetectorResponse != nil {
        // handle response
    }
}
```

## CreateAlert

Creates an alert for an anomaly detector.

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
    res, err := s.SDK.CreateAlert(ctx, operations.CreateAlertRequest{
        RequestBody: operations.CreateAlertRequestBody{
            Action: operations.CreateAlertRequestBodyAction{
                LambdaConfiguration: &shared.LambdaConfiguration{
                    LambdaArn: "excepturi",
                    RoleArn: "nisi",
                },
                SNSConfiguration: &shared.SNSConfiguration{
                    RoleArn: "recusandae",
                    SnsFormat: shared.SnsFormatEnumJSON.ToPointer(),
                    SnsTopicArn: "ab",
                },
            },
            AlertDescription: sdk.String("quis"),
            AlertFilters: &operations.CreateAlertRequestBodyAlertFilters{
                DimensionFilterList: []shared.DimensionFilter{
                    shared.DimensionFilter{
                        DimensionName: sdk.String("deserunt"),
                        DimensionValueList: []string{
                            "ipsam",
                        },
                    },
                },
                MetricList: []string{
                    "sapiente",
                    "quo",
                    "odit",
                    "at",
                },
            },
            AlertName: "at",
            AlertSensitivityThreshold: sdk.Int64(978619),
            AnomalyDetectorArn: "molestiae",
            Tags: map[string]string{
                "quod": "esse",
                "totam": "porro",
                "dolorum": "dicta",
                "nam": "officia",
            },
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("beatae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAlertResponse != nil {
        // handle response
    }
}
```

## CreateAnomalyDetector

Creates an anomaly detector.

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
    res, err := s.SDK.CreateAnomalyDetector(ctx, operations.CreateAnomalyDetectorRequest{
        RequestBody: operations.CreateAnomalyDetectorRequestBody{
            AnomalyDetectorConfig: operations.CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig{
                AnomalyDetectorFrequency: shared.FrequencyEnumPt1H.ToPointer(),
            },
            AnomalyDetectorDescription: sdk.String("molestiae"),
            AnomalyDetectorName: "modi",
            KmsKeyArn: sdk.String("qui"),
            Tags: map[string]string{
                "cum": "esse",
                "ipsum": "excepturi",
                "aspernatur": "perferendis",
                "ad": "natus",
            },
        },
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAnomalyDetectorResponse != nil {
        // handle response
    }
}
```

## CreateMetricSet

Creates a dataset.

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
    res, err := s.SDK.CreateMetricSet(ctx, operations.CreateMetricSetRequest{
        RequestBody: operations.CreateMetricSetRequestBody{
            AnomalyDetectorArn: "fuga",
            DimensionFilterList: []shared.MetricSetDimensionFilter{
                shared.MetricSetDimensionFilter{
                    FilterList: []shared.Filter{
                        shared.Filter{
                            DimensionValue: sdk.String("iste"),
                            FilterOperation: shared.FilterOperationEnumEquals.ToPointer(),
                        },
                        shared.Filter{
                            DimensionValue: sdk.String("iure"),
                            FilterOperation: shared.FilterOperationEnumEquals.ToPointer(),
                        },
                    },
                    Name: sdk.String("Dr. Rickey Boyle"),
                },
                shared.MetricSetDimensionFilter{
                    FilterList: []shared.Filter{
                        shared.Filter{
                            DimensionValue: sdk.String("laborum"),
                            FilterOperation: shared.FilterOperationEnumEquals.ToPointer(),
                        },
                        shared.Filter{
                            DimensionValue: sdk.String("dolores"),
                            FilterOperation: shared.FilterOperationEnumEquals.ToPointer(),
                        },
                        shared.Filter{
                            DimensionValue: sdk.String("dolorem"),
                            FilterOperation: shared.FilterOperationEnumEquals.ToPointer(),
                        },
                    },
                    Name: sdk.String("Rose Rolfson"),
                },
            },
            DimensionList: []string{
                "minima",
                "excepturi",
            },
            MetricList: []shared.Metric{
                shared.Metric{
                    AggregationFunction: shared.AggregationFunctionEnumAvg,
                    MetricName: "culpa",
                    Namespace: sdk.String("doloribus"),
                },
            },
            MetricSetDescription: sdk.String("sapiente"),
            MetricSetFrequency: operations.CreateMetricSetRequestBodyMetricSetFrequencyEnumP1D.ToPointer(),
            MetricSetName: "mollitia",
            MetricSource: operations.CreateMetricSetRequestBodyMetricSource{
                AppFlowConfig: &shared.AppFlowConfig{
                    FlowName: sdk.String("dolorem"),
                    RoleArn: sdk.String("culpa"),
                },
                AthenaSourceConfig: &shared.AthenaSourceConfig{
                    BackTestConfiguration: &shared.BackTestConfiguration{
                        RunBackTestMode: false,
                    },
                    DataCatalog: sdk.String("consequuntur"),
                    DatabaseName: sdk.String("repellat"),
                    RoleArn: sdk.String("mollitia"),
                    S3ResultsPath: sdk.String("occaecati"),
                    TableName: sdk.String("numquam"),
                    WorkGroupName: sdk.String("commodi"),
                },
                CloudWatchConfig: &shared.CloudWatchConfig{
                    BackTestConfiguration: &shared.BackTestConfiguration{
                        RunBackTestMode: false,
                    },
                    RoleArn: sdk.String("quam"),
                },
                RDSSourceConfig: &shared.RDSSourceConfig{
                    DBInstanceIdentifier: sdk.String("molestiae"),
                    DatabaseHost: sdk.String("velit"),
                    DatabaseName: sdk.String("error"),
                    DatabasePort: sdk.Int64(158969),
                    RoleArn: sdk.String("quis"),
                    SecretManagerArn: sdk.String("vitae"),
                    TableName: sdk.String("laborum"),
                    VpcConfiguration: &shared.VpcConfiguration{
                        SecurityGroupIDList: []string{
                            "enim",
                            "odit",
                            "quo",
                        },
                        SubnetIDList: []string{
                            "tenetur",
                        },
                    },
                },
                RedshiftSourceConfig: &shared.RedshiftSourceConfig{
                    ClusterIdentifier: sdk.String("ipsam"),
                    DatabaseHost: sdk.String("id"),
                    DatabaseName: sdk.String("possimus"),
                    DatabasePort: sdk.Int64(13571),
                    RoleArn: sdk.String("quasi"),
                    SecretManagerArn: sdk.String("error"),
                    TableName: sdk.String("temporibus"),
                    VpcConfiguration: &shared.VpcConfiguration{
                        SecurityGroupIDList: []string{
                            "quasi",
                            "reiciendis",
                            "voluptatibus",
                        },
                        SubnetIDList: []string{
                            "nihil",
                            "praesentium",
                            "voluptatibus",
                            "ipsa",
                        },
                    },
                },
                S3SourceConfig: &shared.S3SourceConfig{
                    FileFormatDescriptor: &shared.FileFormatDescriptor{
                        CsvFormatDescriptor: &shared.CsvFormatDescriptor{
                            Charset: sdk.String("omnis"),
                            ContainsHeader: sdk.Bool(false),
                            Delimiter: sdk.String("voluptate"),
                            FileCompression: shared.CSVFileCompressionEnumGzip.ToPointer(),
                            HeaderList: []string{
                                "doloremque",
                            },
                            QuoteSymbol: sdk.String("reprehenderit"),
                        },
                        JSONFormatDescriptor: &shared.JSONFormatDescriptor{
                            Charset: sdk.String("ut"),
                            FileCompression: shared.JSONFileCompressionEnumGzip.ToPointer(),
                        },
                    },
                    HistoricalDataPathList: []string{
                        "corporis",
                    },
                    RoleArn: sdk.String("dolore"),
                    TemplatedPathList: []string{
                        "dicta",
                        "harum",
                    },
                },
            },
            Offset: sdk.Int64(317983),
            Tags: map[string]string{
                "commodi": "repudiandae",
                "quae": "ipsum",
                "quidem": "molestias",
                "excepturi": "pariatur",
            },
            TimestampColumn: &operations.CreateMetricSetRequestBodyTimestampColumn{
                ColumnFormat: sdk.String("modi"),
                ColumnName: sdk.String("praesentium"),
            },
            Timezone: sdk.String("rem"),
        },
        XAmzAlgorithm: sdk.String("voluptates"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("incidunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMetricSetResponse != nil {
        // handle response
    }
}
```

## DeactivateAnomalyDetector

Deactivates an anomaly detector.

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
    res, err := s.SDK.DeactivateAnomalyDetector(ctx, operations.DeactivateAnomalyDetectorRequest{
        RequestBody: operations.DeactivateAnomalyDetectorRequestBody{
            AnomalyDetectorArn: "enim",
        },
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeactivateAnomalyDetectorResponse != nil {
        // handle response
    }
}
```

## DeleteAlert

Deletes an alert.

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
    res, err := s.SDK.DeleteAlert(ctx, operations.DeleteAlertRequest{
        RequestBody: operations.DeleteAlertRequestBody{
            AlertArn: "labore",
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("magni"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAlertResponse != nil {
        // handle response
    }
}
```

## DeleteAnomalyDetector

Deletes a detector. Deleting an anomaly detector will delete all of its corresponding resources including any configured datasets and alerts.

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
    res, err := s.SDK.DeleteAnomalyDetector(ctx, operations.DeleteAnomalyDetectorRequest{
        RequestBody: operations.DeleteAnomalyDetectorRequestBody{
            AnomalyDetectorArn: "assumenda",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAnomalyDetectorResponse != nil {
        // handle response
    }
}
```

## DescribeAlert

<p>Describes an alert.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>

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
    res, err := s.SDK.DescribeAlert(ctx, operations.DescribeAlertRequest{
        RequestBody: operations.DescribeAlertRequestBody{
            AlertArn: "tempore",
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAlertResponse != nil {
        // handle response
    }
}
```

## DescribeAnomalyDetectionExecutions

Returns information about the status of the specified anomaly detection jobs.

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
    res, err := s.SDK.DescribeAnomalyDetectionExecutions(ctx, operations.DescribeAnomalyDetectionExecutionsRequest{
        MaxResults: sdk.String("provident"),
        NextToken: sdk.String("necessitatibus"),
        RequestBody: operations.DescribeAnomalyDetectionExecutionsRequestBody{
            AnomalyDetectorArn: "sint",
            MaxResults: sdk.Int64(638921),
            NextToken: sdk.String("dolor"),
            Timestamp: sdk.String("debitis"),
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("rerum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAnomalyDetectionExecutionsResponse != nil {
        // handle response
    }
}
```

## DescribeAnomalyDetector

<p>Describes a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>

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
    res, err := s.SDK.DescribeAnomalyDetector(ctx, operations.DescribeAnomalyDetectorRequest{
        RequestBody: operations.DescribeAnomalyDetectorRequestBody{
            AnomalyDetectorArn: "dicta",
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAnomalyDetectorResponse != nil {
        // handle response
    }
}
```

## DescribeMetricSet

<p>Describes a dataset.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>

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
    res, err := s.SDK.DescribeMetricSet(ctx, operations.DescribeMetricSetRequest{
        RequestBody: operations.DescribeMetricSetRequestBody{
            MetricSetArn: "non",
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMetricSetResponse != nil {
        // handle response
    }
}
```

## DetectMetricSetConfig

Detects an Amazon S3 dataset's file format, interval, and offset.

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
    res, err := s.SDK.DetectMetricSetConfig(ctx, operations.DetectMetricSetConfigRequest{
        RequestBody: operations.DetectMetricSetConfigRequestBody{
            AnomalyDetectorArn: "id",
            AutoDetectionMetricSource: operations.DetectMetricSetConfigRequestBodyAutoDetectionMetricSource{
                S3SourceConfig: &shared.AutoDetectionS3SourceConfig{
                    HistoricalDataPathList: []string{
                        "deleniti",
                        "sapiente",
                        "amet",
                    },
                    TemplatedPathList: []string{
                        "nisi",
                        "vel",
                        "natus",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetectMetricSetConfigResponse != nil {
        // handle response
    }
}
```

## GetAnomalyGroup

Returns details about a group of anomalous metrics.

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
    res, err := s.SDK.GetAnomalyGroup(ctx, operations.GetAnomalyGroupRequest{
        RequestBody: operations.GetAnomalyGroupRequestBody{
            AnomalyDetectorArn: "labore",
            AnomalyGroupID: "labore",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAnomalyGroupResponse != nil {
        // handle response
    }
}
```

## GetDataQualityMetrics

Returns details about the requested data quality metrics.

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
    res, err := s.SDK.GetDataQualityMetrics(ctx, operations.GetDataQualityMetricsRequest{
        RequestBody: operations.GetDataQualityMetricsRequestBody{
            AnomalyDetectorArn: "magnam",
            MetricSetArn: sdk.String("et"),
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDataQualityMetricsResponse != nil {
        // handle response
    }
}
```

## GetFeedback

Get feedback for an anomaly group.

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
    res, err := s.SDK.GetFeedback(ctx, operations.GetFeedbackRequest{
        MaxResults: sdk.String("reiciendis"),
        NextToken: sdk.String("mollitia"),
        RequestBody: operations.GetFeedbackRequestBody{
            AnomalyDetectorArn: "ad",
            AnomalyGroupTimeSeriesFeedback: operations.GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback{
                AnomalyGroupID: sdk.String("eum"),
                TimeSeriesID: sdk.String("dolor"),
            },
            MaxResults: sdk.Int64(896547),
            NextToken: sdk.String("odit"),
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("maxime"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFeedbackResponse != nil {
        // handle response
    }
}
```

## GetSampleData

Returns a selection of sample records from an Amazon S3 datasource.

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
    res, err := s.SDK.GetSampleData(ctx, operations.GetSampleDataRequest{
        RequestBody: operations.GetSampleDataRequestBody{
            S3SourceConfig: &operations.GetSampleDataRequestBodyS3SourceConfig{
                FileFormatDescriptor: &shared.FileFormatDescriptor{
                    CsvFormatDescriptor: &shared.CsvFormatDescriptor{
                        Charset: sdk.String("deleniti"),
                        ContainsHeader: sdk.Bool(false),
                        Delimiter: sdk.String("facilis"),
                        FileCompression: shared.CSVFileCompressionEnumNone.ToPointer(),
                        HeaderList: []string{
                            "architecto",
                        },
                        QuoteSymbol: sdk.String("repudiandae"),
                    },
                    JSONFormatDescriptor: &shared.JSONFormatDescriptor{
                        Charset: sdk.String("ullam"),
                        FileCompression: shared.JSONFileCompressionEnumGzip.ToPointer(),
                    },
                },
                HistoricalDataPathList: []string{
                    "repellat",
                    "quibusdam",
                },
                RoleArn: sdk.String("sed"),
                TemplatedPathList: []string{
                    "pariatur",
                    "accusantium",
                    "consequuntur",
                    "praesentium",
                },
            },
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("sunt"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("maxime"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSampleDataResponse != nil {
        // handle response
    }
}
```

## ListAlerts

<p>Lists the alerts attached to a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>

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
    res, err := s.SDK.ListAlerts(ctx, operations.ListAlertsRequest{
        MaxResults: sdk.String("ea"),
        NextToken: sdk.String("excepturi"),
        RequestBody: operations.ListAlertsRequestBody{
            AnomalyDetectorArn: sdk.String("odit"),
            MaxResults: sdk.Int64(407183),
            NextToken: sdk.String("accusantium"),
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("autem"),
        XAmzSignedHeaders: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAlertsResponse != nil {
        // handle response
    }
}
```

## ListAnomalyDetectors

<p>Lists the detectors in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>

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
    res, err := s.SDK.ListAnomalyDetectors(ctx, operations.ListAnomalyDetectorsRequest{
        MaxResults: sdk.String("eaque"),
        NextToken: sdk.String("pariatur"),
        RequestBody: operations.ListAnomalyDetectorsRequestBody{
            MaxResults: sdk.Int64(365496),
            NextToken: sdk.String("voluptatibus"),
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAnomalyDetectorsResponse != nil {
        // handle response
    }
}
```

## ListAnomalyGroupRelatedMetrics

Returns a list of measures that are potential causes or effects of an anomaly group.

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
    res, err := s.SDK.ListAnomalyGroupRelatedMetrics(ctx, operations.ListAnomalyGroupRelatedMetricsRequest{
        MaxResults: sdk.String("libero"),
        NextToken: sdk.String("nobis"),
        RequestBody: operations.ListAnomalyGroupRelatedMetricsRequestBody{
            AnomalyDetectorArn: "dolores",
            AnomalyGroupID: "quis",
            MaxResults: sdk.Int64(521037),
            NextToken: sdk.String("dignissimos"),
            RelationshipTypeFilter: operations.ListAnomalyGroupRelatedMetricsRequestBodyRelationshipTypeFilterEnumCauseOfInputAnomalyGroup.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("nesciunt"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("quam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAnomalyGroupRelatedMetricsResponse != nil {
        // handle response
    }
}
```

## ListAnomalyGroupSummaries

Returns a list of anomaly groups.

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
    res, err := s.SDK.ListAnomalyGroupSummaries(ctx, operations.ListAnomalyGroupSummariesRequest{
        MaxResults: sdk.String("dolor"),
        NextToken: sdk.String("vero"),
        RequestBody: operations.ListAnomalyGroupSummariesRequestBody{
            AnomalyDetectorArn: "nostrum",
            MaxResults: sdk.Int64(944120),
            NextToken: sdk.String("recusandae"),
            SensitivityThreshold: 608253,
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("perspiciatis"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAnomalyGroupSummariesResponse != nil {
        // handle response
    }
}
```

## ListAnomalyGroupTimeSeries

Gets a list of anomalous metrics for a measure in an anomaly group.

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
    res, err := s.SDK.ListAnomalyGroupTimeSeries(ctx, operations.ListAnomalyGroupTimeSeriesRequest{
        MaxResults: sdk.String("eaque"),
        NextToken: sdk.String("occaecati"),
        RequestBody: operations.ListAnomalyGroupTimeSeriesRequestBody{
            AnomalyDetectorArn: "rerum",
            AnomalyGroupID: "adipisci",
            MaxResults: sdk.Int64(992397),
            MetricName: "earum",
            NextToken: sdk.String("modi"),
        },
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("libero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAnomalyGroupTimeSeriesResponse != nil {
        // handle response
    }
}
```

## ListMetricSets

<p>Lists the datasets in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>

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
    res, err := s.SDK.ListMetricSets(ctx, operations.ListMetricSetsRequest{
        MaxResults: sdk.String("delectus"),
        NextToken: sdk.String("quaerat"),
        RequestBody: operations.ListMetricSetsRequestBody{
            AnomalyDetectorArn: sdk.String("quos"),
            MaxResults: sdk.Int64(398221),
            NextToken: sdk.String("dolorem"),
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMetricSetsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Gets a list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> for a detector, dataset, or alert.

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
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        ResourceArn: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## PutFeedback

Add feedback for an anomalous metric.

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
    res, err := s.SDK.PutFeedback(ctx, operations.PutFeedbackRequest{
        RequestBody: operations.PutFeedbackRequestBody{
            AnomalyDetectorArn: "ipsa",
            AnomalyGroupTimeSeriesFeedback: operations.PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback{
                AnomalyGroupID: sdk.String("iure"),
                IsAnomaly: sdk.Bool(false),
                TimeSeriesID: sdk.String("odio"),
            },
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("eos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutFeedbackResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to a detector, dataset, or alert.

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "sit": "fugiat",
                "ab": "soluta",
                "dolorum": "iusto",
            },
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        ResourceArn: "nihil",
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

Removes <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> from a detector, dataset, or alert.

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
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        ResourceArn: "amet",
        TagKeys: []string{
            "accusamus",
            "ad",
            "saepe",
            "suscipit",
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

## UpdateAlert

Make changes to an existing alert.

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
    res, err := s.SDK.UpdateAlert(ctx, operations.UpdateAlertRequest{
        RequestBody: operations.UpdateAlertRequestBody{
            Action: &operations.UpdateAlertRequestBodyAction{
                LambdaConfiguration: &shared.LambdaConfiguration{
                    LambdaArn: "deserunt",
                    RoleArn: "provident",
                },
                SNSConfiguration: &shared.SNSConfiguration{
                    RoleArn: "minima",
                    SnsFormat: shared.SnsFormatEnumJSON.ToPointer(),
                    SnsTopicArn: "totam",
                },
            },
            AlertArn: "similique",
            AlertDescription: sdk.String("alias"),
            AlertFilters: &operations.UpdateAlertRequestBodyAlertFilters{
                DimensionFilterList: []shared.DimensionFilter{
                    shared.DimensionFilter{
                        DimensionName: sdk.String("quaerat"),
                        DimensionValueList: []string{
                            "vel",
                            "quod",
                        },
                    },
                    shared.DimensionFilter{
                        DimensionName: sdk.String("officiis"),
                        DimensionValueList: []string{
                            "dolorum",
                        },
                    },
                    shared.DimensionFilter{
                        DimensionName: sdk.String("a"),
                        DimensionValueList: []string{
                            "harum",
                            "iusto",
                        },
                    },
                    shared.DimensionFilter{
                        DimensionName: sdk.String("ipsum"),
                        DimensionValueList: []string{
                            "tenetur",
                            "amet",
                            "tempore",
                            "accusamus",
                        },
                    },
                },
                MetricList: []string{
                    "enim",
                    "dolorem",
                },
            },
            AlertSensitivityThreshold: sdk.Int64(957451),
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAlertResponse != nil {
        // handle response
    }
}
```

## UpdateAnomalyDetector

Updates a detector. After activation, you can only change a detector's ingestion delay and description.

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
    res, err := s.SDK.UpdateAnomalyDetector(ctx, operations.UpdateAnomalyDetectorRequest{
        RequestBody: operations.UpdateAnomalyDetectorRequestBody{
            AnomalyDetectorArn: "libero",
            AnomalyDetectorConfig: &operations.UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig{
                AnomalyDetectorFrequency: shared.FrequencyEnumPt1H.ToPointer(),
            },
            AnomalyDetectorDescription: sdk.String("deserunt"),
            KmsKeyArn: sdk.String("quam"),
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("soluta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAnomalyDetectorResponse != nil {
        // handle response
    }
}
```

## UpdateMetricSet

Updates a dataset.

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
    res, err := s.SDK.UpdateMetricSet(ctx, operations.UpdateMetricSetRequest{
        RequestBody: operations.UpdateMetricSetRequestBody{
            DimensionFilterList: []shared.MetricSetDimensionFilter{
                shared.MetricSetDimensionFilter{
                    FilterList: []shared.Filter{
                        shared.Filter{
                            DimensionValue: sdk.String("totam"),
                            FilterOperation: shared.FilterOperationEnumEquals.ToPointer(),
                        },
                        shared.Filter{
                            DimensionValue: sdk.String("incidunt"),
                            FilterOperation: shared.FilterOperationEnumEquals.ToPointer(),
                        },
                        shared.Filter{
                            DimensionValue: sdk.String("aspernatur"),
                            FilterOperation: shared.FilterOperationEnumEquals.ToPointer(),
                        },
                    },
                    Name: sdk.String("Verna Purdy"),
                },
            },
            DimensionList: []string{
                "temporibus",
                "qui",
                "neque",
            },
            MetricList: []shared.Metric{
                shared.Metric{
                    AggregationFunction: shared.AggregationFunctionEnumAvg,
                    MetricName: "odio",
                    Namespace: sdk.String("sunt"),
                },
            },
            MetricSetArn: "ullam",
            MetricSetDescription: sdk.String("nam"),
            MetricSetFrequency: operations.UpdateMetricSetRequestBodyMetricSetFrequencyEnumPt5M.ToPointer(),
            MetricSource: &operations.UpdateMetricSetRequestBodyMetricSource{
                AppFlowConfig: &shared.AppFlowConfig{
                    FlowName: sdk.String("voluptatem"),
                    RoleArn: sdk.String("cumque"),
                },
                AthenaSourceConfig: &shared.AthenaSourceConfig{
                    BackTestConfiguration: &shared.BackTestConfiguration{
                        RunBackTestMode: false,
                    },
                    DataCatalog: sdk.String("soluta"),
                    DatabaseName: sdk.String("nobis"),
                    RoleArn: sdk.String("et"),
                    S3ResultsPath: sdk.String("saepe"),
                    TableName: sdk.String("ipsum"),
                    WorkGroupName: sdk.String("veritatis"),
                },
                CloudWatchConfig: &shared.CloudWatchConfig{
                    BackTestConfiguration: &shared.BackTestConfiguration{
                        RunBackTestMode: false,
                    },
                    RoleArn: sdk.String("nobis"),
                },
                RDSSourceConfig: &shared.RDSSourceConfig{
                    DBInstanceIdentifier: sdk.String("quos"),
                    DatabaseHost: sdk.String("tempore"),
                    DatabaseName: sdk.String("cupiditate"),
                    DatabasePort: sdk.Int64(45614),
                    RoleArn: sdk.String("delectus"),
                    SecretManagerArn: sdk.String("dolorem"),
                    TableName: sdk.String("dolore"),
                    VpcConfiguration: &shared.VpcConfiguration{
                        SecurityGroupIDList: []string{
                            "adipisci",
                            "dolorum",
                        },
                        SubnetIDList: []string{
                            "quae",
                        },
                    },
                },
                RedshiftSourceConfig: &shared.RedshiftSourceConfig{
                    ClusterIdentifier: sdk.String("aut"),
                    DatabaseHost: sdk.String("quas"),
                    DatabaseName: sdk.String("itaque"),
                    DatabasePort: sdk.Int64(9240),
                    RoleArn: sdk.String("est"),
                    SecretManagerArn: sdk.String("repellendus"),
                    TableName: sdk.String("porro"),
                    VpcConfiguration: &shared.VpcConfiguration{
                        SecurityGroupIDList: []string{
                            "ut",
                            "facilis",
                            "cupiditate",
                            "qui",
                        },
                        SubnetIDList: []string{
                            "laudantium",
                        },
                    },
                },
                S3SourceConfig: &shared.S3SourceConfig{
                    FileFormatDescriptor: &shared.FileFormatDescriptor{
                        CsvFormatDescriptor: &shared.CsvFormatDescriptor{
                            Charset: sdk.String("odio"),
                            ContainsHeader: sdk.Bool(false),
                            Delimiter: sdk.String("occaecati"),
                            FileCompression: shared.CSVFileCompressionEnumGzip.ToPointer(),
                            HeaderList: []string{
                                "vero",
                                "omnis",
                                "quis",
                                "ipsum",
                            },
                            QuoteSymbol: sdk.String("delectus"),
                        },
                        JSONFormatDescriptor: &shared.JSONFormatDescriptor{
                            Charset: sdk.String("voluptate"),
                            FileCompression: shared.JSONFileCompressionEnumNone.ToPointer(),
                        },
                    },
                    HistoricalDataPathList: []string{
                        "tenetur",
                        "dignissimos",
                        "hic",
                        "distinctio",
                    },
                    RoleArn: sdk.String("quod"),
                    TemplatedPathList: []string{
                        "similique",
                        "facilis",
                    },
                },
            },
            Offset: sdk.Int64(874288),
            TimestampColumn: &operations.UpdateMetricSetRequestBodyTimestampColumn{
                ColumnFormat: sdk.String("ducimus"),
                ColumnName: sdk.String("dolore"),
            },
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMetricSetResponse != nil {
        // handle response
    }
}
```
