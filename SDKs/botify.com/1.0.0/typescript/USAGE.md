<!-- Start SDK Example Usage -->
```typescript
import {
  CreateUrlsExportRequest,
  CreateUrlsExportResponse,
  CreateUrlsExportAreaEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    djangoRestToken: "YOUR_API_KEY_HERE",
  },
});

const req: CreateUrlsExportRequest = {
  urlsQuery: {
    fields: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
    filters: {
      "nulla": "corrupti",
      "illum": "vel",
      "error": "deserunt",
    },
    sort: [
      {
        "magnam": "debitis",
        "ipsa": "delectus",
      },
      {
        "suscipit": "molestiae",
        "minus": "placeat",
      },
    ],
  },
  analysisSlug: "voluptatum",
  area: CreateUrlsExportAreaEnum.Disappeared,
  projectSlug: "excepturi",
  username: "Glen.Walsh33",
};

sdk.analysis.createUrlsExport(req).then((res: CreateUrlsExportResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->