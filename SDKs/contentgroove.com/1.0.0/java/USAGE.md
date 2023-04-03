<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteApiV1ClipsIdSecurity;
import org.openapis.openapi.models.operations.DeleteApiV1ClipsIdRequest;
import org.openapis.openapi.models.operations.DeleteApiV1ClipsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiV1ClipsIdRequest req = new DeleteApiV1ClipsIdRequest() {{
                id = "corrupti";
            }}            

            DeleteApiV1ClipsIdResponse res = sdk.deleteApiV1ClipsId(req, new DeleteApiV1ClipsIdSecurity() {{
                bearerHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->