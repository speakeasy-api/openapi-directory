# sourceOauth

## Overview

Source OAuth related resources to delegate access from user.

### Available Operations

* [completeSourceOAuth](#completesourceoauth) - Given a source def ID generate an access/refresh token etc.
* [getSourceOAuthConsent](#getsourceoauthconsent) - Given a source connector definition ID, return the URL to the consent screen where to redirect the user to.
* [setInstancewideSourceOauthParams](#setinstancewidesourceoauthparams) - Sets instancewide variables to be used for the oauth flow when creating this source. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.


## completeSourceOAuth

Given a source def ID generate an access/refresh token etc.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompleteSourceOAuthResponse;
import org.openapis.openapi.models.shared.CompleteSourceOauthRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CompleteSourceOauthRequest req = new CompleteSourceOauthRequest("3197e193-a245-4467-b948-74c2d5cc4972", "233e66bd-8fe5-4d00-b979-ef2038732059") {{
                oAuthInputConfiguration = "aut";
                queryParams = new java.util.HashMap<String, Object>() {{
                    put("quod", "quo");
                    put("architecto", "voluptatem");
                    put("perspiciatis", "ea");
                    put("eius", "aperiam");
                }};
                redirectUrl = "voluptatem";
                sourceId = "313b3e50-44f6-45fe-b2dc-4077d0cc3f40";
            }};            

            CompleteSourceOAuthResponse res = sdk.sourceOauth.completeSourceOAuth(req);

            if (res.completeOAuthResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSourceOAuthConsent

Given a source connector definition ID, return the URL to the consent screen where to redirect the user to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSourceOAuthConsentResponse;
import org.openapis.openapi.models.shared.SourceOauthConsentRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SourceOauthConsentRequest req = new SourceOauthConsentRequest("corrupti", "efc15ceb-4d6e-41ea-a0f7-5aedf2acab58", "b991c926-ddb5-4894-a1e7-421cbe6d9502") {{
                oAuthInputConfiguration = "a";
                sourceId = "0ea930b6-9f7a-4c2f-b2f8-850090491160";
            }};            

            GetSourceOAuthConsentResponse res = sdk.sourceOauth.getSourceOAuthConsent(req);

            if (res.oAuthConsentRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setInstancewideSourceOauthParams

Sets instancewide variables to be used for the oauth flow when creating this source. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetInstancewideSourceOauthParamsResponse;
import org.openapis.openapi.models.shared.SetInstancewideSourceOauthParamsRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SetInstancewideSourceOauthParamsRequestBody req = new SetInstancewideSourceOauthParamsRequestBody(                new java.util.HashMap<String, Object>() {{
                                put("dolores", "perferendis");
                                put("esse", "quas");
                                put("blanditiis", "laudantium");
                            }}, "ec66183b-fe96-459e-b40e-c16faf75b0b5");            

            SetInstancewideSourceOauthParamsResponse res = sdk.sourceOauth.setInstancewideSourceOauthParams(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
