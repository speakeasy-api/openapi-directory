<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ActivatePipelineRequest, ActivatePipelineResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: ActivatePipelineRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "DataPipeline.ActivatePipeline",
  },
  request: {
    parameterValues: [
      {
        id: "et",
        stringValue: "nihil",
      },
    ],
    pipelineId: "rerum",
    startTimestamp: "2004-06-02T10:14:12Z",
  },
};

sdk.activatePipeline(req).then((res: ActivatePipelineResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->