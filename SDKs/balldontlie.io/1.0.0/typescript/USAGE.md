<!-- Start SDK Example Usage -->
```typescript
import {
  AllGamesExampleParametersRequest,
  AllGamesExampleParametersResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AllGamesExampleParametersRequest = {
  seasons: "2018",
  teamIds: "1",
};

sdk.games.allGamesExampleParameters(req).then((res: AllGamesExampleParametersResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->