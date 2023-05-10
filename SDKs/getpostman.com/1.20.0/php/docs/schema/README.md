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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCollectionFromSchemaRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCollectionFromSchemaRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateCollectionFromSchemaRequestBodyRelations;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCollectionFromSchemaRequest();
    $request->requestBody = new CreateCollectionFromSchemaRequestBody();
    $request->requestBody->name = 'My generated collection';
    $request->requestBody->relations = [
        new CreateCollectionFromSchemaRequestBodyRelations(),
        new CreateCollectionFromSchemaRequestBodyRelations(),
        new CreateCollectionFromSchemaRequestBodyRelations(),
        new CreateCollectionFromSchemaRequestBodyRelations(),
    ];
    $request->apiId = 'enim';
    $request->apiVersionId = 'omnis';
    $request->schemaId = 'nemo';
    $request->workspace = '{{workspaceId}}';

    $response = $sdk->schema->createCollectionFromSchema($request);

    if ($response->createCollectionFromSchema200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSchemaRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSchemaRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateSchemaRequestBodySchema;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSchemaRequest();
    $request->requestBody = new CreateSchemaRequestBody();
    $request->requestBody->schema = new CreateSchemaRequestBodySchema();
    $request->requestBody->schema->language = 'yaml';
    $request->requestBody->schema->schema = '{
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
    }';
    $request->requestBody->schema->type = 'openapi3';
    $request->apiId = 'minima';
    $request->apiVersionId = 'excepturi';

    $response = $sdk->schema->createSchema($request);

    if ($response->createSchema200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchema

This call fetches a single schema having the specified id.

Response contains a `schema` object with all the details related to the schema, namely, `id`, `language`, `type`, `schema` etc. 

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSchemaRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchemaRequest();
    $request->apiId = 'accusantium';
    $request->apiVersionId = 'iure';
    $request->schemaId = 'culpa';

    $response = $sdk->schema->getSchema($request);

    if ($response->getSchema200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSchemaRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSchemaRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSchemaRequestBodySchema;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSchemaRequest();
    $request->requestBody = new UpdateSchemaRequestBody();
    $request->requestBody->schema = new UpdateSchemaRequestBodySchema();
    $request->requestBody->schema->language = 'json';
    $request->requestBody->schema->schema = '{
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
    }';
    $request->requestBody->schema->type = 'openapi3';
    $request->apiId = 'doloribus';
    $request->apiVersionId = 'sapiente';
    $request->schemaId = 'architecto';

    $response = $sdk->schema->updateSchema($request);

    if ($response->updateSchema200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
