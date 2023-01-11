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

            GetAccountRequest req = new GetAccountRequest() {{
                queryParams = new GetAccountQueryParams() {{
                    include = "exercitationem";
                }};
                headers = new GetAccountHeaders() {{
                    evAccessToken = "iste";
                    evApiKey = "perferendis";
                }};
            }};

            GetAccountResponse res = sdk.account.getAccount(req);

            if (res.accountResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->