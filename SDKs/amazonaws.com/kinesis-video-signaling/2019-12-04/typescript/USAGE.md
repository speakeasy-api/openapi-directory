<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetIceServerConfigRequest, GetIceServerConfigResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetIceServerConfigRequest = {
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
    channelARN: "voluptas",
    clientId: "fugit",
    service: "TURN",
    username: "nihil",
  },
};

sdk.getIceServerConfig(req).then((res: GetIceServerConfigResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->