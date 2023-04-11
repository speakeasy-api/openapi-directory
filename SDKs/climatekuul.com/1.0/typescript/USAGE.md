<!-- Start SDK Example Usage -->
```typescript
import {
  AirtravelCoordinatesRequest,
  AirtravelCoordinatesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AirtravelCoordinatesRequest = {
  contentType: "application/x-www-form-urlencoded",
  requestBody: {
    apiKeyL1: "d95fead6-e8a6-4547-9fb9-7835101a3960",
    apiKeyL2: "c60f8db5-7204-4427-960d-27400c38b166",
    destinationAirportLatitude: 24.9056,
    destinationAirportLongitude: 67.1569,
    numberOfPassengers: 2,
    originAirportLatitude: 31.5208,
    originAirportLongitude: 74.4028,
    travelClass: "Economy",
    travelMode: "round trip",
  },
};

sdk.airtravelCoordinates.airtravelCoordinates(req).then((res: AirtravelCoordinatesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->