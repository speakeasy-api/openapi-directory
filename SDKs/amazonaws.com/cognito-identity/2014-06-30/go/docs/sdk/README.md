# SDK

## Overview

<fullname>Amazon Cognito Federated Identities</fullname> <p>Amazon Cognito Federated Identities is a web service that delivers scoped temporary credentials to mobile devices and other untrusted environments. It uniquely identifies a device and supplies the user with a consistent identity over the lifetime of an application.</p> <p>Using Amazon Cognito Federated Identities, you can enable authentication with one or more third-party identity providers (Facebook, Google, or Login with Amazon) or an Amazon Cognito user pool, and you can also choose to support unauthenticated access from your app. Cognito delivers a unique identifier for each user and acts as an OpenID token provider trusted by AWS Security Token Service (STS) to access temporary, limited-privilege AWS credentials.</p> <p>For a description of the authentication flow from the Amazon Cognito Developer Guide see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html">Authentication Flow</a>.</p> <p>For more information see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html">Amazon Cognito Federated Identities</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cognito-identity/>
### Available Operations

* [CreateIdentityPool](#createidentitypool) - <p>Creates a new identity pool. The identity pool is a store of user identity information that is specific to your AWS account. The keys for <code>SupportedLoginProviders</code> are as follows:</p> <ul> <li> <p>Facebook: <code>graph.facebook.com</code> </p> </li> <li> <p>Google: <code>accounts.google.com</code> </p> </li> <li> <p>Amazon: <code>www.amazon.com</code> </p> </li> <li> <p>Twitter: <code>api.twitter.com</code> </p> </li> <li> <p>Digits: <code>www.digits.com</code> </p> </li> </ul> <p>You must use AWS Developer credentials to call this API.</p>
* [DeleteIdentities](#deleteidentities) - <p>Deletes identities from an identity pool. You can specify a list of 1-60 identities that you want to delete.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [DeleteIdentityPool](#deleteidentitypool) - <p>Deletes an identity pool. Once a pool is deleted, users will not be able to authenticate with the pool.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [DescribeIdentity](#describeidentity) - <p>Returns metadata related to the given identity, including when the identity was created and any associated linked logins.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [DescribeIdentityPool](#describeidentitypool) - <p>Gets details about a particular identity pool, including the pool name, ID description, creation date, and current number of users.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [GetCredentialsForIdentity](#getcredentialsforidentity) - <p>Returns credentials for the provided identity ID. Any provided logins will be validated against supported login providers. If the token is for cognito-identity.amazonaws.com, it will be passed through to AWS Security Token Service with the appropriate role for the token.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
* [GetID](#getid) - <p>Generates (or retrieves) a Cognito ID. Supplying multiple logins will create an implicit linked account.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
* [GetIdentityPoolRoles](#getidentitypoolroles) - <p>Gets the roles for an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [GetOpenIDToken](#getopenidtoken) - <p>Gets an OpenID token, using a known Cognito ID. This known Cognito ID is returned by <a>GetId</a>. You can optionally add additional logins for the identity. Supplying multiple logins creates an implicit link.</p> <p>The OpenID token is valid for 10 minutes.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
* [GetOpenIDTokenForDeveloperIdentity](#getopenidtokenfordeveloperidentity) - <p>Registers (or retrieves) a Cognito <code>IdentityId</code> and an OpenID Connect token for a user authenticated by your backend authentication process. Supplying multiple logins will create an implicit linked account. You can only specify one developer provider as part of the <code>Logins</code> map, which is linked to the identity pool. The developer provider is the "domain" by which Cognito will refer to your users.</p> <p>You can use <code>GetOpenIdTokenForDeveloperIdentity</code> to create a new identity and to link new logins (that is, user credentials issued by a public provider or developer provider) to an existing identity. When you want to create a new identity, the <code>IdentityId</code> should be null. When you want to associate a new login with an existing authenticated/unauthenticated identity, you can do so by providing the existing <code>IdentityId</code>. This API will create the identity in the specified <code>IdentityPoolId</code>.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [GetPrincipalTagAttributeMap](#getprincipaltagattributemap) - Use <code>GetPrincipalTagAttributeMap</code> to list all mappings between <code>PrincipalTags</code> and user attributes.
* [ListIdentities](#listidentities) - <p>Lists the identities in an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [ListIdentityPools](#listidentitypools) - <p>Lists all of the Cognito identity pools registered for your account.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [ListTagsForResource](#listtagsforresource) - <p>Lists the tags that are assigned to an Amazon Cognito identity pool.</p> <p>A tag is a label that you can apply to identity pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>You can use this action up to 10 times per second, per account.</p>
* [LookupDeveloperIdentity](#lookupdeveloperidentity) - <p>Retrieves the <code>IdentityID</code> associated with a <code>DeveloperUserIdentifier</code> or the list of <code>DeveloperUserIdentifier</code> values associated with an <code>IdentityId</code> for an existing identity. Either <code>IdentityID</code> or <code>DeveloperUserIdentifier</code> must not be null. If you supply only one of these values, the other value will be searched in the database and returned as a part of the response. If you supply both, <code>DeveloperUserIdentifier</code> will be matched against <code>IdentityID</code>. If the values are verified against the database, the response returns both values and is the same as the request. Otherwise a <code>ResourceConflictException</code> is thrown.</p> <p> <code>LookupDeveloperIdentity</code> is intended for low-throughput control plane operations: for example, to enable customer service to locate an identity ID by username. If you are using it for higher-volume operations such as user authentication, your requests are likely to be throttled. <a>GetOpenIdTokenForDeveloperIdentity</a> is a better option for higher-volume operations for user authentication.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [MergeDeveloperIdentities](#mergedeveloperidentities) - <p>Merges two users having different <code>IdentityId</code>s, existing in the same identity pool, and identified by the same developer provider. You can use this action to request that discrete users be merged and identified as a single user in the Cognito environment. Cognito associates the given source user (<code>SourceUserIdentifier</code>) with the <code>IdentityId</code> of the <code>DestinationUserIdentifier</code>. Only developer-authenticated users can be merged. If the users to be merged are associated with the same public provider, but as two different users, an exception will be thrown.</p> <p>The number of linked logins is limited to 20. So, the number of linked logins for the source user, <code>SourceUserIdentifier</code>, and the destination user, <code>DestinationUserIdentifier</code>, together should not be larger than 20. Otherwise, an exception will be thrown.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [SetIdentityPoolRoles](#setidentitypoolroles) - <p>Sets the roles for an identity pool. These roles are used when making calls to <a>GetCredentialsForIdentity</a> action.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [SetPrincipalTagAttributeMap](#setprincipaltagattributemap) - You can use this operation to use default (username and clientID) attribute or custom attribute mappings.
* [TagResource](#tagresource) - <p>Assigns a set of tags to the specified Amazon Cognito identity pool. A tag is a label that you can use to categorize and manage identity pools in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of an identity pool, one for testing and another for production, you might assign an <code>Environment</code> tag key to both identity pools. The value of this key might be <code>Test</code> for one identity pool and <code>Production</code> for the other.</p> <p>Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your identity pools. In an IAM policy, you can constrain permissions for identity pools based on specific tags or tag values.</p> <p>You can use this action up to 5 times per second, per account. An identity pool can have as many as 50 tags.</p>
* [UnlinkDeveloperIdentity](#unlinkdeveloperidentity) - <p>Unlinks a <code>DeveloperUserIdentifier</code> from an existing identity. Unlinked developer users will be considered new identities next time they are seen. If, for a given Cognito identity, you remove all federated identities as well as the developer user identifier, the Cognito identity becomes inaccessible.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [UnlinkIdentity](#unlinkidentity) - <p>Unlinks a federated identity from an existing account. Unlinked logins will be considered new identities next time they are seen. Removing the last linked login will make this identity inaccessible.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
* [UntagResource](#untagresource) - Removes the specified tags from the specified Amazon Cognito identity pool. You can use this action up to 5 times per second, per account
* [UpdateIdentityPool](#updateidentitypool) - <p>Updates an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>

## CreateIdentityPool

<p>Creates a new identity pool. The identity pool is a store of user identity information that is specific to your AWS account. The keys for <code>SupportedLoginProviders</code> are as follows:</p> <ul> <li> <p>Facebook: <code>graph.facebook.com</code> </p> </li> <li> <p>Google: <code>accounts.google.com</code> </p> </li> <li> <p>Amazon: <code>www.amazon.com</code> </p> </li> <li> <p>Twitter: <code>api.twitter.com</code> </p> </li> <li> <p>Digits: <code>www.digits.com</code> </p> </li> </ul> <p>You must use AWS Developer credentials to call this API.</p>

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
    res, err := s.SDK.CreateIdentityPool(ctx, operations.CreateIdentityPoolRequest{
        CreateIdentityPoolInput: shared.CreateIdentityPoolInput{
            AllowClassicFlow: sdk.Bool(false),
            AllowUnauthenticatedIdentities: false,
            CognitoIdentityProviders: []shared.CognitoIdentityProvider{
                shared.CognitoIdentityProvider{
                    ClientID: sdk.String("quod"),
                    ProviderName: sdk.String("esse"),
                    ServerSideTokenCheck: sdk.Bool(false),
                },
                shared.CognitoIdentityProvider{
                    ClientID: sdk.String("totam"),
                    ProviderName: sdk.String("porro"),
                    ServerSideTokenCheck: sdk.Bool(false),
                },
                shared.CognitoIdentityProvider{
                    ClientID: sdk.String("dolorum"),
                    ProviderName: sdk.String("dicta"),
                    ServerSideTokenCheck: sdk.Bool(false),
                },
                shared.CognitoIdentityProvider{
                    ClientID: sdk.String("nam"),
                    ProviderName: sdk.String("officia"),
                    ServerSideTokenCheck: sdk.Bool(false),
                },
            },
            DeveloperProviderName: sdk.String("occaecati"),
            IdentityPoolName: "fugit",
            IdentityPoolTags: map[string]string{
                "hic": "optio",
                "totam": "beatae",
                "commodi": "molestiae",
            },
            OpenIDConnectProviderARNs: []string{
                "qui",
                "impedit",
            },
            SamlProviderARNs: []string{
                "esse",
                "ipsum",
                "excepturi",
            },
            SupportedLoginProviders: map[string]string{
                "perferendis": "ad",
            },
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("laboriosam"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.CreateIdentityPoolXAmzTargetEnumAwsCognitoIdentityServiceCreateIdentityPool,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentityPool != nil {
        // handle response
    }
}
```

## DeleteIdentities

<p>Deletes identities from an identity pool. You can specify a list of 1-60 identities that you want to delete.</p> <p>You must use AWS Developer credentials to call this API.</p>

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
    res, err := s.SDK.DeleteIdentities(ctx, operations.DeleteIdentitiesRequest{
        DeleteIdentitiesInput: shared.DeleteIdentitiesInput{
            IdentityIdsToDelete: []string{
                "fuga",
                "in",
                "corporis",
                "iste",
            },
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("est"),
        XAmzTarget: operations.DeleteIdentitiesXAmzTargetEnumAwsCognitoIdentityServiceDeleteIdentities,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteIdentitiesResponse != nil {
        // handle response
    }
}
```

## DeleteIdentityPool

<p>Deletes an identity pool. Once a pool is deleted, users will not be able to authenticate with the pool.</p> <p>You must use AWS Developer credentials to call this API.</p>

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
    res, err := s.SDK.DeleteIdentityPool(ctx, operations.DeleteIdentityPoolRequest{
        DeleteIdentityPoolInput: shared.DeleteIdentityPoolInput{
            IdentityPoolID: "mollitia",
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.DeleteIdentityPoolXAmzTargetEnumAwsCognitoIdentityServiceDeleteIdentityPool,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeIdentity

<p>Returns metadata related to the given identity, including when the identity was created and any associated linked logins.</p> <p>You must use AWS Developer credentials to call this API.</p>

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
    res, err := s.SDK.DescribeIdentity(ctx, operations.DescribeIdentityRequest{
        DescribeIdentityInput: shared.DescribeIdentityInput{
            IdentityID: "omnis",
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzTarget: operations.DescribeIdentityXAmzTargetEnumAwsCognitoIdentityServiceDescribeIdentity,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentityDescription != nil {
        // handle response
    }
}
```

## DescribeIdentityPool

<p>Gets details about a particular identity pool, including the pool name, ID description, creation date, and current number of users.</p> <p>You must use AWS Developer credentials to call this API.</p>

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
    res, err := s.SDK.DescribeIdentityPool(ctx, operations.DescribeIdentityPoolRequest{
        DescribeIdentityPoolInput: shared.DescribeIdentityPoolInput{
            IdentityPoolID: "sapiente",
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.DescribeIdentityPoolXAmzTargetEnumAwsCognitoIdentityServiceDescribeIdentityPool,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentityPool != nil {
        // handle response
    }
}
```

## GetCredentialsForIdentity

<p>Returns credentials for the provided identity ID. Any provided logins will be validated against supported login providers. If the token is for cognito-identity.amazonaws.com, it will be passed through to AWS Security Token Service with the appropriate role for the token.</p> <p>This is a public API. You do not need any credentials to call this API.</p>

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
    res, err := s.SDK.GetCredentialsForIdentity(ctx, operations.GetCredentialsForIdentityRequest{
        GetCredentialsForIdentityInput: shared.GetCredentialsForIdentityInput{
            CustomRoleArn: sdk.String("occaecati"),
            IdentityID: "numquam",
            Logins: map[string]string{
                "quam": "molestiae",
                "velit": "error",
            },
        },
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzTarget: operations.GetCredentialsForIdentityXAmzTargetEnumAwsCognitoIdentityServiceGetCredentialsForIdentity,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCredentialsForIdentityResponse != nil {
        // handle response
    }
}
```

## GetID

<p>Generates (or retrieves) a Cognito ID. Supplying multiple logins will create an implicit linked account.</p> <p>This is a public API. You do not need any credentials to call this API.</p>

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
    res, err := s.SDK.GetID(ctx, operations.GetIDRequest{
        GetIDInput: shared.GetIDInput{
            AccountID: sdk.String("quo"),
            IdentityPoolID: "sequi",
            Logins: map[string]string{
                "ipsam": "id",
                "possimus": "aut",
                "quasi": "error",
                "temporibus": "laborum",
            },
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.GetIDXAmzTargetEnumAwsCognitoIdentityServiceGetID,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetIDResponse != nil {
        // handle response
    }
}
```

## GetIdentityPoolRoles

<p>Gets the roles for an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>

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
    res, err := s.SDK.GetIdentityPoolRoles(ctx, operations.GetIdentityPoolRolesRequest{
        GetIdentityPoolRolesInput: shared.GetIdentityPoolRolesInput{
            IdentityPoolID: "ipsa",
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("ut"),
        XAmzTarget: operations.GetIdentityPoolRolesXAmzTargetEnumAwsCognitoIdentityServiceGetIdentityPoolRoles,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetIdentityPoolRolesResponse != nil {
        // handle response
    }
}
```

## GetOpenIDToken

<p>Gets an OpenID token, using a known Cognito ID. This known Cognito ID is returned by <a>GetId</a>. You can optionally add additional logins for the identity. Supplying multiple logins creates an implicit link.</p> <p>The OpenID token is valid for 10 minutes.</p> <p>This is a public API. You do not need any credentials to call this API.</p>

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
    res, err := s.SDK.GetOpenIDToken(ctx, operations.GetOpenIDTokenRequest{
        GetOpenIDTokenInput: shared.GetOpenIDTokenInput{
            IdentityID: "maiores",
            Logins: map[string]string{
                "corporis": "dolore",
            },
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        XAmzTarget: operations.GetOpenIDTokenXAmzTargetEnumAwsCognitoIdentityServiceGetOpenIDToken,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOpenIDTokenResponse != nil {
        // handle response
    }
}
```

## GetOpenIDTokenForDeveloperIdentity

<p>Registers (or retrieves) a Cognito <code>IdentityId</code> and an OpenID Connect token for a user authenticated by your backend authentication process. Supplying multiple logins will create an implicit linked account. You can only specify one developer provider as part of the <code>Logins</code> map, which is linked to the identity pool. The developer provider is the "domain" by which Cognito will refer to your users.</p> <p>You can use <code>GetOpenIdTokenForDeveloperIdentity</code> to create a new identity and to link new logins (that is, user credentials issued by a public provider or developer provider) to an existing identity. When you want to create a new identity, the <code>IdentityId</code> should be null. When you want to associate a new login with an existing authenticated/unauthenticated identity, you can do so by providing the existing <code>IdentityId</code>. This API will create the identity in the specified <code>IdentityPoolId</code>.</p> <p>You must use AWS Developer credentials to call this API.</p>

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
    res, err := s.SDK.GetOpenIDTokenForDeveloperIdentity(ctx, operations.GetOpenIDTokenForDeveloperIdentityRequest{
        GetOpenIDTokenForDeveloperIdentityInput: shared.GetOpenIDTokenForDeveloperIdentityInput{
            IdentityID: sdk.String("quae"),
            IdentityPoolID: "ipsum",
            Logins: map[string]string{
                "molestias": "excepturi",
                "pariatur": "modi",
                "praesentium": "rem",
            },
            PrincipalTags: map[string]string{
                "quasi": "repudiandae",
                "sint": "veritatis",
                "itaque": "incidunt",
                "enim": "consequatur",
            },
            TokenDuration: sdk.Int64(667411),
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("modi"),
        XAmzTarget: operations.GetOpenIDTokenForDeveloperIdentityXAmzTargetEnumAwsCognitoIdentityServiceGetOpenIDTokenForDeveloperIdentity,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOpenIDTokenForDeveloperIdentityResponse != nil {
        // handle response
    }
}
```

## GetPrincipalTagAttributeMap

Use <code>GetPrincipalTagAttributeMap</code> to list all mappings between <code>PrincipalTags</code> and user attributes.

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
    res, err := s.SDK.GetPrincipalTagAttributeMap(ctx, operations.GetPrincipalTagAttributeMapRequest{
        GetPrincipalTagAttributeMapInput: shared.GetPrincipalTagAttributeMapInput{
            IdentityPoolID: "qui",
            IdentityProviderName: "aliquid",
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("alias"),
        XAmzTarget: operations.GetPrincipalTagAttributeMapXAmzTargetEnumAwsCognitoIdentityServiceGetPrincipalTagAttributeMap,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPrincipalTagAttributeMapResponse != nil {
        // handle response
    }
}
```

## ListIdentities

<p>Lists the identities in an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>

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
    res, err := s.SDK.ListIdentities(ctx, operations.ListIdentitiesRequest{
        ListIdentitiesInput: shared.ListIdentitiesInput{
            HideDisabled: sdk.Bool(false),
            IdentityPoolID: "fugit",
            MaxResults: 677817,
            NextToken: sdk.String("excepturi"),
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("non"),
        XAmzTarget: operations.ListIdentitiesXAmzTargetEnumAwsCognitoIdentityServiceListIdentities,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIdentitiesResponse != nil {
        // handle response
    }
}
```

## ListIdentityPools

<p>Lists all of the Cognito identity pools registered for your account.</p> <p>You must use AWS Developer credentials to call this API.</p>

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
    res, err := s.SDK.ListIdentityPools(ctx, operations.ListIdentityPoolsRequest{
        ListIdentityPoolsInput: shared.ListIdentityPoolsInput{
            MaxResults: 756107,
            NextToken: sdk.String("sint"),
        },
        MaxResults: sdk.String("aliquid"),
        NextToken: sdk.String("provident"),
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.ListIdentityPoolsXAmzTargetEnumAwsCognitoIdentityServiceListIdentityPools,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIdentityPoolsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

<p>Lists the tags that are assigned to an Amazon Cognito identity pool.</p> <p>A tag is a label that you can apply to identity pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>You can use this action up to 10 times per second, per account.</p>

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceInput: shared.ListTagsForResourceInput{
            ResourceArn: "in",
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("cumque"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumAwsCognitoIdentityServiceListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## LookupDeveloperIdentity

<p>Retrieves the <code>IdentityID</code> associated with a <code>DeveloperUserIdentifier</code> or the list of <code>DeveloperUserIdentifier</code> values associated with an <code>IdentityId</code> for an existing identity. Either <code>IdentityID</code> or <code>DeveloperUserIdentifier</code> must not be null. If you supply only one of these values, the other value will be searched in the database and returned as a part of the response. If you supply both, <code>DeveloperUserIdentifier</code> will be matched against <code>IdentityID</code>. If the values are verified against the database, the response returns both values and is the same as the request. Otherwise a <code>ResourceConflictException</code> is thrown.</p> <p> <code>LookupDeveloperIdentity</code> is intended for low-throughput control plane operations: for example, to enable customer service to locate an identity ID by username. If you are using it for higher-volume operations such as user authentication, your requests are likely to be throttled. <a>GetOpenIdTokenForDeveloperIdentity</a> is a better option for higher-volume operations for user authentication.</p> <p>You must use AWS Developer credentials to call this API.</p>

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
    res, err := s.SDK.LookupDeveloperIdentity(ctx, operations.LookupDeveloperIdentityRequest{
        LookupDeveloperIdentityInput: shared.LookupDeveloperIdentityInput{
            DeveloperUserIdentifier: sdk.String("facere"),
            IdentityID: sdk.String("ea"),
            IdentityPoolID: "aliquid",
            MaxResults: sdk.Int64(675439),
            NextToken: sdk.String("accusamus"),
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.LookupDeveloperIdentityXAmzTargetEnumAwsCognitoIdentityServiceLookupDeveloperIdentity,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LookupDeveloperIdentityResponse != nil {
        // handle response
    }
}
```

## MergeDeveloperIdentities

<p>Merges two users having different <code>IdentityId</code>s, existing in the same identity pool, and identified by the same developer provider. You can use this action to request that discrete users be merged and identified as a single user in the Cognito environment. Cognito associates the given source user (<code>SourceUserIdentifier</code>) with the <code>IdentityId</code> of the <code>DestinationUserIdentifier</code>. Only developer-authenticated users can be merged. If the users to be merged are associated with the same public provider, but as two different users, an exception will be thrown.</p> <p>The number of linked logins is limited to 20. So, the number of linked logins for the source user, <code>SourceUserIdentifier</code>, and the destination user, <code>DestinationUserIdentifier</code>, together should not be larger than 20. Otherwise, an exception will be thrown.</p> <p>You must use AWS Developer credentials to call this API.</p>

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
    res, err := s.SDK.MergeDeveloperIdentities(ctx, operations.MergeDeveloperIdentitiesRequest{
        MergeDeveloperIdentitiesInput: shared.MergeDeveloperIdentitiesInput{
            DestinationUserIdentifier: "nam",
            DeveloperProviderName: "id",
            IdentityPoolID: "blanditiis",
            SourceUserIdentifier: "deleniti",
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.MergeDeveloperIdentitiesXAmzTargetEnumAwsCognitoIdentityServiceMergeDeveloperIdentities,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MergeDeveloperIdentitiesResponse != nil {
        // handle response
    }
}
```

## SetIdentityPoolRoles

<p>Sets the roles for an identity pool. These roles are used when making calls to <a>GetCredentialsForIdentity</a> action.</p> <p>You must use AWS Developer credentials to call this API.</p>

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
    res, err := s.SDK.SetIdentityPoolRoles(ctx, operations.SetIdentityPoolRolesRequest{
        SetIdentityPoolRolesInput: shared.SetIdentityPoolRolesInput{
            IdentityPoolID: "molestiae",
            RoleMappings: map[string]shared.RoleMapping{
                "nihil": shared.RoleMapping{
                    AmbiguousRoleResolution: shared.AmbiguousRoleResolutionTypeEnumAuthenticatedRole.ToPointer(),
                    RulesConfiguration: &shared.RulesConfigurationType{
                        Rules: []shared.MappingRule{
                            shared.MappingRule{
                                Claim: "id",
                                MatchType: shared.MappingRuleMatchTypeEnumContains,
                                RoleARN: "labore",
                                Value: "suscipit",
                            },
                            shared.MappingRule{
                                Claim: "natus",
                                MatchType: shared.MappingRuleMatchTypeEnumStartsWith,
                                RoleARN: "eum",
                                Value: "vero",
                            },
                            shared.MappingRule{
                                Claim: "aspernatur",
                                MatchType: shared.MappingRuleMatchTypeEnumEquals,
                                RoleARN: "magnam",
                                Value: "et",
                            },
                        },
                    },
                    Type: shared.RoleMappingTypeEnumRules,
                },
            },
            Roles: map[string]string{
                "provident": "quos",
                "sint": "accusantium",
            },
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.SetIdentityPoolRolesXAmzTargetEnumAwsCognitoIdentityServiceSetIdentityPoolRoles,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SetPrincipalTagAttributeMap

You can use this operation to use default (username and clientID) attribute or custom attribute mappings.

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
    res, err := s.SDK.SetPrincipalTagAttributeMap(ctx, operations.SetPrincipalTagAttributeMapRequest{
        SetPrincipalTagAttributeMapInput: shared.SetPrincipalTagAttributeMapInput{
            IdentityPoolID: "odit",
            IdentityProviderName: "nemo",
            PrincipalTags: map[string]string{
                "iure": "doloribus",
            },
            UseDefaults: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.SetPrincipalTagAttributeMapXAmzTargetEnumAwsCognitoIdentityServiceSetPrincipalTagAttributeMap,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetPrincipalTagAttributeMapResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>Assigns a set of tags to the specified Amazon Cognito identity pool. A tag is a label that you can use to categorize and manage identity pools in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of an identity pool, one for testing and another for production, you might assign an <code>Environment</code> tag key to both identity pools. The value of this key might be <code>Test</code> for one identity pool and <code>Production</code> for the other.</p> <p>Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your identity pools. In an IAM policy, you can constrain permissions for identity pools based on specific tags or tag values.</p> <p>You can use this action up to 5 times per second, per account. An identity pool can have as many as 50 tags.</p>

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceInput: shared.TagResourceInput{
            ResourceArn: "architecto",
            Tags: map[string]string{
                "ullam": "expedita",
                "nihil": "repellat",
                "quibusdam": "sed",
                "saepe": "pariatur",
            },
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumAwsCognitoIdentityServiceTagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UnlinkDeveloperIdentity

<p>Unlinks a <code>DeveloperUserIdentifier</code> from an existing identity. Unlinked developer users will be considered new identities next time they are seen. If, for a given Cognito identity, you remove all federated identities as well as the developer user identifier, the Cognito identity becomes inaccessible.</p> <p>You must use AWS Developer credentials to call this API.</p>

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
    res, err := s.SDK.UnlinkDeveloperIdentity(ctx, operations.UnlinkDeveloperIdentityRequest{
        UnlinkDeveloperIdentityInput: shared.UnlinkDeveloperIdentityInput{
            DeveloperProviderName: "illum",
            DeveloperUserIdentifier: "pariatur",
            IdentityID: "maxime",
            IdentityPoolID: "ea",
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.UnlinkDeveloperIdentityXAmzTargetEnumAwsCognitoIdentityServiceUnlinkDeveloperIdentity,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UnlinkIdentity

<p>Unlinks a federated identity from an existing account. Unlinked logins will be considered new identities next time they are seen. Removing the last linked login will make this identity inaccessible.</p> <p>This is a public API. You do not need any credentials to call this API.</p>

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
    res, err := s.SDK.UnlinkIdentity(ctx, operations.UnlinkIdentityRequest{
        UnlinkIdentityInput: shared.UnlinkIdentityInput{
            IdentityID: "ipsam",
            Logins: map[string]string{
                "autem": "nam",
                "eaque": "pariatur",
            },
            LoginsToRemove: []string{
                "voluptatibus",
                "perferendis",
            },
        },
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.UnlinkIdentityXAmzTargetEnumAwsCognitoIdentityServiceUnlinkIdentity,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UntagResource

Removes the specified tags from the specified Amazon Cognito identity pool. You can use this action up to 5 times per second, per account

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceInput: shared.UntagResourceInput{
            ResourceArn: "nobis",
            TagKeys: []string{
                "quis",
            },
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("nesciunt"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumAwsCognitoIdentityServiceUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateIdentityPool

<p>Updates an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>

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
    res, err := s.SDK.UpdateIdentityPool(ctx, operations.UpdateIdentityPoolRequest{
        IdentityPool: shared.IdentityPool{
            AllowClassicFlow: sdk.Bool(false),
            AllowUnauthenticatedIdentities: false,
            CognitoIdentityProviders: []shared.CognitoIdentityProvider{
                shared.CognitoIdentityProvider{
                    ClientID: sdk.String("minus"),
                    ProviderName: sdk.String("quam"),
                    ServerSideTokenCheck: sdk.Bool(false),
                },
            },
            DeveloperProviderName: sdk.String("dolor"),
            IdentityPoolID: "vero",
            IdentityPoolName: "nostrum",
            IdentityPoolTags: map[string]string{
                "recusandae": "omnis",
                "facilis": "perspiciatis",
                "voluptatem": "porro",
                "consequuntur": "blanditiis",
            },
            OpenIDConnectProviderARNs: []string{
                "eaque",
                "occaecati",
                "rerum",
            },
            SamlProviderARNs: []string{
                "asperiores",
            },
            SupportedLoginProviders: map[string]string{
                "modi": "iste",
                "dolorum": "deleniti",
                "pariatur": "provident",
                "nobis": "libero",
            },
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.UpdateIdentityPoolXAmzTargetEnumAwsCognitoIdentityServiceUpdateIdentityPool,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentityPool != nil {
        // handle response
    }
}
```
