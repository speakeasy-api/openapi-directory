<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetDeleteListenerRequest, GetDeleteListenerResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetDeleteListenerRequest = {
  queryParams: {
    action: "DeleteListener",
    listenerArn: "voluptas",
    version: "2015-12-01",
  },
  headers: {
    xAmzAlgorithm: "expedita",
    xAmzContentSha256: "consequuntur",
    xAmzCredential: "dolor",
    xAmzDate: "expedita",
    xAmzSecurityToken: "voluptas",
    xAmzSignature: "fugit",
    xAmzSignedHeaders: "et",
  },
};

sdk.getDeleteListener(req).then((res: GetDeleteListenerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->