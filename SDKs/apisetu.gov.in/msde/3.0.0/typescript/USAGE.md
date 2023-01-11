<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { IticrRequest, IticrResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: IticrRequest = {
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
      certno: "voluptas",
    },
    consentArtifact: "culpa",
    format: "pdf",
    txnId: "consequuntur",
  },
};

sdk.apIs.iticr(req).then((res: IticrResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->