<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteThingShadowRequest, DeleteThingShadowResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: DeleteThingShadowRequest = {
  pathParams: {
    thingName: "sit",
  },
  queryParams: {
    name: "voluptas",
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
};

sdk.deleteThingShadow(req).then((res: DeleteThingShadowResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->