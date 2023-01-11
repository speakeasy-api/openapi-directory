<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AddAttachmentsToSetRequest, AddAttachmentsToSetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AddAttachmentsToSetRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "AWSSupport_20130415.AddAttachmentsToSet",
  },
  request: {
    attachmentSetId: "fugit",
    attachments: [
      {
        data: "nihil",
        fileName: "rerum",
      },
    ],
  },
};

sdk.addAttachmentsToSet(req).then((res: AddAttachmentsToSetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->