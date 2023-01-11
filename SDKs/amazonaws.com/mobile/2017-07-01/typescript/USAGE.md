<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateProjectRequest, CreateProjectResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateProjectRequest = {
  queryParams: {
    name: "sit",
    region: "voluptas",
    snapshotId: "culpa",
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
  request: {
    contents: "nihil",
  },
};

sdk.createProject(req).then((res: CreateProjectResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->