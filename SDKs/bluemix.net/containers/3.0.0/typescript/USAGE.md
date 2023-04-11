<!-- Start SDK Example Usage -->
```typescript
import {
  GetContainersMessagesRequest,
  GetContainersMessagesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetContainersMessagesRequest = {
  xAuthProjectId: "corrupti",
  xAuthToken: "provident",
};

sdk.apiInfo.getContainersMessages(req).then((res: GetContainersMessagesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->