<!-- Start SDK Example Usage -->
```typescript
import {
  GetPersonalizedRankingRequest,
  GetPersonalizedRankingResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GetPersonalizedRankingRequest = {
  requestBody: {
    campaignArn: "corrupti",
    context: {
      "distinctio": "quibusdam",
      "unde": "nulla",
      "corrupti": "illum",
    },
    filterArn: "vel",
    filterValues: {
      "deserunt": "suscipit",
      "iure": "magnam",
      "debitis": "ipsa",
    },
    inputList: [
      "tempora",
      "suscipit",
      "molestiae",
      "minus",
    ],
    userId: "placeat",
  },
  xAmzAlgorithm: "voluptatum",
  xAmzContentSha256: "iusto",
  xAmzCredential: "excepturi",
  xAmzDate: "nisi",
  xAmzSecurityToken: "recusandae",
  xAmzSignature: "temporibus",
  xAmzSignedHeaders: "ab",
};

sdk.getPersonalizedRanking(req).then((res: GetPersonalizedRankingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->