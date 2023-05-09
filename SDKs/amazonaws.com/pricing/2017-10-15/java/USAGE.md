<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeServicesRequest;
import org.openapis.openapi.models.operations.DescribeServicesResponse;
import org.openapis.openapi.models.operations.DescribeServicesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeServicesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeServicesRequest req = new DescribeServicesRequest(                new DescribeServicesRequest() {{
                                formatVersion = "provident";
                                maxResults = 715190L;
                                nextToken = "quibusdam";
                                serviceCode = "unde";
                            }};, DescribeServicesXAmzTargetEnum.AWS_PRICE_LIST_SERVICE_DESCRIBE_SERVICES) {{
                maxResults = "nulla";
                nextToken = "corrupti";
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "vel";
                xAmzCredential = "error";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "magnam";
            }};            

            DescribeServicesResponse res = sdk.describeServices(req);

            if (res.describeServicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->