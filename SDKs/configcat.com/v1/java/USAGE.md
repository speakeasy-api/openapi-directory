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
                    basic = new SchemeBasic() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetAuditlogsRequest req = new GetAuditlogsRequest() {{
                pathParams = new GetAuditlogsPathParams() {{
                    productId = "sit";
                }};
                queryParams = new GetAuditlogsQueryParams() {{
                    auditLogType = new java.util.HashMap<String, Object>() {{
                        put("culpa", "expedita");
                    }};
                    configId = "consequuntur";
                    environmentId = "dolor";
                    fromUtcDateTime = "2009-11-26T21:53:53Z";
                    toUtcDateTime = "1978-05-28T16:08:43Z";
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