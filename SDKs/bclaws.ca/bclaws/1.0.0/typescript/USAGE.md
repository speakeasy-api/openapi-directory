<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetContentAspectIdRequest, GetContentAspectIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetContentAspectIdRequest = {
  pathParams: {
    aspectId: "complete",
  },
};

sdk.content.getContentAspectId(req).then((res: GetContentAspectIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->