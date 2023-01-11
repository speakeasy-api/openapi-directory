<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteBinIdRequest, DeleteBinIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteBinIdRequest = {
  pathParams: {
    id: "sit",
  },
};

sdk.deleteBinId(req).then((res: DeleteBinIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->