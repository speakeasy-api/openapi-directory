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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateApiRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateApiRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateApiRequest();
    $request->requestBody = new AssociateApiRequestBody();
    $request->requestBody->apiId = 'error';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'delectus';
    $request->domainName = 'tempora';

    $response = $sdk->sdk->associateApi($request);

    if ($response->associateApiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createApiCache

Creates a cache for the GraphQL API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiCacheRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiCacheRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiCacheRequestBodyApiCachingBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiCacheRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApiCacheRequest();
    $request->requestBody = new CreateApiCacheRequestBody();
    $request->requestBody->apiCachingBehavior = CreateApiCacheRequestBodyApiCachingBehaviorEnum::FULL_REQUEST_CACHING;
    $request->requestBody->atRestEncryptionEnabled = false;
    $request->requestBody->transitEncryptionEnabled = false;
    $request->requestBody->ttl = 477665;
    $request->requestBody->type = CreateApiCacheRequestBodyTypeEnum::LARGE2_X;
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->apiId = 'ab';

    $response = $sdk->sdk->createApiCache($request);

    if ($response->createApiCacheResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createApiKey

Creates a unique key that you can distribute to clients who invoke your API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiKeyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApiKeyRequest();
    $request->requestBody = new CreateApiKeyRequestBody();
    $request->requestBody->description = 'quis';
    $request->requestBody->expires = 87129;
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'odit';
    $request->apiId = 'at';

    $response = $sdk->sdk->createApiKey($request);

    if ($response->createApiKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDataSource

Creates a <code>DataSource</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataSourceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataSourceRequestBodyDynamodbConfig;
use \OpenAPI\OpenAPI\Models\Shared\DeltaSyncConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataSourceRequestBodyElasticsearchConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataSourceRequestBodyEventBridgeConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataSourceRequestBodyHttpConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AwsIamConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataSourceRequestBodyLambdaConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataSourceRequestBodyOpenSearchServiceConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataSourceRequestBodyRelationalDatabaseConfig;
use \OpenAPI\OpenAPI\Models\Shared\RdsHttpEndpointConfig;
use \OpenAPI\OpenAPI\Models\Shared\RelationalDatabaseSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataSourceRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDataSourceRequest();
    $request->requestBody = new CreateDataSourceRequestBody();
    $request->requestBody->description = 'at';
    $request->requestBody->dynamodbConfig = new CreateDataSourceRequestBodyDynamodbConfig();
    $request->requestBody->dynamodbConfig->awsRegion = 'maiores';
    $request->requestBody->dynamodbConfig->deltaSyncConfig = new DeltaSyncConfig();
    $request->requestBody->dynamodbConfig->deltaSyncConfig->baseTableTTL = 473608;
    $request->requestBody->dynamodbConfig->deltaSyncConfig->deltaSyncTableName = 'quod';
    $request->requestBody->dynamodbConfig->deltaSyncConfig->deltaSyncTableTTL = 800911;
    $request->requestBody->dynamodbConfig->tableName = 'esse';
    $request->requestBody->dynamodbConfig->useCallerCredentials = false;
    $request->requestBody->dynamodbConfig->versioned = false;
    $request->requestBody->elasticsearchConfig = new CreateDataSourceRequestBodyElasticsearchConfig();
    $request->requestBody->elasticsearchConfig->awsRegion = 'totam';
    $request->requestBody->elasticsearchConfig->endpoint = 'porro';
    $request->requestBody->eventBridgeConfig = new CreateDataSourceRequestBodyEventBridgeConfig();
    $request->requestBody->eventBridgeConfig->eventBusArn = 'dolorum';
    $request->requestBody->httpConfig = new CreateDataSourceRequestBodyHttpConfig();
    $request->requestBody->httpConfig->authorizationConfig = new AuthorizationConfig();
    $request->requestBody->httpConfig->authorizationConfig->authorizationType = AuthorizationTypeEnum::AWS_IAM;
    $request->requestBody->httpConfig->authorizationConfig->awsIamConfig = new AwsIamConfig();
    $request->requestBody->httpConfig->authorizationConfig->awsIamConfig->signingRegion = 'dicta';
    $request->requestBody->httpConfig->authorizationConfig->awsIamConfig->signingServiceName = 'nam';
    $request->requestBody->httpConfig->endpoint = 'officia';
    $request->requestBody->lambdaConfig = new CreateDataSourceRequestBodyLambdaConfig();
    $request->requestBody->lambdaConfig->lambdaFunctionArn = 'occaecati';
    $request->requestBody->name = 'Cassandra Welch';
    $request->requestBody->openSearchServiceConfig = new CreateDataSourceRequestBodyOpenSearchServiceConfig();
    $request->requestBody->openSearchServiceConfig->awsRegion = 'beatae';
    $request->requestBody->openSearchServiceConfig->endpoint = 'commodi';
    $request->requestBody->relationalDatabaseConfig = new CreateDataSourceRequestBodyRelationalDatabaseConfig();
    $request->requestBody->relationalDatabaseConfig->rdsHttpEndpointConfig = new RdsHttpEndpointConfig();
    $request->requestBody->relationalDatabaseConfig->rdsHttpEndpointConfig->awsRegion = 'molestiae';
    $request->requestBody->relationalDatabaseConfig->rdsHttpEndpointConfig->awsSecretStoreArn = 'modi';
    $request->requestBody->relationalDatabaseConfig->rdsHttpEndpointConfig->databaseName = 'qui';
    $request->requestBody->relationalDatabaseConfig->rdsHttpEndpointConfig->dbClusterIdentifier = 'impedit';
    $request->requestBody->relationalDatabaseConfig->rdsHttpEndpointConfig->schema = 'cum';
    $request->requestBody->relationalDatabaseConfig->relationalDatabaseSourceType = RelationalDatabaseSourceTypeEnum::RDS_HTTP_ENDPOINT;
    $request->requestBody->serviceRoleArn = 'esse';
    $request->requestBody->type = CreateDataSourceRequestBodyTypeEnum::AMAZON_DYNAMODB;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'iste';
    $request->apiId = 'dolor';

    $response = $sdk->sdk->createDataSource($request);

    if ($response->createDataSourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDomainName

Creates a custom <code>DomainName</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomainNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomainNameRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDomainNameRequest();
    $request->requestBody = new CreateDomainNameRequestBody();
    $request->requestBody->certificateArn = 'natus';
    $request->requestBody->description = 'laboriosam';
    $request->requestBody->domainName = 'hic';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->createDomainName($request);

    if ($response->createDomainNameResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFunction

<p>Creates a <code>Function</code> object.</p> <p>A function is a reusable entity. You can use multiple functions to compose the resolver logic.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionRequestBodyRuntime;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionRequestBodySyncConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConflictDetectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConflictHandlerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LambdaConflictHandlerConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFunctionRequest();
    $request->requestBody = new CreateFunctionRequestBody();
    $request->requestBody->code = 'quidem';
    $request->requestBody->dataSourceName = 'architecto';
    $request->requestBody->description = 'ipsa';
    $request->requestBody->functionVersion = 'reiciendis';
    $request->requestBody->maxBatchSize = 666767;
    $request->requestBody->name = 'Cameron Dach';
    $request->requestBody->requestMappingTemplate = 'explicabo';
    $request->requestBody->responseMappingTemplate = 'nobis';
    $request->requestBody->runtime = new CreateFunctionRequestBodyRuntime();
    $request->requestBody->runtime->name = RuntimeNameEnum::APPSYNC_JS;
    $request->requestBody->runtime->runtimeVersion = 'enim';
    $request->requestBody->syncConfig = new CreateFunctionRequestBodySyncConfig();
    $request->requestBody->syncConfig->conflictDetection = ConflictDetectionTypeEnum::NONE;
    $request->requestBody->syncConfig->conflictHandler = ConflictHandlerTypeEnum::LAMBDA;
    $request->requestBody->syncConfig->lambdaConflictHandlerConfig = new LambdaConflictHandlerConfig();
    $request->requestBody->syncConfig->lambdaConflictHandlerConfig->lambdaConflictHandlerArn = 'minima';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'architecto';
    $request->apiId = 'mollitia';

    $response = $sdk->sdk->createFunction($request);

    if ($response->createFunctionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGraphqlApi

Creates a <code>GraphqlApi</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGraphqlApiRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateGraphqlApiRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalAuthenticationProvider;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LambdaAuthorizerConfig;
use \OpenAPI\OpenAPI\Models\Shared\OpenIDConnectConfig;
use \OpenAPI\OpenAPI\Models\Shared\CognitoUserPoolConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateGraphqlApiRequestBodyAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateGraphqlApiRequestBodyLambdaAuthorizerConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateGraphqlApiRequestBodyLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\FieldLogLevelEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateGraphqlApiRequestBodyOpenIDConnectConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateGraphqlApiRequestBodyUserPoolConfig;
use \OpenAPI\OpenAPI\Models\Shared\DefaultActionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGraphqlApiRequest();
    $request->requestBody = new CreateGraphqlApiRequestBody();
    $request->requestBody->additionalAuthenticationProviders = [
        new AdditionalAuthenticationProvider(),
    ];
    $request->requestBody->authenticationType = CreateGraphqlApiRequestBodyAuthenticationTypeEnum::OPENID_CONNECT;
    $request->requestBody->lambdaAuthorizerConfig = new CreateGraphqlApiRequestBodyLambdaAuthorizerConfig();
    $request->requestBody->lambdaAuthorizerConfig->authorizerResultTtlInSeconds = 161309;
    $request->requestBody->lambdaAuthorizerConfig->authorizerUri = 'repellat';
    $request->requestBody->lambdaAuthorizerConfig->identityValidationExpression = 'mollitia';
    $request->requestBody->logConfig = new CreateGraphqlApiRequestBodyLogConfig();
    $request->requestBody->logConfig->cloudWatchLogsRoleArn = 'occaecati';
    $request->requestBody->logConfig->excludeVerboseContent = false;
    $request->requestBody->logConfig->fieldLogLevel = FieldLogLevelEnum::NONE;
    $request->requestBody->name = 'Claudia Krajcik';
    $request->requestBody->openIDConnectConfig = new CreateGraphqlApiRequestBodyOpenIDConnectConfig();
    $request->requestBody->openIDConnectConfig->authTTL = 158969;
    $request->requestBody->openIDConnectConfig->clientId = 'quis';
    $request->requestBody->openIDConnectConfig->iatTTL = 110375;
    $request->requestBody->openIDConnectConfig->issuer = 'laborum';
    $request->requestBody->tags = [
        'enim' => 'odit',
        'quo' => 'sequi',
        'tenetur' => 'ipsam',
    ];
    $request->requestBody->userPoolConfig = new CreateGraphqlApiRequestBodyUserPoolConfig();
    $request->requestBody->userPoolConfig->appIdClientRegex = 'id';
    $request->requestBody->userPoolConfig->awsRegion = 'possimus';
    $request->requestBody->userPoolConfig->defaultAction = DefaultActionEnum::ALLOW;
    $request->requestBody->userPoolConfig->userPoolId = 'quasi';
    $request->requestBody->xrayEnabled = false;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vero';

    $response = $sdk->sdk->createGraphqlApi($request);

    if ($response->createGraphqlApiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createResolver

<p>Creates a <code>Resolver</code> object.</p> <p>A resolver converts incoming requests into a format that a data source can understand, and converts the data source's responses into GraphQL.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateResolverRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateResolverRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateResolverRequestBodyCachingConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateResolverRequestBodyKindEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateResolverRequestBodyPipelineConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateResolverRequestBodyRuntime;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateResolverRequestBodySyncConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConflictDetectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConflictHandlerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LambdaConflictHandlerConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateResolverRequest();
    $request->requestBody = new CreateResolverRequestBody();
    $request->requestBody->cachingConfig = new CreateResolverRequestBodyCachingConfig();
    $request->requestBody->cachingConfig->cachingKeys = [
        'praesentium',
        'voluptatibus',
    ];
    $request->requestBody->cachingConfig->ttl = 55714;
    $request->requestBody->code = 'omnis';
    $request->requestBody->dataSourceName = 'voluptate';
    $request->requestBody->fieldName = 'cum';
    $request->requestBody->kind = CreateResolverRequestBodyKindEnum::UNIT;
    $request->requestBody->maxBatchSize = 39187;
    $request->requestBody->pipelineConfig = new CreateResolverRequestBodyPipelineConfig();
    $request->requestBody->pipelineConfig->functions = [
        'ut',
        'maiores',
    ];
    $request->requestBody->requestMappingTemplate = 'dicta';
    $request->requestBody->responseMappingTemplate = 'corporis';
    $request->requestBody->runtime = new CreateResolverRequestBodyRuntime();
    $request->requestBody->runtime->name = RuntimeNameEnum::APPSYNC_JS;
    $request->requestBody->runtime->runtimeVersion = 'dolore';
    $request->requestBody->syncConfig = new CreateResolverRequestBodySyncConfig();
    $request->requestBody->syncConfig->conflictDetection = ConflictDetectionTypeEnum::VERSION;
    $request->requestBody->syncConfig->conflictHandler = ConflictHandlerTypeEnum::OPTIMISTIC_CONCURRENCY;
    $request->requestBody->syncConfig->lambdaConflictHandlerConfig = new LambdaConflictHandlerConfig();
    $request->requestBody->syncConfig->lambdaConflictHandlerConfig->lambdaConflictHandlerArn = 'harum';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quidem';
    $request->apiId = 'molestias';
    $request->typeName = 'excepturi';

    $response = $sdk->sdk->createResolver($request);

    if ($response->createResolverResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createType

Creates a <code>Type</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTypeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateTypeRequestBodyFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTypeRequest();
    $request->requestBody = new CreateTypeRequestBody();
    $request->requestBody->definition = 'pariatur';
    $request->requestBody->format = CreateTypeRequestBodyFormatEnum::SDL;
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->apiId = 'itaque';

    $response = $sdk->sdk->createType($request);

    if ($response->createTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApiCache

Deletes an <code>ApiCache</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiCacheRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiCacheRequest();
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->apiId = 'distinctio';

    $response = $sdk->sdk->deleteApiCache($request);

    if ($response->deleteApiCacheResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApiKey

Deletes an API key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiKeyRequest();
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'quos';
    $request->apiId = 'perferendis';
    $request->id = '2d502a94-bb4f-463c-969e-9a3efa77dfb1';

    $response = $sdk->sdk->deleteApiKey($request);

    if ($response->deleteApiKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDataSource

Deletes a <code>DataSource</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDataSourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDataSourceRequest();
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->apiId = 'non';
    $request->name = 'Jon Tillman';

    $response = $sdk->sdk->deleteDataSource($request);

    if ($response->deleteDataSourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDomainName

Deletes a custom <code>DomainName</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDomainNameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDomainNameRequest();
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'amet';
    $request->domainName = 'deserunt';

    $response = $sdk->sdk->deleteDomainName($request);

    if ($response->deleteDomainNameResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFunction

Deletes a <code>Function</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFunctionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFunctionRequest();
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'nihil';
    $request->apiId = 'magnam';
    $request->functionId = 'distinctio';

    $response = $sdk->sdk->deleteFunction($request);

    if ($response->deleteFunctionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGraphqlApi

Deletes a <code>GraphqlApi</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGraphqlApiRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGraphqlApiRequest();
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'eum';
    $request->apiId = 'vero';

    $response = $sdk->sdk->deleteGraphqlApi($request);

    if ($response->deleteGraphqlApiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResolver

Deletes a <code>Resolver</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResolverRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResolverRequest();
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'provident';
    $request->apiId = 'quos';
    $request->fieldName = 'sint';
    $request->typeName = 'accusantium';

    $response = $sdk->sdk->deleteResolver($request);

    if ($response->deleteResolverResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteType

Deletes a <code>Type</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTypeRequest();
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->apiId = 'odit';
    $request->typeName = 'nemo';

    $response = $sdk->sdk->deleteType($request);

    if ($response->deleteTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateApi

Removes an <code>ApiAssociation</code> object from a custom domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateApiRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateApiRequest();
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->domainName = 'facilis';

    $response = $sdk->sdk->disassociateApi($request);

    if ($response->disassociateApiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## evaluateCode

Evaluates the given code and returns the response. The code definition requirements depend on the specified runtime. For <code>APPSYNC_JS</code> runtimes, the code defines the request and response functions. The request function takes the incoming request after a GraphQL operation is parsed and converts it into a request configuration for the selected data source operation. The response function interprets responses from the data source and maps it to the shape of the GraphQL field output type. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EvaluateCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\EvaluateCodeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\EvaluateCodeRequestBodyRuntime;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeNameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EvaluateCodeRequest();
    $request->requestBody = new EvaluateCodeRequestBody();
    $request->requestBody->code = 'in';
    $request->requestBody->context = 'architecto';
    $request->requestBody->function = 'architecto';
    $request->requestBody->runtime = new EvaluateCodeRequestBodyRuntime();
    $request->requestBody->runtime->name = RuntimeNameEnum::APPSYNC_JS;
    $request->requestBody->runtime->runtimeVersion = 'repudiandae';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->evaluateCode($request);

    if ($response->evaluateCodeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## evaluateMappingTemplate

<p>Evaluates a given template and returns the response. The mapping template can be a request or response template.</p> <p>Request templates take the incoming request after a GraphQL operation is parsed and convert it into a request configuration for the selected data source operation. Response templates interpret responses from the data source and map it to the shape of the GraphQL field output type.</p> <p>Mapping templates are written in the Apache Velocity Template Language (VTL).</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EvaluateMappingTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\EvaluateMappingTemplateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EvaluateMappingTemplateRequest();
    $request->requestBody = new EvaluateMappingTemplateRequestBody();
    $request->requestBody->context = 'pariatur';
    $request->requestBody->template = 'accusantium';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->sdk->evaluateMappingTemplate($request);

    if ($response->evaluateMappingTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## flushApiCache

Flushes an <code>ApiCache</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FlushApiCacheRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FlushApiCacheRequest();
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->apiId = 'ab';

    $response = $sdk->sdk->flushApiCache($request);

    if ($response->flushApiCacheResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiAssociation

Retrieves an <code>ApiAssociation</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApiAssociationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiAssociationRequest();
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'autem';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'eaque';
    $request->domainName = 'pariatur';

    $response = $sdk->sdk->getApiAssociation($request);

    if ($response->getApiAssociationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiCache

Retrieves an <code>ApiCache</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApiCacheRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiCacheRequest();
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'cumque';
    $request->apiId = 'corporis';

    $response = $sdk->sdk->getApiCache($request);

    if ($response->getApiCacheResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDataSource

Retrieves a <code>DataSource</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDataSourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDataSourceRequest();
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->apiId = 'eaque';
    $request->name = 'Mr. Robin Daugherty';

    $response = $sdk->sdk->getDataSource($request);

    if ($response->getDataSourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomainName

Retrieves a custom <code>DomainName</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainNameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainNameRequest();
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'omnis';
    $request->domainName = 'facilis';

    $response = $sdk->sdk->getDomainName($request);

    if ($response->getDomainNameResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFunction

Get a <code>Function</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFunctionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFunctionRequest();
    $request->xAmzAlgorithm = 'perspiciatis';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'eaque';
    $request->apiId = 'occaecati';
    $request->functionId = 'rerum';

    $response = $sdk->sdk->getFunction($request);

    if ($response->getFunctionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGraphqlApi

Retrieves a <code>GraphqlApi</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGraphqlApiRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGraphqlApiRequest();
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->apiId = 'pariatur';

    $response = $sdk->sdk->getGraphqlApi($request);

    if ($response->getGraphqlApiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIntrospectionSchema

Retrieves the introspection schema for a GraphQL API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIntrospectionSchemaRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetIntrospectionSchemaFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIntrospectionSchemaRequest();
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->apiId = 'dolorem';
    $request->format = GetIntrospectionSchemaFormatEnum::SDL;
    $request->includeDirectives = false;

    $response = $sdk->sdk->getIntrospectionSchema($request);

    if ($response->getIntrospectionSchemaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResolver

Retrieves a <code>Resolver</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResolverRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResolverRequest();
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->apiId = 'dignissimos';
    $request->fieldName = 'reiciendis';
    $request->typeName = 'amet';

    $response = $sdk->sdk->getResolver($request);

    if ($response->getResolverResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchemaCreationStatus

Retrieves the current status of a schema creation operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchemaCreationStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchemaCreationStatusRequest();
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'odio';
    $request->apiId = 'quaerat';

    $response = $sdk->sdk->getSchemaCreationStatus($request);

    if ($response->getSchemaCreationStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getType

Retrieves a <code>Type</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTypeFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTypeRequest();
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'atque';
    $request->apiId = 'sit';
    $request->format = GetTypeFormatEnum::JSON;
    $request->typeName = 'ab';

    $response = $sdk->sdk->getType($request);

    if ($response->getTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApiKeys

<p>Lists the API keys for a given API.</p> <note> <p>API keys are deleted automatically 60 days after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call <code>DeleteApiKey</code> to manually delete a key before it's automatically deleted.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListApiKeysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListApiKeysRequest();
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'omnis';
    $request->apiId = 'necessitatibus';
    $request->maxResults = 714697;
    $request->nextToken = 'asperiores';

    $response = $sdk->sdk->listApiKeys($request);

    if ($response->listApiKeysResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDataSources

Lists the data sources for a given API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDataSourcesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDataSourcesRequest();
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->apiId = 'perferendis';
    $request->maxResults = 229219;
    $request->nextToken = 'optio';

    $response = $sdk->sdk->listDataSources($request);

    if ($response->listDataSourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDomainNames

Lists multiple custom domain names.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDomainNamesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDomainNamesRequest();
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'minima';
    $request->maxResults = 831049;
    $request->nextToken = 'totam';

    $response = $sdk->sdk->listDomainNames($request);

    if ($response->listDomainNamesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFunctions

List multiple functions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFunctionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFunctionsRequest();
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'quod';
    $request->apiId = 'officiis';
    $request->maxResults = 185636;
    $request->nextToken = 'dolorum';

    $response = $sdk->sdk->listFunctions($request);

    if ($response->listFunctionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGraphqlApis

Lists your GraphQL APIs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGraphqlApisRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGraphqlApisRequest();
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->maxResults = 229442;
    $request->nextToken = 'tempore';

    $response = $sdk->sdk->listGraphqlApis($request);

    if ($response->listGraphqlApisResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResolvers

Lists the resolvers for a given API and type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResolversRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResolversRequest();
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'nihil';
    $request->apiId = 'sit';
    $request->maxResults = 711584;
    $request->nextToken = 'neque';
    $request->typeName = 'sed';

    $response = $sdk->sdk->listResolvers($request);

    if ($response->listResolversResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResolversByFunction

List the resolvers that are associated with a specific function.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResolversByFunctionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResolversByFunctionRequest();
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->apiId = 'qui';
    $request->functionId = 'cupiditate';
    $request->maxResults = 807581;
    $request->nextToken = 'pariatur';

    $response = $sdk->sdk->listResolversByFunction($request);

    if ($response->listResolversByFunctionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags for a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'dolores';
    $request->resourceArn = 'distinctio';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTypes

Lists the types for a given API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTypesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTypesRequest();
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'neque';
    $request->apiId = 'fugit';
    $request->format = ListTypesFormatEnum::SDL;
    $request->maxResults = 488056;
    $request->nextToken = 'sunt';

    $response = $sdk->sdk->listTypes($request);

    if ($response->listTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startSchemaCreation

<p>Adds a new schema to your GraphQL API.</p> <p>This operation is asynchronous. Use to determine when it has completed.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartSchemaCreationRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartSchemaCreationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartSchemaCreationRequest();
    $request->requestBody = new StartSchemaCreationRequestBody();
    $request->requestBody->definition = 'ullam';
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'et';
    $request->apiId = 'saepe';

    $response = $sdk->sdk->startSchemaCreation($request);

    if ($response->startSchemaCreationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Tags a resource with user-supplied tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'veritatis' => 'nobis',
    ];
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolore';
    $request->resourceArn = 'labore';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Untags a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'itaque';
    $request->resourceArn = 'consequatur';
    $request->tagKeys = [
        'repellendus',
        'porro',
        'doloribus',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApiCache

Updates the cache for the GraphQL API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApiCacheRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApiCacheRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApiCacheRequestBodyApiCachingBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApiCacheRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApiCacheRequest();
    $request->requestBody = new UpdateApiCacheRequestBody();
    $request->requestBody->apiCachingBehavior = UpdateApiCacheRequestBodyApiCachingBehaviorEnum::FULL_REQUEST_CACHING;
    $request->requestBody->ttl = 703495;
    $request->requestBody->type = UpdateApiCacheRequestBodyTypeEnum::MEDIUM;
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'quisquam';
    $request->apiId = 'vero';

    $response = $sdk->sdk->updateApiCache($request);

    if ($response->updateApiCacheResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApiKey

Updates an API key. You can update the key as long as it's not deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApiKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApiKeyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApiKeyRequest();
    $request->requestBody = new UpdateApiKeyRequestBody();
    $request->requestBody->description = 'omnis';
    $request->requestBody->expires = 338159;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->apiId = 'hic';
    $request->id = 'bc7abd74-dd39-4c0f-9d2c-ff7c70a45626';

    $response = $sdk->sdk->updateApiKey($request);

    if ($response->updateApiKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDataSource

Updates a <code>DataSource</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataSourceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataSourceRequestBodyDynamodbConfig;
use \OpenAPI\OpenAPI\Models\Shared\DeltaSyncConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataSourceRequestBodyElasticsearchConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataSourceRequestBodyEventBridgeConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataSourceRequestBodyHttpConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AwsIamConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataSourceRequestBodyLambdaConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataSourceRequestBodyOpenSearchServiceConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataSourceRequestBodyRelationalDatabaseConfig;
use \OpenAPI\OpenAPI\Models\Shared\RdsHttpEndpointConfig;
use \OpenAPI\OpenAPI\Models\Shared\RelationalDatabaseSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataSourceRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDataSourceRequest();
    $request->requestBody = new UpdateDataSourceRequestBody();
    $request->requestBody->description = 'possimus';
    $request->requestBody->dynamodbConfig = new UpdateDataSourceRequestBodyDynamodbConfig();
    $request->requestBody->dynamodbConfig->awsRegion = 'magnam';
    $request->requestBody->dynamodbConfig->deltaSyncConfig = new DeltaSyncConfig();
    $request->requestBody->dynamodbConfig->deltaSyncConfig->baseTableTTL = 189848;
    $request->requestBody->dynamodbConfig->deltaSyncConfig->deltaSyncTableName = 'ex';
    $request->requestBody->dynamodbConfig->deltaSyncConfig->deltaSyncTableTTL = 511319;
    $request->requestBody->dynamodbConfig->tableName = 'dicta';
    $request->requestBody->dynamodbConfig->useCallerCredentials = false;
    $request->requestBody->dynamodbConfig->versioned = false;
    $request->requestBody->elasticsearchConfig = new UpdateDataSourceRequestBodyElasticsearchConfig();
    $request->requestBody->elasticsearchConfig->awsRegion = 'dolor';
    $request->requestBody->elasticsearchConfig->endpoint = 'maiores';
    $request->requestBody->eventBridgeConfig = new UpdateDataSourceRequestBodyEventBridgeConfig();
    $request->requestBody->eventBridgeConfig->eventBusArn = 'quasi';
    $request->requestBody->httpConfig = new UpdateDataSourceRequestBodyHttpConfig();
    $request->requestBody->httpConfig->authorizationConfig = new AuthorizationConfig();
    $request->requestBody->httpConfig->authorizationConfig->authorizationType = AuthorizationTypeEnum::AWS_IAM;
    $request->requestBody->httpConfig->authorizationConfig->awsIamConfig = new AwsIamConfig();
    $request->requestBody->httpConfig->authorizationConfig->awsIamConfig->signingRegion = 'ex';
    $request->requestBody->httpConfig->authorizationConfig->awsIamConfig->signingServiceName = 'nulla';
    $request->requestBody->httpConfig->endpoint = 'excepturi';
    $request->requestBody->lambdaConfig = new UpdateDataSourceRequestBodyLambdaConfig();
    $request->requestBody->lambdaConfig->lambdaFunctionArn = 'voluptatibus';
    $request->requestBody->openSearchServiceConfig = new UpdateDataSourceRequestBodyOpenSearchServiceConfig();
    $request->requestBody->openSearchServiceConfig->awsRegion = 'nostrum';
    $request->requestBody->openSearchServiceConfig->endpoint = 'sapiente';
    $request->requestBody->relationalDatabaseConfig = new UpdateDataSourceRequestBodyRelationalDatabaseConfig();
    $request->requestBody->relationalDatabaseConfig->rdsHttpEndpointConfig = new RdsHttpEndpointConfig();
    $request->requestBody->relationalDatabaseConfig->rdsHttpEndpointConfig->awsRegion = 'quisquam';
    $request->requestBody->relationalDatabaseConfig->rdsHttpEndpointConfig->awsSecretStoreArn = 'saepe';
    $request->requestBody->relationalDatabaseConfig->rdsHttpEndpointConfig->databaseName = 'ea';
    $request->requestBody->relationalDatabaseConfig->rdsHttpEndpointConfig->dbClusterIdentifier = 'impedit';
    $request->requestBody->relationalDatabaseConfig->rdsHttpEndpointConfig->schema = 'corporis';
    $request->requestBody->relationalDatabaseConfig->relationalDatabaseSourceType = RelationalDatabaseSourceTypeEnum::RDS_HTTP_ENDPOINT;
    $request->requestBody->serviceRoleArn = 'veniam';
    $request->requestBody->type = UpdateDataSourceRequestBodyTypeEnum::NONE;
    $request->xAmzAlgorithm = 'inventore';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->apiId = 'minima';
    $request->name = 'Mr. Elsa Reinger';

    $response = $sdk->sdk->updateDataSource($request);

    if ($response->updateDataSourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDomainName

Updates a custom <code>DomainName</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainNameRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDomainNameRequest();
    $request->requestBody = new UpdateDomainNameRequestBody();
    $request->requestBody->description = 'impedit';
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->domainName = 'laborum';

    $response = $sdk->sdk->updateDomainName($request);

    if ($response->updateDomainNameResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFunction

Updates a <code>Function</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionRequestBodyRuntime;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionRequestBodySyncConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConflictDetectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConflictHandlerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LambdaConflictHandlerConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFunctionRequest();
    $request->requestBody = new UpdateFunctionRequestBody();
    $request->requestBody->code = 'placeat';
    $request->requestBody->dataSourceName = 'velit';
    $request->requestBody->description = 'eum';
    $request->requestBody->functionVersion = 'autem';
    $request->requestBody->maxBatchSize = 752135;
    $request->requestBody->name = 'Mack Stoltenberg';
    $request->requestBody->requestMappingTemplate = 'quasi';
    $request->requestBody->responseMappingTemplate = 'tempora';
    $request->requestBody->runtime = new UpdateFunctionRequestBodyRuntime();
    $request->requestBody->runtime->name = RuntimeNameEnum::APPSYNC_JS;
    $request->requestBody->runtime->runtimeVersion = 'numquam';
    $request->requestBody->syncConfig = new UpdateFunctionRequestBodySyncConfig();
    $request->requestBody->syncConfig->conflictDetection = ConflictDetectionTypeEnum::VERSION;
    $request->requestBody->syncConfig->conflictHandler = ConflictHandlerTypeEnum::AUTOMERGE;
    $request->requestBody->syncConfig->lambdaConflictHandlerConfig = new LambdaConflictHandlerConfig();
    $request->requestBody->syncConfig->lambdaConflictHandlerConfig->lambdaConflictHandlerArn = 'ipsa';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'rem';
    $request->apiId = 'fuga';
    $request->functionId = 'reprehenderit';

    $response = $sdk->sdk->updateFunction($request);

    if ($response->updateFunctionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGraphqlApi

Updates a <code>GraphqlApi</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGraphqlApiRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGraphqlApiRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalAuthenticationProvider;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LambdaAuthorizerConfig;
use \OpenAPI\OpenAPI\Models\Shared\OpenIDConnectConfig;
use \OpenAPI\OpenAPI\Models\Shared\CognitoUserPoolConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGraphqlApiRequestBodyAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGraphqlApiRequestBodyLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\FieldLogLevelEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGraphqlApiRequestBodyOpenIDConnectConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGraphqlApiRequestBodyUserPoolConfig;
use \OpenAPI\OpenAPI\Models\Shared\DefaultActionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGraphqlApiRequest();
    $request->requestBody = new UpdateGraphqlApiRequestBody();
    $request->requestBody->additionalAuthenticationProviders = [
        new AdditionalAuthenticationProvider(),
        new AdditionalAuthenticationProvider(),
        new AdditionalAuthenticationProvider(),
    ];
    $request->requestBody->authenticationType = UpdateGraphqlApiRequestBodyAuthenticationTypeEnum::AWS_LAMBDA;
    $request->requestBody->lambdaAuthorizerConfig = new UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig();
    $request->requestBody->lambdaAuthorizerConfig->authorizerResultTtlInSeconds = 283519;
    $request->requestBody->lambdaAuthorizerConfig->authorizerUri = 'eum';
    $request->requestBody->lambdaAuthorizerConfig->identityValidationExpression = 'suscipit';
    $request->requestBody->logConfig = new UpdateGraphqlApiRequestBodyLogConfig();
    $request->requestBody->logConfig->cloudWatchLogsRoleArn = 'assumenda';
    $request->requestBody->logConfig->excludeVerboseContent = false;
    $request->requestBody->logConfig->fieldLogLevel = FieldLogLevelEnum::NONE;
    $request->requestBody->name = 'Miss Devin Bogan';
    $request->requestBody->openIDConnectConfig = new UpdateGraphqlApiRequestBodyOpenIDConnectConfig();
    $request->requestBody->openIDConnectConfig->authTTL = 206594;
    $request->requestBody->openIDConnectConfig->clientId = 'quo';
    $request->requestBody->openIDConnectConfig->iatTTL = 847276;
    $request->requestBody->openIDConnectConfig->issuer = 'quo';
    $request->requestBody->userPoolConfig = new UpdateGraphqlApiRequestBodyUserPoolConfig();
    $request->requestBody->userPoolConfig->appIdClientRegex = 'fuga';
    $request->requestBody->userPoolConfig->awsRegion = 'eius';
    $request->requestBody->userPoolConfig->defaultAction = DefaultActionEnum::ALLOW;
    $request->requestBody->userPoolConfig->userPoolId = 'voluptas';
    $request->requestBody->xrayEnabled = false;
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->apiId = 'sequi';

    $response = $sdk->sdk->updateGraphqlApi($request);

    if ($response->updateGraphqlApiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateResolver

Updates a <code>Resolver</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResolverRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResolverRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResolverRequestBodyCachingConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResolverRequestBodyKindEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResolverRequestBodyPipelineConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResolverRequestBodyRuntime;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResolverRequestBodySyncConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConflictDetectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConflictHandlerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LambdaConflictHandlerConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateResolverRequest();
    $request->requestBody = new UpdateResolverRequestBody();
    $request->requestBody->cachingConfig = new UpdateResolverRequestBodyCachingConfig();
    $request->requestBody->cachingConfig->cachingKeys = [
        'esse',
        'recusandae',
        'aperiam',
        'distinctio',
    ];
    $request->requestBody->cachingConfig->ttl = 799796;
    $request->requestBody->code = 'dignissimos';
    $request->requestBody->dataSourceName = 'inventore';
    $request->requestBody->kind = UpdateResolverRequestBodyKindEnum::UNIT;
    $request->requestBody->maxBatchSize = 518835;
    $request->requestBody->pipelineConfig = new UpdateResolverRequestBodyPipelineConfig();
    $request->requestBody->pipelineConfig->functions = [
        'aliquam',
        'odio',
        'occaecati',
        'commodi',
    ];
    $request->requestBody->requestMappingTemplate = 'sapiente';
    $request->requestBody->responseMappingTemplate = 'dolores';
    $request->requestBody->runtime = new UpdateResolverRequestBodyRuntime();
    $request->requestBody->runtime->name = RuntimeNameEnum::APPSYNC_JS;
    $request->requestBody->runtime->runtimeVersion = 'deserunt';
    $request->requestBody->syncConfig = new UpdateResolverRequestBodySyncConfig();
    $request->requestBody->syncConfig->conflictDetection = ConflictDetectionTypeEnum::VERSION;
    $request->requestBody->syncConfig->conflictHandler = ConflictHandlerTypeEnum::OPTIMISTIC_CONCURRENCY;
    $request->requestBody->syncConfig->lambdaConflictHandlerConfig = new LambdaConflictHandlerConfig();
    $request->requestBody->syncConfig->lambdaConflictHandlerConfig->lambdaConflictHandlerArn = 'porro';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'fuga';
    $request->apiId = 'mollitia';
    $request->fieldName = 'incidunt';
    $request->typeName = 'atque';

    $response = $sdk->sdk->updateResolver($request);

    if ($response->updateResolverResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateType

Updates a <code>Type</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTypeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTypeRequestBodyFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTypeRequest();
    $request->requestBody = new UpdateTypeRequestBody();
    $request->requestBody->definition = 'explicabo';
    $request->requestBody->format = UpdateTypeRequestBodyFormatEnum::SDL;
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'ratione';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'saepe';
    $request->apiId = 'occaecati';
    $request->typeName = 'atque';

    $response = $sdk->sdk->updateType($request);

    if ($response->updateTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
