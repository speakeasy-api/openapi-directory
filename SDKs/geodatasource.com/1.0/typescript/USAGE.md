<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetCityRequest, GetCityResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetCityRequest = {
  queryParams: {
    format: "json",
    key: "voluptas",
    lat: 53.099998,
    lng: 15.100000,
  },
};

sdk.getCity(req).then((res: GetCityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->