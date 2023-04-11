# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amadeus.com/2.2.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amadeus.com/2.2.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### shopping

* `getFlightOffers` - Return list of Flight Offers based on searching criteria.
* `searchFlightOffers` - Return list of Flight Offers based on posted searching criteria.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

