<!-- Start SDK Example Usage -->
```typescript
import {
  HolidayRequest,
  HolidayResponse,
  HolidayOptionalEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: HolidayRequest = {
  holidayId: 2,
  optional: HolidayOptionalEnum.True,
  year: 592845,
};

sdk.holidays.holiday(req).then((res: HolidayResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->