<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateWorkspaceRequest, CreateWorkspaceResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateWorkspaceRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
  },
  request: {
    alias: "voluptas",
    clientToken: "fugit",
    tags: {
      "nihil": "rerum",
    },
  },
};

sdk.createWorkspace(req).then((res: CreateWorkspaceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->