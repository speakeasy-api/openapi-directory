<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            DeleteBinIdRequest req = new DeleteBinIdRequest() {{
                pathParams = new DeleteBinIdPathParams() {{
                    id = "minus";
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