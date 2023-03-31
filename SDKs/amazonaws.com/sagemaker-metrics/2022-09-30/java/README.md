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

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchPutMetricsHeaders;
import org.openapis.openapi.models.operations.BatchPutMetricsRequestBody;
import org.openapis.openapi.models.operations.BatchPutMetricsRequest;
import org.openapis.openapi.models.operations.BatchPutMetricsResponse;
import org.openapis.openapi.models.shared.RawMetricData;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            BatchPutMetricsRequest req = new BatchPutMetricsRequest() {{
                headers = new BatchPutMetricsHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new BatchPutMetricsRequestBody() {{
                    metricData = new org.openapis.openapi.models.shared.RawMetricData[]{{
                        add(new RawMetricData() {{
                            metricName = "vel";
                            step = 623564;
                            timestamp = "2022-03-26T09:37:56.283Z";
                            value = 4375.87;
                        }}),
                        add(new RawMetricData() {{
                            metricName = "magnam";
                            step = 891773;
                            timestamp = "2022-01-14T06:18:51.036Z";
                            value = 2726.56;
                        }}),
                        add(new RawMetricData() {{
                            metricName = "suscipit";
                            step = 477665;
                            timestamp = "2020-07-25T16:12:20.938Z";
                            value = 5288.95;
                        }}),
                        add(new RawMetricData() {{
                            metricName = "iusto";
                            step = 568045;
                            timestamp = "2022-01-28T03:46:24.500Z";
                            value = 8360.79;
                        }}),
                    }};
                    trialComponentName = "ab";
                }};
            }};            

            BatchPutMetricsResponse res = sdk.batchPutMetrics(req);

            if (res.batchPutMetricsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `batchPutMetrics` - Used to ingest training metrics into SageMaker. These metrics can be visualized in SageMaker Studio and retrieved with the <code>GetMetrics</code> API. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
