<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteClientsIdClientRequest;
import org.openapis.openapi.models.operations.DeleteClientsIdClientResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteClientsIdClientRequest req = new DeleteClientsIdClientRequest() {{
                expand = "corrupti";
                idClient = 592845;
            }}            

            DeleteClientsIdClientResponse res = sdk.administration.deleteClientsIdClient(req);

            if (res.client.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->