<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchGetMetricDataHeaders;
import org.openapis.openapi.models.operations.BatchGetMetricDataRequestBody;
import org.openapis.openapi.models.operations.BatchGetMetricDataRequest;
import org.openapis.openapi.models.operations.BatchGetMetricDataResponse;
import org.openapis.openapi.models.shared.BatchGetMetricDataQuery;
import org.openapis.openapi.models.shared.MetricNamespaceEnum;
import org.openapis.openapi.models.shared.MetricEnum;

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

            BatchGetMetricDataRequest req = new BatchGetMetricDataRequest() {{
                headers = new BatchGetMetricDataHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new BatchGetMetricDataRequestBody() {{
                    queries = new org.openapis.openapi.models.shared.BatchGetMetricDataQuery[]{{
                        add(new BatchGetMetricDataQuery() {{
                            dimensions = new java.util.HashMap<String, String>() {{
                                put("error", "deserunt");
                                put("suscipit", "iure");
                            }};
                            endDate = "2022-02-09T12:04:06.508Z";
                            id = "ipsa";
                            metric = "DELIVERY_COMPLAINT";
                            namespace = "VDM";
                            startDate = "2022-08-14T01:03:07.567Z";
                        }}),
                        add(new BatchGetMetricDataQuery() {{
                            dimensions = new java.util.HashMap<String, String>() {{
                                put("minus", "placeat");
                                put("voluptatum", "iusto");
                            }};
                            endDate = "2022-03-20T06:24:36.919Z";
                            id = "recusandae";
                            metric = "DELIVERY_CLICK";
                            namespace = "VDM";
                            startDate = "2022-08-30T20:24:33.984Z";
                        }}),
                        add(new BatchGetMetricDataQuery() {{
                            dimensions = new java.util.HashMap<String, String>() {{
                                put("deserunt", "perferendis");
                            }};
                            endDate = "2022-03-03T02:15:00.468Z";
                            id = "sapiente";
                            metric = "DELIVERY_OPEN";
                            namespace = "VDM";
                            startDate = "2022-02-17T10:41:36.857Z";
                        }}),
                        add(new BatchGetMetricDataQuery() {{
                            dimensions = new java.util.HashMap<String, String>() {{
                                put("maiores", "molestiae");
                                put("quod", "quod");
                                put("esse", "totam");
                                put("porro", "dolorum");
                            }};
                            endDate = "2022-04-12T23:15:28.420Z";
                            id = "officia";
                            metric = "CLICK";
                            namespace = "VDM";
                            startDate = "2022-06-18T20:36:37.412Z";
                        }}),
                    }};
                }};
            }};            

            BatchGetMetricDataResponse res = sdk.batchGetMetricData(req);

            if (res.batchGetMetricDataResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->