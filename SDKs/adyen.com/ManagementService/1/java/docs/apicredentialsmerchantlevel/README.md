# apiCredentialsMerchantLevel

### Available Operations

* [getMerchantsMerchantIdApiCredentials](#getmerchantsmerchantidapicredentials) - Get a list of API credentials
* [getMerchantsMerchantIdApiCredentialsApiCredentialId](#getmerchantsmerchantidapicredentialsapicredentialid) - Get an API credential
* [patchMerchantsMerchantIdApiCredentialsApiCredentialId](#patchmerchantsmerchantidapicredentialsapicredentialid) - Update an API credential
* [postMerchantsMerchantIdApiCredentials](#postmerchantsmerchantidapicredentials) - Create an API credential

## getMerchantsMerchantIdApiCredentials

Returns the list of [API credentials](https://docs.adyen.com/development-resources/api-credentials) for the merchant account. The list is grouped into pages as defined by the query parameters.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdApiCredentialsRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdApiCredentialsResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdApiCredentialsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdApiCredentialsRequest req = new GetMerchantsMerchantIdApiCredentialsRequest("molestiae") {{
                pageNumber = 799159;
                pageSize = 800911;
            }};            

            GetMerchantsMerchantIdApiCredentialsResponse res = sdk.apiCredentialsMerchantLevel.getMerchantsMerchantIdApiCredentials(req, new GetMerchantsMerchantIdApiCredentialsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.listMerchantApiCredentialsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMerchantsMerchantIdApiCredentialsApiCredentialId

Returns the [API credential](https://docs.adyen.com/development-resources/api-credentials) identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdApiCredentialsApiCredentialIdRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdApiCredentialsApiCredentialIdResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdApiCredentialsApiCredentialIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdApiCredentialsApiCredentialIdRequest req = new GetMerchantsMerchantIdApiCredentialsApiCredentialIdRequest("esse", "totam");            

            GetMerchantsMerchantIdApiCredentialsApiCredentialIdResponse res = sdk.apiCredentialsMerchantLevel.getMerchantsMerchantIdApiCredentialsApiCredentialId(req, new GetMerchantsMerchantIdApiCredentialsApiCredentialIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.apiCredential != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchMerchantsMerchantIdApiCredentialsApiCredentialId

Changes the API credential's roles, or allowed origins. The request has the new values for the fields you want to change. The response contains the full updated API credential, including the new values from the request. 

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdApiCredentialsApiCredentialIdRequest;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdApiCredentialsApiCredentialIdResponse;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdApiCredentialsApiCredentialIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.UpdateMerchantApiCredentialRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchMerchantsMerchantIdApiCredentialsApiCredentialIdRequest req = new PatchMerchantsMerchantIdApiCredentialsApiCredentialIdRequest("porro", "dolorum") {{
                updateMerchantApiCredentialRequest = new UpdateMerchantApiCredentialRequest() {{
                    active = false;
                    allowedOrigins = new String[]{{
                        add("nam"),
                    }};
                    description = "officia";
                    roles = new String[]{{
                        add("fugit"),
                        add("deleniti"),
                        add("hic"),
                    }};
                }};;
            }};            

            PatchMerchantsMerchantIdApiCredentialsApiCredentialIdResponse res = sdk.apiCredentialsMerchantLevel.patchMerchantsMerchantIdApiCredentialsApiCredentialId(req, new PatchMerchantsMerchantIdApiCredentialsApiCredentialIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.apiCredential != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMerchantsMerchantIdApiCredentials

Creates an [API credential](https://docs.adyen.com/development-resources/api-credentials) for the company account identified in the path. In the request, you can specify the roles and allowed origins for the new API credential.

The response includes the:
* [API key](https://docs.adyen.com/development-resources/api-authentication#api-key-authentication): used for API request authentication.
* [Client key](https://docs.adyen.com/development-resources/client-side-authentication#how-it-works): public key used for client-side authentication.
* [Username and password](https://docs.adyen.com/development-resources/api-authentication#using-basic-authentication): used for basic authentication.

> Make sure you store the API key securely in your system. You won't be able to retrieve it later.

If your API key is lost or compromised, you need to [generate a new API key](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/merchants/{merchantId}/apiCredentials/{apiCredentialId}/generateApiKey).

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdApiCredentialsRequest;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdApiCredentialsResponse;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdApiCredentialsSecurity;
import org.openapis.openapi.models.shared.CreateMerchantApiCredentialRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMerchantsMerchantIdApiCredentialsRequest req = new PostMerchantsMerchantIdApiCredentialsRequest("optio") {{
                createMerchantApiCredentialRequest = new CreateMerchantApiCredentialRequest() {{
                    allowedOrigins = new String[]{{
                        add("beatae"),
                        add("commodi"),
                        add("molestiae"),
                    }};
                    description = "modi";
                    roles = new String[]{{
                        add("impedit"),
                    }};
                }};;
            }};            

            PostMerchantsMerchantIdApiCredentialsResponse res = sdk.apiCredentialsMerchantLevel.postMerchantsMerchantIdApiCredentials(req, new PostMerchantsMerchantIdApiCredentialsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.createApiCredentialResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
