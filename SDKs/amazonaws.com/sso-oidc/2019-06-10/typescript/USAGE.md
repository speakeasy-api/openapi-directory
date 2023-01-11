<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateTokenRequest, CreateTokenResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateTokenRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
  },
  request: {
    clientId: "voluptas",
    clientSecret: "fugit",
    code: "et",
    deviceCode: "nihil",
    grantType: "rerum",
    redirectUri: "dicta",
    refreshToken: "debitis",
    scope: [
      "et",
    ],
  },
};

sdk.createToken(req).then((res: CreateTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->