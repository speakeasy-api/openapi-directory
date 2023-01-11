<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CripcRequest, CripcResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CripcRequest = {
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
      udf1: "culpa",
      udf2: "expedita",
      udf3: "consequuntur",
      uid: "dolor",
    },
    consentArtifact: "expedita",
    format: "pdf",
    txnId: "fugit",
  },
};

sdk.apIs.cripc(req).then((res: CripcResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->