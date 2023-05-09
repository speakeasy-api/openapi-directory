# connectorDocs

### Available Operations

* [connectorDocsOne](#connectordocsone) - Get Connector Doc content

## connectorDocsOne

Get Connector Doc content

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorDocsOneRequest;
import org.openapis.openapi.models.operations.ConnectorDocsOneResponse;
import org.openapis.openapi.models.operations.ConnectorDocsOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorDocsOneRequest req = new ConnectorDocsOneRequest("minus", "placeat", "voluptatum");            

            ConnectorDocsOneResponse res = sdk.connectorDocs.connectorDocsOne(req, new ConnectorDocsOneSecurity("iusto") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.connectorDocsOne200TextMarkdownMarkdownString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
