# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/datumbox.com/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

    req := operations.AdultContentDetectionRequestBody{
        APIKey: "corrupti",
        Text: "provident",
    }

    ctx := context.Background()
    res, err := s.DocumentClassification.AdultContentDetection(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### DocumentClassification

* `AdultContentDetection` - Classifies the Document as adult or noadult
* `CommercialDetection` - Classifies the Document as commercial or nocommercial
* `EducationalDetection` - Classifies the Document as educational or noeducational
* `GenderDetection` - Gender Detection Service
* `LanguageDetection` - Identifies the Language of the Document
* `ReadabilityAssessment` - Evaluates the Readability of the Document
* `SentimentAnalysis` - Identifies the Sentiment of the Document
* `SpamDetection` - Classifies the Document as spam or nospam
* `SubjectivityAnalysis` - Classifies Document as Subjective or Objective
* `TopicClassification` - Identifies the Topic of the Document
* `TwitterSentimentAnalysis` - Identifies the Sentiment of Twitter Messages

### InformationRetrieval

* `KeywordExtraction` - Extracts the Keywords of the Document
* `TextExtraction` - Extracts the clear text from Webpage

### Metrics

* `DocumentSimilarity` - Estimates the similarity between 2 Documents
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
