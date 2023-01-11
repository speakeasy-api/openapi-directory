<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AcceptEulasRequest, AcceptEulasResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AcceptEulasRequest = {
  pathParams: {
    studioId: "sit",
  },
  headers: {
    xAmzAlgorithm: "voluptas",
    xAmzClientToken: "culpa",
    xAmzContentSha256: "expedita",
    xAmzCredential: "consequuntur",
    xAmzDate: "dolor",
    xAmzSecurityToken: "expedita",
    xAmzSignature: "voluptas",
    xAmzSignedHeaders: "fugit",
  },
  request: {
    eulaIds: [
      "nihil",
    ],
  },
};

sdk.acceptEulas(req).then((res: AcceptEulasResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->