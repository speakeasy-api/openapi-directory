<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetUuidRequest, GetUuidResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetUuidRequest = {
  security: {
    xFungeneratorsApiSecret: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  queryParams: {
    count: 8717895732742165505,
  },
};

sdk.uuidGeneration.getUuid(req).then((res: GetUuidResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->