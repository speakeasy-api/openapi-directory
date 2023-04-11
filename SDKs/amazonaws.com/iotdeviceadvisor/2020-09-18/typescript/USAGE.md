<!-- Start SDK Example Usage -->
```typescript
import {
  CreateSuiteDefinitionRequest,
  CreateSuiteDefinitionResponse
} from "openapi/dist/sdk/models/operations";
import {
  ProtocolEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateSuiteDefinitionRequest = {
  requestBody: {
    suiteDefinitionConfiguration: {
      devicePermissionRoleArn: "corrupti",
      devices: [
        {
          certificateArn: "distinctio",
          thingArn: "quibusdam",
        },
        {
          certificateArn: "unde",
          thingArn: "nulla",
        },
        {
          certificateArn: "corrupti",
          thingArn: "illum",
        },
      ],
      intendedForQualification: false,
      isLongDurationTest: false,
      protocol: ProtocolEnum.MqttV311,
      rootGroup: "error",
      suiteDefinitionName: "deserunt",
    },
    tags: {
      "iure": "magnam",
      "debitis": "ipsa",
    },
  },
  xAmzAlgorithm: "delectus",
  xAmzContentSha256: "tempora",
  xAmzCredential: "suscipit",
  xAmzDate: "molestiae",
  xAmzSecurityToken: "minus",
  xAmzSignature: "placeat",
  xAmzSignedHeaders: "voluptatum",
};

sdk.createSuiteDefinition(req).then((res: CreateSuiteDefinitionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->