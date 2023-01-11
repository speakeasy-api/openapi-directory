<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { OtcerRequest, OtcerResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: OtcerRequest = {
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
      uid: "culpa",
    },
    consentArtifact: "expedita",
    format: "pdf",
    txnId: "dolor",
  },
};

sdk.apIs.otcer(req).then((res: OtcerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->