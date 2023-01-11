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

            FilterFileDataStoppingsRequest req = new FilterFileDataStoppingsRequest() {{
                pathParams = new FilterFileDataStoppingsPathParams() {{
                    type = "nostrum";
                }};
                request = new FilterFileDataStoppingsRequestBody() {{
                    file = new FilterFileDataStoppingsRequestBodyFile() {{
                        content = "non".getBytes();
                        file = "sit";
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