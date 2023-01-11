<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { FetchBoundariesRequest, FetchBoundariesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: FetchBoundariesRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  request: {
    ids: [
      "voluptas",
    ],
  },
};

sdk.boundaries.fetchBoundaries(req).then((res: FetchBoundariesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->