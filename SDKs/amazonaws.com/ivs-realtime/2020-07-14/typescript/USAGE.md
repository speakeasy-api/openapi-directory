<!-- Start SDK Example Usage -->
```typescript
import {
  CreateParticipantTokenRequest,
  CreateParticipantTokenResponse
} from "openapi/dist/sdk/models/operations";
import {
  ParticipantTokenCapabilityEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateParticipantTokenRequest = {
  requestBody: {
    attributes: {
      "provident": "distinctio",
      "quibusdam": "unde",
      "nulla": "corrupti",
    },
    capabilities: [
      ParticipantTokenCapabilityEnum.Publish,
      ParticipantTokenCapabilityEnum.Subscribe,
      ParticipantTokenCapabilityEnum.Subscribe,
      ParticipantTokenCapabilityEnum.Publish,
    ],
    duration: 437587,
    stageArn: "magnam",
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

sdk.createParticipantToken(req).then((res: CreateParticipantTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->