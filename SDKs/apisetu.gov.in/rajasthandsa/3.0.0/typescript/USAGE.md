<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DpicrRequest, DpicrResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DpicrRequest = {
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
      udf1: "sit",
      uid: "voluptas",
    },
    consentArtifact: "culpa",
    format: "pdf",
    txnId: "consequuntur",
  },
};

sdk.apIs.dpicr(req).then((res: DpicrResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->