<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateByteMatchSetRequest, CreateByteMatchSetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateByteMatchSetRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "AWSWAF_20150824.CreateByteMatchSet",
  },
  request: {
    changeToken: "fugit",
    name: "et",
  },
};

sdk.createByteMatchSet(req).then((res: CreateByteMatchSetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->