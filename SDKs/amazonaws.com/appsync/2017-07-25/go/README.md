# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/appsync/2017-07-25/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.AssociateAPI(ctx, operations.AssociateAPIRequest{
        RequestBody: operations.AssociateAPIRequestBody{
            APIID: "corrupti",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("unde"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("illum"),
        DomainName: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateAPIResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AssociateAPI](docs/sdk/README.md#associateapi) - Maps an endpoint to your custom domain.
* [CreateAPICache](docs/sdk/README.md#createapicache) - Creates a cache for the GraphQL API.
* [CreateAPIKey](docs/sdk/README.md#createapikey) - Creates a unique key that you can distribute to clients who invoke your API.
* [CreateDataSource](docs/sdk/README.md#createdatasource) - Creates a <code>DataSource</code> object.
* [CreateDomainName](docs/sdk/README.md#createdomainname) - Creates a custom <code>DomainName</code> object.
* [CreateFunction](docs/sdk/README.md#createfunction) - <p>Creates a <code>Function</code> object.</p> <p>A function is a reusable entity. You can use multiple functions to compose the resolver logic.</p>
* [CreateGraphqlAPI](docs/sdk/README.md#creategraphqlapi) - Creates a <code>GraphqlApi</code> object.
* [CreateResolver](docs/sdk/README.md#createresolver) - <p>Creates a <code>Resolver</code> object.</p> <p>A resolver converts incoming requests into a format that a data source can understand, and converts the data source's responses into GraphQL.</p>
* [CreateType](docs/sdk/README.md#createtype) - Creates a <code>Type</code> object.
* [DeleteAPICache](docs/sdk/README.md#deleteapicache) - Deletes an <code>ApiCache</code> object.
* [DeleteAPIKey](docs/sdk/README.md#deleteapikey) - Deletes an API key.
* [DeleteDataSource](docs/sdk/README.md#deletedatasource) - Deletes a <code>DataSource</code> object.
* [DeleteDomainName](docs/sdk/README.md#deletedomainname) - Deletes a custom <code>DomainName</code> object.
* [DeleteFunction](docs/sdk/README.md#deletefunction) - Deletes a <code>Function</code>.
* [DeleteGraphqlAPI](docs/sdk/README.md#deletegraphqlapi) - Deletes a <code>GraphqlApi</code> object.
* [DeleteResolver](docs/sdk/README.md#deleteresolver) - Deletes a <code>Resolver</code> object.
* [DeleteType](docs/sdk/README.md#deletetype) - Deletes a <code>Type</code> object.
* [DisassociateAPI](docs/sdk/README.md#disassociateapi) - Removes an <code>ApiAssociation</code> object from a custom domain.
* [EvaluateCode](docs/sdk/README.md#evaluatecode) - Evaluates the given code and returns the response. The code definition requirements depend on the specified runtime. For <code>APPSYNC_JS</code> runtimes, the code defines the request and response functions. The request function takes the incoming request after a GraphQL operation is parsed and converts it into a request configuration for the selected data source operation. The response function interprets responses from the data source and maps it to the shape of the GraphQL field output type. 
* [EvaluateMappingTemplate](docs/sdk/README.md#evaluatemappingtemplate) - <p>Evaluates a given template and returns the response. The mapping template can be a request or response template.</p> <p>Request templates take the incoming request after a GraphQL operation is parsed and convert it into a request configuration for the selected data source operation. Response templates interpret responses from the data source and map it to the shape of the GraphQL field output type.</p> <p>Mapping templates are written in the Apache Velocity Template Language (VTL).</p>
* [FlushAPICache](docs/sdk/README.md#flushapicache) - Flushes an <code>ApiCache</code> object.
* [GetAPIAssociation](docs/sdk/README.md#getapiassociation) - Retrieves an <code>ApiAssociation</code> object.
* [GetAPICache](docs/sdk/README.md#getapicache) - Retrieves an <code>ApiCache</code> object.
* [GetDataSource](docs/sdk/README.md#getdatasource) - Retrieves a <code>DataSource</code> object.
* [GetDomainName](docs/sdk/README.md#getdomainname) - Retrieves a custom <code>DomainName</code> object.
* [GetFunction](docs/sdk/README.md#getfunction) - Get a <code>Function</code>.
* [GetGraphqlAPI](docs/sdk/README.md#getgraphqlapi) - Retrieves a <code>GraphqlApi</code> object.
* [GetIntrospectionSchema](docs/sdk/README.md#getintrospectionschema) - Retrieves the introspection schema for a GraphQL API.
* [GetResolver](docs/sdk/README.md#getresolver) - Retrieves a <code>Resolver</code> object.
* [GetSchemaCreationStatus](docs/sdk/README.md#getschemacreationstatus) - Retrieves the current status of a schema creation operation.
* [GetType](docs/sdk/README.md#gettype) - Retrieves a <code>Type</code> object.
* [ListAPIKeys](docs/sdk/README.md#listapikeys) - <p>Lists the API keys for a given API.</p> <note> <p>API keys are deleted automatically 60 days after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call <code>DeleteApiKey</code> to manually delete a key before it's automatically deleted.</p> </note>
* [ListDataSources](docs/sdk/README.md#listdatasources) - Lists the data sources for a given API.
* [ListDomainNames](docs/sdk/README.md#listdomainnames) - Lists multiple custom domain names.
* [ListFunctions](docs/sdk/README.md#listfunctions) - List multiple functions.
* [ListGraphqlApis](docs/sdk/README.md#listgraphqlapis) - Lists your GraphQL APIs.
* [ListResolvers](docs/sdk/README.md#listresolvers) - Lists the resolvers for a given API and type.
* [ListResolversByFunction](docs/sdk/README.md#listresolversbyfunction) - List the resolvers that are associated with a specific function.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags for a resource.
* [ListTypes](docs/sdk/README.md#listtypes) - Lists the types for a given API.
* [StartSchemaCreation](docs/sdk/README.md#startschemacreation) - <p>Adds a new schema to your GraphQL API.</p> <p>This operation is asynchronous. Use to determine when it has completed.</p>
* [TagResource](docs/sdk/README.md#tagresource) - Tags a resource with user-supplied tags.
* [UntagResource](docs/sdk/README.md#untagresource) - Untags a resource.
* [UpdateAPICache](docs/sdk/README.md#updateapicache) - Updates the cache for the GraphQL API.
* [UpdateAPIKey](docs/sdk/README.md#updateapikey) - Updates an API key. You can update the key as long as it's not deleted.
* [UpdateDataSource](docs/sdk/README.md#updatedatasource) - Updates a <code>DataSource</code> object.
* [UpdateDomainName](docs/sdk/README.md#updatedomainname) - Updates a custom <code>DomainName</code> object.
* [UpdateFunction](docs/sdk/README.md#updatefunction) - Updates a <code>Function</code> object.
* [UpdateGraphqlAPI](docs/sdk/README.md#updategraphqlapi) - Updates a <code>GraphqlApi</code> object.
* [UpdateResolver](docs/sdk/README.md#updateresolver) - Updates a <code>Resolver</code> object.
* [UpdateType](docs/sdk/README.md#updatetype) - Updates a <code>Type</code> object.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
