# SDK

## Overview

AWS Amplify Admin API

Amazon Web Services documentation
<https://docs.aws.amazon.com/amplifybackend/>
### Available Operations

* [CloneBackend](#clonebackend) - This operation clones an existing backend.
* [CreateBackend](#createbackend) - This operation creates a backend for an Amplify app. Backends are automatically created at the time of app creation.
* [CreateBackendAPI](#createbackendapi) - Creates a new backend API resource.
* [CreateBackendAuth](#createbackendauth) - Creates a new backend authentication resource.
* [CreateBackendConfig](#createbackendconfig) - Creates a config object for a backend.
* [CreateBackendStorage](#createbackendstorage) - Creates a backend storage resource.
* [CreateToken](#createtoken) - Generates a one-time challenge code to authenticate a user into your Amplify Admin UI.
* [DeleteBackend](#deletebackend) - Removes an existing environment from your Amplify project.
* [DeleteBackendAPI](#deletebackendapi) - Deletes an existing backend API resource.
* [DeleteBackendAuth](#deletebackendauth) - Deletes an existing backend authentication resource.
* [DeleteBackendStorage](#deletebackendstorage) - Removes the specified backend storage resource.
* [DeleteToken](#deletetoken) - Deletes the challenge token based on the given appId and sessionId.
* [GenerateBackendAPIModels](#generatebackendapimodels) - Generates a model schema for an existing backend API resource.
* [GetBackend](#getbackend) - Provides project-level details for your Amplify UI project.
* [GetBackendAPI](#getbackendapi) - Gets the details for a backend API.
* [GetBackendAPIModels](#getbackendapimodels) - Gets a model introspection schema for an existing backend API resource.
* [GetBackendAuth](#getbackendauth) - Gets a backend auth details.
* [GetBackendJob](#getbackendjob) - Returns information about a specific job.
* [GetBackendStorage](#getbackendstorage) - Gets details for a backend storage resource.
* [GetToken](#gettoken) - Gets the challenge token based on the given appId and sessionId.
* [ImportBackendAuth](#importbackendauth) - Imports an existing backend authentication resource.
* [ImportBackendStorage](#importbackendstorage) - Imports an existing backend storage resource.
* [ListBackendJobs](#listbackendjobs) - Lists the jobs for the backend of an Amplify app.
* [ListS3Buckets](#lists3buckets) - The list of S3 buckets in your account.
* [RemoveAllBackends](#removeallbackends) - Removes all backend environments from your Amplify project.
* [RemoveBackendConfig](#removebackendconfig) - Removes the AWS resources required to access the Amplify Admin UI.
* [UpdateBackendAPI](#updatebackendapi) - Updates an existing backend API resource.
* [UpdateBackendAuth](#updatebackendauth) - Updates an existing backend authentication resource.
* [UpdateBackendConfig](#updatebackendconfig) - Updates the AWS resources required to access the Amplify Admin UI.
* [UpdateBackendJob](#updatebackendjob) - Updates a specific job.
* [UpdateBackendStorage](#updatebackendstorage) - Updates an existing backend storage resource.

## CloneBackend

This operation clones an existing backend.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CloneBackend(ctx, operations.CloneBackendRequest{
        RequestBody: operations.CloneBackendRequestBody{
            TargetEnvironmentName: "deserunt",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
        AppID: "suscipit",
        BackendEnvironmentName: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloneBackendResponse != nil {
        // handle response
    }
}
```

## CreateBackend

This operation creates a backend for an Amplify app. Backends are automatically created at the time of app creation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateBackend(ctx, operations.CreateBackendRequest{
        RequestBody: operations.CreateBackendRequestBody{
            AppID: "minus",
            AppName: "placeat",
            BackendEnvironmentName: "voluptatum",
            ResourceConfig: map[string]interface{}{
                "excepturi": "nisi",
                "recusandae": "temporibus",
            },
            ResourceName: sdk.String("ab"),
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBackendResponse != nil {
        // handle response
    }
}
```

## CreateBackendAPI

Creates a new backend API resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateBackendAPI(ctx, operations.CreateBackendAPIRequest{
        RequestBody: operations.CreateBackendAPIRequestBody{
            BackendEnvironmentName: "quo",
            ResourceConfig: operations.CreateBackendAPIRequestBodyResourceConfig{
                AdditionalAuthTypes: []shared.BackendAPIAuthType{
                    shared.BackendAPIAuthType{
                        Mode: shared.BackendAPIAuthTypeModeEnumOpenidConnect.ToPointer(),
                        Settings: &shared.BackendAPIAuthTypeSettings{
                            CognitoUserPoolID: sdk.String("at"),
                            Description: sdk.String("maiores"),
                            ExpirationTime: sdk.Float64(4736.08),
                            OpenIDAuthTTL: sdk.String("quod"),
                            OpenIDClientID: sdk.String("quod"),
                            OpenIDIatTTL: sdk.String("esse"),
                            OpenIDIssueURL: sdk.String("totam"),
                            OpenIDProviderName: sdk.String("porro"),
                        },
                    },
                },
                APIName: sdk.String("dolorum"),
                ConflictResolution: &operations.CreateBackendAPIRequestBodyResourceConfigConflictResolution{
                    ResolutionStrategy: operations.CreateBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnumOptimisticConcurrency.ToPointer(),
                },
                DefaultAuthType: &operations.CreateBackendAPIRequestBodyResourceConfigDefaultAuthType{
                    Mode: operations.CreateBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnumAmazonCognitoUserPools.ToPointer(),
                    Settings: &operations.CreateBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings{
                        CognitoUserPoolID: sdk.String("officia"),
                        Description: sdk.String("occaecati"),
                        ExpirationTime: sdk.Float64(1433.53),
                        OpenIDAuthTTL: sdk.String("deleniti"),
                        OpenIDClientID: sdk.String("hic"),
                        OpenIDIatTTL: sdk.String("optio"),
                        OpenIDIssueURL: sdk.String("totam"),
                        OpenIDProviderName: sdk.String("beatae"),
                    },
                },
                Service: sdk.String("commodi"),
                TransformSchema: sdk.String("molestiae"),
            },
            ResourceName: "modi",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        AppID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBackendAPIResponse != nil {
        // handle response
    }
}
```

## CreateBackendAuth

Creates a new backend authentication resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateBackendAuth(ctx, operations.CreateBackendAuthRequest{
        RequestBody: operations.CreateBackendAuthRequestBody{
            BackendEnvironmentName: "ad",
            ResourceConfig: operations.CreateBackendAuthRequestBodyResourceConfig{
                AuthResources: operations.CreateBackendAuthRequestBodyResourceConfigAuthResourcesEnumIdentityPoolAndUserPool.ToPointer(),
                IdentityPoolConfigs: &operations.CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs{
                    IdentityPoolName: "sed",
                    UnauthenticatedLogin: false,
                },
                Service: operations.CreateBackendAuthRequestBodyResourceConfigServiceEnumCognito.ToPointer(),
                UserPoolConfigs: &operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs{
                    ForgotPassword: &operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword{
                        DeliveryMethod: operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordDeliveryMethodEnumSms,
                        EmailSettings: &operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings{
                            EmailMessage: sdk.String("dolor"),
                            EmailSubject: sdk.String("natus"),
                        },
                        SmsSettings: &operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings{
                            SmsMessage: sdk.String("laboriosam"),
                        },
                    },
                    Mfa: &operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa{
                        MFAMode: shared.MFAModeEnumOptional,
                        Settings: &operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings{
                            MfaTypes: []shared.MfaTypesElementEnum{
                                shared.MfaTypesElementEnumTotp,
                                shared.MfaTypesElementEnumSms,
                                shared.MfaTypesElementEnumSms,
                                shared.MfaTypesElementEnumTotp,
                            },
                            SmsMessage: sdk.String("iure"),
                        },
                    },
                    OAuth: &operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth{
                        DomainPrefix: sdk.String("saepe"),
                        OAuthGrantType: operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthOAuthGrantTypeEnumImplicit,
                        OAuthScopes: []shared.OAuthScopesElementEnum{
                            shared.OAuthScopesElementEnumPhone,
                        },
                        RedirectSignInURIs: []string{
                            "est",
                            "mollitia",
                            "laborum",
                            "dolores",
                        },
                        RedirectSignOutURIs: []string{
                            "corporis",
                        },
                        SocialProviderSettings: &operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings{
                            Facebook: &shared.BackendAuthSocialProviderConfig{
                                ClientID: sdk.String("explicabo"),
                                ClientSecret: sdk.String("nobis"),
                            },
                            Google: &shared.BackendAuthSocialProviderConfig{
                                ClientID: sdk.String("enim"),
                                ClientSecret: sdk.String("omnis"),
                            },
                            LoginWithAmazon: &shared.BackendAuthSocialProviderConfig{
                                ClientID: sdk.String("nemo"),
                                ClientSecret: sdk.String("minima"),
                            },
                            SignInWithApple: &shared.BackendAuthAppleProviderConfig{
                                ClientID: sdk.String("excepturi"),
                                KeyID: sdk.String("accusantium"),
                                PrivateKey: sdk.String("iure"),
                                TeamID: sdk.String("culpa"),
                            },
                        },
                    },
                    PasswordPolicy: &operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy{
                        AdditionalConstraints: []shared.AdditionalConstraintsElementEnum{
                            shared.AdditionalConstraintsElementEnumRequireUppercase,
                            shared.AdditionalConstraintsElementEnumRequireDigit,
                            shared.AdditionalConstraintsElementEnumRequireSymbol,
                            shared.AdditionalConstraintsElementEnumRequireDigit,
                        },
                        MinimumLength: 6350.59,
                    },
                    RequiredSignUpAttributes: []shared.RequiredSignUpAttributesElementEnum{
                        shared.RequiredSignUpAttributesElementEnumZoneInfo,
                    },
                    SignInMethod: operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsSignInMethodEnumPhoneNumber,
                    UserPoolName: "occaecati",
                    VerificationMessage: &operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessage{
                        DeliveryMethod: operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageDeliveryMethodEnumEmail,
                        EmailSettings: &operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageEmailSettings{
                            EmailMessage: sdk.String("commodi"),
                            EmailSubject: sdk.String("quam"),
                        },
                        SmsSettings: &operations.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageSmsSettings{
                            SmsMessage: sdk.String("molestiae"),
                        },
                    },
                },
            },
            ResourceName: "velit",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("quia"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("animi"),
        XAmzSignedHeaders: sdk.String("enim"),
        AppID: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBackendAuthResponse != nil {
        // handle response
    }
}
```

## CreateBackendConfig

Creates a config object for a backend.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateBackendConfig(ctx, operations.CreateBackendConfigRequest{
        RequestBody: operations.CreateBackendConfigRequestBody{
            BackendManagerAppID: sdk.String("quo"),
        },
        XAmzAlgorithm: sdk.String("sequi"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("quasi"),
        AppID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBackendConfigResponse != nil {
        // handle response
    }
}
```

## CreateBackendStorage

Creates a backend storage resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateBackendStorage(ctx, operations.CreateBackendStorageRequest{
        RequestBody: operations.CreateBackendStorageRequestBody{
            BackendEnvironmentName: "temporibus",
            ResourceConfig: operations.CreateBackendStorageRequestBodyResourceConfig{
                BucketName: sdk.String("laborum"),
                Permissions: &operations.CreateBackendStorageRequestBodyResourceConfigPermissions{
                    Authenticated: []shared.AuthenticatedElementEnum{
                        shared.AuthenticatedElementEnumDelete,
                    },
                    UnAuthenticated: []shared.UnAuthenticatedElementEnum{
                        shared.UnAuthenticatedElementEnumDelete,
                        shared.UnAuthenticatedElementEnumCreateAndUpdate,
                        shared.UnAuthenticatedElementEnumCreateAndUpdate,
                        shared.UnAuthenticatedElementEnumDelete,
                    },
                },
                ServiceName: operations.CreateBackendStorageRequestBodyResourceConfigServiceNameEnumS3.ToPointer(),
            },
            ResourceName: "ipsa",
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("ut"),
        AppID: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBackendStorageResponse != nil {
        // handle response
    }
}
```

## CreateToken

Generates a one-time challenge code to authenticate a user into your Amplify Admin UI.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateToken(ctx, operations.CreateTokenRequest{
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("enim"),
        AppID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTokenResponse != nil {
        // handle response
    }
}
```

## DeleteBackend

Removes an existing environment from your Amplify project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteBackend(ctx, operations.DeleteBackendRequest{
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("molestias"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        AppID: "pariatur",
        BackendEnvironmentName: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteBackendResponse != nil {
        // handle response
    }
}
```

## DeleteBackendAPI

Deletes an existing backend API resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteBackendAPI(ctx, operations.DeleteBackendAPIRequest{
        RequestBody: operations.DeleteBackendAPIRequestBody{
            ResourceConfig: &operations.DeleteBackendAPIRequestBodyResourceConfig{
                AdditionalAuthTypes: []shared.BackendAPIAuthType{
                    shared.BackendAPIAuthType{
                        Mode: shared.BackendAPIAuthTypeModeEnumAmazonCognitoUserPools.ToPointer(),
                        Settings: &shared.BackendAPIAuthTypeSettings{
                            CognitoUserPoolID: sdk.String("voluptates"),
                            Description: sdk.String("quasi"),
                            ExpirationTime: sdk.Float64(9211.58),
                            OpenIDAuthTTL: sdk.String("sint"),
                            OpenIDClientID: sdk.String("veritatis"),
                            OpenIDIatTTL: sdk.String("itaque"),
                            OpenIDIssueURL: sdk.String("incidunt"),
                            OpenIDProviderName: sdk.String("enim"),
                        },
                    },
                    shared.BackendAPIAuthType{
                        Mode: shared.BackendAPIAuthTypeModeEnumAPIKey.ToPointer(),
                        Settings: &shared.BackendAPIAuthTypeSettings{
                            CognitoUserPoolID: sdk.String("est"),
                            Description: sdk.String("quibusdam"),
                            ExpirationTime: sdk.Float64(1317.97),
                            OpenIDAuthTTL: sdk.String("deserunt"),
                            OpenIDClientID: sdk.String("distinctio"),
                            OpenIDIatTTL: sdk.String("quibusdam"),
                            OpenIDIssueURL: sdk.String("labore"),
                            OpenIDProviderName: sdk.String("modi"),
                        },
                    },
                    shared.BackendAPIAuthType{
                        Mode: shared.BackendAPIAuthTypeModeEnumAPIKey.ToPointer(),
                        Settings: &shared.BackendAPIAuthTypeSettings{
                            CognitoUserPoolID: sdk.String("aliquid"),
                            Description: sdk.String("cupiditate"),
                            ExpirationTime: sdk.Float64(5528.22),
                            OpenIDAuthTTL: sdk.String("perferendis"),
                            OpenIDClientID: sdk.String("magni"),
                            OpenIDIatTTL: sdk.String("assumenda"),
                            OpenIDIssueURL: sdk.String("ipsam"),
                            OpenIDProviderName: sdk.String("alias"),
                        },
                    },
                },
                APIName: sdk.String("fugit"),
                ConflictResolution: &operations.DeleteBackendAPIRequestBodyResourceConfigConflictResolution{
                    ResolutionStrategy: operations.DeleteBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnumAutomerge.ToPointer(),
                },
                DefaultAuthType: &operations.DeleteBackendAPIRequestBodyResourceConfigDefaultAuthType{
                    Mode: operations.DeleteBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnumAmazonCognitoUserPools.ToPointer(),
                    Settings: &operations.DeleteBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings{
                        CognitoUserPoolID: sdk.String("tempora"),
                        Description: sdk.String("facilis"),
                        ExpirationTime: sdk.Float64(7351.94),
                        OpenIDAuthTTL: sdk.String("labore"),
                        OpenIDClientID: sdk.String("delectus"),
                        OpenIDIatTTL: sdk.String("eum"),
                        OpenIDIssueURL: sdk.String("non"),
                        OpenIDProviderName: sdk.String("eligendi"),
                    },
                },
                Service: sdk.String("sint"),
                TransformSchema: sdk.String("aliquid"),
            },
            ResourceName: "provident",
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        AppID: "in",
        BackendEnvironmentName: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteBackendAPIResponse != nil {
        // handle response
    }
}
```

## DeleteBackendAuth

Deletes an existing backend authentication resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteBackendAuth(ctx, operations.DeleteBackendAuthRequest{
        RequestBody: operations.DeleteBackendAuthRequestBody{
            ResourceName: "illum",
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("facere"),
        XAmzSignedHeaders: sdk.String("ea"),
        AppID: "aliquid",
        BackendEnvironmentName: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteBackendAuthResponse != nil {
        // handle response
    }
}
```

## DeleteBackendStorage

Removes the specified backend storage resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteBackendStorage(ctx, operations.DeleteBackendStorageRequest{
        RequestBody: operations.DeleteBackendStorageRequestBody{
            ResourceName: "accusamus",
            ServiceName: operations.DeleteBackendStorageRequestBodyServiceNameEnumS3,
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("provident"),
        AppID: "nam",
        BackendEnvironmentName: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteBackendStorageResponse != nil {
        // handle response
    }
}
```

## DeleteToken

Deletes the challenge token based on the given appId and sessionId.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteToken(ctx, operations.DeleteTokenRequest{
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("vel"),
        AppID: "natus",
        SessionID: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTokenResponse != nil {
        // handle response
    }
}
```

## GenerateBackendAPIModels

Generates a model schema for an existing backend API resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GenerateBackendAPIModels(ctx, operations.GenerateBackendAPIModelsRequest{
        RequestBody: operations.GenerateBackendAPIModelsRequestBody{
            ResourceName: "molestiae",
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("labore"),
        AppID: "suscipit",
        BackendEnvironmentName: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateBackendAPIModelsResponse != nil {
        // handle response
    }
}
```

## GetBackend

Provides project-level details for your Amplify UI project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetBackend(ctx, operations.GetBackendRequest{
        RequestBody: operations.GetBackendRequestBody{
            BackendEnvironmentName: sdk.String("nobis"),
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        AppID: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBackendResponse != nil {
        // handle response
    }
}
```

## GetBackendAPI

Gets the details for a backend API.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetBackendAPI(ctx, operations.GetBackendAPIRequest{
        RequestBody: operations.GetBackendAPIRequestBody{
            ResourceConfig: &operations.GetBackendAPIRequestBodyResourceConfig{
                AdditionalAuthTypes: []shared.BackendAPIAuthType{
                    shared.BackendAPIAuthType{
                        Mode: shared.BackendAPIAuthTypeModeEnumAmazonCognitoUserPools.ToPointer(),
                        Settings: &shared.BackendAPIAuthTypeSettings{
                            CognitoUserPoolID: sdk.String("sint"),
                            Description: sdk.String("accusantium"),
                            ExpirationTime: sdk.Float64(6532.01),
                            OpenIDAuthTTL: sdk.String("reiciendis"),
                            OpenIDClientID: sdk.String("mollitia"),
                            OpenIDIatTTL: sdk.String("ad"),
                            OpenIDIssueURL: sdk.String("eum"),
                            OpenIDProviderName: sdk.String("dolor"),
                        },
                    },
                    shared.BackendAPIAuthType{
                        Mode: shared.BackendAPIAuthTypeModeEnumOpenidConnect.ToPointer(),
                        Settings: &shared.BackendAPIAuthTypeSettings{
                            CognitoUserPoolID: sdk.String("odit"),
                            Description: sdk.String("nemo"),
                            ExpirationTime: sdk.Float64(972.6),
                            OpenIDAuthTTL: sdk.String("iure"),
                            OpenIDClientID: sdk.String("doloribus"),
                            OpenIDIatTTL: sdk.String("debitis"),
                            OpenIDIssueURL: sdk.String("eius"),
                            OpenIDProviderName: sdk.String("maxime"),
                        },
                    },
                    shared.BackendAPIAuthType{
                        Mode: shared.BackendAPIAuthTypeModeEnumAmazonCognitoUserPools.ToPointer(),
                        Settings: &shared.BackendAPIAuthTypeSettings{
                            CognitoUserPoolID: sdk.String("facilis"),
                            Description: sdk.String("in"),
                            ExpirationTime: sdk.Float64(1002.26),
                            OpenIDAuthTTL: sdk.String("architecto"),
                            OpenIDClientID: sdk.String("repudiandae"),
                            OpenIDIatTTL: sdk.String("ullam"),
                            OpenIDIssueURL: sdk.String("expedita"),
                            OpenIDProviderName: sdk.String("nihil"),
                        },
                    },
                },
                APIName: sdk.String("repellat"),
                ConflictResolution: &operations.GetBackendAPIRequestBodyResourceConfigConflictResolution{
                    ResolutionStrategy: operations.GetBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnumNone.ToPointer(),
                },
                DefaultAuthType: &operations.GetBackendAPIRequestBodyResourceConfigDefaultAuthType{
                    Mode: operations.GetBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnumAPIKey.ToPointer(),
                    Settings: &operations.GetBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings{
                        CognitoUserPoolID: sdk.String("saepe"),
                        Description: sdk.String("pariatur"),
                        ExpirationTime: sdk.Float64(375.59),
                        OpenIDAuthTTL: sdk.String("consequuntur"),
                        OpenIDClientID: sdk.String("praesentium"),
                        OpenIDIatTTL: sdk.String("natus"),
                        OpenIDIssueURL: sdk.String("magni"),
                        OpenIDProviderName: sdk.String("sunt"),
                    },
                },
                Service: sdk.String("quo"),
                TransformSchema: sdk.String("illum"),
            },
            ResourceName: "pariatur",
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("ab"),
        AppID: "maiores",
        BackendEnvironmentName: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBackendAPIResponse != nil {
        // handle response
    }
}
```

## GetBackendAPIModels

Gets a model introspection schema for an existing backend API resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetBackendAPIModels(ctx, operations.GetBackendAPIModelsRequest{
        RequestBody: operations.GetBackendAPIModelsRequestBody{
            ResourceName: "ipsam",
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("autem"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        AppID: "perferendis",
        BackendEnvironmentName: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBackendAPIModelsResponse != nil {
        // handle response
    }
}
```

## GetBackendAuth

Gets a backend auth details.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetBackendAuth(ctx, operations.GetBackendAuthRequest{
        RequestBody: operations.GetBackendAuthRequestBody{
            ResourceName: "amet",
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("dolores"),
        AppID: "quis",
        BackendEnvironmentName: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBackendAuthResponse != nil {
        // handle response
    }
}
```

## GetBackendJob

Returns information about a specific job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetBackendJob(ctx, operations.GetBackendJobRequest{
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("dolores"),
        AppID: "minus",
        BackendEnvironmentName: "quam",
        JobID: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBackendJobResponse != nil {
        // handle response
    }
}
```

## GetBackendStorage

Gets details for a backend storage resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetBackendStorage(ctx, operations.GetBackendStorageRequest{
        RequestBody: operations.GetBackendStorageRequestBody{
            ResourceName: "vero",
        },
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        AppID: "porro",
        BackendEnvironmentName: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBackendStorageResponse != nil {
        // handle response
    }
}
```

## GetToken

Gets the challenge token based on the given appId and sessionId.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetToken(ctx, operations.GetTokenRequest{
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        AppID: "earum",
        SessionID: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTokenResponse != nil {
        // handle response
    }
}
```

## ImportBackendAuth

Imports an existing backend authentication resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ImportBackendAuth(ctx, operations.ImportBackendAuthRequest{
        RequestBody: operations.ImportBackendAuthRequestBody{
            IdentityPoolID: sdk.String("iste"),
            NativeClientID: "dolorum",
            UserPoolID: "deleniti",
            WebClientID: "pariatur",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        AppID: "dolorem",
        BackendEnvironmentName: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportBackendAuthResponse != nil {
        // handle response
    }
}
```

## ImportBackendStorage

Imports an existing backend storage resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ImportBackendStorage(ctx, operations.ImportBackendStorageRequest{
        RequestBody: operations.ImportBackendStorageRequestBody{
            BucketName: sdk.String("dolor"),
            ServiceName: operations.ImportBackendStorageRequestBodyServiceNameEnumS3,
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        AppID: "reiciendis",
        BackendEnvironmentName: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportBackendStorageResponse != nil {
        // handle response
    }
}
```

## ListBackendJobs

Lists the jobs for the backend of an Amplify app.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListBackendJobs(ctx, operations.ListBackendJobsRequest{
        MaxResults: sdk.String("dolorum"),
        NextToken: sdk.String("numquam"),
        RequestBody: operations.ListBackendJobsRequestBody{
            JobID: sdk.String("veritatis"),
            MaxResults: sdk.Int64(58029),
            NextToken: sdk.String("ipsa"),
            Operation: sdk.String("iure"),
            Status: sdk.String("odio"),
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("eos"),
        AppID: "atque",
        BackendEnvironmentName: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBackendJobsResponse != nil {
        // handle response
    }
}
```

## ListS3Buckets

The list of S3 buckets in your account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListS3Buckets(ctx, operations.ListS3BucketsRequest{
        RequestBody: operations.ListS3BucketsRequestBody{
            NextToken: sdk.String("fugiat"),
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListS3BucketsResponse != nil {
        // handle response
    }
}
```

## RemoveAllBackends

Removes all backend environments from your Amplify project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RemoveAllBackends(ctx, operations.RemoveAllBackendsRequest{
        RequestBody: operations.RemoveAllBackendsRequestBody{
            CleanAmplifyApp: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        AppID: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveAllBackendsResponse != nil {
        // handle response
    }
}
```

## RemoveBackendConfig

Removes the AWS resources required to access the Amplify Admin UI.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RemoveBackendConfig(ctx, operations.RemoveBackendConfigRequest{
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        AppID: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveBackendConfigResponse != nil {
        // handle response
    }
}
```

## UpdateBackendAPI

Updates an existing backend API resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateBackendAPI(ctx, operations.UpdateBackendAPIRequest{
        RequestBody: operations.UpdateBackendAPIRequestBody{
            ResourceConfig: &operations.UpdateBackendAPIRequestBodyResourceConfig{
                AdditionalAuthTypes: []shared.BackendAPIAuthType{
                    shared.BackendAPIAuthType{
                        Mode: shared.BackendAPIAuthTypeModeEnumAwsIam.ToPointer(),
                        Settings: &shared.BackendAPIAuthTypeSettings{
                            CognitoUserPoolID: sdk.String("deserunt"),
                            Description: sdk.String("provident"),
                            ExpirationTime: sdk.Float64(3246.83),
                            OpenIDAuthTTL: sdk.String("repellendus"),
                            OpenIDClientID: sdk.String("totam"),
                            OpenIDIatTTL: sdk.String("similique"),
                            OpenIDIssueURL: sdk.String("alias"),
                            OpenIDProviderName: sdk.String("at"),
                        },
                    },
                    shared.BackendAPIAuthType{
                        Mode: shared.BackendAPIAuthTypeModeEnumAwsIam.ToPointer(),
                        Settings: &shared.BackendAPIAuthTypeSettings{
                            CognitoUserPoolID: sdk.String("tempora"),
                            Description: sdk.String("vel"),
                            ExpirationTime: sdk.Float64(7980.47),
                            OpenIDAuthTTL: sdk.String("officiis"),
                            OpenIDClientID: sdk.String("qui"),
                            OpenIDIatTTL: sdk.String("dolorum"),
                            OpenIDIssueURL: sdk.String("a"),
                            OpenIDProviderName: sdk.String("esse"),
                        },
                    },
                    shared.BackendAPIAuthType{
                        Mode: shared.BackendAPIAuthTypeModeEnumAmazonCognitoUserPools.ToPointer(),
                        Settings: &shared.BackendAPIAuthTypeSettings{
                            CognitoUserPoolID: sdk.String("iusto"),
                            Description: sdk.String("ipsum"),
                            ExpirationTime: sdk.Float64(7887.4),
                            OpenIDAuthTTL: sdk.String("tenetur"),
                            OpenIDClientID: sdk.String("amet"),
                            OpenIDIatTTL: sdk.String("tempore"),
                            OpenIDIssueURL: sdk.String("accusamus"),
                            OpenIDProviderName: sdk.String("numquam"),
                        },
                    },
                    shared.BackendAPIAuthType{
                        Mode: shared.BackendAPIAuthTypeModeEnumAwsIam.ToPointer(),
                        Settings: &shared.BackendAPIAuthTypeSettings{
                            CognitoUserPoolID: sdk.String("dolorem"),
                            Description: sdk.String("sapiente"),
                            ExpirationTime: sdk.Float64(5182.01),
                            OpenIDAuthTTL: sdk.String("nihil"),
                            OpenIDClientID: sdk.String("sit"),
                            OpenIDIatTTL: sdk.String("expedita"),
                            OpenIDIssueURL: sdk.String("neque"),
                            OpenIDProviderName: sdk.String("sed"),
                        },
                    },
                },
                APIName: sdk.String("vel"),
                ConflictResolution: &operations.UpdateBackendAPIRequestBodyResourceConfigConflictResolution{
                    ResolutionStrategy: operations.UpdateBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnumAutomerge.ToPointer(),
                },
                DefaultAuthType: &operations.UpdateBackendAPIRequestBodyResourceConfigDefaultAuthType{
                    Mode: operations.UpdateBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnumAwsIam.ToPointer(),
                    Settings: &operations.UpdateBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings{
                        CognitoUserPoolID: sdk.String("deserunt"),
                        Description: sdk.String("quam"),
                        ExpirationTime: sdk.Float64(2148.8),
                        OpenIDAuthTTL: sdk.String("incidunt"),
                        OpenIDClientID: sdk.String("qui"),
                        OpenIDIatTTL: sdk.String("cupiditate"),
                        OpenIDIssueURL: sdk.String("maxime"),
                        OpenIDProviderName: sdk.String("pariatur"),
                    },
                },
                Service: sdk.String("soluta"),
                TransformSchema: sdk.String("dicta"),
            },
            ResourceName: "laborum",
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        AppID: "quam",
        BackendEnvironmentName: "molestias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBackendAPIResponse != nil {
        // handle response
    }
}
```

## UpdateBackendAuth

Updates an existing backend authentication resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateBackendAuth(ctx, operations.UpdateBackendAuthRequest{
        RequestBody: operations.UpdateBackendAuthRequestBody{
            ResourceConfig: operations.UpdateBackendAuthRequestBodyResourceConfig{
                AuthResources: operations.UpdateBackendAuthRequestBodyResourceConfigAuthResourcesEnumIdentityPoolAndUserPool.ToPointer(),
                IdentityPoolConfigs: &operations.UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs{
                    UnauthenticatedLogin: sdk.Bool(false),
                },
                Service: operations.UpdateBackendAuthRequestBodyResourceConfigServiceEnumCognito.ToPointer(),
                UserPoolConfigs: &operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs{
                    ForgotPassword: &operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword{
                        DeliveryMethod: operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordDeliveryMethodEnumEmail.ToPointer(),
                        EmailSettings: &operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings{
                            EmailMessage: sdk.String("neque"),
                            EmailSubject: sdk.String("fugit"),
                        },
                        SmsSettings: &operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings{
                            SmsMessage: sdk.String("magni"),
                        },
                    },
                    Mfa: &operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa{
                        MFAMode: shared.MFAModeEnumOff.ToPointer(),
                        Settings: &operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings{
                            MfaTypes: []shared.MfaTypesElementEnum{
                                shared.MfaTypesElementEnumSms,
                            },
                            SmsMessage: sdk.String("nam"),
                        },
                    },
                    OAuth: &operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth{
                        DomainPrefix: sdk.String("hic"),
                        OAuthGrantType: operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthOAuthGrantTypeEnumCode.ToPointer(),
                        OAuthScopes: []shared.OAuthScopesElementEnum{
                            shared.OAuthScopesElementEnumProfile,
                            shared.OAuthScopesElementEnumProfile,
                            shared.OAuthScopesElementEnumPhone,
                            shared.OAuthScopesElementEnumAwsCognitoSigninUserAdmin,
                        },
                        RedirectSignInURIs: []string{
                            "veritatis",
                        },
                        RedirectSignOutURIs: []string{
                            "quos",
                            "tempore",
                            "cupiditate",
                        },
                        SocialProviderSettings: &operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings{
                            Facebook: &shared.BackendAuthSocialProviderConfig{
                                ClientID: sdk.String("aperiam"),
                                ClientSecret: sdk.String("delectus"),
                            },
                            Google: &shared.BackendAuthSocialProviderConfig{
                                ClientID: sdk.String("dolorem"),
                                ClientSecret: sdk.String("dolore"),
                            },
                            LoginWithAmazon: &shared.BackendAuthSocialProviderConfig{
                                ClientID: sdk.String("labore"),
                                ClientSecret: sdk.String("adipisci"),
                            },
                            SignInWithApple: &shared.BackendAuthAppleProviderConfig{
                                ClientID: sdk.String("dolorum"),
                                KeyID: sdk.String("architecto"),
                                PrivateKey: sdk.String("quae"),
                                TeamID: sdk.String("aut"),
                            },
                        },
                    },
                    PasswordPolicy: &operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy{
                        AdditionalConstraints: []shared.AdditionalConstraintsElementEnum{
                            shared.AdditionalConstraintsElementEnumRequireUppercase,
                            shared.AdditionalConstraintsElementEnumRequireDigit,
                            shared.AdditionalConstraintsElementEnumRequireSymbol,
                        },
                        MinimumLength: sdk.Float64(8330.38),
                    },
                    VerificationMessage: &operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessage{
                        DeliveryMethod: operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageDeliveryMethodEnumSms,
                        EmailSettings: &operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageEmailSettings{
                            EmailMessage: sdk.String("doloribus"),
                            EmailSubject: sdk.String("ut"),
                        },
                        SmsSettings: &operations.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageSmsSettings{
                            SmsMessage: sdk.String("facilis"),
                        },
                    },
                },
            },
            ResourceName: "cupiditate",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("quisquam"),
        AppID: "vero",
        BackendEnvironmentName: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBackendAuthResponse != nil {
        // handle response
    }
}
```

## UpdateBackendConfig

Updates the AWS resources required to access the Amplify Admin UI.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateBackendConfig(ctx, operations.UpdateBackendConfigRequest{
        RequestBody: operations.UpdateBackendConfigRequestBody{
            LoginAuthConfig: &operations.UpdateBackendConfigRequestBodyLoginAuthConfig{
                AwsCognitoIdentityPoolID: sdk.String("quis"),
                AwsCognitoRegion: sdk.String("ipsum"),
                AwsUserPoolsID: sdk.String("delectus"),
                AwsUserPoolsWebClientID: sdk.String("voluptate"),
            },
        },
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("quod"),
        AppID: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBackendConfigResponse != nil {
        // handle response
    }
}
```

## UpdateBackendJob

Updates a specific job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateBackendJob(ctx, operations.UpdateBackendJobRequest{
        RequestBody: operations.UpdateBackendJobRequestBody{
            Operation: sdk.String("similique"),
            Status: sdk.String("facilis"),
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("natus"),
        AppID: "impedit",
        BackendEnvironmentName: "aut",
        JobID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBackendJobResponse != nil {
        // handle response
    }
}
```

## UpdateBackendStorage

Updates an existing backend storage resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateBackendStorage(ctx, operations.UpdateBackendStorageRequest{
        RequestBody: operations.UpdateBackendStorageRequestBody{
            ResourceConfig: operations.UpdateBackendStorageRequestBodyResourceConfig{
                Permissions: &operations.UpdateBackendStorageRequestBodyResourceConfigPermissions{
                    Authenticated: []shared.AuthenticatedElementEnum{
                        shared.AuthenticatedElementEnumDelete,
                        shared.AuthenticatedElementEnumRead,
                    },
                    UnAuthenticated: []shared.UnAuthenticatedElementEnum{
                        shared.UnAuthenticatedElementEnumDelete,
                        shared.UnAuthenticatedElementEnumDelete,
                        shared.UnAuthenticatedElementEnumCreateAndUpdate,
                        shared.UnAuthenticatedElementEnumDelete,
                    },
                },
                ServiceName: operations.UpdateBackendStorageRequestBodyResourceConfigServiceNameEnumS3.ToPointer(),
            },
            ResourceName: "ducimus",
        },
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("vel"),
        AppID: "possimus",
        BackendEnvironmentName: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBackendStorageResponse != nil {
        // handle response
    }
}
```
