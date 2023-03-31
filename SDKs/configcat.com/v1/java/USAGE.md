<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetAuditlogsPathParams;
import org.openapis.openapi.models.operations.GetAuditlogsAuditLogTypeEnum;
import org.openapis.openapi.models.operations.GetAuditlogsQueryParams;
import org.openapis.openapi.models.operations.GetAuditlogsRequest;
import org.openapis.openapi.models.operations.GetAuditlogsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basic = new SchemeBasic() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetAuditlogsRequest req = new GetAuditlogsRequest() {{
                pathParams = new GetAuditlogsPathParams() {{
                    productId = "89bd9d8d-69a6-474e-8f46-7cc8796ed151";
                }};
                queryParams = new GetAuditlogsQueryParams() {{
                    auditLogType = "organizationAdminLeft";
                    configId = "05dfc2dd-f7cc-478c-a1ba-928fc816742c";
                    environmentId = "b7392059-2939-46fe-a759-6eb10faaa235";
                    fromUtcDateTime = "2022-04-01T23:59:21.675Z";
                    toUtcDateTime = "2022-05-24T03:24:11.703Z";
                }};
            }};            

            GetAuditlogsResponse res = sdk.auditLogs.getAuditlogs(req);

            if (res.auditLogItemModels.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->