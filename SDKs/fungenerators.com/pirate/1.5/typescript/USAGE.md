<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetPirateGenerateInsultRequest, GetPirateGenerateInsultResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetPirateGenerateInsultRequest = {
  security: {
    xFungeneratorsApiSecret: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  queryParams: {
    limit: 8717895732742165505,
  },
};

sdk.generation.getPirateGenerateInsult(req).then((res: GetPirateGenerateInsultResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->