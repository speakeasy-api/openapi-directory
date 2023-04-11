<!-- Start SDK Example Usage -->
```typescript
import {
  GetCityRequest,
  GetCityResponse,
  GetCityFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetCityRequest = {
  format: GetCityFormatEnum.Xml,
  key: "provident",
  lat: 7151.9,
  lng: 8442.66,
};

sdk.getCity(req).then((res: GetCityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->