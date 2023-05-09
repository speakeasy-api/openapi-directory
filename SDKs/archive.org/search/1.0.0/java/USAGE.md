<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchV1FieldsRequest;
import org.openapis.openapi.models.operations.GetSearchV1FieldsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSearchV1FieldsRequest req = new GetSearchV1FieldsRequest() {{
                callback = "corrupti";
            }};            

            GetSearchV1FieldsResponse res = sdk.getSearchV1Fields(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->