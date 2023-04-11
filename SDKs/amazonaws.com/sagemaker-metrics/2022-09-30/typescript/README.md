# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/sagemaker-metrics/2022-09-30/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/sagemaker-metrics/2022-09-30/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  BatchPutMetricsRequest,
  BatchPutMetricsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchPutMetricsRequest = {
  requestBody: {
    metricData: [
      {
        metricName: "provident",
        step: 715190,
        timestamp: "2021-03-11T23:22:42.658Z",
        value: 8579.46,
      },
      {
        metricName: "corrupti",
        step: 847252,
        timestamp: "2022-05-18T09:34:54.894Z",
        value: 6458.94,
      },
      {
        metricName: "suscipit",
        step: 437587,
        timestamp: "2022-02-09T12:04:06.508Z",
        value: 567.13,
      },
    ],
    trialComponentName: "delectus",
  },
  xAmzAlgorithm: "tempora",
  xAmzContentSha256: "suscipit",
  xAmzCredential: "molestiae",
  xAmzDate: "minus",
  xAmzSecurityToken: "placeat",
  xAmzSignature: "voluptatum",
  xAmzSignedHeaders: "iusto",
};

sdk.batchPutMetrics(req).then((res: BatchPutMetricsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `batchPutMetrics` - Used to ingest training metrics into SageMaker. These metrics can be visualized in SageMaker Studio and retrieved with the <code>GetMetrics</code> API. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

