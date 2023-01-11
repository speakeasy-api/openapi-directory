<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAcceptReservedNodeExchangeRequest, GetAcceptReservedNodeExchangeResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetAcceptReservedNodeExchangeRequest = {
  queryParams: {
    action: "AcceptReservedNodeExchange",
    reservedNodeId: "voluptas",
    targetReservedNodeOfferingId: "culpa",
    version: "2012-12-01",
  },
  headers: {
    xAmzAlgorithm: "consequuntur",
    xAmzContentSha256: "dolor",
    xAmzCredential: "expedita",
    xAmzDate: "voluptas",
    xAmzSecurityToken: "fugit",
    xAmzSignature: "et",
    xAmzSignedHeaders: "nihil",
  },
};

sdk.getAcceptReservedNodeExchange(req).then((res: GetAcceptReservedNodeExchangeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->