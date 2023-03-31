<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcceptPortfolioShareXAmzTargetEnum;
import org.openapis.openapi.models.operations.AcceptPortfolioShareHeaders;
import org.openapis.openapi.models.operations.AcceptPortfolioShareRequest;
import org.openapis.openapi.models.operations.AcceptPortfolioShareResponse;
import org.openapis.openapi.models.shared.AcceptPortfolioShareInput;
import org.openapis.openapi.models.shared.PortfolioShareTypeEnum;

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

            AcceptPortfolioShareRequest req = new AcceptPortfolioShareRequest() {{
                headers = new AcceptPortfolioShareHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWS242ServiceCatalogService.AcceptPortfolioShare";
                }};
                request = new AcceptPortfolioShareInput() {{
                    acceptLanguage = "illum";
                    portfolioId = "vel";
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