<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetReisezentrenRequest, GetReisezentrenResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetReisezentrenRequest = {
  queryParams: {
    name: "sit",
  },
};

sdk.getReisezentren(req).then((res: GetReisezentrenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->