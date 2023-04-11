<!-- Start SDK Example Usage -->
```typescript
import {
  AppApiWMMEndpointsWMMMagneticFieldRequest,
  AppApiWMMEndpointsWMMMagneticFieldResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AppApiWMMEndpointsWMMMagneticFieldRequest = {
  altitude: 10,
  latitude: 80,
  longitude: 100,
  year: 2020.5,
};

sdk.appApiWMMEndpointsWMMMagneticField(req).then((res: AppApiWMMEndpointsWMMMagneticFieldResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->