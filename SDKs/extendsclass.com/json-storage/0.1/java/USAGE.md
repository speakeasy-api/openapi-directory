<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteBinIdPathParams;
import org.openapis.openapi.models.operations.DeleteBinIdRequest;
import org.openapis.openapi.models.operations.DeleteBinIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteBinIdRequest req = new DeleteBinIdRequest() {{
                pathParams = new DeleteBinIdPathParams() {{
                    id = "corrupti";
                }};
            }};            

            DeleteBinIdResponse res = sdk.deleteBinId(req);

            if (res.deleteStatus.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->