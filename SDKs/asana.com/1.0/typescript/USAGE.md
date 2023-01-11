<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateAttachmentForTaskRequest, CreateAttachmentForTaskResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    personalAccessToken: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
));
    
const req: CreateAttachmentForTaskRequest = {
  pathParams: {
    taskGid: "sit",
  },
  queryParams: {
    limit: 2259404117704393152,
    offset: "culpa",
    optFields: [
      "consequuntur",
      "dolor",
    ],
    optPretty: true,
  },
  request: {
    file: {
      content: "voluptas".encode(),
      file: "fugit",
    },
    name: "et",
    resourceSubtype: "asana_file_attachments",
    url: "rerum",
  },
};

sdk.attachments.createAttachmentForTask(req).then((res: CreateAttachmentForTaskResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->