# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateApiCacheRequest req = new CreateApiCacheRequest() {{
                pathParams = new CreateApiCachePathParams() {{
                    apiId = "aut";
                }};
                headers = new CreateApiCacheHeaders() {{
                    xAmzAlgorithm = "et";
                    xAmzContentSha256 = "qui";
                    xAmzCredential = "atque";
                    xAmzDate = "praesentium";
                    xAmzSecurityToken = "perferendis";
                    xAmzSignature = "ab";
                    xAmzSignedHeaders = "cumque";
                }};
                request = new CreateApiCacheRequestBody() {{
                    apiCachingBehavior = "FULL_REQUEST_CACHING";
                    atRestEncryptionEnabled = false;
                    transitEncryptionEnabled = true;
                    ttl = 1541276666071085218;
                    type = "SMALL";
                }};
            }};

            CreateApiCacheResponse res = sdk.createApiCache(req);

            if (res.createApiCacheResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createApiCache` - Creates a cache for the GraphQL API.
* `createApiKey` - Creates a unique key that you can distribute to clients who are executing your API.
* `createDataSource` - Creates a <code>DataSource</code> object.
* `createFunction` - <p>Creates a <code>Function</code> object.</p> <p>A function is a reusable entity. Multiple functions can be used to compose the resolver logic.</p>
* `createGraphqlApi` - Creates a <code>GraphqlApi</code> object.
* `createResolver` - <p>Creates a <code>Resolver</code> object.</p> <p>A resolver converts incoming requests into a format that a data source can understand and converts the data source's responses into GraphQL.</p>
* `createType` - Creates a <code>Type</code> object.
* `deleteApiCache` - Deletes an <code>ApiCache</code> object.
* `deleteApiKey` - Deletes an API key.
* `deleteDataSource` - Deletes a <code>DataSource</code> object.
* `deleteFunction` - Deletes a <code>Function</code>.
* `deleteGraphqlApi` - Deletes a <code>GraphqlApi</code> object.
* `deleteResolver` - Deletes a <code>Resolver</code> object.
* `deleteType` - Deletes a <code>Type</code> object.
* `flushApiCache` - Flushes an <code>ApiCache</code> object.
* `getApiCache` - Retrieves an <code>ApiCache</code> object.
* `getDataSource` - Retrieves a <code>DataSource</code> object.
* `getFunction` - Get a <code>Function</code>.
* `getGraphqlApi` - Retrieves a <code>GraphqlApi</code> object.
* `getIntrospectionSchema` - Retrieves the introspection schema for a GraphQL API.
* `getResolver` - Retrieves a <code>Resolver</code> object.
* `getSchemaCreationStatus` - Retrieves the current status of a schema creation operation.
* `getType` - Retrieves a <code>Type</code> object.
* `listApiKeys` - <p>Lists the API keys for a given API.</p> <note> <p>API keys are deleted automatically 60 days after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call <code>DeleteApiKey</code> to manually delete a key before it's automatically deleted.</p> </note>
* `listDataSources` - Lists the data sources for a given API.
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
* `updateApiKey` - Updates an API key. The key can be updated while it is not deleted.
* `updateDataSource` - Updates a <code>DataSource</code> object.
* `updateFunction` - Updates a <code>Function</code> object.
* `updateGraphqlApi` - Updates a <code>GraphqlApi</code> object.
* `updateResolver` - Updates a <code>Resolver</code> object.
* `updateType` - Updates a <code>Type</code> object.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
