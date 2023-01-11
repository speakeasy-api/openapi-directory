<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetCancelJobRequest, GetCancelJobResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetCancelJobRequest = {
  queryParams: {
    apiVersion: "sit",
    awsAccessKeyId: "voluptas",
    action: "CancelJob",
    jobId: "expedita",
    operation: "CancelJob",
    signature: "dolor",
    signatureMethod: "expedita",
    signatureVersion: "voluptas",
    timestamp: "fugit",
    version: "2010-06-01",
  },
};

sdk.getCancelJob(req).then((res: GetCancelJobResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->