<!-- Start SDK Example Usage -->
```typescript
import {
  AddApplicationCloudWatchLoggingOptionRequest,
  AddApplicationCloudWatchLoggingOptionResponse,
  AddApplicationCloudWatchLoggingOptionXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AddApplicationCloudWatchLoggingOptionRequest = {
  addApplicationCloudWatchLoggingOptionRequest: {
    applicationName: "corrupti",
    cloudWatchLoggingOption: {
      logStreamARN: "provident",
    },
    conditionalToken: "distinctio",
    currentApplicationVersionId: 844266,
  },
  xAmzAlgorithm: "unde",
  xAmzContentSha256: "nulla",
  xAmzCredential: "corrupti",
  xAmzDate: "illum",
  xAmzSecurityToken: "vel",
  xAmzSignature: "error",
  xAmzSignedHeaders: "deserunt",
  xAmzTarget: AddApplicationCloudWatchLoggingOptionXAmzTargetEnum.KinesisAnalytics20180523AddApplicationCloudWatchLoggingOption,
};

sdk.addApplicationCloudWatchLoggingOption(req).then((res: AddApplicationCloudWatchLoggingOptionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->