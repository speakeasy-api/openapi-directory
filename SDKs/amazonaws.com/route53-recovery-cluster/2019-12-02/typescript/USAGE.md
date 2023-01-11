<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetRoutingControlStateRequest, GetRoutingControlStateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetRoutingControlStateRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "ToggleCustomerAPI.GetRoutingControlState",
  },
  request: {
    routingControlArn: "fugit",
  },
};

sdk.getRoutingControlState(req).then((res: GetRoutingControlStateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->