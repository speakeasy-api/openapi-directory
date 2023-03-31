<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GenerateDataSetXAmzTargetEnum;
import org.openapis.openapi.models.operations.GenerateDataSetHeaders;
import org.openapis.openapi.models.operations.GenerateDataSetRequest;
import org.openapis.openapi.models.operations.GenerateDataSetResponse;
import org.openapis.openapi.models.shared.GenerateDataSetRequest;
import org.openapis.openapi.models.shared.DataSetTypeEnum;

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

            GenerateDataSetRequest req = new GenerateDataSetRequest() {{
                headers = new GenerateDataSetHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "MarketplaceCommerceAnalytics20150701.GenerateDataSet";
                }};
                request = new GenerateDataSetRequest() {{
                    customerDefinedValues = new java.util.HashMap<String, String>() {{
                        put("vel", "error");
                        put("deserunt", "suscipit");
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                    dataSetPublicationDate = "2022-03-08T10:35:32.561Z";
                    dataSetType = "monthly_revenue_annual_subscriptions";
                    destinationS3BucketName = "molestiae";
                    destinationS3Prefix = "minus";
                    roleNameArn = "placeat";
                    snsTopicArn = "voluptatum";
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