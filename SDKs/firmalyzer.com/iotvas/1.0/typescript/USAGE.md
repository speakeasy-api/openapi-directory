<!-- Start SDK Example Usage -->
```typescript
import {
  shared.DeviceFeatures,
  DetectDeviceResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.DeviceFeatures = {
  ftpBanner: "corrupti",
  hostname: "opulent-rabbit.org",
  httpResponse: "unde",
  httpsResponse: "nulla",
  nicMac: "corrupti",
  snmpSysdescr: "illum",
  snmpSysoid: "vel",
  telnetBanner: "error",
  upnpResponse: "deserunt",
};

sdk.device.detectDevice(req).then((res: DetectDeviceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->