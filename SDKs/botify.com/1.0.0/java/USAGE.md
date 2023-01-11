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
                    djangoRestToken = new SchemeDjangoRestToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateUrlsExportRequest req = new CreateUrlsExportRequest() {{
                pathParams = new CreateUrlsExportPathParams() {{
                    analysisSlug = "error";
                    projectSlug = "minus";
                    username = "animi";
                }};
                queryParams = new CreateUrlsExportQueryParams() {{
                    area = "disappeared";
                }};
                request = new UrlsQuery() {{
                    fields = new String[]() {{
                        add("vitae"),
                    }};
                    filters = new java.util.HashMap<String, Object>() {{
                        put("non", "reiciendis");
                        put("id", "aut");
                    }};
                    sort = new java.util.HashMap<String, Object>[]() {{
                        add(new java.util.HashMap<String, Object>() {{
                            put("quaerat", "exercitationem");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("ipsum", "rerum");
                            put("assumenda", "porro");
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