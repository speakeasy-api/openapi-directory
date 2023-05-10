# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->requestBody->apiKeySelectionExpression = 'corrupti';
    $request->requestBody->corsConfiguration = new CreateApiRequestBodyCorsConfiguration();
    $request->requestBody->corsConfiguration->allowCredentials = false;
    $request->requestBody->corsConfiguration->allowHeaders = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->requestBody->corsConfiguration->allowMethods = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->requestBody->corsConfiguration->allowOrigins = [
        'suscipit',
        'iure',
        'magnam',
    ];
    $request->requestBody->corsConfiguration->exposeHeaders = [
        'ipsa',
        'delectus',
        'tempora',
        'suscipit',
    ];
    $request->requestBody->corsConfiguration->maxAge = 477665;
    $request->requestBody->credentialsArn = 'minus';
    $request->requestBody->description = 'placeat';
    $request->requestBody->disableExecuteApiEndpoint = false;
    $request->requestBody->disableSchemaValidation = false;
    $request->requestBody->name = 'Ted Mante';
    $request->requestBody->protocolType = CreateApiRequestBodyProtocolTypeEnum::HTTP;
    $request->requestBody->routeKey = 'ab';
    $request->requestBody->routeSelectionExpression = 'quis';
    $request->requestBody->tags = [
        'deserunt' => 'perferendis',
    ];
    $request->requestBody->target = 'ipsam';
    $request->requestBody->version = 'repellendus';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->createApi($request);

    if ($response->createApiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createApi](docs/sdk/README.md#createapi) - Creates an Api resource.
* [createApiMapping](docs/sdk/README.md#createapimapping) - Creates an API mapping.
* [createAuthorizer](docs/sdk/README.md#createauthorizer) - Creates an Authorizer for an API.
* [createDeployment](docs/sdk/README.md#createdeployment) - Creates a Deployment for an API.
* [createDomainName](docs/sdk/README.md#createdomainname) - Creates a domain name.
* [createIntegration](docs/sdk/README.md#createintegration) - Creates an Integration.
* [createIntegrationResponse](docs/sdk/README.md#createintegrationresponse) - Creates an IntegrationResponses.
* [createModel](docs/sdk/README.md#createmodel) - Creates a Model for an API.
* [createRoute](docs/sdk/README.md#createroute) - Creates a Route for an API.
* [createRouteResponse](docs/sdk/README.md#createrouteresponse) - Creates a RouteResponse for a Route.
* [createStage](docs/sdk/README.md#createstage) - Creates a Stage for an API.
* [createVpcLink](docs/sdk/README.md#createvpclink) - Creates a VPC link.
* [deleteAccessLogSettings](docs/sdk/README.md#deleteaccesslogsettings) - Deletes the AccessLogSettings for a Stage. To disable access logging for a Stage, delete its AccessLogSettings.
* [deleteApi](docs/sdk/README.md#deleteapi) - Deletes an Api resource.
* [deleteApiMapping](docs/sdk/README.md#deleteapimapping) - Deletes an API mapping.
* [deleteAuthorizer](docs/sdk/README.md#deleteauthorizer) - Deletes an Authorizer.
* [deleteCorsConfiguration](docs/sdk/README.md#deletecorsconfiguration) - Deletes a CORS configuration.
* [deleteDeployment](docs/sdk/README.md#deletedeployment) - Deletes a Deployment.
* [deleteDomainName](docs/sdk/README.md#deletedomainname) - Deletes a domain name.
* [deleteIntegration](docs/sdk/README.md#deleteintegration) - Deletes an Integration.
* [deleteIntegrationResponse](docs/sdk/README.md#deleteintegrationresponse) - Deletes an IntegrationResponses.
* [deleteModel](docs/sdk/README.md#deletemodel) - Deletes a Model.
* [deleteRoute](docs/sdk/README.md#deleteroute) - Deletes a Route.
* [deleteRouteRequestParameter](docs/sdk/README.md#deleterouterequestparameter) - Deletes a route request parameter.
* [deleteRouteResponse](docs/sdk/README.md#deleterouteresponse) - Deletes a RouteResponse.
* [deleteRouteSettings](docs/sdk/README.md#deleteroutesettings) - Deletes the RouteSettings for a stage.
* [deleteStage](docs/sdk/README.md#deletestage) - Deletes a Stage.
* [deleteVpcLink](docs/sdk/README.md#deletevpclink) - Deletes a VPC link.
* [exportApi](docs/sdk/README.md#exportapi)
* [getApi](docs/sdk/README.md#getapi) - Gets an Api resource.
* [getApiMapping](docs/sdk/README.md#getapimapping) - Gets an API mapping.
* [getApiMappings](docs/sdk/README.md#getapimappings) - Gets API mappings.
* [getApis](docs/sdk/README.md#getapis) - Gets a collection of Api resources.
* [getAuthorizer](docs/sdk/README.md#getauthorizer) - Gets an Authorizer.
* [getAuthorizers](docs/sdk/README.md#getauthorizers) - Gets the Authorizers for an API.
* [getDeployment](docs/sdk/README.md#getdeployment) - Gets a Deployment.
* [getDeployments](docs/sdk/README.md#getdeployments) - Gets the Deployments for an API.
* [getDomainName](docs/sdk/README.md#getdomainname) - Gets a domain name.
* [getDomainNames](docs/sdk/README.md#getdomainnames) - Gets the domain names for an AWS account.
* [getIntegration](docs/sdk/README.md#getintegration) - Gets an Integration.
* [getIntegrationResponse](docs/sdk/README.md#getintegrationresponse) - Gets an IntegrationResponses.
* [getIntegrationResponses](docs/sdk/README.md#getintegrationresponses) - Gets the IntegrationResponses for an Integration.
* [getIntegrations](docs/sdk/README.md#getintegrations) - Gets the Integrations for an API.
* [getModel](docs/sdk/README.md#getmodel) - Gets a Model.
* [getModelTemplate](docs/sdk/README.md#getmodeltemplate) - Gets a model template.
* [getModels](docs/sdk/README.md#getmodels) - Gets the Models for an API.
* [getRoute](docs/sdk/README.md#getroute) - Gets a Route.
* [getRouteResponse](docs/sdk/README.md#getrouteresponse) - Gets a RouteResponse.
* [getRouteResponses](docs/sdk/README.md#getrouteresponses) - Gets the RouteResponses for a Route.
* [getRoutes](docs/sdk/README.md#getroutes) - Gets the Routes for an API.
* [getStage](docs/sdk/README.md#getstage) - Gets a Stage.
* [getStages](docs/sdk/README.md#getstages) - Gets the Stages for an API.
* [getTags](docs/sdk/README.md#gettags) - Gets a collection of Tag resources.
* [getVpcLink](docs/sdk/README.md#getvpclink) - Gets a VPC link.
* [getVpcLinks](docs/sdk/README.md#getvpclinks) - Gets a collection of VPC links.
* [importApi](docs/sdk/README.md#importapi) - Imports an API.
* [reimportApi](docs/sdk/README.md#reimportapi) - Puts an Api resource.
* [resetAuthorizersCache](docs/sdk/README.md#resetauthorizerscache) - Resets all authorizer cache entries on a stage. Supported only for HTTP APIs.
* [tagResource](docs/sdk/README.md#tagresource) - Creates a new Tag resource to represent a tag.
* [untagResource](docs/sdk/README.md#untagresource) - Deletes a Tag.
* [updateApi](docs/sdk/README.md#updateapi) - Updates an Api resource.
* [updateApiMapping](docs/sdk/README.md#updateapimapping) - The API mapping.
* [updateAuthorizer](docs/sdk/README.md#updateauthorizer) - Updates an Authorizer.
* [updateDeployment](docs/sdk/README.md#updatedeployment) - Updates a Deployment.
* [updateDomainName](docs/sdk/README.md#updatedomainname) - Updates a domain name.
* [updateIntegration](docs/sdk/README.md#updateintegration) - Updates an Integration.
* [updateIntegrationResponse](docs/sdk/README.md#updateintegrationresponse) - Updates an IntegrationResponses.
* [updateModel](docs/sdk/README.md#updatemodel) - Updates a Model.
* [updateRoute](docs/sdk/README.md#updateroute) - Updates a Route.
* [updateRouteResponse](docs/sdk/README.md#updaterouteresponse) - Updates a RouteResponse.
* [updateStage](docs/sdk/README.md#updatestage) - Updates a Stage.
* [updateVpcLink](docs/sdk/README.md#updatevpclink) - Updates a VPC link.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
