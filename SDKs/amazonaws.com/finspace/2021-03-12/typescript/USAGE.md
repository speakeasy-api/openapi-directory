<!-- Start SDK Example Usage -->
```typescript
import {
  CreateEnvironmentRequest,
  CreateEnvironmentResponse,
  CreateEnvironmentRequestBodyFederationModeEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateEnvironmentRequest = {
  requestBody: {
    dataBundles: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
    description: "unde",
    federationMode: CreateEnvironmentRequestBodyFederationModeEnum.Local,
    federationParameters: {
      applicationCallBackURL: "corrupti",
      attributeMap: {
        "vel": "error",
        "deserunt": "suscipit",
        "iure": "magnam",
        "debitis": "ipsa",
      },
      federationProviderName: "delectus",
      federationURN: "tempora",
      samlMetadataDocument: "suscipit",
      samlMetadataURL: "molestiae",
    },
    kmsKeyId: "minus",
    name: "placeat",
    superuserParameters: {
      emailAddress: "voluptatum",
      firstName: "Jaycee",
      lastName: "Mante",
    },
    tags: {
      "recusandae": "temporibus",
      "ab": "quis",
    },
  },
  xAmzAlgorithm: "veritatis",
  xAmzContentSha256: "deserunt",
  xAmzCredential: "perferendis",
  xAmzDate: "ipsam",
  xAmzSecurityToken: "repellendus",
  xAmzSignature: "sapiente",
  xAmzSignedHeaders: "quo",
};

sdk.createEnvironment(req).then((res: CreateEnvironmentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->