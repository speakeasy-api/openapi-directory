<!-- Start SDK Example Usage -->
```typescript
import {
  shared.BoundariesQuery,
  FetchBoundariesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.BoundariesQuery = {
  ids: [
    "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
    "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
    "b7392059-2939-46fe-a759-6eb10faaa235",
  ],
};

sdk.boundaries.fetchBoundaries(req).then((res: FetchBoundariesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->