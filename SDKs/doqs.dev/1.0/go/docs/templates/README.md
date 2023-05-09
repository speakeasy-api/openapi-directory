# Templates

### Available Operations

* [Create](#create) - Create
* [DeleteTemplatesIDDelete](#deletetemplatesiddelete) - Delete 
* [Fill](#fill) - Fill
* [Get](#get) - Get Template
* [GetFileTemplatesIDFileGet](#getfiletemplatesidfileget) - Get File
* [List](#list) - List 
* [Update](#update) - Update

## Create

Create

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Templates.Create(ctx, shared.BodyCreate{
        File: shared.BodyCreateFile{
            File: "excepturi",
            Content: []byte("ullam"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseOkTemplate != nil {
        // handle response
    }
}
```

## DeleteTemplatesIDDelete

Delete 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Templates.DeleteTemplatesIDDelete(ctx, operations.DeleteTemplatesIDDeleteRequest{
        ID: "9890afa5-63e2-4516-be4c-8b711e5b7fd2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseOkNoneType != nil {
        // handle response
    }
}
```

## Fill

Fill

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Templates.Fill(ctx, operations.FillRequest{
        FillTemplateRequest: shared.FillTemplateRequest{
            Data: map[string]interface{}{
                "pariatur": "accusantium",
                "consequuntur": "praesentium",
                "natus": "magni",
                "sunt": "quo",
            },
        },
        ID: "ddc69260-1fb5-476b-8d5f-0d30c5fbb258",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Fill200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## Get

Get Template

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Templates.Get(ctx, operations.GetRequest{
        ID: "7053202c-73d5-4fe9-b90c-28909b3fe49a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseOkTemplate != nil {
        // handle response
    }
}
```

## GetFileTemplatesIDFileGet

Get File

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Templates.GetFileTemplatesIDFileGet(ctx, operations.GetFileTemplatesIDFileGetRequest{
        ID: "8d9cbf48-6333-423f-9b77-f3a4100674eb",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseOkHTTPURL != nil {
        // handle response
    }
}
```

## List

List 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Templates.List(ctx, operations.ListRequest{
        Limit: sdk.Int64(976405),
        Offset: sdk.Int64(377752),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseOkListAppsAPIRoutesTemplatesTemplate != nil {
        // handle response
    }
}
```

## Update

Update

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Templates.Update(ctx, operations.UpdateRequest{
        UpdateTemplateRequest: shared.UpdateTemplateRequest{
            Fields: []shared.UpdateTemplateRequestFields{
                shared.UpdateTemplateRequestFields{},
                shared.UpdateTemplateRequestFields{},
                shared.UpdateTemplateRequestFields{},
            },
            Name: sdk.String("Kay Bailey DDS"),
        },
        ID: "a77a89eb-f737-4ae4-a03c-e5e6a95d8a0d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseOkTemplate != nil {
        // handle response
    }
}
```
