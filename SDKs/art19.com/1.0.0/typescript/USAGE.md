<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetClassificationsRequest, GetClassificationsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetClassificationsRequest = {
  queryParams: {
    ids: [
      "voluptas",
    ],
    isCountry: "culpa",
    pageNumber: 501233450539197794,
    pageSize: 3390393562759376202,
    q: "dolor",
    sort: [
      "value",
      "created_at",
    ],
    type: "Language",
  },
};

sdk.classification.getClassifications(req).then((res: GetClassificationsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->