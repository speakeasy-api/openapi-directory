# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/cur/2017-01-06/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/cur/2017-01-06/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteReportDefinitionRequest,
  DeleteReportDefinitionResponse,
  DeleteReportDefinitionXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteReportDefinitionRequest = {
  deleteReportDefinitionRequest: {
    reportName: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
  xAmzTarget: DeleteReportDefinitionXAmzTargetEnum.AWSOrigamiServiceGatewayServiceDeleteReportDefinition,
};

sdk.deleteReportDefinition(req).then((res: DeleteReportDefinitionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `deleteReportDefinition` - Deletes the specified report.
* `describeReportDefinitions` - Lists the AWS Cost and Usage reports available to this account.
* `modifyReportDefinition` - Allows you to programatically update your report preferences.
* `putReportDefinition` - Creates a new report using the description that you provide.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

