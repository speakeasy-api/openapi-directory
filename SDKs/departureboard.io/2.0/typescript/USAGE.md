<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetArrivalsAndDeparturesByCrsRequest, GetArrivalsAndDeparturesByCrsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetArrivalsAndDeparturesByCrsRequest = {
  pathParams: {
    crs: "sit",
  },
  queryParams: {
    apiKey: "voluptas",
    filterStation: "culpa",
    filterType: "expedita",
    numServices: 3390393562759376202,
    serviceDetails: false,
    timeOffset: 1774932891286980153,
    timeWindow: 6044372234677422456,
  },
};

sdk.departuresAndArrivals.getArrivalsAndDeparturesByCrs(req).then((res: GetArrivalsAndDeparturesByCrsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->