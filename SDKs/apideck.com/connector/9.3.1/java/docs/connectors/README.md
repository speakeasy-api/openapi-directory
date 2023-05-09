# connectors

### Available Operations

* [connectorsAll](#connectorsall) - List Connectors
* [connectorsOne](#connectorsone) - Get Connector

## connectorsAll

List Connectors

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsAllRequest;
import org.openapis.openapi.models.operations.ConnectorsAllResponse;
import org.openapis.openapi.models.operations.ConnectorsAllSecurity;
import org.openapis.openapi.models.shared.ConnectorStatusEnum;
import org.openapis.openapi.models.shared.ConnectorsFilter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UnifiedApiIdEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsAllRequest req = new ConnectorsAllRequest("ab") {{
                cursor = "quis";
                filter = new ConnectorsFilter() {{
                    status = ConnectorStatusEnum.LIVE;
                    unifiedApi = UnifiedApiIdEnum.CRM;
                }};;
                limit = 648172L;
            }};            

            ConnectorsAllResponse res = sdk.connectors.connectorsAll(req, new ConnectorsAllSecurity("perferendis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getConnectorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectorsOne

Get Connector

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsOneRequest;
import org.openapis.openapi.models.operations.ConnectorsOneResponse;
import org.openapis.openapi.models.operations.ConnectorsOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsOneRequest req = new ConnectorsOneRequest("ipsam", "repellendus");            

            ConnectorsOneResponse res = sdk.connectors.connectorsOne(req, new ConnectorsOneSecurity("sapiente") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getConnectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
