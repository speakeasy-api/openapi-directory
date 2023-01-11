<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateCliTokenRequest, CreateCliTokenResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateCliTokenRequest = {
  pathParams: {
    name: "sit",
  },
  headers: {
    xAmzAlgorithm: "voluptas",
    xAmzContentSha256: "culpa",
    xAmzCredential: "expedita",
    xAmzDate: "consequuntur",
    xAmzSecurityToken: "dolor",
    xAmzSignature: "expedita",
    xAmzSignedHeaders: "voluptas",
  },
};

sdk.createCliToken(req).then((res: CreateCliTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->