# InformationRetrieval

## Overview

Information Retrieval Functions

### Available Operations

* [KeywordExtraction](#keywordextraction) - Extracts the Keywords of the Document
* [TextExtraction](#textextraction) - Extracts the clear text from Webpage

## KeywordExtraction

The Keyword Extraction function enables you to extract from an arbitrary document all the keywords and word-combinations along with their occurrences in the text.

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
    res, err := s.InformationRetrieval.KeywordExtraction(ctx, operations.KeywordExtractionRequestBody{
        APIKey: "excepturi",
        N: sdk.Int64(392785),
        Text: sdk.String("recusandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TextExtraction

The Text Extraction function enables you to extract the important information from a given webpage. Extracting the clear text of the documents is an important step before any other analysis.

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
    res, err := s.InformationRetrieval.TextExtraction(ctx, operations.TextExtractionRequestBody{
        APIKey: "temporibus",
        Text: sdk.String("ab"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
