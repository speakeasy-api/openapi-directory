<!-- Start SDK Example Usage -->
```typescript
import {
  CreateCapacityProviderRequest,
  CreateCapacityProviderResponse,
  CreateCapacityProviderXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  ManagedTerminationProtectionEnum,
  ManagedScalingStatusEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateCapacityProviderRequest = {
  createCapacityProviderRequest: {
    autoScalingGroupProvider: {
      autoScalingGroupArn: "corrupti",
      managedScaling: {
        instanceWarmupPeriod: 592845,
        maximumScalingStepSize: 715190,
        minimumScalingStepSize: 844266,
        status: ManagedScalingStatusEnum.Disabled,
        targetCapacity: 857946,
      },
      managedTerminationProtection: ManagedTerminationProtectionEnum.Disabled,
    },
    name: "illum",
    tags: [
      {
        key: "error",
        value: "deserunt",
      },
      {
        key: "suscipit",
        value: "iure",
      },
    ],
  },
  xAmzAlgorithm: "magnam",
  xAmzContentSha256: "debitis",
  xAmzCredential: "ipsa",
  xAmzDate: "delectus",
  xAmzSecurityToken: "tempora",
  xAmzSignature: "suscipit",
  xAmzSignedHeaders: "molestiae",
  xAmzTarget: CreateCapacityProviderXAmzTargetEnum.AmazonEc2ContainerServiceV20141113CreateCapacityProvider,
};

sdk.createCapacityProvider(req).then((res: CreateCapacityProviderResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->