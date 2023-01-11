<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { LabrpRequest, LabrpResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: LabrpRequest = {
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
      reportdate: "voluptas",
      uhid: "culpa",
    },
    consentArtifact: "expedita",
    format: "pdf",
    txnId: "dolor",
  },
};

sdk.apIs.labrp(req).then((res: LabrpResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->