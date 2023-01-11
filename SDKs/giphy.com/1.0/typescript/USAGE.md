<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetGifByIdRequest, GetGifByIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetGifByIdRequest = {
  pathParams: {
    gifId: 8717895732742165505,
  },
};

sdk.gifs.getGifById(req).then((res: GetGifByIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->