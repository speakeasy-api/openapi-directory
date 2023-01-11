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

            AcceptPortfolioShareRequest req = new AcceptPortfolioShareRequest() {{
                headers = new AcceptPortfolioShareHeaders() {{
                    xAmzAlgorithm = "est";
                    xAmzContentSha256 = "optio";
                    xAmzCredential = "iste";
                    xAmzDate = "nisi";
                    xAmzSecurityToken = "repudiandae";
                    xAmzSignature = "amet";
                    xAmzSignedHeaders = "impedit";
                    xAmzTarget = "AWS242ServiceCatalogService.AcceptPortfolioShare";
                }};
                request = new AcceptPortfolioShareInput() {{
                    acceptLanguage = "eum";
                    portfolioId = "et";
                    portfolioShareType = "AWS_SERVICECATALOG";
                }};
            }};

            AcceptPortfolioShareResponse res = sdk.acceptPortfolioShare(req);

            if (res.acceptPortfolioShareOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->