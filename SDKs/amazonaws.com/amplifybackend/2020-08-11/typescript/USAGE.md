<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CloneBackendRequest, CloneBackendResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CloneBackendRequest = {
  pathParams: {
    appId: "sit",
    backendEnvironmentName: "voluptas",
  },
  headers: {
    xAmzAlgorithm: "culpa",
    xAmzContentSha256: "expedita",
    xAmzCredential: "consequuntur",
    xAmzDate: "dolor",
    xAmzSecurityToken: "expedita",
    xAmzSignature: "voluptas",
    xAmzSignedHeaders: "fugit",
  },
  request: {
    targetEnvironmentName: "et",
  },
};

sdk.cloneBackend(req).then((res: CloneBackendResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->