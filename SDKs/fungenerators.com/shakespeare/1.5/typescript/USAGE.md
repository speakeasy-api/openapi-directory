<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetShakespeareGenerateInsultRequest, GetShakespeareGenerateInsultResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetShakespeareGenerateInsultRequest = {
  security: {
    xFungeneratorsApiSecret: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  queryParams: {
    limit: 8717895732742165505,
  },
};

sdk.generation.getShakespeareGenerateInsult(req).then((res: GetShakespeareGenerateInsultResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->