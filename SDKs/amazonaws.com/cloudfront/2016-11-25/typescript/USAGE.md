<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateCloudFrontOriginAccessIdentity20161125Request, CreateCloudFrontOriginAccessIdentity20161125Response } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateCloudFrontOriginAccessIdentity20161125Request = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
  },
  request: "voluptas".encode(),
};

sdk.createCloudFrontOriginAccessIdentity20161125(req).then((res: CreateCloudFrontOriginAccessIdentity20161125Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->