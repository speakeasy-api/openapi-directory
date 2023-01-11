<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CasesGeneralStatsListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    bearer: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));

sdk.cases.casesGeneralStatsList().then((res: CasesGeneralStatsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->