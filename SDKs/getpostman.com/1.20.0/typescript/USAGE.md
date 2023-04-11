<!-- Start SDK Example Usage -->
```typescript
import {
  CreateApiRequest,
  CreateApiResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateApiRequest = {
  requestBody: {
    api: {
      description: "This is description.",
      name: "Sync Service API",
      summary: "This is supposed to be a short summary.",
    },
  },
  workspace: "{{workspaceId}}",
};

sdk.api.createApi(req).then((res: CreateApiResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->