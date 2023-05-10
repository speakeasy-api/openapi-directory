# documentClassification

## Overview

Document Classification Functions

### Available Operations

* [adultContentDetection](#adultcontentdetection) - Classifies the Document as adult or noadult
* [commercialDetection](#commercialdetection) - Classifies the Document as commercial or nocommercial
* [educationalDetection](#educationaldetection) - Classifies the Document as educational or noeducational
* [genderDetection](#genderdetection) - Gender Detection Service
* [languageDetection](#languagedetection) - Identifies the Language of the Document
* [readabilityAssessment](#readabilityassessment) - Evaluates the Readability of the Document
* [sentimentAnalysis](#sentimentanalysis) - Identifies the Sentiment of the Document
* [spamDetection](#spamdetection) - Classifies the Document as spam or nospam
* [subjectivityAnalysis](#subjectivityanalysis) - Classifies Document as Subjective or Objective
* [topicClassification](#topicclassification) - Identifies the Topic of the Document
* [twitterSentimentAnalysis](#twittersentimentanalysis) - Identifies the Sentiment of Twitter Messages

## adultContentDetection

The Adult Content Detection function classifies the documents as adult or noadult based on their context. It can be used to detect whether a document contains content unsuitable for minors.

### Example Usage

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
    $request->apiKey = 'distinctio';
    $request->text = 'quibusdam';

    $response = $sdk->documentClassification->adultContentDetection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## commercialDetection

The Commercial Detection function labels the documents as commercial or non-commercial based on their keywords and expressions. It can be used to detect whether a website is commercial or not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CommercialDetectionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CommercialDetectionRequestBody();
    $request->apiKey = 'unde';
    $request->text = 'nulla';

    $response = $sdk->documentClassification->commercialDetection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## educationalDetection

The Educational Detection function classifies the documents as educational or non-educational based on their context. It can be used to detect whether a website is educational or not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EducationalDetectionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EducationalDetectionRequestBody();
    $request->apiKey = 'corrupti';
    $request->text = 'illum';

    $response = $sdk->documentClassification->educationalDetection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## genderDetection

The Gender Detection function identifies if a particular document is written-by or targets-to a man or a woman based on the context, the words and the idioms found in the text.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GenderDetectionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenderDetectionRequestBody();
    $request->apiKey = 'vel';
    $request->text = 'error';

    $response = $sdk->documentClassification->genderDetection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## languageDetection

The Language Detection function identifies the natural language of the given document based on its words and context. This classifier is able to detect 96 different languages.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDetectionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LanguageDetectionRequestBody();
    $request->apiKey = 'deserunt';
    $request->text = 'suscipit';

    $response = $sdk->documentClassification->languageDetection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## readabilityAssessment

The Readability Assessment function determines the degree of readability of a document based on its terms and idioms. The texts are classified as basic, intermediate and advanced depending their difficulty.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReadabilityAssessmentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReadabilityAssessmentRequestBody();
    $request->apiKey = 'iure';
    $request->text = 'magnam';

    $response = $sdk->documentClassification->readabilityAssessment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sentimentAnalysis

The Sentiment Analysis function classifies documents as positive, negative or neutral (lack of sentiment) depending on whether they express a positive, negative or neutral opinion.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SentimentAnalysisRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SentimentAnalysisRequestBody();
    $request->apiKey = 'debitis';
    $request->text = 'ipsa';

    $response = $sdk->documentClassification->sentimentAnalysis($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## spamDetection

The Spam Detection function labels documents as spam or nospam by taking into account their context. It can be used to filter out spam emails and comments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SpamDetectionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SpamDetectionRequestBody();
    $request->apiKey = 'delectus';
    $request->text = 'tempora';

    $response = $sdk->documentClassification->spamDetection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subjectivityAnalysis

The Subjectivity Analysis function categorizes documents as subjective or objective based on their writing style. Texts that express personal opinions are labeled as subjective and the others as objective.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SubjectivityAnalysisRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubjectivityAnalysisRequestBody();
    $request->apiKey = 'suscipit';
    $request->text = 'molestiae';

    $response = $sdk->documentClassification->subjectivityAnalysis($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## topicClassification

The Topic Classification function assigns documents in 12 thematic categories based on their keywords, idioms and jargon. It can be used to identify the topic of the texts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TopicClassificationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TopicClassificationRequestBody();
    $request->apiKey = 'minus';
    $request->text = 'placeat';

    $response = $sdk->documentClassification->topicClassification($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## twitterSentimentAnalysis

The Twitter Sentiment Analysis function allows you to perform Sentiment Analysis on Twitter. It classifies the tweets as positive, negative or neutral depending on their context.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TwitterSentimentAnalysisRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TwitterSentimentAnalysisRequestBody();
    $request->apiKey = 'voluptatum';
    $request->text = 'iusto';

    $response = $sdk->documentClassification->twitterSentimentAnalysis($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
