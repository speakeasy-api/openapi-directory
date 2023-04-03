<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetAuditlogsAuditLogTypeEnum;
import org.openapis.openapi.models.operations.GetAuditlogsRequest;
import org.openapis.openapi.models.operations.GetAuditlogsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetAuditlogsRequest req = new GetAuditlogsRequest() {{
                auditLogType = "integrationLinkAdded";
                configId = "9bd9d8d6-9a67-44e0-b467-cc8796ed151a";
                environmentId = "05dfc2dd-f7cc-478c-a1ba-928fc816742c";
                fromUtcDateTime = "2022-02-02T00:14:45.467Z";
                productId = "39205929-396f-4ea7-996e-b10faaa2352c";
                toUtcDateTime = "2022-05-24T03:24:11.703Z";
            }}            

            GetAuditlogsResponse res = sdk.auditLogs.getAuditlogs(req);

            if (res.auditLogItemModels.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->