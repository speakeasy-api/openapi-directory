<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetDeleteAlarmsRequest, GetDeleteAlarmsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetDeleteAlarmsRequest = {
  queryParams: {
    action: "DeleteAlarms",
    alarmNames: [
      "culpa",
    ],
    version: "2010-08-01",
  },
  headers: {
    xAmzAlgorithm: "consequuntur",
    xAmzContentSha256: "dolor",
    xAmzCredential: "expedita",
    xAmzDate: "voluptas",
    xAmzSecurityToken: "fugit",
    xAmzSignature: "et",
    xAmzSignedHeaders: "nihil",
  },
};

sdk.getDeleteAlarms(req).then((res: GetDeleteAlarmsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->