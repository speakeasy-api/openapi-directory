# SDK

## Overview

This is the <i>Amazon Lookout for Metrics API Reference</i>. For an introduction to the service with tutorials for getting started, visit <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev">Amazon Lookout for Metrics Developer Guide</a>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/lookoutmetrics/>
### Available Operations

* [activateAnomalyDetector](#activateanomalydetector) - Activates an anomaly detector.
* [backTestAnomalyDetector](#backtestanomalydetector) - Runs a backtest for anomaly detection for the specified resource.
* [createAlert](#createalert) - Creates an alert for an anomaly detector.
* [createAnomalyDetector](#createanomalydetector) - Creates an anomaly detector.
* [createMetricSet](#createmetricset) - Creates a dataset.
* [deactivateAnomalyDetector](#deactivateanomalydetector) - Deactivates an anomaly detector.
* [deleteAlert](#deletealert) - Deletes an alert.
* [deleteAnomalyDetector](#deleteanomalydetector) - Deletes a detector. Deleting an anomaly detector will delete all of its corresponding resources including any configured datasets and alerts.
* [describeAlert](#describealert) - <p>Describes an alert.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [describeAnomalyDetectionExecutions](#describeanomalydetectionexecutions) - Returns information about the status of the specified anomaly detection jobs.
* [describeAnomalyDetector](#describeanomalydetector) - <p>Describes a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [describeMetricSet](#describemetricset) - <p>Describes a dataset.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [detectMetricSetConfig](#detectmetricsetconfig) - Detects an Amazon S3 dataset's file format, interval, and offset.
* [getAnomalyGroup](#getanomalygroup) - Returns details about a group of anomalous metrics.
* [getDataQualityMetrics](#getdataqualitymetrics) - Returns details about the requested data quality metrics.
* [getFeedback](#getfeedback) - Get feedback for an anomaly group.
* [getSampleData](#getsampledata) - Returns a selection of sample records from an Amazon S3 datasource.
* [listAlerts](#listalerts) - <p>Lists the alerts attached to a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [listAnomalyDetectors](#listanomalydetectors) - <p>Lists the detectors in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [listAnomalyGroupRelatedMetrics](#listanomalygrouprelatedmetrics) - Returns a list of measures that are potential causes or effects of an anomaly group.
* [listAnomalyGroupSummaries](#listanomalygroupsummaries) - Returns a list of anomaly groups.
* [listAnomalyGroupTimeSeries](#listanomalygrouptimeseries) - Gets a list of anomalous metrics for a measure in an anomaly group.
* [listMetricSets](#listmetricsets) - <p>Lists the datasets in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [listTagsForResource](#listtagsforresource) - Gets a list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> for a detector, dataset, or alert.
* [putFeedback](#putfeedback) - Add feedback for an anomalous metric.
* [tagResource](#tagresource) - Adds <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to a detector, dataset, or alert.
* [untagResource](#untagresource) - Removes <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> from a detector, dataset, or alert.
* [updateAlert](#updatealert) - Make changes to an existing alert.
* [updateAnomalyDetector](#updateanomalydetector) - Updates a detector. After activation, you can only change a detector's ingestion delay and description.
* [updateMetricSet](#updatemetricset) - Updates a dataset.

## activateAnomalyDetector

Activates an anomaly detector.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivateAnomalyDetectorRequest;
import org.openapis.openapi.models.operations.ActivateAnomalyDetectorRequestBody;
import org.openapis.openapi.models.operations.ActivateAnomalyDetectorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ActivateAnomalyDetectorRequest req = new ActivateAnomalyDetectorRequest(                new ActivateAnomalyDetectorRequestBody("deserunt");) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            ActivateAnomalyDetectorResponse res = sdk.sdk.activateAnomalyDetector(req);

            if (res.activateAnomalyDetectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## backTestAnomalyDetector

Runs a backtest for anomaly detection for the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BackTestAnomalyDetectorRequest;
import org.openapis.openapi.models.operations.BackTestAnomalyDetectorRequestBody;
import org.openapis.openapi.models.operations.BackTestAnomalyDetectorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BackTestAnomalyDetectorRequest req = new BackTestAnomalyDetectorRequest(                new BackTestAnomalyDetectorRequestBody("molestiae");) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            BackTestAnomalyDetectorResponse res = sdk.sdk.backTestAnomalyDetector(req);

            if (res.backTestAnomalyDetectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAlert

Creates an alert for an anomaly detector.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAlertRequest;
import org.openapis.openapi.models.operations.CreateAlertRequestBody;
import org.openapis.openapi.models.operations.CreateAlertRequestBodyAction;
import org.openapis.openapi.models.operations.CreateAlertRequestBodyAlertFilters;
import org.openapis.openapi.models.operations.CreateAlertResponse;
import org.openapis.openapi.models.shared.DimensionFilter;
import org.openapis.openapi.models.shared.LambdaConfiguration;
import org.openapis.openapi.models.shared.SNSConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SnsFormatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAlertRequest req = new CreateAlertRequest(                new CreateAlertRequestBody(                new CreateAlertRequestBodyAction() {{
                                                lambdaConfiguration = new LambdaConfiguration("ab", "quis");;
                                                snsConfiguration = new SNSConfiguration("veritatis", "deserunt") {{
                                                    snsFormat = SnsFormatEnum.LONG_TEXT;
                                                }};;
                                            }};, "ipsam", "repellendus") {{
                                alertDescription = "sapiente";
                                alertFilters = new CreateAlertRequestBodyAlertFilters() {{
                                    dimensionFilterList = new org.openapis.openapi.models.shared.DimensionFilter[]{{
                                        add(new DimensionFilter() {{
                                            dimensionName = "odit";
                                            dimensionValueList = new String[]{{
                                                add("at"),
                                                add("maiores"),
                                                add("molestiae"),
                                                add("quod"),
                                            }};
                                        }}),
                                        add(new DimensionFilter() {{
                                            dimensionName = "quod";
                                            dimensionValueList = new String[]{{
                                                add("totam"),
                                                add("porro"),
                                            }};
                                        }}),
                                        add(new DimensionFilter() {{
                                            dimensionName = "dolorum";
                                            dimensionValueList = new String[]{{
                                                add("nam"),
                                            }};
                                        }}),
                                        add(new DimensionFilter() {{
                                            dimensionName = "officia";
                                            dimensionValueList = new String[]{{
                                                add("fugit"),
                                                add("deleniti"),
                                                add("hic"),
                                            }};
                                        }}),
                                    }};
                                    metricList = new String[]{{
                                        add("totam"),
                                        add("beatae"),
                                        add("commodi"),
                                        add("molestiae"),
                                    }};
                                }};;
                                alertSensitivityThreshold = 264555L;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("impedit", "cum");
                                }};
                            }};) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "excepturi";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "natus";
            }};            

            CreateAlertResponse res = sdk.sdk.createAlert(req);

            if (res.createAlertResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAnomalyDetector

Creates an anomaly detector.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAnomalyDetectorRequest;
import org.openapis.openapi.models.operations.CreateAnomalyDetectorRequestBody;
import org.openapis.openapi.models.operations.CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig;
import org.openapis.openapi.models.operations.CreateAnomalyDetectorResponse;
import org.openapis.openapi.models.shared.FrequencyEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAnomalyDetectorRequest req = new CreateAnomalyDetectorRequest(                new CreateAnomalyDetectorRequestBody(                new CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig() {{
                                                anomalyDetectorFrequency = FrequencyEnum.PT10_M;
                                            }};, "dolor") {{
                                anomalyDetectorDescription = "natus";
                                kmsKeyArn = "laboriosam";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("saepe", "fuga");
                                    put("in", "corporis");
                                    put("iste", "iure");
                                    put("saepe", "quidem");
                                }};
                            }};) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "reiciendis";
                xAmzDate = "est";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "dolores";
            }};            

            CreateAnomalyDetectorResponse res = sdk.sdk.createAnomalyDetector(req);

            if (res.createAnomalyDetectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMetricSet

Creates a dataset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMetricSetRequest;
import org.openapis.openapi.models.operations.CreateMetricSetRequestBody;
import org.openapis.openapi.models.operations.CreateMetricSetRequestBodyMetricSetFrequencyEnum;
import org.openapis.openapi.models.operations.CreateMetricSetRequestBodyMetricSource;
import org.openapis.openapi.models.operations.CreateMetricSetRequestBodyTimestampColumn;
import org.openapis.openapi.models.operations.CreateMetricSetResponse;
import org.openapis.openapi.models.shared.AggregationFunctionEnum;
import org.openapis.openapi.models.shared.AppFlowConfig;
import org.openapis.openapi.models.shared.AthenaSourceConfig;
import org.openapis.openapi.models.shared.BackTestConfiguration;
import org.openapis.openapi.models.shared.CSVFileCompressionEnum;
import org.openapis.openapi.models.shared.CloudWatchConfig;
import org.openapis.openapi.models.shared.CsvFormatDescriptor;
import org.openapis.openapi.models.shared.FileFormatDescriptor;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterOperationEnum;
import org.openapis.openapi.models.shared.JsonFileCompressionEnum;
import org.openapis.openapi.models.shared.JsonFormatDescriptor;
import org.openapis.openapi.models.shared.Metric;
import org.openapis.openapi.models.shared.MetricSetDimensionFilter;
import org.openapis.openapi.models.shared.RDSSourceConfig;
import org.openapis.openapi.models.shared.RedshiftSourceConfig;
import org.openapis.openapi.models.shared.S3SourceConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VpcConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateMetricSetRequest req = new CreateMetricSetRequest(                new CreateMetricSetRequestBody("corporis",                 new org.openapis.openapi.models.shared.Metric[]{{
                                                add(new Metric(AggregationFunctionEnum.AVG, "minima") {{
                                                    aggregationFunction = AggregationFunctionEnum.SUM;
                                                    metricName = "enim";
                                                    namespace = "omnis";
                                                }}),
                                            }}, "excepturi",                 new CreateMetricSetRequestBodyMetricSource() {{
                                                appFlowConfig = new AppFlowConfig() {{
                                                    flowName = "accusantium";
                                                    roleArn = "iure";
                                                }};;
                                                athenaSourceConfig = new AthenaSourceConfig() {{
                                                    backTestConfiguration = new BackTestConfiguration(false);;
                                                    dataCatalog = "culpa";
                                                    databaseName = "doloribus";
                                                    roleArn = "sapiente";
                                                    s3ResultsPath = "architecto";
                                                    tableName = "mollitia";
                                                    workGroupName = "dolorem";
                                                }};;
                                                cloudWatchConfig = new CloudWatchConfig() {{
                                                    backTestConfiguration = new BackTestConfiguration(false);;
                                                    roleArn = "culpa";
                                                }};;
                                                rdsSourceConfig = new RDSSourceConfig() {{
                                                    dbInstanceIdentifier = "consequuntur";
                                                    databaseHost = "repellat";
                                                    databaseName = "mollitia";
                                                    databasePort = 581850L;
                                                    roleArn = "numquam";
                                                    secretManagerArn = "commodi";
                                                    tableName = "quam";
                                                    vpcConfiguration = new VpcConfiguration(                new String[]{{
                                                                        add("velit"),
                                                                        add("error"),
                                                                    }},                 new String[]{{
                                                                        add("quis"),
                                                                    }});;
                                                }};;
                                                redshiftSourceConfig = new RedshiftSourceConfig() {{
                                                    clusterIdentifier = "vitae";
                                                    databaseHost = "laborum";
                                                    databaseName = "animi";
                                                    databasePort = 317202L;
                                                    roleArn = "odit";
                                                    secretManagerArn = "quo";
                                                    tableName = "sequi";
                                                    vpcConfiguration = new VpcConfiguration(                new String[]{{
                                                                        add("ipsam"),
                                                                        add("id"),
                                                                        add("possimus"),
                                                                        add("aut"),
                                                                    }},                 new String[]{{
                                                                        add("error"),
                                                                    }});;
                                                }};;
                                                s3SourceConfig = new S3SourceConfig() {{
                                                    fileFormatDescriptor = new FileFormatDescriptor() {{
                                                        csvFormatDescriptor = new CsvFormatDescriptor() {{
                                                            charset = "temporibus";
                                                            containsHeader = false;
                                                            delimiter = "laborum";
                                                            fileCompression = CSVFileCompressionEnum.NONE;
                                                            headerList = new String[]{{
                                                                add("voluptatibus"),
                                                                add("vero"),
                                                                add("nihil"),
                                                                add("praesentium"),
                                                            }};
                                                            quoteSymbol = "voluptatibus";
                                                        }};;
                                                        jsonFormatDescriptor = new JsonFormatDescriptor() {{
                                                            charset = "ipsa";
                                                            fileCompression = JsonFileCompressionEnum.GZIP;
                                                        }};;
                                                    }};;
                                                    historicalDataPathList = new String[]{{
                                                        add("cum"),
                                                        add("perferendis"),
                                                    }};
                                                    roleArn = "doloremque";
                                                    templatedPathList = new String[]{{
                                                        add("ut"),
                                                        add("maiores"),
                                                    }};
                                                }};;
                                            }};) {{
                                dimensionFilterList = new org.openapis.openapi.models.shared.MetricSetDimensionFilter[]{{
                                    add(new MetricSetDimensionFilter() {{
                                        filterList = new org.openapis.openapi.models.shared.Filter[]{{
                                            add(new Filter() {{
                                                dimensionValue = "dolore";
                                                filterOperation = FilterOperationEnum.EQUALS;
                                            }}),
                                            add(new Filter() {{
                                                dimensionValue = "iusto";
                                                filterOperation = FilterOperationEnum.EQUALS;
                                            }}),
                                        }};
                                        name = "Maryann Hamill";
                                    }}),
                                }};
                                dimensionList = new String[]{{
                                    add("quae"),
                                    add("ipsum"),
                                    add("quidem"),
                                    add("molestias"),
                                }};
                                metricSetDescription = "excepturi";
                                metricSetFrequency = CreateMetricSetRequestBodyMetricSetFrequencyEnum.PT5_M;
                                offset = 265389L;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("rem", "voluptates");
                                    put("quasi", "repudiandae");
                                    put("sint", "veritatis");
                                }};
                                timestampColumn = new CreateMetricSetRequestBodyTimestampColumn() {{
                                    columnFormat = "itaque";
                                    columnName = "incidunt";
                                }};;
                                timezone = "enim";
                            }};) {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "est";
                xAmzCredential = "quibusdam";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quibusdam";
            }};            

            CreateMetricSetResponse res = sdk.sdk.createMetricSet(req);

            if (res.createMetricSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deactivateAnomalyDetector

Deactivates an anomaly detector.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeactivateAnomalyDetectorRequest;
import org.openapis.openapi.models.operations.DeactivateAnomalyDetectorRequestBody;
import org.openapis.openapi.models.operations.DeactivateAnomalyDetectorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeactivateAnomalyDetectorRequest req = new DeactivateAnomalyDetectorRequest(                new DeactivateAnomalyDetectorRequestBody("modi");) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "cupiditate";
                xAmzDate = "quos";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "assumenda";
            }};            

            DeactivateAnomalyDetectorResponse res = sdk.sdk.deactivateAnomalyDetector(req);

            if (res.deactivateAnomalyDetectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAlert

Deletes an alert.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAlertRequest;
import org.openapis.openapi.models.operations.DeleteAlertRequestBody;
import org.openapis.openapi.models.operations.DeleteAlertResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAlertRequest req = new DeleteAlertRequest(                new DeleteAlertRequestBody("alias");) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "excepturi";
                xAmzDate = "tempora";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "labore";
            }};            

            DeleteAlertResponse res = sdk.sdk.deleteAlert(req);

            if (res.deleteAlertResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAnomalyDetector

Deletes a detector. Deleting an anomaly detector will delete all of its corresponding resources including any configured datasets and alerts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAnomalyDetectorRequest;
import org.openapis.openapi.models.operations.DeleteAnomalyDetectorRequestBody;
import org.openapis.openapi.models.operations.DeleteAnomalyDetectorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAnomalyDetectorRequest req = new DeleteAnomalyDetectorRequest(                new DeleteAnomalyDetectorRequestBody("eum");) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "eligendi";
                xAmzCredential = "sint";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "provident";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "sint";
            }};            

            DeleteAnomalyDetectorResponse res = sdk.sdk.deleteAnomalyDetector(req);

            if (res.deleteAnomalyDetectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAlert

<p>Describes an alert.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAlertRequest;
import org.openapis.openapi.models.operations.DescribeAlertRequestBody;
import org.openapis.openapi.models.operations.DescribeAlertResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAlertRequest req = new DescribeAlertRequest(                new DescribeAlertRequestBody("dolor");) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "a";
                xAmzCredential = "dolorum";
                xAmzDate = "in";
                xAmzSecurityToken = "in";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "maiores";
            }};            

            DescribeAlertResponse res = sdk.sdk.describeAlert(req);

            if (res.describeAlertResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAnomalyDetectionExecutions

Returns information about the status of the specified anomaly detection jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAnomalyDetectionExecutionsRequest;
import org.openapis.openapi.models.operations.DescribeAnomalyDetectionExecutionsRequestBody;
import org.openapis.openapi.models.operations.DescribeAnomalyDetectionExecutionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAnomalyDetectionExecutionsRequest req = new DescribeAnomalyDetectionExecutionsRequest(                new DescribeAnomalyDetectionExecutionsRequestBody("dicta") {{
                                maxResults = 297437L;
                                nextToken = "cumque";
                                timestamp = "facere";
                            }};) {{
                maxResults = "ea";
                nextToken = "aliquid";
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "non";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "enim";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "delectus";
            }};            

            DescribeAnomalyDetectionExecutionsResponse res = sdk.sdk.describeAnomalyDetectionExecutions(req);

            if (res.describeAnomalyDetectionExecutionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAnomalyDetector

<p>Describes a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAnomalyDetectorRequest;
import org.openapis.openapi.models.operations.DescribeAnomalyDetectorRequestBody;
import org.openapis.openapi.models.operations.DescribeAnomalyDetectorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAnomalyDetectorRequest req = new DescribeAnomalyDetectorRequest(                new DescribeAnomalyDetectorRequestBody("provident");) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "id";
                xAmzCredential = "blanditiis";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "deserunt";
            }};            

            DescribeAnomalyDetectorResponse res = sdk.sdk.describeAnomalyDetector(req);

            if (res.describeAnomalyDetectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMetricSet

<p>Describes a dataset.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMetricSetRequest;
import org.openapis.openapi.models.operations.DescribeMetricSetRequestBody;
import org.openapis.openapi.models.operations.DescribeMetricSetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMetricSetRequest req = new DescribeMetricSetRequest(                new DescribeMetricSetRequestBody("vel");) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "molestiae";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "distinctio";
            }};            

            DescribeMetricSetResponse res = sdk.sdk.describeMetricSet(req);

            if (res.describeMetricSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detectMetricSetConfig

Detects an Amazon S3 dataset's file format, interval, and offset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetectMetricSetConfigRequest;
import org.openapis.openapi.models.operations.DetectMetricSetConfigRequestBody;
import org.openapis.openapi.models.operations.DetectMetricSetConfigRequestBodyAutoDetectionMetricSource;
import org.openapis.openapi.models.operations.DetectMetricSetConfigResponse;
import org.openapis.openapi.models.shared.AutoDetectionS3SourceConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetectMetricSetConfigRequest req = new DetectMetricSetConfigRequest(                new DetectMetricSetConfigRequestBody("labore",                 new DetectMetricSetConfigRequestBodyAutoDetectionMetricSource() {{
                                                s3SourceConfig = new AutoDetectionS3SourceConfig() {{
                                                    historicalDataPathList = new String[]{{
                                                        add("suscipit"),
                                                        add("natus"),
                                                    }};
                                                    templatedPathList = new String[]{{
                                                        add("eum"),
                                                        add("vero"),
                                                        add("aspernatur"),
                                                    }};
                                                }};;
                                            }};);) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "et";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "quos";
            }};            

            DetectMetricSetConfigResponse res = sdk.sdk.detectMetricSetConfig(req);

            if (res.detectMetricSetConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAnomalyGroup

Returns details about a group of anomalous metrics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnomalyGroupRequest;
import org.openapis.openapi.models.operations.GetAnomalyGroupRequestBody;
import org.openapis.openapi.models.operations.GetAnomalyGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAnomalyGroupRequest req = new GetAnomalyGroupRequest(                new GetAnomalyGroupRequestBody("accusantium", "mollitia");) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "ad";
                xAmzDate = "eum";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "odit";
            }};            

            GetAnomalyGroupResponse res = sdk.sdk.getAnomalyGroup(req);

            if (res.getAnomalyGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDataQualityMetrics

Returns details about the requested data quality metrics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDataQualityMetricsRequest;
import org.openapis.openapi.models.operations.GetDataQualityMetricsRequestBody;
import org.openapis.openapi.models.operations.GetDataQualityMetricsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDataQualityMetricsRequest req = new GetDataQualityMetricsRequest(                new GetDataQualityMetricsRequestBody("quasi") {{
                                metricSetArn = "iure";
                            }};) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "eius";
                xAmzDate = "maxime";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "in";
            }};            

            GetDataQualityMetricsResponse res = sdk.sdk.getDataQualityMetrics(req);

            if (res.getDataQualityMetricsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFeedback

Get feedback for an anomaly group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFeedbackRequest;
import org.openapis.openapi.models.operations.GetFeedbackRequestBody;
import org.openapis.openapi.models.operations.GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback;
import org.openapis.openapi.models.operations.GetFeedbackResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFeedbackRequest req = new GetFeedbackRequest(                new GetFeedbackRequestBody("architecto",                 new GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback() {{
                                                anomalyGroupId = "repudiandae";
                                                timeSeriesId = "ullam";
                                            }};) {{
                                maxResults = 714242L;
                                nextToken = "nihil";
                            }};) {{
                maxResults = "repellat";
                nextToken = "quibusdam";
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "pariatur";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "natus";
            }};            

            GetFeedbackResponse res = sdk.sdk.getFeedback(req);

            if (res.getFeedbackResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSampleData

Returns a selection of sample records from an Amazon S3 datasource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSampleDataRequest;
import org.openapis.openapi.models.operations.GetSampleDataRequestBody;
import org.openapis.openapi.models.operations.GetSampleDataRequestBodyS3SourceConfig;
import org.openapis.openapi.models.operations.GetSampleDataResponse;
import org.openapis.openapi.models.shared.CSVFileCompressionEnum;
import org.openapis.openapi.models.shared.CsvFormatDescriptor;
import org.openapis.openapi.models.shared.FileFormatDescriptor;
import org.openapis.openapi.models.shared.JsonFileCompressionEnum;
import org.openapis.openapi.models.shared.JsonFormatDescriptor;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSampleDataRequest req = new GetSampleDataRequest(                new GetSampleDataRequestBody() {{
                                s3SourceConfig = new GetSampleDataRequestBodyS3SourceConfig() {{
                                    fileFormatDescriptor = new FileFormatDescriptor() {{
                                        csvFormatDescriptor = new CsvFormatDescriptor() {{
                                            charset = "sunt";
                                            containsHeader = false;
                                            delimiter = "quo";
                                            fileCompression = CSVFileCompressionEnum.GZIP;
                                            headerList = new String[]{{
                                                add("maxime"),
                                                add("ea"),
                                                add("excepturi"),
                                                add("odit"),
                                            }};
                                            quoteSymbol = "ea";
                                        }};;
                                        jsonFormatDescriptor = new JsonFormatDescriptor() {{
                                            charset = "accusantium";
                                            fileCompression = JsonFileCompressionEnum.NONE;
                                        }};;
                                    }};;
                                    historicalDataPathList = new String[]{{
                                        add("quidem"),
                                        add("ipsam"),
                                        add("voluptate"),
                                        add("autem"),
                                    }};
                                    roleArn = "nam";
                                    templatedPathList = new String[]{{
                                        add("pariatur"),
                                    }};
                                }};;
                            }};) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "perferendis";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "amet";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "cumque";
            }};            

            GetSampleDataResponse res = sdk.sdk.getSampleData(req);

            if (res.getSampleDataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAlerts

<p>Lists the alerts attached to a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAlertsRequest;
import org.openapis.openapi.models.operations.ListAlertsRequestBody;
import org.openapis.openapi.models.operations.ListAlertsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAlertsRequest req = new ListAlertsRequest(                new ListAlertsRequestBody() {{
                                anomalyDetectorArn = "hic";
                                maxResults = 729991L;
                                nextToken = "nobis";
                            }};) {{
                maxResults = "dolores";
                nextToken = "quis";
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "eaque";
                xAmzDate = "quis";
                xAmzSecurityToken = "nesciunt";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "perferendis";
            }};            

            ListAlertsResponse res = sdk.sdk.listAlerts(req);

            if (res.listAlertsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAnomalyDetectors

<p>Lists the detectors in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAnomalyDetectorsRequest;
import org.openapis.openapi.models.operations.ListAnomalyDetectorsRequestBody;
import org.openapis.openapi.models.operations.ListAnomalyDetectorsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAnomalyDetectorsRequest req = new ListAnomalyDetectorsRequest(                new ListAnomalyDetectorsRequestBody() {{
                                maxResults = 793698L;
                                nextToken = "quam";
                            }};) {{
                maxResults = "dolor";
                nextToken = "vero";
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "hic";
                xAmzCredential = "recusandae";
                xAmzDate = "omnis";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "perspiciatis";
                xAmzSignedHeaders = "voluptatem";
            }};            

            ListAnomalyDetectorsResponse res = sdk.sdk.listAnomalyDetectors(req);

            if (res.listAnomalyDetectorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAnomalyGroupRelatedMetrics

Returns a list of measures that are potential causes or effects of an anomaly group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAnomalyGroupRelatedMetricsRequest;
import org.openapis.openapi.models.operations.ListAnomalyGroupRelatedMetricsRequestBody;
import org.openapis.openapi.models.operations.ListAnomalyGroupRelatedMetricsRequestBodyRelationshipTypeFilterEnum;
import org.openapis.openapi.models.operations.ListAnomalyGroupRelatedMetricsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAnomalyGroupRelatedMetricsRequest req = new ListAnomalyGroupRelatedMetricsRequest(                new ListAnomalyGroupRelatedMetricsRequestBody("consequuntur", "blanditiis") {{
                                maxResults = 621479L;
                                nextToken = "eaque";
                                relationshipTypeFilter = ListAnomalyGroupRelatedMetricsRequestBodyRelationshipTypeFilterEnum.EFFECT_OF_INPUT_ANOMALY_GROUP;
                            }};) {{
                maxResults = "rerum";
                nextToken = "adipisci";
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "earum";
                xAmzCredential = "modi";
                xAmzDate = "iste";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "pariatur";
            }};            

            ListAnomalyGroupRelatedMetricsResponse res = sdk.sdk.listAnomalyGroupRelatedMetrics(req);

            if (res.listAnomalyGroupRelatedMetricsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAnomalyGroupSummaries

Returns a list of anomaly groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAnomalyGroupSummariesRequest;
import org.openapis.openapi.models.operations.ListAnomalyGroupSummariesRequestBody;
import org.openapis.openapi.models.operations.ListAnomalyGroupSummariesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAnomalyGroupSummariesRequest req = new ListAnomalyGroupSummariesRequest(                new ListAnomalyGroupSummariesRequestBody("nobis", 730122L) {{
                                maxResults = 964490L;
                                nextToken = "quaerat";
                            }};) {{
                maxResults = "quos";
                nextToken = "aliquid";
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolor";
                xAmzDate = "qui";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "excepturi";
            }};            

            ListAnomalyGroupSummariesResponse res = sdk.sdk.listAnomalyGroupSummaries(req);

            if (res.listAnomalyGroupSummariesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAnomalyGroupTimeSeries

Gets a list of anomalous metrics for a measure in an anomaly group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAnomalyGroupTimeSeriesRequest;
import org.openapis.openapi.models.operations.ListAnomalyGroupTimeSeriesRequestBody;
import org.openapis.openapi.models.operations.ListAnomalyGroupTimeSeriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAnomalyGroupTimeSeriesRequest req = new ListAnomalyGroupTimeSeriesRequest(                new ListAnomalyGroupTimeSeriesRequestBody("voluptate", "dignissimos", "reiciendis") {{
                                maxResults = 227414L;
                                nextToken = "dolorum";
                            }};) {{
                maxResults = "numquam";
                nextToken = "veritatis";
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "iure";
                xAmzDate = "odio";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "quidem";
            }};            

            ListAnomalyGroupTimeSeriesResponse res = sdk.sdk.listAnomalyGroupTimeSeries(req);

            if (res.listAnomalyGroupTimeSeriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMetricSets

<p>Lists the datasets in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMetricSetsRequest;
import org.openapis.openapi.models.operations.ListMetricSetsRequestBody;
import org.openapis.openapi.models.operations.ListMetricSetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMetricSetsRequest req = new ListMetricSetsRequest(                new ListMetricSetsRequestBody() {{
                                anomalyDetectorArn = "voluptas";
                                maxResults = 617658L;
                                nextToken = "eos";
                            }};) {{
                maxResults = "atque";
                nextToken = "sit";
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "ab";
                xAmzCredential = "soluta";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "dolorum";
            }};            

            ListMetricSetsResponse res = sdk.sdk.listMetricSets(req);

            if (res.listMetricSetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Gets a list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> for a detector, dataset, or alert.

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
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("omnis") {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "asperiores";
                xAmzDate = "nihil";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "id";
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

## putFeedback

Add feedback for an anomalous metric.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutFeedbackRequest;
import org.openapis.openapi.models.operations.PutFeedbackRequestBody;
import org.openapis.openapi.models.operations.PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback;
import org.openapis.openapi.models.operations.PutFeedbackResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutFeedbackRequest req = new PutFeedbackRequest(                new PutFeedbackRequestBody("eius",                 new PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback() {{
                                                anomalyGroupId = "aspernatur";
                                                isAnomaly = false;
                                                timeSeriesId = "perferendis";
                                            }};);) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "optio";
                xAmzCredential = "accusamus";
                xAmzDate = "ad";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "deserunt";
            }};            

            PutFeedbackResponse res = sdk.sdk.putFeedback(req);

            if (res.putFeedbackResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to a detector, dataset, or alert.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("repellendus", "totam");
                                                put("similique", "alias");
                                            }});, "at") {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "vel";
                xAmzDate = "quod";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "dolorum";
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

Removes <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> from a detector, dataset, or alert.

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
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("esse",                 new String[]{{
                                add("iusto"),
                                add("ipsum"),
                                add("quisquam"),
                            }}) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "amet";
                xAmzCredential = "tempore";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "dolorem";
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

## updateAlert

Make changes to an existing alert.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAlertRequest;
import org.openapis.openapi.models.operations.UpdateAlertRequestBody;
import org.openapis.openapi.models.operations.UpdateAlertRequestBodyAction;
import org.openapis.openapi.models.operations.UpdateAlertRequestBodyAlertFilters;
import org.openapis.openapi.models.operations.UpdateAlertResponse;
import org.openapis.openapi.models.shared.DimensionFilter;
import org.openapis.openapi.models.shared.LambdaConfiguration;
import org.openapis.openapi.models.shared.SNSConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SnsFormatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAlertRequest req = new UpdateAlertRequest(                new UpdateAlertRequestBody("totam") {{
                                action = new UpdateAlertRequestBodyAction() {{
                                    lambdaConfiguration = new LambdaConfiguration("nihil", "sit");;
                                    snsConfiguration = new SNSConfiguration("expedita", "neque") {{
                                        snsFormat = SnsFormatEnum.LONG_TEXT;
                                    }};;
                                }};;
                                alertDescription = "vel";
                                alertFilters = new UpdateAlertRequestBodyAlertFilters() {{
                                    dimensionFilterList = new org.openapis.openapi.models.shared.DimensionFilter[]{{
                                        add(new DimensionFilter() {{
                                            dimensionName = "voluptas";
                                            dimensionValueList = new String[]{{
                                                add("quam"),
                                                add("ipsum"),
                                                add("incidunt"),
                                            }};
                                        }}),
                                        add(new DimensionFilter() {{
                                            dimensionName = "qui";
                                            dimensionValueList = new String[]{{
                                                add("maxime"),
                                                add("pariatur"),
                                                add("soluta"),
                                            }};
                                        }}),
                                        add(new DimensionFilter() {{
                                            dimensionName = "dicta";
                                            dimensionValueList = new String[]{{
                                                add("totam"),
                                                add("incidunt"),
                                                add("aspernatur"),
                                            }};
                                        }}),
                                    }};
                                    metricList = new String[]{{
                                        add("distinctio"),
                                    }};
                                }};;
                                alertSensitivityThreshold = 704474L;
                            }};) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "quam";
                xAmzCredential = "molestias";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "qui";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "fugit";
            }};            

            UpdateAlertResponse res = sdk.sdk.updateAlert(req);

            if (res.updateAlertResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAnomalyDetector

Updates a detector. After activation, you can only change a detector's ingestion delay and description.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAnomalyDetectorRequest;
import org.openapis.openapi.models.operations.UpdateAnomalyDetectorRequestBody;
import org.openapis.openapi.models.operations.UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig;
import org.openapis.openapi.models.operations.UpdateAnomalyDetectorResponse;
import org.openapis.openapi.models.shared.FrequencyEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAnomalyDetectorRequest req = new UpdateAnomalyDetectorRequest(                new UpdateAnomalyDetectorRequestBody("odio") {{
                                anomalyDetectorConfig = new UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig() {{
                                    anomalyDetectorFrequency = FrequencyEnum.P1_D;
                                }};;
                                anomalyDetectorDescription = "ullam";
                                kmsKeyArn = "nam";
                            }};) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "cumque";
                xAmzDate = "soluta";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "et";
                xAmzSignedHeaders = "saepe";
            }};            

            UpdateAnomalyDetectorResponse res = sdk.sdk.updateAnomalyDetector(req);

            if (res.updateAnomalyDetectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMetricSet

Updates a dataset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMetricSetRequest;
import org.openapis.openapi.models.operations.UpdateMetricSetRequestBody;
import org.openapis.openapi.models.operations.UpdateMetricSetRequestBodyMetricSetFrequencyEnum;
import org.openapis.openapi.models.operations.UpdateMetricSetRequestBodyMetricSource;
import org.openapis.openapi.models.operations.UpdateMetricSetRequestBodyTimestampColumn;
import org.openapis.openapi.models.operations.UpdateMetricSetResponse;
import org.openapis.openapi.models.shared.AggregationFunctionEnum;
import org.openapis.openapi.models.shared.AppFlowConfig;
import org.openapis.openapi.models.shared.AthenaSourceConfig;
import org.openapis.openapi.models.shared.BackTestConfiguration;
import org.openapis.openapi.models.shared.CSVFileCompressionEnum;
import org.openapis.openapi.models.shared.CloudWatchConfig;
import org.openapis.openapi.models.shared.CsvFormatDescriptor;
import org.openapis.openapi.models.shared.FileFormatDescriptor;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterOperationEnum;
import org.openapis.openapi.models.shared.JsonFileCompressionEnum;
import org.openapis.openapi.models.shared.JsonFormatDescriptor;
import org.openapis.openapi.models.shared.Metric;
import org.openapis.openapi.models.shared.MetricSetDimensionFilter;
import org.openapis.openapi.models.shared.RDSSourceConfig;
import org.openapis.openapi.models.shared.RedshiftSourceConfig;
import org.openapis.openapi.models.shared.S3SourceConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VpcConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateMetricSetRequest req = new UpdateMetricSetRequest(                new UpdateMetricSetRequestBody("veritatis") {{
                                dimensionFilterList = new org.openapis.openapi.models.shared.MetricSetDimensionFilter[]{{
                                    add(new MetricSetDimensionFilter() {{
                                        filterList = new org.openapis.openapi.models.shared.Filter[]{{
                                            add(new Filter() {{
                                                dimensionValue = "tempore";
                                                filterOperation = FilterOperationEnum.EQUALS;
                                            }}),
                                            add(new Filter() {{
                                                dimensionValue = "cupiditate";
                                                filterOperation = FilterOperationEnum.EQUALS;
                                            }}),
                                            add(new Filter() {{
                                                dimensionValue = "aperiam";
                                                filterOperation = FilterOperationEnum.EQUALS;
                                            }}),
                                        }};
                                        name = "Mike Greenholt";
                                    }}),
                                    add(new MetricSetDimensionFilter() {{
                                        filterList = new org.openapis.openapi.models.shared.Filter[]{{
                                            add(new Filter() {{
                                                dimensionValue = "architecto";
                                                filterOperation = FilterOperationEnum.EQUALS;
                                            }}),
                                            add(new Filter() {{
                                                dimensionValue = "quae";
                                                filterOperation = FilterOperationEnum.EQUALS;
                                            }}),
                                            add(new Filter() {{
                                                dimensionValue = "aut";
                                                filterOperation = FilterOperationEnum.EQUALS;
                                            }}),
                                        }};
                                        name = "Percy Altenwerth";
                                    }}),
                                    add(new MetricSetDimensionFilter() {{
                                        filterList = new org.openapis.openapi.models.shared.Filter[]{{
                                            add(new Filter() {{
                                                dimensionValue = "doloribus";
                                                filterOperation = FilterOperationEnum.EQUALS;
                                            }}),
                                            add(new Filter() {{
                                                dimensionValue = "ut";
                                                filterOperation = FilterOperationEnum.EQUALS;
                                            }}),
                                            add(new Filter() {{
                                                dimensionValue = "facilis";
                                                filterOperation = FilterOperationEnum.EQUALS;
                                            }}),
                                            add(new Filter() {{
                                                dimensionValue = "cupiditate";
                                                filterOperation = FilterOperationEnum.EQUALS;
                                            }}),
                                        }};
                                        name = "Amy Langworth";
                                    }}),
                                }};
                                dimensionList = new String[]{{
                                    add("quisquam"),
                                    add("vero"),
                                    add("omnis"),
                                    add("quis"),
                                }};
                                metricList = new org.openapis.openapi.models.shared.Metric[]{{
                                    add(new Metric(AggregationFunctionEnum.SUM, "tenetur") {{
                                        aggregationFunction = AggregationFunctionEnum.SUM;
                                        metricName = "voluptate";
                                        namespace = "consectetur";
                                    }}),
                                }};
                                metricSetDescription = "dignissimos";
                                metricSetFrequency = UpdateMetricSetRequestBodyMetricSetFrequencyEnum.PT5_M;
                                metricSource = new UpdateMetricSetRequestBodyMetricSource() {{
                                    appFlowConfig = new AppFlowConfig() {{
                                        flowName = "distinctio";
                                        roleArn = "quod";
                                    }};;
                                    athenaSourceConfig = new AthenaSourceConfig() {{
                                        backTestConfiguration = new BackTestConfiguration(false);;
                                        dataCatalog = "odio";
                                        databaseName = "similique";
                                        roleArn = "facilis";
                                        s3ResultsPath = "vero";
                                        tableName = "ducimus";
                                        workGroupName = "dolore";
                                    }};;
                                    cloudWatchConfig = new CloudWatchConfig() {{
                                        backTestConfiguration = new BackTestConfiguration(false);;
                                        roleArn = "quibusdam";
                                    }};;
                                    rdsSourceConfig = new RDSSourceConfig() {{
                                        dbInstanceIdentifier = "illum";
                                        databaseHost = "sequi";
                                        databaseName = "natus";
                                        databasePort = 773326L;
                                        roleArn = "aut";
                                        secretManagerArn = "voluptatibus";
                                        tableName = "exercitationem";
                                        vpcConfiguration = new VpcConfiguration(                new String[]{{
                                                            add("fugit"),
                                                            add("porro"),
                                                            add("maiores"),
                                                            add("doloribus"),
                                                        }},                 new String[]{{
                                                            add("eligendi"),
                                                            add("ducimus"),
                                                        }});;
                                    }};;
                                    redshiftSourceConfig = new RedshiftSourceConfig() {{
                                        clusterIdentifier = "alias";
                                        databaseHost = "officia";
                                        databaseName = "tempora";
                                        databasePort = 368584L;
                                        roleArn = "ea";
                                        secretManagerArn = "aspernatur";
                                        tableName = "vel";
                                        vpcConfiguration = new VpcConfiguration(                new String[]{{
                                                            add("magnam"),
                                                            add("ratione"),
                                                            add("ex"),
                                                            add("laudantium"),
                                                        }},                 new String[]{{
                                                            add("dolor"),
                                                        }});;
                                    }};;
                                    s3SourceConfig = new S3SourceConfig() {{
                                        fileFormatDescriptor = new FileFormatDescriptor() {{
                                            csvFormatDescriptor = new CsvFormatDescriptor() {{
                                                charset = "maiores";
                                                containsHeader = false;
                                                delimiter = "quasi";
                                                fileCompression = CSVFileCompressionEnum.NONE;
                                                headerList = new String[]{{
                                                    add("excepturi"),
                                                    add("voluptatibus"),
                                                    add("nostrum"),
                                                    add("sapiente"),
                                                }};
                                                quoteSymbol = "quisquam";
                                            }};;
                                            jsonFormatDescriptor = new JsonFormatDescriptor() {{
                                                charset = "saepe";
                                                fileCompression = JsonFileCompressionEnum.NONE;
                                            }};;
                                        }};;
                                        historicalDataPathList = new String[]{{
                                            add("corporis"),
                                            add("veniam"),
                                            add("aliquid"),
                                            add("inventore"),
                                        }};
                                        roleArn = "magnam";
                                        templatedPathList = new String[]{{
                                            add("quo"),
                                            add("consectetur"),
                                        }};
                                    }};;
                                }};;
                                offset = 926213L;
                                timestampColumn = new UpdateMetricSetRequestBodyTimestampColumn() {{
                                    columnFormat = "aspernatur";
                                    columnName = "minima";
                                }};;
                            }};) {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "a";
                xAmzCredential = "libero";
                xAmzDate = "aut";
                xAmzSecurityToken = "aut";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "impedit";
            }};            

            UpdateMetricSetResponse res = sdk.sdk.updateMetricSet(req);

            if (res.updateMetricSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
