# Gdpr

### Available Operations

* [DataSubjectRightCancelDeleteRequest](#datasubjectrightcanceldeleterequest)
* [DataSubjectRightCancelExportRequest](#datasubjectrightcancelexportrequest)
* [DataSubjectRightDeleteRequest](#datasubjectrightdeleterequest)
* [DataSubjectRightDeleteStatusRequest](#datasubjectrightdeletestatusrequest)
* [DataSubjectRightExportRequest](#datasubjectrightexportrequest)
* [DataSubjectRightExportStatusRequest](#datasubjectrightexportstatusrequest)

## DataSubjectRightCancelDeleteRequest

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
    res, err := s.Gdpr.DataSubjectRightCancelDeleteRequest(ctx, operations.DataSubjectRightCancelDeleteRequestRequest{
        RequestBody: &operations.DataSubjectRightCancelDeleteRequestRequestBody{
            Email: "Annabel1@hotmail.com",
        },
        Token: "e764ad73-34ec-41b7-81b3-6a08088d100e",
    }, operations.DataSubjectRightCancelDeleteRequestSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataSubjectRightCancelDeleteRequest202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DataSubjectRightCancelExportRequest

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
    res, err := s.Gdpr.DataSubjectRightCancelExportRequest(ctx, operations.DataSubjectRightCancelExportRequestRequest{
        Token: "fada200e-f042-42eb-a164-cf9ab8366c72",
    }, operations.DataSubjectRightCancelExportRequestSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataSubjectRightCancelExportRequest202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DataSubjectRightDeleteRequest

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
    res, err := s.Gdpr.DataSubjectRightDeleteRequest(ctx, operations.DataSubjectRightDeleteRequestSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataSubjectRightDeleteRequest202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DataSubjectRightDeleteStatusRequest

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
    res, err := s.Gdpr.DataSubjectRightDeleteStatusRequest(ctx, operations.DataSubjectRightDeleteStatusRequestRequest{
        Email: "Viva_Zulauf61@gmail.com",
        Token: "e06bee48-25c1-4fc0-a115-c80bff918544",
    }, operations.DataSubjectRightDeleteStatusRequestSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataSubjectRightDeleteStatusRequest200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DataSubjectRightExportRequest

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
    res, err := s.Gdpr.DataSubjectRightExportRequest(ctx, operations.DataSubjectRightExportRequestSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataSubjectRightExportRequest202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DataSubjectRightExportStatusRequest

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
    res, err := s.Gdpr.DataSubjectRightExportStatusRequest(ctx, operations.DataSubjectRightExportStatusRequestRequest{
        Token: "ec42defc-ce8f-4197-b773-e63562a7b408",
    }, operations.DataSubjectRightExportStatusRequestSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataSubjectRightExportStatusRequest200ApplicationJSONObject != nil {
        // handle response
    }
}
```
