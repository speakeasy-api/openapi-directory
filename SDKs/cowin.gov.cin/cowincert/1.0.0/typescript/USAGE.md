<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetCertificatePdfRequest, GetCertificatePdfResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetCertificatePdfRequest = {
  security: {
    certAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  request: {
    beneficiaryId: "sit",
    mobile: "voluptas",
  },
};

sdk.certificate.getCertificatePdf(req).then((res: GetCertificatePdfResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->