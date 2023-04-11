<!-- Start SDK Example Usage -->
```typescript
import {
  GETVersionIncidentsFormatRequest,
  GETVersionIncidentsFormatResponse,
  GETVersionIncidentsFormatIncidentTypeEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GETVersionIncidentsFormatRequest = {
  incidentType: GETVersionIncidentsFormatIncidentTypeEnum.Unconfirmed,
  occurredAfter: 592845,
  occurredBefore: 715190,
  page: 844266,
  perPage: 602763,
  proximity: "nulla",
  proximitySquare: 544883,
  query: "illum",
};

sdk.incidents.getVersionIncidentsFormat(req).then((res: GETVersionIncidentsFormatResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->