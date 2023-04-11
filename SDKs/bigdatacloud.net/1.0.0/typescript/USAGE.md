<!-- Start SDK Example Usage -->
```typescript
import {
  IpGeolocationWithConfidenceAreaAndHazardReportApiRequest,
  IpGeolocationWithConfidenceAreaAndHazardReportApiResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: IpGeolocationWithConfidenceAreaAndHazardReportApiRequest = {
  ip: "193.114.112.122",
  key: "{{API KEY}}",
  localityLanguage: "en",
};

sdk.ipGeolocationWithConfidenceAreaAndHazardReportApi(req).then((res: IpGeolocationWithConfidenceAreaAndHazardReportApiResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->