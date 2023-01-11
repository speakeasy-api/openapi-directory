<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { StatusCallApiV1StatusCallGetRequest, StatusCallApiV1StatusCallGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: StatusCallApiV1StatusCallGetRequest = {
  queryParams: {
    query: "sit",
  },
};

sdk.statusCallApiV1StatusCallGet(req).then((res: StatusCallApiV1StatusCallGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->