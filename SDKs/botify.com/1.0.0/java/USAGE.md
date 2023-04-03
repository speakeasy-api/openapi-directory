<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateUrlsExportAreaEnum;
import org.openapis.openapi.models.operations.CreateUrlsExportRequest;
import org.openapis.openapi.models.operations.CreateUrlsExportResponse;
import org.openapis.openapi.models.shared.UrlsQuery;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUrlsExportRequest req = new CreateUrlsExportRequest() {{
                urlsQuery = new UrlsQuery() {{
                    fields = new String[]{{
                        add("provident"),
                        add("distinctio"),
                        add("quibusdam"),
                    }};
                    filters = new java.util.HashMap<String, Object>() {{
                        put("nulla", "corrupti");
                        put("illum", "vel");
                        put("error", "deserunt");
                    }};
                    sort = new java.util.HashMap<String, Object>[]{{
                        add(new java.util.HashMap<String, Object>() {{
                            put("magnam", "debitis");
                            put("ipsa", "delectus");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("suscipit", "molestiae");
                            put("minus", "placeat");
                        }}),
                    }};
                }};
                analysisSlug = "voluptatum";
                area = "disappeared";
                projectSlug = "excepturi";
                username = "Glen.Walsh33";
            }}            

            CreateUrlsExportResponse res = sdk.analysis.createUrlsExport(req);

            if (res.csvExportStatus.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->