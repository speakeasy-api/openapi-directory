# allowedOriginsMerchantLevel

### Available Operations

* [deleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId](#deletemerchantsmerchantidapicredentialsapicredentialidallowedoriginsoriginid) - Delete an allowed origin
* [getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins](#getmerchantsmerchantidapicredentialsapicredentialidallowedorigins) - Get a list of allowed origins
* [getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId](#getmerchantsmerchantidapicredentialsapicredentialidallowedoriginsoriginid) - Get an allowed origin
* [postMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins](#postmerchantsmerchantidapicredentialsapicredentialidallowedorigins) - Create an allowed origin

## deleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId

Removes the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path. As soon as an allowed origin is removed, we no longer accept client-side requests from that domain.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest;
import org.openapis.openapi.models.operations.DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdResponse;
import org.openapis.openapi.models.operations.DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest req = new DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest("sapiente", "amet", "deserunt");            

            DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdResponse res = sdk.allowedOriginsMerchantLevel.deleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(req, new DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdSecurity() {{
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

## getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins

Returns the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) for the API credential identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest req = new GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest("nisi", "vel");            

            GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsResponse res = sdk.allowedOriginsMerchantLevel.getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins(req, new GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsSecurity() {{
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

## getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId

Returns the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest req = new GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest("natus", "omnis", "molestiae");            

            GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdResponse res = sdk.allowedOriginsMerchantLevel.getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(req, new GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdSecurity() {{
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

## postMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins

Adds a new [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) to the API credential's list of allowed origins.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsResponse;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsSecurity;
import org.openapis.openapi.models.shared.AllowedOrigin;
import org.openapis.openapi.models.shared.Links;
import org.openapis.openapi.models.shared.LinksElement;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest req = new PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest("perferendis", "nihil") {{
                allowedOrigin = new AllowedOrigin("magnam") {{
                    links = new Links(                new LinksElement() {{
                                        href = "distinctio";
                                    }};);;
                    id = "a4469b6e-2141-4959-890a-fa563e2516fe";
                }};;
            }};            

            PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsResponse res = sdk.allowedOriginsMerchantLevel.postMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins(req, new PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsSecurity() {{
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
