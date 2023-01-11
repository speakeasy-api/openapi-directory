<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DetectDeviceDetectPostRequest, DetectDeviceDetectPostResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DetectDeviceDetectPostRequest = {
  security: {
    apiKeyHeader: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  request: {
    ftpBanner: "sit",
    hostname: "voluptas",
    httpResponse: "culpa",
    httpsResponse: "expedita",
    nicMac: "consequuntur",
    snmpSysdescr: "dolor",
    snmpSysoid: "expedita",
    telnetBanner: "voluptas",
    upnpResponse: "fugit",
  },
};

sdk.device.detectDeviceDetectPost(req).then((res: DetectDeviceDetectPostResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->