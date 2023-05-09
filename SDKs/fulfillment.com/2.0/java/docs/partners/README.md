# partners

### Available Operations

* [putOrdersIdShip](#putordersidship) - Ship an Order
* [putOrdersIdStatus](#putordersidstatus) - Update Order Status

## putOrdersIdShip

Note, this API is used to update orders and is reserved for our shipping partners.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutOrdersIdShipOrderShipV2;
import org.openapis.openapi.models.operations.PutOrdersIdShipRequest;
import org.openapis.openapi.models.operations.PutOrdersIdShipResponse;
import org.openapis.openapi.models.operations.PutOrdersIdShipSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutOrdersIdShipRequest req = new PutOrdersIdShipRequest(                new PutOrdersIdShipOrderShipV2("culpa") {{
                                weightOverride = 1613.09;
                            }};, 995300);            

            PutOrdersIdShipResponse res = sdk.partners.putOrdersIdShip(req, new PutOrdersIdShipSecurity("mollitia") {{
                fdcAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.oneordersPostResponses201ContentApplication1jsonSchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putOrdersIdStatus

Note, this API is used to update orders and is reserved for our shipping partners.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutOrdersIdStatusRequest;
import org.openapis.openapi.models.operations.PutOrdersIdStatusResponse;
import org.openapis.openapi.models.operations.PutOrdersIdStatusSecurity;
import org.openapis.openapi.models.operations.PutOrdersIdStatusStatusTypeSimpleV2;
import org.openapis.openapi.models.operations.PutOrdersIdStatusStatusTypeSimpleV2Status;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutOrdersIdStatusRequest req = new PutOrdersIdStatusRequest(                new PutOrdersIdStatusStatusTypeSimpleV2("occaecati",                 new PutOrdersIdStatusStatusTypeSimpleV2Status("numquam"););, 414369);            

            PutOrdersIdStatusResponse res = sdk.partners.putOrdersIdStatus(req, new PutOrdersIdStatusSecurity("quam") {{
                fdcAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.oneordersPostResponses201ContentApplication1jsonSchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
