<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchMeterUsageXAmzTargetEnum;
import org.openapis.openapi.models.operations.BatchMeterUsageRequest;
import org.openapis.openapi.models.operations.BatchMeterUsageResponse;
import org.openapis.openapi.models.shared.BatchMeterUsageRequest;
import org.openapis.openapi.models.shared.UsageRecord;
import org.openapis.openapi.models.shared.UsageAllocation;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchMeterUsageRequest req = new BatchMeterUsageRequest() {{
                batchMeterUsageRequest = new BatchMeterUsageRequest() {{
                    productCode = "corrupti";
                    usageRecords = new org.openapis.openapi.models.shared.UsageRecord[]{{
                        add(new UsageRecord() {{
                            customerIdentifier = "distinctio";
                            dimension = "quibusdam";
                            quantity = 602763;
                            timestamp = "2021-05-14T08:28:11.899Z";
                            usageAllocations = new org.openapis.openapi.models.shared.UsageAllocation[]{{
                                add(new UsageAllocation() {{
                                    allocatedUsageQuantity = 423655;
                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag() {{
                                            key = "deserunt";
                                            value = "suscipit";
                                        }}),
                                        add(new Tag() {{
                                            key = "iure";
                                            value = "magnam";
                                        }}),
                                        add(new Tag() {{
                                            key = "debitis";
                                            value = "ipsa";
                                        }}),
                                    }};
                                }}),
                                add(new UsageAllocation() {{
                                    allocatedUsageQuantity = 963663;
                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag() {{
                                            key = "suscipit";
                                            value = "molestiae";
                                        }}),
                                        add(new Tag() {{
                                            key = "minus";
                                            value = "placeat";
                                        }}),
                                    }};
                                }}),
                                add(new UsageAllocation() {{
                                    allocatedUsageQuantity = 528895;
                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag() {{
                                            key = "excepturi";
                                            value = "nisi";
                                        }}),
                                        add(new Tag() {{
                                            key = "recusandae";
                                            value = "temporibus";
                                        }}),
                                    }};
                                }}),
                                add(new UsageAllocation() {{
                                    allocatedUsageQuantity = 71036;
                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag() {{
                                            key = "veritatis";
                                            value = "deserunt";
                                        }}),
                                        add(new Tag() {{
                                            key = "perferendis";
                                            value = "ipsam";
                                        }}),
                                    }};
                                }}),
                            }};
                        }}),
                        add(new UsageRecord() {{
                            customerIdentifier = "repellendus";
                            dimension = "sapiente";
                            quantity = 778157;
                            timestamp = "2022-02-17T10:41:36.857Z";
                            usageAllocations = new org.openapis.openapi.models.shared.UsageAllocation[]{{
                                add(new UsageAllocation() {{
                                    allocatedUsageQuantity = 978619;
                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag() {{
                                            key = "quod";
                                            value = "quod";
                                        }}),
                                        add(new Tag() {{
                                            key = "esse";
                                            value = "totam";
                                        }}),
                                    }};
                                }}),
                                add(new UsageAllocation() {{
                                    allocatedUsageQuantity = 780529;
                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag() {{
                                            key = "dicta";
                                            value = "nam";
                                        }}),
                                        add(new Tag() {{
                                            key = "officia";
                                            value = "occaecati";
                                        }}),
                                        add(new Tag() {{
                                            key = "fugit";
                                            value = "deleniti";
                                        }}),
                                    }};
                                }}),
                                add(new UsageAllocation() {{
                                    allocatedUsageQuantity = 944669;
                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag() {{
                                            key = "totam";
                                            value = "beatae";
                                        }}),
                                        add(new Tag() {{
                                            key = "commodi";
                                            value = "molestiae";
                                        }}),
                                        add(new Tag() {{
                                            key = "modi";
                                            value = "qui";
                                        }}),
                                        add(new Tag() {{
                                            key = "impedit";
                                            value = "cum";
                                        }}),
                                    }};
                                }}),
                                add(new UsageAllocation() {{
                                    allocatedUsageQuantity = 456150;
                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag() {{
                                            key = "excepturi";
                                            value = "aspernatur";
                                        }}),
                                    }};
                                }}),
                            }};
                        }}),
                        add(new UsageRecord() {{
                            customerIdentifier = "perferendis";
                            dimension = "ad";
                            quantity = 617636;
                            timestamp = "2022-05-22T14:02:28.908Z";
                            usageAllocations = new org.openapis.openapi.models.shared.UsageAllocation[]{{
                                add(new UsageAllocation() {{
                                    allocatedUsageQuantity = 616934;
                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag() {{
                                            key = "hic";
                                            value = "saepe";
                                        }}),
                                        add(new Tag() {{
                                            key = "fuga";
                                            value = "in";
                                        }}),
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                }};
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "iste";
                xAmzCredential = "iure";
                xAmzDate = "saepe";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "ipsa";
                xAmzTarget = "AWSMPMeteringService.BatchMeterUsage";
            }}            

            BatchMeterUsageResponse res = sdk.batchMeterUsage(req);

            if (res.batchMeterUsageResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->