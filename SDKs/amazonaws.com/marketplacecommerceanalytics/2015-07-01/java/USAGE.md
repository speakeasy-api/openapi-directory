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

            GenerateDataSetRequest req = new GenerateDataSetRequest() {{
                headers = new GenerateDataSetHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "MarketplaceCommerceAnalytics20150701.GenerateDataSet";
                }};
                request = new GenerateDataSetRequest() {{
                    customerDefinedValues = new java.util.HashMap<String, String>() {{
                        put("et", "nihil");
                    }};
                    dataSetPublicationDate = "2004-06-02T10:14:12Z";
                    dataSetType = "daily_business_usage_by_instance_type";
                    destinationS3BucketName = "et";
                    destinationS3Prefix = "ut";
                    roleNameArn = "dolorem";
                    snsTopicArn = "et";
                }};
            }};

            GenerateDataSetResponse res = sdk.generateDataSet(req);

            if (res.generateDataSetResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->