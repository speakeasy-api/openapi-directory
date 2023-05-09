# api

### Available Operations

* [createApi](#createapi) - Create API
* [createApiVersion](#createapiversion) - Create API Version
* [createCollectionFromSchema](#createcollectionfromschema) - Create collection from schema
* [createRelations](#createrelations) - Create relations
* [createSchema](#createschema) - Create Schema
* [deleteAnApi](#deleteanapi) - Delete an API
* [deleteAnApiVersion](#deleteanapiversion) - Delete an API Version
* [getAllApIs](#getallapis) - Get all APIs
* [getAllApiVersions](#getallapiversions) - Get All API Versions
* [getAnApiVersion](#getanapiversion) - Get an API Version
* [getContractTestRelations](#getcontracttestrelations) - Get contract test relations
* [getDocumentationRelations](#getdocumentationrelations) - Get  documentation relations
* [getEnvironmentRelations](#getenvironmentrelations) - Get environment relations
* [getIntegrationTestRelations](#getintegrationtestrelations) - Get integration test relations
* [getLinkedRelations](#getlinkedrelations) - Get linked relations
* [getMonitorRelations](#getmonitorrelations) - Get monitor relations
* [getSchema](#getschema) - Get Schema
* [getTestSuiteRelations](#gettestsuiterelations) - Get test suite relations
* [singleApi](#singleapi) - Single API
* [syncRelationsWithSchema](#syncrelationswithschema) - Sync relations with schema
* [updateAnApi](#updateanapi) - Update an API
* [updateAnApiVersion](#updateanapiversion) - Update an API Version
* [updateSchema](#updateschema) - Update Schema

## createApi

This call creates a new API with a default API Version.  

Request body should contain an `api` object which should atleast have a property `name`.

Response contains an `api` object with all the details related to the created API, namely, `id`, `name`, `summary`, `description`, etc. 

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApiRequest;
import org.openapis.openapi.models.operations.CreateApiRequestBody;
import org.openapis.openapi.models.operations.CreateApiRequestBodyApi;
import org.openapis.openapi.models.operations.CreateApiResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateApiRequest req = new CreateApiRequest() {{
                requestBody = new CreateApiRequestBody() {{
                    api = new CreateApiRequestBodyApi() {{
                        description = "This is description.";
                        name = "Sync Service API";
                        summary = "This is supposed to be a short summary.";
                    }};;
                }};;
                workspace = "{{workspaceId}}";
            }};            

            CreateApiResponse res = sdk.api.createApi(req);

            if (res.createApi200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createApiVersion

This call creates a new API version in the specified API.  

Request body should contain a `version` object which should have fields:

<table>
<tr>
	<td>name</td>
	<td>Required. Name of the API Version</td>
</tr>
<tr>
	<td>source</td>
	<td>
		If specified, it will copy the contents of the specified api version to create a new api verison.
		<table>
			<tr>
				<td>id</td>
				<td>Required. Id of the apiversion from where the details are to be copied</td>
			</tr>
			<tr>
				<td>schema</td>
				<td>Boolean. If true then copies the schema from the specified api version</td>
			</tr>
			<tr>
				<td>relations</td>
				<td>Object. {"&lt;relationType&gt;": true/false}.  
					Allowed relation types are `mock`, `monitor`, `documentation`, `contracttest`, `integrationtest`, `testsuite`, `environment`
				Relation types which should be copied over to the new api verison</td>
			</tr>
		</table>
	</td>
</tr>
</table>

Response contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApiVersionRequest;
import org.openapis.openapi.models.operations.CreateApiVersionRequestBody;
import org.openapis.openapi.models.operations.CreateApiVersionRequestBodyVersion;
import org.openapis.openapi.models.operations.CreateApiVersionRequestBodyVersionSource;
import org.openapis.openapi.models.operations.CreateApiVersionRequestBodyVersionSourceRelations;
import org.openapis.openapi.models.operations.CreateApiVersionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateApiVersionRequest req = new CreateApiVersionRequest("corrupti") {{
                requestBody = new CreateApiVersionRequestBody() {{
                    version = new CreateApiVersionRequestBodyVersion() {{
                        name = "1.0";
                        source = new CreateApiVersionRequestBodyVersionSource() {{
                            id = "{{apiVersionId}}";
                            relations = new CreateApiVersionRequestBodyVersionSourceRelations() {{
                                documentation = true;
                                mock = true;
                                monitor = true;
                            }};;
                            schema = true;
                        }};;
                    }};;
                }};;
            }};            

            CreateApiVersionResponse res = sdk.api.createApiVersion(req);

            if (res.createApiVersion200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCollectionFromSchema

This call creates a collection and links it to an API as one or multiple relations. 

Request body requires two keys:
- `name` - Name of the collection to be created.
- `relations` - A list of relation(s) to be created.

The allowed relation types are `contracttest`, `integrationtest`, `testsuite`, and `documentation`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCollectionFromSchemaRequest;
import org.openapis.openapi.models.operations.CreateCollectionFromSchemaRequestBody;
import org.openapis.openapi.models.operations.CreateCollectionFromSchemaRequestBodyRelations;
import org.openapis.openapi.models.operations.CreateCollectionFromSchemaResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCollectionFromSchemaRequest req = new CreateCollectionFromSchemaRequest("provident", "distinctio", "quibusdam") {{
                requestBody = new CreateCollectionFromSchemaRequestBody() {{
                    name = "My generated collection";
                    relations = new org.openapis.openapi.models.operations.CreateCollectionFromSchemaRequestBodyRelations[]{{
                        add(new CreateCollectionFromSchemaRequestBodyRelations() {{
                            type = "contracttest";
                        }}),
                        add(new CreateCollectionFromSchemaRequestBodyRelations() {{
                            type = "contracttest";
                        }}),
                        add(new CreateCollectionFromSchemaRequestBodyRelations() {{
                            type = "contracttest";
                        }}),
                    }};
                }};;
                workspace = "{{workspaceId}}";
            }};            

            CreateCollectionFromSchemaResponse res = sdk.api.createCollectionFromSchema(req);

            if (res.createCollectionFromSchema200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRelations

This call allows you to add existing Postman entities as new relations to an API. The request body should contain the relations to be created along with an array of entity IDs. 

<table>
  <tr>
    <th>Relation</th>
    <th>Entity ID type</th>
  <tr>
  <tr>
    <td>contracttest</td>
    <td>Collection UIDs</td>
  </tr>
  <tr>
    <td>integrationtest</td>
    <td>Collection UIDs</td>
  </tr>
  <tr>
    <td>documentation</td>
    <td>Collection UIDs</td>
  </tr>
  <tr>
    <td>testsuite</td>
    <td>Collection UIDs</td>
  </tr>
  <tr>
    <td>environment</td>
    <td>Environment UIDs</td>
  </tr>
  <tr>
    <td>mock</td>
    <td>Mock IDs</td>
  </tr>
  <tr>
    <td>monitor</td>
    <td>Monitor IDs</td>
  </tr>
</table>

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRelationsRequest;
import org.openapis.openapi.models.operations.CreateRelationsRequestBody;
import org.openapis.openapi.models.operations.CreateRelationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateRelationsRequest req = new CreateRelationsRequest("nulla", "corrupti") {{
                requestBody = new CreateRelationsRequestBody() {{
                    contracttest = new String[]{{
                        add("collection-uid-1"),
                        add("collection-uid-1"),
                        add("collection-uid-1"),
                        add("collection-uid-1"),
                    }};
                    documentation = new String[]{{
                        add("collection-uid-3"),
                        add("collection-uid-3"),
                    }};
                    mock = new String[]{{
                        add("mock-uid-1"),
                        add("mock-uid-1"),
                        add("mock-uid-1"),
                    }};
                    testsuite = new String[]{{
                        add("collection-uid-1"),
                        add("collection-uid-1"),
                        add("collection-uid-1"),
                    }};
                }};;
            }};            

            CreateRelationsResponse res = sdk.api.createRelations(req);

            if (res.createRelations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSchema

This call creates a new schema.

Request body should contain a `schema` object which should atleast have these properties with `string` values:

- **`type`**: Allowed types are `openapi3`, `openapi2`, `openapi1`, `raml` and `graphql`.
- **`language`** : Allowed languages are `json` and `yaml` for OpenAPI and RAML schema types. GraphQL schema type accepts only `graphql` language.
- **`schema`**: Optional. If passed, must be the content of the schema as a `string`.

Response contains a `schema` object with all the details related to the created schema, namely, `id`, `language`, `type` etc. 

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSchemaRequest;
import org.openapis.openapi.models.operations.CreateSchemaRequestBody;
import org.openapis.openapi.models.operations.CreateSchemaRequestBodySchema;
import org.openapis.openapi.models.operations.CreateSchemaResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSchemaRequest req = new CreateSchemaRequest("suscipit", "iure") {{
                requestBody = new CreateSchemaRequestBody() {{
                    schema = new CreateSchemaRequestBodySchema() {{
                        language = "yaml";
                        schema = "{
                      "openapi": "3.0.0",
                      "info": null,
                      "version": "v1.0",
                      "title": "APi",
                      "servers": [
                        {
                          "url": "http://localhost:3000"
                        }
                      ],
                      "paths": {
                        "/user": {
                          "get": {
                            "summary": "Returns details about a particular user",
                            "operationId": "listUser",
                            "tags": [
                              "user"
                            ],
                            "parameters": [
                              {
                                "name": "id",
                                "in": "query",
                                "description": "ID of the user",
                                "required": true,
                                "schema": {
                                  "type": "integer",
                                  "format": "int32"
                                }
                              }
                            ],
                            "responses": {
                              "200": {
                                "description": "Details about a user by ID",
                                "headers": {
                                  "x-next": {
                                    "description": "A link to the next page of responses",
                                    "schema": {
                                      "type": "string"
                                    }
                                  }
                                },
                                "content": {
                                  "application/json": {
                                    "schema": {
                                      "$ref": "\\'#/components/schemas/User\\'"
                                    }
                                  }
                                }
                              },
                              "default": {
                                "description": "Unexpected error",
                                "content": {
                                  "application/json": {
                                    "schema": {
                                      "$ref": "\\'#/components/schemas/Error\\'"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "components": {
                        "schemas": {
                          "User": {
                            "type": "object",
                            "required": [
                              "id",
                              "name"
                            ],
                            "properties": {
                              "id": {
                                "type": "integer",
                                "format": "int64"
                              },
                              "name": {
                                "type": "string"
                              },
                              "tag": {
                                "type": "string"
                              }
                            }
                          },
                          "Error": {
                            "type": "object",
                            "required": [
                              "code",
                              "message"
                            ],
                            "properties": {
                              "code": {
                                "type": "integer",
                                "format": "int32"
                              },
                              "message": {
                                "type": "string"
                              }
                            }
                          }
                        }
                      }
                    }";
                        type = "openapi3";
                    }};;
                }};;
            }};            

            CreateSchemaResponse res = sdk.api.createSchema(req);

            if (res.createSchema200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAnApi

This call deletes an existing API having the specified id.  

Response contains an `api` object with `id` of the API which was deleted.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAnApiRequest;
import org.openapis.openapi.models.operations.DeleteAnApiResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAnApiRequest req = new DeleteAnApiRequest("magnam");            

            DeleteAnApiResponse res = sdk.api.deleteAnApi(req);

            if (res.deleteAnApi200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAnApiVersion

This call deletes an existing API Version having the specified id.  

Response contains an `version` object with `id` of the API Version which was deleted.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAnApiVersionRequest;
import org.openapis.openapi.models.operations.DeleteAnApiVersionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAnApiVersionRequest req = new DeleteAnApiVersionRequest("debitis", "ipsa");            

            DeleteAnApiVersionResponse res = sdk.api.deleteAnApiVersion(req);

            if (res.deleteAnApiVersion200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllApIs

This call fetches all the APIs present in the specified workspace

Response contains an array named `apis` which would contain all the details of APIs present in the workspace.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllApIsRequest;
import org.openapis.openapi.models.operations.GetAllApIsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllApIsRequest req = new GetAllApIsRequest() {{
                createdBy = "{{createdBy}}";
                description = "{{description}}";
                direction = "{{direction}}";
                isPublic = "{{isPublic}}";
                name = "{{name}}";
                since = "{{since}}";
                sort = "{{sort}}";
                summary = "{{summary}}";
                until = "{{until}}";
                updatedBy = "{{updatedBy}}";
                workspace = "{{workspaceId}}";
            }};            

            GetAllApIsResponse res = sdk.api.getAllApIs(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllApiVersions

This call fetches details about the all the API Versions in the specified API.

The response will contain an array `versions` object which would be a list of all the API Version along with their details.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllApiVersionsRequest;
import org.openapis.openapi.models.operations.GetAllApiVersionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllApiVersionsRequest req = new GetAllApiVersionsRequest("delectus");            

            GetAllApiVersionsResponse res = sdk.api.getAllApiVersions(req);

            if (res.getAllApiVersions200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAnApiVersion

This call fetches details about the specified API Version.

The response will contain a `version` object which would contain all the details of the API Version.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnApiVersionRequest;
import org.openapis.openapi.models.operations.GetAnApiVersionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAnApiVersionRequest req = new GetAnApiVersionRequest("tempora", "suscipit");            

            GetAnApiVersionResponse res = sdk.api.getAnApiVersion(req);

            if (res.getAnApiVersion200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContractTestRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContractTestRelationsRequest;
import org.openapis.openapi.models.operations.GetContractTestRelationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContractTestRelationsRequest req = new GetContractTestRelationsRequest("molestiae", "minus");            

            GetContractTestRelationsResponse res = sdk.api.getContractTestRelations(req);

            if (res.getContractTestRelations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDocumentationRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDocumentationRelationsRequest;
import org.openapis.openapi.models.operations.GetDocumentationRelationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDocumentationRelationsRequest req = new GetDocumentationRelationsRequest("placeat", "voluptatum");            

            GetDocumentationRelationsResponse res = sdk.api.getDocumentationRelations(req);

            if (res.getDocumentationRelations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnvironmentRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnvironmentRelationsRequest;
import org.openapis.openapi.models.operations.GetEnvironmentRelationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEnvironmentRelationsRequest req = new GetEnvironmentRelationsRequest("iusto", "excepturi");            

            GetEnvironmentRelationsResponse res = sdk.api.getEnvironmentRelations(req);

            if (res.getEnvironmentRelations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIntegrationTestRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIntegrationTestRelationsRequest;
import org.openapis.openapi.models.operations.GetIntegrationTestRelationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIntegrationTestRelationsRequest req = new GetIntegrationTestRelationsRequest("nisi", "recusandae");            

            GetIntegrationTestRelationsResponse res = sdk.api.getIntegrationTestRelations(req);

            if (res.getIntegrationTestRelations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLinkedRelations

This call fetches all the relations which are linked to the specified API version along with their details.

The response will contain a `relations` object which lists all the relation types which are linked to the API version. Each of the relation type will be an object which details the relations of this type. 

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLinkedRelationsRequest;
import org.openapis.openapi.models.operations.GetLinkedRelationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLinkedRelationsRequest req = new GetLinkedRelationsRequest("temporibus", "ab");            

            GetLinkedRelationsResponse res = sdk.api.getLinkedRelations(req);

            if (res.getLinkedRelations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMonitorRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMonitorRelationsRequest;
import org.openapis.openapi.models.operations.GetMonitorRelationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMonitorRelationsRequest req = new GetMonitorRelationsRequest("quis", "veritatis");            

            GetMonitorRelationsResponse res = sdk.api.getMonitorRelations(req);

            if (res.getMonitorRelations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchema

This call fetches a single schema having the specified id.

Response contains a `schema` object with all the details related to the schema, namely, `id`, `language`, `type`, `schema` etc. 

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchemaRequest;
import org.openapis.openapi.models.operations.GetSchemaResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSchemaRequest req = new GetSchemaRequest("deserunt", "perferendis", "ipsam");            

            GetSchemaResponse res = sdk.api.getSchema(req);

            if (res.getSchema200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTestSuiteRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTestSuiteRelationsRequest;
import org.openapis.openapi.models.operations.GetTestSuiteRelationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTestSuiteRelationsRequest req = new GetTestSuiteRelationsRequest("repellendus", "sapiente");            

            GetTestSuiteRelationsResponse res = sdk.api.getTestSuiteRelations(req);

            if (res.getTestSuiteRelations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## singleApi

This call fetches a single API having the specified id.

Response contains an `api` object with all the details related to the queried API, namely, `id`, `name`, `summary`, `description` etc. 

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SingleApiRequest;
import org.openapis.openapi.models.operations.SingleApiResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SingleApiRequest req = new SingleApiRequest("quo");            

            SingleApiResponse res = sdk.api.singleApi(req);

            if (res.singleApi200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## syncRelationsWithSchema

This call allows you to keep the relation in sync with the API schema.


> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SyncRelationsWithSchemaRequest;
import org.openapis.openapi.models.operations.SyncRelationsWithSchemaResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SyncRelationsWithSchemaRequest req = new SyncRelationsWithSchemaRequest("{{apiId}}", "{{apiVersionId}}", "{{entityId}}", "{{entityType}}");            

            SyncRelationsWithSchemaResponse res = sdk.api.syncRelationsWithSchema(req);

            if (res.syncRelationsWithSchema200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAnApi

This call updates an existing API .  

Request body should contain an `api` object which should have the fields to be updated. Only `name`, `summary` and `description` fields can be edited for an API.

Response contains an `api` object with all the details related to the created API, namely, `id`, `name`, `summary`, `description` etc. 

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAnApiRequest;
import org.openapis.openapi.models.operations.UpdateAnApiRequestBody;
import org.openapis.openapi.models.operations.UpdateAnApiRequestBodyApi;
import org.openapis.openapi.models.operations.UpdateAnApiResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAnApiRequest req = new UpdateAnApiRequest("odit") {{
                requestBody = new UpdateAnApiRequestBody() {{
                    api = new UpdateAnApiRequestBodyApi() {{
                        description = "This is an updated Description";
                        name = "New name";
                    }};;
                }};;
            }};            

            UpdateAnApiResponse res = sdk.api.updateAnApi(req);

            if (res.updateAnApi200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAnApiVersion

This call updates an existing API Version.  

Request body should contain a `version` object with the fields which need to be updated. Only field which can be updated is `name`.

Response contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api` etc.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAnApiVersionRequest;
import org.openapis.openapi.models.operations.UpdateAnApiVersionRequestBody;
import org.openapis.openapi.models.operations.UpdateAnApiVersionRequestBodyVersion;
import org.openapis.openapi.models.operations.UpdateAnApiVersionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAnApiVersionRequest req = new UpdateAnApiVersionRequest("at", "at") {{
                requestBody = new UpdateAnApiVersionRequestBody() {{
                    version = new UpdateAnApiVersionRequestBodyVersion() {{
                        name = "2.0";
                    }};;
                }};;
            }};            

            UpdateAnApiVersionResponse res = sdk.api.updateAnApiVersion(req);

            if (res.updateAnApiVersion200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSchema

This call updates an existing schema.

Request body should contain a `schema` object which should atleast have these properties with `string` values:

- **`type`**: Allowed types are `openapi3`, `openapi2`, `openapi1`, `raml` and `graphql`.
- **`language`** : Allowed languages are `json` and `yaml` for OpenAPI and RAML schema types. GraphQL schema type accepts only `graphql` language.
- **`schema`**: Optional. If passed, must be the content of the schema as a `string`.

Response contains a `schema` object with all the details related to the created schema, namely, `id`, `language`, `type` etc. 

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSchemaRequest;
import org.openapis.openapi.models.operations.UpdateSchemaRequestBody;
import org.openapis.openapi.models.operations.UpdateSchemaRequestBodySchema;
import org.openapis.openapi.models.operations.UpdateSchemaResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSchemaRequest req = new UpdateSchemaRequest("maiores", "molestiae", "quod") {{
                requestBody = new UpdateSchemaRequestBody() {{
                    schema = new UpdateSchemaRequestBodySchema() {{
                        language = "json";
                        schema = "{
                      "openapi": "3.0.0",
                      "info": null,
                      "version": "v1.0",
                      "title": "APi",
                      "servers": [
                        {
                          "url": "http://localhost:3000"
                        }
                      ],
                      "paths": {
                        "/user": {
                          "get": {
                            "summary": "Returns details about a particular user",
                            "operationId": "listUser",
                            "tags": [
                              "user"
                            ],
                            "parameters": [
                              {
                                "name": "id",
                                "in": "query",
                                "description": "ID of the user",
                                "required": true,
                                "schema": {
                                  "type": "integer",
                                  "format": "int32"
                                }
                              }
                            ],
                            "responses": {
                              "200": {
                                "description": "Details about a user by ID",
                                "headers": {
                                  "x-next": {
                                    "description": "A link to the next page of responses",
                                    "schema": {
                                      "type": "string"
                                    }
                                  }
                                },
                                "content": {
                                  "application/json": {
                                    "schema": {
                                      "$ref": "\\'#/components/schemas/User\\'"
                                    }
                                  }
                                }
                              },
                              "default": {
                                "description": "Unexpected error",
                                "content": {
                                  "application/json": {
                                    "schema": {
                                      "$ref": "\\'#/components/schemas/Error\\'"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "components": {
                        "schemas": {
                          "User": {
                            "type": "object",
                            "required": [
                              "id",
                              "name"
                            ],
                            "properties": {
                              "id": {
                                "type": "integer",
                                "format": "int64"
                              },
                              "name": {
                                "type": "string"
                              },
                              "tag": {
                                "type": "string"
                              }
                            }
                          },
                          "Error": {
                            "type": "object",
                            "required": [
                              "code",
                              "message"
                            ],
                            "properties": {
                              "code": {
                                "type": "integer",
                                "format": "int32"
                              },
                              "message": {
                                "type": "string"
                              }
                            }
                          }
                        }
                      }
                    }";
                        type = "openapi3";
                    }};;
                }};;
            }};            

            UpdateSchemaResponse res = sdk.api.updateSchema(req);

            if (res.updateSchema200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
