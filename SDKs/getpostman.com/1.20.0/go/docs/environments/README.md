# Environments

### Available Operations

* [AllEnvironments](#allenvironments) - All Environments
* [CreateEnvironment](#createenvironment) - Create Environment
* [DeleteEnvironment](#deleteenvironment) - Delete Environment
* [SingleEnvironment](#singleenvironment) - Single Environment
* [UpdateEnvironment](#updateenvironment) - Update Environment

## AllEnvironments

The `/environments` endpoint returns a list of all [environments](https://www.getpostman.com/docs/environments) that belong to you..

The response contains an array of environments' information containing the `name`, `id`, `owner` and `uid` of each environment.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Environments.AllEnvironments(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.AllEnvironments200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateEnvironment

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
    res, err := s.Environments.CreateEnvironment(ctx, operations.CreateEnvironmentRequestBody{
        Environment: &operations.CreateEnvironmentRequestBodyEnvironment{
            Name: sdk.String("Sample Environment Name (required)"),
            Values: []CreateEnvironmentRequestBodyEnvironmentValues{
                operations.CreateEnvironmentRequestBodyEnvironmentValues{
                    Key: sdk.String("variable_name_1"),
                    Value: sdk.String("The value of the variable"),
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEnvironment200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteEnvironment

This endpoint allows you to delete a single environment based on an environment's unique `uid`.

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
    res, err := s.Environments.DeleteEnvironment(ctx, operations.DeleteEnvironmentRequest{
        EnvironmentUID: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEnvironment200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SingleEnvironment

Access the contents of an environment that is accessible to you using its unique id (`uid`).

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
    res, err := s.Environments.SingleEnvironment(ctx, operations.SingleEnvironmentRequest{
        EnvironmentUID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SingleEnvironment200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateEnvironment

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
    res, err := s.Environments.UpdateEnvironment(ctx, operations.UpdateEnvironmentRequest{
        RequestBody: &operations.UpdateEnvironmentRequestBody{
            Environment: &operations.UpdateEnvironmentRequestBodyEnvironment{
                Name: sdk.String("New Name"),
                Values: []UpdateEnvironmentRequestBodyEnvironmentValues{
                    operations.UpdateEnvironmentRequestBodyEnvironmentValues{
                        Key: sdk.String("name"),
                        Value: sdk.String("Bruce Wayne"),
                    },
                },
            },
        },
        EnvironmentUID: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEnvironment200ApplicationJSONObject != nil {
        // handle response
    }
}
```
