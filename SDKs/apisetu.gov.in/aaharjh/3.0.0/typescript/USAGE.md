<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { RatcrRequest, RatcrResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: RatcrRequest = {
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
      dob: "sit",
      fullName: "voluptas",
      gender: "culpa",
      uid: "expedita",
    },
    consentArtifact: "consequuntur",
    format: "pdf",
    txnId: "expedita",
  },
};

sdk.apIs.ratcr(req).then((res: RatcrResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->