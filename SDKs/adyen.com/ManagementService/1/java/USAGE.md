<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetCompaniesCompanyIdApiCredentialsSecurity;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdApiCredentialsRequest;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdApiCredentialsResponse;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesCompanyIdApiCredentialsRequest req = new GetCompaniesCompanyIdApiCredentialsRequest() {{
                companyId = "corrupti";
                pageNumber = 592845;
                pageSize = 715190;
            }}            

            GetCompaniesCompanyIdApiCredentialsResponse res = sdk.apiCredentialsCompanyLevel.getCompaniesCompanyIdApiCredentials(req, new GetCompaniesCompanyIdApiCredentialsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.listCompanyApiCredentialsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->