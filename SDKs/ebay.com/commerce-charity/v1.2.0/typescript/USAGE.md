<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetCharityOrgRequest, GetCharityOrgResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetCharityOrgRequest = {
  security: {
    apiAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    charityOrgId: "sit",
  },
  headers: {
    xEBAYCMARKETPLACEID: "voluptas",
  },
};

sdk.charityOrg.getCharityOrg(req).then((res: GetCharityOrgResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->