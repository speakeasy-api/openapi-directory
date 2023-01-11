<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            BatchMeterUsageRequest req = new BatchMeterUsageRequest() {{
                headers = new BatchMeterUsageHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "AWSMPMeteringService.BatchMeterUsage";
                }};
                request = new BatchMeterUsageRequest() {{
                    productCode = "fugit";
                    usageRecords = new openapisdk.models.shared.UsageRecord[]() {{
                        add(new UsageRecord() {{
                            customerIdentifier = "nihil";
                            dimension = "rerum";
                            quantity = 7837839688282259259;
                            timestamp = "2004-06-02T10:14:12Z";
                            usageAllocations = new openapisdk.models.shared.UsageAllocation[]() {{
                                add(new UsageAllocation() {{
                                    allocatedUsageQuantity = 2339563716805116249;
                                    tags = new openapisdk.models.shared.Tag[]() {{
                                        add(new Tag() {{
                                            key = "dolorem";
                                            value = "et";
                                        }}),
                                        add(new Tag() {{
                                            key = "voluptate";
                                            value = "iste";
                                        }}),
                                        add(new Tag() {{
                                            key = "vitae";
                                            value = "totam";
                                        }}),
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                }};
            }};

            BatchMeterUsageResponse res = sdk.batchMeterUsage(req);

            if (res.batchMeterUsageResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->