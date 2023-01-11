<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetV1VerificationResultRequest, GetV1VerificationResultResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetV1VerificationResultRequest = {
  queryParams: {
    format: "json",
    key: "voluptas",
    otp: "culpa",
    tranId: "expedita",
  },
};

sdk.getV1VerificationResult(req).then((res: GetV1VerificationResultResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->