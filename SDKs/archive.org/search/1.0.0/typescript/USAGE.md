<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetSearchV1FieldsRequest, GetSearchV1FieldsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetSearchV1FieldsRequest = {
  queryParams: {
    callback: "sit",
  },
};

sdk.getSearchV1Fields(req).then((res: GetSearchV1FieldsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->