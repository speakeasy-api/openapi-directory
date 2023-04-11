<!-- Start SDK Example Usage -->
```typescript
import {
  GETDeleteAlarmsRequest,
  GETDeleteAlarmsResponse,
  GETDeleteAlarmsActionEnum,
  GETDeleteAlarmsVersionEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GETDeleteAlarmsRequest = {
  action: GETDeleteAlarmsActionEnum.DeleteAlarms,
  alarmNames: [
    "provident",
    "distinctio",
    "quibusdam",
  ],
  version: GETDeleteAlarmsVersionEnum.TwoThousandAndTen0801,
  xAmzAlgorithm: "unde",
  xAmzContentSha256: "nulla",
  xAmzCredential: "corrupti",
  xAmzDate: "illum",
  xAmzSecurityToken: "vel",
  xAmzSignature: "error",
  xAmzSignedHeaders: "deserunt",
};

sdk.getDeleteAlarms(req).then((res: GETDeleteAlarmsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->