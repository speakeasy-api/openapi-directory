<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.RegistryCreateApiPathParams;
import org.openapis.openapi.models.operations.RegistryCreateApiQueryParams;
import org.openapis.openapi.models.operations.RegistryCreateApiRequest;
import org.openapis.openapi.models.operations.RegistryCreateApiResponse;
import org.openapis.openapi.models.shared.ApiInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryCreateApiRequest req = new RegistryCreateApiRequest() {{
                pathParams = new RegistryCreateApiPathParams() {{
                    location = "corrupti";
                    project = "provident";
                }};
                queryParams = new RegistryCreateApiQueryParams() {{
                    apiId = "distinctio";
                }};
                request = new ApiInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("unde", "nulla");
                        put("corrupti", "illum");
                        put("vel", "error");
                        put("deserunt", "suscipit");
                    }};
                    availability = "iure";
                    description = "magnam";
                    displayName = "debitis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("delectus", "tempora");
                    }};
                    name = "suscipit";
                    recommendedDeployment = "molestiae";
                    recommendedVersion = "minus";
                }};
            }};            

            RegistryCreateApiResponse res = sdk.registry.registryCreateApi(req);

            if (res.api.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->