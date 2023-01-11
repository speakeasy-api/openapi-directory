<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { SkcerRequest, SkcerResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: SkcerRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
    clientId: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  request: {
    certificateParameters: {
      courseNO: "sit",
      fullName: "voluptas",
      certificateType: "culpa",
    },
    consentArtifact: "expedita",
    format: "pdf",
    txnId: "dolor",
  },
};

sdk.apIs.skcer(req).then((res: SkcerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->