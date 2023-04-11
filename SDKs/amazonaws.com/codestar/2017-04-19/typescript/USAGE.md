<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateTeamMemberRequest,
  AssociateTeamMemberResponse,
  AssociateTeamMemberXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateTeamMemberRequest = {
  associateTeamMemberRequest: {
    clientRequestToken: "corrupti",
    projectId: "provident",
    projectRole: "distinctio",
    remoteAccessAllowed: false,
    userArn: "quibusdam",
  },
  xAmzAlgorithm: "unde",
  xAmzContentSha256: "nulla",
  xAmzCredential: "corrupti",
  xAmzDate: "illum",
  xAmzSecurityToken: "vel",
  xAmzSignature: "error",
  xAmzSignedHeaders: "deserunt",
  xAmzTarget: AssociateTeamMemberXAmzTargetEnum.CodeStar20170419AssociateTeamMember,
};

sdk.associateTeamMember(req).then((res: AssociateTeamMemberResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->