<!-- Start SDK Example Usage -->
```typescript
import {
  ConnectionSettingsAllRequest,
  ConnectionSettingsAllResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ConnectionSettingsAllRequest = {
  resource: "corrupti",
  serviceId: "provident",
  unifiedApi: "distinctio",
  xApideckAppId: "quibusdam",
  xApideckConsumerId: "unde",
};

sdk.connections.connectionSettingsAll(req).then((res: ConnectionSettingsAllResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->