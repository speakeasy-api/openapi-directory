<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteApiV1ClipsIdSecurity;
import org.openapis.openapi.models.operations.DeleteApiV1ClipsIdPathParams;
import org.openapis.openapi.models.operations.DeleteApiV1ClipsIdRequest;
import org.openapis.openapi.models.operations.DeleteApiV1ClipsIdResponse;
import org.openapis.openapi.models.shared.SchemeBearerHeader;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiV1ClipsIdRequest req = new DeleteApiV1ClipsIdRequest() {{
                security = new DeleteApiV1ClipsIdSecurity() {{
                    bearerHeader = new SchemeBearerHeader() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new DeleteApiV1ClipsIdPathParams() {{
                    id = "corrupti";
                }};
            }};            

            DeleteApiV1ClipsIdResponse res = sdk.deleteApiV1ClipsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->