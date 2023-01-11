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
                    xAmzAlgorithm = "dolor";
                    xAmzContentSha256 = "nulla";
                    xAmzCredential = "ipsa";
                    xAmzDate = "ipsum";
                    xAmzSecurityToken = "ab";
                    xAmzSignature = "dolores";
                    xAmzSignedHeaders = "sunt";
                    xAmzTarget = "StarlingDoveService.BatchGetAggregateResourceConfig";
                }};
                request = new BatchGetAggregateResourceConfigRequest() {{
                    configurationAggregatorName = "quas";
                    resourceIdentifiers = new openapisdk.models.shared.AggregateResourceIdentifier[]() {{
                        add(new AggregateResourceIdentifier() {{
                            resourceId = "dicta";
                            resourceName = "minima";
                            resourceType = "AWS::ShieldRegional::Protection";
                            sourceAccountId = "nesciunt";
                            sourceRegion = "ducimus";
                        }}),
                        add(new AggregateResourceIdentifier() {{
                            resourceId = "dolores";
                            resourceName = "magni";
                            resourceType = "AWS::RDS::DBCluster";
                            sourceAccountId = "qui";
                            sourceRegion = "ab";
                        }}),
                        add(new AggregateResourceIdentifier() {{
                            resourceId = "accusantium";
                            resourceName = "aliquam";
                            resourceType = "AWS::RDS::DBClusterSnapshot";
                            sourceAccountId = "et";
                            sourceRegion = "ipsa";
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