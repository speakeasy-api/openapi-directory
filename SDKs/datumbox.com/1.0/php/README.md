# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdultContentDetectionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdultContentDetectionRequestBody();
    $request->apiKey = 'corrupti';
    $request->text = 'provident';

    $response = $sdk->documentClassification->adultContentDetection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [documentClassification](docs/documentclassification/README.md)

* [adultContentDetection](docs/documentclassification/README.md#adultcontentdetection) - Classifies the Document as adult or noadult
* [commercialDetection](docs/documentclassification/README.md#commercialdetection) - Classifies the Document as commercial or nocommercial
* [educationalDetection](docs/documentclassification/README.md#educationaldetection) - Classifies the Document as educational or noeducational
* [genderDetection](docs/documentclassification/README.md#genderdetection) - Gender Detection Service
* [languageDetection](docs/documentclassification/README.md#languagedetection) - Identifies the Language of the Document
* [readabilityAssessment](docs/documentclassification/README.md#readabilityassessment) - Evaluates the Readability of the Document
* [sentimentAnalysis](docs/documentclassification/README.md#sentimentanalysis) - Identifies the Sentiment of the Document
* [spamDetection](docs/documentclassification/README.md#spamdetection) - Classifies the Document as spam or nospam
* [subjectivityAnalysis](docs/documentclassification/README.md#subjectivityanalysis) - Classifies Document as Subjective or Objective
* [topicClassification](docs/documentclassification/README.md#topicclassification) - Identifies the Topic of the Document
* [twitterSentimentAnalysis](docs/documentclassification/README.md#twittersentimentanalysis) - Identifies the Sentiment of Twitter Messages

### [informationRetrieval](docs/informationretrieval/README.md)

* [keywordExtraction](docs/informationretrieval/README.md#keywordextraction) - Extracts the Keywords of the Document
* [textExtraction](docs/informationretrieval/README.md#textextraction) - Extracts the clear text from Webpage

### [metrics](docs/metrics/README.md)

* [documentSimilarity](docs/metrics/README.md#documentsimilarity) - Estimates the similarity between 2 Documents
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
