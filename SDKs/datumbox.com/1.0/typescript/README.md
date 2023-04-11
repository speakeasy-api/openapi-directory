# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/datumbox.com/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/datumbox.com/1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AdultContentDetectionRequestBody,
  AdultContentDetectionResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AdultContentDetectionRequestBody = {
  apiKey: "corrupti",
  text: "provident",
};

sdk.documentClassification.adultContentDetection(req).then((res: AdultContentDetectionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### documentClassification

* `adultContentDetection` - Classifies the Document as adult or noadult
* `commercialDetection` - Classifies the Document as commercial or nocommercial
* `educationalDetection` - Classifies the Document as educational or noeducational
* `genderDetection` - Gender Detection Service
* `languageDetection` - Identifies the Language of the Document
* `readabilityAssessment` - Evaluates the Readability of the Document
* `sentimentAnalysis` - Identifies the Sentiment of the Document
* `spamDetection` - Classifies the Document as spam or nospam
* `subjectivityAnalysis` - Classifies Document as Subjective or Objective
* `topicClassification` - Identifies the Topic of the Document
* `twitterSentimentAnalysis` - Identifies the Sentiment of Twitter Messages

### informationRetrieval

* `keywordExtraction` - Extracts the Keywords of the Document
* `textExtraction` - Extracts the clear text from Webpage

### metrics

* `documentSimilarity` - Estimates the similarity between 2 Documents
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

