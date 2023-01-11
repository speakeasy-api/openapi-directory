<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AssociateServiceQuotaTemplateRequest, AssociateServiceQuotaTemplateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AssociateServiceQuotaTemplateRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "ServiceQuotasV20190624.AssociateServiceQuotaTemplate",
  },
  request: {
    "et": "nihil",
  },
};

sdk.associateServiceQuotaTemplate(req).then((res: AssociateServiceQuotaTemplateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->