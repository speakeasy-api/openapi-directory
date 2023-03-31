<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetAccountQueryParams;
import org.openapis.openapi.models.operations.GetAccountHeaders;
import org.openapis.openapi.models.operations.GetAccountRequest;
import org.openapis.openapi.models.operations.GetAccountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountRequest req = new GetAccountRequest() {{
                queryParams = new GetAccountQueryParams() {{
                    include = "masterUser";
                }};
                headers = new GetAccountHeaders() {{
                    evAccessToken = "19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1";
                    evApiKey = "exampleaccount-zwSuWUZ8S38h33qPS8v0s";
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