<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetMetricDataRequest req = new BatchGetMetricDataRequest() {{
                requestBody = new BatchGetMetricDataRequestBody() {{
                    queries = new org.openapis.openapi.models.shared.BatchGetMetricDataQuery[]{{
                        add(new BatchGetMetricDataQuery() {{
                            dimensions = new java.util.HashMap<String, String>() {{
                                put("distinctio", "quibusdam");
                                put("unde", "nulla");
                                put("corrupti", "illum");
                            }};
                            endDate = "2022-05-18T09:34:54.894Z";
                            id = "deserunt";
                            metric = "TRANSIENT_BOUNCE";
                            namespace = "VDM";
                            startDate = "2022-09-14T09:35:47.986Z";
                        }}),
                        add(new BatchGetMetricDataQuery() {{
                            dimensions = new java.util.HashMap<String, String>() {{
                                put("ipsa", "delectus");
                                put("tempora", "suscipit");
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                            }};
                            endDate = "2022-06-07T15:55:46.205Z";
                            id = "nisi";
                            metric = "DELIVERY_COMPLAINT";
                            namespace = "VDM";
                            startDate = "2022-10-15T05:10:19.629Z";
                        }}),
                        add(new BatchGetMetricDataQuery() {{
                            dimensions = new java.util.HashMap<String, String>() {{
                                put("veritatis", "deserunt");
                                put("perferendis", "ipsam");
                            }};
                            endDate = "2020-02-17T21:57:45.117Z";
                            id = "quo";
                            metric = "COMPLAINT";
                            namespace = "VDM";
                            startDate = "2020-05-23T06:06:25.221Z";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "quod";
                xAmzDate = "quod";
                xAmzSecurityToken = "esse";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "porro";
            }}            

            BatchGetMetricDataResponse res = sdk.batchGetMetricData(req);

            if (res.batchGetMetricDataResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->