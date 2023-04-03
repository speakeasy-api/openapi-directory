<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteV2AccessTokensUuidRequest;
import org.openapis.openapi.models.operations.DeleteV2AccessTokensUuidResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteV2AccessTokensUuidRequest req = new DeleteV2AccessTokensUuidRequest() {{
                uuid = "89bd9d8d-69a6-474e-8f46-7cc8796ed151";
            }}            

            DeleteV2AccessTokensUuidResponse res = sdk.accessTokens.deleteV2AccessTokensUuid(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->