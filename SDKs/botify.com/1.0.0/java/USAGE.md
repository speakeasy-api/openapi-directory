<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateUrlsExportPathParams;
import org.openapis.openapi.models.operations.CreateUrlsExportAreaEnum;
import org.openapis.openapi.models.operations.CreateUrlsExportQueryParams;
import org.openapis.openapi.models.operations.CreateUrlsExportRequest;
import org.openapis.openapi.models.operations.CreateUrlsExportResponse;
import org.openapis.openapi.models.shared.UrlsQuery;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    djangoRestToken = new SchemeDjangoRestToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateUrlsExportRequest req = new CreateUrlsExportRequest() {{
                pathParams = new CreateUrlsExportPathParams() {{
                    analysisSlug = "corrupti";
                    projectSlug = "provident";
                    username = "Micheal_Sporer";
                }};
                queryParams = new CreateUrlsExportQueryParams() {{
                    area = "new";
                }};
                request = new UrlsQuery() {{
                    fields = new String[]{{
                        add("vel"),
                        add("error"),
                        add("deserunt"),
                        add("suscipit"),
                    }};
                    filters = new java.util.HashMap<String, Object>() {{
                        put("magnam", "debitis");
                        put("ipsa", "delectus");
                    }};
                    sort = new java.util.HashMap<String, Object>[]{{
                        add(new java.util.HashMap<String, Object>() {{
                            put("molestiae", "minus");
                            put("placeat", "voluptatum");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("excepturi", "nisi");
                            put("recusandae", "temporibus");
                        }}),
                    }};
                }};
            }};            

            CreateUrlsExportResponse res = sdk.analysis.createUrlsExport(req);

            if (res.csvExportStatus.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->