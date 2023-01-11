<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetDeviceRegistrationRequest, GetDeviceRegistrationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetDeviceRegistrationRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
  },
  request: {
    deviceFleetName: "voluptas",
    deviceName: "fugit",
  },
};

sdk.getDeviceRegistration(req).then((res: GetDeviceRegistrationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->