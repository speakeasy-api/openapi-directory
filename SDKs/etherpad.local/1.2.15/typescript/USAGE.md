<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AppendTextUsingGetRequest, AppendTextUsingGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AppendTextUsingGetRequest = {
  queryParams: {
    padID: "sit",
    text: "voluptas",
  },
};

sdk.appendTextUsingGet(req).then((res: AppendTextUsingGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->