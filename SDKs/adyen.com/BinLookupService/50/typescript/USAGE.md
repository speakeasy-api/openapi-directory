<!-- Start SDK Example Usage -->
```typescript
import {
  shared.ThreeDSAvailabilityRequest,
  PostGet3dsAvailabilityResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.ThreeDSAvailabilityRequest = {
  additionalData: {
    "provident": "distinctio",
    "quibusdam": "unde",
    "nulla": "corrupti",
  },
  brands: [
    "vel",
    "error",
    "deserunt",
    "suscipit",
  ],
  cardNumber: "iure",
  merchantAccount: "magnam",
  recurringDetailReference: "debitis",
  shopperReference: "ipsa",
};

sdk.general.postGet3dsAvailability(req).then((res: PostGet3dsAvailabilityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->