# APIVersion

## Overview

This folder contains the requests around API versions.

### Available Operations

* [CreateAPIVersion](#createapiversion) - Create API Version
* [DeleteAnAPIVersion](#deleteanapiversion) - Delete an API Version
* [GetAllAPIVersions](#getallapiversions) - Get All API Versions
* [GetAnAPIVersion](#getanapiversion) - Get an API Version
* [UpdateAnAPIVersion](#updateanapiversion) - Update an API Version

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
    res, err := s.APIVersion.CreateAPIVersion(ctx, operations.CreateAPIVersionRequest{
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
        APIID: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAPIVersion200ApplicationJSONObject != nil {
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
    res, err := s.APIVersion.DeleteAnAPIVersion(ctx, operations.DeleteAnAPIVersionRequest{
        APIID: "esse",
        APIVersionID: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAnAPIVersion200ApplicationJSONObject != nil {
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
    res, err := s.APIVersion.GetAllAPIVersions(ctx, operations.GetAllAPIVersionsRequest{
        APIID: "porro",
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
    res, err := s.APIVersion.GetAnAPIVersion(ctx, operations.GetAnAPIVersionRequest{
        APIID: "dolorum",
        APIVersionID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAnAPIVersion200ApplicationJSONObject != nil {
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
    res, err := s.APIVersion.UpdateAnAPIVersion(ctx, operations.UpdateAnAPIVersionRequest{
        RequestBody: &operations.UpdateAnAPIVersionRequestBody{
            Version: &operations.UpdateAnAPIVersionRequestBodyVersion{
                Name: sdk.String("2.0"),
            },
        },
        APIID: "nam",
        APIVersionID: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAnAPIVersion200ApplicationJSONObject != nil {
        // handle response
    }
}
```
