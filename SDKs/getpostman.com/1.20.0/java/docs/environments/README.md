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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllEnvironmentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AllEnvironmentsResponse res = sdk.environments.allEnvironments();

            if (res.allEnvironments200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBody;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBodyEnvironment;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBodyEnvironmentValues;
import org.openapis.openapi.models.operations.CreateEnvironmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateEnvironmentRequestBody req = new CreateEnvironmentRequestBody() {{
                environment = new CreateEnvironmentRequestBodyEnvironment() {{
                    name = "Sample Environment Name (required)";
                    values = new org.openapis.openapi.models.operations.CreateEnvironmentRequestBodyEnvironmentValues[]{{
                        add(new CreateEnvironmentRequestBodyEnvironmentValues() {{
                            key = "variable_name_1";
                            value = "The value of the variable";
                        }}),
                    }};
                }};;
            }};            

            CreateEnvironmentResponse res = sdk.environments.createEnvironment(req);

            if (res.createEnvironment200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEnvironment

This endpoint allows you to delete a single environment based on an environment's unique `uid`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEnvironmentRequest;
import org.openapis.openapi.models.operations.DeleteEnvironmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteEnvironmentRequest req = new DeleteEnvironmentRequest("perferendis");            

            DeleteEnvironmentResponse res = sdk.environments.deleteEnvironment(req);

            if (res.deleteEnvironment200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## singleEnvironment

Access the contents of an environment that is accessible to you using its unique id (`uid`).

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SingleEnvironmentRequest;
import org.openapis.openapi.models.operations.SingleEnvironmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SingleEnvironmentRequest req = new SingleEnvironmentRequest("ad");            

            SingleEnvironmentResponse res = sdk.environments.singleEnvironment(req);

            if (res.singleEnvironment200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEnvironmentRequest;
import org.openapis.openapi.models.operations.UpdateEnvironmentRequestBody;
import org.openapis.openapi.models.operations.UpdateEnvironmentRequestBodyEnvironment;
import org.openapis.openapi.models.operations.UpdateEnvironmentRequestBodyEnvironmentValues;
import org.openapis.openapi.models.operations.UpdateEnvironmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateEnvironmentRequest req = new UpdateEnvironmentRequest("natus") {{
                requestBody = new UpdateEnvironmentRequestBody() {{
                    environment = new UpdateEnvironmentRequestBodyEnvironment() {{
                        name = "New Name";
                        values = new org.openapis.openapi.models.operations.UpdateEnvironmentRequestBodyEnvironmentValues[]{{
                            add(new UpdateEnvironmentRequestBodyEnvironmentValues() {{
                                key = "name";
                                value = "Bruce Wayne";
                            }}),
                        }};
                    }};;
                }};;
            }};            

            UpdateEnvironmentResponse res = sdk.environments.updateEnvironment(req);

            if (res.updateEnvironment200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
