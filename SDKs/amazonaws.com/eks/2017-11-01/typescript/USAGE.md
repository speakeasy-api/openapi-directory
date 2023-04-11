<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateEncryptionConfigRequest,
  AssociateEncryptionConfigResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateEncryptionConfigRequest = {
  requestBody: {
    clientRequestToken: "corrupti",
    encryptionConfig: [
      {
        provider: {
          keyArn: "distinctio",
        },
        resources: [
          "unde",
          "nulla",
          "corrupti",
          "illum",
        ],
      },
      {
        provider: {
          keyArn: "vel",
        },
        resources: [
          "deserunt",
          "suscipit",
          "iure",
        ],
      },
      {
        provider: {
          keyArn: "magnam",
        },
        resources: [
          "ipsa",
          "delectus",
          "tempora",
          "suscipit",
        ],
      },
    ],
  },
  xAmzAlgorithm: "molestiae",
  xAmzContentSha256: "minus",
  xAmzCredential: "placeat",
  xAmzDate: "voluptatum",
  xAmzSecurityToken: "iusto",
  xAmzSignature: "excepturi",
  xAmzSignedHeaders: "nisi",
  name: "recusandae",
};

sdk.associateEncryptionConfig(req).then((res: AssociateEncryptionConfigResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->