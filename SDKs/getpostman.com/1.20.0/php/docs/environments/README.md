# environments

### Available Operations

* [allEnvironments](#allenvironments) - All Environments
* [createEnvironment](#createenvironment) - Create Environment
* [deleteEnvironment](#deleteenvironment) - Delete Environment
* [singleEnvironment](#singleenvironment) - Single Environment
* [updateEnvironment](#updateenvironment) - Update Environment

## allEnvironments

The `/environments` endpoint returns a list of all [environments](https://www.getpostman.com/docs/environments) that belong to you..

The response contains an array of environments' information containing the `name`, `id`, `owner` and `uid` of each environment.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->environments->allEnvironments();

    if ($response->allEnvironments200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEnvironment

A sample body is added to the request that conforms to the following JSON schema:

```json
{
  "type": "object",
  "properties": {
    "environment": {
      "type": "object",
      "properties": {
        "name": {
              "type": "string",
              "maxLength": 254,
              "minLength": 1
            },
        "values": {
          "type": "array",
          "maxItems": 100,
          "additionalItems": false,
          "items": {
              "type": "object",
              "properties": {
                "key": {
                  "type": "string",
                  "maxLength": 254
                  "minLength": 1
                },
                "value": { "type": "string" },
                "enabled": { "type": "boolean" }
              },
              "required": ["key", "value"]
            }
        }
      },
      "required": ["name"]
    }
  },
  "required": ["environment"]
}
```

On successful creation of the environment, the API returns the environment name and `id`.

You can also specify the context of a workspace to create an environment in directly by passing the `workspace` as a query param.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequestBodyEnvironment;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequestBodyEnvironmentValues;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEnvironmentRequestBody();
    $request->environment = new CreateEnvironmentRequestBodyEnvironment();
    $request->environment->name = 'Sample Environment Name (required)';
    $request->environment->values = [
        new CreateEnvironmentRequestBodyEnvironmentValues(),
    ];

    $response = $sdk->environments->createEnvironment($request);

    if ($response->createEnvironment200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEnvironment

This endpoint allows you to delete a single environment based on an environment's unique `uid`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEnvironmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEnvironmentRequest();
    $request->environmentUid = 'commodi';

    $response = $sdk->environments->deleteEnvironment($request);

    if ($response->deleteEnvironment200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## singleEnvironment

Access the contents of an environment that is accessible to you using its unique id (`uid`).

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SingleEnvironmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SingleEnvironmentRequest();
    $request->environmentUid = 'molestiae';

    $response = $sdk->environments->singleEnvironment($request);

    if ($response->singleEnvironment200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEnvironment

This endpoint replaces an existing environment.

A sample body is added to the request that conforms to the following JSON schema:

```json
{
	"type": "object",
	"properties": {
		"environment": {
			"type": "object",
			"properties": {
				"name": {
					"type": "string",
					"maxLength": 254,
					"minLength": 1
				},
				"values": {
					"type": "array",
					"maxItems": 100,
					"additionalItems": false,
					"items": {
						"type": "object",
						"properties": {
							"key": {
								"type": "string",
								"maxLength": 254,
								"minLength": 1
							},
							"value": {
								"type": "string",
								"maxLength": 254,
								"minLength": 1
							},
							"type": {
								"type": "string"
							},
							"enabled": {
								"type": "boolean"
							}
						},
						"required": [
							"key",
							"value"
						]
					}
				}
			}
		}
	},
	"required": [
		"environment"
	]
}
```

On successful updation of the environment, the API returns the environment name and `id`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentRequestBodyEnvironment;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentRequestBodyEnvironmentValues;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEnvironmentRequest();
    $request->requestBody = new UpdateEnvironmentRequestBody();
    $request->requestBody->environment = new UpdateEnvironmentRequestBodyEnvironment();
    $request->requestBody->environment->name = 'New Name';
    $request->requestBody->environment->values = [
        new UpdateEnvironmentRequestBodyEnvironmentValues(),
        new UpdateEnvironmentRequestBodyEnvironmentValues(),
    ];
    $request->environmentUid = 'qui';

    $response = $sdk->environments->updateEnvironment($request);

    if ($response->updateEnvironment200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
