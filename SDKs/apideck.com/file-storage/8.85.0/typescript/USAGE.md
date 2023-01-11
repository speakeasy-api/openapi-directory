<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DriveGroupsAddRequest, DriveGroupsAddResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: DriveGroupsAddRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  queryParams: {
    raw: false,
  },
  headers: {
    xApideckAppId: "voluptas",
    xApideckConsumerId: "culpa",
    xApideckServiceId: "expedita",
  },
  request: {
    description: "consequuntur",
    displayName: "dolor",
    name: "expedita",
  },
};

sdk.driveGroups.driveGroupsAdd(req).then((res: DriveGroupsAddResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->