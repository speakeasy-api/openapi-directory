<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetBuildSuggestersRequest, GetBuildSuggestersResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetBuildSuggestersRequest = {
  queryParams: {
    action: "BuildSuggesters",
    domainName: "voluptas",
    version: "2013-01-01",
  },
  headers: {
    xAmzAlgorithm: "expedita",
    xAmzContentSha256: "consequuntur",
    xAmzCredential: "dolor",
    xAmzDate: "expedita",
    xAmzSecurityToken: "voluptas",
    xAmzSignature: "fugit",
    xAmzSignedHeaders: "et",
  },
};

sdk.getBuildSuggesters(req).then((res: GetBuildSuggestersResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->