<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AcknowledgeJobRequest, AcknowledgeJobResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AcknowledgeJobRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "CodePipeline_20150709.AcknowledgeJob",
  },
  request: {
    jobId: "fugit",
    nonce: "et",
  },
};

sdk.acknowledgeJob(req).then((res: AcknowledgeJobResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->