<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DescribeAcceleratorOfferingsHeaders;
import org.openapis.openapi.models.operations.DescribeAcceleratorOfferingsRequestBodyLocationTypeEnum;
import org.openapis.openapi.models.operations.DescribeAcceleratorOfferingsRequestBody;
import org.openapis.openapi.models.operations.DescribeAcceleratorOfferingsRequest;
import org.openapis.openapi.models.operations.DescribeAcceleratorOfferingsResponse;

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

            DescribeAcceleratorOfferingsRequest req = new DescribeAcceleratorOfferingsRequest() {{
                headers = new DescribeAcceleratorOfferingsHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new DescribeAcceleratorOfferingsRequestBody() {{
                    acceleratorTypes = new String[]{{
                        add("vel"),
                        add("error"),
                        add("deserunt"),
                        add("suscipit"),
                    }};
                    locationType = "availability-zone";
                }};
            }};            

            DescribeAcceleratorOfferingsResponse res = sdk.describeAcceleratorOfferings(req);

            if (res.describeAcceleratorOfferingsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->