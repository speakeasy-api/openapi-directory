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
                    productId = "ea";
                }};
                queryParams = new GetAuditlogsQueryParams() {{
                    auditLogType = new java.util.HashMap<String, Object>() {{
                        put("dolor", "voluptatem");
                        put("illo", "est");
                        put("reprehenderit", "facilis");
                    }};
                    configId = "aliquid";
                    environmentId = "iure";
                    fromUtcDateTime = "2004-03-31T03:18:23Z";
                    toUtcDateTime = "1997-12-15T16:24:08Z";
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