<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchMeterUsageRequest;
import org.openapis.openapi.models.operations.BatchMeterUsageResponse;
import org.openapis.openapi.models.operations.BatchMeterUsageXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchMeterUsageRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.UsageAllocation;
import org.openapis.openapi.models.shared.UsageRecord;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchMeterUsageRequest req = new BatchMeterUsageRequest(                new BatchMeterUsageRequest("provident",                 new org.openapis.openapi.models.shared.UsageRecord[]{{
                                                add(new UsageRecord("sapiente", "quo", OffsetDateTime.parse("2022-02-17T10:41:36.857Z")) {{
                                                    customerIdentifier = "quibusdam";
                                                    dimension = "unde";
                                                    quantity = 857946L;
                                                    timestamp = OffsetDateTime.parse("2021-04-22T12:08:58.275Z");
                                                    usageAllocations = new org.openapis.openapi.models.shared.UsageAllocation[]{{
                                                        add(new UsageAllocation(479977L) {{
                                                            allocatedUsageQuantity = 623564L;
                                                            tags = new org.openapis.openapi.models.shared.Tag[]{{
                                                                add(new Tag("magnam", "debitis") {{
                                                                    key = "suscipit";
                                                                    value = "iure";
                                                                }}),
                                                                add(new Tag("tempora", "suscipit") {{
                                                                    key = "ipsa";
                                                                    value = "delectus";
                                                                }}),
                                                                add(new Tag("placeat", "voluptatum") {{
                                                                    key = "molestiae";
                                                                    value = "minus";
                                                                }}),
                                                            }};
                                                        }}),
                                                        add(new UsageAllocation(832620L) {{
                                                            allocatedUsageQuantity = 568045L;
                                                            tags = new org.openapis.openapi.models.shared.Tag[]{{
                                                                add(new Tag("ab", "quis") {{
                                                                    key = "recusandae";
                                                                    value = "temporibus";
                                                                }}),
                                                                add(new Tag("perferendis", "ipsam") {{
                                                                    key = "veritatis";
                                                                    value = "deserunt";
                                                                }}),
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new UsageRecord("sed", "iste", OffsetDateTime.parse("2022-05-20T19:39:29.035Z")) {{
                                                    customerIdentifier = "at";
                                                    dimension = "maiores";
                                                    quantity = 473608L;
                                                    timestamp = OffsetDateTime.parse("2020-08-07T00:03:55.328Z");
                                                    usageAllocations = new org.openapis.openapi.models.shared.UsageAllocation[]{{
                                                        add(new UsageAllocation(736918L) {{
                                                            allocatedUsageQuantity = 520478L;
                                                            tags = new org.openapis.openapi.models.shared.Tag[]{{
                                                                add(new Tag("nam", "officia") {{
                                                                    key = "dolorum";
                                                                    value = "dicta";
                                                                }}),
                                                                add(new Tag("deleniti", "hic") {{
                                                                    key = "occaecati";
                                                                    value = "fugit";
                                                                }}),
                                                                add(new Tag("beatae", "commodi") {{
                                                                    key = "optio";
                                                                    value = "totam";
                                                                }}),
                                                                add(new Tag("qui", "impedit") {{
                                                                    key = "molestiae";
                                                                    value = "modi";
                                                                }}),
                                                            }};
                                                        }}),
                                                        add(new UsageAllocation(617636L) {{
                                                            allocatedUsageQuantity = 456150L;
                                                            tags = new org.openapis.openapi.models.shared.Tag[]{{
                                                                add(new Tag("perferendis", "ad") {{
                                                                    key = "excepturi";
                                                                    value = "aspernatur";
                                                                }}),
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new UsageRecord("culpa", "doloribus", OffsetDateTime.parse("2022-09-11T06:15:44.019Z")) {{
                                                    customerIdentifier = "laboriosam";
                                                    dimension = "hic";
                                                    quantity = 902599L;
                                                    timestamp = OffsetDateTime.parse("2022-02-06T12:52:33.708Z");
                                                    usageAllocations = new org.openapis.openapi.models.shared.UsageAllocation[]{{
                                                        add(new UsageAllocation(170909L) {{
                                                            allocatedUsageQuantity = 613064L;
                                                            tags = new org.openapis.openapi.models.shared.Tag[]{{
                                                                add(new Tag("architecto", "ipsa") {{
                                                                    key = "saepe";
                                                                    value = "quidem";
                                                                }}),
                                                                add(new Tag("mollitia", "laborum") {{
                                                                    key = "reiciendis";
                                                                    value = "est";
                                                                }}),
                                                            }};
                                                        }}),
                                                        add(new UsageAllocation(438601L) {{
                                                            allocatedUsageQuantity = 210382L;
                                                            tags = new org.openapis.openapi.models.shared.Tag[]{{
                                                                add(new Tag("enim", "omnis") {{
                                                                    key = "explicabo";
                                                                    value = "nobis";
                                                                }}),
                                                                add(new Tag("excepturi", "accusantium") {{
                                                                    key = "nemo";
                                                                    value = "minima";
                                                                }}),
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }});, BatchMeterUsageXAmzTargetEnum.AWSMP_METERING_SERVICE_BATCH_METER_USAGE) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "culpa";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "occaecati";
            }};            

            BatchMeterUsageResponse res = sdk.batchMeterUsage(req);

            if (res.batchMeterUsageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->