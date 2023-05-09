<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAuditlogsAuditLogTypeEnum;
import org.openapis.openapi.models.operations.GetAuditlogsRequest;
import org.openapis.openapi.models.operations.GetAuditlogsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti", "provident") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetAuditlogsRequest req = new GetAuditlogsRequest("bd9d8d69-a674-4e0f-867c-c8796ed151a0") {{
                auditLogType = GetAuditlogsAuditLogTypeEnum.WEB_HOOK_CREATED;
                configId = "dfc2ddf7-cc78-4ca1-ba92-8fc816742cb7";
                environmentId = "39205929-396f-4ea7-996e-b10faaa2352c";
                fromUtcDateTime = OffsetDateTime.parse("2022-05-24T03:24:11.703Z");
                toUtcDateTime = OffsetDateTime.parse("2022-09-04T08:35:09.957Z");
            }};            

            GetAuditlogsResponse res = sdk.auditLogs.getAuditlogs(req);

            if (res.auditLogItemModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->