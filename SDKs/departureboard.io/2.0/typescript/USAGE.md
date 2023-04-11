<!-- Start SDK Example Usage -->
```typescript
import {
  GetArrivalsAndDeparturesByCRSRequest,
  GetArrivalsAndDeparturesByCRSResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetArrivalsAndDeparturesByCRSRequest = {
  crs: "corrupti",
  apiKey: "provident",
  filterStation: "distinctio",
  filterType: "quibusdam",
  numServices: 602763,
  serviceDetails: false,
  timeOffset: 857946,
  timeWindow: 544883,
};

sdk.departuresAndArrivals.getArrivalsAndDeparturesByCRS(req).then((res: GetArrivalsAndDeparturesByCRSResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->