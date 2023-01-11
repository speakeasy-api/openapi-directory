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
                    maxResults = "sit";
                    nextToken = "voluptas";
                }};
                headers = new DescribeServicesHeaders() {{
                    xAmzAlgorithm = "culpa";
                    xAmzContentSha256 = "expedita";
                    xAmzCredential = "consequuntur";
                    xAmzDate = "dolor";
                    xAmzSecurityToken = "expedita";
                    xAmzSignature = "voluptas";
                    xAmzSignedHeaders = "fugit";
                    xAmzTarget = "AWSPriceListService.DescribeServices";
                }};
                request = new DescribeServicesRequest() {{
                    formatVersion = "nihil";
                    maxResults = 8325060299420976708;
                    nextToken = "dicta";
                    serviceCode = "debitis";
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