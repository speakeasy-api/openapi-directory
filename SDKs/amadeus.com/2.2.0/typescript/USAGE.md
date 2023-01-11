<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetFlightOffersRequest, GetFlightOffersResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetFlightOffersRequest = {
  queryParams: {
    adults: 8717895732742165505,
    children: 2259404117704393152,
    currencyCode: "culpa",
    departureDate: "2019-04-21",
    destinationLocationCode: "consequuntur",
    excludedAirlineCodes: "dolor",
    includedAirlineCodes: "expedita",
    infants: 6044372234677422456,
    max: 8274930044578894929,
    maxPrice: 1543572285742637646,
    nonStop: true,
    originLocationCode: "rerum",
    returnDate: "2004-06-02",
    travelClass: "ECONOMY",
  },
};

sdk.shopping.getFlightOffers(req).then((res: GetFlightOffersResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->