<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateIdentityPoolRequest, CreateIdentityPoolResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateIdentityPoolRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "AWSCognitoIdentityService.CreateIdentityPool",
  },
  request: {
    allowClassicFlow: true,
    allowUnauthenticatedIdentities: false,
    cognitoIdentityProviders: [
      {
        clientId: "rerum",
        providerName: "dicta",
        serverSideTokenCheck: true,
      },
    ],
    developerProviderName: "voluptatum",
    identityPoolName: "et",
    identityPoolTags: {
      "dolorem": "et",
      "voluptate": "iste",
      "vitae": "totam",
    },
    openIdConnectProviderARNs: [
      "illum",
    ],
    samlProviderARNs: [
      "vel",
    ],
    supportedLoginProviders: {
      "dolore": "id",
    },
  },
};

sdk.createIdentityPool(req).then((res: CreateIdentityPoolResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->