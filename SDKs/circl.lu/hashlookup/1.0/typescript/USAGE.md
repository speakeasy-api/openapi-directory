<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetLookupSha1Sha1Request, GetLookupSha1Sha1Response } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetLookupSha1Sha1Request = {
  pathParams: {
    sha1: "sit",
  },
};

sdk.default.getLookupSha1Sha1(req).then((res: GetLookupSha1Sha1Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->