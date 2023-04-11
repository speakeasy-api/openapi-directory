<!-- Start SDK Example Usage -->
```typescript
import {
  CreateEnvironmentEc2Request,
  CreateEnvironmentEc2Response,
  CreateEnvironmentEc2XAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  ConnectionTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateEnvironmentEc2Request = {
  createEnvironmentEc2Request: {
    automaticStopTimeMinutes: 548814,
    clientRequestToken: "provident",
    connectionType: ConnectionTypeEnum.ConnectSsm,
    description: "quibusdam",
    dryRun: false,
    imageId: "unde",
    instanceType: "nulla",
    name: "corrupti",
    ownerArn: "illum",
    subnetId: "vel",
    tags: [
      {
        key: "deserunt",
        value: "suscipit",
      },
      {
        key: "iure",
        value: "magnam",
      },
      {
        key: "debitis",
        value: "ipsa",
      },
    ],
  },
  xAmzAlgorithm: "delectus",
  xAmzContentSha256: "tempora",
  xAmzCredential: "suscipit",
  xAmzDate: "molestiae",
  xAmzSecurityToken: "minus",
  xAmzSignature: "placeat",
  xAmzSignedHeaders: "voluptatum",
  xAmzTarget: CreateEnvironmentEc2XAmzTargetEnum.AWSCloud9WorkspaceManagementServiceCreateEnvironmentEc2,
};

sdk.createEnvironmentEc2(req).then((res: CreateEnvironmentEc2Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->