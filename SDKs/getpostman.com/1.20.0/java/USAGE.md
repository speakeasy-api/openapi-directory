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

            CreateApiRequest req = new CreateApiRequest() {{
                queryParams = new CreateApiQueryParams() {{
                    workspace = "cum";
                }};
                request = new CreateApiRequestBody() {{
                    api = new CreateApiRequestBodyApi() {{
                        description = "sint";
                        name = "aut";
                        summary = "eaque";
                    }};
                }};
            }};

            CreateApiResponse res = sdk.api.createApi(req);

            if (res.createApi200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->