<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetMetricDataRequest;
import org.openapis.openapi.models.operations.BatchGetMetricDataRequestBody;
import org.openapis.openapi.models.operations.BatchGetMetricDataResponse;
import org.openapis.openapi.models.shared.BatchGetMetricDataQuery;
import org.openapis.openapi.models.shared.MetricEnum;
import org.openapis.openapi.models.shared.MetricNamespaceEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetMetricDataRequest req = new BatchGetMetricDataRequest(                new BatchGetMetricDataRequestBody(                new org.openapis.openapi.models.shared.BatchGetMetricDataQuery[]{{
                                                add(new BatchGetMetricDataQuery(OffsetDateTime.parse("2021-06-10T05:07:43.614Z"), "dolorum", MetricEnum.COMPLAINT, MetricNamespaceEnum.VDM, OffsetDateTime.parse("2021-09-20T20:35:01.256Z")) {{
                                                    dimensions = new java.util.HashMap<String, String>() {{
                                                        put("quibusdam", "unde");
                                                        put("nulla", "corrupti");
                                                        put("illum", "vel");
                                                    }};
                                                    endDate = OffsetDateTime.parse("2021-09-16T11:56:06.019Z");
                                                    id = "674e0f46-7cc8-4796-ad15-1a05dfc2ddf7";
                                                    metric = MetricEnum.DELIVERY_OPEN;
                                                    namespace = MetricNamespaceEnum.VDM;
                                                    startDate = OffsetDateTime.parse("2021-08-13T16:19:19.906Z");
                                                }}),
                                                add(new BatchGetMetricDataQuery(OffsetDateTime.parse("2022-04-01T23:59:21.675Z"), "enim", MetricEnum.DELIVERY, MetricNamespaceEnum.VDM, OffsetDateTime.parse("2022-09-04T08:35:09.957Z")) {{
                                                    dimensions = new java.util.HashMap<String, String>() {{
                                                        put("fugit", "deleniti");
                                                        put("hic", "optio");
                                                        put("totam", "beatae");
                                                    }};
                                                    endDate = OffsetDateTime.parse("2022-07-12T03:15:36.542Z");
                                                    id = "42cb7392-0592-4939-afea-7596eb10faaa";
                                                    metric = MetricEnum.COMPLAINT;
                                                    namespace = MetricNamespaceEnum.VDM;
                                                    startDate = OffsetDateTime.parse("2022-08-23T06:35:12.519Z");
                                                }}),
                                                add(new BatchGetMetricDataQuery(OffsetDateTime.parse("2021-01-17T23:08:44.457Z"), "ipsa", MetricEnum.DELIVERY, MetricNamespaceEnum.VDM, OffsetDateTime.parse("2022-04-06T04:03:03.438Z")) {{
                                                    dimensions = new java.util.HashMap<String, String>() {{
                                                        put("accusantium", "iure");
                                                        put("culpa", "doloribus");
                                                        put("sapiente", "architecto");
                                                    }};
                                                    endDate = OffsetDateTime.parse("2022-08-01T12:28:44.292Z");
                                                    id = "a2fa9467-7392-451a-a52c-3f5ad019da1f";
                                                    metric = MetricEnum.DELIVERY_COMPLAINT;
                                                    namespace = MetricNamespaceEnum.VDM;
                                                    startDate = OffsetDateTime.parse("2021-08-05T19:50:46.898Z");
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "doloremque";
                xAmzCredential = "reprehenderit";
                xAmzDate = "ut";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "corporis";
            }};            

            BatchGetMetricDataResponse res = sdk.batchGetMetricData(req);

            if (res.batchGetMetricDataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->