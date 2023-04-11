<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteSettingsOrganizationsOrganizationNameRequest,
  DeleteSettingsOrganizationsOrganizationNameResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteSettingsOrganizationsOrganizationNameRequest = {
  organizationName: "corrupti",
};

sdk.deleteSettingsOrganizationsOrganizationName(req).then((res: DeleteSettingsOrganizationsOrganizationNameResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->