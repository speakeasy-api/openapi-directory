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
                    xAmzAlgorithm = "nihil";
                    xAmzContentSha256 = "dolorem";
                    xAmzCredential = "impedit";
                    xAmzDate = "laboriosam";
                    xAmzSecurityToken = "iste";
                    xAmzSignature = "soluta";
                    xAmzSignedHeaders = "ut";
                    xAmzTarget = "AWSMPMeteringService.BatchMeterUsage";
                }};
                request = new BatchMeterUsageRequest() {{
                    productCode = "vel";
                    usageRecords = new openapisdk.models.shared.UsageRecord[]() {{
                        add(new UsageRecord() {{
                            customerIdentifier = "soluta";
                            dimension = "alias";
                            quantity = 3089778739814785022;
                            timestamp = "1984-04-21T17:27:21Z";
                            usageAllocations = new openapisdk.models.shared.UsageAllocation[]() {{
                                add(new UsageAllocation() {{
                                    allocatedUsageQuantity = 4453435121235553912;
                                    tags = new openapisdk.models.shared.Tag[]() {{
                                        add(new Tag() {{
                                            key = "dolore";
                                            value = "quidem";
                                        }}),
                                        add(new Tag() {{
                                            key = "doloribus";
                                            value = "at";
                                        }}),
                                        add(new Tag() {{
                                            key = "dolore";
                                            value = "et";
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