# destinationOauth

## Overview

Source OAuth related resources to delegate access from user.

### Available Operations

* [completeDestinationOAuth](#completedestinationoauth) - Given a destination def ID generate an access/refresh token etc.
* [getDestinationOAuthConsent](#getdestinationoauthconsent) - Given a destination connector definition ID, return the URL to the consent screen where to redirect the user to.
* [setInstancewideDestinationOauthParams](#setinstancewidedestinationoauthparams) - Sets instancewide variables to be used for the oauth flow when creating this destination. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.


## completeDestinationOAuth

Given a destination def ID generate an access/refresh token etc.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompleteDestinationOAuthResponse;
import org.openapis.openapi.models.shared.CompleteDestinationOAuthRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CompleteDestinationOAuthRequest req = new CompleteDestinationOAuthRequest("bee4825c-1fc0-4e11-9c80-bff918544ec4", "2defcce8-f197-4777-be63-562a7b408f05") {{
                destinationId = "e3d48fda-f313-4a1f-9fd9-4259c0b36f25";
                oAuthInputConfiguration = "debitis";
                queryParams = new java.util.HashMap<String, Object>() {{
                    put("sint", "ut");
                    put("numquam", "tenetur");
                    put("adipisci", "libero");
                }};
                redirectUrl = "in";
            }};            

            CompleteDestinationOAuthResponse res = sdk.destinationOauth.completeDestinationOAuth(req);

            if (res.completeOAuthResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDestinationOAuthConsent

Given a destination connector definition ID, return the URL to the consent screen where to redirect the user to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDestinationOAuthConsentResponse;
import org.openapis.openapi.models.shared.DestinationOauthConsentRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DestinationOauthConsentRequest req = new DestinationOauthConsentRequest("56c11f6c-37a5-4126-a438-35bbc05a23a4", "veniam", "cefc5fde-10a0-4ce2-969e-510019c6dc5e") {{
                destinationId = "34762799-bfbb-4e69-89fb-2bb4ecae6c3d";
                oAuthInputConfiguration = "nemo";
            }};            

            GetDestinationOAuthConsentResponse res = sdk.destinationOauth.getDestinationOAuthConsent(req);

            if (res.oAuthConsentRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setInstancewideDestinationOauthParams

Sets instancewide variables to be used for the oauth flow when creating this destination. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetInstancewideDestinationOauthParamsResponse;
import org.openapis.openapi.models.shared.SetInstancewideDestinationOauthParamsRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SetInstancewideDestinationOauthParamsRequestBody req = new SetInstancewideDestinationOauthParamsRequestBody("db3adebd-5dae-4a4c-906a-8aa94c02644c",                 new java.util.HashMap<String, Object>() {{
                                put("nostrum", "officiis");
                                put("unde", "nulla");
                                put("error", "mollitia");
                                put("magnam", "nostrum");
                            }});            

            SetInstancewideDestinationOauthParamsResponse res = sdk.destinationOauth.setInstancewideDestinationOauthParams(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
