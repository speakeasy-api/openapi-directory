<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AcceptPageRequest, AcceptPageResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AcceptPageRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "SSMContacts.AcceptPage",
  },
  request: {
    acceptCode: "fugit",
    acceptCodeValidation: "IGNORE",
    acceptType: "DELIVERED",
    contactChannelId: "rerum",
    note: "dicta",
    pageId: "debitis",
  },
};

sdk.acceptPage(req).then((res: AcceptPageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->