<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteV2AccessTokensUuidRequest,
  DeleteV2AccessTokensUuidResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteV2AccessTokensUuidRequest = {
  uuid: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
};

sdk.accessTokens.deleteV2AccessTokensUuid(req).then((res: DeleteV2AccessTokensUuidResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->