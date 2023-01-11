<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateApiRequest, CreateApiResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateApiRequest = {
  queryParams: {
    workspace: "sit",
  },
  request: {
    api: {
      description: "voluptas",
      name: "culpa",
      summary: "expedita",
    },
  },
};

sdk.api.createApi(req).then((res: CreateApiResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->