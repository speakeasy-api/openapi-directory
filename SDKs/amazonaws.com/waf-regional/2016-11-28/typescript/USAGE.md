<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AssociateWebAclRequest, AssociateWebAclResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AssociateWebAclRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "AWSWAF_Regional_20161128.AssociateWebACL",
  },
  request: {
    resourceArn: "fugit",
    webACLId: "et",
  },
};

sdk.associateWebAcl(req).then((res: AssociateWebAclResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->