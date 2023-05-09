# authorization

### Available Operations

* [generateDeviceAuthorizationCode](#generatedeviceauthorizationcode) - Get a generated device authorization code.

This is the first step in the process of authorizing a device by pin code.
The device will make a request to this endpoint providing a unique identifier
for the device such as a serial number. This endpoint will then return a
generated code which is tied to the given device.

The code may subsequently be used to authorize the device to sign in to an
account via the `/account/devices/authorization` endpoint. Typically this
will be from a page presented in the web app under the account section.

Once authorized, the device will then be able to sign in to that account
via the `/authorization/device` endpoint, without needing to provide the 
credentials of the user.

* [getAccountToken](#getaccounttoken) - Request one or more `Account` level authorization tokens each with a chosen scope.

Tokens are used to access restricted service endpoints. These restricted endpoints
will require a specific token type (e.g Account) with a specific scope (e.g. Catalog)
before access is granted.

For convenience, where a Profile level token with the same scope exists it will also be returned.

Authorization with pin is not supported on this endpoint anymore. Use `/itv/pinauthorization`
endpoint instead.

* [getAccountTokenByCode](#getaccounttokenbycode) - Get Catalog tokens for an account using a device authorization code.
Where a Profile level token of Catalog scope exists it will also be returned.

This is the final step in the process of authorizing a device by pin code.

Firstly the device must request a generated authorization code via the
`/authorization/device/code` endpoint.

The code is subsequently used to authorize the device to sign in to a given
account via the `/account/devices/authorization` endpoint. Typically this
will be from a page presented in the web app under the account section.

Once authorized, this endpoint will allow the device to sign in without
needing to provide the credentials of the user.

* [getProfileToken](#getprofiletoken) - Request one or more `Profile` level authorization tokens each with a chosen scope.

Tokens are used to access restricted service endpoints. These restriced endpoints
will require a specific token type (e.g Profile) with a specific scope (e.g. Catalog)
before access is granted.

* [refreshToken](#refreshtoken) - Refresh an account or profile level authorization token which is marked as refreshable.
* [signOut](#signout) - When a user signs out of an application we need to clear some
basic cookies we assigned them during token authorization.

* [singleSignOn](#singlesignon) - Exchange a third party single-sign-on token for our own authorization tokens.

## generateDeviceAuthorizationCode

Get a generated device authorization code.

This is the first step in the process of authorizing a device by pin code.
The device will make a request to this endpoint providing a unique identifier
for the device such as a serial number. This endpoint will then return a
generated code which is tied to the given device.

The code may subsequently be used to authorize the device to sign in to an
account via the `/account/devices/authorization` endpoint. Typically this
will be from a page presented in the web app under the account section.

Once authorized, the device will then be able to sign in to that account
via the `/authorization/device` endpoint, without needing to provide the 
credentials of the user.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateDeviceAuthorizationCodeRequest;
import org.openapis.openapi.models.operations.GenerateDeviceAuthorizationCodeResponse;
import org.openapis.openapi.models.shared.DeviceRegistrationRequest;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenerateDeviceAuthorizationCodeRequest req = new GenerateDeviceAuthorizationCodeRequest(                new DeviceRegistrationRequest("pariatur", "accusantium", "consequuntur");) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.RPT),
                    add(FeatureFlagsEnum.IDP),
                    add(FeatureFlagsEnum.ALL),
                }};
                lang = "quo";
            }};            

            GenerateDeviceAuthorizationCodeResponse res = sdk.authorization.generateDeviceAuthorizationCode(req);

            if (res.deviceAuthorizationCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountToken

Request one or more `Account` level authorization tokens each with a chosen scope.

Tokens are used to access restricted service endpoints. These restricted endpoints
will require a specific token type (e.g Account) with a specific scope (e.g. Catalog)
before access is granted.

For convenience, where a Profile level token with the same scope exists it will also be returned.

Authorization with pin is not supported on this endpoint anymore. Use `/itv/pinauthorization`
endpoint instead.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountTokenRequest;
import org.openapis.openapi.models.operations.GetAccountTokenResponse;
import org.openapis.openapi.models.shared.AccountTokenRequest;
import org.openapis.openapi.models.shared.AccountTokenRequestCookieTypeEnum;
import org.openapis.openapi.models.shared.AccountTokenRequestScopesEnum;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountTokenRequest req = new GetAccountTokenRequest(                new AccountTokenRequest("illum", "pariatur",                 new org.openapis.openapi.models.shared.AccountTokenRequestScopesEnum[]{{
                                                add(AccountTokenRequestScopesEnum.COMMERCE),
                                                add(AccountTokenRequestScopesEnum.SETTINGS),
                                                add(AccountTokenRequestScopesEnum.CATALOG),
                                                add(AccountTokenRequestScopesEnum.COMMERCE),
                                            }}) {{
                                cookieType = AccountTokenRequestCookieTypeEnum.SESSION;
                            }};) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CD),
                }};
                lang = "quidem";
            }};            

            GetAccountTokenResponse res = sdk.authorization.getAccountToken(req);

            if (res.accessTokens != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountTokenByCode

Get Catalog tokens for an account using a device authorization code.
Where a Profile level token of Catalog scope exists it will also be returned.

This is the final step in the process of authorizing a device by pin code.

Firstly the device must request a generated authorization code via the
`/authorization/device/code` endpoint.

The code is subsequently used to authorize the device to sign in to a given
account via the `/account/devices/authorization` endpoint. Typically this
will be from a page presented in the web app under the account section.

Once authorized, this endpoint will allow the device to sign in without
needing to provide the credentials of the user.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountTokenByCodeRequest;
import org.openapis.openapi.models.operations.GetAccountTokenByCodeResponse;
import org.openapis.openapi.models.shared.AccountTokenByCodeRequest;
import org.openapis.openapi.models.shared.AccountTokenByCodeRequestScopesEnum;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountTokenByCodeRequest req = new GetAccountTokenByCodeRequest(                new AccountTokenByCodeRequest("ipsam", "voluptate",                 new org.openapis.openapi.models.shared.AccountTokenByCodeRequestScopesEnum[]{{
                                                add(AccountTokenByCodeRequestScopesEnum.SETTINGS),
                                                add(AccountTokenByCodeRequestScopesEnum.CATALOG),
                                            }});) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.LDP),
                    add(FeatureFlagsEnum.CD),
                    add(FeatureFlagsEnum.ALL),
                    add(FeatureFlagsEnum.LRL),
                }};
                lang = "amet";
            }};            

            GetAccountTokenByCodeResponse res = sdk.authorization.getAccountTokenByCode(req);

            if (res.accessTokens != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProfileToken

Request one or more `Profile` level authorization tokens each with a chosen scope.

Tokens are used to access restricted service endpoints. These restriced endpoints
will require a specific token type (e.g Profile) with a specific scope (e.g. Catalog)
before access is granted.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProfileTokenRequest;
import org.openapis.openapi.models.operations.GetProfileTokenResponse;
import org.openapis.openapi.models.operations.GetProfileTokenSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.ProfileTokenRequest;
import org.openapis.openapi.models.shared.ProfileTokenRequestCookieTypeEnum;
import org.openapis.openapi.models.shared.ProfileTokenRequestScopesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProfileTokenRequest req = new GetProfileTokenRequest(                new ProfileTokenRequest("aut",                 new org.openapis.openapi.models.shared.ProfileTokenRequestScopesEnum[]{{
                                                add(ProfileTokenRequestScopesEnum.COMMERCE),
                                                add(ProfileTokenRequestScopesEnum.SETTINGS),
                                                add(ProfileTokenRequestScopesEnum.SETTINGS),
                                                add(ProfileTokenRequestScopesEnum.SETTINGS),
                                            }}) {{
                                cookieType = ProfileTokenRequestCookieTypeEnum.SESSION;
                                pin = "quis";
                            }};) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.HB),
                    add(FeatureFlagsEnum.ALL),
                    add(FeatureFlagsEnum.LDP),
                }};
                lang = "nesciunt";
            }};            

            GetProfileTokenResponse res = sdk.authorization.getProfileToken(req, new GetProfileTokenSecurity("eos") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accessTokens != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## refreshToken

Refresh an account or profile level authorization token which is marked as refreshable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RefreshTokenRequest;
import org.openapis.openapi.models.operations.RefreshTokenResponse;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.TokenRefreshRequest;
import org.openapis.openapi.models.shared.TokenRefreshRequestCookieTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RefreshTokenRequest req = new RefreshTokenRequest(                new TokenRefreshRequest("perferendis") {{
                                cookieType = TokenRefreshRequestCookieTypeEnum.SESSION;
                            }};) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.HB),
                    add(FeatureFlagsEnum.IDP),
                    add(FeatureFlagsEnum.LRL),
                    add(FeatureFlagsEnum.LDP),
                }};
                lang = "hic";
            }};            

            RefreshTokenResponse res = sdk.authorization.refreshToken(req);

            if (res.accessToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## signOut

When a user signs out of an application we need to clear some
basic cookies we assigned them during token authorization.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SignOutRequest;
import org.openapis.openapi.models.operations.SignOutResponse;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SignOutRequest req = new SignOutRequest() {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.RPT),
                    add(FeatureFlagsEnum.CAS),
                    add(FeatureFlagsEnum.RPT),
                    add(FeatureFlagsEnum.ALL),
                }};
                lang = "porro";
            }};            

            SignOutResponse res = sdk.authorization.signOut(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## singleSignOn

Exchange a third party single-sign-on token for our own authorization tokens.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SingleSignOnRequest;
import org.openapis.openapi.models.operations.SingleSignOnResponse;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.SingleSignOnRequest;
import org.openapis.openapi.models.shared.SingleSignOnRequestCookieTypeEnum;
import org.openapis.openapi.models.shared.SingleSignOnRequestProviderEnum;
import org.openapis.openapi.models.shared.SingleSignOnRequestScopesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SingleSignOnRequest req = new SingleSignOnRequest(                new SingleSignOnRequest(SingleSignOnRequestProviderEnum.FACEBOOK, "consequuntur") {{
                                cookieType = SingleSignOnRequestCookieTypeEnum.PERSISTENT;
                                linkAccounts = false;
                                scopes = new org.openapis.openapi.models.shared.SingleSignOnRequestScopesEnum[]{{
                                    add(SingleSignOnRequestScopesEnum.CATALOG),
                                    add(SingleSignOnRequestScopesEnum.SETTINGS),
                                    add(SingleSignOnRequestScopesEnum.SETTINGS),
                                }};
                            }};) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CD),
                }};
                lang = "earum";
            }};            

            SingleSignOnResponse res = sdk.authorization.singleSignOn(req);

            if (res.accessTokens != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
