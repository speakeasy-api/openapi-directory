# config

### Available Operations

* [extensionConfiguration](#extensionconfiguration) - Configuration Resource

## extensionConfiguration

Configuration Resource

### Example Usage

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

            ExtensionConfigurationRequest req = new ExtensionConfigurationRequest("illum", "vel", 6235.64, "deserunt", "suscipit") {{
                ifNoneMatch = "iure";
                xApplecloudextensionRetryCount = 2975.34;
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
