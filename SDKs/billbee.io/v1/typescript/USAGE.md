<!-- Start SDK Example Usage -->
```typescript
import {
  CloudStorageApiGetListResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.cloudStorage.cloudStorageApiGetList().then((res: CloudStorageApiGetListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->