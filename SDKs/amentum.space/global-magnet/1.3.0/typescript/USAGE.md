<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AppApiWmmEndpointsWmmMagneticFieldRequest, AppApiWmmEndpointsWmmMagneticFieldResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AppApiWmmEndpointsWmmMagneticFieldRequest = {
  queryParams: {
    altitude: 74.099998,
    latitude: 53.099998,
    longitude: 15.100000,
    year: 67.199997,
  },
};

sdk.appApiWmmEndpointsWmmMagneticField(req).then((res: AppApiWmmEndpointsWmmMagneticFieldResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->