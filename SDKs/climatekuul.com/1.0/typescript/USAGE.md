<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AirtravelCoordinatesRequest, AirtravelCoordinatesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AirtravelCoordinatesRequest = {
  headers: {
    contentType: "sit",
  },
  request: {
    apiKeyL1: "voluptas",
    apiKeyL2: "culpa",
    destinationAirportLatitude: 6.200000,
    destinationAirportLongitude: 96.199997,
    numberOfPassengers: 6044372234677422456,
    originAirportLatitude: 88.099998,
    originAirportLongitude: 68.199997,
    travelClass: "dicta",
    travelMode: "debitis",
  },
};

sdk.airtravelCoordinates.airtravelCoordinates(req).then((res: AirtravelCoordinatesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->