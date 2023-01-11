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
                    xAmzAlgorithm = "quisquam";
                    xAmzContentSha256 = "sequi";
                    xAmzCredential = "quia";
                    xAmzDate = "est";
                    xAmzSecurityToken = "voluptatem";
                    xAmzSignature = "voluptate";
                    xAmzSignedHeaders = "facilis";
                    xAmzTarget = "MarketplaceCommerceAnalytics20150701.GenerateDataSet";
                }};
                request = new GenerateDataSetRequest() {{
                    customerDefinedValues = new java.util.HashMap<String, String>() {{
                        put("ipsum", "repudiandae");
                        put("iusto", "quis");
                    }};
                    dataSetPublicationDate = "2013-05-15T08:13:46Z";
                    dataSetType = "monthly_revenue_billing_and_revenue_data";
                    destinationS3BucketName = "sunt";
                    destinationS3Prefix = "laborum";
                    roleNameArn = "quibusdam";
                    snsTopicArn = "eum";
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