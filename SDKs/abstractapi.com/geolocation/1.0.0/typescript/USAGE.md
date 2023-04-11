<!-- Start SDK Example Usage -->
```typescript
import {
  GetV1Request,
  GetV1Response
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetV1Request = {
  apiKey: "corrupti",
  fields: "country,city,timezone",
  ipAddress: "195.154.25.40",
};

sdk.getV1(req).then((res: GetV1Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->