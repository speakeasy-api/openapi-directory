<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { LpgsvRequest, LpgsvResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: LpgsvRequest = {
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
      lpgId: "expedita",
      svNo: "consequuntur",
      uid: "dolor",
    },
    consentArtifact: "expedita",
    format: "pdf",
    txnId: "fugit",
  },
};

sdk.apIs.lpgsv(req).then((res: LpgsvResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->