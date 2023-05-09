# Mocks

### Available Operations

* [AllMocks](#allmocks) - All Mocks
* [CreateMock](#createmock) - Create Mock
* [DeleteMock](#deletemock) - Delete Mock
* [PublishMock](#publishmock) - Publish Mock
* [SingleMock](#singlemock) - Single Mock
* [UnpublishMock](#unpublishmock) - Unpublish Mock
* [UpdateMock](#updatemock) - Update Mock

## AllMocks

This endpoint fetches all the mocks that you have created.

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
    res, err := s.Mocks.AllMocks(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.AllMocks200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateMock

This endpoint allows you to create a mock on a collection. You can also provide an environment UID to resolve any environment variables in the collection.

You can also specify the context of a workspace to create a mock in directly by passing the `workspace` as a query param.

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
    res, err := s.Mocks.CreateMock(ctx, operations.CreateMockRequestBody{
        Mock: &operations.CreateMockRequestBodyMock{
            Collection: sdk.String("1679925-39fee52f-b806-3ffa-1173-00a6f5b183dc"),
            Environment: sdk.String("1679925-0b9e9f15-3208-a2b1-22e0-d58392f01524"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMock200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteMock

This endpoint allows you to delete an existing mock using its `uid`.

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
    res, err := s.Mocks.DeleteMock(ctx, operations.DeleteMockRequest{
        MockUID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteMock200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PublishMock

This endpoint publishes the mock you have created using its `uid`

> Requires <a href="#authentication">API Key</a> as `X-Api-Key ` request header or `apikey` URL query parameter.

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
    res, err := s.Mocks.PublishMock(ctx, operations.PublishMockRequest{
        MockUID: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublishMock200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SingleMock

This endpoint fetches you the basic information about a single mock using its `uid`.

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
    res, err := s.Mocks.SingleMock(ctx, operations.SingleMockRequest{
        MockUID: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SingleMock200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UnpublishMock

This endpoint unpublishes the mock you have created using its `uid`

> Requires <a href="#authentication">API Key</a> as `X-Api-Key ` request header or `apikey` URL query parameter.

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
    res, err := s.Mocks.UnpublishMock(ctx, operations.UnpublishMockRequest{
        MockUID: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnpublishMock200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateMock

This endpoint allows you to update a mock you have created using its `uid`. The endpoint allows you to edit fields,
* name
* environment
* description
* private
* versionTag

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
    res, err := s.Mocks.UpdateMock(ctx, operations.UpdateMockRequest{
        RequestBody: &operations.UpdateMockRequestBody{
            Mock: &operations.UpdateMockRequestBodyMock{
                Description: sdk.String("example describing update mock description"),
                Environment: sdk.String("11582779-ac1b6608-deb7-4c05-9d48-ee775aabfc19"),
                Name: sdk.String("My Mock Server"),
                Private: sdk.Bool(false),
                VersionTag: sdk.String("abf07d3d-f8ec-47d4-8015-9fe83078b4ec"),
            },
        },
        MockUID: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMock200ApplicationJSONObject != nil {
        // handle response
    }
}
```
