# SDK

## Overview

AppSync provides API actions for creating and interacting with data sources using GraphQL from your application.

Amazon Web Services documentation
<https://docs.aws.amazon.com/appsync/>
### Available Operations

* [AssociateAPI](#associateapi) - Maps an endpoint to your custom domain.
* [CreateAPICache](#createapicache) - Creates a cache for the GraphQL API.
* [CreateAPIKey](#createapikey) - Creates a unique key that you can distribute to clients who invoke your API.
* [CreateDataSource](#createdatasource) - Creates a <code>DataSource</code> object.
* [CreateDomainName](#createdomainname) - Creates a custom <code>DomainName</code> object.
* [CreateFunction](#createfunction) - <p>Creates a <code>Function</code> object.</p> <p>A function is a reusable entity. You can use multiple functions to compose the resolver logic.</p>
* [CreateGraphqlAPI](#creategraphqlapi) - Creates a <code>GraphqlApi</code> object.
* [CreateResolver](#createresolver) - <p>Creates a <code>Resolver</code> object.</p> <p>A resolver converts incoming requests into a format that a data source can understand, and converts the data source's responses into GraphQL.</p>
* [CreateType](#createtype) - Creates a <code>Type</code> object.
* [DeleteAPICache](#deleteapicache) - Deletes an <code>ApiCache</code> object.
* [DeleteAPIKey](#deleteapikey) - Deletes an API key.
* [DeleteDataSource](#deletedatasource) - Deletes a <code>DataSource</code> object.
* [DeleteDomainName](#deletedomainname) - Deletes a custom <code>DomainName</code> object.
* [DeleteFunction](#deletefunction) - Deletes a <code>Function</code>.
* [DeleteGraphqlAPI](#deletegraphqlapi) - Deletes a <code>GraphqlApi</code> object.
* [DeleteResolver](#deleteresolver) - Deletes a <code>Resolver</code> object.
* [DeleteType](#deletetype) - Deletes a <code>Type</code> object.
* [DisassociateAPI](#disassociateapi) - Removes an <code>ApiAssociation</code> object from a custom domain.
* [EvaluateCode](#evaluatecode) - Evaluates the given code and returns the response. The code definition requirements depend on the specified runtime. For <code>APPSYNC_JS</code> runtimes, the code defines the request and response functions. The request function takes the incoming request after a GraphQL operation is parsed and converts it into a request configuration for the selected data source operation. The response function interprets responses from the data source and maps it to the shape of the GraphQL field output type. 
* [EvaluateMappingTemplate](#evaluatemappingtemplate) - <p>Evaluates a given template and returns the response. The mapping template can be a request or response template.</p> <p>Request templates take the incoming request after a GraphQL operation is parsed and convert it into a request configuration for the selected data source operation. Response templates interpret responses from the data source and map it to the shape of the GraphQL field output type.</p> <p>Mapping templates are written in the Apache Velocity Template Language (VTL).</p>
* [FlushAPICache](#flushapicache) - Flushes an <code>ApiCache</code> object.
* [GetAPIAssociation](#getapiassociation) - Retrieves an <code>ApiAssociation</code> object.
* [GetAPICache](#getapicache) - Retrieves an <code>ApiCache</code> object.
* [GetDataSource](#getdatasource) - Retrieves a <code>DataSource</code> object.
* [GetDomainName](#getdomainname) - Retrieves a custom <code>DomainName</code> object.
* [GetFunction](#getfunction) - Get a <code>Function</code>.
* [GetGraphqlAPI](#getgraphqlapi) - Retrieves a <code>GraphqlApi</code> object.
* [GetIntrospectionSchema](#getintrospectionschema) - Retrieves the introspection schema for a GraphQL API.
* [GetResolver](#getresolver) - Retrieves a <code>Resolver</code> object.
* [GetSchemaCreationStatus](#getschemacreationstatus) - Retrieves the current status of a schema creation operation.
* [GetType](#gettype) - Retrieves a <code>Type</code> object.
* [ListAPIKeys](#listapikeys) - <p>Lists the API keys for a given API.</p> <note> <p>API keys are deleted automatically 60 days after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call <code>DeleteApiKey</code> to manually delete a key before it's automatically deleted.</p> </note>
* [ListDataSources](#listdatasources) - Lists the data sources for a given API.
* [ListDomainNames](#listdomainnames) - Lists multiple custom domain names.
* [ListFunctions](#listfunctions) - List multiple functions.
* [ListGraphqlApis](#listgraphqlapis) - Lists your GraphQL APIs.
* [ListResolvers](#listresolvers) - Lists the resolvers for a given API and type.
* [ListResolversByFunction](#listresolversbyfunction) - List the resolvers that are associated with a specific function.
* [ListTagsForResource](#listtagsforresource) - Lists the tags for a resource.
* [ListTypes](#listtypes) - Lists the types for a given API.
* [StartSchemaCreation](#startschemacreation) - <p>Adds a new schema to your GraphQL API.</p> <p>This operation is asynchronous. Use to determine when it has completed.</p>
* [TagResource](#tagresource) - Tags a resource with user-supplied tags.
* [UntagResource](#untagresource) - Untags a resource.
* [UpdateAPICache](#updateapicache) - Updates the cache for the GraphQL API.
* [UpdateAPIKey](#updateapikey) - Updates an API key. You can update the key as long as it's not deleted.
* [UpdateDataSource](#updatedatasource) - Updates a <code>DataSource</code> object.
* [UpdateDomainName](#updatedomainname) - Updates a custom <code>DomainName</code> object.
* [UpdateFunction](#updatefunction) - Updates a <code>Function</code> object.
* [UpdateGraphqlAPI](#updategraphqlapi) - Updates a <code>GraphqlApi</code> object.
* [UpdateResolver](#updateresolver) - Updates a <code>Resolver</code> object.
* [UpdateType](#updatetype) - Updates a <code>Type</code> object.

## AssociateAPI

Maps an endpoint to your custom domain.

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
    res, err := s.SDK.AssociateAPI(ctx, operations.AssociateAPIRequest{
        RequestBody: operations.AssociateAPIRequestBody{
            APIID: "error",
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("delectus"),
        DomainName: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateAPIResponse != nil {
        // handle response
    }
}
```

## CreateAPICache

Creates a cache for the GraphQL API.

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
    res, err := s.SDK.CreateAPICache(ctx, operations.CreateAPICacheRequest{
        RequestBody: operations.CreateAPICacheRequestBody{
            APICachingBehavior: operations.CreateAPICacheRequestBodyAPICachingBehaviorEnumFullRequestCaching,
            AtRestEncryptionEnabled: sdk.Bool(false),
            TransitEncryptionEnabled: sdk.Bool(false),
            TTL: 477665,
            Type: operations.CreateAPICacheRequestBodyTypeEnumLarge2X,
        },
        XAmzAlgorithm: sdk.String("placeat"),
        XAmzContentSha256: sdk.String("voluptatum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("temporibus"),
        APIID: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAPICacheResponse != nil {
        // handle response
    }
}
```

## CreateAPIKey

Creates a unique key that you can distribute to clients who invoke your API.

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
    res, err := s.SDK.CreateAPIKey(ctx, operations.CreateAPIKeyRequest{
        RequestBody: operations.CreateAPIKeyRequestBody{
            Description: sdk.String("quis"),
            Expires: sdk.Int64(87129),
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("odit"),
        APIID: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAPIKeyResponse != nil {
        // handle response
    }
}
```

## CreateDataSource

Creates a <code>DataSource</code> object.

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
    res, err := s.SDK.CreateDataSource(ctx, operations.CreateDataSourceRequest{
        RequestBody: operations.CreateDataSourceRequestBody{
            Description: sdk.String("at"),
            DynamodbConfig: &operations.CreateDataSourceRequestBodyDynamodbConfig{
                AwsRegion: sdk.String("maiores"),
                DeltaSyncConfig: &shared.DeltaSyncConfig{
                    BaseTableTTL: sdk.Int64(473608),
                    DeltaSyncTableName: sdk.String("quod"),
                    DeltaSyncTableTTL: sdk.Int64(800911),
                },
                TableName: sdk.String("esse"),
                UseCallerCredentials: sdk.Bool(false),
                Versioned: sdk.Bool(false),
            },
            ElasticsearchConfig: &operations.CreateDataSourceRequestBodyElasticsearchConfig{
                AwsRegion: sdk.String("totam"),
                Endpoint: sdk.String("porro"),
            },
            EventBridgeConfig: &operations.CreateDataSourceRequestBodyEventBridgeConfig{
                EventBusArn: sdk.String("dolorum"),
            },
            HTTPConfig: &operations.CreateDataSourceRequestBodyHTTPConfig{
                AuthorizationConfig: &shared.AuthorizationConfig{
                    AuthorizationType: shared.AuthorizationTypeEnumAwsIam,
                    AwsIamConfig: &shared.AwsIamConfig{
                        SigningRegion: sdk.String("dicta"),
                        SigningServiceName: sdk.String("nam"),
                    },
                },
                Endpoint: sdk.String("officia"),
            },
            LambdaConfig: &operations.CreateDataSourceRequestBodyLambdaConfig{
                LambdaFunctionArn: sdk.String("occaecati"),
            },
            Name: "Cassandra Welch",
            OpenSearchServiceConfig: &operations.CreateDataSourceRequestBodyOpenSearchServiceConfig{
                AwsRegion: sdk.String("beatae"),
                Endpoint: sdk.String("commodi"),
            },
            RelationalDatabaseConfig: &operations.CreateDataSourceRequestBodyRelationalDatabaseConfig{
                RdsHTTPEndpointConfig: &shared.RdsHTTPEndpointConfig{
                    AwsRegion: sdk.String("molestiae"),
                    AwsSecretStoreArn: sdk.String("modi"),
                    DatabaseName: sdk.String("qui"),
                    DbClusterIdentifier: sdk.String("impedit"),
                    Schema: sdk.String("cum"),
                },
                RelationalDatabaseSourceType: shared.RelationalDatabaseSourceTypeEnumRdsHTTPEndpoint.ToPointer(),
            },
            ServiceRoleArn: sdk.String("esse"),
            Type: operations.CreateDataSourceRequestBodyTypeEnumAmazonDynamodb,
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("iste"),
        APIID: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDataSourceResponse != nil {
        // handle response
    }
}
```

## CreateDomainName

Creates a custom <code>DomainName</code> object.

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
    res, err := s.SDK.CreateDomainName(ctx, operations.CreateDomainNameRequest{
        RequestBody: operations.CreateDomainNameRequestBody{
            CertificateArn: "natus",
            Description: sdk.String("laboriosam"),
            DomainName: "hic",
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDomainNameResponse != nil {
        // handle response
    }
}
```

## CreateFunction

<p>Creates a <code>Function</code> object.</p> <p>A function is a reusable entity. You can use multiple functions to compose the resolver logic.</p>

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
    res, err := s.SDK.CreateFunction(ctx, operations.CreateFunctionRequest{
        RequestBody: operations.CreateFunctionRequestBody{
            Code: sdk.String("quidem"),
            DataSourceName: "architecto",
            Description: sdk.String("ipsa"),
            FunctionVersion: sdk.String("reiciendis"),
            MaxBatchSize: sdk.Int64(666767),
            Name: "Cameron Dach",
            RequestMappingTemplate: sdk.String("explicabo"),
            ResponseMappingTemplate: sdk.String("nobis"),
            Runtime: &operations.CreateFunctionRequestBodyRuntime{
                Name: shared.RuntimeNameEnumAppsyncJs.ToPointer(),
                RuntimeVersion: sdk.String("enim"),
            },
            SyncConfig: &operations.CreateFunctionRequestBodySyncConfig{
                ConflictDetection: shared.ConflictDetectionTypeEnumNone.ToPointer(),
                ConflictHandler: shared.ConflictHandlerTypeEnumLambda.ToPointer(),
                LambdaConflictHandlerConfig: &shared.LambdaConflictHandlerConfig{
                    LambdaConflictHandlerArn: sdk.String("minima"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("architecto"),
        APIID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFunctionResponse != nil {
        // handle response
    }
}
```

## CreateGraphqlAPI

Creates a <code>GraphqlApi</code> object.

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
    res, err := s.SDK.CreateGraphqlAPI(ctx, operations.CreateGraphqlAPIRequest{
        RequestBody: operations.CreateGraphqlAPIRequestBody{
            AdditionalAuthenticationProviders: []shared.AdditionalAuthenticationProvider{
                shared.AdditionalAuthenticationProvider{
                    AuthenticationType: shared.AuthenticationTypeEnumOpenidConnect.ToPointer(),
                    LambdaAuthorizerConfig: &shared.LambdaAuthorizerConfig{
                        AuthorizerResultTTLInSeconds: sdk.Int64(161309),
                        AuthorizerURI: "repellat",
                        IdentityValidationExpression: sdk.String("mollitia"),
                    },
                    OpenIDConnectConfig: &shared.OpenIDConnectConfig{
                        AuthTTL: sdk.Int64(581850),
                        ClientID: sdk.String("numquam"),
                        IatTTL: sdk.Int64(414369),
                        Issuer: "quam",
                    },
                    UserPoolConfig: &shared.CognitoUserPoolConfig{
                        AppIDClientRegex: sdk.String("molestiae"),
                        AwsRegion: "velit",
                        UserPoolID: "error",
                    },
                },
            },
            AuthenticationType: operations.CreateGraphqlAPIRequestBodyAuthenticationTypeEnumAPIKey,
            LambdaAuthorizerConfig: &operations.CreateGraphqlAPIRequestBodyLambdaAuthorizerConfig{
                AuthorizerResultTTLInSeconds: sdk.Int64(338007),
                AuthorizerURI: sdk.String("vitae"),
                IdentityValidationExpression: sdk.String("laborum"),
            },
            LogConfig: &operations.CreateGraphqlAPIRequestBodyLogConfig{
                CloudWatchLogsRoleArn: sdk.String("animi"),
                ExcludeVerboseContent: sdk.Bool(false),
                FieldLogLevel: shared.FieldLogLevelEnumNone.ToPointer(),
            },
            Name: "Angelica Dietrich",
            OpenIDConnectConfig: &operations.CreateGraphqlAPIRequestBodyOpenIDConnectConfig{
                AuthTTL: sdk.Int64(662527),
                ClientID: sdk.String("possimus"),
                IatTTL: sdk.Int64(13571),
                Issuer: sdk.String("quasi"),
            },
            Tags: map[string]string{
                "temporibus": "laborum",
                "quasi": "reiciendis",
                "voluptatibus": "vero",
            },
            UserPoolConfig: &operations.CreateGraphqlAPIRequestBodyUserPoolConfig{
                AppIDClientRegex: sdk.String("nihil"),
                AwsRegion: sdk.String("praesentium"),
                DefaultAction: shared.DefaultActionEnumDeny.ToPointer(),
                UserPoolID: sdk.String("ipsa"),
            },
            XrayEnabled: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("ut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGraphqlAPIResponse != nil {
        // handle response
    }
}
```

## CreateResolver

<p>Creates a <code>Resolver</code> object.</p> <p>A resolver converts incoming requests into a format that a data source can understand, and converts the data source's responses into GraphQL.</p>

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
    res, err := s.SDK.CreateResolver(ctx, operations.CreateResolverRequest{
        RequestBody: operations.CreateResolverRequestBody{
            CachingConfig: &operations.CreateResolverRequestBodyCachingConfig{
                CachingKeys: []string{
                    "dicta",
                    "corporis",
                    "dolore",
                    "iusto",
                },
                TTL: sdk.Int64(118727),
            },
            Code: sdk.String("harum"),
            DataSourceName: sdk.String("enim"),
            FieldName: "accusamus",
            Kind: operations.CreateResolverRequestBodyKindEnumUnit.ToPointer(),
            MaxBatchSize: sdk.Int64(918236),
            PipelineConfig: &operations.CreateResolverRequestBodyPipelineConfig{
                Functions: []string{
                    "ipsum",
                },
            },
            RequestMappingTemplate: sdk.String("quidem"),
            ResponseMappingTemplate: sdk.String("molestias"),
            Runtime: &operations.CreateResolverRequestBodyRuntime{
                Name: shared.RuntimeNameEnumAppsyncJs.ToPointer(),
                RuntimeVersion: sdk.String("excepturi"),
            },
            SyncConfig: &operations.CreateResolverRequestBodySyncConfig{
                ConflictDetection: shared.ConflictDetectionTypeEnumNone.ToPointer(),
                ConflictHandler: shared.ConflictHandlerTypeEnumLambda.ToPointer(),
                LambdaConflictHandlerConfig: &shared.LambdaConflictHandlerConfig{
                    LambdaConflictHandlerArn: sdk.String("praesentium"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("voluptates"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("itaque"),
        APIID: "incidunt",
        TypeName: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateResolverResponse != nil {
        // handle response
    }
}
```

## CreateType

Creates a <code>Type</code> object.

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
    res, err := s.SDK.CreateType(ctx, operations.CreateTypeRequest{
        RequestBody: operations.CreateTypeRequestBody{
            Definition: "consequatur",
            Format: operations.CreateTypeRequestBodyFormatEnumJSON,
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("modi"),
        APIID: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTypeResponse != nil {
        // handle response
    }
}
```

## DeleteAPICache

Deletes an <code>ApiCache</code> object.

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
    res, err := s.SDK.DeleteAPICache(ctx, operations.DeleteAPICacheRequest{
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        APIID: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAPICacheResponse != nil {
        // handle response
    }
}
```

## DeleteAPIKey

Deletes an API key.

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
    res, err := s.SDK.DeleteAPIKey(ctx, operations.DeleteAPIKeyRequest{
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("labore"),
        APIID: "delectus",
        ID: "63c969e9-a3ef-4a77-9fb1-4cd66ae395ef",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAPIKeyResponse != nil {
        // handle response
    }
}
```

## DeleteDataSource

Deletes a <code>DataSource</code> object.

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
    res, err := s.SDK.DeleteDataSource(ctx, operations.DeleteDataSourceRequest{
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        APIID: "amet",
        Name: "Tyler Kassulke",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDataSourceResponse != nil {
        // handle response
    }
}
```

## DeleteDomainName

Deletes a custom <code>DomainName</code> object.

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
    res, err := s.SDK.DeleteDomainName(ctx, operations.DeleteDomainNameRequest{
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("labore"),
        DomainName: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDomainNameResponse != nil {
        // handle response
    }
}
```

## DeleteFunction

Deletes a <code>Function</code>.

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
    res, err := s.SDK.DeleteFunction(ctx, operations.DeleteFunctionRequest{
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("architecto"),
        APIID: "magnam",
        FunctionID: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFunctionResponse != nil {
        // handle response
    }
}
```

## DeleteGraphqlAPI

Deletes a <code>GraphqlApi</code> object.

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
    res, err := s.SDK.DeleteGraphqlAPI(ctx, operations.DeleteGraphqlAPIRequest{
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        APIID: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteGraphqlAPIResponse != nil {
        // handle response
    }
}
```

## DeleteResolver

Deletes a <code>Resolver</code> object.

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
    res, err := s.SDK.DeleteResolver(ctx, operations.DeleteResolverRequest{
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("nemo"),
        APIID: "quasi",
        FieldName: "iure",
        TypeName: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResolverResponse != nil {
        // handle response
    }
}
```

## DeleteType

Deletes a <code>Type</code> object.

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
    res, err := s.SDK.DeleteType(ctx, operations.DeleteTypeRequest{
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("architecto"),
        APIID: "architecto",
        TypeName: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTypeResponse != nil {
        // handle response
    }
}
```

## DisassociateAPI

Removes an <code>ApiAssociation</code> object from a custom domain.

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
    res, err := s.SDK.DisassociateAPI(ctx, operations.DisassociateAPIRequest{
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("saepe"),
        DomainName: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateAPIResponse != nil {
        // handle response
    }
}
```

## EvaluateCode

Evaluates the given code and returns the response. The code definition requirements depend on the specified runtime. For <code>APPSYNC_JS</code> runtimes, the code defines the request and response functions. The request function takes the incoming request after a GraphQL operation is parsed and converts it into a request configuration for the selected data source operation. The response function interprets responses from the data source and maps it to the shape of the GraphQL field output type. 

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
    res, err := s.SDK.EvaluateCode(ctx, operations.EvaluateCodeRequest{
        RequestBody: operations.EvaluateCodeRequestBody{
            Code: "accusantium",
            Context: "consequuntur",
            Function: sdk.String("praesentium"),
            Runtime: operations.EvaluateCodeRequestBodyRuntime{
                Name: shared.RuntimeNameEnumAppsyncJs.ToPointer(),
                RuntimeVersion: sdk.String("natus"),
            },
        },
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EvaluateCodeResponse != nil {
        // handle response
    }
}
```

## EvaluateMappingTemplate

<p>Evaluates a given template and returns the response. The mapping template can be a request or response template.</p> <p>Request templates take the incoming request after a GraphQL operation is parsed and convert it into a request configuration for the selected data source operation. Response templates interpret responses from the data source and map it to the shape of the GraphQL field output type.</p> <p>Mapping templates are written in the Apache Velocity Template Language (VTL).</p>

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
    res, err := s.SDK.EvaluateMappingTemplate(ctx, operations.EvaluateMappingTemplateRequest{
        RequestBody: operations.EvaluateMappingTemplateRequestBody{
            Context: "excepturi",
            Template: "odit",
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EvaluateMappingTemplateResponse != nil {
        // handle response
    }
}
```

## FlushAPICache

Flushes an <code>ApiCache</code> object.

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
    res, err := s.SDK.FlushAPICache(ctx, operations.FlushAPICacheRequest{
        XAmzAlgorithm: sdk.String("autem"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        APIID: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlushAPICacheResponse != nil {
        // handle response
    }
}
```

## GetAPIAssociation

Retrieves an <code>ApiAssociation</code> object.

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
    res, err := s.SDK.GetAPIAssociation(ctx, operations.GetAPIAssociationRequest{
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("nobis"),
        DomainName: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIAssociationResponse != nil {
        // handle response
    }
}
```

## GetAPICache

Retrieves an <code>ApiCache</code> object.

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
    res, err := s.SDK.GetAPICache(ctx, operations.GetAPICacheRequest{
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("eos"),
        APIID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPICacheResponse != nil {
        // handle response
    }
}
```

## GetDataSource

Retrieves a <code>DataSource</code> object.

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
    res, err := s.SDK.GetDataSource(ctx, operations.GetDataSourceRequest{
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("hic"),
        APIID: "recusandae",
        Name: "Miss Cesar Metz",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDataSourceResponse != nil {
        // handle response
    }
}
```

## GetDomainName

Retrieves a custom <code>DomainName</code> object.

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
    res, err := s.SDK.GetDomainName(ctx, operations.GetDomainNameRequest{
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        DomainName: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDomainNameResponse != nil {
        // handle response
    }
}
```

## GetFunction

Get a <code>Function</code>.

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
    res, err := s.SDK.GetFunction(ctx, operations.GetFunctionRequest{
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("nobis"),
        APIID: "libero",
        FunctionID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFunctionResponse != nil {
        // handle response
    }
}
```

## GetGraphqlAPI

Retrieves a <code>GraphqlApi</code> object.

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
    res, err := s.SDK.GetGraphqlAPI(ctx, operations.GetGraphqlAPIRequest{
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("qui"),
        APIID: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGraphqlAPIResponse != nil {
        // handle response
    }
}
```

## GetIntrospectionSchema

Retrieves the introspection schema for a GraphQL API.

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
    res, err := s.SDK.GetIntrospectionSchema(ctx, operations.GetIntrospectionSchemaRequest{
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("amet"),
        APIID: "dolorum",
        Format: operations.GetIntrospectionSchemaFormatEnumSdl,
        IncludeDirectives: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetIntrospectionSchemaResponse != nil {
        // handle response
    }
}
```

## GetResolver

Retrieves a <code>Resolver</code> object.

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
    res, err := s.SDK.GetResolver(ctx, operations.GetResolverRequest{
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        APIID: "quidem",
        FieldName: "voluptatibus",
        TypeName: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResolverResponse != nil {
        // handle response
    }
}
```

## GetSchemaCreationStatus

Retrieves the current status of a schema creation operation.

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
    res, err := s.SDK.GetSchemaCreationStatus(ctx, operations.GetSchemaCreationStatusRequest{
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("soluta"),
        APIID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSchemaCreationStatusResponse != nil {
        // handle response
    }
}
```

## GetType

Retrieves a <code>Type</code> object.

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
    res, err := s.SDK.GetType(ctx, operations.GetTypeRequest{
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        APIID: "asperiores",
        Format: operations.GetTypeFormatEnumSdl,
        TypeName: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTypeResponse != nil {
        // handle response
    }
}
```

## ListAPIKeys

<p>Lists the API keys for a given API.</p> <note> <p>API keys are deleted automatically 60 days after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call <code>DeleteApiKey</code> to manually delete a key before it's automatically deleted.</p> </note>

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
    res, err := s.SDK.ListAPIKeys(ctx, operations.ListAPIKeysRequest{
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("amet"),
        APIID: "optio",
        MaxResults: sdk.Int64(881586),
        NextToken: sdk.String("ad"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAPIKeysResponse != nil {
        // handle response
    }
}
```

## ListDataSources

Lists the data sources for a given API.

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
    res, err := s.SDK.ListDataSources(ctx, operations.ListDataSourcesRequest{
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("totam"),
        APIID: "similique",
        MaxResults: sdk.Int64(55),
        NextToken: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDataSourcesResponse != nil {
        // handle response
    }
}
```

## ListDomainNames

Lists multiple custom domain names.

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
    res, err := s.SDK.ListDomainNames(ctx, operations.ListDomainNamesRequest{
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        MaxResults: sdk.Int64(952792),
        NextToken: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDomainNamesResponse != nil {
        // handle response
    }
}
```

## ListFunctions

List multiple functions.

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
    res, err := s.SDK.ListFunctions(ctx, operations.ListFunctionsRequest{
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("tempore"),
        APIID: "accusamus",
        MaxResults: sdk.Int64(253941),
        NextToken: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFunctionsResponse != nil {
        // handle response
    }
}
```

## ListGraphqlApis

Lists your GraphQL APIs.

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
    res, err := s.SDK.ListGraphqlApis(ctx, operations.ListGraphqlApisRequest{
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("neque"),
        MaxResults: sdk.Int64(153694),
        NextToken: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGraphqlApisResponse != nil {
        // handle response
    }
}
```

## ListResolvers

Lists the resolvers for a given API and type.

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
    res, err := s.SDK.ListResolvers(ctx, operations.ListResolversRequest{
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("qui"),
        APIID: "cupiditate",
        MaxResults: sdk.Int64(807581),
        NextToken: sdk.String("pariatur"),
        TypeName: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResolversResponse != nil {
        // handle response
    }
}
```

## ListResolversByFunction

List the resolvers that are associated with a specific function.

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
    res, err := s.SDK.ListResolversByFunction(ctx, operations.ListResolversByFunctionRequest{
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        APIID: "facilis",
        FunctionID: "aliquid",
        MaxResults: sdk.Int64(463150),
        NextToken: sdk.String("molestias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResolversByFunctionResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags for a resource.

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("neque"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("sunt"),
        ResourceArn: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListTypes

Lists the types for a given API.

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
    res, err := s.SDK.ListTypes(ctx, operations.ListTypesRequest{
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("et"),
        APIID: "saepe",
        Format: operations.ListTypesFormatEnumSdl,
        MaxResults: sdk.Int64(83422),
        NextToken: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTypesResponse != nil {
        // handle response
    }
}
```

## StartSchemaCreation

<p>Adds a new schema to your GraphQL API.</p> <p>This operation is asynchronous. Use to determine when it has completed.</p>

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
    res, err := s.SDK.StartSchemaCreation(ctx, operations.StartSchemaCreationRequest{
        RequestBody: operations.StartSchemaCreationRequestBody{
            Definition: "quos",
        },
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("labore"),
        APIID: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartSchemaCreationResponse != nil {
        // handle response
    }
}
```

## TagResource

Tags a resource with user-supplied tags.

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "architecto": "quae",
                "aut": "quas",
                "itaque": "consequatur",
            },
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        ResourceArn: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Untags a resource.

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("vero"),
        ResourceArn: "omnis",
        TagKeys: []string{
            "ipsum",
            "delectus",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateAPICache

Updates the cache for the GraphQL API.

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
    res, err := s.SDK.UpdateAPICache(ctx, operations.UpdateAPICacheRequest{
        RequestBody: operations.UpdateAPICacheRequestBody{
            APICachingBehavior: operations.UpdateAPICacheRequestBodyAPICachingBehaviorEnumFullRequestCaching,
            TTL: 231701,
            Type: operations.UpdateAPICacheRequestBodyTypeEnumLarge8X,
        },
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("similique"),
        APIID: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAPICacheResponse != nil {
        // handle response
    }
}
```

## UpdateAPIKey

Updates an API key. You can update the key as long as it's not deleted.

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
    res, err := s.SDK.UpdateAPIKey(ctx, operations.UpdateAPIKeyRequest{
        RequestBody: operations.UpdateAPIKeyRequestBody{
            Description: sdk.String("vero"),
            Expires: sdk.Int64(498140),
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("aut"),
        APIID: "voluptatibus",
        ID: "5d2cff7c-70a4-4562-ad43-6813f16d9f5f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAPIKeyResponse != nil {
        // handle response
    }
}
```

## UpdateDataSource

Updates a <code>DataSource</code> object.

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
    res, err := s.SDK.UpdateDataSource(ctx, operations.UpdateDataSourceRequest{
        RequestBody: operations.UpdateDataSourceRequestBody{
            Description: sdk.String("quisquam"),
            DynamodbConfig: &operations.UpdateDataSourceRequestBodyDynamodbConfig{
                AwsRegion: sdk.String("saepe"),
                DeltaSyncConfig: &shared.DeltaSyncConfig{
                    BaseTableTTL: sdk.Int64(411372),
                    DeltaSyncTableName: sdk.String("impedit"),
                    DeltaSyncTableTTL: sdk.Int64(359271),
                },
                TableName: sdk.String("veniam"),
                UseCallerCredentials: sdk.Bool(false),
                Versioned: sdk.Bool(false),
            },
            ElasticsearchConfig: &operations.UpdateDataSourceRequestBodyElasticsearchConfig{
                AwsRegion: sdk.String("aliquid"),
                Endpoint: sdk.String("inventore"),
            },
            EventBridgeConfig: &operations.UpdateDataSourceRequestBodyEventBridgeConfig{
                EventBusArn: sdk.String("magnam"),
            },
            HTTPConfig: &operations.UpdateDataSourceRequestBodyHTTPConfig{
                AuthorizationConfig: &shared.AuthorizationConfig{
                    AuthorizationType: shared.AuthorizationTypeEnumAwsIam,
                    AwsIamConfig: &shared.AwsIamConfig{
                        SigningRegion: sdk.String("ea"),
                        SigningServiceName: sdk.String("quo"),
                    },
                },
                Endpoint: sdk.String("consectetur"),
            },
            LambdaConfig: &operations.UpdateDataSourceRequestBodyLambdaConfig{
                LambdaFunctionArn: sdk.String("recusandae"),
            },
            OpenSearchServiceConfig: &operations.UpdateDataSourceRequestBodyOpenSearchServiceConfig{
                AwsRegion: sdk.String("aspernatur"),
                Endpoint: sdk.String("minima"),
            },
            RelationalDatabaseConfig: &operations.UpdateDataSourceRequestBodyRelationalDatabaseConfig{
                RdsHTTPEndpointConfig: &shared.RdsHTTPEndpointConfig{
                    AwsRegion: sdk.String("eaque"),
                    AwsSecretStoreArn: sdk.String("a"),
                    DatabaseName: sdk.String("libero"),
                    DbClusterIdentifier: sdk.String("aut"),
                    Schema: sdk.String("aut"),
                },
                RelationalDatabaseSourceType: shared.RelationalDatabaseSourceTypeEnumRdsHTTPEndpoint.ToPointer(),
            },
            ServiceRoleArn: sdk.String("deleniti"),
            Type: operations.UpdateDataSourceRequestBodyTypeEnumAmazonOpensearchService,
        },
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        APIID: "laborum",
        Name: "Lee Kemmer",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDataSourceResponse != nil {
        // handle response
    }
}
```

## UpdateDomainName

Updates a custom <code>DomainName</code> object.

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
    res, err := s.SDK.UpdateDomainName(ctx, operations.UpdateDomainNameRequest{
        RequestBody: operations.UpdateDomainNameRequestBody{
            Description: sdk.String("quas"),
        },
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("numquam"),
        DomainName: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDomainNameResponse != nil {
        // handle response
    }
}
```

## UpdateFunction

Updates a <code>Function</code> object.

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
    res, err := s.SDK.UpdateFunction(ctx, operations.UpdateFunctionRequest{
        RequestBody: operations.UpdateFunctionRequestBody{
            Code: sdk.String("provident"),
            DataSourceName: "ipsa",
            Description: sdk.String("molestiae"),
            FunctionVersion: sdk.String("magnam"),
            MaxBatchSize: sdk.Int64(487935),
            Name: "Joy Klocko",
            RequestMappingTemplate: sdk.String("reprehenderit"),
            ResponseMappingTemplate: sdk.String("quidem"),
            Runtime: &operations.UpdateFunctionRequestBodyRuntime{
                Name: shared.RuntimeNameEnumAppsyncJs.ToPointer(),
                RuntimeVersion: sdk.String("fugiat"),
            },
            SyncConfig: &operations.UpdateFunctionRequestBodySyncConfig{
                ConflictDetection: shared.ConflictDetectionTypeEnumVersion.ToPointer(),
                ConflictHandler: shared.ConflictHandlerTypeEnumLambda.ToPointer(),
                LambdaConflictHandlerConfig: &shared.LambdaConflictHandlerConfig{
                    LambdaConflictHandlerArn: sdk.String("suscipit"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("id"),
        APIID: "quidem",
        FunctionID: "neque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFunctionResponse != nil {
        // handle response
    }
}
```

## UpdateGraphqlAPI

Updates a <code>GraphqlApi</code> object.

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
    res, err := s.SDK.UpdateGraphqlAPI(ctx, operations.UpdateGraphqlAPIRequest{
        RequestBody: operations.UpdateGraphqlAPIRequestBody{
            AdditionalAuthenticationProviders: []shared.AdditionalAuthenticationProvider{
                shared.AdditionalAuthenticationProvider{
                    AuthenticationType: shared.AuthenticationTypeEnumAwsLambda.ToPointer(),
                    LambdaAuthorizerConfig: &shared.LambdaAuthorizerConfig{
                        AuthorizerResultTTLInSeconds: sdk.Int64(777408),
                        AuthorizerURI: "fuga",
                        IdentityValidationExpression: sdk.String("eius"),
                    },
                    OpenIDConnectConfig: &shared.OpenIDConnectConfig{
                        AuthTTL: sdk.Int64(178367),
                        ClientID: sdk.String("voluptas"),
                        IatTTL: sdk.Int64(69859),
                        Issuer: "cupiditate",
                    },
                    UserPoolConfig: &shared.CognitoUserPoolConfig{
                        AppIDClientRegex: sdk.String("consequatur"),
                        AwsRegion: "tempora",
                        UserPoolID: "debitis",
                    },
                },
                shared.AdditionalAuthenticationProvider{
                    AuthenticationType: shared.AuthenticationTypeEnumAwsIam.ToPointer(),
                    LambdaAuthorizerConfig: &shared.LambdaAuthorizerConfig{
                        AuthorizerResultTTLInSeconds: sdk.Int64(133465),
                        AuthorizerURI: "sequi",
                        IdentityValidationExpression: sdk.String("quo"),
                    },
                    OpenIDConnectConfig: &shared.OpenIDConnectConfig{
                        AuthTTL: sdk.Int64(459856),
                        ClientID: sdk.String("recusandae"),
                        IatTTL: sdk.Int64(44612),
                        Issuer: "distinctio",
                    },
                    UserPoolConfig: &shared.CognitoUserPoolConfig{
                        AppIDClientRegex: sdk.String("quod"),
                        AwsRegion: "dignissimos",
                        UserPoolID: "inventore",
                    },
                },
                shared.AdditionalAuthenticationProvider{
                    AuthenticationType: shared.AuthenticationTypeEnumAmazonCognitoUserPools.ToPointer(),
                    LambdaAuthorizerConfig: &shared.LambdaAuthorizerConfig{
                        AuthorizerResultTTLInSeconds: sdk.Int64(518835),
                        AuthorizerURI: "accusamus",
                        IdentityValidationExpression: sdk.String("aliquam"),
                    },
                    OpenIDConnectConfig: &shared.OpenIDConnectConfig{
                        AuthTTL: sdk.Int64(488410),
                        ClientID: sdk.String("occaecati"),
                        IatTTL: sdk.Int64(414567),
                        Issuer: "sapiente",
                    },
                    UserPoolConfig: &shared.CognitoUserPoolConfig{
                        AppIDClientRegex: sdk.String("dolores"),
                        AwsRegion: "deserunt",
                        UserPoolID: "molestiae",
                    },
                },
                shared.AdditionalAuthenticationProvider{
                    AuthenticationType: shared.AuthenticationTypeEnumAPIKey.ToPointer(),
                    LambdaAuthorizerConfig: &shared.LambdaAuthorizerConfig{
                        AuthorizerResultTTLInSeconds: sdk.Int64(783648),
                        AuthorizerURI: "eum",
                        IdentityValidationExpression: sdk.String("quas"),
                    },
                    OpenIDConnectConfig: &shared.OpenIDConnectConfig{
                        AuthTTL: sdk.Int64(510017),
                        ClientID: sdk.String("consequuntur"),
                        IatTTL: sdk.Int64(536178),
                        Issuer: "fugit",
                    },
                    UserPoolConfig: &shared.CognitoUserPoolConfig{
                        AppIDClientRegex: sdk.String("fuga"),
                        AwsRegion: "mollitia",
                        UserPoolID: "incidunt",
                    },
                },
            },
            AuthenticationType: operations.UpdateGraphqlAPIRequestBodyAuthenticationTypeEnumAmazonCognitoUserPools.ToPointer(),
            LambdaAuthorizerConfig: &operations.UpdateGraphqlAPIRequestBodyLambdaAuthorizerConfig{
                AuthorizerResultTTLInSeconds: sdk.Int64(128860),
                AuthorizerURI: sdk.String("minima"),
                IdentityValidationExpression: sdk.String("nisi"),
            },
            LogConfig: &operations.UpdateGraphqlAPIRequestBodyLogConfig{
                CloudWatchLogsRoleArn: sdk.String("fugit"),
                ExcludeVerboseContent: sdk.Bool(false),
                FieldLogLevel: shared.FieldLogLevelEnumAll.ToPointer(),
            },
            Name: "Norma Christiansen",
            OpenIDConnectConfig: &operations.UpdateGraphqlAPIRequestBodyOpenIDConnectConfig{
                AuthTTL: sdk.Int64(543806),
                ClientID: sdk.String("et"),
                IatTTL: sdk.Int64(456911),
                Issuer: sdk.String("eveniet"),
            },
            UserPoolConfig: &operations.UpdateGraphqlAPIRequestBodyUserPoolConfig{
                AppIDClientRegex: sdk.String("accusamus"),
                AwsRegion: sdk.String("veritatis"),
                DefaultAction: shared.DefaultActionEnumAllow.ToPointer(),
                UserPoolID: sdk.String("quod"),
            },
            XrayEnabled: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("harum"),
        APIID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateGraphqlAPIResponse != nil {
        // handle response
    }
}
```

## UpdateResolver

Updates a <code>Resolver</code> object.

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
    res, err := s.SDK.UpdateResolver(ctx, operations.UpdateResolverRequest{
        RequestBody: operations.UpdateResolverRequestBody{
            CachingConfig: &operations.UpdateResolverRequestBodyCachingConfig{
                CachingKeys: []string{
                    "occaecati",
                    "minima",
                    "distinctio",
                },
                TTL: sdk.Int64(756779),
            },
            Code: sdk.String("sit"),
            DataSourceName: sdk.String("culpa"),
            Kind: operations.UpdateResolverRequestBodyKindEnumPipeline.ToPointer(),
            MaxBatchSize: sdk.Int64(240020),
            PipelineConfig: &operations.UpdateResolverRequestBodyPipelineConfig{
                Functions: []string{
                    "consequuntur",
                    "consequatur",
                    "minus",
                    "quaerat",
                },
            },
            RequestMappingTemplate: sdk.String("sapiente"),
            ResponseMappingTemplate: sdk.String("consectetur"),
            Runtime: &operations.UpdateResolverRequestBodyRuntime{
                Name: shared.RuntimeNameEnumAppsyncJs.ToPointer(),
                RuntimeVersion: sdk.String("esse"),
            },
            SyncConfig: &operations.UpdateResolverRequestBodySyncConfig{
                ConflictDetection: shared.ConflictDetectionTypeEnumNone.ToPointer(),
                ConflictHandler: shared.ConflictHandlerTypeEnumAutomerge.ToPointer(),
                LambdaConflictHandlerConfig: &shared.LambdaConflictHandlerConfig{
                    LambdaConflictHandlerArn: sdk.String("a"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("sint"),
        APIID: "pariatur",
        FieldName: "possimus",
        TypeName: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateResolverResponse != nil {
        // handle response
    }
}
```

## UpdateType

Updates a <code>Type</code> object.

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
    res, err := s.SDK.UpdateType(ctx, operations.UpdateTypeRequest{
        RequestBody: operations.UpdateTypeRequestBody{
            Definition: sdk.String("eveniet"),
            Format: operations.UpdateTypeRequestBodyFormatEnumJSON,
        },
        XAmzAlgorithm: sdk.String("facere"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        APIID: "tenetur",
        TypeName: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTypeResponse != nil {
        // handle response
    }
}
```
