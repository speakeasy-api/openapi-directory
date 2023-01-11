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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "AWS242ServiceCatalogService.AcceptPortfolioShare";
                }};
                request = new AcceptPortfolioShareInput() {{
                    acceptLanguage = "fugit";
                    portfolioId = "et";
                    portfolioShareType = "IMPORTED";
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