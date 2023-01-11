<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetFactFodRequest, GetFactFodResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetFactFodRequest = {
  security: {
    xFungeneratorsApiSecret: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  queryParams: {
    category: "sit",
  },
};

sdk.factOfTheDay.getFactFod(req).then((res: GetFactFodResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->