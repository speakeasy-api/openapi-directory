# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/appsync/2017-07-25/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateAPIRequest(
    request_body=operations.AssociateAPIRequestBody(
        api_id="corrupti",
    ),
    x_amz_algorithm="provident",
    x_amz_content_sha256="distinctio",
    x_amz_credential="quibusdam",
    x_amz_date="unde",
    x_amz_security_token="nulla",
    x_amz_signature="corrupti",
    x_amz_signed_headers="illum",
    domain_name="vel",
)
    
res = s.associate_api(req)

if res.associate_api_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `associate_api` - Maps an endpoint to your custom domain.
* `create_api_cache` - Creates a cache for the GraphQL API.
* `create_api_key` - Creates a unique key that you can distribute to clients who invoke your API.
* `create_data_source` - Creates a <code>DataSource</code> object.
* `create_domain_name` - Creates a custom <code>DomainName</code> object.
* `create_function` - <p>Creates a <code>Function</code> object.</p> <p>A function is a reusable entity. You can use multiple functions to compose the resolver logic.</p>
* `create_graphql_api` - Creates a <code>GraphqlApi</code> object.
* `create_resolver` - <p>Creates a <code>Resolver</code> object.</p> <p>A resolver converts incoming requests into a format that a data source can understand, and converts the data source's responses into GraphQL.</p>
* `create_type` - Creates a <code>Type</code> object.
* `delete_api_cache` - Deletes an <code>ApiCache</code> object.
* `delete_api_key` - Deletes an API key.
* `delete_data_source` - Deletes a <code>DataSource</code> object.
* `delete_domain_name` - Deletes a custom <code>DomainName</code> object.
* `delete_function` - Deletes a <code>Function</code>.
* `delete_graphql_api` - Deletes a <code>GraphqlApi</code> object.
* `delete_resolver` - Deletes a <code>Resolver</code> object.
* `delete_type` - Deletes a <code>Type</code> object.
* `disassociate_api` - Removes an <code>ApiAssociation</code> object from a custom domain.
* `evaluate_code` - Evaluates the given code and returns the response. The code definition requirements depend on the specified runtime. For <code>APPSYNC_JS</code> runtimes, the code defines the request and response functions. The request function takes the incoming request after a GraphQL operation is parsed and converts it into a request configuration for the selected data source operation. The response function interprets responses from the data source and maps it to the shape of the GraphQL field output type. 
* `evaluate_mapping_template` - <p>Evaluates a given template and returns the response. The mapping template can be a request or response template.</p> <p>Request templates take the incoming request after a GraphQL operation is parsed and convert it into a request configuration for the selected data source operation. Response templates interpret responses from the data source and map it to the shape of the GraphQL field output type.</p> <p>Mapping templates are written in the Apache Velocity Template Language (VTL).</p>
* `flush_api_cache` - Flushes an <code>ApiCache</code> object.
* `get_api_association` - Retrieves an <code>ApiAssociation</code> object.
* `get_api_cache` - Retrieves an <code>ApiCache</code> object.
* `get_data_source` - Retrieves a <code>DataSource</code> object.
* `get_domain_name` - Retrieves a custom <code>DomainName</code> object.
* `get_function` - Get a <code>Function</code>.
* `get_graphql_api` - Retrieves a <code>GraphqlApi</code> object.
* `get_introspection_schema` - Retrieves the introspection schema for a GraphQL API.
* `get_resolver` - Retrieves a <code>Resolver</code> object.
* `get_schema_creation_status` - Retrieves the current status of a schema creation operation.
* `get_type` - Retrieves a <code>Type</code> object.
* `list_api_keys` - <p>Lists the API keys for a given API.</p> <note> <p>API keys are deleted automatically 60 days after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call <code>DeleteApiKey</code> to manually delete a key before it's automatically deleted.</p> </note>
* `list_data_sources` - Lists the data sources for a given API.
* `list_domain_names` - Lists multiple custom domain names.
* `list_functions` - List multiple functions.
* `list_graphql_apis` - Lists your GraphQL APIs.
* `list_resolvers` - Lists the resolvers for a given API and type.
* `list_resolvers_by_function` - List the resolvers that are associated with a specific function.
* `list_tags_for_resource` - Lists the tags for a resource.
* `list_types` - Lists the types for a given API.
* `start_schema_creation` - <p>Adds a new schema to your GraphQL API.</p> <p>This operation is asynchronous. Use to determine when it has completed.</p>
* `tag_resource` - Tags a resource with user-supplied tags.
* `untag_resource` - Untags a resource.
* `update_api_cache` - Updates the cache for the GraphQL API.
* `update_api_key` - Updates an API key. You can update the key as long as it's not deleted.
* `update_data_source` - Updates a <code>DataSource</code> object.
* `update_domain_name` - Updates a custom <code>DomainName</code> object.
* `update_function` - Updates a <code>Function</code> object.
* `update_graphql_api` - Updates a <code>GraphqlApi</code> object.
* `update_resolver` - Updates a <code>Resolver</code> object.
* `update_type` - Updates a <code>Type</code> object.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
