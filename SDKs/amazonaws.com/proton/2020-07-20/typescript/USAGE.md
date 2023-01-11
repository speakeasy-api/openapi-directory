<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AcceptEnvironmentAccountConnectionRequest, AcceptEnvironmentAccountConnectionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AcceptEnvironmentAccountConnectionRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "AwsProton20200720.AcceptEnvironmentAccountConnection",
  },
  request: {
    id: "fugit",
  },
};

sdk.acceptEnvironmentAccountConnection(req).then((res: AcceptEnvironmentAccountConnectionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->