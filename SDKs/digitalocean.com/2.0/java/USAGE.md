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
                    bearerAuth = new SchemeBearerAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            InstallKubernetesRequest req = new InstallKubernetesRequest() {{
                request = new InstallKubernetesRequestBody() {{
                    addonSlugs = new String[]() {{
                        add("voluptas"),
                    }};
                    clusterUuid = "culpa";
                }};
            }};

            InstallKubernetesResponse res = sdk.oneClickApplications.installKubernetes(req);

            if (res.installKubernetes200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->