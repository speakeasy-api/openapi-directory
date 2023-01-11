<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetEntitlementsRequest, GetEntitlementsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetEntitlementsRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "AWSMPEntitlementService.GetEntitlements",
  },
  request: {
    filter: {
      "et": [
        "rerum",
      ],
    },
    maxResults: 7837839688282259259,
    nextToken: "debitis",
    productCode: "voluptatum",
  },
};

sdk.getEntitlements(req).then((res: GetEntitlementsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->