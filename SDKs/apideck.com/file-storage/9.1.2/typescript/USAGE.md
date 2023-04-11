<!-- Start SDK Example Usage -->
```typescript
import {
  DriveGroupsAddRequest,
  DriveGroupsAddResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DriveGroupsAddRequest = {
  driveGroupInput: {
    description: "A description",
    displayName: "accounting",
    name: "accounting",
  },
  raw: false,
  xApideckAppId: "corrupti",
  xApideckConsumerId: "provident",
  xApideckServiceId: "distinctio",
};

sdk.driveGroups.driveGroupsAdd(req).then((res: DriveGroupsAddResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->