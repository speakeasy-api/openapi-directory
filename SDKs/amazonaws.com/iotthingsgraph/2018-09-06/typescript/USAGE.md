<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateEntityToThingRequest,
  AssociateEntityToThingResponse,
  AssociateEntityToThingXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateEntityToThingRequest = {
  associateEntityToThingRequest: {
    entityId: "corrupti",
    namespaceVersion: 592845,
    thingName: "distinctio",
  },
  xAmzAlgorithm: "quibusdam",
  xAmzContentSha256: "unde",
  xAmzCredential: "nulla",
  xAmzDate: "corrupti",
  xAmzSecurityToken: "illum",
  xAmzSignature: "vel",
  xAmzSignedHeaders: "error",
  xAmzTarget: AssociateEntityToThingXAmzTargetEnum.IotThingsGraphFrontEndServiceAssociateEntityToThing,
};

sdk.associateEntityToThing(req).then((res: AssociateEntityToThingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->