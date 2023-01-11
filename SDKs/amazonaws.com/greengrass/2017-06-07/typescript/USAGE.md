<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AssociateRoleToGroupRequest, AssociateRoleToGroupResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AssociateRoleToGroupRequest = {
  pathParams: {
    groupId: "sit",
  },
  headers: {
    xAmzAlgorithm: "voluptas",
    xAmzContentSha256: "culpa",
    xAmzCredential: "expedita",
    xAmzDate: "consequuntur",
    xAmzSecurityToken: "dolor",
    xAmzSignature: "expedita",
    xAmzSignedHeaders: "voluptas",
  },
  request: {
    roleArn: "fugit",
  },
};

sdk.associateRoleToGroup(req).then((res: AssociateRoleToGroupResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->