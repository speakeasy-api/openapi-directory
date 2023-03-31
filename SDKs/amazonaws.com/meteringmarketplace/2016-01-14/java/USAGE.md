<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchMeterUsageXAmzTargetEnum;
import org.openapis.openapi.models.operations.BatchMeterUsageHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            BatchMeterUsageRequest req = new BatchMeterUsageRequest() {{
                headers = new BatchMeterUsageHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSMPMeteringService.BatchMeterUsage";
                }};
                request = new BatchMeterUsageRequest() {{
                    productCode = "illum";
                    usageRecords = new org.openapis.openapi.models.shared.UsageRecord[]{{
                        add(new UsageRecord() {{
                            customerIdentifier = "error";
                            dimension = "deserunt";
                            quantity = 384382;
                            timestamp = "2022-09-14T09:35:47.986Z";
                            usageAllocations = new org.openapis.openapi.models.shared.UsageAllocation[]{{
                                add(new UsageAllocation() {{
                                    allocatedUsageQuantity = 56713;
                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag() {{
                                            key = "tempora";
                                            value = "suscipit";
                                        }}),
                                        add(new Tag() {{
                                            key = "molestiae";
                                            value = "minus";
                                        }}),
                                        add(new Tag() {{
                                            key = "placeat";
                                            value = "voluptatum";
                                        }}),
                                        add(new Tag() {{
                                            key = "iusto";
                                            value = "excepturi";
                                        }}),
                                    }};
                                }}),
                                add(new UsageAllocation() {{
                                    allocatedUsageQuantity = 392785;
                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag() {{
                                            key = "temporibus";
                                            value = "ab";
                                        }}),
                                        add(new Tag() {{
                                            key = "quis";
                                            value = "veritatis";
                                        }}),
                                        add(new Tag() {{
                                            key = "deserunt";
                                            value = "perferendis";
                                        }}),
                                        add(new Tag() {{
                                            key = "ipsam";
                                            value = "repellendus";
                                        }}),
                                    }};
                                }}),
                                add(new UsageAllocation() {{
                                    allocatedUsageQuantity = 957156;
                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag() {{
                                            key = "odit";
                                            value = "at";
                                        }}),
                                        add(new Tag() {{
                                            key = "at";
                                            value = "maiores";
                                        }}),
                                        add(new Tag() {{
                                            key = "molestiae";
                                            value = "quod";
                                        }}),
                                        add(new Tag() {{
                                            key = "quod";
                                            value = "esse";
                                        }}),
                                    }};
                                }}),
                                add(new UsageAllocation() {{
                                    allocatedUsageQuantity = 520478;
                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag() {{
                                            key = "dolorum";
                                            value = "dicta";
                                        }}),
                                        add(new Tag() {{
                                            key = "nam";
                                            value = "officia";
                                        }}),
                                        add(new Tag() {{
                                            key = "occaecati";
                                            value = "fugit";
                                        }}),
                                        add(new Tag() {{
                                            key = "deleniti";
                                            value = "hic";
                                        }}),
                                    }};
                                }}),
                            }};
                        }}),
                        add(new UsageRecord() {{
                            customerIdentifier = "optio";
                            dimension = "totam";
                            quantity = 105907;
                            timestamp = "2022-07-12T03:15:36.542Z";
                            usageAllocations = new org.openapis.openapi.models.shared.UsageAllocation[]{{
                                add(new UsageAllocation() {{
                                    allocatedUsageQuantity = 186332;
                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag() {{
                                            key = "cum";
                                            value = "esse";
                                        }}),
                                        add(new Tag() {{
                                            key = "ipsum";
                                            value = "excepturi";
                                        }}),
                                        add(new Tag() {{
                                            key = "aspernatur";
                                            value = "perferendis";
                                        }}),
                                        add(new Tag() {{
                                            key = "ad";
                                            value = "natus";
                                        }}),
                                    }};
                                }}),
                                add(new UsageAllocation() {{
                                    allocatedUsageQuantity = 149675;
                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag() {{
                                            key = "dolor";
                                            value = "natus";
                                        }}),
                                        add(new Tag() {{
                                            key = "laboriosam";
                                            value = "hic";
                                        }}),
                                        add(new Tag() {{
                                            key = "saepe";
                                            value = "fuga";
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