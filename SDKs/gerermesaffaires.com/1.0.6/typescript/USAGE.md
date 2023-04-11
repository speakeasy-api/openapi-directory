<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteBusinessGroupsIdSpacesSpaceIdRequest,
  DeleteBusinessGroupsIdSpacesSpaceIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteBusinessGroupsIdSpacesSpaceIdRequest = {
  id: "P18784",
  spaceId: "P18784",
};

sdk.deleteBusinessGroupsIdSpacesSpaceId(req).then((res: DeleteBusinessGroupsIdSpacesSpaceIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->