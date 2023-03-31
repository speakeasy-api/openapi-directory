<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AppDGETPathParams;
import org.openapis.openapi.models.operations.AppDGETQueryParams;
import org.openapis.openapi.models.operations.AppDGETRequest;
import org.openapis.openapi.models.operations.AppDGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppDGETRequest req = new AppDGETRequest() {{
                pathParams = new AppDGETPathParams() {{
                    appDId = "corrupti";
                }};
                queryParams = new AppDGETQueryParams() {{
                    allFields = "provident";
                    excludeDefault = "distinctio";
                    excludeFields = "quibusdam";
                    fields = "unde";
                    filter = "nulla";
                }};
            }};            

            AppDGETResponse res = sdk.appPkgm.appDGET(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->