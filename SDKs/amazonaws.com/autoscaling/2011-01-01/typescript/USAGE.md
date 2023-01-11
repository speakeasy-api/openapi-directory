<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAttachInstancesRequest, GetAttachInstancesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetAttachInstancesRequest = {
  queryParams: {
    action: "AttachInstances",
    autoScalingGroupName: "voluptas",
    instanceIds: [
      "expedita",
      "consequuntur",
    ],
    version: "2011-01-01",
  },
  headers: {
    xAmzAlgorithm: "expedita",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "fugit",
    xAmzDate: "et",
    xAmzSecurityToken: "nihil",
    xAmzSignature: "rerum",
    xAmzSignedHeaders: "dicta",
  },
};

sdk.getAttachInstances(req).then((res: GetAttachInstancesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->