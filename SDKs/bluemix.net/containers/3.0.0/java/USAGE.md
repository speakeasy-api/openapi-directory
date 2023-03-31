<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetContainersMessagesHeaders;
import org.openapis.openapi.models.operations.GetContainersMessagesRequest;
import org.openapis.openapi.models.operations.GetContainersMessagesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContainersMessagesRequest req = new GetContainersMessagesRequest() {{
                headers = new GetContainersMessagesHeaders() {{
                    xAuthProjectId = "corrupti";
                    xAuthToken = "provident";
                }};
            }};            

            GetContainersMessagesResponse res = sdk.apiInfo.getContainersMessages(req);

            if (res.getContainersMessages200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->