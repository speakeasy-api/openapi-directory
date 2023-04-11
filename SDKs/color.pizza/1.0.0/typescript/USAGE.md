<!-- Start SDK Example Usage -->
```typescript
import {
  GetRequest,
  GetResponse
} from "openapi/dist/sdk/models/operations";
import {
  PossibleListsEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetRequest = {
  list: PossibleListsEnum.NbsIscc,
  noduplicates: false,
  values: "provident",
};

sdk.get(req).then((res: GetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->