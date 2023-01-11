<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            RegistryCreateApiRequest req = new RegistryCreateApiRequest() {{
                pathParams = new RegistryCreateApiPathParams() {{
                    project = "sit";
                }};
                queryParams = new RegistryCreateApiQueryParams() {{
                    apiId = "voluptas";
                }};
                request = "culpa";
            }};

            RegistryCreateApiResponse res = sdk.registryCreateApi(req);

            if (res.api.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->