# SDK

## Overview

<p>Contains all data plane API operations and data types for Amazon SageMaker Metrics. Use these APIs to put and retrieve (get) features related to your training run.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_metrics_BatchPutMetrics.html">BatchPutMetrics</a> </p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/sagemaker/>
### Available Operations

* [batchPutMetrics](#batchputmetrics) - Used to ingest training metrics into SageMaker. These metrics can be visualized in SageMaker Studio and retrieved with the <code>GetMetrics</code> API. 

## batchPutMetrics

Used to ingest training metrics into SageMaker. These metrics can be visualized in SageMaker Studio and retrieved with the <code>GetMetrics</code> API. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchPutMetricsRequest;
import org.openapis.openapi.models.operations.BatchPutMetricsRequestBody;
import org.openapis.openapi.models.operations.BatchPutMetricsResponse;
import org.openapis.openapi.models.shared.RawMetricData;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchPutMetricsRequest req = new BatchPutMetricsRequest(                new BatchPutMetricsRequestBody(                new org.openapis.openapi.models.shared.RawMetricData[]{{
                                                add(new RawMetricData("esse", OffsetDateTime.parse("2021-06-10T05:07:43.614Z"), 6788.8) {{
                                                    metricName = "at";
                                                    step = 978619L;
                                                    timestamp = OffsetDateTime.parse("2022-03-15T07:22:15.330Z");
                                                    value = 8009.11;
                                                }}),
                                                add(new RawMetricData("deleniti", OffsetDateTime.parse("2020-09-22T07:34:53.140Z"), 5218.48) {{
                                                    metricName = "dicta";
                                                    step = 720633L;
                                                    timestamp = OffsetDateTime.parse("2021-11-02T03:00:47.309Z");
                                                    value = 1433.53;
                                                }}),
                                                add(new RawMetricData("impedit", OffsetDateTime.parse("2022-02-02T00:14:45.467Z"), 2165.5) {{
                                                    metricName = "beatae";
                                                    step = 414662L;
                                                    timestamp = OffsetDateTime.parse("2022-09-26T10:29:33.503Z");
                                                    value = 1863.32;
                                                }}),
                                                add(new RawMetricData("sed", OffsetDateTime.parse("2022-07-22T16:55:44.795Z"), 6169.34) {{
                                                    metricName = "excepturi";
                                                    step = 135218L;
                                                    timestamp = OffsetDateTime.parse("2022-09-04T16:31:28.618Z");
                                                    value = 6176.36;
                                                }}),
                                            }}, "laboriosam");) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "fuga";
                xAmzDate = "in";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "iure";
            }};            

            BatchPutMetricsResponse res = sdk.sdk.batchPutMetrics(req);

            if (res.batchPutMetricsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
