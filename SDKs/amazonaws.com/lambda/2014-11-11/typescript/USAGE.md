<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AddEventSourceRequest, AddEventSourceResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AddEventSourceRequest = {
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
    batchSize: 6044372234677422456,
    eventSource: "fugit",
    functionName: "et",
    parameters: {
      "rerum": "dicta",
    },
    role: "debitis",
  },
};

sdk.addEventSource(req).then((res: AddEventSourceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->