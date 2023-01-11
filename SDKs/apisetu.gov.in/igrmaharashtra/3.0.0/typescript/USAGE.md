<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { LlcerRequest, LlcerResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: LlcerRequest = {
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
      udf2: "voluptas",
      udf3: "culpa",
    },
    consentArtifact: "expedita",
    format: "pdf",
    txnId: "dolor",
  },
};

sdk.apIs.llcer(req).then((res: LlcerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->