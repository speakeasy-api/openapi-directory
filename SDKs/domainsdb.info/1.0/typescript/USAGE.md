<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetDomainsTldZoneIdDownloadRequest, GetDomainsTldZoneIdDownloadResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetDomainsTldZoneIdDownloadRequest = {
  pathParams: {
    zoneId: "sit",
  },
  queryParams: {
    apiKey: "voluptas",
    date: "culpa",
  },
};

sdk.domains.getDomainsTldZoneIdDownload(req).then((res: GetDomainsTldZoneIdDownloadResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->