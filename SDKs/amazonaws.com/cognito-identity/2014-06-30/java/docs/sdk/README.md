# SDK

## Overview

<fullname>Amazon Cognito Federated Identities</fullname> <p>Amazon Cognito Federated Identities is a web service that delivers scoped temporary credentials to mobile devices and other untrusted environments. It uniquely identifies a device and supplies the user with a consistent identity over the lifetime of an application.</p> <p>Using Amazon Cognito Federated Identities, you can enable authentication with one or more third-party identity providers (Facebook, Google, or Login with Amazon) or an Amazon Cognito user pool, and you can also choose to support unauthenticated access from your app. Cognito delivers a unique identifier for each user and acts as an OpenID token provider trusted by AWS Security Token Service (STS) to access temporary, limited-privilege AWS credentials.</p> <p>For a description of the authentication flow from the Amazon Cognito Developer Guide see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html">Authentication Flow</a>.</p> <p>For more information see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html">Amazon Cognito Federated Identities</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cognito-identity/>
### Available Operations

* [createIdentityPool](#createidentitypool) - <p>Creates a new identity pool. The identity pool is a store of user identity information that is specific to your AWS account. The keys for <code>SupportedLoginProviders</code> are as follows:</p> <ul> <li> <p>Facebook: <code>graph.facebook.com</code> </p> </li> <li> <p>Google: <code>accounts.google.com</code> </p> </li> <li> <p>Amazon: <code>www.amazon.com</code> </p> </li> <li> <p>Twitter: <code>api.twitter.com</code> </p> </li> <li> <p>Digits: <code>www.digits.com</code> </p> </li> </ul> <p>You must use AWS Developer credentials to call this API.</p>
* [deleteIdentities](#deleteidentities) - <p>Deletes identities from an identity pool. You can specify a list of 1-60 identities that you want to delete.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [deleteIdentityPool](#deleteidentitypool) - <p>Deletes an identity pool. Once a pool is deleted, users will not be able to authenticate with the pool.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [describeIdentity](#describeidentity) - <p>Returns metadata related to the given identity, including when the identity was created and any associated linked logins.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [describeIdentityPool](#describeidentitypool) - <p>Gets details about a particular identity pool, including the pool name, ID description, creation date, and current number of users.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [getCredentialsForIdentity](#getcredentialsforidentity) - <p>Returns credentials for the provided identity ID. Any provided logins will be validated against supported login providers. If the token is for cognito-identity.amazonaws.com, it will be passed through to AWS Security Token Service with the appropriate role for the token.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
* [getId](#getid) - <p>Generates (or retrieves) a Cognito ID. Supplying multiple logins will create an implicit linked account.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
* [getIdentityPoolRoles](#getidentitypoolroles) - <p>Gets the roles for an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [getOpenIdToken](#getopenidtoken) - <p>Gets an OpenID token, using a known Cognito ID. This known Cognito ID is returned by <a>GetId</a>. You can optionally add additional logins for the identity. Supplying multiple logins creates an implicit link.</p> <p>The OpenID token is valid for 10 minutes.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
* [getOpenIdTokenForDeveloperIdentity](#getopenidtokenfordeveloperidentity) - <p>Registers (or retrieves) a Cognito <code>IdentityId</code> and an OpenID Connect token for a user authenticated by your backend authentication process. Supplying multiple logins will create an implicit linked account. You can only specify one developer provider as part of the <code>Logins</code> map, which is linked to the identity pool. The developer provider is the "domain" by which Cognito will refer to your users.</p> <p>You can use <code>GetOpenIdTokenForDeveloperIdentity</code> to create a new identity and to link new logins (that is, user credentials issued by a public provider or developer provider) to an existing identity. When you want to create a new identity, the <code>IdentityId</code> should be null. When you want to associate a new login with an existing authenticated/unauthenticated identity, you can do so by providing the existing <code>IdentityId</code>. This API will create the identity in the specified <code>IdentityPoolId</code>.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [getPrincipalTagAttributeMap](#getprincipaltagattributemap) - Use <code>GetPrincipalTagAttributeMap</code> to list all mappings between <code>PrincipalTags</code> and user attributes.
* [listIdentities](#listidentities) - <p>Lists the identities in an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [listIdentityPools](#listidentitypools) - <p>Lists all of the Cognito identity pools registered for your account.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [listTagsForResource](#listtagsforresource) - <p>Lists the tags that are assigned to an Amazon Cognito identity pool.</p> <p>A tag is a label that you can apply to identity pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>You can use this action up to 10 times per second, per account.</p>
* [lookupDeveloperIdentity](#lookupdeveloperidentity) - <p>Retrieves the <code>IdentityID</code> associated with a <code>DeveloperUserIdentifier</code> or the list of <code>DeveloperUserIdentifier</code> values associated with an <code>IdentityId</code> for an existing identity. Either <code>IdentityID</code> or <code>DeveloperUserIdentifier</code> must not be null. If you supply only one of these values, the other value will be searched in the database and returned as a part of the response. If you supply both, <code>DeveloperUserIdentifier</code> will be matched against <code>IdentityID</code>. If the values are verified against the database, the response returns both values and is the same as the request. Otherwise a <code>ResourceConflictException</code> is thrown.</p> <p> <code>LookupDeveloperIdentity</code> is intended for low-throughput control plane operations: for example, to enable customer service to locate an identity ID by username. If you are using it for higher-volume operations such as user authentication, your requests are likely to be throttled. <a>GetOpenIdTokenForDeveloperIdentity</a> is a better option for higher-volume operations for user authentication.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [mergeDeveloperIdentities](#mergedeveloperidentities) - <p>Merges two users having different <code>IdentityId</code>s, existing in the same identity pool, and identified by the same developer provider. You can use this action to request that discrete users be merged and identified as a single user in the Cognito environment. Cognito associates the given source user (<code>SourceUserIdentifier</code>) with the <code>IdentityId</code> of the <code>DestinationUserIdentifier</code>. Only developer-authenticated users can be merged. If the users to be merged are associated with the same public provider, but as two different users, an exception will be thrown.</p> <p>The number of linked logins is limited to 20. So, the number of linked logins for the source user, <code>SourceUserIdentifier</code>, and the destination user, <code>DestinationUserIdentifier</code>, together should not be larger than 20. Otherwise, an exception will be thrown.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [setIdentityPoolRoles](#setidentitypoolroles) - <p>Sets the roles for an identity pool. These roles are used when making calls to <a>GetCredentialsForIdentity</a> action.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [setPrincipalTagAttributeMap](#setprincipaltagattributemap) - You can use this operation to use default (username and clientID) attribute or custom attribute mappings.
* [tagResource](#tagresource) - <p>Assigns a set of tags to the specified Amazon Cognito identity pool. A tag is a label that you can use to categorize and manage identity pools in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of an identity pool, one for testing and another for production, you might assign an <code>Environment</code> tag key to both identity pools. The value of this key might be <code>Test</code> for one identity pool and <code>Production</code> for the other.</p> <p>Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your identity pools. In an IAM policy, you can constrain permissions for identity pools based on specific tags or tag values.</p> <p>You can use this action up to 5 times per second, per account. An identity pool can have as many as 50 tags.</p>
* [unlinkDeveloperIdentity](#unlinkdeveloperidentity) - <p>Unlinks a <code>DeveloperUserIdentifier</code> from an existing identity. Unlinked developer users will be considered new identities next time they are seen. If, for a given Cognito identity, you remove all federated identities as well as the developer user identifier, the Cognito identity becomes inaccessible.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [unlinkIdentity](#unlinkidentity) - <p>Unlinks a federated identity from an existing account. Unlinked logins will be considered new identities next time they are seen. Removing the last linked login will make this identity inaccessible.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
* [untagResource](#untagresource) - Removes the specified tags from the specified Amazon Cognito identity pool. You can use this action up to 5 times per second, per account
* [updateIdentityPool](#updateidentitypool) - <p>Updates an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>

## createIdentityPool

<p>Creates a new identity pool. The identity pool is a store of user identity information that is specific to your AWS account. The keys for <code>SupportedLoginProviders</code> are as follows:</p> <ul> <li> <p>Facebook: <code>graph.facebook.com</code> </p> </li> <li> <p>Google: <code>accounts.google.com</code> </p> </li> <li> <p>Amazon: <code>www.amazon.com</code> </p> </li> <li> <p>Twitter: <code>api.twitter.com</code> </p> </li> <li> <p>Digits: <code>www.digits.com</code> </p> </li> </ul> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateIdentityPoolRequest;
import org.openapis.openapi.models.operations.CreateIdentityPoolResponse;
import org.openapis.openapi.models.operations.CreateIdentityPoolXAmzTargetEnum;
import org.openapis.openapi.models.shared.CognitoIdentityProvider;
import org.openapis.openapi.models.shared.CreateIdentityPoolInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateIdentityPoolRequest req = new CreateIdentityPoolRequest(                new CreateIdentityPoolInput(false, "at") {{
                                allowClassicFlow = false;
                                cognitoIdentityProviders = new org.openapis.openapi.models.shared.CognitoIdentityProvider[]{{
                                    add(new CognitoIdentityProvider() {{
                                        clientId = "maiores";
                                        providerName = "molestiae";
                                        serverSideTokenCheck = false;
                                    }}),
                                    add(new CognitoIdentityProvider() {{
                                        clientId = "quod";
                                        providerName = "quod";
                                        serverSideTokenCheck = false;
                                    }}),
                                    add(new CognitoIdentityProvider() {{
                                        clientId = "esse";
                                        providerName = "totam";
                                        serverSideTokenCheck = false;
                                    }}),
                                    add(new CognitoIdentityProvider() {{
                                        clientId = "porro";
                                        providerName = "dolorum";
                                        serverSideTokenCheck = false;
                                    }}),
                                }};
                                developerProviderName = "dicta";
                                identityPoolTags = new java.util.HashMap<String, String>() {{
                                    put("officia", "occaecati");
                                    put("fugit", "deleniti");
                                    put("hic", "optio");
                                }};
                                openIdConnectProviderARNs = new String[]{{
                                    add("beatae"),
                                    add("commodi"),
                                    add("molestiae"),
                                }};
                                samlProviderARNs = new String[]{{
                                    add("qui"),
                                    add("impedit"),
                                }};
                                supportedLoginProviders = new java.util.HashMap<String, String>() {{
                                    put("esse", "ipsum");
                                    put("excepturi", "aspernatur");
                                    put("perferendis", "ad");
                                }};
                            }};, CreateIdentityPoolXAmzTargetEnum.AWS_COGNITO_IDENTITY_SERVICE_CREATE_IDENTITY_POOL) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "sed";
                xAmzCredential = "iste";
                xAmzDate = "dolor";
                xAmzSecurityToken = "natus";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "hic";
            }};            

            CreateIdentityPoolResponse res = sdk.sdk.createIdentityPool(req);

            if (res.identityPool != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteIdentities

<p>Deletes identities from an identity pool. You can specify a list of 1-60 identities that you want to delete.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIdentitiesRequest;
import org.openapis.openapi.models.operations.DeleteIdentitiesResponse;
import org.openapis.openapi.models.operations.DeleteIdentitiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteIdentitiesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteIdentitiesRequest req = new DeleteIdentitiesRequest(                new DeleteIdentitiesInput(                new String[]{{
                                                add("in"),
                                                add("corporis"),
                                                add("iste"),
                                            }});, DeleteIdentitiesXAmzTargetEnum.AWS_COGNITO_IDENTITY_SERVICE_DELETE_IDENTITIES) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "quidem";
                xAmzDate = "architecto";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "est";
            }};            

            DeleteIdentitiesResponse res = sdk.sdk.deleteIdentities(req);

            if (res.deleteIdentitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteIdentityPool

<p>Deletes an identity pool. Once a pool is deleted, users will not be able to authenticate with the pool.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIdentityPoolRequest;
import org.openapis.openapi.models.operations.DeleteIdentityPoolResponse;
import org.openapis.openapi.models.operations.DeleteIdentityPoolXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteIdentityPoolInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteIdentityPoolRequest req = new DeleteIdentityPoolRequest(                new DeleteIdentityPoolInput("laborum");, DeleteIdentityPoolXAmzTargetEnum.AWS_COGNITO_IDENTITY_SERVICE_DELETE_IDENTITY_POOL) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "corporis";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "omnis";
            }};            

            DeleteIdentityPoolResponse res = sdk.sdk.deleteIdentityPool(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeIdentity

<p>Returns metadata related to the given identity, including when the identity was created and any associated linked logins.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeIdentityRequest;
import org.openapis.openapi.models.operations.DescribeIdentityResponse;
import org.openapis.openapi.models.operations.DescribeIdentityXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeIdentityInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeIdentityRequest req = new DescribeIdentityRequest(                new DescribeIdentityInput("minima");, DescribeIdentityXAmzTargetEnum.AWS_COGNITO_IDENTITY_SERVICE_DESCRIBE_IDENTITY) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "iure";
                xAmzDate = "culpa";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "architecto";
            }};            

            DescribeIdentityResponse res = sdk.sdk.describeIdentity(req);

            if (res.identityDescription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeIdentityPool

<p>Gets details about a particular identity pool, including the pool name, ID description, creation date, and current number of users.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeIdentityPoolRequest;
import org.openapis.openapi.models.operations.DescribeIdentityPoolResponse;
import org.openapis.openapi.models.operations.DescribeIdentityPoolXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeIdentityPoolInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeIdentityPoolRequest req = new DescribeIdentityPoolRequest(                new DescribeIdentityPoolInput("dolorem");, DescribeIdentityPoolXAmzTargetEnum.AWS_COGNITO_IDENTITY_SERVICE_DESCRIBE_IDENTITY_POOL) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "repellat";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "commodi";
            }};            

            DescribeIdentityPoolResponse res = sdk.sdk.describeIdentityPool(req);

            if (res.identityPool != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCredentialsForIdentity

<p>Returns credentials for the provided identity ID. Any provided logins will be validated against supported login providers. If the token is for cognito-identity.amazonaws.com, it will be passed through to AWS Security Token Service with the appropriate role for the token.</p> <p>This is a public API. You do not need any credentials to call this API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCredentialsForIdentityRequest;
import org.openapis.openapi.models.operations.GetCredentialsForIdentityResponse;
import org.openapis.openapi.models.operations.GetCredentialsForIdentityXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetCredentialsForIdentityInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCredentialsForIdentityRequest req = new GetCredentialsForIdentityRequest(                new GetCredentialsForIdentityInput("molestiae") {{
                                customRoleArn = "velit";
                                logins = new java.util.HashMap<String, String>() {{
                                    put("quia", "quis");
                                    put("vitae", "laborum");
                                    put("animi", "enim");
                                }};
                            }};, GetCredentialsForIdentityXAmzTargetEnum.AWS_COGNITO_IDENTITY_SERVICE_GET_CREDENTIALS_FOR_IDENTITY) {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "quo";
                xAmzCredential = "sequi";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "id";
                xAmzSignedHeaders = "possimus";
            }};            

            GetCredentialsForIdentityResponse res = sdk.sdk.getCredentialsForIdentity(req);

            if (res.getCredentialsForIdentityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getId

<p>Generates (or retrieves) a Cognito ID. Supplying multiple logins will create an implicit linked account.</p> <p>This is a public API. You do not need any credentials to call this API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIdRequest;
import org.openapis.openapi.models.operations.GetIdResponse;
import org.openapis.openapi.models.operations.GetIdXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetIdInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIdRequest req = new GetIdRequest(                new GetIdInput("quasi") {{
                                accountId = "error";
                                logins = new java.util.HashMap<String, String>() {{
                                    put("laborum", "quasi");
                                    put("reiciendis", "voluptatibus");
                                    put("vero", "nihil");
                                    put("praesentium", "voluptatibus");
                                }};
                            }};, GetIdXAmzTargetEnum.AWS_COGNITO_IDENTITY_SERVICE_GET_ID) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "voluptate";
                xAmzDate = "cum";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "doloremque";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            GetIdResponse res = sdk.sdk.getId(req);

            if (res.getIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIdentityPoolRoles

<p>Gets the roles for an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIdentityPoolRolesRequest;
import org.openapis.openapi.models.operations.GetIdentityPoolRolesResponse;
import org.openapis.openapi.models.operations.GetIdentityPoolRolesXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetIdentityPoolRolesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIdentityPoolRolesRequest req = new GetIdentityPoolRolesRequest(                new GetIdentityPoolRolesInput("maiores");, GetIdentityPoolRolesXAmzTargetEnum.AWS_COGNITO_IDENTITY_SERVICE_GET_IDENTITY_POOL_ROLES) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "dolore";
                xAmzDate = "iusto";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "enim";
            }};            

            GetIdentityPoolRolesResponse res = sdk.sdk.getIdentityPoolRoles(req);

            if (res.getIdentityPoolRolesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOpenIdToken

<p>Gets an OpenID token, using a known Cognito ID. This known Cognito ID is returned by <a>GetId</a>. You can optionally add additional logins for the identity. Supplying multiple logins creates an implicit link.</p> <p>The OpenID token is valid for 10 minutes.</p> <p>This is a public API. You do not need any credentials to call this API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOpenIdTokenRequest;
import org.openapis.openapi.models.operations.GetOpenIdTokenResponse;
import org.openapis.openapi.models.operations.GetOpenIdTokenXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetOpenIdTokenInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOpenIdTokenRequest req = new GetOpenIdTokenRequest(                new GetOpenIdTokenInput("commodi") {{
                                logins = new java.util.HashMap<String, String>() {{
                                    put("quae", "ipsum");
                                    put("quidem", "molestias");
                                    put("excepturi", "pariatur");
                                    put("modi", "praesentium");
                                }};
                            }};, GetOpenIdTokenXAmzTargetEnum.AWS_COGNITO_IDENTITY_SERVICE_GET_OPEN_ID_TOKEN) {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "quasi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "sint";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "itaque";
            }};            

            GetOpenIdTokenResponse res = sdk.sdk.getOpenIdToken(req);

            if (res.getOpenIdTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOpenIdTokenForDeveloperIdentity

<p>Registers (or retrieves) a Cognito <code>IdentityId</code> and an OpenID Connect token for a user authenticated by your backend authentication process. Supplying multiple logins will create an implicit linked account. You can only specify one developer provider as part of the <code>Logins</code> map, which is linked to the identity pool. The developer provider is the "domain" by which Cognito will refer to your users.</p> <p>You can use <code>GetOpenIdTokenForDeveloperIdentity</code> to create a new identity and to link new logins (that is, user credentials issued by a public provider or developer provider) to an existing identity. When you want to create a new identity, the <code>IdentityId</code> should be null. When you want to associate a new login with an existing authenticated/unauthenticated identity, you can do so by providing the existing <code>IdentityId</code>. This API will create the identity in the specified <code>IdentityPoolId</code>.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOpenIdTokenForDeveloperIdentityRequest;
import org.openapis.openapi.models.operations.GetOpenIdTokenForDeveloperIdentityResponse;
import org.openapis.openapi.models.operations.GetOpenIdTokenForDeveloperIdentityXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetOpenIdTokenForDeveloperIdentityInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOpenIdTokenForDeveloperIdentityRequest req = new GetOpenIdTokenForDeveloperIdentityRequest(                new GetOpenIdTokenForDeveloperIdentityInput("enim",                 new java.util.HashMap<String, String>() {{
                                                put("est", "quibusdam");
                                            }}) {{
                                identityId = "explicabo";
                                principalTags = new java.util.HashMap<String, String>() {{
                                    put("distinctio", "quibusdam");
                                    put("labore", "modi");
                                    put("qui", "aliquid");
                                }};
                                tokenDuration = 586513L;
                            }};, GetOpenIdTokenForDeveloperIdentityXAmzTargetEnum.AWS_COGNITO_IDENTITY_SERVICE_GET_OPEN_ID_TOKEN_FOR_DEVELOPER_IDENTITY) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "magni";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "fugit";
            }};            

            GetOpenIdTokenForDeveloperIdentityResponse res = sdk.sdk.getOpenIdTokenForDeveloperIdentity(req);

            if (res.getOpenIdTokenForDeveloperIdentityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPrincipalTagAttributeMap

Use <code>GetPrincipalTagAttributeMap</code> to list all mappings between <code>PrincipalTags</code> and user attributes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPrincipalTagAttributeMapRequest;
import org.openapis.openapi.models.operations.GetPrincipalTagAttributeMapResponse;
import org.openapis.openapi.models.operations.GetPrincipalTagAttributeMapXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetPrincipalTagAttributeMapInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPrincipalTagAttributeMapRequest req = new GetPrincipalTagAttributeMapRequest(                new GetPrincipalTagAttributeMapInput("excepturi", "tempora");, GetPrincipalTagAttributeMapXAmzTargetEnum.AWS_COGNITO_IDENTITY_SERVICE_GET_PRINCIPAL_TAG_ATTRIBUTE_MAP) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "labore";
                xAmzDate = "delectus";
                xAmzSecurityToken = "eum";
                xAmzSignature = "non";
                xAmzSignedHeaders = "eligendi";
            }};            

            GetPrincipalTagAttributeMapResponse res = sdk.sdk.getPrincipalTagAttributeMap(req);

            if (res.getPrincipalTagAttributeMapResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIdentities

<p>Lists the identities in an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIdentitiesRequest;
import org.openapis.openapi.models.operations.ListIdentitiesResponse;
import org.openapis.openapi.models.operations.ListIdentitiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListIdentitiesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListIdentitiesRequest req = new ListIdentitiesRequest(                new ListIdentitiesInput("aliquid", 592042L) {{
                                hideDisabled = false;
                                nextToken = "necessitatibus";
                            }};, ListIdentitiesXAmzTargetEnum.AWS_COGNITO_IDENTITY_SERVICE_LIST_IDENTITIES) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "officia";
                xAmzCredential = "dolor";
                xAmzDate = "debitis";
                xAmzSecurityToken = "a";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "in";
            }};            

            ListIdentitiesResponse res = sdk.sdk.listIdentities(req);

            if (res.listIdentitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIdentityPools

<p>Lists all of the Cognito identity pools registered for your account.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIdentityPoolsRequest;
import org.openapis.openapi.models.operations.ListIdentityPoolsResponse;
import org.openapis.openapi.models.operations.ListIdentityPoolsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListIdentityPoolsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListIdentityPoolsRequest req = new ListIdentityPoolsRequest(                new ListIdentityPoolsInput(846409L) {{
                                nextToken = "maiores";
                            }};, ListIdentityPoolsXAmzTargetEnum.AWS_COGNITO_IDENTITY_SERVICE_LIST_IDENTITY_POOLS) {{
                maxResults = "rerum";
                nextToken = "dicta";
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "facere";
                xAmzDate = "ea";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "accusamus";
            }};            

            ListIdentityPoolsResponse res = sdk.sdk.listIdentityPools(req);

            if (res.listIdentityPoolsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

<p>Lists the tags that are assigned to an Amazon Cognito identity pool.</p> <p>A tag is a label that you can apply to identity pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>You can use this action up to 10 times per second, per account.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceInput("occaecati");, ListTagsForResourceXAmzTargetEnum.AWS_COGNITO_IDENTITY_SERVICE_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "delectus";
                xAmzDate = "quidem";
                xAmzSecurityToken = "provident";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "id";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lookupDeveloperIdentity

<p>Retrieves the <code>IdentityID</code> associated with a <code>DeveloperUserIdentifier</code> or the list of <code>DeveloperUserIdentifier</code> values associated with an <code>IdentityId</code> for an existing identity. Either <code>IdentityID</code> or <code>DeveloperUserIdentifier</code> must not be null. If you supply only one of these values, the other value will be searched in the database and returned as a part of the response. If you supply both, <code>DeveloperUserIdentifier</code> will be matched against <code>IdentityID</code>. If the values are verified against the database, the response returns both values and is the same as the request. Otherwise a <code>ResourceConflictException</code> is thrown.</p> <p> <code>LookupDeveloperIdentity</code> is intended for low-throughput control plane operations: for example, to enable customer service to locate an identity ID by username. If you are using it for higher-volume operations such as user authentication, your requests are likely to be throttled. <a>GetOpenIdTokenForDeveloperIdentity</a> is a better option for higher-volume operations for user authentication.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LookupDeveloperIdentityRequest;
import org.openapis.openapi.models.operations.LookupDeveloperIdentityResponse;
import org.openapis.openapi.models.operations.LookupDeveloperIdentityXAmzTargetEnum;
import org.openapis.openapi.models.shared.LookupDeveloperIdentityInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            LookupDeveloperIdentityRequest req = new LookupDeveloperIdentityRequest(                new LookupDeveloperIdentityInput("deleniti") {{
                                developerUserIdentifier = "sapiente";
                                identityId = "amet";
                                maxResults = 643990L;
                                nextToken = "nisi";
                            }};, LookupDeveloperIdentityXAmzTargetEnum.AWS_COGNITO_IDENTITY_SERVICE_LOOKUP_DEVELOPER_IDENTITY) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "natus";
                xAmzCredential = "omnis";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "magnam";
            }};            

            LookupDeveloperIdentityResponse res = sdk.sdk.lookupDeveloperIdentity(req);

            if (res.lookupDeveloperIdentityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mergeDeveloperIdentities

<p>Merges two users having different <code>IdentityId</code>s, existing in the same identity pool, and identified by the same developer provider. You can use this action to request that discrete users be merged and identified as a single user in the Cognito environment. Cognito associates the given source user (<code>SourceUserIdentifier</code>) with the <code>IdentityId</code> of the <code>DestinationUserIdentifier</code>. Only developer-authenticated users can be merged. If the users to be merged are associated with the same public provider, but as two different users, an exception will be thrown.</p> <p>The number of linked logins is limited to 20. So, the number of linked logins for the source user, <code>SourceUserIdentifier</code>, and the destination user, <code>DestinationUserIdentifier</code>, together should not be larger than 20. Otherwise, an exception will be thrown.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MergeDeveloperIdentitiesRequest;
import org.openapis.openapi.models.operations.MergeDeveloperIdentitiesResponse;
import org.openapis.openapi.models.operations.MergeDeveloperIdentitiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.MergeDeveloperIdentitiesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            MergeDeveloperIdentitiesRequest req = new MergeDeveloperIdentitiesRequest(                new MergeDeveloperIdentitiesInput("id", "labore", "labore", "suscipit");, MergeDeveloperIdentitiesXAmzTargetEnum.AWS_COGNITO_IDENTITY_SERVICE_MERGE_DEVELOPER_IDENTITIES) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "eum";
                xAmzDate = "vero";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "magnam";
            }};            

            MergeDeveloperIdentitiesResponse res = sdk.sdk.mergeDeveloperIdentities(req);

            if (res.mergeDeveloperIdentitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setIdentityPoolRoles

<p>Sets the roles for an identity pool. These roles are used when making calls to <a>GetCredentialsForIdentity</a> action.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetIdentityPoolRolesRequest;
import org.openapis.openapi.models.operations.SetIdentityPoolRolesResponse;
import org.openapis.openapi.models.operations.SetIdentityPoolRolesXAmzTargetEnum;
import org.openapis.openapi.models.shared.AmbiguousRoleResolutionTypeEnum;
import org.openapis.openapi.models.shared.MappingRule;
import org.openapis.openapi.models.shared.MappingRuleMatchTypeEnum;
import org.openapis.openapi.models.shared.RoleMapping;
import org.openapis.openapi.models.shared.RoleMappingTypeEnum;
import org.openapis.openapi.models.shared.RulesConfigurationType;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetIdentityPoolRolesInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetIdentityPoolRolesRequest req = new SetIdentityPoolRolesRequest(                new SetIdentityPoolRolesInput("excepturi",                 new java.util.HashMap<String, String>() {{
                                                put("provident", "quos");
                                                put("sint", "accusantium");
                                            }}) {{
                                roleMappings = new java.util.HashMap<String, org.openapis.openapi.models.shared.RoleMapping>() {{
                                    put("reiciendis", new RoleMapping(RoleMappingTypeEnum.RULES) {{
                                        ambiguousRoleResolution = AmbiguousRoleResolutionTypeEnum.DENY;
                                        rulesConfiguration = new RulesConfigurationType(                new org.openapis.openapi.models.shared.MappingRule[]{{
                                                            add(new MappingRule("quibusdam", MappingRuleMatchTypeEnum.EQUALS, "saepe", "pariatur") {{
                                                                claim = "ullam";
                                                                matchType = MappingRuleMatchTypeEnum.STARTS_WITH;
                                                                roleARN = "nihil";
                                                                value = "repellat";
                                                            }}),
                                                            add(new MappingRule("magni", MappingRuleMatchTypeEnum.EQUALS, "quo", "illum") {{
                                                                claim = "accusantium";
                                                                matchType = MappingRuleMatchTypeEnum.EQUALS;
                                                                roleARN = "praesentium";
                                                                value = "natus";
                                                            }}),
                                                            add(new MappingRule("odit", MappingRuleMatchTypeEnum.CONTAINS, "accusantium", "ab") {{
                                                                claim = "pariatur";
                                                                matchType = MappingRuleMatchTypeEnum.NOT_EQUAL;
                                                                roleARN = "ea";
                                                                value = "excepturi";
                                                            }}),
                                                            add(new MappingRule("autem", MappingRuleMatchTypeEnum.STARTS_WITH, "eaque", "pariatur") {{
                                                                claim = "maiores";
                                                                matchType = MappingRuleMatchTypeEnum.STARTS_WITH;
                                                                roleARN = "ipsam";
                                                                value = "voluptate";
                                                            }}),
                                                        }}) {{
                                            rules = new org.openapis.openapi.models.shared.MappingRule[]{{
                                                add(new MappingRule("nemo", MappingRuleMatchTypeEnum.EQUALS, "iure", "doloribus") {{
                                                    claim = "eum";
                                                    matchType = MappingRuleMatchTypeEnum.EQUALS;
                                                    roleARN = "necessitatibus";
                                                    value = "odit";
                                                }}),
                                                add(new MappingRule("facilis", MappingRuleMatchTypeEnum.CONTAINS, "architecto", "architecto") {{
                                                    claim = "debitis";
                                                    matchType = MappingRuleMatchTypeEnum.CONTAINS;
                                                    roleARN = "maxime";
                                                    value = "deleniti";
                                                }}),
                                            }};
                                        }};
                                        type = RoleMappingTypeEnum.TOKEN;
                                    }});
                                    put("perferendis", new RoleMapping(RoleMappingTypeEnum.TOKEN) {{
                                        ambiguousRoleResolution = AmbiguousRoleResolutionTypeEnum.DENY;
                                        rulesConfiguration = new RulesConfigurationType(                new org.openapis.openapi.models.shared.MappingRule[]{{
                                                            add(new MappingRule("eos", MappingRuleMatchTypeEnum.EQUALS, "dolores", "minus") {{
                                                                claim = "dignissimos";
                                                                matchType = MappingRuleMatchTypeEnum.EQUALS;
                                                                roleARN = "quis";
                                                                value = "nesciunt";
                                                            }}),
                                                            add(new MappingRule("hic", MappingRuleMatchTypeEnum.NOT_EQUAL, "omnis", "facilis") {{
                                                                claim = "quam";
                                                                matchType = MappingRuleMatchTypeEnum.EQUALS;
                                                                roleARN = "vero";
                                                                value = "nostrum";
                                                            }}),
                                                            add(new MappingRule("blanditiis", MappingRuleMatchTypeEnum.STARTS_WITH, "eaque", "occaecati") {{
                                                                claim = "perspiciatis";
                                                                matchType = MappingRuleMatchTypeEnum.EQUALS;
                                                                roleARN = "porro";
                                                                value = "consequuntur";
                                                            }}),
                                                        }}) {{
                                            rules = new org.openapis.openapi.models.shared.MappingRule[]{{
                                                add(new MappingRule("libero", MappingRuleMatchTypeEnum.STARTS_WITH, "dolores", "quis") {{
                                                    claim = "aut";
                                                    matchType = MappingRuleMatchTypeEnum.NOT_EQUAL;
                                                    roleARN = "corporis";
                                                    value = "hic";
                                                }}),
                                            }};
                                        }};
                                        type = RoleMappingTypeEnum.RULES;
                                    }});
                                    put("asperiores", new RoleMapping(RoleMappingTypeEnum.RULES) {{
                                        ambiguousRoleResolution = AmbiguousRoleResolutionTypeEnum.DENY;
                                        rulesConfiguration = new RulesConfigurationType(                new org.openapis.openapi.models.shared.MappingRule[]{{
                                                            add(new MappingRule("reiciendis", MappingRuleMatchTypeEnum.EQUALS, "dolorum", "numquam") {{
                                                                claim = "excepturi";
                                                                matchType = MappingRuleMatchTypeEnum.STARTS_WITH;
                                                                roleARN = "voluptate";
                                                                value = "dignissimos";
                                                            }}),
                                                            add(new MappingRule("odio", MappingRuleMatchTypeEnum.CONTAINS, "accusamus", "quidem") {{
                                                                claim = "veritatis";
                                                                matchType = MappingRuleMatchTypeEnum.EQUALS;
                                                                roleARN = "ipsa";
                                                                value = "iure";
                                                            }}),
                                                            add(new MappingRule("atque", MappingRuleMatchTypeEnum.EQUALS, "fugiat", "ab") {{
                                                                claim = "voluptatibus";
                                                                matchType = MappingRuleMatchTypeEnum.CONTAINS;
                                                                roleARN = "natus";
                                                                value = "eos";
                                                            }}),
                                                            add(new MappingRule("dolorum", MappingRuleMatchTypeEnum.STARTS_WITH, "omnis", "necessitatibus") {{
                                                                claim = "soluta";
                                                                matchType = MappingRuleMatchTypeEnum.STARTS_WITH;
                                                                roleARN = "iusto";
                                                                value = "voluptate";
                                                            }}),
                                                        }}) {{
                                            rules = new org.openapis.openapi.models.shared.MappingRule[]{{
                                                add(new MappingRule("provident", MappingRuleMatchTypeEnum.NOT_EQUAL, "libero", "delectus") {{
                                                    claim = "iste";
                                                    matchType = MappingRuleMatchTypeEnum.STARTS_WITH;
                                                    roleARN = "deleniti";
                                                    value = "pariatur";
                                                }}),
                                                add(new MappingRule("dolorem", MappingRuleMatchTypeEnum.EQUALS, "qui", "ipsum") {{
                                                    claim = "quaerat";
                                                    matchType = MappingRuleMatchTypeEnum.STARTS_WITH;
                                                    roleARN = "aliquid";
                                                    value = "dolorem";
                                                }}),
                                            }};
                                        }};
                                        type = RoleMappingTypeEnum.RULES;
                                    }});
                                }};
                            }};, SetIdentityPoolRolesXAmzTargetEnum.AWS_COGNITO_IDENTITY_SERVICE_SET_IDENTITY_POOL_ROLES) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "voluptate";
                xAmzDate = "id";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "aspernatur";
            }};            

            SetIdentityPoolRolesResponse res = sdk.sdk.setIdentityPoolRoles(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setPrincipalTagAttributeMap

You can use this operation to use default (username and clientID) attribute or custom attribute mappings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetPrincipalTagAttributeMapRequest;
import org.openapis.openapi.models.operations.SetPrincipalTagAttributeMapResponse;
import org.openapis.openapi.models.operations.SetPrincipalTagAttributeMapXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetPrincipalTagAttributeMapInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetPrincipalTagAttributeMapRequest req = new SetPrincipalTagAttributeMapRequest(                new SetPrincipalTagAttributeMapInput("amet", "optio") {{
                                principalTags = new java.util.HashMap<String, String>() {{
                                    put("ad", "saepe");
                                    put("suscipit", "deserunt");
                                    put("provident", "minima");
                                    put("repellendus", "totam");
                                }};
                                useDefaults = false;
                            }};, SetPrincipalTagAttributeMapXAmzTargetEnum.AWS_COGNITO_IDENTITY_SERVICE_SET_PRINCIPAL_TAG_ATTRIBUTE_MAP) {{
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "alias";
                xAmzCredential = "at";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "quod";
            }};            

            SetPrincipalTagAttributeMapResponse res = sdk.sdk.setPrincipalTagAttributeMap(req);

            if (res.setPrincipalTagAttributeMapResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Assigns a set of tags to the specified Amazon Cognito identity pool. A tag is a label that you can use to categorize and manage identity pools in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of an identity pool, one for testing and another for production, you might assign an <code>Environment</code> tag key to both identity pools. The value of this key might be <code>Test</code> for one identity pool and <code>Production</code> for the other.</p> <p>Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your identity pools. In an IAM policy, you can constrain permissions for identity pools based on specific tags or tag values.</p> <p>You can use this action up to 5 times per second, per account. An identity pool can have as many as 50 tags.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceInput("qui",                 new java.util.HashMap<String, String>() {{
                                                put("a", "esse");
                                                put("harum", "iusto");
                                                put("ipsum", "quisquam");
                                            }});, TagResourceXAmzTargetEnum.AWS_COGNITO_IDENTITY_SERVICE_TAG_RESOURCE) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "amet";
                xAmzCredential = "tempore";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "dolorem";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unlinkDeveloperIdentity

<p>Unlinks a <code>DeveloperUserIdentifier</code> from an existing identity. Unlinked developer users will be considered new identities next time they are seen. If, for a given Cognito identity, you remove all federated identities as well as the developer user identifier, the Cognito identity becomes inaccessible.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnlinkDeveloperIdentityRequest;
import org.openapis.openapi.models.operations.UnlinkDeveloperIdentityResponse;
import org.openapis.openapi.models.operations.UnlinkDeveloperIdentityXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UnlinkDeveloperIdentityInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnlinkDeveloperIdentityRequest req = new UnlinkDeveloperIdentityRequest(                new UnlinkDeveloperIdentityInput("totam", "nihil", "sit", "expedita");, UnlinkDeveloperIdentityXAmzTargetEnum.AWS_COGNITO_IDENTITY_SERVICE_UNLINK_DEVELOPER_IDENTITY) {{
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "sed";
                xAmzCredential = "vel";
                xAmzDate = "libero";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "quam";
            }};            

            UnlinkDeveloperIdentityResponse res = sdk.sdk.unlinkDeveloperIdentity(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unlinkIdentity

<p>Unlinks a federated identity from an existing account. Unlinked logins will be considered new identities next time they are seen. Removing the last linked login will make this identity inaccessible.</p> <p>This is a public API. You do not need any credentials to call this API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnlinkIdentityRequest;
import org.openapis.openapi.models.operations.UnlinkIdentityResponse;
import org.openapis.openapi.models.operations.UnlinkIdentityXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UnlinkIdentityInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnlinkIdentityRequest req = new UnlinkIdentityRequest(                new UnlinkIdentityInput("incidunt",                 new java.util.HashMap<String, String>() {{
                                                put("cupiditate", "maxime");
                                            }},                 new String[]{{
                                                add("soluta"),
                                                add("dicta"),
                                                add("laborum"),
                                                add("totam"),
                                            }});, UnlinkIdentityXAmzTargetEnum.AWS_COGNITO_IDENTITY_SERVICE_UNLINK_IDENTITY) {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "dolores";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "quam";
            }};            

            UnlinkIdentityResponse res = sdk.sdk.unlinkIdentity(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes the specified tags from the specified Amazon Cognito identity pool. You can use this action up to 5 times per second, per account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceInput("temporibus",                 new String[]{{
                                                add("neque"),
                                            }});, UntagResourceXAmzTargetEnum.AWS_COGNITO_IDENTITY_SERVICE_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "magni";
                xAmzCredential = "odio";
                xAmzDate = "sunt";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "hic";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateIdentityPool

<p>Updates an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateIdentityPoolRequest;
import org.openapis.openapi.models.operations.UpdateIdentityPoolResponse;
import org.openapis.openapi.models.operations.UpdateIdentityPoolXAmzTargetEnum;
import org.openapis.openapi.models.shared.CognitoIdentityProvider;
import org.openapis.openapi.models.shared.IdentityPool;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateIdentityPoolRequest req = new UpdateIdentityPoolRequest(                new IdentityPool(false, "cumque", "soluta") {{
                                allowClassicFlow = false;
                                cognitoIdentityProviders = new org.openapis.openapi.models.shared.CognitoIdentityProvider[]{{
                                    add(new CognitoIdentityProvider() {{
                                        clientId = "et";
                                        providerName = "saepe";
                                        serverSideTokenCheck = false;
                                    }}),
                                    add(new CognitoIdentityProvider() {{
                                        clientId = "ipsum";
                                        providerName = "veritatis";
                                        serverSideTokenCheck = false;
                                    }}),
                                    add(new CognitoIdentityProvider() {{
                                        clientId = "nobis";
                                        providerName = "quos";
                                        serverSideTokenCheck = false;
                                    }}),
                                }};
                                developerProviderName = "tempore";
                                identityPoolTags = new java.util.HashMap<String, String>() {{
                                    put("aperiam", "delectus");
                                    put("dolorem", "dolore");
                                    put("labore", "adipisci");
                                }};
                                openIdConnectProviderARNs = new String[]{{
                                    add("architecto"),
                                    add("quae"),
                                    add("aut"),
                                }};
                                samlProviderARNs = new String[]{{
                                    add("itaque"),
                                    add("consequatur"),
                                    add("est"),
                                }};
                                supportedLoginProviders = new java.util.HashMap<String, String>() {{
                                    put("porro", "doloribus");
                                    put("ut", "facilis");
                                    put("cupiditate", "qui");
                                    put("quae", "laudantium");
                                }};
                            }};, UpdateIdentityPoolXAmzTargetEnum.AWS_COGNITO_IDENTITY_SERVICE_UPDATE_IDENTITY_POOL) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "voluptatibus";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "vero";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "quis";
            }};            

            UpdateIdentityPoolResponse res = sdk.sdk.updateIdentityPool(req);

            if (res.identityPool != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
