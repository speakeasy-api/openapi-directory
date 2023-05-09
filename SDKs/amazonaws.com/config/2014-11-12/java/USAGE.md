<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetAggregateResourceConfigRequest;
import org.openapis.openapi.models.operations.BatchGetAggregateResourceConfigResponse;
import org.openapis.openapi.models.operations.BatchGetAggregateResourceConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.AggregateResourceIdentifier;
import org.openapis.openapi.models.shared.BatchGetAggregateResourceConfigRequest;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetAggregateResourceConfigRequest req = new BatchGetAggregateResourceConfigRequest(                new BatchGetAggregateResourceConfigRequest("provident",                 new org.openapis.openapi.models.shared.AggregateResourceIdentifier[]{{
                                                add(new AggregateResourceIdentifier("vel", ResourceTypeEnum.AWS_IMAGE_BUILDER_DISTRIBUTION_CONFIGURATION, "deserunt", "suscipit") {{
                                                    resourceId = "quibusdam";
                                                    resourceName = "unde";
                                                    resourceType = ResourceTypeEnum.AWS_LEX_BOT;
                                                    sourceAccountId = "corrupti";
                                                    sourceRegion = "illum";
                                                }}),
                                                add(new AggregateResourceIdentifier("tempora", ResourceTypeEnum.AWSEFS_ACCESS_POINT, "molestiae", "minus") {{
                                                    resourceId = "iure";
                                                    resourceName = "magnam";
                                                    resourceType = ResourceTypeEnum.AWS_IO_T_ACCOUNT_AUDIT_CONFIGURATION;
                                                    sourceAccountId = "ipsa";
                                                    sourceRegion = "delectus";
                                                }}),
                                                add(new AggregateResourceIdentifier("recusandae", ResourceTypeEnum.AWSIVS_PLAYBACK_KEY_PAIR, "ab", "quis") {{
                                                    resourceId = "placeat";
                                                    resourceName = "voluptatum";
                                                    resourceType = ResourceTypeEnum.AWS_STEP_FUNCTIONS_STATE_MACHINE;
                                                    sourceAccountId = "excepturi";
                                                    sourceRegion = "nisi";
                                                }}),
                                            }});, BatchGetAggregateResourceConfigXAmzTargetEnum.STARLING_DOVE_SERVICE_BATCH_GET_AGGREGATE_RESOURCE_CONFIG) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "perferendis";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "quo";
            }};            

            BatchGetAggregateResourceConfigResponse res = sdk.batchGetAggregateResourceConfig(req);

            if (res.batchGetAggregateResourceConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->