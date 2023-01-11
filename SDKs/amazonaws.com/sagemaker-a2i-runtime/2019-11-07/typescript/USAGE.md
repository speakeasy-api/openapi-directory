<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteHumanLoopRequest, DeleteHumanLoopResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: DeleteHumanLoopRequest = {
  pathParams: {
    humanLoopName: "sit",
  },
  headers: {
    xAmzAlgorithm: "voluptas",
    xAmzContentSha256: "culpa",
    xAmzCredential: "expedita",
    xAmzDate: "consequuntur",
    xAmzSecurityToken: "dolor",
    xAmzSignature: "expedita",
    xAmzSignedHeaders: "voluptas",
  },
};

sdk.deleteHumanLoop(req).then((res: DeleteHumanLoopResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->