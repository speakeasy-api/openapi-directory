<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetDecodeAuthorizationMessageRequest, GetDecodeAuthorizationMessageResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetDecodeAuthorizationMessageRequest = {
  queryParams: {
    action: "DecodeAuthorizationMessage",
    encodedMessage: "voluptas",
    version: "2011-06-15",
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

sdk.getDecodeAuthorizationMessage(req).then((res: GetDecodeAuthorizationMessageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->