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

            PostCreateTestCardRangesRequest req = new PostCreateTestCardRangesRequest() {{
                security = new PostCreateTestCardRangesSecurity() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = "sit";
            }};

            PostCreateTestCardRangesResponse res = sdk.general.postCreateTestCardRanges(req);

            if (res.createTestCardRangesResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->