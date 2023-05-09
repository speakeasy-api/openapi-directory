# myAPICredential

### Available Operations

* [deleteMeAllowedOriginsOriginId](#deletemeallowedoriginsoriginid) - Remove allowed origin
* [getMe](#getme) - Get API credential details
* [getMeAllowedOrigins](#getmeallowedorigins) - Get allowed origins
* [getMeAllowedOriginsOriginId](#getmeallowedoriginsoriginid) - Get allowed origin details
* [postMeAllowedOrigins](#postmeallowedorigins) - Add allowed origin

## deleteMeAllowedOriginsOriginId

Removes the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) specified in the path.
The API key from the request is used to identify the [API credential](https://docs.adyen.com/development-resources/api-credentials).

You can make this request with any of the Management API roles.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMeAllowedOriginsOriginIdRequest;
import org.openapis.openapi.models.operations.DeleteMeAllowedOriginsOriginIdResponse;
import org.openapis.openapi.models.operations.DeleteMeAllowedOriginsOriginIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteMeAllowedOriginsOriginIdRequest req = new DeleteMeAllowedOriginsOriginIdRequest("in");            

            DeleteMeAllowedOriginsOriginIdResponse res = sdk.myAPICredential.deleteMeAllowedOriginsOriginId(req, new DeleteMeAllowedOriginsOriginIdSecurity() {{
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

## getMe

Returns your [API credential](https://docs.adyen.com/development-resources/api-credentials) details based on the API Key you used in the request.

You can make this request with any of the Management API roles.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeResponse;
import org.openapis.openapi.models.operations.GetMeSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeResponse res = sdk.myAPICredential.getMe(new GetMeSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.meApiCredential != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeAllowedOrigins

Returns the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) of your [API credential](https://docs.adyen.com/development-resources/api-credentials) based on the API key you used in the request.

You can make this request with any of the Management API roles.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeAllowedOriginsResponse;
import org.openapis.openapi.models.operations.GetMeAllowedOriginsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeAllowedOriginsResponse res = sdk.myAPICredential.getMeAllowedOrigins(new GetMeAllowedOriginsSecurity() {{
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

## getMeAllowedOriginsOriginId

Returns the details of the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) specified in the path.
The API key from the request is used to identify the [API credential](https://docs.adyen.com/development-resources/api-credentials).

You can make this request with any of the Management API roles.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeAllowedOriginsOriginIdRequest;
import org.openapis.openapi.models.operations.GetMeAllowedOriginsOriginIdResponse;
import org.openapis.openapi.models.operations.GetMeAllowedOriginsOriginIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeAllowedOriginsOriginIdRequest req = new GetMeAllowedOriginsOriginIdRequest("architecto");            

            GetMeAllowedOriginsOriginIdResponse res = sdk.myAPICredential.getMeAllowedOriginsOriginId(req, new GetMeAllowedOriginsOriginIdSecurity() {{
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

## postMeAllowedOrigins

Adds an allowed origin to the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) of your API credential.
The API key from the request is used to identify the [API credential](https://docs.adyen.com/development-resources/api-credentials).

You can make this request with any of the Management API roles.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMeAllowedOriginsResponse;
import org.openapis.openapi.models.operations.PostMeAllowedOriginsSecurity;
import org.openapis.openapi.models.shared.CreateAllowedOriginRequest;
import org.openapis.openapi.models.shared.Links;
import org.openapis.openapi.models.shared.LinksElement;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateAllowedOriginRequest req = new CreateAllowedOriginRequest("architecto") {{
                links = new Links(                new LinksElement() {{
                                    href = "repudiandae";
                                }};);;
                id = "5b7fd2ed-0289-421c-9dc6-92601fb576b0";
            }};            

            PostMeAllowedOriginsResponse res = sdk.myAPICredential.postMeAllowedOrigins(req, new PostMeAllowedOriginsSecurity() {{
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
