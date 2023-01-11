<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateCloudFrontOriginAccessIdentity20181105Request, CreateCloudFrontOriginAccessIdentity20181105Response } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateCloudFrontOriginAccessIdentity20181105Request = {
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

sdk.createCloudFrontOriginAccessIdentity20181105(req).then((res: CreateCloudFrontOriginAccessIdentity20181105Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->