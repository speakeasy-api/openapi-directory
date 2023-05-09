<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryCreateApiRequest;
import org.openapis.openapi.models.operations.RegistryCreateApiResponse;
import org.openapis.openapi.models.shared.ApiInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryCreateApiRequest req = new RegistryCreateApiRequest(                new ApiInput() {{
                                annotations = new java.util.HashMap<String, String>() {{
                                    put("provident", "distinctio");
                                    put("quibusdam", "unde");
                                    put("nulla", "corrupti");
                                }};
                                availability = "illum";
                                description = "vel";
                                displayName = "error";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("suscipit", "iure");
                                    put("magnam", "debitis");
                                    put("ipsa", "delectus");
                                }};
                                name = "Laurie Kreiger";
                                recommendedDeployment = "voluptatum";
                                recommendedVersion = "iusto";
                            }};, "excepturi", "nisi") {{
                apiId = "recusandae";
            }};            

            RegistryCreateApiResponse res = sdk.registry.registryCreateApi(req);

            if (res.api != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->