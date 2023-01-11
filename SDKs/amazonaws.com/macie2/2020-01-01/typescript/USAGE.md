<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AcceptInvitationRequest, AcceptInvitationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AcceptInvitationRequest = {
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
    administratorAccountId: "voluptas",
    invitationId: "fugit",
    masterAccount: "et",
  },
};

sdk.acceptInvitation(req).then((res: AcceptInvitationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->