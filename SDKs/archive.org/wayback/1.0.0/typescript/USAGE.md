<!-- Start SDK Example Usage -->
```typescript
import {
  GetWaybackV1AvailableRequest,
  GetWaybackV1AvailableResponse
} from "openapi/dist/sdk/models/operations";
import {
  StatusCodeEnum,
  ClosestEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetWaybackV1AvailableRequest = {
  callback: "corrupti",
  closest: ClosestEnum.Before,
  statusCode: StatusCodeEnum.FourHundredAndTwentyOne,
  tag: "quibusdam",
  timeout: 6027.63,
  timestamp: "nulla",
  url: "corrupti",
};

sdk.getWaybackV1Available(req).then((res: GetWaybackV1AvailableResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->