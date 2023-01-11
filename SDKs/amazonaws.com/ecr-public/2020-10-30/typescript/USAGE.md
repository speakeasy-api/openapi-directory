<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BatchCheckLayerAvailabilityRequest, BatchCheckLayerAvailabilityResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BatchCheckLayerAvailabilityRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "SpencerFrontendService.BatchCheckLayerAvailability",
  },
  request: {
    layerDigests: [
      "et",
    ],
    registryId: "nihil",
    repositoryName: "rerum",
  },
};

sdk.batchCheckLayerAvailability(req).then((res: BatchCheckLayerAvailabilityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->