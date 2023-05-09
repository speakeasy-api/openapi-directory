# API

### Available Operations

* [CreateAPI](#createapi) - Create API
* [CreateAPIVersion](#createapiversion) - Create API Version
* [CreateCollectionFromSchema](#createcollectionfromschema) - Create collection from schema
* [CreateRelations](#createrelations) - Create relations
* [CreateSchema](#createschema) - Create Schema
* [DeleteAnAPI](#deleteanapi) - Delete an API
* [DeleteAnAPIVersion](#deleteanapiversion) - Delete an API Version
* [GetAllApIs](#getallapis) - Get all APIs
* [GetAllAPIVersions](#getallapiversions) - Get All API Versions
* [GetAnAPIVersion](#getanapiversion) - Get an API Version
* [GetContractTestRelations](#getcontracttestrelations) - Get contract test relations
* [GetDocumentationRelations](#getdocumentationrelations) - Get  documentation relations
* [GetEnvironmentRelations](#getenvironmentrelations) - Get environment relations
* [GetIntegrationTestRelations](#getintegrationtestrelations) - Get integration test relations
* [GetLinkedRelations](#getlinkedrelations) - Get linked relations
* [GetMonitorRelations](#getmonitorrelations) - Get monitor relations
* [GetSchema](#getschema) - Get Schema
* [GetTestSuiteRelations](#gettestsuiterelations) - Get test suite relations
* [SingleAPI](#singleapi) - Single API
* [SyncRelationsWithSchema](#syncrelationswithschema) - Sync relations with schema
* [UpdateAnAPI](#updateanapi) - Update an API
* [UpdateAnAPIVersion](#updateanapiversion) - Update an API Version
* [UpdateSchema](#updateschema) - Update Schema

## CreateAPI

This call creates a new API with a default API Version.  

Request body should contain an `api` object which should atleast have a property `name`.

Response contains an `api` object with all the details related to the created API, namely, `id`, `name`, `summary`, `description`, etc. 

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.API.CreateAPI(ctx, operations.CreateAPIRequest{
        RequestBody: &operations.CreateAPIRequestBody{
            API: &operations.CreateAPIRequestBodyAPI{
                Description: sdk.String("This is description."),
                Name: sdk.String("Sync Service API"),
                Summary: sdk.String("This is supposed to be a short summary."),
            },
        },
        Workspace: sdk.String("{{workspaceId}}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAPI200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateAPIVersion

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.API.CreateAPIVersion(ctx, operations.CreateAPIVersionRequest{
        RequestBody: &operations.CreateAPIVersionRequestBody{
            Version: &operations.CreateAPIVersionRequestBodyVersion{
                Name: sdk.String("1.0"),
                Source: &operations.CreateAPIVersionRequestBodyVersionSource{
                    ID: sdk.String("{{apiVersionId}}"),
                    Relations: &operations.CreateAPIVersionRequestBodyVersionSourceRelations{
                        Documentation: sdk.Bool(true),
                        Mock: sdk.Bool(true),
                        Monitor: sdk.Bool(true),
                    },
                    Schema: sdk.Bool(true),
                },
            },
        },
        APIID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAPIVersion200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateCollectionFromSchema

This call creates a collection and links it to an API as one or multiple relations. 

Request body requires two keys:
- `name` - Name of the collection to be created.
- `relations` - A list of relation(s) to be created.

The allowed relation types are `contracttest`, `integrationtest`, `testsuite`, and `documentation`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.API.CreateCollectionFromSchema(ctx, operations.CreateCollectionFromSchemaRequest{
        RequestBody: &operations.CreateCollectionFromSchemaRequestBody{
            Name: sdk.String("My generated collection"),
            Relations: []CreateCollectionFromSchemaRequestBodyRelations{
                operations.CreateCollectionFromSchemaRequestBodyRelations{
                    Type: sdk.String("contracttest"),
                },
                operations.CreateCollectionFromSchemaRequestBodyRelations{
                    Type: sdk.String("contracttest"),
                },
                operations.CreateCollectionFromSchemaRequestBodyRelations{
                    Type: sdk.String("contracttest"),
                },
            },
        },
        APIID: "distinctio",
        APIVersionID: "quibusdam",
        SchemaID: "unde",
        Workspace: sdk.String("{{workspaceId}}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCollectionFromSchema200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateRelations

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.API.CreateRelations(ctx, operations.CreateRelationsRequest{
        RequestBody: &operations.CreateRelationsRequestBody{
            Contracttest: []string{
                "collection-uid-1",
                "collection-uid-1",
                "collection-uid-1",
                "collection-uid-1",
            },
            Documentation: []string{
                "collection-uid-3",
                "collection-uid-3",
                "collection-uid-3",
            },
            Mock: []string{
                "mock-uid-1",
                "mock-uid-1",
                "mock-uid-1",
                "mock-uid-1",
            },
            Testsuite: []string{
                "collection-uid-1",
                "collection-uid-1",
            },
        },
        APIID: "error",
        APIVersionID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRelations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateSchema

This call creates a new schema.

Request body should contain a `schema` object which should atleast have these properties with `string` values:

- **`type`**: Allowed types are `openapi3`, `openapi2`, `openapi1`, `raml` and `graphql`.
- **`language`** : Allowed languages are `json` and `yaml` for OpenAPI and RAML schema types. GraphQL schema type accepts only `graphql` language.
- **`schema`**: Optional. If passed, must be the content of the schema as a `string`.

Response contains a `schema` object with all the details related to the created schema, namely, `id`, `language`, `type` etc. 

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.API.CreateSchema(ctx, operations.CreateSchemaRequest{
        RequestBody: &operations.CreateSchemaRequestBody{
            Schema: &operations.CreateSchemaRequestBodySchema{
                Language: sdk.String("yaml"),
                Schema: sdk.String("{
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
            }"),
                Type: sdk.String("openapi3"),
            },
        },
        APIID: "suscipit",
        APIVersionID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSchema200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteAnAPI

This call deletes an existing API having the specified id.  

Response contains an `api` object with `id` of the API which was deleted.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.API.DeleteAnAPI(ctx, operations.DeleteAnAPIRequest{
        APIID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAnAPI200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteAnAPIVersion

This call deletes an existing API Version having the specified id.  

Response contains an `version` object with `id` of the API Version which was deleted.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.API.DeleteAnAPIVersion(ctx, operations.DeleteAnAPIVersionRequest{
        APIID: "debitis",
        APIVersionID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAnAPIVersion200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetAllApIs

This call fetches all the APIs present in the specified workspace

Response contains an array named `apis` which would contain all the details of APIs present in the workspace.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.API.GetAllApIs(ctx, operations.GetAllApIsRequest{
        CreatedBy: sdk.String("{{createdBy}}"),
        Description: sdk.String("{{description}}"),
        Direction: sdk.String("{{direction}}"),
        IsPublic: sdk.String("{{isPublic}}"),
        Name: sdk.String("{{name}}"),
        Since: sdk.String("{{since}}"),
        Sort: sdk.String("{{sort}}"),
        Summary: sdk.String("{{summary}}"),
        Until: sdk.String("{{until}}"),
        UpdatedBy: sdk.String("{{updatedBy}}"),
        Workspace: sdk.String("{{workspaceId}}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllAPIVersions

This call fetches details about the all the API Versions in the specified API.

The response will contain an array `versions` object which would be a list of all the API Version along with their details.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.API.GetAllAPIVersions(ctx, operations.GetAllAPIVersionsRequest{
        APIID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAllAPIVersions200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetAnAPIVersion

This call fetches details about the specified API Version.

The response will contain a `version` object which would contain all the details of the API Version.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.API.GetAnAPIVersion(ctx, operations.GetAnAPIVersionRequest{
        APIID: "tempora",
        APIVersionID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAnAPIVersion200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetContractTestRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.API.GetContractTestRelations(ctx, operations.GetContractTestRelationsRequest{
        APIID: "molestiae",
        APIVersionID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContractTestRelations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDocumentationRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.API.GetDocumentationRelations(ctx, operations.GetDocumentationRelationsRequest{
        APIID: "placeat",
        APIVersionID: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDocumentationRelations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetEnvironmentRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.API.GetEnvironmentRelations(ctx, operations.GetEnvironmentRelationsRequest{
        APIID: "iusto",
        APIVersionID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEnvironmentRelations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetIntegrationTestRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.API.GetIntegrationTestRelations(ctx, operations.GetIntegrationTestRelationsRequest{
        APIID: "nisi",
        APIVersionID: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetIntegrationTestRelations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetLinkedRelations

This call fetches all the relations which are linked to the specified API version along with their details.

The response will contain a `relations` object which lists all the relation types which are linked to the API version. Each of the relation type will be an object which details the relations of this type. 

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.API.GetLinkedRelations(ctx, operations.GetLinkedRelationsRequest{
        APIID: "temporibus",
        APIVersionID: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLinkedRelations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetMonitorRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.API.GetMonitorRelations(ctx, operations.GetMonitorRelationsRequest{
        APIID: "quis",
        APIVersionID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMonitorRelations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSchema

This call fetches a single schema having the specified id.

Response contains a `schema` object with all the details related to the schema, namely, `id`, `language`, `type`, `schema` etc. 

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.API.GetSchema(ctx, operations.GetSchemaRequest{
        APIID: "deserunt",
        APIVersionID: "perferendis",
        SchemaID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSchema200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTestSuiteRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.API.GetTestSuiteRelations(ctx, operations.GetTestSuiteRelationsRequest{
        APIID: "repellendus",
        APIVersionID: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTestSuiteRelations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SingleAPI

This call fetches a single API having the specified id.

Response contains an `api` object with all the details related to the queried API, namely, `id`, `name`, `summary`, `description` etc. 

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.API.SingleAPI(ctx, operations.SingleAPIRequest{
        APIID: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SingleAPI200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SyncRelationsWithSchema

This call allows you to keep the relation in sync with the API schema.


> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.API.SyncRelationsWithSchema(ctx, operations.SyncRelationsWithSchemaRequest{
        APIID: "{{apiId}}",
        APIVersionID: "{{apiVersionId}}",
        EntityID: "{{entityId}}",
        EntityType: "{{entityType}}",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncRelationsWithSchema200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateAnAPI

This call updates an existing API .  

Request body should contain an `api` object which should have the fields to be updated. Only `name`, `summary` and `description` fields can be edited for an API.

Response contains an `api` object with all the details related to the created API, namely, `id`, `name`, `summary`, `description` etc. 

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.API.UpdateAnAPI(ctx, operations.UpdateAnAPIRequest{
        RequestBody: &operations.UpdateAnAPIRequestBody{
            API: &operations.UpdateAnAPIRequestBodyAPI{
                Description: sdk.String("This is an updated Description"),
                Name: sdk.String("New name"),
            },
        },
        APIID: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAnAPI200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateAnAPIVersion

This call updates an existing API Version.  

Request body should contain a `version` object with the fields which need to be updated. Only field which can be updated is `name`.

Response contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api` etc.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.API.UpdateAnAPIVersion(ctx, operations.UpdateAnAPIVersionRequest{
        RequestBody: &operations.UpdateAnAPIVersionRequestBody{
            Version: &operations.UpdateAnAPIVersionRequestBodyVersion{
                Name: sdk.String("2.0"),
            },
        },
        APIID: "at",
        APIVersionID: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAnAPIVersion200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateSchema

This call updates an existing schema.

Request body should contain a `schema` object which should atleast have these properties with `string` values:

- **`type`**: Allowed types are `openapi3`, `openapi2`, `openapi1`, `raml` and `graphql`.
- **`language`** : Allowed languages are `json` and `yaml` for OpenAPI and RAML schema types. GraphQL schema type accepts only `graphql` language.
- **`schema`**: Optional. If passed, must be the content of the schema as a `string`.

Response contains a `schema` object with all the details related to the created schema, namely, `id`, `language`, `type` etc. 

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.API.UpdateSchema(ctx, operations.UpdateSchemaRequest{
        RequestBody: &operations.UpdateSchemaRequestBody{
            Schema: &operations.UpdateSchemaRequestBodySchema{
                Language: sdk.String("json"),
                Schema: sdk.String("{
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
            }"),
                Type: sdk.String("openapi3"),
            },
        },
        APIID: "maiores",
        APIVersionID: "molestiae",
        SchemaID: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSchema200ApplicationJSONObject != nil {
        // handle response
    }
}
```
