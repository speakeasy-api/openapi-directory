<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAddClientIdToOpenIdConnectProviderRequest, GetAddClientIdToOpenIdConnectProviderResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetAddClientIdToOpenIdConnectProviderRequest = {
  queryParams: {
    action: "AddClientIDToOpenIDConnectProvider",
    clientID: "voluptas",
    openIDConnectProviderArn: "culpa",
    version: "2010-05-08",
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

sdk.getAddClientIdToOpenIdConnectProvider(req).then((res: GetAddClientIdToOpenIdConnectProviderResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->