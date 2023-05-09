<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAcceleratorOfferingsRequest;
import org.openapis.openapi.models.operations.DescribeAcceleratorOfferingsRequestBody;
import org.openapis.openapi.models.operations.DescribeAcceleratorOfferingsRequestBodyLocationTypeEnum;
import org.openapis.openapi.models.operations.DescribeAcceleratorOfferingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAcceleratorOfferingsRequest req = new DescribeAcceleratorOfferingsRequest(                new DescribeAcceleratorOfferingsRequestBody(DescribeAcceleratorOfferingsRequestBodyLocationTypeEnum.AVAILABILITY_ZONE) {{
                                acceleratorTypes = new String[]{{
                                    add("quibusdam"),
                                    add("unde"),
                                    add("nulla"),
                                }};
                            }};) {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "illum";
                xAmzCredential = "vel";
                xAmzDate = "error";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "iure";
            }};            

            DescribeAcceleratorOfferingsResponse res = sdk.describeAcceleratorOfferings(req);

            if (res.describeAcceleratorOfferingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->