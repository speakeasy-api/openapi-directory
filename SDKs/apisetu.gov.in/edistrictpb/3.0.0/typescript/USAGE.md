<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BtcerRequest, BtcerResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: BtcerRequest = {
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
      registrationID: "voluptas",
    },
    consentArtifact: "culpa",
    format: "pdf",
    txnId: "consequuntur",
  },
};

sdk.apIs.btcer(req).then((res: BtcerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->