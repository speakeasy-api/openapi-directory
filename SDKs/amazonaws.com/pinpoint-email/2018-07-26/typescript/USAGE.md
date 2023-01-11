<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateConfigurationSetRequest, CreateConfigurationSetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateConfigurationSetRequest = {
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
    configurationSetName: "voluptas",
    deliveryOptions: {
      sendingPoolName: "fugit",
      tlsPolicy: "REQUIRE",
    },
    reputationOptions: {
      lastFreshStart: "2003-05-13T04:57:12Z",
      reputationMetricsEnabled: true,
    },
    sendingOptions: {
      sendingEnabled: false,
    },
    tags: [
      {
        key: "voluptatum",
        value: "et",
      },
    ],
    trackingOptions: {
      customRedirectDomain: "ut",
    },
  },
};

sdk.createConfigurationSet(req).then((res: CreateConfigurationSetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->