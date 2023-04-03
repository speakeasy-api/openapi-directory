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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associateApi` - Maps an endpoint to your custom domain.
* `createApiCache` - Creates a cache for the GraphQL API.
* `createApiKey` - Creates a unique key that you can distribute to clients who invoke your API.
* `createDataSource` - Creates a <code>DataSource</code> object.
* `createDomainName` - Creates a custom <code>DomainName</code> object.
* `createFunction` - <p>Creates a <code>Function</code> object.</p> <p>A function is a reusable entity. You can use multiple functions to compose the resolver logic.</p>
* `createGraphqlApi` - Creates a <code>GraphqlApi</code> object.
* `createResolver` - <p>Creates a <code>Resolver</code> object.</p> <p>A resolver converts incoming requests into a format that a data source can understand, and converts the data source's responses into GraphQL.</p>
* `createType` - Creates a <code>Type</code> object.
* `deleteApiCache` - Deletes an <code>ApiCache</code> object.
* `deleteApiKey` - Deletes an API key.
* `deleteDataSource` - Deletes a <code>DataSource</code> object.
* `deleteDomainName` - Deletes a custom <code>DomainName</code> object.
* `deleteFunction` - Deletes a <code>Function</code>.
* `deleteGraphqlApi` - Deletes a <code>GraphqlApi</code> object.
* `deleteResolver` - Deletes a <code>Resolver</code> object.
* `deleteType` - Deletes a <code>Type</code> object.
* `disassociateApi` - Removes an <code>ApiAssociation</code> object from a custom domain.
* `evaluateCode` - Evaluates the given code and returns the response. The code definition requirements depend on the specified runtime. For <code>APPSYNC_JS</code> runtimes, the code defines the request and response functions. The request function takes the incoming request after a GraphQL operation is parsed and converts it into a request configuration for the selected data source operation. The response function interprets responses from the data source and maps it to the shape of the GraphQL field output type. 
* `evaluateMappingTemplate` - <p>Evaluates a given template and returns the response. The mapping template can be a request or response template.</p> <p>Request templates take the incoming request after a GraphQL operation is parsed and convert it into a request configuration for the selected data source operation. Response templates interpret responses from the data source and map it to the shape of the GraphQL field output type.</p> <p>Mapping templates are written in the Apache Velocity Template Language (VTL).</p>
* `flushApiCache` - Flushes an <code>ApiCache</code> object.
* `getApiAssociation` - Retrieves an <code>ApiAssociation</code> object.
* `getApiCache` - Retrieves an <code>ApiCache</code> object.
* `getDataSource` - Retrieves a <code>DataSource</code> object.
* `getDomainName` - Retrieves a custom <code>DomainName</code> object.
* `getFunction` - Get a <code>Function</code>.
* `getGraphqlApi` - Retrieves a <code>GraphqlApi</code> object.
* `getIntrospectionSchema` - Retrieves the introspection schema for a GraphQL API.
* `getResolver` - Retrieves a <code>Resolver</code> object.
* `getSchemaCreationStatus` - Retrieves the current status of a schema creation operation.
* `getType` - Retrieves a <code>Type</code> object.
* `listApiKeys` - <p>Lists the API keys for a given API.</p> <note> <p>API keys are deleted automatically 60 days after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call <code>DeleteApiKey</code> to manually delete a key before it's automatically deleted.</p> </note>
* `listDataSources` - Lists the data sources for a given API.
* `listDomainNames` - Lists multiple custom domain names.
* `listFunctions` - List multiple functions.
* `listGraphqlApis` - Lists your GraphQL APIs.
* `listResolvers` - Lists the resolvers for a given API and type.
* `listResolversByFunction` - List the resolvers that are associated with a specific function.
* `listTagsForResource` - Lists the tags for a resource.
* `listTypes` - Lists the types for a given API.
* `startSchemaCreation` - <p>Adds a new schema to your GraphQL API.</p> <p>This operation is asynchronous. Use to determine when it has completed.</p>
* `tagResource` - Tags a resource with user-supplied tags.
* `untagResource` - Untags a resource.
* `updateApiCache` - Updates the cache for the GraphQL API.
* `updateApiKey` - Updates an API key. You can update the key as long as it's not deleted.
* `updateDataSource` - Updates a <code>DataSource</code> object.
* `updateDomainName` - Updates a custom <code>DomainName</code> object.
* `updateFunction` - Updates a <code>Function</code> object.
* `updateGraphqlApi` - Updates a <code>GraphqlApi</code> object.
* `updateResolver` - Updates a <code>Resolver</code> object.
* `updateType` - Updates a <code>Type</code> object.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
