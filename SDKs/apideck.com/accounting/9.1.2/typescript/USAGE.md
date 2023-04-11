<!-- Start SDK Example Usage -->
```typescript
import {
  BalanceSheetOneRequest,
  BalanceSheetOneResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BalanceSheetOneRequest = {
  filter: {
    endDate: "2021-12-31",
    startDate: "2021-01-01",
  },
  passThrough: {
    "provident": "distinctio",
    "quibusdam": "unde",
    "nulla": "corrupti",
  },
  raw: false,
  xApideckAppId: "illum",
  xApideckConsumerId: "vel",
  xApideckServiceId: "error",
};

sdk.balanceSheet.balanceSheetOne(req).then((res: BalanceSheetOneResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->