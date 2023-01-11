<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PancrRequest, PancrResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PancrRequest = {
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
      panFullName: "expedita",
      uid: "consequuntur",
      panno: "dolor",
    },
    consentArtifact: "expedita",
    format: "pdf",
    txnId: "fugit",
  },
};

sdk.apIs.pancr(req).then((res: PancrResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->