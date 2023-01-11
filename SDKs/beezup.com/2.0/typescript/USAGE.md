<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AnalyticsIndexResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();

sdk.analyticsGlobal.analyticsIndex().then((res: AnalyticsIndexResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->