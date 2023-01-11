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
                    acceptLanguage = "beatae";
                    cacheControl = "aut";
                    ifNoneMatch = "quia";
                    requestTimeout = 22.200001;
                    userAgent = "ea";
                    xApplecloudextensionRetryCount = 66.099998;
                    xApplecloudextensionSessionId = "animi";
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