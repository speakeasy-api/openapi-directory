<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AccountArticleReportSecurity;
import org.openapis.openapi.models.operations.AccountArticleReportRequest;
import org.openapis.openapi.models.operations.AccountArticleReportResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountArticleReportRequest req = new AccountArticleReportRequest() {{
                groupId = 548814;
            }}            

            AccountArticleReportResponse res = sdk.articles.accountArticleReport(req, new AccountArticleReportSecurity() {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountReports.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->