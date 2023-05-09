# ConnectorDocs

### Available Operations

* [ConnectorDocsOne](#connectordocsone) - Get Connector Doc content

## ConnectorDocsOne

Get Connector Doc content

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
    res, err := s.ConnectorDocs.ConnectorDocsOne(ctx, operations.ConnectorDocsOneRequest{
        DocID: "error",
        ID: "da1ffe78-f097-4b00-b4f1-5471b5e6e13b",
        XApideckAppID: "molestias",
    }, operations.ConnectorDocsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectorDocsOne200TextMarkdownMarkdownString != nil {
        // handle response
    }
}
```
