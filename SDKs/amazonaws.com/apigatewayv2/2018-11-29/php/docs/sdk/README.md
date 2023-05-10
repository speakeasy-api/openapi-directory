# SDK

## Overview

Amazon API Gateway V2

Amazon Web Services documentation
<https://docs.aws.amazon.com/apigateway/>
### Available Operations

* [createApi](#createapi) - Creates an Api resource.
* [createApiMapping](#createapimapping) - Creates an API mapping.
* [createAuthorizer](#createauthorizer) - Creates an Authorizer for an API.
* [createDeployment](#createdeployment) - Creates a Deployment for an API.
* [createDomainName](#createdomainname) - Creates a domain name.
* [createIntegration](#createintegration) - Creates an Integration.
* [createIntegrationResponse](#createintegrationresponse) - Creates an IntegrationResponses.
* [createModel](#createmodel) - Creates a Model for an API.
* [createRoute](#createroute) - Creates a Route for an API.
* [createRouteResponse](#createrouteresponse) - Creates a RouteResponse for a Route.
* [createStage](#createstage) - Creates a Stage for an API.
* [createVpcLink](#createvpclink) - Creates a VPC link.
* [deleteAccessLogSettings](#deleteaccesslogsettings) - Deletes the AccessLogSettings for a Stage. To disable access logging for a Stage, delete its AccessLogSettings.
* [deleteApi](#deleteapi) - Deletes an Api resource.
* [deleteApiMapping](#deleteapimapping) - Deletes an API mapping.
* [deleteAuthorizer](#deleteauthorizer) - Deletes an Authorizer.
* [deleteCorsConfiguration](#deletecorsconfiguration) - Deletes a CORS configuration.
* [deleteDeployment](#deletedeployment) - Deletes a Deployment.
* [deleteDomainName](#deletedomainname) - Deletes a domain name.
* [deleteIntegration](#deleteintegration) - Deletes an Integration.
* [deleteIntegrationResponse](#deleteintegrationresponse) - Deletes an IntegrationResponses.
* [deleteModel](#deletemodel) - Deletes a Model.
* [deleteRoute](#deleteroute) - Deletes a Route.
* [deleteRouteRequestParameter](#deleterouterequestparameter) - Deletes a route request parameter.
* [deleteRouteResponse](#deleterouteresponse) - Deletes a RouteResponse.
* [deleteRouteSettings](#deleteroutesettings) - Deletes the RouteSettings for a stage.
* [deleteStage](#deletestage) - Deletes a Stage.
* [deleteVpcLink](#deletevpclink) - Deletes a VPC link.
* [exportApi](#exportapi)
* [getApi](#getapi) - Gets an Api resource.
* [getApiMapping](#getapimapping) - Gets an API mapping.
* [getApiMappings](#getapimappings) - Gets API mappings.
* [getApis](#getapis) - Gets a collection of Api resources.
* [getAuthorizer](#getauthorizer) - Gets an Authorizer.
* [getAuthorizers](#getauthorizers) - Gets the Authorizers for an API.
* [getDeployment](#getdeployment) - Gets a Deployment.
* [getDeployments](#getdeployments) - Gets the Deployments for an API.
* [getDomainName](#getdomainname) - Gets a domain name.
* [getDomainNames](#getdomainnames) - Gets the domain names for an AWS account.
* [getIntegration](#getintegration) - Gets an Integration.
* [getIntegrationResponse](#getintegrationresponse) - Gets an IntegrationResponses.
* [getIntegrationResponses](#getintegrationresponses) - Gets the IntegrationResponses for an Integration.
* [getIntegrations](#getintegrations) - Gets the Integrations for an API.
* [getModel](#getmodel) - Gets a Model.
* [getModelTemplate](#getmodeltemplate) - Gets a model template.
* [getModels](#getmodels) - Gets the Models for an API.
* [getRoute](#getroute) - Gets a Route.
* [getRouteResponse](#getrouteresponse) - Gets a RouteResponse.
* [getRouteResponses](#getrouteresponses) - Gets the RouteResponses for a Route.
* [getRoutes](#getroutes) - Gets the Routes for an API.
* [getStage](#getstage) - Gets a Stage.
* [getStages](#getstages) - Gets the Stages for an API.
* [getTags](#gettags) - Gets a collection of Tag resources.
* [getVpcLink](#getvpclink) - Gets a VPC link.
* [getVpcLinks](#getvpclinks) - Gets a collection of VPC links.
* [importApi](#importapi) - Imports an API.
* [reimportApi](#reimportapi) - Puts an Api resource.
* [resetAuthorizersCache](#resetauthorizerscache) - Resets all authorizer cache entries on a stage. Supported only for HTTP APIs.
* [tagResource](#tagresource) - Creates a new Tag resource to represent a tag.
* [untagResource](#untagresource) - Deletes a Tag.
* [updateApi](#updateapi) - Updates an Api resource.
* [updateApiMapping](#updateapimapping) - The API mapping.
* [updateAuthorizer](#updateauthorizer) - Updates an Authorizer.
* [updateDeployment](#updatedeployment) - Updates a Deployment.
* [updateDomainName](#updatedomainname) - Updates a domain name.
* [updateIntegration](#updateintegration) - Updates an Integration.
* [updateIntegrationResponse](#updateintegrationresponse) - Updates an IntegrationResponses.
* [updateModel](#updatemodel) - Updates a Model.
* [updateRoute](#updateroute) - Updates a Route.
* [updateRouteResponse](#updaterouteresponse) - Updates a RouteResponse.
* [updateStage](#updatestage) - Updates a Stage.
* [updateVpcLink](#updatevpclink) - Updates a VPC link.

## createApi

Creates an Api resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiRequestBodyCorsConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiRequestBodyProtocolTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApiRequest();
    $request->requestBody = new CreateApiRequestBody();
    $request->requestBody->apiKeySelectionExpression = 'quod';
    $request->requestBody->corsConfiguration = new CreateApiRequestBodyCorsConfiguration();
    $request->requestBody->corsConfiguration->allowCredentials = false;
    $request->requestBody->corsConfiguration->allowHeaders = [
        'esse',
        'totam',
        'porro',
        'dolorum',
    ];
    $request->requestBody->corsConfiguration->allowMethods = [
        'nam',
    ];
    $request->requestBody->corsConfiguration->allowOrigins = [
        'occaecati',
        'fugit',
        'deleniti',
    ];
    $request->requestBody->corsConfiguration->exposeHeaders = [
        'optio',
        'totam',
        'beatae',
        'commodi',
    ];
    $request->requestBody->corsConfiguration->maxAge = 473600;
    $request->requestBody->credentialsArn = 'modi';
    $request->requestBody->description = 'qui';
    $request->requestBody->disableExecuteApiEndpoint = false;
    $request->requestBody->disableSchemaValidation = false;
    $request->requestBody->name = 'Jonathon Klocko';
    $request->requestBody->protocolType = CreateApiRequestBodyProtocolTypeEnum::WEBSOCKET;
    $request->requestBody->routeKey = 'perferendis';
    $request->requestBody->routeSelectionExpression = 'ad';
    $request->requestBody->tags = [
        'sed' => 'iste',
        'dolor' => 'natus',
        'laboriosam' => 'hic',
    ];
    $request->requestBody->target = 'saepe';
    $request->requestBody->version = 'fuga';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->createApi($request);

    if ($response->createApiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createApiMapping

Creates an API mapping.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiMappingRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApiMappingRequest();
    $request->requestBody = new CreateApiMappingRequestBody();
    $request->requestBody->apiId = 'ipsa';
    $request->requestBody->apiMappingKey = 'reiciendis';
    $request->requestBody->stage = 'est';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'nobis';
    $request->domainName = 'enim';

    $response = $sdk->sdk->createApiMapping($request);

    if ($response->createApiMappingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAuthorizer

Creates an Authorizer for an API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAuthorizerRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAuthorizerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateAuthorizerRequestBodyAuthorizerTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateAuthorizerRequestBodyJwtConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAuthorizerRequest();
    $request->requestBody = new CreateAuthorizerRequestBody();
    $request->requestBody->authorizerCredentialsArn = 'omnis';
    $request->requestBody->authorizerPayloadFormatVersion = 'nemo';
    $request->requestBody->authorizerResultTtlInSeconds = 325047;
    $request->requestBody->authorizerType = CreateAuthorizerRequestBodyAuthorizerTypeEnum::JWT;
    $request->requestBody->authorizerUri = 'accusantium';
    $request->requestBody->enableSimpleResponses = false;
    $request->requestBody->identitySource = [
        'culpa',
        'doloribus',
    ];
    $request->requestBody->identityValidationExpression = 'sapiente';
    $request->requestBody->jwtConfiguration = new CreateAuthorizerRequestBodyJwtConfiguration();
    $request->requestBody->jwtConfiguration->audience = [
        'mollitia',
    ];
    $request->requestBody->jwtConfiguration->issuer = 'dolorem';
    $request->requestBody->name = 'Carlos Ziemann';
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'quia';
    $request->apiId = 'quis';

    $response = $sdk->sdk->createAuthorizer($request);

    if ($response->createAuthorizerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeployment

Creates a Deployment for an API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeploymentRequest();
    $request->requestBody = new CreateDeploymentRequestBody();
    $request->requestBody->description = 'vitae';
    $request->requestBody->stageName = 'laborum';
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->apiId = 'id';

    $response = $sdk->sdk->createDeployment($request);

    if ($response->createDeploymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDomainName

Creates a domain name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomainNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomainNameRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\DomainNameConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DomainNameConfigurationDomainNameStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\DomainNameConfigurationEndpointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DomainNameConfigurationSecurityPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomainNameRequestBodyMutualTlsAuthentication;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDomainNameRequest();
    $request->requestBody = new CreateDomainNameRequestBody();
    $request->requestBody->domainName = 'possimus';
    $request->requestBody->domainNameConfigurations = [
        new DomainNameConfiguration(),
    ];
    $request->requestBody->mutualTlsAuthentication = new CreateDomainNameRequestBodyMutualTlsAuthentication();
    $request->requestBody->mutualTlsAuthentication->truststoreUri = 'quasi';
    $request->requestBody->mutualTlsAuthentication->truststoreVersion = 'error';
    $request->requestBody->tags = [
        'laborum' => 'quasi',
        'reiciendis' => 'voluptatibus',
        'vero' => 'nihil',
        'praesentium' => 'voluptatibus',
    ];
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'reprehenderit';

    $response = $sdk->sdk->createDomainName($request);

    if ($response->createDomainNameResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createIntegration

Creates an Integration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateIntegrationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateIntegrationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateIntegrationRequestBodyConnectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIntegrationRequestBodyContentHandlingStrategyEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIntegrationRequestBodyIntegrationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIntegrationRequestBodyPassthroughBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIntegrationRequestBodyTlsConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateIntegrationRequest();
    $request->requestBody = new CreateIntegrationRequestBody();
    $request->requestBody->connectionId = 'ut';
    $request->requestBody->connectionType = CreateIntegrationRequestBodyConnectionTypeEnum::VPC_LINK;
    $request->requestBody->contentHandlingStrategy = CreateIntegrationRequestBodyContentHandlingStrategyEnum::CONVERT_TO_BINARY;
    $request->requestBody->credentialsArn = 'corporis';
    $request->requestBody->description = 'dolore';
    $request->requestBody->integrationMethod = 'iusto';
    $request->requestBody->integrationSubtype = 'dicta';
    $request->requestBody->integrationType = CreateIntegrationRequestBodyIntegrationTypeEnum::HTTP_PROXY;
    $request->requestBody->integrationUri = 'enim';
    $request->requestBody->passthroughBehavior = CreateIntegrationRequestBodyPassthroughBehaviorEnum::WHEN_NO_TEMPLATES;
    $request->requestBody->payloadFormatVersion = 'commodi';
    $request->requestBody->requestParameters = [
        'quae' => 'ipsum',
        'quidem' => 'molestias',
        'excepturi' => 'pariatur',
        'modi' => 'praesentium',
    ];
    $request->requestBody->requestTemplates = [
        'voluptates' => 'quasi',
        'repudiandae' => 'sint',
        'veritatis' => 'itaque',
    ];
    $request->requestBody->responseParameters = [
        'enim' => [
            'est' => 'quibusdam',
        ],
        'explicabo' => [
            'distinctio' => 'quibusdam',
            'labore' => 'modi',
            'qui' => 'aliquid',
        ],
    ];
    $request->requestBody->templateSelectionExpression = 'cupiditate';
    $request->requestBody->timeoutInMillis = 552822;
    $request->requestBody->tlsConfig = new CreateIntegrationRequestBodyTlsConfig();
    $request->requestBody->tlsConfig->serverNameToVerify = 'perferendis';
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->apiId = 'tempora';

    $response = $sdk->sdk->createIntegration($request);

    if ($response->createIntegrationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createIntegrationResponse

Creates an IntegrationResponses.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateIntegrationResponseRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateIntegrationResponseRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateIntegrationResponseRequestBodyContentHandlingStrategyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateIntegrationResponseRequest();
    $request->requestBody = new CreateIntegrationResponseRequestBody();
    $request->requestBody->contentHandlingStrategy = CreateIntegrationResponseRequestBodyContentHandlingStrategyEnum::CONVERT_TO_TEXT;
    $request->requestBody->integrationResponseKey = 'tempore';
    $request->requestBody->responseParameters = [
        'delectus' => 'eum',
        'non' => 'eligendi',
    ];
    $request->requestBody->responseTemplates = [
        'aliquid' => 'provident',
        'necessitatibus' => 'sint',
        'officia' => 'dolor',
    ];
    $request->requestBody->templateSelectionExpression = 'debitis';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'rerum';
    $request->apiId = 'dicta';
    $request->integrationId = 'magnam';

    $response = $sdk->sdk->createIntegrationResponse($request);

    if ($response->createIntegrationResponseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createModel

Creates a Model for an API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateModelRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateModelRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateModelRequest();
    $request->requestBody = new CreateModelRequestBody();
    $request->requestBody->contentType = 'cumque';
    $request->requestBody->description = 'facere';
    $request->requestBody->name = 'Beth Padberg';
    $request->requestBody->schema = 'occaecati';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'id';
    $request->apiId = 'blanditiis';

    $response = $sdk->sdk->createModel($request);

    if ($response->createModelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRoute

Creates a Route for an API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRouteRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateRouteRequestBodyAuthorizationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParameterConstraints;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRouteRequest();
    $request->requestBody = new CreateRouteRequestBody();
    $request->requestBody->apiKeyRequired = false;
    $request->requestBody->authorizationScopes = [
        'sapiente',
        'amet',
        'deserunt',
    ];
    $request->requestBody->authorizationType = CreateRouteRequestBodyAuthorizationTypeEnum::AWS_IAM;
    $request->requestBody->authorizerId = 'vel';
    $request->requestBody->modelSelectionExpression = 'natus';
    $request->requestBody->operationName = 'omnis';
    $request->requestBody->requestModels = [
        'perferendis' => 'nihil',
        'magnam' => 'distinctio',
    ];
    $request->requestBody->requestParameters = [
        'labore' => new ParameterConstraints(),
        'labore' => new ParameterConstraints(),
        'suscipit' => new ParameterConstraints(),
    ];
    $request->requestBody->routeKey = 'natus';
    $request->requestBody->routeResponseSelectionExpression = 'nobis';
    $request->requestBody->target = 'eum';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'ullam';
    $request->apiId = 'provident';

    $response = $sdk->sdk->createRoute($request);

    if ($response->createRouteResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRouteResponse

Creates a RouteResponse for a Route.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRouteResponseRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRouteResponseRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ParameterConstraints;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRouteResponseRequest();
    $request->requestBody = new CreateRouteResponseRequestBody();
    $request->requestBody->modelSelectionExpression = 'quos';
    $request->requestBody->responseModels = [
        'accusantium' => 'mollitia',
        'reiciendis' => 'mollitia',
        'ad' => 'eum',
    ];
    $request->requestBody->responseParameters = [
        'necessitatibus' => new ParameterConstraints(),
    ];
    $request->requestBody->routeResponseKey = 'odit';
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'maxime';
    $request->apiId = 'deleniti';
    $request->routeId = 'facilis';

    $response = $sdk->sdk->createRouteResponse($request);

    if ($response->createRouteResponseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createStage

Creates a Stage for an API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateStageRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateStageRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateStageRequestBodyAccessLogSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateStageRequestBodyDefaultRouteSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateStageRequestBodyDefaultRouteSettingsLoggingLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouteSettings;
use \OpenAPI\OpenAPI\Models\Shared\RouteSettingsLoggingLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStageRequest();
    $request->requestBody = new CreateStageRequestBody();
    $request->requestBody->accessLogSettings = new CreateStageRequestBodyAccessLogSettings();
    $request->requestBody->accessLogSettings->destinationArn = 'in';
    $request->requestBody->accessLogSettings->format = 'architecto';
    $request->requestBody->autoDeploy = false;
    $request->requestBody->clientCertificateId = 'architecto';
    $request->requestBody->defaultRouteSettings = new CreateStageRequestBodyDefaultRouteSettings();
    $request->requestBody->defaultRouteSettings->dataTraceEnabled = false;
    $request->requestBody->defaultRouteSettings->detailedMetricsEnabled = false;
    $request->requestBody->defaultRouteSettings->loggingLevel = CreateStageRequestBodyDefaultRouteSettingsLoggingLevelEnum::OFF;
    $request->requestBody->defaultRouteSettings->throttlingBurstLimit = 352312;
    $request->requestBody->defaultRouteSettings->throttlingRateLimit = 7142.42;
    $request->requestBody->deploymentId = 'nihil';
    $request->requestBody->description = 'repellat';
    $request->requestBody->routeSettings = [
        'sed' => new RouteSettings(),
        'saepe' => new RouteSettings(),
        'pariatur' => new RouteSettings(),
        'accusantium' => new RouteSettings(),
    ];
    $request->requestBody->stageName = 'consequuntur';
    $request->requestBody->stageVariables = [
        'natus' => 'magni',
        'sunt' => 'quo',
        'illum' => 'pariatur',
    ];
    $request->requestBody->tags = [
        'ea' => 'excepturi',
        'odit' => 'ea',
        'accusantium' => 'ab',
        'maiores' => 'quidem',
    ];
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'nemo';
    $request->apiId = 'voluptatibus';

    $response = $sdk->sdk->createStage($request);

    if ($response->createStageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVpcLink

Creates a VPC link.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateVpcLinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateVpcLinkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVpcLinkRequest();
    $request->requestBody = new CreateVpcLinkRequestBody();
    $request->requestBody->name = 'Miss Ginger Feeney';
    $request->requestBody->securityGroupIds = [
        'libero',
        'nobis',
        'dolores',
        'quis',
    ];
    $request->requestBody->subnetIds = [
        'dignissimos',
        'eaque',
        'quis',
    ];
    $request->requestBody->tags = [
        'eos' => 'perferendis',
    ];
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->createVpcLink($request);

    if ($response->createVpcLinkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAccessLogSettings

Deletes the AccessLogSettings for a Stage. To disable access logging for a Stage, delete its AccessLogSettings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccessLogSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAccessLogSettingsRequest();
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->apiId = 'blanditiis';
    $request->stageName = 'error';

    $response = $sdk->sdk->deleteAccessLogSettings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApi

Deletes an Api resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiRequest();
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'modi';
    $request->apiId = 'iste';

    $response = $sdk->sdk->deleteApi($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApiMapping

Deletes an API mapping.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiMappingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiMappingRequest();
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'delectus';
    $request->apiMappingId = 'quaerat';
    $request->domainName = 'quos';

    $response = $sdk->sdk->deleteApiMapping($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAuthorizer

Deletes an Authorizer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAuthorizerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAuthorizerRequest();
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'hic';
    $request->apiId = 'excepturi';
    $request->authorizerId = 'cum';

    $response = $sdk->sdk->deleteAuthorizer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCorsConfiguration

Deletes a CORS configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCorsConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCorsConfigurationRequest();
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->apiId = 'ipsa';

    $response = $sdk->sdk->deleteCorsConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDeployment

Deletes a Deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeploymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDeploymentRequest();
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->apiId = 'voluptas';
    $request->deploymentId = 'natus';

    $response = $sdk->sdk->deleteDeployment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDomainName

Deletes a domain name.

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
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->domainName = 'iusto';

    $response = $sdk->sdk->deleteDomainName($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteIntegration

Deletes an Integration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIntegrationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIntegrationRequest();
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->apiId = 'nihil';
    $request->integrationId = 'ipsum';

    $response = $sdk->sdk->deleteIntegration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteIntegrationResponse

Deletes an IntegrationResponses.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIntegrationResponseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIntegrationResponseRequest();
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'amet';
    $request->apiId = 'optio';
    $request->integrationId = 'accusamus';
    $request->integrationResponseId = 'ad';

    $response = $sdk->sdk->deleteIntegrationResponse($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteModel

Deletes a Model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteModelRequest();
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'totam';
    $request->apiId = 'similique';
    $request->modelId = 'alias';

    $response = $sdk->sdk->deleteModel($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRoute

Deletes a Route.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRouteRequest();
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'qui';
    $request->apiId = 'dolorum';
    $request->routeId = 'a';

    $response = $sdk->sdk->deleteRoute($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRouteRequestParameter

Deletes a route request parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRouteRequestParameterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRouteRequestParameterRequest();
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'amet';
    $request->apiId = 'tempore';
    $request->requestParameterKey = 'accusamus';
    $request->routeId = 'numquam';

    $response = $sdk->sdk->deleteRouteRequestParameter($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRouteResponse

Deletes a RouteResponse.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRouteResponseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRouteResponseRequest();
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'expedita';
    $request->apiId = 'neque';
    $request->routeId = 'sed';
    $request->routeResponseId = 'vel';

    $response = $sdk->sdk->deleteRouteResponse($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRouteSettings

Deletes the RouteSettings for a stage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRouteSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRouteSettingsRequest();
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'qui';
    $request->apiId = 'cupiditate';
    $request->routeKey = 'maxime';
    $request->stageName = 'pariatur';

    $response = $sdk->sdk->deleteRouteSettings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteStage

Deletes a Stage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStageRequest();
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'dolores';
    $request->apiId = 'distinctio';
    $request->stageName = 'facilis';

    $response = $sdk->sdk->deleteStage($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVpcLink

Deletes a VPC link.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVpcLinkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVpcLinkRequest();
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'molestias';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'fugit';
    $request->vpcLinkId = 'magni';

    $response = $sdk->sdk->deleteVpcLink($request);

    if ($response->deleteVpcLinkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportApi

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportApiRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportApiRequest();
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'cumque';
    $request->apiId = 'soluta';
    $request->exportVersion = 'nobis';
    $request->includeExtensions = false;
    $request->outputType = 'et';
    $request->specification = 'saepe';
    $request->stageName = 'ipsum';

    $response = $sdk->sdk->exportApi($request);

    if ($response->exportApiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApi

Gets an Api resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApiRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiRequest();
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'delectus';
    $request->apiId = 'dolorem';

    $response = $sdk->sdk->getApi($request);

    if ($response->getApiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiMapping

Gets an API mapping.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApiMappingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiMappingRequest();
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'aut';
    $request->apiMappingId = 'quas';
    $request->domainName = 'itaque';

    $response = $sdk->sdk->getApiMapping($request);

    if ($response->getApiMappingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiMappings

Gets API mappings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApiMappingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiMappingsRequest();
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'facilis';
    $request->domainName = 'cupiditate';
    $request->maxResults = 'qui';
    $request->nextToken = 'quae';

    $response = $sdk->sdk->getApiMappings($request);

    if ($response->getApiMappingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApis

Gets a collection of Api resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApisRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApisRequest();
    $request->xAmzAlgorithm = 'laudantium';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'omnis';
    $request->maxResults = 'quis';
    $request->nextToken = 'ipsum';

    $response = $sdk->sdk->getApis($request);

    if ($response->getApisResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAuthorizer

Gets an Authorizer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAuthorizerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAuthorizerRequest();
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'hic';
    $request->apiId = 'distinctio';
    $request->authorizerId = 'quod';

    $response = $sdk->sdk->getAuthorizer($request);

    if ($response->getAuthorizerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAuthorizers

Gets the Authorizers for an API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAuthorizersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAuthorizersRequest();
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->apiId = 'illum';
    $request->maxResults = 'sequi';
    $request->nextToken = 'natus';

    $response = $sdk->sdk->getAuthorizers($request);

    if ($response->getAuthorizersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeployment

Gets a Deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeploymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeploymentRequest();
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'exercitationem';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'porro';
    $request->apiId = 'maiores';
    $request->deploymentId = 'doloribus';

    $response = $sdk->sdk->getDeployment($request);

    if ($response->getDeploymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeployments

Gets the Deployments for an API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeploymentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeploymentsRequest();
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'ducimus';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->apiId = 'ea';
    $request->maxResults = 'aspernatur';
    $request->nextToken = 'vel';

    $response = $sdk->sdk->getDeployments($request);

    if ($response->getDeploymentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomainName

Gets a domain name.

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
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'ratione';
    $request->xAmzDate = 'ex';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'dolor';
    $request->domainName = 'maiores';

    $response = $sdk->sdk->getDomainName($request);

    if ($response->getDomainNameResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomainNames

Gets the domain names for an AWS account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainNamesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainNamesRequest();
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->maxResults = 'quisquam';
    $request->nextToken = 'saepe';

    $response = $sdk->sdk->getDomainNames($request);

    if ($response->getDomainNamesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIntegration

Gets an Integration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIntegrationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIntegrationRequest();
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'inventore';
    $request->xAmzSignedHeaders = 'magnam';
    $request->apiId = 'ea';
    $request->integrationId = 'quo';

    $response = $sdk->sdk->getIntegration($request);

    if ($response->getIntegrationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIntegrationResponse

Gets an IntegrationResponses.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIntegrationResponseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIntegrationResponseRequest();
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'libero';
    $request->apiId = 'aut';
    $request->integrationId = 'aut';
    $request->integrationResponseId = 'deleniti';

    $response = $sdk->sdk->getIntegrationResponse($request);

    if ($response->getIntegrationResponseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIntegrationResponses

Gets the IntegrationResponses for an Integration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIntegrationResponsesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIntegrationResponsesRequest();
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'inventore';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'et';
    $request->apiId = 'dolorum';
    $request->integrationId = 'laborum';
    $request->maxResults = 'placeat';
    $request->nextToken = 'velit';

    $response = $sdk->sdk->getIntegrationResponses($request);

    if ($response->getIntegrationResponsesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIntegrations

Gets the Integrations for an API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIntegrationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIntegrationsRequest();
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'autem';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->apiId = 'libero';
    $request->maxResults = 'quasi';
    $request->nextToken = 'tempora';

    $response = $sdk->sdk->getIntegrations($request);

    if ($response->getIntegrationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModel

Gets a Model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetModelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetModelRequest();
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'odio';
    $request->apiId = 'eius';
    $request->modelId = 'esse';

    $response = $sdk->sdk->getModel($request);

    if ($response->getModelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModelTemplate

Gets a model template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetModelTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetModelTemplateRequest();
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'ut';
    $request->apiId = 'eum';
    $request->modelId = 'suscipit';

    $response = $sdk->sdk->getModelTemplate($request);

    if ($response->getModelTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModels

Gets the Models for an API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetModelsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetModelsRequest();
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'id';
    $request->apiId = 'quidem';
    $request->maxResults = 'neque';
    $request->nextToken = 'quo';

    $response = $sdk->sdk->getModels($request);

    if ($response->getModelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRoute

Gets a Route.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRouteRequest();
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'ab';
    $request->apiId = 'cupiditate';
    $request->routeId = 'consequatur';

    $response = $sdk->sdk->getRoute($request);

    if ($response->getRouteResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRouteResponse

Gets a RouteResponse.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRouteResponseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRouteResponseRequest();
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'esse';
    $request->apiId = 'recusandae';
    $request->routeId = 'aperiam';
    $request->routeResponseId = 'distinctio';

    $response = $sdk->sdk->getRouteResponse($request);

    if ($response->getRouteResponseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRouteResponses

Gets the RouteResponses for a Route.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRouteResponsesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRouteResponsesRequest();
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'inventore';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'aliquam';
    $request->apiId = 'odio';
    $request->maxResults = 'occaecati';
    $request->nextToken = 'commodi';
    $request->routeId = 'sapiente';

    $response = $sdk->sdk->getRouteResponses($request);

    if ($response->getRouteResponsesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRoutes

Gets the Routes for an API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRoutesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRoutesRequest();
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'quas';
    $request->apiId = 'praesentium';
    $request->maxResults = 'consequuntur';
    $request->nextToken = 'deleniti';

    $response = $sdk->sdk->getRoutes($request);

    if ($response->getRoutesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStage

Gets a Stage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStageRequest();
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'minima';
    $request->apiId = 'nisi';
    $request->stageName = 'fugit';

    $response = $sdk->sdk->getStage($request);

    if ($response->getStageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStages

Gets the Stages for an API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStagesRequest();
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'ratione';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'atque';
    $request->apiId = 'et';
    $request->maxResults = 'esse';
    $request->nextToken = 'eveniet';

    $response = $sdk->sdk->getStages($request);

    if ($response->getStagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTags

Gets a collection of Tag resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsRequest();
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->resourceArn = 'quasi';

    $response = $sdk->sdk->getTags($request);

    if ($response->getTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVpcLink

Gets a VPC link.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetVpcLinkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVpcLinkRequest();
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'minima';
    $request->vpcLinkId = 'distinctio';

    $response = $sdk->sdk->getVpcLink($request);

    if ($response->getVpcLinkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVpcLinks

Gets a collection of VPC links.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetVpcLinksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVpcLinksRequest();
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->maxResults = 'consequatur';
    $request->nextToken = 'minus';

    $response = $sdk->sdk->getVpcLinks($request);

    if ($response->getVpcLinksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importApi

Imports an API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportApiRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImportApiRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportApiRequest();
    $request->requestBody = new ImportApiRequestBody();
    $request->requestBody->body = 'quaerat';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'nulla';
    $request->basepath = 'quas';
    $request->failOnWarnings = false;

    $response = $sdk->sdk->importApi($request);

    if ($response->importApiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reimportApi

Puts an Api resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReimportApiRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReimportApiRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReimportApiRequest();
    $request->requestBody = new ReimportApiRequestBody();
    $request->requestBody->body = 'esse';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'quia';
    $request->apiId = 'eveniet';
    $request->basepath = 'asperiores';
    $request->failOnWarnings = false;

    $response = $sdk->sdk->reimportApi($request);

    if ($response->reimportApiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetAuthorizersCache

Resets all authorizer cache entries on a stage. Supported only for HTTP APIs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResetAuthorizersCacheRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetAuthorizersCacheRequest();
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'similique';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->apiId = 'tenetur';
    $request->stageName = 'quae';

    $response = $sdk->sdk->resetAuthorizersCache($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Creates a new Tag resource to represent a tag.

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
        'vel' => 'in',
        'eius' => 'libero',
        'illum' => 'soluta',
        'accusantium' => 'aliquam',
    ];
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'aut';
    $request->resourceArn = 'voluptatum';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Deletes a Tag.

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
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'architecto';
    $request->resourceArn = 'omnis';
    $request->tagKeys = [
        'quasi',
        'at',
        'et',
        'voluptate',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApi

Updates an Api resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApiRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApiRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApiRequestBodyCorsConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApiRequest();
    $request->requestBody = new UpdateApiRequestBody();
    $request->requestBody->apiKeySelectionExpression = 'ipsa';
    $request->requestBody->corsConfiguration = new UpdateApiRequestBodyCorsConfiguration();
    $request->requestBody->corsConfiguration->allowCredentials = false;
    $request->requestBody->corsConfiguration->allowHeaders = [
        'veritatis',
        'consectetur',
    ];
    $request->requestBody->corsConfiguration->allowMethods = [
        'iste',
    ];
    $request->requestBody->corsConfiguration->allowOrigins = [
        'accusantium',
        'rem',
        'aut',
        'laudantium',
    ];
    $request->requestBody->corsConfiguration->exposeHeaders = [
        'mollitia',
        'ab',
    ];
    $request->requestBody->corsConfiguration->maxAge = 544591;
    $request->requestBody->credentialsArn = 'non';
    $request->requestBody->description = 'voluptatem';
    $request->requestBody->disableExecuteApiEndpoint = false;
    $request->requestBody->disableSchemaValidation = false;
    $request->requestBody->name = 'Toni Fritsch';
    $request->requestBody->routeKey = 'voluptas';
    $request->requestBody->routeSelectionExpression = 'aut';
    $request->requestBody->target = 'dignissimos';
    $request->requestBody->version = 'dicta';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'aperiam';
    $request->apiId = 'ea';

    $response = $sdk->sdk->updateApi($request);

    if ($response->updateApiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApiMapping

The API mapping.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApiMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApiMappingRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApiMappingRequest();
    $request->requestBody = new UpdateApiMappingRequestBody();
    $request->requestBody->apiId = 'quaerat';
    $request->requestBody->apiMappingKey = 'consequuntur';
    $request->requestBody->stage = 'repellendus';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'quae';
    $request->apiMappingId = 'quaerat';
    $request->domainName = 'porro';

    $response = $sdk->sdk->updateApiMapping($request);

    if ($response->updateApiMappingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAuthorizer

Updates an Authorizer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAuthorizerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAuthorizerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAuthorizerRequestBodyAuthorizerTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAuthorizerRequestBodyJwtConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAuthorizerRequest();
    $request->requestBody = new UpdateAuthorizerRequestBody();
    $request->requestBody->authorizerCredentialsArn = 'quod';
    $request->requestBody->authorizerPayloadFormatVersion = 'labore';
    $request->requestBody->authorizerResultTtlInSeconds = 70447;
    $request->requestBody->authorizerType = UpdateAuthorizerRequestBodyAuthorizerTypeEnum::REQUEST;
    $request->requestBody->authorizerUri = 'fuga';
    $request->requestBody->enableSimpleResponses = false;
    $request->requestBody->identitySource = [
        'suscipit',
        'velit',
        'culpa',
    ];
    $request->requestBody->identityValidationExpression = 'est';
    $request->requestBody->jwtConfiguration = new UpdateAuthorizerRequestBodyJwtConfiguration();
    $request->requestBody->jwtConfiguration->audience = [
        'totam',
        'fugiat',
        'vel',
        'ducimus',
    ];
    $request->requestBody->jwtConfiguration->issuer = 'quos';
    $request->requestBody->name = 'Clara Senger';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->apiId = 'aliquid';
    $request->authorizerId = 'aperiam';

    $response = $sdk->sdk->updateAuthorizer($request);

    if ($response->updateAuthorizerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeployment

Updates a Deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeploymentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeploymentRequest();
    $request->requestBody = new UpdateDeploymentRequestBody();
    $request->requestBody->description = 'cum';
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->apiId = 'suscipit';
    $request->deploymentId = 'reiciendis';

    $response = $sdk->sdk->updateDeployment($request);

    if ($response->updateDeploymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDomainName

Updates a domain name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainNameRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\DomainNameConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DomainNameConfigurationDomainNameStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\DomainNameConfigurationEndpointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DomainNameConfigurationSecurityPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainNameRequestBodyMutualTlsAuthentication;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDomainNameRequest();
    $request->requestBody = new UpdateDomainNameRequestBody();
    $request->requestBody->domainNameConfigurations = [
        new DomainNameConfiguration(),
        new DomainNameConfiguration(),
        new DomainNameConfiguration(),
    ];
    $request->requestBody->mutualTlsAuthentication = new UpdateDomainNameRequestBodyMutualTlsAuthentication();
    $request->requestBody->mutualTlsAuthentication->truststoreUri = 'saepe';
    $request->requestBody->mutualTlsAuthentication->truststoreVersion = 'necessitatibus';
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'beatae';
    $request->domainName = 'dignissimos';

    $response = $sdk->sdk->updateDomainName($request);

    if ($response->updateDomainNameResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateIntegration

Updates an Integration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIntegrationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIntegrationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIntegrationRequestBodyConnectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIntegrationRequestBodyContentHandlingStrategyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIntegrationRequestBodyIntegrationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIntegrationRequestBodyPassthroughBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIntegrationRequestBodyTlsConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateIntegrationRequest();
    $request->requestBody = new UpdateIntegrationRequestBody();
    $request->requestBody->connectionId = 'a';
    $request->requestBody->connectionType = UpdateIntegrationRequestBodyConnectionTypeEnum::VPC_LINK;
    $request->requestBody->contentHandlingStrategy = UpdateIntegrationRequestBodyContentHandlingStrategyEnum::CONVERT_TO_BINARY;
    $request->requestBody->credentialsArn = 'corporis';
    $request->requestBody->description = 'harum';
    $request->requestBody->integrationMethod = 'laboriosam';
    $request->requestBody->integrationSubtype = 'ipsa';
    $request->requestBody->integrationType = UpdateIntegrationRequestBodyIntegrationTypeEnum::AWS_PROXY;
    $request->requestBody->integrationUri = 'libero';
    $request->requestBody->passthroughBehavior = UpdateIntegrationRequestBodyPassthroughBehaviorEnum::WHEN_NO_MATCH;
    $request->requestBody->payloadFormatVersion = 'accusamus';
    $request->requestBody->requestParameters = [
        'tempora' => 'aspernatur',
        'voluptas' => 'voluptas',
        'voluptas' => 'minima',
    ];
    $request->requestBody->requestTemplates = [
        'dolorum' => 'adipisci',
        'minus' => 'dolores',
        'blanditiis' => 'in',
    ];
    $request->requestBody->responseParameters = [
        'aliquam' => [
            'temporibus' => 'ullam',
            'adipisci' => 'cum',
            'blanditiis' => 'quas',
            'hic' => 'nesciunt',
        ],
        'culpa' => [
            'pariatur' => 'totam',
            'hic' => 'exercitationem',
            'nobis' => 'sit',
        ],
    ];
    $request->requestBody->templateSelectionExpression = 'rerum';
    $request->requestBody->timeoutInMillis = 148829;
    $request->requestBody->tlsConfig = new UpdateIntegrationRequestBodyTlsConfig();
    $request->requestBody->tlsConfig->serverNameToVerify = 'reiciendis';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'iste';
    $request->apiId = 'dolore';
    $request->integrationId = 'laborum';

    $response = $sdk->sdk->updateIntegration($request);

    if ($response->updateIntegrationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateIntegrationResponse

Updates an IntegrationResponses.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIntegrationResponseRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIntegrationResponseRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIntegrationResponseRequestBodyContentHandlingStrategyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateIntegrationResponseRequest();
    $request->requestBody = new UpdateIntegrationResponseRequestBody();
    $request->requestBody->contentHandlingStrategy = UpdateIntegrationResponseRequestBodyContentHandlingStrategyEnum::CONVERT_TO_BINARY;
    $request->requestBody->integrationResponseKey = 'in';
    $request->requestBody->responseParameters = [
        'quidem' => 'explicabo',
        'voluptas' => 'unde',
    ];
    $request->requestBody->responseTemplates = [
        'suscipit' => 'sapiente',
    ];
    $request->requestBody->templateSelectionExpression = 'debitis';
    $request->xAmzAlgorithm = 'illo';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'sed';
    $request->apiId = 'provident';
    $request->integrationId = 'eius';
    $request->integrationResponseId = 'necessitatibus';

    $response = $sdk->sdk->updateIntegrationResponse($request);

    if ($response->updateIntegrationResponseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateModel

Updates a Model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateModelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateModelRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateModelRequest();
    $request->requestBody = new UpdateModelRequestBody();
    $request->requestBody->contentType = 'ipsum';
    $request->requestBody->description = 'ea';
    $request->requestBody->name = 'Isaac Wolf';
    $request->requestBody->schema = 'voluptate';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'facilis';
    $request->apiId = 'quaerat';
    $request->modelId = 'incidunt';

    $response = $sdk->sdk->updateModel($request);

    if ($response->updateModelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRoute

Updates a Route.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRouteRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRouteRequestBodyAuthorizationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParameterConstraints;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRouteRequest();
    $request->requestBody = new UpdateRouteRequestBody();
    $request->requestBody->apiKeyRequired = false;
    $request->requestBody->authorizationScopes = [
        'debitis',
        'rem',
    ];
    $request->requestBody->authorizationType = UpdateRouteRequestBodyAuthorizationTypeEnum::NONE;
    $request->requestBody->authorizerId = 'nobis';
    $request->requestBody->modelSelectionExpression = 'error';
    $request->requestBody->operationName = 'veniam';
    $request->requestBody->requestModels = [
        'recusandae' => 'reiciendis',
        'nulla' => 'magni',
    ];
    $request->requestBody->requestParameters = [
        'saepe' => new ParameterConstraints(),
    ];
    $request->requestBody->routeKey = 'numquam';
    $request->requestBody->routeResponseSelectionExpression = 'veniam';
    $request->requestBody->target = 'in';
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'exercitationem';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'laboriosam';
    $request->apiId = 'dolorum';
    $request->routeId = 'voluptatum';

    $response = $sdk->sdk->updateRoute($request);

    if ($response->updateRouteResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRouteResponse

Updates a RouteResponse.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRouteResponseRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRouteResponseRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ParameterConstraints;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRouteResponseRequest();
    $request->requestBody = new UpdateRouteResponseRequestBody();
    $request->requestBody->modelSelectionExpression = 'error';
    $request->requestBody->responseModels = [
        'expedita' => 'debitis',
        'neque' => 'dolorum',
        'nostrum' => 'officia',
        'dolorum' => 'corrupti',
    ];
    $request->requestBody->responseParameters = [
        'tempora' => new ParameterConstraints(),
        'atque' => new ParameterConstraints(),
        'fugit' => new ParameterConstraints(),
        'ut' => new ParameterConstraints(),
    ];
    $request->requestBody->routeResponseKey = 'fugiat';
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->apiId = 'sit';
    $request->routeId = 'voluptatum';
    $request->routeResponseId = 'quas';

    $response = $sdk->sdk->updateRouteResponse($request);

    if ($response->updateRouteResponseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateStage

Updates a Stage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStageRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStageRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStageRequestBodyAccessLogSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStageRequestBodyDefaultRouteSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStageRequestBodyDefaultRouteSettingsLoggingLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouteSettings;
use \OpenAPI\OpenAPI\Models\Shared\RouteSettingsLoggingLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateStageRequest();
    $request->requestBody = new UpdateStageRequestBody();
    $request->requestBody->accessLogSettings = new UpdateStageRequestBodyAccessLogSettings();
    $request->requestBody->accessLogSettings->destinationArn = 'repudiandae';
    $request->requestBody->accessLogSettings->format = 'corporis';
    $request->requestBody->autoDeploy = false;
    $request->requestBody->clientCertificateId = 'et';
    $request->requestBody->defaultRouteSettings = new UpdateStageRequestBodyDefaultRouteSettings();
    $request->requestBody->defaultRouteSettings->dataTraceEnabled = false;
    $request->requestBody->defaultRouteSettings->detailedMetricsEnabled = false;
    $request->requestBody->defaultRouteSettings->loggingLevel = UpdateStageRequestBodyDefaultRouteSettingsLoggingLevelEnum::INFO;
    $request->requestBody->defaultRouteSettings->throttlingBurstLimit = 405942;
    $request->requestBody->defaultRouteSettings->throttlingRateLimit = 1536.27;
    $request->requestBody->deploymentId = 'sit';
    $request->requestBody->description = 'vel';
    $request->requestBody->routeSettings = [
        'saepe' => new RouteSettings(),
        'error' => new RouteSettings(),
    ];
    $request->requestBody->stageVariables = [
        'incidunt' => 'reiciendis',
    ];
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'quidem';
    $request->apiId = 'atque';
    $request->stageName = 'laborum';

    $response = $sdk->sdk->updateStage($request);

    if ($response->updateStageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVpcLink

Updates a VPC link.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVpcLinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVpcLinkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVpcLinkRequest();
    $request->requestBody = new UpdateVpcLinkRequestBody();
    $request->requestBody->name = 'Mrs. Roman Howell';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'voluptates';
    $request->vpcLinkId = 'perferendis';

    $response = $sdk->sdk->updateVpcLink($request);

    if ($response->updateVpcLinkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
