# Sns

### Available Operations

* [SnsGetSnsGet](#snsgetsnsget) - Sns Get
* [SnsPostSnsPost](#snspostsnspost) - Sns Post

## SnsGetSnsGet

Sns Get

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
    res, err := s.Sns.SnsGetSnsGet(ctx, operations.SnsGetSnsGetRequest{
        Authorization: sdk.String("voluptatum"),
        Base64Message: sdk.String("iusto"),
        Message: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SnsGetSnsGet200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## SnsPostSnsPost

Sns Post

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Sns.SnsPostSnsPost(ctx, operations.SnsPostSnsPostRequest{
        SnsMessageRequest: shared.SnsMessageRequest{
            Base64Message: sdk.String("nisi"),
            Message: sdk.String("recusandae"),
        },
        Authorization: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SnsPostSnsPost200ApplicationJSONAny != nil {
        // handle response
    }
}
```
