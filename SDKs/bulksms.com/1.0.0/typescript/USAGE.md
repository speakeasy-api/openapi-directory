<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostRmmPreSignAttachmentRequest, PostRmmPreSignAttachmentResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  }
));
    
const req: PostRmmPreSignAttachmentRequest = {
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  request: {
    fileExtension: "sit",
    mediaType: "voluptas",
  },
};

sdk.attachments.postRmmPreSignAttachment(req).then((res: PostRmmPreSignAttachmentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->