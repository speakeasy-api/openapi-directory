<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteScalingPolicyRequest,
  DeleteScalingPolicyResponse,
  DeleteScalingPolicyXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  ServiceNamespaceEnum,
  ScalableDimensionEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteScalingPolicyRequest = {
  deleteScalingPolicyRequest: {
    policyName: "corrupti",
    resourceId: "provident",
    scalableDimension: ScalableDimensionEnum.CassandraTableReadCapacityUnits,
    serviceNamespace: ServiceNamespaceEnum.Kafka,
  },
  xAmzAlgorithm: "unde",
  xAmzContentSha256: "nulla",
  xAmzCredential: "corrupti",
  xAmzDate: "illum",
  xAmzSecurityToken: "vel",
  xAmzSignature: "error",
  xAmzSignedHeaders: "deserunt",
  xAmzTarget: DeleteScalingPolicyXAmzTargetEnum.AnyScaleFrontendServiceDeleteScalingPolicy,
};

sdk.deleteScalingPolicy(req).then((res: DeleteScalingPolicyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->