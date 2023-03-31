<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DescribeServicesQueryParams;
import org.openapis.openapi.models.operations.DescribeServicesXAmzTargetEnum;
import org.openapis.openapi.models.operations.DescribeServicesHeaders;
import org.openapis.openapi.models.operations.DescribeServicesRequest;
import org.openapis.openapi.models.operations.DescribeServicesResponse;
import org.openapis.openapi.models.shared.DescribeServicesRequest;

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

            DescribeServicesRequest req = new DescribeServicesRequest() {{
                queryParams = new DescribeServicesQueryParams() {{
                    maxResults = "corrupti";
                    nextToken = "provident";
                }};
                headers = new DescribeServicesHeaders() {{
                    xAmzAlgorithm = "distinctio";
                    xAmzContentSha256 = "quibusdam";
                    xAmzCredential = "unde";
                    xAmzDate = "nulla";
                    xAmzSecurityToken = "corrupti";
                    xAmzSignature = "illum";
                    xAmzSignedHeaders = "vel";
                    xAmzTarget = "AWSPriceListService.DescribeServices";
                }};
                request = new DescribeServicesRequest() {{
                    formatVersion = "error";
                    maxResults = 645894;
                    nextToken = "suscipit";
                    serviceCode = "iure";
                }};
            }};            

            DescribeServicesResponse res = sdk.describeServices(req);

            if (res.describeServicesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->