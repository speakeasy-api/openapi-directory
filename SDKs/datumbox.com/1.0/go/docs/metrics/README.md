# Metrics

## Overview

Metrics

### Available Operations

* [DocumentSimilarity](#documentsimilarity) - Estimates the similarity between 2 Documents

## DocumentSimilarity

The Document Similarity function estimates the degree of similarity between two documents. It can be used to detect duplicate webpages or detect plagiarism.

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
    res, err := s.Metrics.DocumentSimilarity(ctx, operations.DocumentSimilarityRequestBody{
        APIKey: "quis",
        Copy: sdk.String("veritatis"),
        Original: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
