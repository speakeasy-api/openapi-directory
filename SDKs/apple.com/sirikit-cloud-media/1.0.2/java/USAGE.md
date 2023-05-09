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

            ExtensionConfigurationRequest req = new ExtensionConfigurationRequest("corrupti", "provident", 7151.9, "quibusdam", "unde") {{
                ifNoneMatch = "nulla";
                xApplecloudextensionRetryCount = 5448.83;
            }};            

            ExtensionConfigurationResponse res = sdk.config.extensionConfiguration(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->