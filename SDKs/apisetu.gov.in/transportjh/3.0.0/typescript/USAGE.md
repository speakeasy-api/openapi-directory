<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DrvlcRequest, DrvlcResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DrvlcRequest = {
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
      dlno: "expedita",
    },
    consentArtifact: "consequuntur",
    format: "xml",
    txnId: "expedita",
  },
};

sdk.apIs.drvlc(req).then((res: DrvlcResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->