<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AdultContentDetectionRequest, AdultContentDetectionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AdultContentDetectionRequest = {
  request: {
    apiKey: "sit",
    text: "voluptas",
  },
};

sdk.documentClassification.adultContentDetection(req).then((res: AdultContentDetectionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->