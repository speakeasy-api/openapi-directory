# SDK

## Overview

AppSync provides API actions for creating and interacting with data sources using GraphQL from your application.

Amazon Web Services documentation
<https://docs.aws.amazon.com/appsync/>
### Available Operations

* [associateApi](#associateapi) - Maps an endpoint to your custom domain.
* [createApiCache](#createapicache) - Creates a cache for the GraphQL API.
* [createApiKey](#createapikey) - Creates a unique key that you can distribute to clients who invoke your API.
* [createDataSource](#createdatasource) - Creates a <code>DataSource</code> object.
* [createDomainName](#createdomainname) - Creates a custom <code>DomainName</code> object.
* [createFunction](#createfunction) - <p>Creates a <code>Function</code> object.</p> <p>A function is a reusable entity. You can use multiple functions to compose the resolver logic.</p>
* [createGraphqlApi](#creategraphqlapi) - Creates a <code>GraphqlApi</code> object.
* [createResolver](#createresolver) - <p>Creates a <code>Resolver</code> object.</p> <p>A resolver converts incoming requests into a format that a data source can understand, and converts the data source's responses into GraphQL.</p>
* [createType](#createtype) - Creates a <code>Type</code> object.
* [deleteApiCache](#deleteapicache) - Deletes an <code>ApiCache</code> object.
* [deleteApiKey](#deleteapikey) - Deletes an API key.
* [deleteDataSource](#deletedatasource) - Deletes a <code>DataSource</code> object.
* [deleteDomainName](#deletedomainname) - Deletes a custom <code>DomainName</code> object.
* [deleteFunction](#deletefunction) - Deletes a <code>Function</code>.
* [deleteGraphqlApi](#deletegraphqlapi) - Deletes a <code>GraphqlApi</code> object.
* [deleteResolver](#deleteresolver) - Deletes a <code>Resolver</code> object.
* [deleteType](#deletetype) - Deletes a <code>Type</code> object.
* [disassociateApi](#disassociateapi) - Removes an <code>ApiAssociation</code> object from a custom domain.
* [evaluateCode](#evaluatecode) - Evaluates the given code and returns the response. The code definition requirements depend on the specified runtime. For <code>APPSYNC_JS</code> runtimes, the code defines the request and response functions. The request function takes the incoming request after a GraphQL operation is parsed and converts it into a request configuration for the selected data source operation. The response function interprets responses from the data source and maps it to the shape of the GraphQL field output type. 
* [evaluateMappingTemplate](#evaluatemappingtemplate) - <p>Evaluates a given template and returns the response. The mapping template can be a request or response template.</p> <p>Request templates take the incoming request after a GraphQL operation is parsed and convert it into a request configuration for the selected data source operation. Response templates interpret responses from the data source and map it to the shape of the GraphQL field output type.</p> <p>Mapping templates are written in the Apache Velocity Template Language (VTL).</p>
* [flushApiCache](#flushapicache) - Flushes an <code>ApiCache</code> object.
* [getApiAssociation](#getapiassociation) - Retrieves an <code>ApiAssociation</code> object.
* [getApiCache](#getapicache) - Retrieves an <code>ApiCache</code> object.
* [getDataSource](#getdatasource) - Retrieves a <code>DataSource</code> object.
* [getDomainName](#getdomainname) - Retrieves a custom <code>DomainName</code> object.
* [getFunction](#getfunction) - Get a <code>Function</code>.
* [getGraphqlApi](#getgraphqlapi) - Retrieves a <code>GraphqlApi</code> object.
* [getIntrospectionSchema](#getintrospectionschema) - Retrieves the introspection schema for a GraphQL API.
* [getResolver](#getresolver) - Retrieves a <code>Resolver</code> object.
* [getSchemaCreationStatus](#getschemacreationstatus) - Retrieves the current status of a schema creation operation.
* [getType](#gettype) - Retrieves a <code>Type</code> object.
* [listApiKeys](#listapikeys) - <p>Lists the API keys for a given API.</p> <note> <p>API keys are deleted automatically 60 days after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call <code>DeleteApiKey</code> to manually delete a key before it's automatically deleted.</p> </note>
* [listDataSources](#listdatasources) - Lists the data sources for a given API.
* [listDomainNames](#listdomainnames) - Lists multiple custom domain names.
* [listFunctions](#listfunctions) - List multiple functions.
* [listGraphqlApis](#listgraphqlapis) - Lists your GraphQL APIs.
* [listResolvers](#listresolvers) - Lists the resolvers for a given API and type.
* [listResolversByFunction](#listresolversbyfunction) - List the resolvers that are associated with a specific function.
* [listTagsForResource](#listtagsforresource) - Lists the tags for a resource.
* [listTypes](#listtypes) - Lists the types for a given API.
* [startSchemaCreation](#startschemacreation) - <p>Adds a new schema to your GraphQL API.</p> <p>This operation is asynchronous. Use to determine when it has completed.</p>
* [tagResource](#tagresource) - Tags a resource with user-supplied tags.
* [untagResource](#untagresource) - Untags a resource.
* [updateApiCache](#updateapicache) - Updates the cache for the GraphQL API.
* [updateApiKey](#updateapikey) - Updates an API key. You can update the key as long as it's not deleted.
* [updateDataSource](#updatedatasource) - Updates a <code>DataSource</code> object.
* [updateDomainName](#updatedomainname) - Updates a custom <code>DomainName</code> object.
* [updateFunction](#updatefunction) - Updates a <code>Function</code> object.
* [updateGraphqlApi](#updategraphqlapi) - Updates a <code>GraphqlApi</code> object.
* [updateResolver](#updateresolver) - Updates a <code>Resolver</code> object.
* [updateType](#updatetype) - Updates a <code>Type</code> object.

## associateApi

Maps an endpoint to your custom domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateApiRequest;
import org.openapis.openapi.models.operations.AssociateApiRequestBody;
import org.openapis.openapi.models.operations.AssociateApiResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateApiRequest req = new AssociateApiRequest(                new AssociateApiRequestBody("suscipit");, "iure") {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            AssociateApiResponse res = sdk.sdk.associateApi(req);

            if (res.associateApiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createApiCache

Creates a cache for the GraphQL API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApiCacheRequest;
import org.openapis.openapi.models.operations.CreateApiCacheRequestBody;
import org.openapis.openapi.models.operations.CreateApiCacheRequestBodyApiCachingBehaviorEnum;
import org.openapis.openapi.models.operations.CreateApiCacheRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.CreateApiCacheResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApiCacheRequest req = new CreateApiCacheRequest(                new CreateApiCacheRequestBody(CreateApiCacheRequestBodyApiCachingBehaviorEnum.PER_RESOLVER_CACHING, 528895L, CreateApiCacheRequestBodyTypeEnum.SMALL) {{
                                atRestEncryptionEnabled = false;
                                transitEncryptionEnabled = false;
                            }};, "excepturi") {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "temporibus";
                xAmzDate = "ab";
                xAmzSecurityToken = "quis";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "deserunt";
            }};            

            CreateApiCacheResponse res = sdk.sdk.createApiCache(req);

            if (res.createApiCacheResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createApiKey

Creates a unique key that you can distribute to clients who invoke your API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApiKeyRequest;
import org.openapis.openapi.models.operations.CreateApiKeyRequestBody;
import org.openapis.openapi.models.operations.CreateApiKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApiKeyRequest req = new CreateApiKeyRequest(                new CreateApiKeyRequestBody() {{
                                description = "ipsam";
                                expires = 832620L;
                            }};, "sapiente") {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "odit";
                xAmzCredential = "at";
                xAmzDate = "at";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "quod";
            }};            

            CreateApiKeyResponse res = sdk.sdk.createApiKey(req);

            if (res.createApiKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDataSource

Creates a <code>DataSource</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDataSourceRequest;
import org.openapis.openapi.models.operations.CreateDataSourceRequestBody;
import org.openapis.openapi.models.operations.CreateDataSourceRequestBodyDynamodbConfig;
import org.openapis.openapi.models.operations.CreateDataSourceRequestBodyElasticsearchConfig;
import org.openapis.openapi.models.operations.CreateDataSourceRequestBodyEventBridgeConfig;
import org.openapis.openapi.models.operations.CreateDataSourceRequestBodyHttpConfig;
import org.openapis.openapi.models.operations.CreateDataSourceRequestBodyLambdaConfig;
import org.openapis.openapi.models.operations.CreateDataSourceRequestBodyOpenSearchServiceConfig;
import org.openapis.openapi.models.operations.CreateDataSourceRequestBodyRelationalDatabaseConfig;
import org.openapis.openapi.models.operations.CreateDataSourceRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.CreateDataSourceResponse;
import org.openapis.openapi.models.shared.AuthorizationConfig;
import org.openapis.openapi.models.shared.AuthorizationTypeEnum;
import org.openapis.openapi.models.shared.AwsIamConfig;
import org.openapis.openapi.models.shared.DeltaSyncConfig;
import org.openapis.openapi.models.shared.RdsHttpEndpointConfig;
import org.openapis.openapi.models.shared.RelationalDatabaseSourceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDataSourceRequest req = new CreateDataSourceRequest(                new CreateDataSourceRequestBody("esse", CreateDataSourceRequestBodyTypeEnum.HTTP) {{
                                description = "porro";
                                dynamodbConfig = new CreateDataSourceRequestBodyDynamodbConfig() {{
                                    awsRegion = "dolorum";
                                    deltaSyncConfig = new DeltaSyncConfig() {{
                                        baseTableTTL = 118274L;
                                        deltaSyncTableName = "nam";
                                        deltaSyncTableTTL = 639921L;
                                    }};;
                                    tableName = "occaecati";
                                    useCallerCredentials = false;
                                    versioned = false;
                                }};;
                                elasticsearchConfig = new CreateDataSourceRequestBodyElasticsearchConfig() {{
                                    awsRegion = "fugit";
                                    endpoint = "deleniti";
                                }};;
                                eventBridgeConfig = new CreateDataSourceRequestBodyEventBridgeConfig() {{
                                    eventBusArn = "hic";
                                }};;
                                httpConfig = new CreateDataSourceRequestBodyHttpConfig() {{
                                    authorizationConfig = new AuthorizationConfig(AuthorizationTypeEnum.AWS_IAM) {{
                                        awsIamConfig = new AwsIamConfig() {{
                                            signingRegion = "optio";
                                            signingServiceName = "totam";
                                        }};;
                                    }};;
                                    endpoint = "beatae";
                                }};;
                                lambdaConfig = new CreateDataSourceRequestBodyLambdaConfig() {{
                                    lambdaFunctionArn = "commodi";
                                }};;
                                openSearchServiceConfig = new CreateDataSourceRequestBodyOpenSearchServiceConfig() {{
                                    awsRegion = "molestiae";
                                    endpoint = "modi";
                                }};;
                                relationalDatabaseConfig = new CreateDataSourceRequestBodyRelationalDatabaseConfig() {{
                                    rdsHttpEndpointConfig = new RdsHttpEndpointConfig() {{
                                        awsRegion = "qui";
                                        awsSecretStoreArn = "impedit";
                                        databaseName = "cum";
                                        dbClusterIdentifier = "esse";
                                        schema = "ipsum";
                                    }};;
                                    relationalDatabaseSourceType = RelationalDatabaseSourceTypeEnum.RDS_HTTP_ENDPOINT;
                                }};;
                                serviceRoleArn = "excepturi";
                            }};, "aspernatur") {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "ad";
                xAmzCredential = "natus";
                xAmzDate = "sed";
                xAmzSecurityToken = "iste";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "natus";
            }};            

            CreateDataSourceResponse res = sdk.sdk.createDataSource(req);

            if (res.createDataSourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDomainName

Creates a custom <code>DomainName</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDomainNameRequest;
import org.openapis.openapi.models.operations.CreateDomainNameRequestBody;
import org.openapis.openapi.models.operations.CreateDomainNameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDomainNameRequest req = new CreateDomainNameRequest(                new CreateDomainNameRequestBody("hic", "saepe") {{
                                description = "fuga";
                            }};) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "iste";
                xAmzDate = "iure";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "architecto";
            }};            

            CreateDomainNameResponse res = sdk.sdk.createDomainName(req);

            if (res.createDomainNameResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFunction

<p>Creates a <code>Function</code> object.</p> <p>A function is a reusable entity. You can use multiple functions to compose the resolver logic.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFunctionRequest;
import org.openapis.openapi.models.operations.CreateFunctionRequestBody;
import org.openapis.openapi.models.operations.CreateFunctionRequestBodyRuntime;
import org.openapis.openapi.models.operations.CreateFunctionRequestBodySyncConfig;
import org.openapis.openapi.models.operations.CreateFunctionResponse;
import org.openapis.openapi.models.shared.ConflictDetectionTypeEnum;
import org.openapis.openapi.models.shared.ConflictHandlerTypeEnum;
import org.openapis.openapi.models.shared.LambdaConflictHandlerConfig;
import org.openapis.openapi.models.shared.RuntimeNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFunctionRequest req = new CreateFunctionRequest(                new CreateFunctionRequestBody("reiciendis", "est") {{
                                code = "mollitia";
                                description = "laborum";
                                functionVersion = "dolores";
                                maxBatchSize = 210382L;
                                requestMappingTemplate = "corporis";
                                responseMappingTemplate = "explicabo";
                                runtime = new CreateFunctionRequestBodyRuntime() {{
                                    name = RuntimeNameEnum.APPSYNC_JS;
                                    runtimeVersion = "nobis";
                                }};;
                                syncConfig = new CreateFunctionRequestBodySyncConfig() {{
                                    conflictDetection = ConflictDetectionTypeEnum.VERSION;
                                    conflictHandler = ConflictHandlerTypeEnum.AUTOMERGE;
                                    lambdaConflictHandlerConfig = new LambdaConflictHandlerConfig() {{
                                        lambdaConflictHandlerArn = "nemo";
                                    }};;
                                }};;
                            }};, "minima") {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "iure";
                xAmzDate = "culpa";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "architecto";
            }};            

            CreateFunctionResponse res = sdk.sdk.createFunction(req);

            if (res.createFunctionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGraphqlApi

Creates a <code>GraphqlApi</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGraphqlApiRequest;
import org.openapis.openapi.models.operations.CreateGraphqlApiRequestBody;
import org.openapis.openapi.models.operations.CreateGraphqlApiRequestBodyAuthenticationTypeEnum;
import org.openapis.openapi.models.operations.CreateGraphqlApiRequestBodyLambdaAuthorizerConfig;
import org.openapis.openapi.models.operations.CreateGraphqlApiRequestBodyLogConfig;
import org.openapis.openapi.models.operations.CreateGraphqlApiRequestBodyOpenIDConnectConfig;
import org.openapis.openapi.models.operations.CreateGraphqlApiRequestBodyUserPoolConfig;
import org.openapis.openapi.models.operations.CreateGraphqlApiResponse;
import org.openapis.openapi.models.shared.AdditionalAuthenticationProvider;
import org.openapis.openapi.models.shared.AuthenticationTypeEnum;
import org.openapis.openapi.models.shared.CognitoUserPoolConfig;
import org.openapis.openapi.models.shared.DefaultActionEnum;
import org.openapis.openapi.models.shared.FieldLogLevelEnum;
import org.openapis.openapi.models.shared.LambdaAuthorizerConfig;
import org.openapis.openapi.models.shared.OpenIDConnectConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGraphqlApiRequest req = new CreateGraphqlApiRequest(                new CreateGraphqlApiRequestBody(CreateGraphqlApiRequestBodyAuthenticationTypeEnum.AWS_IAM, "culpa") {{
                                additionalAuthenticationProviders = new org.openapis.openapi.models.shared.AdditionalAuthenticationProvider[]{{
                                    add(new AdditionalAuthenticationProvider() {{
                                        authenticationType = AuthenticationTypeEnum.AWS_LAMBDA;
                                        lambdaAuthorizerConfig = new LambdaAuthorizerConfig("commodi") {{
                                            authorizerResultTtlInSeconds = 653108L;
                                            authorizerUri = "occaecati";
                                            identityValidationExpression = "numquam";
                                        }};
                                        openIDConnectConfig = new OpenIDConnectConfig("quia") {{
                                            authTTL = 466311L;
                                            clientId = "molestiae";
                                            iatTTL = 244425L;
                                            issuer = "error";
                                        }};
                                        userPoolConfig = new CognitoUserPoolConfig("animi", "enim") {{
                                            appIdClientRegex = "quis";
                                            awsRegion = "vitae";
                                            userPoolId = "laborum";
                                        }};
                                    }}),
                                }};
                                lambdaAuthorizerConfig = new CreateGraphqlApiRequestBodyLambdaAuthorizerConfig() {{
                                    authorizerResultTtlInSeconds = 138183L;
                                    authorizerUri = "quo";
                                    identityValidationExpression = "sequi";
                                }};;
                                logConfig = new CreateGraphqlApiRequestBodyLogConfig() {{
                                    cloudWatchLogsRoleArn = "tenetur";
                                    excludeVerboseContent = false;
                                    fieldLogLevel = FieldLogLevelEnum.ERROR;
                                }};;
                                openIDConnectConfig = new CreateGraphqlApiRequestBodyOpenIDConnectConfig() {{
                                    authTTL = 662527L;
                                    clientId = "possimus";
                                    iatTTL = 13571L;
                                    issuer = "quasi";
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("temporibus", "laborum");
                                    put("quasi", "reiciendis");
                                    put("voluptatibus", "vero");
                                }};
                                userPoolConfig = new CreateGraphqlApiRequestBodyUserPoolConfig() {{
                                    appIdClientRegex = "nihil";
                                    awsRegion = "praesentium";
                                    defaultAction = DefaultActionEnum.DENY;
                                    userPoolId = "ipsa";
                                }};;
                                xrayEnabled = false;
                            }};) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "cum";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "doloremque";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "ut";
            }};            

            CreateGraphqlApiResponse res = sdk.sdk.createGraphqlApi(req);

            if (res.createGraphqlApiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createResolver

<p>Creates a <code>Resolver</code> object.</p> <p>A resolver converts incoming requests into a format that a data source can understand, and converts the data source's responses into GraphQL.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateResolverRequest;
import org.openapis.openapi.models.operations.CreateResolverRequestBody;
import org.openapis.openapi.models.operations.CreateResolverRequestBodyCachingConfig;
import org.openapis.openapi.models.operations.CreateResolverRequestBodyKindEnum;
import org.openapis.openapi.models.operations.CreateResolverRequestBodyPipelineConfig;
import org.openapis.openapi.models.operations.CreateResolverRequestBodyRuntime;
import org.openapis.openapi.models.operations.CreateResolverRequestBodySyncConfig;
import org.openapis.openapi.models.operations.CreateResolverResponse;
import org.openapis.openapi.models.shared.ConflictDetectionTypeEnum;
import org.openapis.openapi.models.shared.ConflictHandlerTypeEnum;
import org.openapis.openapi.models.shared.LambdaConflictHandlerConfig;
import org.openapis.openapi.models.shared.RuntimeNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateResolverRequest req = new CreateResolverRequest(                new CreateResolverRequestBody("dicta") {{
                                cachingConfig = new CreateResolverRequestBodyCachingConfig() {{
                                    cachingKeys = new String[]{{
                                        add("dolore"),
                                        add("iusto"),
                                    }};
                                    ttl = 118727L;
                                }};;
                                code = "harum";
                                dataSourceName = "enim";
                                kind = CreateResolverRequestBodyKindEnum.PIPELINE;
                                maxBatchSize = 414263L;
                                pipelineConfig = new CreateResolverRequestBodyPipelineConfig() {{
                                    functions = new String[]{{
                                        add("quae"),
                                        add("ipsum"),
                                        add("quidem"),
                                        add("molestias"),
                                    }};
                                }};;
                                requestMappingTemplate = "excepturi";
                                responseMappingTemplate = "pariatur";
                                runtime = new CreateResolverRequestBodyRuntime() {{
                                    name = RuntimeNameEnum.APPSYNC_JS;
                                    runtimeVersion = "modi";
                                }};;
                                syncConfig = new CreateResolverRequestBodySyncConfig() {{
                                    conflictDetection = ConflictDetectionTypeEnum.NONE;
                                    conflictHandler = ConflictHandlerTypeEnum.AUTOMERGE;
                                    lambdaConflictHandlerConfig = new LambdaConflictHandlerConfig() {{
                                        lambdaConflictHandlerArn = "voluptates";
                                    }};;
                                }};;
                            }};, "quasi", "repudiandae") {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "itaque";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "enim";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "est";
            }};            

            CreateResolverResponse res = sdk.sdk.createResolver(req);

            if (res.createResolverResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createType

Creates a <code>Type</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTypeRequest;
import org.openapis.openapi.models.operations.CreateTypeRequestBody;
import org.openapis.openapi.models.operations.CreateTypeRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.CreateTypeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTypeRequest req = new CreateTypeRequest(                new CreateTypeRequestBody("explicabo", CreateTypeRequestBodyFormatEnum.JSON);, "distinctio") {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "labore";
                xAmzCredential = "modi";
                xAmzDate = "qui";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "quos";
            }};            

            CreateTypeResponse res = sdk.sdk.createType(req);

            if (res.createTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApiCache

Deletes an <code>ApiCache</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiCacheRequest;
import org.openapis.openapi.models.operations.DeleteApiCacheResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApiCacheRequest req = new DeleteApiCacheRequest("magni") {{
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "alias";
                xAmzDate = "fugit";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "tempora";
            }};            

            DeleteApiCacheResponse res = sdk.sdk.deleteApiCache(req);

            if (res.deleteApiCacheResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApiKey

Deletes an API key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiKeyRequest;
import org.openapis.openapi.models.operations.DeleteApiKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApiKeyRequest req = new DeleteApiKeyRequest("tempore", "labore") {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "eum";
                xAmzCredential = "non";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "sint";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "provident";
            }};            

            DeleteApiKeyResponse res = sdk.sdk.deleteApiKey(req);

            if (res.deleteApiKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDataSource

Deletes a <code>DataSource</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDataSourceRequest;
import org.openapis.openapi.models.operations.DeleteDataSourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDataSourceRequest req = new DeleteDataSourceRequest("sint", "officia") {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "a";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "in";
                xAmzSignature = "in";
                xAmzSignedHeaders = "illum";
            }};            

            DeleteDataSourceResponse res = sdk.sdk.deleteDataSource(req);

            if (res.deleteDataSourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDomainName

Deletes a custom <code>DomainName</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDomainNameRequest;
import org.openapis.openapi.models.operations.DeleteDomainNameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDomainNameRequest req = new DeleteDomainNameRequest("rerum") {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "cumque";
                xAmzDate = "facere";
                xAmzSecurityToken = "ea";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "laborum";
            }};            

            DeleteDomainNameResponse res = sdk.sdk.deleteDomainName(req);

            if (res.deleteDomainNameResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFunction

Deletes a <code>Function</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFunctionRequest;
import org.openapis.openapi.models.operations.DeleteFunctionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFunctionRequest req = new DeleteFunctionRequest("non", "occaecati") {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "delectus";
                xAmzDate = "quidem";
                xAmzSecurityToken = "provident";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "id";
            }};            

            DeleteFunctionResponse res = sdk.sdk.deleteFunction(req);

            if (res.deleteFunctionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGraphqlApi

Deletes a <code>GraphqlApi</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGraphqlApiRequest;
import org.openapis.openapi.models.operations.DeleteGraphqlApiResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteGraphqlApiRequest req = new DeleteGraphqlApiRequest("deleniti") {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "amet";
                xAmzCredential = "deserunt";
                xAmzDate = "nisi";
                xAmzSecurityToken = "vel";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "omnis";
            }};            

            DeleteGraphqlApiResponse res = sdk.sdk.deleteGraphqlApi(req);

            if (res.deleteGraphqlApiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResolver

Deletes a <code>Resolver</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResolverRequest;
import org.openapis.openapi.models.operations.DeleteResolverResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResolverRequest req = new DeleteResolverRequest("perferendis", "nihil", "magnam") {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "id";
                xAmzCredential = "labore";
                xAmzDate = "labore";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "nobis";
            }};            

            DeleteResolverResponse res = sdk.sdk.deleteResolver(req);

            if (res.deleteResolverResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteType

Deletes a <code>Type</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTypeRequest;
import org.openapis.openapi.models.operations.DeleteTypeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTypeRequest req = new DeleteTypeRequest("vero", "aspernatur") {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "et";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "quos";
            }};            

            DeleteTypeResponse res = sdk.sdk.deleteType(req);

            if (res.deleteTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateApi

Removes an <code>ApiAssociation</code> object from a custom domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateApiRequest;
import org.openapis.openapi.models.operations.DisassociateApiResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateApiRequest req = new DisassociateApiRequest("accusantium") {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "mollitia";
                xAmzDate = "ad";
                xAmzSecurityToken = "eum";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            DisassociateApiResponse res = sdk.sdk.disassociateApi(req);

            if (res.disassociateApiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## evaluateCode

Evaluates the given code and returns the response. The code definition requirements depend on the specified runtime. For <code>APPSYNC_JS</code> runtimes, the code defines the request and response functions. The request function takes the incoming request after a GraphQL operation is parsed and converts it into a request configuration for the selected data source operation. The response function interprets responses from the data source and maps it to the shape of the GraphQL field output type. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EvaluateCodeRequest;
import org.openapis.openapi.models.operations.EvaluateCodeRequestBody;
import org.openapis.openapi.models.operations.EvaluateCodeRequestBodyRuntime;
import org.openapis.openapi.models.operations.EvaluateCodeResponse;
import org.openapis.openapi.models.shared.RuntimeNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EvaluateCodeRequest req = new EvaluateCodeRequest(                new EvaluateCodeRequestBody("nemo", "quasi",                 new EvaluateCodeRequestBodyRuntime() {{
                                                name = RuntimeNameEnum.APPSYNC_JS;
                                                runtimeVersion = "iure";
                                            }};) {{
                                function = "doloribus";
                            }};) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "eius";
                xAmzCredential = "maxime";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "in";
                xAmzSignedHeaders = "architecto";
            }};            

            EvaluateCodeResponse res = sdk.sdk.evaluateCode(req);

            if (res.evaluateCodeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## evaluateMappingTemplate

<p>Evaluates a given template and returns the response. The mapping template can be a request or response template.</p> <p>Request templates take the incoming request after a GraphQL operation is parsed and convert it into a request configuration for the selected data source operation. Response templates interpret responses from the data source and map it to the shape of the GraphQL field output type.</p> <p>Mapping templates are written in the Apache Velocity Template Language (VTL).</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EvaluateMappingTemplateRequest;
import org.openapis.openapi.models.operations.EvaluateMappingTemplateRequestBody;
import org.openapis.openapi.models.operations.EvaluateMappingTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EvaluateMappingTemplateRequest req = new EvaluateMappingTemplateRequest(                new EvaluateMappingTemplateRequestBody("repudiandae", "ullam");) {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "repellat";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "sed";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "pariatur";
            }};            

            EvaluateMappingTemplateResponse res = sdk.sdk.evaluateMappingTemplate(req);

            if (res.evaluateMappingTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## flushApiCache

Flushes an <code>ApiCache</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FlushApiCacheRequest;
import org.openapis.openapi.models.operations.FlushApiCacheResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            FlushApiCacheRequest req = new FlushApiCacheRequest("consequuntur") {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "natus";
                xAmzCredential = "magni";
                xAmzDate = "sunt";
                xAmzSecurityToken = "quo";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "pariatur";
            }};            

            FlushApiCacheResponse res = sdk.sdk.flushApiCache(req);

            if (res.flushApiCacheResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiAssociation

Retrieves an <code>ApiAssociation</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiAssociationRequest;
import org.openapis.openapi.models.operations.GetApiAssociationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApiAssociationRequest req = new GetApiAssociationRequest("ea") {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "odit";
                xAmzCredential = "ea";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "ab";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "quidem";
            }};            

            GetApiAssociationResponse res = sdk.sdk.getApiAssociation(req);

            if (res.getApiAssociationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiCache

Retrieves an <code>ApiCache</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiCacheRequest;
import org.openapis.openapi.models.operations.GetApiCacheResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApiCacheRequest req = new GetApiCacheRequest("voluptate") {{
                xAmzAlgorithm = "autem";
                xAmzContentSha256 = "nam";
                xAmzCredential = "eaque";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "perferendis";
            }};            

            GetApiCacheResponse res = sdk.sdk.getApiCache(req);

            if (res.getApiCacheResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDataSource

Retrieves a <code>DataSource</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDataSourceRequest;
import org.openapis.openapi.models.operations.GetDataSourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDataSourceRequest req = new GetDataSourceRequest("amet", "aut") {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "hic";
                xAmzDate = "libero";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "quis";
            }};            

            GetDataSourceResponse res = sdk.sdk.getDataSource(req);

            if (res.getDataSourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomainName

Retrieves a custom <code>DomainName</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainNameRequest;
import org.openapis.openapi.models.operations.GetDomainNameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDomainNameRequest req = new GetDomainNameRequest("dignissimos") {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "quis";
                xAmzCredential = "nesciunt";
                xAmzDate = "eos";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "minus";
            }};            

            GetDomainNameResponse res = sdk.sdk.getDomainName(req);

            if (res.getDomainNameResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFunction

Get a <code>Function</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFunctionRequest;
import org.openapis.openapi.models.operations.GetFunctionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFunctionRequest req = new GetFunctionRequest("dolor", "vero") {{
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "hic";
                xAmzCredential = "recusandae";
                xAmzDate = "omnis";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "perspiciatis";
                xAmzSignedHeaders = "voluptatem";
            }};            

            GetFunctionResponse res = sdk.sdk.getFunction(req);

            if (res.getFunctionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGraphqlApi

Retrieves a <code>GraphqlApi</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGraphqlApiRequest;
import org.openapis.openapi.models.operations.GetGraphqlApiResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGraphqlApiRequest req = new GetGraphqlApiRequest("consequuntur") {{
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "error";
                xAmzCredential = "eaque";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "asperiores";
            }};            

            GetGraphqlApiResponse res = sdk.sdk.getGraphqlApi(req);

            if (res.getGraphqlApiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIntrospectionSchema

Retrieves the introspection schema for a GraphQL API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIntrospectionSchemaFormatEnum;
import org.openapis.openapi.models.operations.GetIntrospectionSchemaRequest;
import org.openapis.openapi.models.operations.GetIntrospectionSchemaResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIntrospectionSchemaRequest req = new GetIntrospectionSchemaRequest("modi", GetIntrospectionSchemaFormatEnum.JSON) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "pariatur";
                xAmzDate = "provident";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "delectus";
                includeDirectives = false;
            }};            

            GetIntrospectionSchemaResponse res = sdk.sdk.getIntrospectionSchema(req);

            if (res.getIntrospectionSchemaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResolver

Retrieves a <code>Resolver</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResolverRequest;
import org.openapis.openapi.models.operations.GetResolverResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResolverRequest req = new GetResolverRequest("quos", "aliquid", "dolorem") {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "qui";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "hic";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "cum";
            }};            

            GetResolverResponse res = sdk.sdk.getResolver(req);

            if (res.getResolverResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchemaCreationStatus

Retrieves the current status of a schema creation operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchemaCreationStatusRequest;
import org.openapis.openapi.models.operations.GetSchemaCreationStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchemaCreationStatusRequest req = new GetSchemaCreationStatusRequest("dignissimos") {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "amet";
                xAmzCredential = "dolorum";
                xAmzDate = "numquam";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "ipsa";
            }};            

            GetSchemaCreationStatusResponse res = sdk.sdk.getSchemaCreationStatus(req);

            if (res.getSchemaCreationStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getType

Retrieves a <code>Type</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTypeFormatEnum;
import org.openapis.openapi.models.operations.GetTypeRequest;
import org.openapis.openapi.models.operations.GetTypeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTypeRequest req = new GetTypeRequest("odio", GetTypeFormatEnum.SDL, "accusamus") {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "voluptas";
                xAmzDate = "natus";
                xAmzSecurityToken = "eos";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "sit";
            }};            

            GetTypeResponse res = sdk.sdk.getType(req);

            if (res.getTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApiKeys

<p>Lists the API keys for a given API.</p> <note> <p>API keys are deleted automatically 60 days after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call <code>DeleteApiKey</code> to manually delete a key before it's automatically deleted.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListApiKeysRequest;
import org.openapis.openapi.models.operations.ListApiKeysResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListApiKeysRequest req = new ListApiKeysRequest("ab") {{
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "iusto";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "omnis";
                maxResults = 896672L;
                nextToken = "distinctio";
            }};            

            ListApiKeysResponse res = sdk.sdk.listApiKeys(req);

            if (res.listApiKeysResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDataSources

Lists the data sources for a given API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDataSourcesRequest;
import org.openapis.openapi.models.operations.ListDataSourcesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDataSourcesRequest req = new ListDataSourcesRequest("nihil") {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "id";
                xAmzDate = "saepe";
                xAmzSecurityToken = "eius";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "perferendis";
                maxResults = 229219L;
                nextToken = "optio";
            }};            

            ListDataSourcesResponse res = sdk.sdk.listDataSources(req);

            if (res.listDataSourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDomainNames

Lists multiple custom domain names.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDomainNamesRequest;
import org.openapis.openapi.models.operations.ListDomainNamesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDomainNamesRequest req = new ListDomainNamesRequest() {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "suscipit";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "provident";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "repellendus";
                maxResults = 519711L;
                nextToken = "similique";
            }};            

            ListDomainNamesResponse res = sdk.sdk.listDomainNames(req);

            if (res.listDomainNamesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFunctions

List multiple functions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFunctionsRequest;
import org.openapis.openapi.models.operations.ListFunctionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFunctionsRequest req = new ListFunctionsRequest("at") {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "vel";
                xAmzDate = "quod";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "dolorum";
                maxResults = 952792L;
                nextToken = "esse";
            }};            

            ListFunctionsResponse res = sdk.sdk.listFunctions(req);

            if (res.listFunctionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGraphqlApis

Lists your GraphQL APIs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGraphqlApisRequest;
import org.openapis.openapi.models.operations.ListGraphqlApisResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListGraphqlApisRequest req = new ListGraphqlApisRequest() {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "quisquam";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "amet";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "accusamus";
                maxResults = 253941L;
                nextToken = "enim";
            }};            

            ListGraphqlApisResponse res = sdk.sdk.listGraphqlApis(req);

            if (res.listGraphqlApisResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResolvers

Lists the resolvers for a given API and type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResolversRequest;
import org.openapis.openapi.models.operations.ListResolversResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResolversRequest req = new ListResolversRequest("sapiente", "totam") {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "sit";
                xAmzCredential = "expedita";
                xAmzDate = "neque";
                xAmzSecurityToken = "sed";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "libero";
                maxResults = 374170L;
                nextToken = "deserunt";
            }};            

            ListResolversResponse res = sdk.sdk.listResolvers(req);

            if (res.listResolversResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResolversByFunction

List the resolvers that are associated with a specific function.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResolversByFunctionRequest;
import org.openapis.openapi.models.operations.ListResolversByFunctionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResolversByFunctionRequest req = new ListResolversByFunctionRequest("ipsum", "incidunt") {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "maxime";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "laborum";
                maxResults = 517379L;
                nextToken = "incidunt";
            }};            

            ListResolversByFunctionResponse res = sdk.sdk.listResolversByFunction(req);

            if (res.listResolversByFunctionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags for a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("dolores") {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "aliquid";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestias";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "qui";
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

## listTypes

Lists the types for a given API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTypesFormatEnum;
import org.openapis.openapi.models.operations.ListTypesRequest;
import org.openapis.openapi.models.operations.ListTypesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTypesRequest req = new ListTypesRequest("fugit", ListTypesFormatEnum.SDL) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "ullam";
                xAmzDate = "nam";
                xAmzSecurityToken = "hic";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "cumque";
                maxResults = 746994L;
                nextToken = "nobis";
            }};            

            ListTypesResponse res = sdk.sdk.listTypes(req);

            if (res.listTypesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startSchemaCreation

<p>Adds a new schema to your GraphQL API.</p> <p>This operation is asynchronous. Use to determine when it has completed.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartSchemaCreationRequest;
import org.openapis.openapi.models.operations.StartSchemaCreationRequestBody;
import org.openapis.openapi.models.operations.StartSchemaCreationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartSchemaCreationRequest req = new StartSchemaCreationRequest(                new StartSchemaCreationRequestBody("saepe");, "ipsum") {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "quos";
                xAmzDate = "tempore";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "delectus";
            }};            

            StartSchemaCreationResponse res = sdk.sdk.startSchemaCreation(req);

            if (res.startSchemaCreationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Tags a resource with user-supplied tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("labore", "adipisci");
                                                put("dolorum", "architecto");
                                            }});, "quae") {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "quas";
                xAmzCredential = "itaque";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "porro";
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

## untagResource

Untags a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("ut",                 new String[]{{
                                add("cupiditate"),
                                add("qui"),
                                add("quae"),
                            }}) {{
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "odio";
                xAmzCredential = "occaecati";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "omnis";
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

## updateApiCache

Updates the cache for the GraphQL API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApiCacheRequest;
import org.openapis.openapi.models.operations.UpdateApiCacheRequestBody;
import org.openapis.openapi.models.operations.UpdateApiCacheRequestBodyApiCachingBehaviorEnum;
import org.openapis.openapi.models.operations.UpdateApiCacheRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.UpdateApiCacheResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateApiCacheRequest req = new UpdateApiCacheRequest(                new UpdateApiCacheRequestBody(UpdateApiCacheRequestBodyApiCachingBehaviorEnum.FULL_REQUEST_CACHING, 961571L, UpdateApiCacheRequestBodyTypeEnum.R48_XLARGE);, "consectetur") {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "dignissimos";
                xAmzDate = "hic";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "odio";
            }};            

            UpdateApiCacheResponse res = sdk.sdk.updateApiCache(req);

            if (res.updateApiCacheResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateApiKey

Updates an API key. You can update the key as long as it's not deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApiKeyRequest;
import org.openapis.openapi.models.operations.UpdateApiKeyRequestBody;
import org.openapis.openapi.models.operations.UpdateApiKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateApiKeyRequest req = new UpdateApiKeyRequest(                new UpdateApiKeyRequestBody() {{
                                description = "facilis";
                                expires = 874288L;
                            }};, "ducimus", "dolore") {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "illum";
                xAmzCredential = "sequi";
                xAmzDate = "natus";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            UpdateApiKeyResponse res = sdk.sdk.updateApiKey(req);

            if (res.updateApiKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDataSource

Updates a <code>DataSource</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDataSourceRequest;
import org.openapis.openapi.models.operations.UpdateDataSourceRequestBody;
import org.openapis.openapi.models.operations.UpdateDataSourceRequestBodyDynamodbConfig;
import org.openapis.openapi.models.operations.UpdateDataSourceRequestBodyElasticsearchConfig;
import org.openapis.openapi.models.operations.UpdateDataSourceRequestBodyEventBridgeConfig;
import org.openapis.openapi.models.operations.UpdateDataSourceRequestBodyHttpConfig;
import org.openapis.openapi.models.operations.UpdateDataSourceRequestBodyLambdaConfig;
import org.openapis.openapi.models.operations.UpdateDataSourceRequestBodyOpenSearchServiceConfig;
import org.openapis.openapi.models.operations.UpdateDataSourceRequestBodyRelationalDatabaseConfig;
import org.openapis.openapi.models.operations.UpdateDataSourceRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.UpdateDataSourceResponse;
import org.openapis.openapi.models.shared.AuthorizationConfig;
import org.openapis.openapi.models.shared.AuthorizationTypeEnum;
import org.openapis.openapi.models.shared.AwsIamConfig;
import org.openapis.openapi.models.shared.DeltaSyncConfig;
import org.openapis.openapi.models.shared.RdsHttpEndpointConfig;
import org.openapis.openapi.models.shared.RelationalDatabaseSourceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDataSourceRequest req = new UpdateDataSourceRequest(                new UpdateDataSourceRequestBody(UpdateDataSourceRequestBodyTypeEnum.AMAZON_OPENSEARCH_SERVICE) {{
                                description = "fugit";
                                dynamodbConfig = new UpdateDataSourceRequestBodyDynamodbConfig() {{
                                    awsRegion = "porro";
                                    deltaSyncConfig = new DeltaSyncConfig() {{
                                        baseTableTTL = 981830L;
                                        deltaSyncTableName = "doloribus";
                                        deltaSyncTableTTL = 478370L;
                                    }};;
                                    tableName = "eligendi";
                                    useCallerCredentials = false;
                                    versioned = false;
                                }};;
                                elasticsearchConfig = new UpdateDataSourceRequestBodyElasticsearchConfig() {{
                                    awsRegion = "ducimus";
                                    endpoint = "alias";
                                }};;
                                eventBridgeConfig = new UpdateDataSourceRequestBodyEventBridgeConfig() {{
                                    eventBusArn = "officia";
                                }};;
                                httpConfig = new UpdateDataSourceRequestBodyHttpConfig() {{
                                    authorizationConfig = new AuthorizationConfig(AuthorizationTypeEnum.AWS_IAM) {{
                                        awsIamConfig = new AwsIamConfig() {{
                                            signingRegion = "tempora";
                                            signingServiceName = "ipsam";
                                        }};;
                                    }};;
                                    endpoint = "ea";
                                }};;
                                lambdaConfig = new UpdateDataSourceRequestBodyLambdaConfig() {{
                                    lambdaFunctionArn = "aspernatur";
                                }};;
                                openSearchServiceConfig = new UpdateDataSourceRequestBodyOpenSearchServiceConfig() {{
                                    awsRegion = "vel";
                                    endpoint = "possimus";
                                }};;
                                relationalDatabaseConfig = new UpdateDataSourceRequestBodyRelationalDatabaseConfig() {{
                                    rdsHttpEndpointConfig = new RdsHttpEndpointConfig() {{
                                        awsRegion = "magnam";
                                        awsSecretStoreArn = "ratione";
                                        databaseName = "ex";
                                        dbClusterIdentifier = "laudantium";
                                        schema = "dicta";
                                    }};;
                                    relationalDatabaseSourceType = RelationalDatabaseSourceTypeEnum.RDS_HTTP_ENDPOINT;
                                }};;
                                serviceRoleArn = "dolor";
                            }};, "maiores", "quasi") {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "excepturi";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "quisquam";
            }};            

            UpdateDataSourceResponse res = sdk.sdk.updateDataSource(req);

            if (res.updateDataSourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDomainName

Updates a custom <code>DomainName</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDomainNameRequest;
import org.openapis.openapi.models.operations.UpdateDomainNameRequestBody;
import org.openapis.openapi.models.operations.UpdateDomainNameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDomainNameRequest req = new UpdateDomainNameRequest(                new UpdateDomainNameRequestBody() {{
                                description = "ea";
                            }};, "impedit") {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "veniam";
                xAmzCredential = "aliquid";
                xAmzDate = "inventore";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "quo";
            }};            

            UpdateDomainNameResponse res = sdk.sdk.updateDomainName(req);

            if (res.updateDomainNameResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFunction

Updates a <code>Function</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFunctionRequest;
import org.openapis.openapi.models.operations.UpdateFunctionRequestBody;
import org.openapis.openapi.models.operations.UpdateFunctionRequestBodyRuntime;
import org.openapis.openapi.models.operations.UpdateFunctionRequestBodySyncConfig;
import org.openapis.openapi.models.operations.UpdateFunctionResponse;
import org.openapis.openapi.models.shared.ConflictDetectionTypeEnum;
import org.openapis.openapi.models.shared.ConflictHandlerTypeEnum;
import org.openapis.openapi.models.shared.LambdaConflictHandlerConfig;
import org.openapis.openapi.models.shared.RuntimeNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFunctionRequest req = new UpdateFunctionRequest(                new UpdateFunctionRequestBody("recusandae", "aspernatur") {{
                                code = "minima";
                                description = "eaque";
                                functionVersion = "a";
                                maxBatchSize = 725595L;
                                requestMappingTemplate = "aut";
                                responseMappingTemplate = "aut";
                                runtime = new UpdateFunctionRequestBodyRuntime() {{
                                    name = RuntimeNameEnum.APPSYNC_JS;
                                    runtimeVersion = "deleniti";
                                }};;
                                syncConfig = new UpdateFunctionRequestBodySyncConfig() {{
                                    conflictDetection = ConflictDetectionTypeEnum.NONE;
                                    conflictHandler = ConflictHandlerTypeEnum.LAMBDA;
                                    lambdaConflictHandlerConfig = new LambdaConflictHandlerConfig() {{
                                        lambdaConflictHandlerArn = "fugit";
                                    }};;
                                }};;
                            }};, "accusamus", "inventore") {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "et";
                xAmzCredential = "dolorum";
                xAmzDate = "laborum";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "eum";
            }};            

            UpdateFunctionResponse res = sdk.sdk.updateFunction(req);

            if (res.updateFunctionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGraphqlApi

Updates a <code>GraphqlApi</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGraphqlApiRequest;
import org.openapis.openapi.models.operations.UpdateGraphqlApiRequestBody;
import org.openapis.openapi.models.operations.UpdateGraphqlApiRequestBodyAuthenticationTypeEnum;
import org.openapis.openapi.models.operations.UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig;
import org.openapis.openapi.models.operations.UpdateGraphqlApiRequestBodyLogConfig;
import org.openapis.openapi.models.operations.UpdateGraphqlApiRequestBodyOpenIDConnectConfig;
import org.openapis.openapi.models.operations.UpdateGraphqlApiRequestBodyUserPoolConfig;
import org.openapis.openapi.models.operations.UpdateGraphqlApiResponse;
import org.openapis.openapi.models.shared.AdditionalAuthenticationProvider;
import org.openapis.openapi.models.shared.AuthenticationTypeEnum;
import org.openapis.openapi.models.shared.CognitoUserPoolConfig;
import org.openapis.openapi.models.shared.DefaultActionEnum;
import org.openapis.openapi.models.shared.FieldLogLevelEnum;
import org.openapis.openapi.models.shared.LambdaAuthorizerConfig;
import org.openapis.openapi.models.shared.OpenIDConnectConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateGraphqlApiRequest req = new UpdateGraphqlApiRequest(                new UpdateGraphqlApiRequestBody("nobis") {{
                                additionalAuthenticationProviders = new org.openapis.openapi.models.shared.AdditionalAuthenticationProvider[]{{
                                    add(new AdditionalAuthenticationProvider() {{
                                        authenticationType = AuthenticationTypeEnum.AWS_LAMBDA;
                                        lambdaAuthorizerConfig = new LambdaAuthorizerConfig("quasi") {{
                                            authorizerResultTtlInSeconds = 860552L;
                                            authorizerUri = "voluptas";
                                            identityValidationExpression = "libero";
                                        }};
                                        openIDConnectConfig = new OpenIDConnectConfig("ipsa") {{
                                            authTTL = 270328L;
                                            clientId = "numquam";
                                            iatTTL = 131482L;
                                            issuer = "provident";
                                        }};
                                        userPoolConfig = new CognitoUserPoolConfig("eius", "esse") {{
                                            appIdClientRegex = "molestiae";
                                            awsRegion = "magnam";
                                            userPoolId = "odio";
                                        }};
                                    }}),
                                    add(new AdditionalAuthenticationProvider() {{
                                        authenticationType = AuthenticationTypeEnum.AMAZON_COGNITO_USER_POOLS;
                                        lambdaAuthorizerConfig = new LambdaAuthorizerConfig("quidem") {{
                                            authorizerResultTtlInSeconds = 524593L;
                                            authorizerUri = "fuga";
                                            identityValidationExpression = "reprehenderit";
                                        }};
                                        openIDConnectConfig = new OpenIDConnectConfig("assumenda") {{
                                            authTTL = 852635L;
                                            clientId = "ut";
                                            iatTTL = 433439L;
                                            issuer = "suscipit";
                                        }};
                                        userPoolConfig = new CognitoUserPoolConfig("veritatis", "ipsa") {{
                                            appIdClientRegex = "eos";
                                            awsRegion = "praesentium";
                                            userPoolId = "quisquam";
                                        }};
                                    }}),
                                    add(new AdditionalAuthenticationProvider() {{
                                        authenticationType = AuthenticationTypeEnum.OPENID_CONNECT;
                                        lambdaAuthorizerConfig = new LambdaAuthorizerConfig("illum") {{
                                            authorizerResultTtlInSeconds = 696997L;
                                            authorizerUri = "neque";
                                            identityValidationExpression = "quo";
                                        }};
                                        openIDConnectConfig = new OpenIDConnectConfig("voluptas") {{
                                            authTTL = 777408L;
                                            clientId = "fuga";
                                            iatTTL = 259422L;
                                            issuer = "eos";
                                        }};
                                        userPoolConfig = new CognitoUserPoolConfig("tempora", "debitis") {{
                                            appIdClientRegex = "ab";
                                            awsRegion = "cupiditate";
                                            userPoolId = "consequatur";
                                        }};
                                    }}),
                                }};
                                authenticationType = UpdateGraphqlApiRequestBodyAuthenticationTypeEnum.AWS_IAM;
                                lambdaAuthorizerConfig = new UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig() {{
                                    authorizerResultTtlInSeconds = 133465L;
                                    authorizerUri = "sequi";
                                    identityValidationExpression = "quo";
                                }};;
                                logConfig = new UpdateGraphqlApiRequestBodyLogConfig() {{
                                    cloudWatchLogsRoleArn = "esse";
                                    excludeVerboseContent = false;
                                    fieldLogLevel = FieldLogLevelEnum.ALL;
                                }};;
                                openIDConnectConfig = new UpdateGraphqlApiRequestBodyOpenIDConnectConfig() {{
                                    authTTL = 44612L;
                                    clientId = "distinctio";
                                    iatTTL = 799796L;
                                    issuer = "dignissimos";
                                }};;
                                userPoolConfig = new UpdateGraphqlApiRequestBodyUserPoolConfig() {{
                                    appIdClientRegex = "inventore";
                                    awsRegion = "nihil";
                                    defaultAction = DefaultActionEnum.DENY;
                                    userPoolId = "accusamus";
                                }};;
                                xrayEnabled = false;
                            }};, "aliquam") {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "commodi";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "molestiae";
            }};            

            UpdateGraphqlApiResponse res = sdk.sdk.updateGraphqlApi(req);

            if (res.updateGraphqlApiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateResolver

Updates a <code>Resolver</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateResolverRequest;
import org.openapis.openapi.models.operations.UpdateResolverRequestBody;
import org.openapis.openapi.models.operations.UpdateResolverRequestBodyCachingConfig;
import org.openapis.openapi.models.operations.UpdateResolverRequestBodyKindEnum;
import org.openapis.openapi.models.operations.UpdateResolverRequestBodyPipelineConfig;
import org.openapis.openapi.models.operations.UpdateResolverRequestBodyRuntime;
import org.openapis.openapi.models.operations.UpdateResolverRequestBodySyncConfig;
import org.openapis.openapi.models.operations.UpdateResolverResponse;
import org.openapis.openapi.models.shared.ConflictDetectionTypeEnum;
import org.openapis.openapi.models.shared.ConflictHandlerTypeEnum;
import org.openapis.openapi.models.shared.LambdaConflictHandlerConfig;
import org.openapis.openapi.models.shared.RuntimeNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateResolverRequest req = new UpdateResolverRequest(                new UpdateResolverRequestBody() {{
                                cachingConfig = new UpdateResolverRequestBodyCachingConfig() {{
                                    cachingKeys = new String[]{{
                                        add("eum"),
                                        add("quas"),
                                        add("praesentium"),
                                        add("consequuntur"),
                                    }};
                                    ttl = 536178L;
                                }};;
                                code = "fugit";
                                dataSourceName = "fuga";
                                kind = UpdateResolverRequestBodyKindEnum.PIPELINE;
                                maxBatchSize = 277596L;
                                pipelineConfig = new UpdateResolverRequestBodyPipelineConfig() {{
                                    functions = new String[]{{
                                        add("explicabo"),
                                        add("minima"),
                                        add("nisi"),
                                    }};
                                }};;
                                requestMappingTemplate = "fugit";
                                responseMappingTemplate = "sapiente";
                                runtime = new UpdateResolverRequestBodyRuntime() {{
                                    name = RuntimeNameEnum.APPSYNC_JS;
                                    runtimeVersion = "consequuntur";
                                }};;
                                syncConfig = new UpdateResolverRequestBodySyncConfig() {{
                                    conflictDetection = ConflictDetectionTypeEnum.VERSION;
                                    conflictHandler = ConflictHandlerTypeEnum.OPTIMISTIC_CONCURRENCY;
                                    lambdaConflictHandlerConfig = new LambdaConflictHandlerConfig() {{
                                        lambdaConflictHandlerArn = "saepe";
                                    }};;
                                }};;
                            }};, "occaecati", "atque", "et") {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "eveniet";
                xAmzCredential = "accusamus";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "esse";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "nam";
            }};            

            UpdateResolverResponse res = sdk.sdk.updateResolver(req);

            if (res.updateResolverResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateType

Updates a <code>Type</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTypeRequest;
import org.openapis.openapi.models.operations.UpdateTypeRequestBody;
import org.openapis.openapi.models.operations.UpdateTypeRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.UpdateTypeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTypeRequest req = new UpdateTypeRequest(                new UpdateTypeRequestBody(UpdateTypeRequestBodyFormatEnum.SDL) {{
                                definition = "quasi";
                            }};, "saepe", "vel") {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "rerum";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "minima";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "eligendi";
            }};            

            UpdateTypeResponse res = sdk.sdk.updateType(req);

            if (res.updateTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
