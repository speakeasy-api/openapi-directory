<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetChangeMessageVisibilityRequest, GetChangeMessageVisibilityResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetChangeMessageVisibilityRequest = {
  pathParams: {
    accountNumber: 8717895732742165505,
    queueName: "voluptas",
  },
  queryParams: {
    action: "ChangeMessageVisibility",
    receiptHandle: "expedita",
    version: "2012-11-05",
    visibilityTimeout: 2669985732393126063,
  },
  headers: {
    xAmzAlgorithm: "expedita",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "fugit",
    xAmzDate: "et",
    xAmzSecurityToken: "nihil",
    xAmzSignature: "rerum",
    xAmzSignedHeaders: "dicta",
  },
};

sdk.getChangeMessageVisibility(req).then((res: GetChangeMessageVisibilityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->