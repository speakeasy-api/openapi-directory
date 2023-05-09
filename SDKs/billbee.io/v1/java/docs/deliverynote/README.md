# deliveryNote

### Available Operations

* [orderApiCreateDeliveryNote](#orderapicreatedeliverynote) - Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.

## orderApiCreateDeliveryNote

Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiCreateDeliveryNoteRequest;
import org.openapis.openapi.models.operations.OrderApiCreateDeliveryNoteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiCreateDeliveryNoteRequest req = new OrderApiCreateDeliveryNoteRequest(206594L) {{
                includePdf = false;
                sendToCloudId = 778696L;
            }};            

            OrderApiCreateDeliveryNoteResponse res = sdk.deliveryNote.orderApiCreateDeliveryNote(req);

            if (res.orderApiCreateDeliveryNote200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
