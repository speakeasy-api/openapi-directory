<!-- Start SDK Example Usage -->
```typescript
import {
  GETAnalyticsDataUsingGETRequest,
  GETAnalyticsDataUsingGETResponse,
  GETAnalyticsDataUsingGETDataTypeEnum,
  GETAnalyticsDataUsingGETPrecisionEnum,
  GETAnalyticsDataUsingGETStageEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GETAnalyticsDataUsingGETRequest = {
  apiKey: "corrupti",
  dataType: GETAnalyticsDataUsingGETDataTypeEnum.SessionAnalytic,
  endDate: "2021-04-24",
  keys: "unde",
  precision: GETAnalyticsDataUsingGETPrecisionEnum.Monthly,
  stage: GETAnalyticsDataUsingGETStageEnum.Preview,
  startDate: "2021-09-24",
};

sdk.analytics.getAnalyticsDataUsingGET(req).then((res: GETAnalyticsDataUsingGETResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->