<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { InterferenceRequest, InterferenceResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKeyAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: InterferenceRequest = {
  security: {
    apiKeyAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  queryParams: {
    name: "sit",
    network: "voluptas",
  },
};

sdk.analyse.interference(req).then((res: InterferenceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->