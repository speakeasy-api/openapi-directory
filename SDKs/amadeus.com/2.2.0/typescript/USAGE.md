<!-- Start SDK Example Usage -->
```typescript
import {
  GetFlightOffersRequest,
  GetFlightOffersResponse,
  GetFlightOffersTravelClassEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetFlightOffersRequest = {
  adults: 548814,
  children: 592845,
  currencyCode: "distinctio",
  departureDate: "2021-03-11",
  destinationLocationCode: "nulla",
  excludedAirlineCodes: "corrupti",
  includedAirlineCodes: "illum",
  infants: 423655,
  max: 623564,
  maxPrice: 645894,
  nonStop: false,
  originLocationCode: "suscipit",
  returnDate: "2022-09-14",
  travelClass: GetFlightOffersTravelClassEnum.First,
};

sdk.shopping.getFlightOffers(req).then((res: GetFlightOffersResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->