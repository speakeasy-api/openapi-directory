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
                    analysisSlug = "sit";
                    projectSlug = "voluptas";
                    username = "culpa";
                }};
                queryParams = new CreateUrlsExportQueryParams() {{
                    area = "new";
                }};
                request = new UrlsQuery() {{
                    fields = new String[]() {{
                        add("dolor"),
                        add("expedita"),
                        add("voluptas"),
                    }};
                    filters = new java.util.HashMap<String, Object>() {{
                        put("et", "nihil");
                    }};
                    sort = new java.util.HashMap<String, Object>[]() {{
                        add(new java.util.HashMap<String, Object>() {{
                            put("debitis", "voluptatum");
                            put("et", "ut");
                            put("dolorem", "et");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("iste", "vitae");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("dolores", "illum");
                            put("debitis", "vel");
                            put("odio", "dolore");
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