<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { TdcerRequest, TdcerResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: TdcerRequest = {
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
      custID: "sit",
      dob: "voluptas",
      finYr: "culpa",
    },
    consentArtifact: "expedita",
    format: "pdf",
    txnId: "dolor",
  },
};

sdk.apIs.tdcer(req).then((res: TdcerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->