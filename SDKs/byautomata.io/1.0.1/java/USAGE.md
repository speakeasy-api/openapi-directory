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

            GetContentproSearchRequest req = new GetContentproSearchRequest() {{
                queryParams = new GetContentproSearchQueryParams() {{
                    terms = "sit";
                }};
            }};

            GetContentproSearchResponse res = sdk.contentproSearch.getContentproSearch(req);

            if (res.getContentproSearch200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->