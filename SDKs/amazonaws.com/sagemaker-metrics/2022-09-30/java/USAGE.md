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