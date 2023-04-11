<!-- Start SDK Example Usage -->
```typescript
import {
  GetDomainsTldZoneIdDownloadRequest,
  GetDomainsTldZoneIdDownloadResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetDomainsTldZoneIdDownloadRequest = {
  apiKey: "corrupti",
  date: "provident",
  zoneId: "distinctio",
};

sdk.domains.getDomainsTldZoneIdDownload(req).then((res: GetDomainsTldZoneIdDownloadResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->