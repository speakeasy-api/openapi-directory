<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            AccountArticleReportRequest req = new AccountArticleReportRequest() {{
                security = new AccountArticleReportSecurity() {{
                    oAuth2 = new SchemeOAuth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new AccountArticleReportQueryParams() {{
                    groupId = 8717895732742165505;
                }};
            }};

            AccountArticleReportResponse res = sdk.articles.accountArticleReport(req);

            if (res.accountReports.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->