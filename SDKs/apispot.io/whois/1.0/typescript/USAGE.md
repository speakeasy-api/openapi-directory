<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CheckDomainRequest, CheckDomainResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKeyAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CheckDomainRequest = {
  pathParams: {
    domain: "sit",
  },
};

sdk.checkDomain(req).then((res: CheckDomainResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->