<!-- Start SDK Example Usage -->
```typescript
import {
  GetBng2latlongEastingNorthingRequest,
  GetBng2latlongEastingNorthingResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetBng2latlongEastingNorthingRequest = {
  easting: 548814,
  northing: 592845,
};

sdk.getBng2latlongEastingNorthing(req).then((res: GetBng2latlongEastingNorthingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->