<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DescribeAcceleratorOfferingsRequestBodyLocationTypeEnum;
import org.openapis.openapi.models.operations.DescribeAcceleratorOfferingsRequestBody;
import org.openapis.openapi.models.operations.DescribeAcceleratorOfferingsRequest;
import org.openapis.openapi.models.operations.DescribeAcceleratorOfferingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAcceleratorOfferingsRequest req = new DescribeAcceleratorOfferingsRequest() {{
                requestBody = new DescribeAcceleratorOfferingsRequestBody() {{
                    acceleratorTypes = new String[]{{
                        add("provident"),
                        add("distinctio"),
                        add("quibusdam"),
                    }};
                    locationType = "availability-zone";
                }};
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "illum";
                xAmzDate = "vel";
                xAmzSecurityToken = "error";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "suscipit";
            }}            

            DescribeAcceleratorOfferingsResponse res = sdk.describeAcceleratorOfferings(req);

            if (res.describeAcceleratorOfferingsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->