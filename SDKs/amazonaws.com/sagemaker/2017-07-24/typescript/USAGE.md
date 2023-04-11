<!-- Start SDK Example Usage -->
```typescript
import {
  AddAssociationRequest,
  AddAssociationResponse,
  AddAssociationXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AssociationEdgeTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AddAssociationRequest = {
  addAssociationRequest: {
    associationType: AssociationEdgeTypeEnum.DerivedFrom,
    destinationArn: "provident",
    sourceArn: "distinctio",
  },
  xAmzAlgorithm: "quibusdam",
  xAmzContentSha256: "unde",
  xAmzCredential: "nulla",
  xAmzDate: "corrupti",
  xAmzSecurityToken: "illum",
  xAmzSignature: "vel",
  xAmzSignedHeaders: "error",
  xAmzTarget: AddAssociationXAmzTargetEnum.SageMakerAddAssociation,
};

sdk.addAssociation(req).then((res: AddAssociationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->