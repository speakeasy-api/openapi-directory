<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FilterFileDataStoppingsPathParams;
import org.openapis.openapi.models.operations.FilterFileDataStoppingsRequestBodyFile;
import org.openapis.openapi.models.operations.FilterFileDataStoppingsRequestBody;
import org.openapis.openapi.models.operations.FilterFileDataStoppingsRequest;
import org.openapis.openapi.models.operations.FilterFileDataStoppingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FilterFileDataStoppingsRequest req = new FilterFileDataStoppingsRequest() {{
                pathParams = new FilterFileDataStoppingsPathParams() {{
                    type = "corrupti";
                }};
                request = new FilterFileDataStoppingsRequestBody() {{
                    file = new FilterFileDataStoppingsRequestBodyFile() {{
                        content = "provident".getBytes();
                        file = "distinctio";
                    }};
                }};
            }};            

            FilterFileDataStoppingsResponse res = sdk.exude.filterFileDataStoppings(req);

            if (res.exudeResponseBean.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->