<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { SocerRequest, SocerResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: SocerRequest = {
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
      appno: "sit",
      dateOfBirth: "voluptas",
      enrolno: "culpa",
      typOfCert: "expedita",
    },
    consentArtifact: "consequuntur",
    format: "pdf",
    txnId: "expedita",
  },
};

sdk.apIs.socer(req).then((res: SocerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->