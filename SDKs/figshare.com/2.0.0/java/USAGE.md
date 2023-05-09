<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountArticleReportRequest;
import org.openapis.openapi.models.operations.AccountArticleReportResponse;
import org.openapis.openapi.models.operations.AccountArticleReportSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountArticleReportRequest req = new AccountArticleReportRequest() {{
                groupId = 548814L;
            }};            

            AccountArticleReportResponse res = sdk.articles.accountArticleReport(req, new AccountArticleReportSecurity("provident") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountReports != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->