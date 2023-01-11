<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CancelTaskExecutionRequest, CancelTaskExecutionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CancelTaskExecutionRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "FmrsService.CancelTaskExecution",
  },
  request: {
    taskExecutionArn: "fugit",
  },
};

sdk.cancelTaskExecution(req).then((res: CancelTaskExecutionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->