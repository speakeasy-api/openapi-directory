<!-- Start SDK Example Usage -->
```typescript
import {
  CreateChatTokenRequest,
  CreateChatTokenResponse
} from "openapi/dist/sdk/models/operations";
import {
  ChatTokenCapabilityEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateChatTokenRequest = {
  requestBody: {
    attributes: {
      "provident": "distinctio",
      "quibusdam": "unde",
      "nulla": "corrupti",
    },
    capabilities: [
      ChatTokenCapabilityEnum.DisconnectUser,
      ChatTokenCapabilityEnum.DisconnectUser,
      ChatTokenCapabilityEnum.DisconnectUser,
      ChatTokenCapabilityEnum.DisconnectUser,
    ],
    roomIdentifier: "iure",
    sessionDurationInMinutes: 297534,
    userId: "debitis",
  },
  xAmzAlgorithm: "ipsa",
  xAmzContentSha256: "delectus",
  xAmzCredential: "tempora",
  xAmzDate: "suscipit",
  xAmzSecurityToken: "molestiae",
  xAmzSignature: "minus",
  xAmzSignedHeaders: "placeat",
};

sdk.createChatToken(req).then((res: CreateChatTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->