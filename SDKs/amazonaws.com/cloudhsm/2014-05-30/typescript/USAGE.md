<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AddTagsToResourceRequest, AddTagsToResourceResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AddTagsToResourceRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "CloudHsmFrontendService.AddTagsToResource",
  },
  request: {
    resourceArn: "fugit",
    tagList: [
      {
        key: "nihil",
        value: "rerum",
      },
    ],
  },
};

sdk.addTagsToResource(req).then((res: AddTagsToResourceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->