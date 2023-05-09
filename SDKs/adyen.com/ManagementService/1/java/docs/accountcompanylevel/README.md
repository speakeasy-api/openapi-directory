# accountCompanyLevel

### Available Operations

* [getCompanies](#getcompanies) - Get a list of company accounts
* [getCompaniesCompanyId](#getcompaniescompanyid) - Get a company account
* [getCompaniesCompanyIdMerchants](#getcompaniescompanyidmerchants) - Get a list of merchant accounts

## getCompanies

Returns the list of company accounts that your API credential has access to. The list is grouped into pages as defined by the query parameters.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Account read

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompaniesRequest;
import org.openapis.openapi.models.operations.GetCompaniesResponse;
import org.openapis.openapi.models.operations.GetCompaniesSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesRequest req = new GetCompaniesRequest() {{
                pageNumber = 135218;
                pageSize = 18789;
            }};            

            GetCompaniesResponse res = sdk.accountCompanyLevel.getCompanies(req, new GetCompaniesSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.listCompanyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCompaniesCompanyId

Returns the company account specified in the path. Your API credential must have access to the company account. 

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Account read

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdRequest;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdResponse;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesCompanyIdRequest req = new GetCompaniesCompanyIdRequest("ad");            

            GetCompaniesCompanyIdResponse res = sdk.accountCompanyLevel.getCompaniesCompanyId(req, new GetCompaniesCompanyIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.company != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCompaniesCompanyIdMerchants

Returns the list of merchant accounts under the company account specified in the path. The list only includes merchant accounts that your API credential has access to. The list is grouped into pages as defined by the query parameters. 

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Account read

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdMerchantsRequest;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdMerchantsResponse;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdMerchantsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesCompanyIdMerchantsRequest req = new GetCompaniesCompanyIdMerchantsRequest("natus") {{
                pageNumber = 149675;
                pageSize = 612096;
            }};            

            GetCompaniesCompanyIdMerchantsResponse res = sdk.accountCompanyLevel.getCompaniesCompanyIdMerchants(req, new GetCompaniesCompanyIdMerchantsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.listMerchantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
