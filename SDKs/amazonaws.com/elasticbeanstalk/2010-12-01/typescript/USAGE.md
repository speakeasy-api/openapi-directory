<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAbortEnvironmentUpdateRequest, GetAbortEnvironmentUpdateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetAbortEnvironmentUpdateRequest = {
  queryParams: {
    action: "AbortEnvironmentUpdate",
    environmentId: "voluptas",
    environmentName: "culpa",
    version: "2010-12-01",
  },
  headers: {
    xAmzAlgorithm: "consequuntur",
    xAmzContentSha256: "dolor",
    xAmzCredential: "expedita",
    xAmzDate: "voluptas",
    xAmzSecurityToken: "fugit",
    xAmzSignature: "et",
    xAmzSignedHeaders: "nihil",
  },
};

sdk.getAbortEnvironmentUpdate(req).then((res: GetAbortEnvironmentUpdateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->