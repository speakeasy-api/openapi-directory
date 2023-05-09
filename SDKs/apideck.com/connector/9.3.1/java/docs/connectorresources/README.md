# connectorResources

### Available Operations

* [connectorResourcesOne](#connectorresourcesone) - Get Connector Resource

## connectorResourcesOne

Get Connector Resource

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorResourcesOneRequest;
import org.openapis.openapi.models.operations.ConnectorResourcesOneResponse;
import org.openapis.openapi.models.operations.ConnectorResourcesOneSecurity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UnifiedApiIdEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorResourcesOneRequest req = new ConnectorResourcesOneRequest("excepturi", "nisi", "recusandae") {{
                unifiedApi = UnifiedApiIdEnum.CRM;
            }};            

            ConnectorResourcesOneResponse res = sdk.connectorResources.connectorResourcesOne(req, new ConnectorResourcesOneSecurity("temporibus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getConnectorResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
