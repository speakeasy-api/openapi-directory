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

            BatchGetAggregateResourceConfigRequest req = new BatchGetAggregateResourceConfigRequest() {{
                headers = new BatchGetAggregateResourceConfigHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "StarlingDoveService.BatchGetAggregateResourceConfig";
                }};
                request = new BatchGetAggregateResourceConfigRequest() {{
                    configurationAggregatorName = "fugit";
                    resourceIdentifiers = new openapisdk.models.shared.AggregateResourceIdentifier[]() {{
                        add(new AggregateResourceIdentifier() {{
                            resourceId = "nihil";
                            resourceName = "rerum";
                            resourceType = "AWS::ApiGateway::Stage";
                            sourceAccountId = "debitis";
                            sourceRegion = "voluptatum";
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