# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/migrationhubstrategy/2020-02-19/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/migrationhubstrategy/2020-02-19/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetApplicationComponentDetailsRequest,
  GetApplicationComponentDetailsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GetApplicationComponentDetailsRequest = {
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "provident",
  xAmzCredential: "distinctio",
  xAmzDate: "quibusdam",
  xAmzSecurityToken: "unde",
  xAmzSignature: "nulla",
  xAmzSignedHeaders: "corrupti",
  applicationComponentId: "illum",
};

sdk.getApplicationComponentDetails(req).then((res: GetApplicationComponentDetailsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `getApplicationComponentDetails` -  Retrieves details about an application component. 
* `getApplicationComponentStrategies` -  Retrieves a list of all the recommended strategies and tools for an application component running on a server. 
* `getAssessment` -  Retrieves the status of an on-going assessment. 
* `getImportFileTask` -  Retrieves the details about a specific import task. 
* `getLatestAssessmentId` - Retrieve the latest ID of a specific assessment task.
* `getPortfolioPreferences` -  Retrieves your migration and modernization preferences. 
* `getPortfolioSummary` -  Retrieves overall summary including the number of servers to rehost and the overall number of anti-patterns. 
* `getRecommendationReportDetails` -  Retrieves detailed information about the specified recommendation report. 
* `getServerDetails` -  Retrieves detailed information about a specified server. 
* `getServerStrategies` -  Retrieves recommended strategies and tools for the specified server. 
* `listApplicationComponents` -  Retrieves a list of all the application components (processes). 
* `listCollectors` -  Retrieves a list of all the installed collectors. 
* `listImportFileTask` -  Retrieves a list of all the imports performed. 
* `listServers` -  Returns a list of all the servers. 
* `putPortfolioPreferences` -  Saves the specified migration and modernization preferences. 
* `startAssessment` -  Starts the assessment of an on-premises environment. 
* `startImportFileTask` -  Starts a file import. 
* `startRecommendationReportGeneration` -  Starts generating a recommendation report. 
* `stopAssessment` -  Stops the assessment of an on-premises environment. 
* `updateApplicationComponentConfig` -  Updates the configuration of an application component. 
* `updateServerConfig` -  Updates the configuration of the specified server. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

