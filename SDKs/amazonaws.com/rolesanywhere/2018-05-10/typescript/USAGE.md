<!-- Start SDK Example Usage -->
```typescript
import {
  CreateProfileRequest,
  CreateProfileResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateProfileRequest = {
  requestBody: {
    durationSeconds: 548814,
    enabled: false,
    managedPolicyArns: [
      "distinctio",
      "quibusdam",
      "unde",
    ],
    name: "nulla",
    requireInstanceProperties: false,
    roleArns: [
      "illum",
      "vel",
      "error",
    ],
    sessionPolicy: "deserunt",
    tags: [
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
};

sdk.createProfile(req).then((res: CreateProfileResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->