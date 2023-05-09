# Relations

## Overview

This contains requests related to relations. 

Relations can be of the following types: 
- `contracttest`
- `integrationtest`
- `documentation`
- `testsuite`
- `environment`
- `mock`
- `monitor`

### Available Operations

* [CreateRelations](#createrelations) - Create relations
* [GetContractTestRelations](#getcontracttestrelations) - Get contract test relations
* [GetDocumentationRelations](#getdocumentationrelations) - Get  documentation relations
* [GetEnvironmentRelations](#getenvironmentrelations) - Get environment relations
* [GetIntegrationTestRelations](#getintegrationtestrelations) - Get integration test relations
* [GetLinkedRelations](#getlinkedrelations) - Get linked relations
* [GetMonitorRelations](#getmonitorrelations) - Get monitor relations
* [GetTestSuiteRelations](#gettestsuiterelations) - Get test suite relations
* [SyncRelationsWithSchema](#syncrelationswithschema) - Sync relations with schema

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
    res, err := s.Relations.CreateRelations(ctx, operations.CreateRelationsRequest{
        RequestBody: &operations.CreateRelationsRequestBody{
            Contracttest: []string{
                "collection-uid-1",
            },
            Documentation: []string{
                "collection-uid-3",
                "collection-uid-3",
                "collection-uid-3",
                "collection-uid-3",
            },
            Mock: []string{
                "mock-uid-1",
                "mock-uid-1",
                "mock-uid-1",
            },
            Testsuite: []string{
                "collection-uid-1",
                "collection-uid-1",
                "collection-uid-1",
            },
        },
        APIID: "laborum",
        APIVersionID: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRelations200ApplicationJSONObject != nil {
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
    res, err := s.Relations.GetContractTestRelations(ctx, operations.GetContractTestRelationsRequest{
        APIID: "dolorem",
        APIVersionID: "corporis",
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
    res, err := s.Relations.GetDocumentationRelations(ctx, operations.GetDocumentationRelationsRequest{
        APIID: "explicabo",
        APIVersionID: "nobis",
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
    res, err := s.Relations.GetEnvironmentRelations(ctx, operations.GetEnvironmentRelationsRequest{
        APIID: "enim",
        APIVersionID: "omnis",
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
    res, err := s.Relations.GetIntegrationTestRelations(ctx, operations.GetIntegrationTestRelationsRequest{
        APIID: "nemo",
        APIVersionID: "minima",
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
    res, err := s.Relations.GetLinkedRelations(ctx, operations.GetLinkedRelationsRequest{
        APIID: "excepturi",
        APIVersionID: "accusantium",
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
    res, err := s.Relations.GetMonitorRelations(ctx, operations.GetMonitorRelationsRequest{
        APIID: "iure",
        APIVersionID: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMonitorRelations200ApplicationJSONObject != nil {
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
    res, err := s.Relations.GetTestSuiteRelations(ctx, operations.GetTestSuiteRelationsRequest{
        APIID: "doloribus",
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
    res, err := s.Relations.SyncRelationsWithSchema(ctx, operations.SyncRelationsWithSchemaRequest{
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
