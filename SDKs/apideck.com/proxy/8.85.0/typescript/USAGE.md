<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteProxyRequest, DeleteProxyResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
    applicationId: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: DeleteProxyRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  headers: {
    xApideckAppId: "sit",
    xApideckConsumerId: "voluptas",
    xApideckDownstreamAuthorization: "culpa",
    xApideckDownstreamUrl: "expedita",
    xApideckServiceId: "consequuntur",
  },
};

sdk.execute.deleteProxy(req).then((res: DeleteProxyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->