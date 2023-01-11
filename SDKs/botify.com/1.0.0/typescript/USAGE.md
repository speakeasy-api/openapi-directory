<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateUrlsExportRequest, CreateUrlsExportResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    djangoRestToken: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateUrlsExportRequest = {
  pathParams: {
    analysisSlug: "sit",
    projectSlug: "voluptas",
    username: "culpa",
  },
  queryParams: {
    area: "new",
  },
  request: {
    fields: [
      "dolor",
      "expedita",
      "voluptas",
    ],
    filters: {
      "et": "nihil",
    },
    sort: [
      {
        "debitis": "voluptatum",
        "et": "ut",
        "dolorem": "et",
      },
      {
        "iste": "vitae",
      },
      {
        "dolores": "illum",
        "debitis": "vel",
        "odio": "dolore",
      },
    ],
  },
};

sdk.analysis.createUrlsExport(req).then((res: CreateUrlsExportResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->