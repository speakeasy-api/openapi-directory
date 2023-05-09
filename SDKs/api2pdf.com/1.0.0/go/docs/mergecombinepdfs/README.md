# MergeCombinePdfs

### Available Operations

* [MergePost](#mergepost) - Merge multiple PDFs together

## MergePost

Merge two or more PDFs together on AWS Lambda.
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**

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
            HeaderAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.MergeCombinePdfs.MergePost(ctx, shared.MergeRequest{
        FileName: sdk.String("test.pdf"),
        InlinePdf: sdk.Bool(true),
        Urls: []string{
            "quibusdam",
            "unde",
            "nulla",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponseSuccess != nil {
        // handle response
    }
}
```
