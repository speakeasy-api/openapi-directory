<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ChangeServerLifeCycleStateRequest, ChangeServerLifeCycleStateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: ChangeServerLifeCycleStateRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
  },
  request: {
    lifeCycle: {
      state: "CUTOVER",
    },
    sourceServerID: "fugit",
  },
};

sdk.changeServerLifeCycleState(req).then((res: ChangeServerLifeCycleStateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->