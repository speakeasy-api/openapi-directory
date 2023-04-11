<!-- Start SDK Example Usage -->
```typescript
import {
  GetGifByIdRequest,
  GetGifByIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetGifByIdRequest = {
  gifId: 548814,
};

sdk.gifs.getGifById(req).then((res: GetGifByIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->