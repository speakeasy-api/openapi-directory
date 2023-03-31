# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/datumbox.com/1.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AdultContentDetectionRequestBody(
    api_key="corrupti",
    text="provident",
)
    
res = s.document_classification.adult_content_detection(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### document_classification

* `adult_content_detection` - Classifies the Document as adult or noadult
* `commercial_detection` - Classifies the Document as commercial or nocommercial
* `educational_detection` - Classifies the Document as educational or noeducational
* `gender_detection` - Gender Detection Service
* `language_detection` - Identifies the Language of the Document
* `readability_assessment` - Evaluates the Readability of the Document
* `sentiment_analysis` - Identifies the Sentiment of the Document
* `spam_detection` - Classifies the Document as spam or nospam
* `subjectivity_analysis` - Classifies Document as Subjective or Objective
* `topic_classification` - Identifies the Topic of the Document
* `twitter_sentiment_analysis` - Identifies the Sentiment of Twitter Messages

### information_retrieval

* `keyword_extraction` - Extracts the Keywords of the Document
* `text_extraction` - Extracts the clear text from Webpage

### metrics

* `document_similarity` - Estimates the similarity between 2 Documents
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
