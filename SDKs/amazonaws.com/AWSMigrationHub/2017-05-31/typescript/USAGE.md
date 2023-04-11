<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateCreatedArtifactRequest,
  AssociateCreatedArtifactResponse,
  AssociateCreatedArtifactXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateCreatedArtifactRequest = {
  associateCreatedArtifactRequest: {
    createdArtifact: {
      description: "corrupti",
      name: "provident",
    },
    dryRun: false,
    migrationTaskName: "distinctio",
    progressUpdateStream: "quibusdam",
  },
  xAmzAlgorithm: "unde",
  xAmzContentSha256: "nulla",
  xAmzCredential: "corrupti",
  xAmzDate: "illum",
  xAmzSecurityToken: "vel",
  xAmzSignature: "error",
  xAmzSignedHeaders: "deserunt",
  xAmzTarget: AssociateCreatedArtifactXAmzTargetEnum.AWSMigrationHubAssociateCreatedArtifact,
};

sdk.associateCreatedArtifact(req).then((res: AssociateCreatedArtifactResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->