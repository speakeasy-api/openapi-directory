<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ConnectionSettingsAllRequest, ConnectionSettingsAllResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
    applicationId: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: ConnectionSettingsAllRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    resource: "sit",
    serviceId: "voluptas",
    unifiedApi: "culpa",
  },
  headers: {
    xApideckAppId: "expedita",
    xApideckConsumerId: "consequuntur",
  },
};

sdk.connections.connectionSettingsAll(req).then((res: ConnectionSettingsAllResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->