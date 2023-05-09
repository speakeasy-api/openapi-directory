# Schema

## Overview

This folder contains all the endpoints related to Schemas.

### Available Operations

* [CreateCollectionFromSchema](#createcollectionfromschema) - Create collection from schema
* [CreateSchema](#createschema) - Create Schema
* [GetSchema](#getschema) - Get Schema
* [UpdateSchema](#updateschema) - Update Schema

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
    res, err := s.Schema.CreateCollectionFromSchema(ctx, operations.CreateCollectionFromSchemaRequest{
        RequestBody: &operations.CreateCollectionFromSchemaRequestBody{
            Name: sdk.String("My generated collection"),
            Relations: []CreateCollectionFromSchemaRequestBodyRelations{
                operations.CreateCollectionFromSchemaRequestBodyRelations{
                    Type: sdk.String("contracttest"),
                },
            },
        },
        APIID: "mollitia",
        APIVersionID: "dolorem",
        SchemaID: "culpa",
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
    res, err := s.Schema.CreateSchema(ctx, operations.CreateSchemaRequest{
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
        APIID: "consequuntur",
        APIVersionID: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSchema200ApplicationJSONObject != nil {
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
    res, err := s.Schema.GetSchema(ctx, operations.GetSchemaRequest{
        APIID: "mollitia",
        APIVersionID: "occaecati",
        SchemaID: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSchema200ApplicationJSONObject != nil {
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
    res, err := s.Schema.UpdateSchema(ctx, operations.UpdateSchemaRequest{
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
        APIID: "commodi",
        APIVersionID: "quam",
        SchemaID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSchema200ApplicationJSONObject != nil {
        // handle response
    }
}
```
