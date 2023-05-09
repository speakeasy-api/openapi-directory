<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUrlsExportAreaEnum;
import org.openapis.openapi.models.operations.CreateUrlsExportRequest;
import org.openapis.openapi.models.operations.CreateUrlsExportResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UrlsQuery;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUrlsExportRequest req = new CreateUrlsExportRequest("provident", "distinctio", "quibusdam") {{
                urlsQuery = new UrlsQuery() {{
                    fields = new String[]{{
                        add("nulla"),
                        add("corrupti"),
                        add("illum"),
                    }};
                    filters = new java.util.HashMap<String, Object>() {{
                        put("error", "deserunt");
                        put("suscipit", "iure");
                    }};
                    sort = new java.util.HashMap<String, Object>[]{{
                        add(new java.util.HashMap<String, Object>() {{
                            put("ipsa", "delectus");
                            put("tempora", "suscipit");
                            put("molestiae", "minus");
                            put("placeat", "voluptatum");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("excepturi", "nisi");
                            put("recusandae", "temporibus");
                        }}),
                    }};
                }};;
                area = CreateUrlsExportAreaEnum.CURRENT;
            }};            

            CreateUrlsExportResponse res = sdk.analysis.createUrlsExport(req);

            if (res.csvExportStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->