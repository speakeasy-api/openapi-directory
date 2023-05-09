# SDK

## Overview

<p>AWS IAM Identity Center (successor to AWS Single Sign-On) OpenID Connect (OIDC) is a web service that enables a client (such as AWS CLI or a native application) to register with IAM Identity Center. The service also enables the client to fetch the user’s access token upon successful authentication and authorization with IAM Identity Center.</p> <note> <p>Although AWS Single Sign-On was renamed, the <code>sso</code> and <code>identitystore</code> API namespaces will continue to retain their original name for backward compatibility purposes. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed">IAM Identity Center rename</a>.</p> </note> <p> <b>Considerations for Using This Guide</b> </p> <p>Before you begin using this guide, we recommend that you first review the following important information about how the IAM Identity Center OIDC service works.</p> <ul> <li> <p>The IAM Identity Center OIDC service currently implements only the portions of the OAuth 2.0 Device Authorization Grant standard (<a href="https://tools.ietf.org/html/rfc8628">https://tools.ietf.org/html/rfc8628</a>) that are necessary to enable single sign-on authentication with the AWS CLI. Support for other OIDC flows frequently needed for native applications, such as Authorization Code Flow (+ PKCE), will be addressed in future releases.</p> </li> <li> <p>The service emits only OIDC access tokens, such that obtaining a new token (For example, token refresh) requires explicit user re-authentication.</p> </li> <li> <p>The access tokens provided by this service grant access to all AWS account entitlements assigned to an IAM Identity Center user, not just a particular application.</p> </li> <li> <p>The documentation in this guide does not describe the mechanism to convert the access token into AWS Auth (“sigv4”) credentials for use with IAM-protected AWS service endpoints. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/PortalAPIReference/API_GetRoleCredentials.html">GetRoleCredentials</a> in the <i>IAM Identity Center Portal API Reference Guide</i>.</p> </li> </ul> <p>For general information about IAM Identity Center, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">What is IAM Identity Center?</a> in the <i>IAM Identity Center User Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/oidc/>
### Available Operations

* [createToken](#createtoken) - Creates and returns an access token for the authorized client. The access token issued will be used to fetch short-term credentials for the assigned roles in the AWS account.
* [registerClient](#registerclient) - Registers a client with IAM Identity Center. This allows clients to initiate device authorization. The output should be persisted for reuse through many authentication requests.
* [startDeviceAuthorization](#startdeviceauthorization) - Initiates device authorization by requesting a pair of verification codes from the authorization service.

## createToken

Creates and returns an access token for the authorized client. The access token issued will be used to fetch short-term credentials for the assigned roles in the AWS account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTokenRequest;
import org.openapis.openapi.models.operations.CreateTokenRequestBody;
import org.openapis.openapi.models.operations.CreateTokenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTokenRequest req = new CreateTokenRequest(                new CreateTokenRequestBody("molestiae", "minus", "placeat") {{
                                code = "voluptatum";
                                deviceCode = "iusto";
                                redirectUri = "excepturi";
                                refreshToken = "nisi";
                                scope = new String[]{{
                                    add("temporibus"),
                                    add("ab"),
                                    add("quis"),
                                    add("veritatis"),
                                }};
                            }};) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ipsam";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "odit";
            }};            

            CreateTokenResponse res = sdk.sdk.createToken(req);

            if (res.createTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerClient

Registers a client with IAM Identity Center. This allows clients to initiate device authorization. The output should be persisted for reuse through many authentication requests.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterClientRequest;
import org.openapis.openapi.models.operations.RegisterClientRequestBody;
import org.openapis.openapi.models.operations.RegisterClientResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterClientRequest req = new RegisterClientRequest(                new RegisterClientRequestBody("at", "maiores") {{
                                scopes = new String[]{{
                                    add("quod"),
                                    add("quod"),
                                }};
                            }};) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "totam";
                xAmzCredential = "porro";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "officia";
            }};            

            RegisterClientResponse res = sdk.sdk.registerClient(req);

            if (res.registerClientResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startDeviceAuthorization

Initiates device authorization by requesting a pair of verification codes from the authorization service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartDeviceAuthorizationRequest;
import org.openapis.openapi.models.operations.StartDeviceAuthorizationRequestBody;
import org.openapis.openapi.models.operations.StartDeviceAuthorizationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartDeviceAuthorizationRequest req = new StartDeviceAuthorizationRequest(                new StartDeviceAuthorizationRequestBody("fugit", "deleniti", "hic");) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "totam";
                xAmzCredential = "beatae";
                xAmzDate = "commodi";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            StartDeviceAuthorizationResponse res = sdk.sdk.startDeviceAuthorization(req);

            if (res.startDeviceAuthorizationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
