<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcceptPortfolioShareXAmzTargetEnum;
import org.openapis.openapi.models.operations.AcceptPortfolioShareRequest;
import org.openapis.openapi.models.operations.AcceptPortfolioShareResponse;
import org.openapis.openapi.models.shared.AcceptPortfolioShareInput;
import org.openapis.openapi.models.shared.PortfolioShareTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptPortfolioShareRequest req = new AcceptPortfolioShareRequest() {{
                acceptPortfolioShareInput = new AcceptPortfolioShareInput() {{
                    acceptLanguage = "corrupti";
                    portfolioId = "provident";
                    portfolioShareType = "AWS_ORGANIZATIONS";
                }};
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
                xAmzTarget = "AWS242ServiceCatalogService.AcceptPortfolioShare";
            }}            

            AcceptPortfolioShareResponse res = sdk.acceptPortfolioShare(req);

            if (res.acceptPortfolioShareOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->