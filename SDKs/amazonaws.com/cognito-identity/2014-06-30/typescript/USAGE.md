<!-- Start SDK Example Usage -->
```typescript
import {
  CreateIdentityPoolRequest,
  CreateIdentityPoolResponse,
  CreateIdentityPoolXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateIdentityPoolRequest = {
  createIdentityPoolInput: {
    allowClassicFlow: false,
    allowUnauthenticatedIdentities: false,
    cognitoIdentityProviders: [
      {
        clientId: "provident",
        providerName: "distinctio",
        serverSideTokenCheck: false,
      },
      {
        clientId: "quibusdam",
        providerName: "unde",
        serverSideTokenCheck: false,
      },
      {
        clientId: "nulla",
        providerName: "corrupti",
        serverSideTokenCheck: false,
      },
    ],
    developerProviderName: "illum",
    identityPoolName: "vel",
    identityPoolTags: {
      "deserunt": "suscipit",
      "iure": "magnam",
      "debitis": "ipsa",
    },
    openIdConnectProviderARNs: [
      "tempora",
      "suscipit",
      "molestiae",
      "minus",
    ],
    samlProviderARNs: [
      "voluptatum",
      "iusto",
      "excepturi",
      "nisi",
    ],
    supportedLoginProviders: {
      "temporibus": "ab",
      "quis": "veritatis",
      "deserunt": "perferendis",
      "ipsam": "repellendus",
    },
  },
  xAmzAlgorithm: "sapiente",
  xAmzContentSha256: "quo",
  xAmzCredential: "odit",
  xAmzDate: "at",
  xAmzSecurityToken: "at",
  xAmzSignature: "maiores",
  xAmzSignedHeaders: "molestiae",
  xAmzTarget: CreateIdentityPoolXAmzTargetEnum.AWSCognitoIdentityServiceCreateIdentityPool,
};

sdk.createIdentityPool(req).then((res: CreateIdentityPoolResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->