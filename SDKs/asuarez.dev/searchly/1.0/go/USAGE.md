<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.SrcSearchlyAPIV1ControllersSimilarityByContentRequestBody{
        Content: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Similarity.SrcSearchlyAPIV1ControllersSimilarityByContent(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponseSimilarity != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->