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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DocumentClassification.AdultContentDetection(ctx, operations.AdultContentDetectionRequestBody{
        APIKey: "corrupti",
        Text: sdk.String("provident"),
    })
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


### [DocumentClassification](docs/documentclassification/README.md)

* [AdultContentDetection](docs/documentclassification/README.md#adultcontentdetection) - Classifies the Document as adult or noadult
* [CommercialDetection](docs/documentclassification/README.md#commercialdetection) - Classifies the Document as commercial or nocommercial
* [EducationalDetection](docs/documentclassification/README.md#educationaldetection) - Classifies the Document as educational or noeducational
* [GenderDetection](docs/documentclassification/README.md#genderdetection) - Gender Detection Service
* [LanguageDetection](docs/documentclassification/README.md#languagedetection) - Identifies the Language of the Document
* [ReadabilityAssessment](docs/documentclassification/README.md#readabilityassessment) - Evaluates the Readability of the Document
* [SentimentAnalysis](docs/documentclassification/README.md#sentimentanalysis) - Identifies the Sentiment of the Document
* [SpamDetection](docs/documentclassification/README.md#spamdetection) - Classifies the Document as spam or nospam
* [SubjectivityAnalysis](docs/documentclassification/README.md#subjectivityanalysis) - Classifies Document as Subjective or Objective
* [TopicClassification](docs/documentclassification/README.md#topicclassification) - Identifies the Topic of the Document
* [TwitterSentimentAnalysis](docs/documentclassification/README.md#twittersentimentanalysis) - Identifies the Sentiment of Twitter Messages

### [InformationRetrieval](docs/informationretrieval/README.md)

* [KeywordExtraction](docs/informationretrieval/README.md#keywordextraction) - Extracts the Keywords of the Document
* [TextExtraction](docs/informationretrieval/README.md#textextraction) - Extracts the clear text from Webpage

### [Metrics](docs/metrics/README.md)

* [DocumentSimilarity](docs/metrics/README.md#documentsimilarity) - Estimates the similarity between 2 Documents
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
