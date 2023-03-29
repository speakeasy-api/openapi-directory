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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AssociateAPIRequest{
        PathParams: operations.AssociateAPIPathParams{
            DomainName: "unde",
        },
        Headers: operations.AssociateAPIHeaders{
            XAmzAlgorithm: "deserunt",
            XAmzContentSha256: "porro",
            XAmzCredential: "nulla",
            XAmzDate: "id",
            XAmzSecurityToken: "vero",
            XAmzSignature: "perspiciatis",
            XAmzSignedHeaders: "nulla",
        },
        Request: operations.AssociateAPIRequestBody{
            APIID: "nihil",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateAPI(ctx, req)
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
## SDK Available Operations

### SDK SDK

* `AssociateAPI` - Maps an endpoint to your custom domain.
* `CreateAPICache` - Creates a cache for the GraphQL API.
* `CreateAPIKey` - Creates a unique key that you can distribute to clients who invoke your API.
* `CreateDataSource` - Creates a <code>DataSource</code> object.
* `CreateDomainName` - Creates a custom <code>DomainName</code> object.
* `CreateFunction` - <p>Creates a <code>Function</code> object.</p> <p>A function is a reusable entity. You can use multiple functions to compose the resolver logic.</p>
* `CreateGraphqlAPI` - Creates a <code>GraphqlApi</code> object.
* `CreateResolver` - <p>Creates a <code>Resolver</code> object.</p> <p>A resolver converts incoming requests into a format that a data source can understand, and converts the data source's responses into GraphQL.</p>
* `CreateType` - Creates a <code>Type</code> object.
* `DeleteAPICache` - Deletes an <code>ApiCache</code> object.
* `DeleteAPIKey` - Deletes an API key.
* `DeleteDataSource` - Deletes a <code>DataSource</code> object.
* `DeleteDomainName` - Deletes a custom <code>DomainName</code> object.
* `DeleteFunction` - Deletes a <code>Function</code>.
* `DeleteGraphqlAPI` - Deletes a <code>GraphqlApi</code> object.
* `DeleteResolver` - Deletes a <code>Resolver</code> object.
* `DeleteType` - Deletes a <code>Type</code> object.
* `DisassociateAPI` - Removes an <code>ApiAssociation</code> object from a custom domain.
* `EvaluateCode` - Evaluates the given code and returns the response. The code definition requirements depend on the specified runtime. For <code>APPSYNC_JS</code> runtimes, the code defines the request and response functions. The request function takes the incoming request after a GraphQL operation is parsed and converts it into a request configuration for the selected data source operation. The response function interprets responses from the data source and maps it to the shape of the GraphQL field output type. 
* `EvaluateMappingTemplate` - <p>Evaluates a given template and returns the response. The mapping template can be a request or response template.</p> <p>Request templates take the incoming request after a GraphQL operation is parsed and convert it into a request configuration for the selected data source operation. Response templates interpret responses from the data source and map it to the shape of the GraphQL field output type.</p> <p>Mapping templates are written in the Apache Velocity Template Language (VTL).</p>
* `FlushAPICache` - Flushes an <code>ApiCache</code> object.
* `GetAPIAssociation` - Retrieves an <code>ApiAssociation</code> object.
* `GetAPICache` - Retrieves an <code>ApiCache</code> object.
* `GetDataSource` - Retrieves a <code>DataSource</code> object.
* `GetDomainName` - Retrieves a custom <code>DomainName</code> object.
* `GetFunction` - Get a <code>Function</code>.
* `GetGraphqlAPI` - Retrieves a <code>GraphqlApi</code> object.
* `GetIntrospectionSchema` - Retrieves the introspection schema for a GraphQL API.
* `GetResolver` - Retrieves a <code>Resolver</code> object.
* `GetSchemaCreationStatus` - Retrieves the current status of a schema creation operation.
* `GetType` - Retrieves a <code>Type</code> object.
* `ListAPIKeys` - <p>Lists the API keys for a given API.</p> <note> <p>API keys are deleted automatically 60 days after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call <code>DeleteApiKey</code> to manually delete a key before it's automatically deleted.</p> </note>
* `ListDataSources` - Lists the data sources for a given API.
* `ListDomainNames` - Lists multiple custom domain names.
* `ListFunctions` - List multiple functions.
* `ListGraphqlApis` - Lists your GraphQL APIs.
* `ListResolvers` - Lists the resolvers for a given API and type.
* `ListResolversByFunction` - List the resolvers that are associated with a specific function.
* `ListTagsForResource` - Lists the tags for a resource.
* `ListTypes` - Lists the types for a given API.
* `StartSchemaCreation` - <p>Adds a new schema to your GraphQL API.</p> <p>This operation is asynchronous. Use to determine when it has completed.</p>
* `TagResource` - Tags a resource with user-supplied tags.
* `UntagResource` - Untags a resource.
* `UpdateAPICache` - Updates the cache for the GraphQL API.
* `UpdateAPIKey` - Updates an API key. You can update the key as long as it's not deleted.
* `UpdateDataSource` - Updates a <code>DataSource</code> object.
* `UpdateDomainName` - Updates a custom <code>DomainName</code> object.
* `UpdateFunction` - Updates a <code>Function</code> object.
* `UpdateGraphqlAPI` - Updates a <code>GraphqlApi</code> object.
* `UpdateResolver` - Updates a <code>Resolver</code> object.
* `UpdateType` - Updates a <code>Type</code> object.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
