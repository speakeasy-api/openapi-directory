<!-- Start SDK Example Usage -->
```typescript
import {
  GetItineraryPriceMetricsRequest,
  GetItineraryPriceMetricsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetItineraryPriceMetricsRequest = {
  currencyCode: "corrupti",
  departureDate: "provident",
  destinationIataCode: "distinctio",
  oneWay: false,
  originIataCode: "quibusdam",
};

sdk.priceMetrics.getItineraryPriceMetrics(req).then((res: GetItineraryPriceMetricsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->