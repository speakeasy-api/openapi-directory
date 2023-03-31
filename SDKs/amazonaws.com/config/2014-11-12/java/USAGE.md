<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchGetAggregateResourceConfigXAmzTargetEnum;
import org.openapis.openapi.models.operations.BatchGetAggregateResourceConfigHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            BatchGetAggregateResourceConfigRequest req = new BatchGetAggregateResourceConfigRequest() {{
                headers = new BatchGetAggregateResourceConfigHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "StarlingDoveService.BatchGetAggregateResourceConfig";
                }};
                request = new BatchGetAggregateResourceConfigRequest() {{
                    configurationAggregatorName = "illum";
                    resourceIdentifiers = new org.openapis.openapi.models.shared.AggregateResourceIdentifier[]{{
                        add(new AggregateResourceIdentifier() {{
                            resourceId = "error";
                            resourceName = "deserunt";
                            resourceType = "AWS::SSM::FileData";
                            sourceAccountId = "iure";
                            sourceRegion = "magnam";
                        }}),
                        add(new AggregateResourceIdentifier() {{
                            resourceId = "debitis";
                            resourceName = "ipsa";
                            resourceType = "AWS::IoTSiteWise::Gateway";
                            sourceAccountId = "tempora";
                            sourceRegion = "suscipit";
                        }}),
                    }};
                }};
            }};            

            BatchGetAggregateResourceConfigResponse res = sdk.batchGetAggregateResourceConfig(req);

            if (res.batchGetAggregateResourceConfigResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->