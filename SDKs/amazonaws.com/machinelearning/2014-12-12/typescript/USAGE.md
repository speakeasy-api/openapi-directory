<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AddTagsRequest, AddTagsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AddTagsRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "AmazonML_20141212.AddTags",
  },
  request: {
    resourceId: "fugit",
    resourceType: "BatchPrediction",
    tags: [
      {
        key: "rerum",
        value: "dicta",
      },
    ],
  },
};

sdk.addTags(req).then((res: AddTagsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->