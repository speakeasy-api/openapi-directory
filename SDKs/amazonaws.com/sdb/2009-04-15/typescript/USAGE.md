<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetCreateDomainRequest, GetCreateDomainResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetCreateDomainRequest = {
  queryParams: {
    awsAccessKeyId: "sit",
    action: "CreateDomain",
    domainName: "culpa",
    signature: "expedita",
    signatureMethod: "consequuntur",
    signatureVersion: "dolor",
    timestamp: "expedita",
    version: "2009-04-15",
  },
};

sdk.getCreateDomain(req).then((res: GetCreateDomainResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->