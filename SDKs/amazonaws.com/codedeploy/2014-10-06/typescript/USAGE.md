<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AddTagsToOnPremisesInstancesRequest, AddTagsToOnPremisesInstancesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AddTagsToOnPremisesInstancesRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "CodeDeploy_20141006.AddTagsToOnPremisesInstances",
  },
  request: {
    instanceNames: [
      "et",
    ],
    tags: [
      {
        key: "rerum",
        value: "dicta",
      },
    ],
  },
};

sdk.addTagsToOnPremisesInstances(req).then((res: AddTagsToOnPremisesInstancesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->