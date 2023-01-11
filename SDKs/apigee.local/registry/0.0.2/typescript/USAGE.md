<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { RegistryCreateApiRequest, RegistryCreateApiResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: RegistryCreateApiRequest = {
  pathParams: {
    project: "sit",
  },
  queryParams: {
    apiId: "voluptas",
  },
  request: "culpa",
};

sdk.registryCreateApi(req).then((res: RegistryCreateApiResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->