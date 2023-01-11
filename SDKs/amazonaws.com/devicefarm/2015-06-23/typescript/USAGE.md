<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateDevicePoolRequest, CreateDevicePoolResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateDevicePoolRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "DeviceFarm_20150623.CreateDevicePool",
  },
  request: {
    description: "fugit",
    maxDevices: 1543572285742637646,
    name: "nihil",
    projectArn: "rerum",
    rules: [
      {
        attribute: "REMOTE_ACCESS_ENABLED",
        operator: "EQUALS",
        value: "et",
      },
      {
        attribute: "ARN",
        operator: "LESS_THAN_OR_EQUALS",
        value: "et",
      },
      {
        attribute: "FORM_FACTOR",
        operator: "GREATER_THAN",
        value: "vitae",
      },
    ],
  },
};

sdk.createDevicePool(req).then((res: CreateDevicePoolResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->