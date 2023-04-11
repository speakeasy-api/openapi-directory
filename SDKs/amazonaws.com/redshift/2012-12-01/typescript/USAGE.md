<!-- Start SDK Example Usage -->
```typescript
import {
  GETAcceptReservedNodeExchangeRequest,
  GETAcceptReservedNodeExchangeResponse,
  GETAcceptReservedNodeExchangeActionEnum,
  GETAcceptReservedNodeExchangeVersionEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GETAcceptReservedNodeExchangeRequest = {
  action: GETAcceptReservedNodeExchangeActionEnum.AcceptReservedNodeExchange,
  reservedNodeId: "corrupti",
  targetReservedNodeOfferingId: "provident",
  version: GETAcceptReservedNodeExchangeVersionEnum.TwoThousandAndTwelve1201,
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
};

sdk.getAcceptReservedNodeExchange(req).then((res: GETAcceptReservedNodeExchangeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->