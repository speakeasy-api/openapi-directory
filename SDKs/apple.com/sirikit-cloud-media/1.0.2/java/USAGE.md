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

            ExtensionConfigurationRequest req = new ExtensionConfigurationRequest() {{
                headers = new ExtensionConfigurationHeaders() {{
                    acceptLanguage = "sit";
                    cacheControl = "voluptas";
                    ifNoneMatch = "culpa";
                    requestTimeout = 6.200000;
                    userAgent = "dolor";
                    xApplecloudextensionRetryCount = 67.199997;
                    xApplecloudextensionSessionId = "fugit";
                }};
            }};

            ExtensionConfigurationResponse res = sdk.config.extensionConfiguration(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->