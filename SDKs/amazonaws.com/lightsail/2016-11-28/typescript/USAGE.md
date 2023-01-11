<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AllocateStaticIpRequest, AllocateStaticIpResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AllocateStaticIpRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "Lightsail_20161128.AllocateStaticIp",
  },
  request: {
    staticIpName: "fugit",
  },
};

sdk.allocateStaticIp(req).then((res: AllocateStaticIpResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->