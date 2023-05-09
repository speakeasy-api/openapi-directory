<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateDataSetRequest;
import org.openapis.openapi.models.operations.GenerateDataSetResponse;
import org.openapis.openapi.models.operations.GenerateDataSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DataSetTypeEnum;
import org.openapis.openapi.models.shared.GenerateDataSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GenerateDataSetRequest req = new GenerateDataSetRequest(                new GenerateDataSetRequest(OffsetDateTime.parse("2021-07-27T21:52:56.087Z"), DataSetTypeEnum.CUSTOMER_PROFILE_BY_REVENUE, "unde", "nulla", "corrupti") {{
                                customerDefinedValues = new java.util.HashMap<String, String>() {{
                                    put("vel", "error");
                                    put("deserunt", "suscipit");
                                    put("iure", "magnam");
                                    put("debitis", "ipsa");
                                }};
                                destinationS3Prefix = "delectus";
                            }};, GenerateDataSetXAmzTargetEnum.MARKETPLACE_COMMERCE_ANALYTICS20150701_GENERATE_DATA_SET) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            GenerateDataSetResponse res = sdk.generateDataSet(req);

            if (res.generateDataSetResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->