<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GenerateDataSetXAmzTargetEnum;
import org.openapis.openapi.models.operations.GenerateDataSetRequest;
import org.openapis.openapi.models.operations.GenerateDataSetResponse;
import org.openapis.openapi.models.shared.GenerateDataSetRequest;
import org.openapis.openapi.models.shared.DataSetTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GenerateDataSetRequest req = new GenerateDataSetRequest() {{
                generateDataSetRequest = new GenerateDataSetRequest() {{
                    customerDefinedValues = new java.util.HashMap<String, String>() {{
                        put("provident", "distinctio");
                        put("quibusdam", "unde");
                        put("nulla", "corrupti");
                    }};
                    dataSetPublicationDate = "2021-09-24T02:21:06.409Z";
                    dataSetType = "disbursed_amount_by_customer_geo";
                    destinationS3BucketName = "deserunt";
                    destinationS3Prefix = "suscipit";
                    roleNameArn = "iure";
                    snsTopicArn = "magnam";
                }};
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "delectus";
                xAmzDate = "tempora";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "minus";
                xAmzTarget = "MarketplaceCommerceAnalytics20150701.GenerateDataSet";
            }}            

            GenerateDataSetResponse res = sdk.generateDataSet(req);

            if (res.generateDataSetResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->