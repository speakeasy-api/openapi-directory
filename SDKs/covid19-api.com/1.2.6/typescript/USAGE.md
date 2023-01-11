<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetDailyReportAllCountriesRequest, GetDailyReportAllCountriesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetDailyReportAllCountriesRequest = {
  queryParams: {
    date: "sit",
    dateFormat: "DD-MM-YYYY",
    format: "xml",
  },
};

sdk.country.getDailyReportAllCountries(req).then((res: GetDailyReportAllCountriesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->