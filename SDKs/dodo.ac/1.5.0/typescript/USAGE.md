<!-- Start SDK Example Usage -->
```typescript
import {
  GetNhArtRequest,
  GetNhArtResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetNhArtRequest = {
  acceptVersion: "corrupti",
  xApiKey: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
  excludedetails: "perferendis",
  hasfake: "ipsam",
  thumbsize: 832620,
};

sdk.getNhArt(req).then((res: GetNhArtResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->