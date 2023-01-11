<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteSessionRequest, DeleteSessionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: DeleteSessionRequest = {
  pathParams: {
    botAlias: "sit",
    botName: "voluptas",
    userId: "culpa",
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

sdk.deleteSession(req).then((res: DeleteSessionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->