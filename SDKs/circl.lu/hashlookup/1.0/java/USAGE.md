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

            GetLookupSha1Sha1Request req = new GetLookupSha1Sha1Request() {{
                pathParams = new GetLookupSha1Sha1PathParams() {{
                    sha1 = "nisi";
                }};
            }};

            GetLookupSha1Sha1Response res = sdk.default_.getLookupSha1Sha1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->