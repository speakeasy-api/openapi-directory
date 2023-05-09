# allowedOriginsCompanyLevel

### Available Operations

* [deleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId](#deletecompaniescompanyidapicredentialsapicredentialidallowedoriginsoriginid) - Delete an allowed origin
* [getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins](#getcompaniescompanyidapicredentialsapicredentialidallowedorigins) - Get a list of allowed origins
* [getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId](#getcompaniescompanyidapicredentialsapicredentialidallowedoriginsoriginid) - Get an allowed origin
* [postCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins](#postcompaniescompanyidapicredentialsapicredentialidallowedorigins) - Create an allowed origin

## deleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId

Removes the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path. As soon as an allowed origin is removed, we no longer accept client-side requests from that domain.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest;
import org.openapis.openapi.models.operations.DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdResponse;
import org.openapis.openapi.models.operations.DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest req = new DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest("excepturi", "tempora", "facilis");            

            DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdResponse res = sdk.allowedOriginsCompanyLevel.deleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(req, new DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins

Returns the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) for the API credential identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRequest;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsResponse;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRequest req = new GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRequest("tempore", "labore");            

            GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsResponse res = sdk.allowedOriginsCompanyLevel.getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins(req, new GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.allowedOriginsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId

Returns the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdResponse;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest req = new GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest("delectus", "eum", "non");            

            GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdResponse res = sdk.allowedOriginsCompanyLevel.getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(req, new GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.allowedOrigin != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins

Adds a new [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) to the API credential's list of allowed origins.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRequest;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsResponse;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsSecurity;
import org.openapis.openapi.models.shared.AllowedOrigin;
import org.openapis.openapi.models.shared.Links;
import org.openapis.openapi.models.shared.LinksElement;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRequest req = new PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRequest("eligendi", "sint") {{
                allowedOrigin = new AllowedOrigin("aliquid") {{
                    links = new Links(                new LinksElement() {{
                                        href = "provident";
                                    }};);;
                    id = "e9a3efa7-7dfb-414c-966a-e395efb9ba88";
                }};;
            }};            

            PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsResponse res = sdk.allowedOriginsCompanyLevel.postCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins(req, new PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.allowedOriginsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
