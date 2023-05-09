<!-- Start SDK Example Usage -->
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
    res, err := s.Similarity.SrcSearchlyAPIV1ControllersSimilarityByContent(ctx, operations.SrcSearchlyAPIV1ControllersSimilarityByContentRequestBody{
        Content: sdk.String("corrupti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponseSimilarity != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->