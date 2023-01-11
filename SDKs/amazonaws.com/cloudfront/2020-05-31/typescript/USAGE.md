<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AssociateAlias20200531Request, AssociateAlias20200531Response } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AssociateAlias20200531Request = {
  pathParams: {
    targetDistributionId: "sit",
  },
  queryParams: {
    alias: "voluptas",
  },
  headers: {
    xAmzAlgorithm: "culpa",
    xAmzContentSha256: "expedita",
    xAmzCredential: "consequuntur",
    xAmzDate: "dolor",
    xAmzSecurityToken: "expedita",
    xAmzSignature: "voluptas",
    xAmzSignedHeaders: "fugit",
  },
};

sdk.associateAlias20200531(req).then((res: AssociateAlias20200531Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->