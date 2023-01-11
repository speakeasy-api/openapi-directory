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
    action: "CreateDomain",
    domainName: "voluptas",
    version: "2011-02-01",
  },
  headers: {
    xAmzAlgorithm: "expedita",
    xAmzContentSha256: "consequuntur",
    xAmzCredential: "dolor",
    xAmzDate: "expedita",
    xAmzSecurityToken: "voluptas",
    xAmzSignature: "fugit",
    xAmzSignedHeaders: "et",
  },
};

sdk.getCreateDomain(req).then((res: GetCreateDomainResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->