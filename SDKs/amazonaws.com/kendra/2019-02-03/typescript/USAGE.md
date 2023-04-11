<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateEntitiesToExperienceRequest,
  AssociateEntitiesToExperienceResponse,
  AssociateEntitiesToExperienceXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  EntityTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateEntitiesToExperienceRequest = {
  associateEntitiesToExperienceRequest: {
    entityList: [
      {
        entityId: "provident",
        entityType: EntityTypeEnum.Group,
      },
      {
        entityId: "quibusdam",
        entityType: EntityTypeEnum.Group,
      },
      {
        entityId: "nulla",
        entityType: EntityTypeEnum.Group,
      },
    ],
    id: "illum",
    indexId: "vel",
  },
  xAmzAlgorithm: "error",
  xAmzContentSha256: "deserunt",
  xAmzCredential: "suscipit",
  xAmzDate: "iure",
  xAmzSecurityToken: "magnam",
  xAmzSignature: "debitis",
  xAmzSignedHeaders: "ipsa",
  xAmzTarget: AssociateEntitiesToExperienceXAmzTargetEnum.AWSKendraFrontendServiceAssociateEntitiesToExperience,
};

sdk.associateEntitiesToExperience(req).then((res: AssociateEntitiesToExperienceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->