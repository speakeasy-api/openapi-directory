<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ExtensionConfigurationRequest;
import org.openapis.openapi.models.operations.ExtensionConfigurationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExtensionConfigurationRequest req = new ExtensionConfigurationRequest() {{
                acceptLanguage = "corrupti";
                cacheControl = "provident";
                ifNoneMatch = "distinctio";
                requestTimeout = 8442.66;
                userAgent = "unde";
                xApplecloudextensionRetryCount = 8579.46;
                xApplecloudextensionSessionId = "corrupti";
            }}            

            ExtensionConfigurationResponse res = sdk.config.extensionConfiguration(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->