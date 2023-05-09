# schema

## Overview

This folder contains all the endpoints related to Schemas.

### Available Operations

* [createCollectionFromSchema](#createcollectionfromschema) - Create collection from schema
* [createSchema](#createschema) - Create Schema
* [getSchema](#getschema) - Get Schema
* [updateSchema](#updateschema) - Update Schema

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

            CreateCollectionFromSchemaRequest req = new CreateCollectionFromSchemaRequest("sapiente", "architecto", "mollitia") {{
                requestBody = new CreateCollectionFromSchemaRequestBody() {{
                    name = "My generated collection";
                    relations = new org.openapis.openapi.models.operations.CreateCollectionFromSchemaRequestBodyRelations[]{{
                        add(new CreateCollectionFromSchemaRequestBodyRelations() {{
                            type = "contracttest";
                        }}),
                    }};
                }};;
                workspace = "{{workspaceId}}";
            }};            

            CreateCollectionFromSchemaResponse res = sdk.schema.createCollectionFromSchema(req);

            if (res.createCollectionFromSchema200ApplicationJSONObject != null) {
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

            CreateSchemaRequest req = new CreateSchemaRequest("culpa", "consequuntur") {{
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

            CreateSchemaResponse res = sdk.schema.createSchema(req);

            if (res.createSchema200ApplicationJSONObject != null) {
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

            GetSchemaRequest req = new GetSchemaRequest("repellat", "mollitia", "occaecati");            

            GetSchemaResponse res = sdk.schema.getSchema(req);

            if (res.getSchema200ApplicationJSONObject != null) {
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

            UpdateSchemaRequest req = new UpdateSchemaRequest("numquam", "commodi", "quam") {{
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

            UpdateSchemaResponse res = sdk.schema.updateSchema(req);

            if (res.updateSchema200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
