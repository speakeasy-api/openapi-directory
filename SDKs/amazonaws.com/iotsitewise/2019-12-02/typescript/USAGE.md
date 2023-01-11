<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AssociateAssetsRequest, AssociateAssetsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AssociateAssetsRequest = {
  pathParams: {
    assetId: "sit",
  },
  headers: {
    xAmzAlgorithm: "voluptas",
    xAmzContentSha256: "culpa",
    xAmzCredential: "expedita",
    xAmzDate: "consequuntur",
    xAmzSecurityToken: "dolor",
    xAmzSignature: "expedita",
    xAmzSignedHeaders: "voluptas",
  },
  request: {
    childAssetId: "fugit",
    clientToken: "et",
    hierarchyId: "nihil",
  },
};

sdk.associateAssets(req).then((res: AssociateAssetsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->