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

            DescribeServicesRequest req = new DescribeServicesRequest() {{
                queryParams = new DescribeServicesQueryParams() {{
                    maxResults = "maiores";
                    nextToken = "nobis";
                }};
                headers = new DescribeServicesHeaders() {{
                    xAmzAlgorithm = "quos";
                    xAmzContentSha256 = "facilis";
                    xAmzCredential = "qui";
                    xAmzDate = "quis";
                    xAmzSecurityToken = "aut";
                    xAmzSignature = "est";
                    xAmzSignedHeaders = "ipsa";
                    xAmzTarget = "AWSPriceListService.DescribeServices";
                }};
                request = new DescribeServicesRequest() {{
                    formatVersion = "eveniet";
                    maxResults = 1787359646289181114;
                    nextToken = "vitae";
                    serviceCode = "quos";
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