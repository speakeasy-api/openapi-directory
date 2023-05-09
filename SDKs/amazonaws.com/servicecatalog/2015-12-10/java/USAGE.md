<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptPortfolioShareRequest;
import org.openapis.openapi.models.operations.AcceptPortfolioShareResponse;
import org.openapis.openapi.models.operations.AcceptPortfolioShareXAmzTargetEnum;
import org.openapis.openapi.models.shared.AcceptPortfolioShareInput;
import org.openapis.openapi.models.shared.PortfolioShareTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptPortfolioShareRequest req = new AcceptPortfolioShareRequest(                new AcceptPortfolioShareInput("provident") {{
                                acceptLanguage = "distinctio";
                                portfolioShareType = PortfolioShareTypeEnum.AWS_ORGANIZATIONS;
                            }};, AcceptPortfolioShareXAmzTargetEnum.AWS242_SERVICE_CATALOG_SERVICE_ACCEPT_PORTFOLIO_SHARE) {{
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
            }};            

            AcceptPortfolioShareResponse res = sdk.acceptPortfolioShare(req);

            if (res.acceptPortfolioShareOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->