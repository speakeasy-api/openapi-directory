<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PhcerRequest, PhcerResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PhcerRequest = {
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
      fullName: "sit",
      registrationNo: "voluptas",
    },
    consentArtifact: "culpa",
    format: "pdf",
    txnId: "consequuntur",
  },
};

sdk.apIs.phcer(req).then((res: PhcerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->