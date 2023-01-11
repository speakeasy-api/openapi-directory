<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAddSourceIdentifierToSubscriptionRequest, GetAddSourceIdentifierToSubscriptionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetAddSourceIdentifierToSubscriptionRequest = {
  queryParams: {
    action: "AddSourceIdentifierToSubscription",
    sourceIdentifier: "voluptas",
    subscriptionName: "culpa",
    version: "2013-09-09",
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

sdk.getAddSourceIdentifierToSubscription(req).then((res: GetAddSourceIdentifierToSubscriptionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->