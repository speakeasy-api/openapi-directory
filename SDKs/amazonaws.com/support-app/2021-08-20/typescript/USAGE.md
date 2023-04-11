<!-- Start SDK Example Usage -->
```typescript
import {
  CreateSlackChannelConfigurationRequest,
  CreateSlackChannelConfigurationResponse,
  CreateSlackChannelConfigurationRequestBodyNotifyOnCaseSeverityEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateSlackChannelConfigurationRequest = {
  requestBody: {
    channelId: "corrupti",
    channelName: "provident",
    channelRoleArn: "distinctio",
    notifyOnAddCorrespondenceToCase: false,
    notifyOnCaseSeverity: CreateSlackChannelConfigurationRequestBodyNotifyOnCaseSeverityEnum.High,
    notifyOnCreateOrReopenCase: false,
    notifyOnResolveCase: false,
    teamId: "unde",
  },
  xAmzAlgorithm: "nulla",
  xAmzContentSha256: "corrupti",
  xAmzCredential: "illum",
  xAmzDate: "vel",
  xAmzSecurityToken: "error",
  xAmzSignature: "deserunt",
  xAmzSignedHeaders: "suscipit",
};

sdk.createSlackChannelConfiguration(req).then((res: CreateSlackChannelConfigurationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->