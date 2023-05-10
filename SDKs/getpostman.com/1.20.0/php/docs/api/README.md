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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiRequestBodyApi;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApiRequest();
    $request->requestBody = new CreateApiRequestBody();
    $request->requestBody->api = new CreateApiRequestBodyApi();
    $request->requestBody->api->description = 'This is description.';
    $request->requestBody->api->name = 'Sync Service API';
    $request->requestBody->api->summary = 'This is supposed to be a short summary.';
    $request->workspace = '{{workspaceId}}';

    $response = $sdk->api->createApi($request);

    if ($response->createApi200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiVersionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiVersionRequestBodyVersion;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiVersionRequestBodyVersionSource;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiVersionRequestBodyVersionSourceRelations;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApiVersionRequest();
    $request->requestBody = new CreateApiVersionRequestBody();
    $request->requestBody->version = new CreateApiVersionRequestBodyVersion();
    $request->requestBody->version->name = '1.0';
    $request->requestBody->version->source = new CreateApiVersionRequestBodyVersionSource();
    $request->requestBody->version->source->id = '{{apiVersionId}}';
    $request->requestBody->version->source->relations = new CreateApiVersionRequestBodyVersionSourceRelations();
    $request->requestBody->version->source->relations->documentation = true;
    $request->requestBody->version->source->relations->mock = true;
    $request->requestBody->version->source->relations->monitor = true;
    $request->requestBody->version->source->schema = true;
    $request->apiId = 'corrupti';

    $response = $sdk->api->createApiVersion($request);

    if ($response->createApiVersion200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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
    ];
    $request->apiId = 'distinctio';
    $request->apiVersionId = 'quibusdam';
    $request->schemaId = 'unde';
    $request->workspace = '{{workspaceId}}';

    $response = $sdk->api->createCollectionFromSchema($request);

    if ($response->createCollectionFromSchema200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateRelationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRelationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRelationsRequest();
    $request->requestBody = new CreateRelationsRequestBody();
    $request->requestBody->contracttest = [
        'collection-uid-1',
        'collection-uid-1',
        'collection-uid-1',
        'collection-uid-1',
    ];
    $request->requestBody->documentation = [
        'collection-uid-3',
        'collection-uid-3',
        'collection-uid-3',
    ];
    $request->requestBody->mock = [
        'mock-uid-1',
        'mock-uid-1',
        'mock-uid-1',
        'mock-uid-1',
    ];
    $request->requestBody->testsuite = [
        'collection-uid-1',
        'collection-uid-1',
    ];
    $request->apiId = 'error';
    $request->apiVersionId = 'deserunt';

    $response = $sdk->api->createRelations($request);

    if ($response->createRelations200ApplicationJSONObject !== null) {
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
    $request->apiId = 'suscipit';
    $request->apiVersionId = 'iure';

    $response = $sdk->api->createSchema($request);

    if ($response->createSchema200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAnApi

This call deletes an existing API having the specified id.  

Response contains an `api` object with `id` of the API which was deleted.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAnApiRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAnApiRequest();
    $request->apiId = 'magnam';

    $response = $sdk->api->deleteAnApi($request);

    if ($response->deleteAnApi200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAnApiVersion

This call deletes an existing API Version having the specified id.  

Response contains an `version` object with `id` of the API Version which was deleted.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAnApiVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAnApiVersionRequest();
    $request->apiId = 'debitis';
    $request->apiVersionId = 'ipsa';

    $response = $sdk->api->deleteAnApiVersion($request);

    if ($response->deleteAnApiVersion200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllApIs

This call fetches all the APIs present in the specified workspace

Response contains an array named `apis` which would contain all the details of APIs present in the workspace.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllApIsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllApIsRequest();
    $request->createdBy = '{{createdBy}}';
    $request->description = '{{description}}';
    $request->direction = '{{direction}}';
    $request->isPublic = '{{isPublic}}';
    $request->name = '{{name}}';
    $request->since = '{{since}}';
    $request->sort = '{{sort}}';
    $request->summary = '{{summary}}';
    $request->until = '{{until}}';
    $request->updatedBy = '{{updatedBy}}';
    $request->workspace = '{{workspaceId}}';

    $response = $sdk->api->getAllApIs($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllApiVersions

This call fetches details about the all the API Versions in the specified API.

The response will contain an array `versions` object which would be a list of all the API Version along with their details.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllApiVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllApiVersionsRequest();
    $request->apiId = 'delectus';

    $response = $sdk->api->getAllApiVersions($request);

    if ($response->getAllApiVersions200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnApiVersion

This call fetches details about the specified API Version.

The response will contain a `version` object which would contain all the details of the API Version.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAnApiVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAnApiVersionRequest();
    $request->apiId = 'tempora';
    $request->apiVersionId = 'suscipit';

    $response = $sdk->api->getAnApiVersion($request);

    if ($response->getAnApiVersion200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContractTestRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContractTestRelationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContractTestRelationsRequest();
    $request->apiId = 'molestiae';
    $request->apiVersionId = 'minus';

    $response = $sdk->api->getContractTestRelations($request);

    if ($response->getContractTestRelations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDocumentationRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentationRelationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDocumentationRelationsRequest();
    $request->apiId = 'placeat';
    $request->apiVersionId = 'voluptatum';

    $response = $sdk->api->getDocumentationRelations($request);

    if ($response->getDocumentationRelations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnvironmentRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEnvironmentRelationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEnvironmentRelationsRequest();
    $request->apiId = 'iusto';
    $request->apiVersionId = 'excepturi';

    $response = $sdk->api->getEnvironmentRelations($request);

    if ($response->getEnvironmentRelations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIntegrationTestRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIntegrationTestRelationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIntegrationTestRelationsRequest();
    $request->apiId = 'nisi';
    $request->apiVersionId = 'recusandae';

    $response = $sdk->api->getIntegrationTestRelations($request);

    if ($response->getIntegrationTestRelations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLinkedRelations

This call fetches all the relations which are linked to the specified API version along with their details.

The response will contain a `relations` object which lists all the relation types which are linked to the API version. Each of the relation type will be an object which details the relations of this type. 

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLinkedRelationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLinkedRelationsRequest();
    $request->apiId = 'temporibus';
    $request->apiVersionId = 'ab';

    $response = $sdk->api->getLinkedRelations($request);

    if ($response->getLinkedRelations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMonitorRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMonitorRelationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMonitorRelationsRequest();
    $request->apiId = 'quis';
    $request->apiVersionId = 'veritatis';

    $response = $sdk->api->getMonitorRelations($request);

    if ($response->getMonitorRelations200ApplicationJSONObject !== null) {
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
    $request->apiId = 'deserunt';
    $request->apiVersionId = 'perferendis';
    $request->schemaId = 'ipsam';

    $response = $sdk->api->getSchema($request);

    if ($response->getSchema200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTestSuiteRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTestSuiteRelationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTestSuiteRelationsRequest();
    $request->apiId = 'repellendus';
    $request->apiVersionId = 'sapiente';

    $response = $sdk->api->getTestSuiteRelations($request);

    if ($response->getTestSuiteRelations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## singleApi

This call fetches a single API having the specified id.

Response contains an `api` object with all the details related to the queried API, namely, `id`, `name`, `summary`, `description` etc. 

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SingleApiRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SingleApiRequest();
    $request->apiId = 'quo';

    $response = $sdk->api->singleApi($request);

    if ($response->singleApi200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## syncRelationsWithSchema

This call allows you to keep the relation in sync with the API schema.


> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SyncRelationsWithSchemaRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SyncRelationsWithSchemaRequest();
    $request->apiId = '{{apiId}}';
    $request->apiVersionId = '{{apiVersionId}}';
    $request->entityId = '{{entityId}}';
    $request->entityType = '{{entityType}}';

    $response = $sdk->api->syncRelationsWithSchema($request);

    if ($response->syncRelationsWithSchema200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAnApi

This call updates an existing API .  

Request body should contain an `api` object which should have the fields to be updated. Only `name`, `summary` and `description` fields can be edited for an API.

Response contains an `api` object with all the details related to the created API, namely, `id`, `name`, `summary`, `description` etc. 

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAnApiRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAnApiRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAnApiRequestBodyApi;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAnApiRequest();
    $request->requestBody = new UpdateAnApiRequestBody();
    $request->requestBody->api = new UpdateAnApiRequestBodyApi();
    $request->requestBody->api->description = 'This is an updated Description';
    $request->requestBody->api->name = 'New name';
    $request->apiId = 'odit';

    $response = $sdk->api->updateAnApi($request);

    if ($response->updateAnApi200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAnApiVersion

This call updates an existing API Version.  

Request body should contain a `version` object with the fields which need to be updated. Only field which can be updated is `name`.

Response contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api` etc.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAnApiVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAnApiVersionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAnApiVersionRequestBodyVersion;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAnApiVersionRequest();
    $request->requestBody = new UpdateAnApiVersionRequestBody();
    $request->requestBody->version = new UpdateAnApiVersionRequestBodyVersion();
    $request->requestBody->version->name = '2.0';
    $request->apiId = 'at';
    $request->apiVersionId = 'at';

    $response = $sdk->api->updateAnApiVersion($request);

    if ($response->updateAnApiVersion200ApplicationJSONObject !== null) {
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
    $request->apiId = 'maiores';
    $request->apiVersionId = 'molestiae';
    $request->schemaId = 'quod';

    $response = $sdk->api->updateSchema($request);

    if ($response->updateSchema200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
