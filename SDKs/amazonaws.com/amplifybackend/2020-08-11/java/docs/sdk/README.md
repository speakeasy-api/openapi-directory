# SDK

## Overview

AWS Amplify Admin API

Amazon Web Services documentation
<https://docs.aws.amazon.com/amplifybackend/>
### Available Operations

* [cloneBackend](#clonebackend) - This operation clones an existing backend.
* [createBackend](#createbackend) - This operation creates a backend for an Amplify app. Backends are automatically created at the time of app creation.
* [createBackendAPI](#createbackendapi) - Creates a new backend API resource.
* [createBackendAuth](#createbackendauth) - Creates a new backend authentication resource.
* [createBackendConfig](#createbackendconfig) - Creates a config object for a backend.
* [createBackendStorage](#createbackendstorage) - Creates a backend storage resource.
* [createToken](#createtoken) - Generates a one-time challenge code to authenticate a user into your Amplify Admin UI.
* [deleteBackend](#deletebackend) - Removes an existing environment from your Amplify project.
* [deleteBackendAPI](#deletebackendapi) - Deletes an existing backend API resource.
* [deleteBackendAuth](#deletebackendauth) - Deletes an existing backend authentication resource.
* [deleteBackendStorage](#deletebackendstorage) - Removes the specified backend storage resource.
* [deleteToken](#deletetoken) - Deletes the challenge token based on the given appId and sessionId.
* [generateBackendAPIModels](#generatebackendapimodels) - Generates a model schema for an existing backend API resource.
* [getBackend](#getbackend) - Provides project-level details for your Amplify UI project.
* [getBackendAPI](#getbackendapi) - Gets the details for a backend API.
* [getBackendAPIModels](#getbackendapimodels) - Gets a model introspection schema for an existing backend API resource.
* [getBackendAuth](#getbackendauth) - Gets a backend auth details.
* [getBackendJob](#getbackendjob) - Returns information about a specific job.
* [getBackendStorage](#getbackendstorage) - Gets details for a backend storage resource.
* [getToken](#gettoken) - Gets the challenge token based on the given appId and sessionId.
* [importBackendAuth](#importbackendauth) - Imports an existing backend authentication resource.
* [importBackendStorage](#importbackendstorage) - Imports an existing backend storage resource.
* [listBackendJobs](#listbackendjobs) - Lists the jobs for the backend of an Amplify app.
* [listS3Buckets](#lists3buckets) - The list of S3 buckets in your account.
* [removeAllBackends](#removeallbackends) - Removes all backend environments from your Amplify project.
* [removeBackendConfig](#removebackendconfig) - Removes the AWS resources required to access the Amplify Admin UI.
* [updateBackendAPI](#updatebackendapi) - Updates an existing backend API resource.
* [updateBackendAuth](#updatebackendauth) - Updates an existing backend authentication resource.
* [updateBackendConfig](#updatebackendconfig) - Updates the AWS resources required to access the Amplify Admin UI.
* [updateBackendJob](#updatebackendjob) - Updates a specific job.
* [updateBackendStorage](#updatebackendstorage) - Updates an existing backend storage resource.

## cloneBackend

This operation clones an existing backend.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloneBackendRequest;
import org.openapis.openapi.models.operations.CloneBackendRequestBody;
import org.openapis.openapi.models.operations.CloneBackendResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CloneBackendRequest req = new CloneBackendRequest(                new CloneBackendRequestBody("iure");, "magnam", "debitis") {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "tempora";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "placeat";
            }};            

            CloneBackendResponse res = sdk.sdk.cloneBackend(req);

            if (res.cloneBackendResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBackend

This operation creates a backend for an Amplify app. Backends are automatically created at the time of app creation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBackendRequest;
import org.openapis.openapi.models.operations.CreateBackendRequestBody;
import org.openapis.openapi.models.operations.CreateBackendResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBackendRequest req = new CreateBackendRequest(                new CreateBackendRequestBody("iusto", "excepturi", "nisi") {{
                                resourceConfig = new java.util.HashMap<String, Object>() {{
                                    put("temporibus", "ab");
                                    put("quis", "veritatis");
                                    put("deserunt", "perferendis");
                                    put("ipsam", "repellendus");
                                }};
                                resourceName = "sapiente";
                            }};) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "odit";
                xAmzCredential = "at";
                xAmzDate = "at";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "quod";
            }};            

            CreateBackendResponse res = sdk.sdk.createBackend(req);

            if (res.createBackendResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBackendAPI

Creates a new backend API resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBackendAPIRequest;
import org.openapis.openapi.models.operations.CreateBackendAPIRequestBody;
import org.openapis.openapi.models.operations.CreateBackendAPIRequestBodyResourceConfig;
import org.openapis.openapi.models.operations.CreateBackendAPIRequestBodyResourceConfigConflictResolution;
import org.openapis.openapi.models.operations.CreateBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnum;
import org.openapis.openapi.models.operations.CreateBackendAPIRequestBodyResourceConfigDefaultAuthType;
import org.openapis.openapi.models.operations.CreateBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnum;
import org.openapis.openapi.models.operations.CreateBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings;
import org.openapis.openapi.models.operations.CreateBackendAPIResponse;
import org.openapis.openapi.models.shared.BackendAPIAuthType;
import org.openapis.openapi.models.shared.BackendAPIAuthTypeModeEnum;
import org.openapis.openapi.models.shared.BackendAPIAuthTypeSettings;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBackendAPIRequest req = new CreateBackendAPIRequest(                new CreateBackendAPIRequestBody("esse",                 new CreateBackendAPIRequestBodyResourceConfig() {{
                                                additionalAuthTypes = new org.openapis.openapi.models.shared.BackendAPIAuthType[]{{
                                                    add(new BackendAPIAuthType() {{
                                                        mode = BackendAPIAuthTypeModeEnum.OPENID_CONNECT;
                                                        settings = new BackendAPIAuthTypeSettings() {{
                                                            cognitoUserPoolId = "dolorum";
                                                            description = "dicta";
                                                            expirationTime = 7206.33;
                                                            openIDAuthTTL = "officia";
                                                            openIDClientID = "occaecati";
                                                            openIDIatTTL = "fugit";
                                                            openIDIssueURL = "deleniti";
                                                            openIDProviderName = "hic";
                                                        }};
                                                    }}),
                                                    add(new BackendAPIAuthType() {{
                                                        mode = BackendAPIAuthTypeModeEnum.OPENID_CONNECT;
                                                        settings = new BackendAPIAuthTypeSettings() {{
                                                            cognitoUserPoolId = "totam";
                                                            description = "beatae";
                                                            expirationTime = 4146.62;
                                                            openIDAuthTTL = "molestiae";
                                                            openIDClientID = "modi";
                                                            openIDIatTTL = "qui";
                                                            openIDIssueURL = "impedit";
                                                            openIDProviderName = "cum";
                                                        }};
                                                    }}),
                                                    add(new BackendAPIAuthType() {{
                                                        mode = BackendAPIAuthTypeModeEnum.AWS_IAM;
                                                        settings = new BackendAPIAuthTypeSettings() {{
                                                            cognitoUserPoolId = "ipsum";
                                                            description = "excepturi";
                                                            expirationTime = 1352.18;
                                                            openIDAuthTTL = "perferendis";
                                                            openIDClientID = "ad";
                                                            openIDIatTTL = "natus";
                                                            openIDIssueURL = "sed";
                                                            openIDProviderName = "iste";
                                                        }};
                                                    }}),
                                                }};
                                                apiName = "dolor";
                                                conflictResolution = new CreateBackendAPIRequestBodyResourceConfigConflictResolution() {{
                                                    resolutionStrategy = CreateBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnum.AUTOMERGE;
                                                }};;
                                                defaultAuthType = new CreateBackendAPIRequestBodyResourceConfigDefaultAuthType() {{
                                                    mode = CreateBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnum.AWS_IAM;
                                                    settings = new CreateBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings() {{
                                                        cognitoUserPoolId = "hic";
                                                        description = "saepe";
                                                        expirationTime = 6818.2;
                                                        openIDAuthTTL = "in";
                                                        openIDClientID = "corporis";
                                                        openIDIatTTL = "iste";
                                                        openIDIssueURL = "iure";
                                                        openIDProviderName = "saepe";
                                                    }};;
                                                }};;
                                                service = "quidem";
                                                transformSchema = "architecto";
                                            }};, "ipsa");, "reiciendis") {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "laborum";
                xAmzDate = "dolores";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "explicabo";
            }};            

            CreateBackendAPIResponse res = sdk.sdk.createBackendAPI(req);

            if (res.createBackendAPIResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBackendAuth

Creates a new backend authentication resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBackendAuthRequest;
import org.openapis.openapi.models.operations.CreateBackendAuthRequestBody;
import org.openapis.openapi.models.operations.CreateBackendAuthRequestBodyResourceConfig;
import org.openapis.openapi.models.operations.CreateBackendAuthRequestBodyResourceConfigAuthResourcesEnum;
import org.openapis.openapi.models.operations.CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs;
import org.openapis.openapi.models.operations.CreateBackendAuthRequestBodyResourceConfigServiceEnum;
import org.openapis.openapi.models.operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs;
import org.openapis.openapi.models.operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword;
import org.openapis.openapi.models.operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordDeliveryMethodEnum;
import org.openapis.openapi.models.operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings;
import org.openapis.openapi.models.operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings;
import org.openapis.openapi.models.operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa;
import org.openapis.openapi.models.operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings;
import org.openapis.openapi.models.operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth;
import org.openapis.openapi.models.operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthOAuthGrantTypeEnum;
import org.openapis.openapi.models.operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings;
import org.openapis.openapi.models.operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy;
import org.openapis.openapi.models.operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsSignInMethodEnum;
import org.openapis.openapi.models.operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessage;
import org.openapis.openapi.models.operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageDeliveryMethodEnum;
import org.openapis.openapi.models.operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageEmailSettings;
import org.openapis.openapi.models.operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageSmsSettings;
import org.openapis.openapi.models.operations.CreateBackendAuthResponse;
import org.openapis.openapi.models.shared.AdditionalConstraintsElementEnum;
import org.openapis.openapi.models.shared.BackendAuthAppleProviderConfig;
import org.openapis.openapi.models.shared.BackendAuthSocialProviderConfig;
import org.openapis.openapi.models.shared.MFAModeEnum;
import org.openapis.openapi.models.shared.MfaTypesElementEnum;
import org.openapis.openapi.models.shared.OAuthScopesElementEnum;
import org.openapis.openapi.models.shared.RequiredSignUpAttributesElementEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBackendAuthRequest req = new CreateBackendAuthRequest(                new CreateBackendAuthRequestBody("enim",                 new CreateBackendAuthRequestBodyResourceConfig() {{
                                                authResources = CreateBackendAuthRequestBodyResourceConfigAuthResourcesEnum.IDENTITY_POOL_AND_USER_POOL;
                                                identityPoolConfigs = new CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs("nemo", false);;
                                                service = CreateBackendAuthRequestBodyResourceConfigServiceEnum.COGNITO;
                                                userPoolConfigs = new CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs(                new org.openapis.openapi.models.shared.RequiredSignUpAttributesElementEnum[]{{
                                                                    add(RequiredSignUpAttributesElementEnum.NICKNAME),
                                                                    add(RequiredSignUpAttributesElementEnum.ADDRESS),
                                                                }}, CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsSignInMethodEnum.EMAIL_AND_PHONE_NUMBER, "culpa") {{
                                                    forgotPassword = new CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword(CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordDeliveryMethodEnum.SMS) {{
                                                        emailSettings = new CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings() {{
                                                            emailMessage = "sapiente";
                                                            emailSubject = "architecto";
                                                        }};;
                                                        smsSettings = new CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings() {{
                                                            smsMessage = "mollitia";
                                                        }};;
                                                    }};;
                                                    mfa = new CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa(MFAModeEnum.ON) {{
                                                        settings = new CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings() {{
                                                            mfaTypes = new org.openapis.openapi.models.shared.MfaTypesElementEnum[]{{
                                                                add(MfaTypesElementEnum.SMS),
                                                                add(MfaTypesElementEnum.TOTP),
                                                                add(MfaTypesElementEnum.TOTP),
                                                            }};
                                                            smsMessage = "occaecati";
                                                        }};;
                                                    }};;
                                                    oAuth = new CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth(CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthOAuthGrantTypeEnum.CODE,                 new org.openapis.openapi.models.shared.OAuthScopesElementEnum[]{{
                                                                        add(OAuthScopesElementEnum.OPENID),
                                                                        add(OAuthScopesElementEnum.OPENID),
                                                                    }},                 new String[]{{
                                                                        add("error"),
                                                                    }},                 new String[]{{
                                                                        add("quis"),
                                                                    }}) {{
                                                        domainPrefix = "vitae";
                                                        socialProviderSettings = new CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings() {{
                                                            facebook = new BackendAuthSocialProviderConfig() {{
                                                                clientId = "laborum";
                                                                clientSecret = "animi";
                                                            }};;
                                                            google = new BackendAuthSocialProviderConfig() {{
                                                                clientId = "enim";
                                                                clientSecret = "odit";
                                                            }};;
                                                            loginWithAmazon = new BackendAuthSocialProviderConfig() {{
                                                                clientId = "quo";
                                                                clientSecret = "sequi";
                                                            }};;
                                                            signInWithApple = new BackendAuthAppleProviderConfig() {{
                                                                clientId = "tenetur";
                                                                keyId = "ipsam";
                                                                privateKey = "id";
                                                                teamId = "possimus";
                                                            }};;
                                                        }};;
                                                    }};;
                                                    passwordPolicy = new CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy(135.71) {{
                                                        additionalConstraints = new org.openapis.openapi.models.shared.AdditionalConstraintsElementEnum[]{{
                                                            add(AdditionalConstraintsElementEnum.REQUIRE_SYMBOL),
                                                        }};
                                                    }};;
                                                    verificationMessage = new CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessage(CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageDeliveryMethodEnum.SMS) {{
                                                        emailSettings = new CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageEmailSettings() {{
                                                            emailMessage = "laborum";
                                                            emailSubject = "quasi";
                                                        }};;
                                                        smsSettings = new CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageSmsSettings() {{
                                                            smsMessage = "reiciendis";
                                                        }};;
                                                    }};;
                                                }};;
                                            }};, "voluptatibus");, "vero") {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "voluptatibus";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "cum";
            }};            

            CreateBackendAuthResponse res = sdk.sdk.createBackendAuth(req);

            if (res.createBackendAuthResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBackendConfig

Creates a config object for a backend.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBackendConfigRequest;
import org.openapis.openapi.models.operations.CreateBackendConfigRequestBody;
import org.openapis.openapi.models.operations.CreateBackendConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBackendConfigRequest req = new CreateBackendConfigRequest(                new CreateBackendConfigRequestBody() {{
                                backendManagerAppId = "doloremque";
                            }};, "reprehenderit") {{
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "dicta";
                xAmzDate = "corporis";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "dicta";
            }};            

            CreateBackendConfigResponse res = sdk.sdk.createBackendConfig(req);

            if (res.createBackendConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBackendStorage

Creates a backend storage resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBackendStorageRequest;
import org.openapis.openapi.models.operations.CreateBackendStorageRequestBody;
import org.openapis.openapi.models.operations.CreateBackendStorageRequestBodyResourceConfig;
import org.openapis.openapi.models.operations.CreateBackendStorageRequestBodyResourceConfigPermissions;
import org.openapis.openapi.models.operations.CreateBackendStorageRequestBodyResourceConfigServiceNameEnum;
import org.openapis.openapi.models.operations.CreateBackendStorageResponse;
import org.openapis.openapi.models.shared.AuthenticatedElementEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UnAuthenticatedElementEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBackendStorageRequest req = new CreateBackendStorageRequest(                new CreateBackendStorageRequestBody("enim",                 new CreateBackendStorageRequestBodyResourceConfig() {{
                                                bucketName = "accusamus";
                                                permissions = new CreateBackendStorageRequestBodyResourceConfigPermissions(                new org.openapis.openapi.models.shared.AuthenticatedElementEnum[]{{
                                                                    add(AuthenticatedElementEnum.DELETE),
                                                                    add(AuthenticatedElementEnum.READ),
                                                                }}) {{
                                                    unAuthenticated = new org.openapis.openapi.models.shared.UnAuthenticatedElementEnum[]{{
                                                        add(UnAuthenticatedElementEnum.DELETE),
                                                    }};
                                                }};;
                                                serviceName = CreateBackendStorageRequestBodyResourceConfigServiceNameEnum.S3;
                                            }};, "molestias");, "excepturi") {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "modi";
                xAmzCredential = "praesentium";
                xAmzDate = "rem";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "repudiandae";
            }};            

            CreateBackendStorageResponse res = sdk.sdk.createBackendStorage(req);

            if (res.createBackendStorageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createToken

Generates a one-time challenge code to authenticate a user into your Amplify Admin UI.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTokenRequest;
import org.openapis.openapi.models.operations.CreateTokenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTokenRequest req = new CreateTokenRequest("veritatis") {{
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "enim";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "explicabo";
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

## deleteBackend

Removes an existing environment from your Amplify project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBackendRequest;
import org.openapis.openapi.models.operations.DeleteBackendResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteBackendRequest req = new DeleteBackendRequest("distinctio", "quibusdam") {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "perferendis";
            }};            

            DeleteBackendResponse res = sdk.sdk.deleteBackend(req);

            if (res.deleteBackendResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBackendAPI

Deletes an existing backend API resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBackendAPIRequest;
import org.openapis.openapi.models.operations.DeleteBackendAPIRequestBody;
import org.openapis.openapi.models.operations.DeleteBackendAPIRequestBodyResourceConfig;
import org.openapis.openapi.models.operations.DeleteBackendAPIRequestBodyResourceConfigConflictResolution;
import org.openapis.openapi.models.operations.DeleteBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnum;
import org.openapis.openapi.models.operations.DeleteBackendAPIRequestBodyResourceConfigDefaultAuthType;
import org.openapis.openapi.models.operations.DeleteBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnum;
import org.openapis.openapi.models.operations.DeleteBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings;
import org.openapis.openapi.models.operations.DeleteBackendAPIResponse;
import org.openapis.openapi.models.shared.BackendAPIAuthType;
import org.openapis.openapi.models.shared.BackendAPIAuthTypeModeEnum;
import org.openapis.openapi.models.shared.BackendAPIAuthTypeSettings;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteBackendAPIRequest req = new DeleteBackendAPIRequest(                new DeleteBackendAPIRequestBody("assumenda") {{
                                resourceConfig = new DeleteBackendAPIRequestBodyResourceConfig() {{
                                    additionalAuthTypes = new org.openapis.openapi.models.shared.BackendAPIAuthType[]{{
                                        add(new BackendAPIAuthType() {{
                                            mode = BackendAPIAuthTypeModeEnum.API_KEY;
                                            settings = new BackendAPIAuthTypeSettings() {{
                                                cognitoUserPoolId = "fugit";
                                                description = "dolorum";
                                                expirationTime = 5696.18;
                                                openIDAuthTTL = "tempora";
                                                openIDClientID = "facilis";
                                                openIDIatTTL = "tempore";
                                                openIDIssueURL = "labore";
                                                openIDProviderName = "delectus";
                                            }};
                                        }}),
                                        add(new BackendAPIAuthType() {{
                                            mode = BackendAPIAuthTypeModeEnum.AWS_IAM;
                                            settings = new BackendAPIAuthTypeSettings() {{
                                                cognitoUserPoolId = "non";
                                                description = "eligendi";
                                                expirationTime = 5761.57;
                                                openIDAuthTTL = "aliquid";
                                                openIDClientID = "provident";
                                                openIDIatTTL = "necessitatibus";
                                                openIDIssueURL = "sint";
                                                openIDProviderName = "officia";
                                            }};
                                        }}),
                                    }};
                                    apiName = "dolor";
                                    conflictResolution = new DeleteBackendAPIRequestBodyResourceConfigConflictResolution() {{
                                        resolutionStrategy = DeleteBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnum.NONE;
                                    }};;
                                    defaultAuthType = new DeleteBackendAPIRequestBodyResourceConfigDefaultAuthType() {{
                                        mode = DeleteBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnum.OPENID_CONNECT;
                                        settings = new DeleteBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings() {{
                                            cognitoUserPoolId = "dolorum";
                                            description = "in";
                                            expirationTime = 4491.98;
                                            openIDAuthTTL = "illum";
                                            openIDClientID = "maiores";
                                            openIDIatTTL = "rerum";
                                            openIDIssueURL = "dicta";
                                            openIDProviderName = "magnam";
                                        }};;
                                    }};;
                                    service = "cumque";
                                    transformSchema = "facere";
                                }};;
                            }};, "ea", "aliquid") {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "non";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "enim";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "delectus";
            }};            

            DeleteBackendAPIResponse res = sdk.sdk.deleteBackendAPI(req);

            if (res.deleteBackendAPIResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBackendAuth

Deletes an existing backend authentication resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBackendAuthRequest;
import org.openapis.openapi.models.operations.DeleteBackendAuthRequestBody;
import org.openapis.openapi.models.operations.DeleteBackendAuthResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteBackendAuthRequest req = new DeleteBackendAuthRequest(                new DeleteBackendAuthRequestBody("provident");, "nam", "id") {{
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "sapiente";
                xAmzDate = "amet";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "vel";
            }};            

            DeleteBackendAuthResponse res = sdk.sdk.deleteBackendAuth(req);

            if (res.deleteBackendAuthResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBackendStorage

Removes the specified backend storage resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBackendStorageRequest;
import org.openapis.openapi.models.operations.DeleteBackendStorageRequestBody;
import org.openapis.openapi.models.operations.DeleteBackendStorageRequestBodyServiceNameEnum;
import org.openapis.openapi.models.operations.DeleteBackendStorageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteBackendStorageRequest req = new DeleteBackendStorageRequest(                new DeleteBackendStorageRequestBody("omnis", DeleteBackendStorageRequestBodyServiceNameEnum.S3);, "molestiae", "perferendis") {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "distinctio";
                xAmzDate = "id";
                xAmzSecurityToken = "labore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "suscipit";
            }};            

            DeleteBackendStorageResponse res = sdk.sdk.deleteBackendStorage(req);

            if (res.deleteBackendStorageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteToken

Deletes the challenge token based on the given appId and sessionId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTokenRequest;
import org.openapis.openapi.models.operations.DeleteTokenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTokenRequest req = new DeleteTokenRequest("nobis", "eum") {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "architecto";
                xAmzDate = "magnam";
                xAmzSecurityToken = "et";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "ullam";
            }};            

            DeleteTokenResponse res = sdk.sdk.deleteToken(req);

            if (res.deleteTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generateBackendAPIModels

Generates a model schema for an existing backend API resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateBackendAPIModelsRequest;
import org.openapis.openapi.models.operations.GenerateBackendAPIModelsRequestBody;
import org.openapis.openapi.models.operations.GenerateBackendAPIModelsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GenerateBackendAPIModelsRequest req = new GenerateBackendAPIModelsRequest(                new GenerateBackendAPIModelsRequestBody("quos");, "sint", "accusantium") {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "mollitia";
                xAmzDate = "ad";
                xAmzSecurityToken = "eum";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            GenerateBackendAPIModelsResponse res = sdk.sdk.generateBackendAPIModels(req);

            if (res.generateBackendAPIModelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBackend

Provides project-level details for your Amplify UI project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBackendRequest;
import org.openapis.openapi.models.operations.GetBackendRequestBody;
import org.openapis.openapi.models.operations.GetBackendResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBackendRequest req = new GetBackendRequest(                new GetBackendRequestBody() {{
                                backendEnvironmentName = "nemo";
                            }};, "quasi") {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "debitis";
                xAmzDate = "eius";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "facilis";
            }};            

            GetBackendResponse res = sdk.sdk.getBackend(req);

            if (res.getBackendResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBackendAPI

Gets the details for a backend API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBackendAPIRequest;
import org.openapis.openapi.models.operations.GetBackendAPIRequestBody;
import org.openapis.openapi.models.operations.GetBackendAPIRequestBodyResourceConfig;
import org.openapis.openapi.models.operations.GetBackendAPIRequestBodyResourceConfigConflictResolution;
import org.openapis.openapi.models.operations.GetBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnum;
import org.openapis.openapi.models.operations.GetBackendAPIRequestBodyResourceConfigDefaultAuthType;
import org.openapis.openapi.models.operations.GetBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnum;
import org.openapis.openapi.models.operations.GetBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings;
import org.openapis.openapi.models.operations.GetBackendAPIResponse;
import org.openapis.openapi.models.shared.BackendAPIAuthType;
import org.openapis.openapi.models.shared.BackendAPIAuthTypeModeEnum;
import org.openapis.openapi.models.shared.BackendAPIAuthTypeSettings;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBackendAPIRequest req = new GetBackendAPIRequest(                new GetBackendAPIRequestBody("architecto") {{
                                resourceConfig = new GetBackendAPIRequestBodyResourceConfig() {{
                                    additionalAuthTypes = new org.openapis.openapi.models.shared.BackendAPIAuthType[]{{
                                        add(new BackendAPIAuthType() {{
                                            mode = BackendAPIAuthTypeModeEnum.OPENID_CONNECT;
                                            settings = new BackendAPIAuthTypeSettings() {{
                                                cognitoUserPoolId = "ullam";
                                                description = "expedita";
                                                expirationTime = 4692.49;
                                                openIDAuthTTL = "repellat";
                                                openIDClientID = "quibusdam";
                                                openIDIatTTL = "sed";
                                                openIDIssueURL = "saepe";
                                                openIDProviderName = "pariatur";
                                            }};
                                        }}),
                                    }};
                                    apiName = "accusantium";
                                    conflictResolution = new GetBackendAPIRequestBodyResourceConfigConflictResolution() {{
                                        resolutionStrategy = GetBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnum.OPTIMISTIC_CONCURRENCY;
                                    }};;
                                    defaultAuthType = new GetBackendAPIRequestBodyResourceConfigDefaultAuthType() {{
                                        mode = GetBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnum.AMAZON_COGNITO_USER_POOLS;
                                        settings = new GetBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings() {{
                                            cognitoUserPoolId = "natus";
                                            description = "magni";
                                            expirationTime = 1238.2;
                                            openIDAuthTTL = "quo";
                                            openIDClientID = "illum";
                                            openIDIatTTL = "pariatur";
                                            openIDIssueURL = "maxime";
                                            openIDProviderName = "ea";
                                        }};;
                                    }};;
                                    service = "excepturi";
                                    transformSchema = "odit";
                                }};;
                            }};, "ea", "accusantium") {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "quidem";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "nam";
            }};            

            GetBackendAPIResponse res = sdk.sdk.getBackendAPI(req);

            if (res.getBackendAPIResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBackendAPIModels

Gets a model introspection schema for an existing backend API resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBackendAPIModelsRequest;
import org.openapis.openapi.models.operations.GetBackendAPIModelsRequestBody;
import org.openapis.openapi.models.operations.GetBackendAPIModelsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBackendAPIModelsRequest req = new GetBackendAPIModelsRequest(                new GetBackendAPIModelsRequestBody("pariatur");, "nemo", "voluptatibus") {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "amet";
                xAmzDate = "aut";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "hic";
            }};            

            GetBackendAPIModelsResponse res = sdk.sdk.getBackendAPIModels(req);

            if (res.getBackendAPIModelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBackendAuth

Gets a backend auth details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBackendAuthRequest;
import org.openapis.openapi.models.operations.GetBackendAuthRequestBody;
import org.openapis.openapi.models.operations.GetBackendAuthResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBackendAuthRequest req = new GetBackendAuthRequest(                new GetBackendAuthRequestBody("nobis");, "dolores", "quis") {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "eaque";
                xAmzDate = "quis";
                xAmzSecurityToken = "nesciunt";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "perferendis";
            }};            

            GetBackendAuthResponse res = sdk.sdk.getBackendAuth(req);

            if (res.getBackendAuthResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBackendJob

Returns information about a specific job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBackendJobRequest;
import org.openapis.openapi.models.operations.GetBackendJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBackendJobRequest req = new GetBackendJobRequest("minus", "quam", "dolor") {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "hic";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "perspiciatis";
            }};            

            GetBackendJobResponse res = sdk.sdk.getBackendJob(req);

            if (res.getBackendJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBackendStorage

Gets details for a backend storage resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBackendStorageRequest;
import org.openapis.openapi.models.operations.GetBackendStorageRequestBody;
import org.openapis.openapi.models.operations.GetBackendStorageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBackendStorageRequest req = new GetBackendStorageRequest(                new GetBackendStorageRequestBody("porro");, "consequuntur", "blanditiis") {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "occaecati";
                xAmzDate = "rerum";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "earum";
            }};            

            GetBackendStorageResponse res = sdk.sdk.getBackendStorage(req);

            if (res.getBackendStorageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getToken

Gets the challenge token based on the given appId and sessionId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTokenRequest;
import org.openapis.openapi.models.operations.GetTokenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTokenRequest req = new GetTokenRequest("iste", "dolorum") {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "provident";
                xAmzDate = "nobis";
                xAmzSecurityToken = "libero";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "quaerat";
            }};            

            GetTokenResponse res = sdk.sdk.getToken(req);

            if (res.getTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importBackendAuth

Imports an existing backend authentication resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportBackendAuthRequest;
import org.openapis.openapi.models.operations.ImportBackendAuthRequestBody;
import org.openapis.openapi.models.operations.ImportBackendAuthResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportBackendAuthRequest req = new ImportBackendAuthRequest(                new ImportBackendAuthRequestBody("aliquid", "dolorem", "dolorem") {{
                                identityPoolId = "dolor";
                            }};, "qui", "ipsum") {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "cum";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "amet";
            }};            

            ImportBackendAuthResponse res = sdk.sdk.importBackendAuth(req);

            if (res.importBackendAuthResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importBackendStorage

Imports an existing backend storage resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportBackendStorageRequest;
import org.openapis.openapi.models.operations.ImportBackendStorageRequestBody;
import org.openapis.openapi.models.operations.ImportBackendStorageRequestBodyServiceNameEnum;
import org.openapis.openapi.models.operations.ImportBackendStorageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportBackendStorageRequest req = new ImportBackendStorageRequest(                new ImportBackendStorageRequestBody(ImportBackendStorageRequestBodyServiceNameEnum.S3) {{
                                bucketName = "numquam";
                            }};, "veritatis", "ipsa") {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "iure";
                xAmzCredential = "odio";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            ImportBackendStorageResponse res = sdk.sdk.importBackendStorage(req);

            if (res.importBackendStorageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBackendJobs

Lists the jobs for the backend of an Amplify app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBackendJobsRequest;
import org.openapis.openapi.models.operations.ListBackendJobsRequestBody;
import org.openapis.openapi.models.operations.ListBackendJobsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBackendJobsRequest req = new ListBackendJobsRequest(                new ListBackendJobsRequestBody() {{
                                jobId = "natus";
                                maxResults = 179603L;
                                nextToken = "atque";
                                operation = "sit";
                                status = "fugiat";
                            }};, "ab", "soluta") {{
                maxResults = "dolorum";
                nextToken = "iusto";
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "deleniti";
                xAmzDate = "omnis";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "asperiores";
            }};            

            ListBackendJobsResponse res = sdk.sdk.listBackendJobs(req);

            if (res.listBackendJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listS3Buckets

The list of S3 buckets in your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListS3BucketsRequest;
import org.openapis.openapi.models.operations.ListS3BucketsRequestBody;
import org.openapis.openapi.models.operations.ListS3BucketsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListS3BucketsRequest req = new ListS3BucketsRequest(                new ListS3BucketsRequestBody() {{
                                nextToken = "ipsum";
                            }};) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "id";
                xAmzCredential = "saepe";
                xAmzDate = "eius";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "amet";
            }};            

            ListS3BucketsResponse res = sdk.sdk.listS3Buckets(req);

            if (res.listS3BucketsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeAllBackends

Removes all backend environments from your Amplify project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveAllBackendsRequest;
import org.openapis.openapi.models.operations.RemoveAllBackendsRequestBody;
import org.openapis.openapi.models.operations.RemoveAllBackendsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveAllBackendsRequest req = new RemoveAllBackendsRequest(                new RemoveAllBackendsRequestBody() {{
                                cleanAmplifyApp = false;
                            }};, "accusamus") {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "suscipit";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "provident";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "repellendus";
            }};            

            RemoveAllBackendsResponse res = sdk.sdk.removeAllBackends(req);

            if (res.removeAllBackendsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeBackendConfig

Removes the AWS resources required to access the Amplify Admin UI.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveBackendConfigRequest;
import org.openapis.openapi.models.operations.RemoveBackendConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveBackendConfigRequest req = new RemoveBackendConfigRequest("similique") {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "at";
                xAmzCredential = "quaerat";
                xAmzDate = "tempora";
                xAmzSecurityToken = "vel";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "officiis";
            }};            

            RemoveBackendConfigResponse res = sdk.sdk.removeBackendConfig(req);

            if (res.removeBackendConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBackendAPI

Updates an existing backend API resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBackendAPIRequest;
import org.openapis.openapi.models.operations.UpdateBackendAPIRequestBody;
import org.openapis.openapi.models.operations.UpdateBackendAPIRequestBodyResourceConfig;
import org.openapis.openapi.models.operations.UpdateBackendAPIRequestBodyResourceConfigConflictResolution;
import org.openapis.openapi.models.operations.UpdateBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnum;
import org.openapis.openapi.models.operations.UpdateBackendAPIRequestBodyResourceConfigDefaultAuthType;
import org.openapis.openapi.models.operations.UpdateBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnum;
import org.openapis.openapi.models.operations.UpdateBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings;
import org.openapis.openapi.models.operations.UpdateBackendAPIResponse;
import org.openapis.openapi.models.shared.BackendAPIAuthType;
import org.openapis.openapi.models.shared.BackendAPIAuthTypeModeEnum;
import org.openapis.openapi.models.shared.BackendAPIAuthTypeSettings;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateBackendAPIRequest req = new UpdateBackendAPIRequest(                new UpdateBackendAPIRequestBody("dolorum") {{
                                resourceConfig = new UpdateBackendAPIRequestBodyResourceConfig() {{
                                    additionalAuthTypes = new org.openapis.openapi.models.shared.BackendAPIAuthType[]{{
                                        add(new BackendAPIAuthType() {{
                                            mode = BackendAPIAuthTypeModeEnum.AWS_IAM;
                                            settings = new BackendAPIAuthTypeSettings() {{
                                                cognitoUserPoolId = "harum";
                                                description = "iusto";
                                                expirationTime = 2155.07;
                                                openIDAuthTTL = "quisquam";
                                                openIDClientID = "tenetur";
                                                openIDIatTTL = "amet";
                                                openIDIssueURL = "tempore";
                                                openIDProviderName = "accusamus";
                                            }};
                                        }}),
                                        add(new BackendAPIAuthType() {{
                                            mode = BackendAPIAuthTypeModeEnum.AWS_IAM;
                                            settings = new BackendAPIAuthTypeSettings() {{
                                                cognitoUserPoolId = "enim";
                                                description = "dolorem";
                                                expirationTime = 9574.51;
                                                openIDAuthTTL = "totam";
                                                openIDClientID = "nihil";
                                                openIDIatTTL = "sit";
                                                openIDIssueURL = "expedita";
                                                openIDProviderName = "neque";
                                            }};
                                        }}),
                                        add(new BackendAPIAuthType() {{
                                            mode = BackendAPIAuthTypeModeEnum.API_KEY;
                                            settings = new BackendAPIAuthTypeSettings() {{
                                                cognitoUserPoolId = "vel";
                                                description = "libero";
                                                expirationTime = 3741.7;
                                                openIDAuthTTL = "deserunt";
                                                openIDClientID = "quam";
                                                openIDIatTTL = "ipsum";
                                                openIDIssueURL = "incidunt";
                                                openIDProviderName = "qui";
                                            }};
                                        }}),
                                        add(new BackendAPIAuthType() {{
                                            mode = BackendAPIAuthTypeModeEnum.AMAZON_COGNITO_USER_POOLS;
                                            settings = new BackendAPIAuthTypeSettings() {{
                                                cognitoUserPoolId = "maxime";
                                                description = "pariatur";
                                                expirationTime = 7470.8;
                                                openIDAuthTTL = "dicta";
                                                openIDClientID = "laborum";
                                                openIDIatTTL = "totam";
                                                openIDIssueURL = "incidunt";
                                                openIDProviderName = "aspernatur";
                                            }};
                                        }}),
                                    }};
                                    apiName = "dolores";
                                    conflictResolution = new UpdateBackendAPIRequestBodyResourceConfigConflictResolution() {{
                                        resolutionStrategy = UpdateBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnum.AUTOMERGE;
                                    }};;
                                    defaultAuthType = new UpdateBackendAPIRequestBodyResourceConfigDefaultAuthType() {{
                                        mode = UpdateBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnum.AMAZON_COGNITO_USER_POOLS;
                                        settings = new UpdateBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings() {{
                                            cognitoUserPoolId = "aliquid";
                                            description = "quam";
                                            expirationTime = 5654.21;
                                            openIDAuthTTL = "temporibus";
                                            openIDClientID = "qui";
                                            openIDIatTTL = "neque";
                                            openIDIssueURL = "fugit";
                                            openIDProviderName = "magni";
                                        }};;
                                    }};;
                                    service = "odio";
                                    transformSchema = "sunt";
                                }};;
                            }};, "ullam", "nam") {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "cumque";
                xAmzDate = "soluta";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "et";
                xAmzSignedHeaders = "saepe";
            }};            

            UpdateBackendAPIResponse res = sdk.sdk.updateBackendAPI(req);

            if (res.updateBackendAPIResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBackendAuth

Updates an existing backend authentication resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBackendAuthRequest;
import org.openapis.openapi.models.operations.UpdateBackendAuthRequestBody;
import org.openapis.openapi.models.operations.UpdateBackendAuthRequestBodyResourceConfig;
import org.openapis.openapi.models.operations.UpdateBackendAuthRequestBodyResourceConfigAuthResourcesEnum;
import org.openapis.openapi.models.operations.UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs;
import org.openapis.openapi.models.operations.UpdateBackendAuthRequestBodyResourceConfigServiceEnum;
import org.openapis.openapi.models.operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs;
import org.openapis.openapi.models.operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword;
import org.openapis.openapi.models.operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordDeliveryMethodEnum;
import org.openapis.openapi.models.operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings;
import org.openapis.openapi.models.operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings;
import org.openapis.openapi.models.operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa;
import org.openapis.openapi.models.operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings;
import org.openapis.openapi.models.operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth;
import org.openapis.openapi.models.operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthOAuthGrantTypeEnum;
import org.openapis.openapi.models.operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings;
import org.openapis.openapi.models.operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy;
import org.openapis.openapi.models.operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessage;
import org.openapis.openapi.models.operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageDeliveryMethodEnum;
import org.openapis.openapi.models.operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageEmailSettings;
import org.openapis.openapi.models.operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageSmsSettings;
import org.openapis.openapi.models.operations.UpdateBackendAuthResponse;
import org.openapis.openapi.models.shared.AdditionalConstraintsElementEnum;
import org.openapis.openapi.models.shared.BackendAuthAppleProviderConfig;
import org.openapis.openapi.models.shared.BackendAuthSocialProviderConfig;
import org.openapis.openapi.models.shared.MFAModeEnum;
import org.openapis.openapi.models.shared.MfaTypesElementEnum;
import org.openapis.openapi.models.shared.OAuthScopesElementEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateBackendAuthRequest req = new UpdateBackendAuthRequest(                new UpdateBackendAuthRequestBody(                new UpdateBackendAuthRequestBodyResourceConfig() {{
                                                authResources = UpdateBackendAuthRequestBodyResourceConfigAuthResourcesEnum.USER_POOL_ONLY;
                                                identityPoolConfigs = new UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs() {{
                                                    unauthenticatedLogin = false;
                                                }};;
                                                service = UpdateBackendAuthRequestBodyResourceConfigServiceEnum.COGNITO;
                                                userPoolConfigs = new UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs() {{
                                                    forgotPassword = new UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword() {{
                                                        deliveryMethod = UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordDeliveryMethodEnum.SMS;
                                                        emailSettings = new UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings() {{
                                                            emailMessage = "quos";
                                                            emailSubject = "tempore";
                                                        }};;
                                                        smsSettings = new UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings() {{
                                                            smsMessage = "cupiditate";
                                                        }};;
                                                    }};;
                                                    mfa = new UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa() {{
                                                        mfaMode = MFAModeEnum.ON;
                                                        settings = new UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings() {{
                                                            mfaTypes = new org.openapis.openapi.models.shared.MfaTypesElementEnum[]{{
                                                                add(MfaTypesElementEnum.SMS),
                                                                add(MfaTypesElementEnum.SMS),
                                                                add(MfaTypesElementEnum.SMS),
                                                                add(MfaTypesElementEnum.SMS),
                                                            }};
                                                            smsMessage = "dolorum";
                                                        }};;
                                                    }};;
                                                    oAuth = new UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth() {{
                                                        domainPrefix = "architecto";
                                                        oAuthGrantType = UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthOAuthGrantTypeEnum.CODE;
                                                        oAuthScopes = new org.openapis.openapi.models.shared.OAuthScopesElementEnum[]{{
                                                            add(OAuthScopesElementEnum.OPENID),
                                                        }};
                                                        redirectSignInURIs = new String[]{{
                                                            add("consequatur"),
                                                            add("est"),
                                                            add("repellendus"),
                                                            add("porro"),
                                                        }};
                                                        redirectSignOutURIs = new String[]{{
                                                            add("ut"),
                                                            add("facilis"),
                                                            add("cupiditate"),
                                                            add("qui"),
                                                        }};
                                                        socialProviderSettings = new UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings() {{
                                                            facebook = new BackendAuthSocialProviderConfig() {{
                                                                clientId = "quae";
                                                                clientSecret = "laudantium";
                                                            }};;
                                                            google = new BackendAuthSocialProviderConfig() {{
                                                                clientId = "odio";
                                                                clientSecret = "occaecati";
                                                            }};;
                                                            loginWithAmazon = new BackendAuthSocialProviderConfig() {{
                                                                clientId = "voluptatibus";
                                                                clientSecret = "quisquam";
                                                            }};;
                                                            signInWithApple = new BackendAuthAppleProviderConfig() {{
                                                                clientId = "vero";
                                                                keyId = "omnis";
                                                                privateKey = "quis";
                                                                teamId = "ipsum";
                                                            }};;
                                                        }};;
                                                    }};;
                                                    passwordPolicy = new UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy() {{
                                                        additionalConstraints = new org.openapis.openapi.models.shared.AdditionalConstraintsElementEnum[]{{
                                                            add(AdditionalConstraintsElementEnum.REQUIRE_LOWERCASE),
                                                            add(AdditionalConstraintsElementEnum.REQUIRE_DIGIT),
                                                            add(AdditionalConstraintsElementEnum.REQUIRE_UPPERCASE),
                                                            add(AdditionalConstraintsElementEnum.REQUIRE_UPPERCASE),
                                                        }};
                                                        minimumLength = 4922.68;
                                                    }};;
                                                    verificationMessage = new UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessage(UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageDeliveryMethodEnum.SMS) {{
                                                        emailSettings = new UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageEmailSettings() {{
                                                            emailMessage = "distinctio";
                                                            emailSubject = "quod";
                                                        }};;
                                                        smsSettings = new UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageSmsSettings() {{
                                                            smsMessage = "odio";
                                                        }};;
                                                    }};;
                                                }};;
                                            }};, "similique");, "facilis", "vero") {{
                xAmzAlgorithm = "ducimus";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "quibusdam";
                xAmzDate = "illum";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "impedit";
            }};            

            UpdateBackendAuthResponse res = sdk.sdk.updateBackendAuth(req);

            if (res.updateBackendAuthResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBackendConfig

Updates the AWS resources required to access the Amplify Admin UI.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBackendConfigRequest;
import org.openapis.openapi.models.operations.UpdateBackendConfigRequestBody;
import org.openapis.openapi.models.operations.UpdateBackendConfigRequestBodyLoginAuthConfig;
import org.openapis.openapi.models.operations.UpdateBackendConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateBackendConfigRequest req = new UpdateBackendConfigRequest(                new UpdateBackendConfigRequestBody() {{
                                loginAuthConfig = new UpdateBackendConfigRequestBodyLoginAuthConfig() {{
                                    awsCognitoIdentityPoolId = "voluptatibus";
                                    awsCognitoRegion = "exercitationem";
                                    awsUserPoolsId = "nulla";
                                    awsUserPoolsWebClientId = "fugit";
                                }};;
                            }};, "porro") {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "iusto";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "officia";
            }};            

            UpdateBackendConfigResponse res = sdk.sdk.updateBackendConfig(req);

            if (res.updateBackendConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBackendJob

Updates a specific job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBackendJobRequest;
import org.openapis.openapi.models.operations.UpdateBackendJobRequestBody;
import org.openapis.openapi.models.operations.UpdateBackendJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateBackendJobRequest req = new UpdateBackendJobRequest(                new UpdateBackendJobRequestBody() {{
                                operation = "ipsam";
                                status = "ea";
                            }};, "aspernatur", "vel", "possimus") {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "ratione";
                xAmzCredential = "ex";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "maiores";
            }};            

            UpdateBackendJobResponse res = sdk.sdk.updateBackendJob(req);

            if (res.updateBackendJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBackendStorage

Updates an existing backend storage resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBackendStorageRequest;
import org.openapis.openapi.models.operations.UpdateBackendStorageRequestBody;
import org.openapis.openapi.models.operations.UpdateBackendStorageRequestBodyResourceConfig;
import org.openapis.openapi.models.operations.UpdateBackendStorageRequestBodyResourceConfigPermissions;
import org.openapis.openapi.models.operations.UpdateBackendStorageRequestBodyResourceConfigServiceNameEnum;
import org.openapis.openapi.models.operations.UpdateBackendStorageResponse;
import org.openapis.openapi.models.shared.AuthenticatedElementEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UnAuthenticatedElementEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateBackendStorageRequest req = new UpdateBackendStorageRequest(                new UpdateBackendStorageRequestBody(                new UpdateBackendStorageRequestBodyResourceConfig() {{
                                                permissions = new UpdateBackendStorageRequestBodyResourceConfigPermissions(                new org.openapis.openapi.models.shared.AuthenticatedElementEnum[]{{
                                                                    add(AuthenticatedElementEnum.DELETE),
                                                                    add(AuthenticatedElementEnum.CREATE_AND_UPDATE),
                                                                }}) {{
                                                    unAuthenticated = new org.openapis.openapi.models.shared.UnAuthenticatedElementEnum[]{{
                                                        add(UnAuthenticatedElementEnum.CREATE_AND_UPDATE),
                                                        add(UnAuthenticatedElementEnum.DELETE),
                                                        add(UnAuthenticatedElementEnum.DELETE),
                                                        add(UnAuthenticatedElementEnum.DELETE),
                                                    }};
                                                }};;
                                                serviceName = UpdateBackendStorageRequestBodyResourceConfigServiceNameEnum.S3;
                                            }};, "ea");, "impedit", "corporis") {{
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "inventore";
                xAmzDate = "magnam";
                xAmzSecurityToken = "ea";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "consectetur";
            }};            

            UpdateBackendStorageResponse res = sdk.sdk.updateBackendStorage(req);

            if (res.updateBackendStorageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
