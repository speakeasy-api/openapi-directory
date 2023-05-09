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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdultContentDetectionRequestBody;
import org.openapis.openapi.models.operations.AdultContentDetectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdultContentDetectionRequestBody req = new AdultContentDetectionRequestBody("distinctio") {{
                text = "quibusdam";
            }};            

            AdultContentDetectionResponse res = sdk.documentClassification.adultContentDetection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## commercialDetection

The Commercial Detection function labels the documents as commercial or non-commercial based on their keywords and expressions. It can be used to detect whether a website is commercial or not.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CommercialDetectionRequestBody;
import org.openapis.openapi.models.operations.CommercialDetectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CommercialDetectionRequestBody req = new CommercialDetectionRequestBody("unde") {{
                text = "nulla";
            }};            

            CommercialDetectionResponse res = sdk.documentClassification.commercialDetection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## educationalDetection

The Educational Detection function classifies the documents as educational or non-educational based on their context. It can be used to detect whether a website is educational or not.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EducationalDetectionRequestBody;
import org.openapis.openapi.models.operations.EducationalDetectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EducationalDetectionRequestBody req = new EducationalDetectionRequestBody("corrupti") {{
                text = "illum";
            }};            

            EducationalDetectionResponse res = sdk.documentClassification.educationalDetection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## genderDetection

The Gender Detection function identifies if a particular document is written-by or targets-to a man or a woman based on the context, the words and the idioms found in the text.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenderDetectionRequestBody;
import org.openapis.openapi.models.operations.GenderDetectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenderDetectionRequestBody req = new GenderDetectionRequestBody("vel") {{
                text = "error";
            }};            

            GenderDetectionResponse res = sdk.documentClassification.genderDetection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## languageDetection

The Language Detection function identifies the natural language of the given document based on its words and context. This classifier is able to detect 96 different languages.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LanguageDetectionRequestBody;
import org.openapis.openapi.models.operations.LanguageDetectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LanguageDetectionRequestBody req = new LanguageDetectionRequestBody("deserunt") {{
                text = "suscipit";
            }};            

            LanguageDetectionResponse res = sdk.documentClassification.languageDetection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## readabilityAssessment

The Readability Assessment function determines the degree of readability of a document based on its terms and idioms. The texts are classified as basic, intermediate and advanced depending their difficulty.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReadabilityAssessmentRequestBody;
import org.openapis.openapi.models.operations.ReadabilityAssessmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReadabilityAssessmentRequestBody req = new ReadabilityAssessmentRequestBody("iure") {{
                text = "magnam";
            }};            

            ReadabilityAssessmentResponse res = sdk.documentClassification.readabilityAssessment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sentimentAnalysis

The Sentiment Analysis function classifies documents as positive, negative or neutral (lack of sentiment) depending on whether they express a positive, negative or neutral opinion.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SentimentAnalysisRequestBody;
import org.openapis.openapi.models.operations.SentimentAnalysisResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SentimentAnalysisRequestBody req = new SentimentAnalysisRequestBody("debitis") {{
                text = "ipsa";
            }};            

            SentimentAnalysisResponse res = sdk.documentClassification.sentimentAnalysis(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## spamDetection

The Spam Detection function labels documents as spam or nospam by taking into account their context. It can be used to filter out spam emails and comments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SpamDetectionRequestBody;
import org.openapis.openapi.models.operations.SpamDetectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SpamDetectionRequestBody req = new SpamDetectionRequestBody("delectus") {{
                text = "tempora";
            }};            

            SpamDetectionResponse res = sdk.documentClassification.spamDetection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subjectivityAnalysis

The Subjectivity Analysis function categorizes documents as subjective or objective based on their writing style. Texts that express personal opinions are labeled as subjective and the others as objective.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubjectivityAnalysisRequestBody;
import org.openapis.openapi.models.operations.SubjectivityAnalysisResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SubjectivityAnalysisRequestBody req = new SubjectivityAnalysisRequestBody("suscipit") {{
                text = "molestiae";
            }};            

            SubjectivityAnalysisResponse res = sdk.documentClassification.subjectivityAnalysis(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## topicClassification

The Topic Classification function assigns documents in 12 thematic categories based on their keywords, idioms and jargon. It can be used to identify the topic of the texts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TopicClassificationRequestBody;
import org.openapis.openapi.models.operations.TopicClassificationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TopicClassificationRequestBody req = new TopicClassificationRequestBody("minus") {{
                text = "placeat";
            }};            

            TopicClassificationResponse res = sdk.documentClassification.topicClassification(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## twitterSentimentAnalysis

The Twitter Sentiment Analysis function allows you to perform Sentiment Analysis on Twitter. It classifies the tweets as positive, negative or neutral depending on their context.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TwitterSentimentAnalysisRequestBody;
import org.openapis.openapi.models.operations.TwitterSentimentAnalysisResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TwitterSentimentAnalysisRequestBody req = new TwitterSentimentAnalysisRequestBody("voluptatum") {{
                text = "iusto";
            }};            

            TwitterSentimentAnalysisResponse res = sdk.documentClassification.twitterSentimentAnalysis(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
