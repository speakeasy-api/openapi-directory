<!-- Start SDK Example Usage -->
```typescript
import {
  GetLinesRequest,
  GetLinesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: GetLinesRequest = {
  away: "corrupti",
  conference: "provident",
  gameId: 715190,
  home: "quibusdam",
  seasonType: "unde",
  team: "nulla",
  week: 544883,
  year: 847252,
};

sdk.betting.getLines(req).then((res: GetLinesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->