# DocumentClassification

## Overview

Document Classification Functions

### Available Operations

* [AdultContentDetection](#adultcontentdetection) - Classifies the Document as adult or noadult
* [CommercialDetection](#commercialdetection) - Classifies the Document as commercial or nocommercial
* [EducationalDetection](#educationaldetection) - Classifies the Document as educational or noeducational
* [GenderDetection](#genderdetection) - Gender Detection Service
* [LanguageDetection](#languagedetection) - Identifies the Language of the Document
* [ReadabilityAssessment](#readabilityassessment) - Evaluates the Readability of the Document
* [SentimentAnalysis](#sentimentanalysis) - Identifies the Sentiment of the Document
* [SpamDetection](#spamdetection) - Classifies the Document as spam or nospam
* [SubjectivityAnalysis](#subjectivityanalysis) - Classifies Document as Subjective or Objective
* [TopicClassification](#topicclassification) - Identifies the Topic of the Document
* [TwitterSentimentAnalysis](#twittersentimentanalysis) - Identifies the Sentiment of Twitter Messages

## AdultContentDetection

The Adult Content Detection function classifies the documents as adult or noadult based on their context. It can be used to detect whether a document contains content unsuitable for minors.

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
    res, err := s.DocumentClassification.AdultContentDetection(ctx, operations.AdultContentDetectionRequestBody{
        APIKey: "distinctio",
        Text: sdk.String("quibusdam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CommercialDetection

The Commercial Detection function labels the documents as commercial or non-commercial based on their keywords and expressions. It can be used to detect whether a website is commercial or not.

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
    res, err := s.DocumentClassification.CommercialDetection(ctx, operations.CommercialDetectionRequestBody{
        APIKey: "unde",
        Text: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EducationalDetection

The Educational Detection function classifies the documents as educational or non-educational based on their context. It can be used to detect whether a website is educational or not.

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
    res, err := s.DocumentClassification.EducationalDetection(ctx, operations.EducationalDetectionRequestBody{
        APIKey: "corrupti",
        Text: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GenderDetection

The Gender Detection function identifies if a particular document is written-by or targets-to a man or a woman based on the context, the words and the idioms found in the text.

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
    res, err := s.DocumentClassification.GenderDetection(ctx, operations.GenderDetectionRequestBody{
        APIKey: "vel",
        Text: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## LanguageDetection

The Language Detection function identifies the natural language of the given document based on its words and context. This classifier is able to detect 96 different languages.

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
    res, err := s.DocumentClassification.LanguageDetection(ctx, operations.LanguageDetectionRequestBody{
        APIKey: "deserunt",
        Text: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReadabilityAssessment

The Readability Assessment function determines the degree of readability of a document based on its terms and idioms. The texts are classified as basic, intermediate and advanced depending their difficulty.

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
    res, err := s.DocumentClassification.ReadabilityAssessment(ctx, operations.ReadabilityAssessmentRequestBody{
        APIKey: "iure",
        Text: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SentimentAnalysis

The Sentiment Analysis function classifies documents as positive, negative or neutral (lack of sentiment) depending on whether they express a positive, negative or neutral opinion.

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
    res, err := s.DocumentClassification.SentimentAnalysis(ctx, operations.SentimentAnalysisRequestBody{
        APIKey: "debitis",
        Text: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SpamDetection

The Spam Detection function labels documents as spam or nospam by taking into account their context. It can be used to filter out spam emails and comments.

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
    res, err := s.DocumentClassification.SpamDetection(ctx, operations.SpamDetectionRequestBody{
        APIKey: "delectus",
        Text: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SubjectivityAnalysis

The Subjectivity Analysis function categorizes documents as subjective or objective based on their writing style. Texts that express personal opinions are labeled as subjective and the others as objective.

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
    res, err := s.DocumentClassification.SubjectivityAnalysis(ctx, operations.SubjectivityAnalysisRequestBody{
        APIKey: "suscipit",
        Text: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TopicClassification

The Topic Classification function assigns documents in 12 thematic categories based on their keywords, idioms and jargon. It can be used to identify the topic of the texts.

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
    res, err := s.DocumentClassification.TopicClassification(ctx, operations.TopicClassificationRequestBody{
        APIKey: "minus",
        Text: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TwitterSentimentAnalysis

The Twitter Sentiment Analysis function allows you to perform Sentiment Analysis on Twitter. It classifies the tweets as positive, negative or neutral depending on their context.

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
    res, err := s.DocumentClassification.TwitterSentimentAnalysis(ctx, operations.TwitterSentimentAnalysisRequestBody{
        APIKey: "voluptatum",
        Text: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
