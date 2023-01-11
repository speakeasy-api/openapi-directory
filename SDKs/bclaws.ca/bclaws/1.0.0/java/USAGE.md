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

            GetContentAspectIdRequest req = new GetContentAspectIdRequest() {{
                pathParams = new GetContentAspectIdPathParams() {{
                    aspectId = "psl";
                }};
            }};

            GetContentAspectIdResponse res = sdk.content.getContentAspectId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->