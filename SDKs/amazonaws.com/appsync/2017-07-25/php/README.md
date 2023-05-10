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
use \OpenAPI\OpenAPI\Models\Operations\AssociateApiRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateApiRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateApiRequest();
    $request->requestBody = new AssociateApiRequestBody();
    $request->requestBody->apiId = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->domainName = 'vel';

    $response = $sdk->associateApi($request);

    if ($response->associateApiResponse !== null) {
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

* [associateApi](docs/sdk/README.md#associateapi) - Maps an endpoint to your custom domain.
* [createApiCache](docs/sdk/README.md#createapicache) - Creates a cache for the GraphQL API.
* [createApiKey](docs/sdk/README.md#createapikey) - Creates a unique key that you can distribute to clients who invoke your API.
* [createDataSource](docs/sdk/README.md#createdatasource) - Creates a <code>DataSource</code> object.
* [createDomainName](docs/sdk/README.md#createdomainname) - Creates a custom <code>DomainName</code> object.
* [createFunction](docs/sdk/README.md#createfunction) - <p>Creates a <code>Function</code> object.</p> <p>A function is a reusable entity. You can use multiple functions to compose the resolver logic.</p>
* [createGraphqlApi](docs/sdk/README.md#creategraphqlapi) - Creates a <code>GraphqlApi</code> object.
* [createResolver](docs/sdk/README.md#createresolver) - <p>Creates a <code>Resolver</code> object.</p> <p>A resolver converts incoming requests into a format that a data source can understand, and converts the data source's responses into GraphQL.</p>
* [createType](docs/sdk/README.md#createtype) - Creates a <code>Type</code> object.
* [deleteApiCache](docs/sdk/README.md#deleteapicache) - Deletes an <code>ApiCache</code> object.
* [deleteApiKey](docs/sdk/README.md#deleteapikey) - Deletes an API key.
* [deleteDataSource](docs/sdk/README.md#deletedatasource) - Deletes a <code>DataSource</code> object.
* [deleteDomainName](docs/sdk/README.md#deletedomainname) - Deletes a custom <code>DomainName</code> object.
* [deleteFunction](docs/sdk/README.md#deletefunction) - Deletes a <code>Function</code>.
* [deleteGraphqlApi](docs/sdk/README.md#deletegraphqlapi) - Deletes a <code>GraphqlApi</code> object.
* [deleteResolver](docs/sdk/README.md#deleteresolver) - Deletes a <code>Resolver</code> object.
* [deleteType](docs/sdk/README.md#deletetype) - Deletes a <code>Type</code> object.
* [disassociateApi](docs/sdk/README.md#disassociateapi) - Removes an <code>ApiAssociation</code> object from a custom domain.
* [evaluateCode](docs/sdk/README.md#evaluatecode) - Evaluates the given code and returns the response. The code definition requirements depend on the specified runtime. For <code>APPSYNC_JS</code> runtimes, the code defines the request and response functions. The request function takes the incoming request after a GraphQL operation is parsed and converts it into a request configuration for the selected data source operation. The response function interprets responses from the data source and maps it to the shape of the GraphQL field output type. 
* [evaluateMappingTemplate](docs/sdk/README.md#evaluatemappingtemplate) - <p>Evaluates a given template and returns the response. The mapping template can be a request or response template.</p> <p>Request templates take the incoming request after a GraphQL operation is parsed and convert it into a request configuration for the selected data source operation. Response templates interpret responses from the data source and map it to the shape of the GraphQL field output type.</p> <p>Mapping templates are written in the Apache Velocity Template Language (VTL).</p>
* [flushApiCache](docs/sdk/README.md#flushapicache) - Flushes an <code>ApiCache</code> object.
* [getApiAssociation](docs/sdk/README.md#getapiassociation) - Retrieves an <code>ApiAssociation</code> object.
* [getApiCache](docs/sdk/README.md#getapicache) - Retrieves an <code>ApiCache</code> object.
* [getDataSource](docs/sdk/README.md#getdatasource) - Retrieves a <code>DataSource</code> object.
* [getDomainName](docs/sdk/README.md#getdomainname) - Retrieves a custom <code>DomainName</code> object.
* [getFunction](docs/sdk/README.md#getfunction) - Get a <code>Function</code>.
* [getGraphqlApi](docs/sdk/README.md#getgraphqlapi) - Retrieves a <code>GraphqlApi</code> object.
* [getIntrospectionSchema](docs/sdk/README.md#getintrospectionschema) - Retrieves the introspection schema for a GraphQL API.
* [getResolver](docs/sdk/README.md#getresolver) - Retrieves a <code>Resolver</code> object.
* [getSchemaCreationStatus](docs/sdk/README.md#getschemacreationstatus) - Retrieves the current status of a schema creation operation.
* [getType](docs/sdk/README.md#gettype) - Retrieves a <code>Type</code> object.
* [listApiKeys](docs/sdk/README.md#listapikeys) - <p>Lists the API keys for a given API.</p> <note> <p>API keys are deleted automatically 60 days after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call <code>DeleteApiKey</code> to manually delete a key before it's automatically deleted.</p> </note>
* [listDataSources](docs/sdk/README.md#listdatasources) - Lists the data sources for a given API.
* [listDomainNames](docs/sdk/README.md#listdomainnames) - Lists multiple custom domain names.
* [listFunctions](docs/sdk/README.md#listfunctions) - List multiple functions.
* [listGraphqlApis](docs/sdk/README.md#listgraphqlapis) - Lists your GraphQL APIs.
* [listResolvers](docs/sdk/README.md#listresolvers) - Lists the resolvers for a given API and type.
* [listResolversByFunction](docs/sdk/README.md#listresolversbyfunction) - List the resolvers that are associated with a specific function.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags for a resource.
* [listTypes](docs/sdk/README.md#listtypes) - Lists the types for a given API.
* [startSchemaCreation](docs/sdk/README.md#startschemacreation) - <p>Adds a new schema to your GraphQL API.</p> <p>This operation is asynchronous. Use to determine when it has completed.</p>
* [tagResource](docs/sdk/README.md#tagresource) - Tags a resource with user-supplied tags.
* [untagResource](docs/sdk/README.md#untagresource) - Untags a resource.
* [updateApiCache](docs/sdk/README.md#updateapicache) - Updates the cache for the GraphQL API.
* [updateApiKey](docs/sdk/README.md#updateapikey) - Updates an API key. You can update the key as long as it's not deleted.
* [updateDataSource](docs/sdk/README.md#updatedatasource) - Updates a <code>DataSource</code> object.
* [updateDomainName](docs/sdk/README.md#updatedomainname) - Updates a custom <code>DomainName</code> object.
* [updateFunction](docs/sdk/README.md#updatefunction) - Updates a <code>Function</code> object.
* [updateGraphqlApi](docs/sdk/README.md#updategraphqlapi) - Updates a <code>GraphqlApi</code> object.
* [updateResolver](docs/sdk/README.md#updateresolver) - Updates a <code>Resolver</code> object.
* [updateType](docs/sdk/README.md#updatetype) - Updates a <code>Type</code> object.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
