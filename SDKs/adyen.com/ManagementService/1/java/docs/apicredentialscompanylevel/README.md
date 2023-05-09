# apiCredentialsCompanyLevel

### Available Operations

* [getCompaniesCompanyIdApiCredentials](#getcompaniescompanyidapicredentials) - Get a list of API credentials
* [getCompaniesCompanyIdApiCredentialsApiCredentialId](#getcompaniescompanyidapicredentialsapicredentialid) - Get an API credential
* [patchCompaniesCompanyIdApiCredentialsApiCredentialId](#patchcompaniescompanyidapicredentialsapicredentialid) - Update an API credential.
* [postCompaniesCompanyIdApiCredentials](#postcompaniescompanyidapicredentials) - Create an API credential.

## getCompaniesCompanyIdApiCredentials

Returns the list of [API credentials](https://docs.adyen.com/development-resources/api-credentials) for the company account. The list is grouped into pages as defined by the query parameters.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdApiCredentialsRequest;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdApiCredentialsResponse;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdApiCredentialsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesCompanyIdApiCredentialsRequest req = new GetCompaniesCompanyIdApiCredentialsRequest("quibusdam") {{
                pageNumber = 602763;
                pageSize = 857946;
            }};            

            GetCompaniesCompanyIdApiCredentialsResponse res = sdk.apiCredentialsCompanyLevel.getCompaniesCompanyIdApiCredentials(req, new GetCompaniesCompanyIdApiCredentialsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.listCompanyApiCredentialsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCompaniesCompanyIdApiCredentialsApiCredentialId

Returns the [API credential](https://docs.adyen.com/development-resources/api-credentials) identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdApiCredentialsApiCredentialIdRequest;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdApiCredentialsApiCredentialIdResponse;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdApiCredentialsApiCredentialIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesCompanyIdApiCredentialsApiCredentialIdRequest req = new GetCompaniesCompanyIdApiCredentialsApiCredentialIdRequest("corrupti", "illum");            

            GetCompaniesCompanyIdApiCredentialsApiCredentialIdResponse res = sdk.apiCredentialsCompanyLevel.getCompaniesCompanyIdApiCredentialsApiCredentialId(req, new GetCompaniesCompanyIdApiCredentialsApiCredentialIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.companyApiCredential != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchCompaniesCompanyIdApiCredentialsApiCredentialId

Changes the API credential's roles, merchant account access, or allowed origins. The request has the new values for the fields you want to change. The response contains the full updated API credential, including the new values from the request. 

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchCompaniesCompanyIdApiCredentialsApiCredentialIdRequest;
import org.openapis.openapi.models.operations.PatchCompaniesCompanyIdApiCredentialsApiCredentialIdResponse;
import org.openapis.openapi.models.operations.PatchCompaniesCompanyIdApiCredentialsApiCredentialIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.UpdateCompanyApiCredentialRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchCompaniesCompanyIdApiCredentialsApiCredentialIdRequest req = new PatchCompaniesCompanyIdApiCredentialsApiCredentialIdRequest("vel", "error") {{
                updateCompanyApiCredentialRequest = new UpdateCompanyApiCredentialRequest() {{
                    active = false;
                    allowedOrigins = new String[]{{
                        add("suscipit"),
                        add("iure"),
                        add("magnam"),
                    }};
                    associatedMerchantAccounts = new String[]{{
                        add("ipsa"),
                        add("delectus"),
                        add("tempora"),
                        add("suscipit"),
                    }};
                    description = "molestiae";
                    roles = new String[]{{
                        add("placeat"),
                        add("voluptatum"),
                        add("iusto"),
                        add("excepturi"),
                    }};
                }};;
            }};            

            PatchCompaniesCompanyIdApiCredentialsApiCredentialIdResponse res = sdk.apiCredentialsCompanyLevel.patchCompaniesCompanyIdApiCredentialsApiCredentialId(req, new PatchCompaniesCompanyIdApiCredentialsApiCredentialIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.companyApiCredential != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCompaniesCompanyIdApiCredentials

Creates an [API credential](https://docs.adyen.com/development-resources/api-credentials) for the company account identified in the path. In the request, you can specify which merchant accounts the new API credential will have access to, as well as its roles and allowed origins.

The response includes several types of authentication details:
* [API key](https://docs.adyen.com/development-resources/api-authentication#api-key-authentication): used for API request authentication.
* [Client key](https://docs.adyen.com/development-resources/client-side-authentication#how-it-works): public key used for client-side authentication.
* [Username and password](https://docs.adyen.com/development-resources/api-authentication#using-basic-authentication): used for basic authentication.

> Make sure you store the API key securely in your system. You won't be able to retrieve it later.

If your API key is lost or compromised, you need to [generate a new API key](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/companies/{companyId}/apiCredentials/{apiCredentialId}/generateApiKey).

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdApiCredentialsRequest;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdApiCredentialsResponse;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdApiCredentialsSecurity;
import org.openapis.openapi.models.shared.CreateCompanyApiCredentialRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCompaniesCompanyIdApiCredentialsRequest req = new PostCompaniesCompanyIdApiCredentialsRequest("nisi") {{
                createCompanyApiCredentialRequest = new CreateCompanyApiCredentialRequest() {{
                    allowedOrigins = new String[]{{
                        add("temporibus"),
                        add("ab"),
                        add("quis"),
                        add("veritatis"),
                    }};
                    associatedMerchantAccounts = new String[]{{
                        add("perferendis"),
                        add("ipsam"),
                        add("repellendus"),
                    }};
                    description = "sapiente";
                    roles = new String[]{{
                        add("odit"),
                        add("at"),
                        add("at"),
                        add("maiores"),
                    }};
                }};;
            }};            

            PostCompaniesCompanyIdApiCredentialsResponse res = sdk.apiCredentialsCompanyLevel.postCompaniesCompanyIdApiCredentials(req, new PostCompaniesCompanyIdApiCredentialsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.createCompanyApiCredentialResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
