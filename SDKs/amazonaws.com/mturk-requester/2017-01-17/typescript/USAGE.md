<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AcceptQualificationRequestRequest, AcceptQualificationRequestResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AcceptQualificationRequestRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "MTurkRequesterServiceV20170117.AcceptQualificationRequest",
  },
  request: {
    integerValue: 8274930044578894929,
    qualificationRequestId: "et",
  },
};

sdk.acceptQualificationRequest(req).then((res: AcceptQualificationRequestResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->