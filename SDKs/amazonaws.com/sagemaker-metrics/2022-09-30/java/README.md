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
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchPutMetricsRequest req = new BatchPutMetricsRequest(                new BatchPutMetricsRequestBody(                new org.openapis.openapi.models.shared.RawMetricData[]{{
                                                add(new RawMetricData("illum", OffsetDateTime.parse("2022-05-18T09:34:54.894Z"), 6458.94) {{
                                                    metricName = "distinctio";
                                                    step = 844266L;
                                                    timestamp = OffsetDateTime.parse("2021-04-14T16:47:33.722Z");
                                                    value = 5448.83;
                                                }}),
                                                add(new RawMetricData("delectus", OffsetDateTime.parse("2022-08-14T01:03:07.567Z"), 4776.65) {{
                                                    metricName = "suscipit";
                                                    step = 437587L;
                                                    timestamp = OffsetDateTime.parse("2022-02-09T12:04:06.508Z");
                                                    value = 567.13;
                                                }}),
                                                add(new RawMetricData("nisi", OffsetDateTime.parse("2020-06-29T11:50:59.674Z"), 710.36) {{
                                                    metricName = "minus";
                                                    step = 812169L;
                                                    timestamp = OffsetDateTime.parse("2022-01-15T14:47:59.325Z");
                                                    value = 5680.45;
                                                }}),
                                            }}, "quis");) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "perferendis";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "quo";
            }};            

            BatchPutMetricsResponse res = sdk.batchPutMetrics(req);

            if (res.batchPutMetricsResponse != null) {
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

* [batchPutMetrics](docs/sdk/README.md#batchputmetrics) - Used to ingest training metrics into SageMaker. These metrics can be visualized in SageMaker Studio and retrieved with the <code>GetMetrics</code> API. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
