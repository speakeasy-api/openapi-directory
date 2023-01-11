<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetVersionIncidentsFormatRequest, GetVersionIncidentsFormatResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetVersionIncidentsFormatRequest = {
  queryParams: {
    incidentType: "crash",
    occurredAfter: 2259404117704393152,
    occurredBefore: 6050128673802995827,
    page: 501233450539197794,
    perPage: 3390393562759376202,
    proximity: "dolor",
    proximitySquare: 1774932891286980153,
    query: "voluptas",
  },
};

sdk.incidents.getVersionIncidentsFormat(req).then((res: GetVersionIncidentsFormatResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->