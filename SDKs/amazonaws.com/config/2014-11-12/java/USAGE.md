<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchGetAggregateResourceConfigXAmzTargetEnum;
import org.openapis.openapi.models.operations.BatchGetAggregateResourceConfigRequest;
import org.openapis.openapi.models.operations.BatchGetAggregateResourceConfigResponse;
import org.openapis.openapi.models.shared.BatchGetAggregateResourceConfigRequest;
import org.openapis.openapi.models.shared.AggregateResourceIdentifier;
import org.openapis.openapi.models.shared.ResourceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetAggregateResourceConfigRequest req = new BatchGetAggregateResourceConfigRequest() {{
                batchGetAggregateResourceConfigRequest = new BatchGetAggregateResourceConfigRequest() {{
                    configurationAggregatorName = "corrupti";
                    resourceIdentifiers = new org.openapis.openapi.models.shared.AggregateResourceIdentifier[]{{
                        add(new AggregateResourceIdentifier() {{
                            resourceId = "distinctio";
                            resourceName = "quibusdam";
                            resourceType = "AWS::DataSync::LocationNFS";
                            sourceAccountId = "nulla";
                            sourceRegion = "corrupti";
                        }}),
                        add(new AggregateResourceIdentifier() {{
                            resourceId = "illum";
                            resourceName = "vel";
                            resourceType = "AWS::GuardDuty::IPSet";
                            sourceAccountId = "deserunt";
                            sourceRegion = "suscipit";
                        }}),
                        add(new AggregateResourceIdentifier() {{
                            resourceId = "iure";
                            resourceName = "magnam";
                            resourceType = "AWS::IoTSiteWise::Dashboard";
                            sourceAccountId = "ipsa";
                            sourceRegion = "delectus";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
                xAmzTarget = "StarlingDoveService.BatchGetAggregateResourceConfig";
            }}            

            BatchGetAggregateResourceConfigResponse res = sdk.batchGetAggregateResourceConfig(req);

            if (res.batchGetAggregateResourceConfigResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->