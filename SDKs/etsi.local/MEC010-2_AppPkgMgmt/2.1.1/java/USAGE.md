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

            AppDgetRequest req = new AppDgetRequest() {{
                pathParams = new AppDgetPathParams() {{
                    appDId = "ut";
                }};
                queryParams = new AppDgetQueryParams() {{
                    allFields = "non";
                    excludeDefault = "nihil";
                    excludeFields = "laborum";
                    fields = "recusandae";
                    filter = "nihil";
                }};
            }};

            AppDgetResponse res = sdk.appPkgm.appDget(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->