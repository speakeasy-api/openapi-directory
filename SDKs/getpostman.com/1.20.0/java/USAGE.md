<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateApiQueryParams;
import org.openapis.openapi.models.operations.CreateApiRequestBodyApi;
import org.openapis.openapi.models.operations.CreateApiRequestBody;
import org.openapis.openapi.models.operations.CreateApiRequest;
import org.openapis.openapi.models.operations.CreateApiResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateApiRequest req = new CreateApiRequest() {{
                queryParams = new CreateApiQueryParams() {{
                    workspace = "{{workspaceId}}";
                }};
                request = new CreateApiRequestBody() {{
                    api = new CreateApiRequestBodyApi() {{
                        description = "This is description.";
                        name = "Sync Service API";
                        summary = "This is supposed to be a short summary.";
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