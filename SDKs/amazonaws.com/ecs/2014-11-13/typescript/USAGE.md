<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateCapacityProviderRequest, CreateCapacityProviderResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateCapacityProviderRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "AmazonEC2ContainerServiceV20141113.CreateCapacityProvider",
  },
  request: {
    autoScalingGroupProvider: {
      autoScalingGroupArn: "fugit",
      managedScaling: {
        instanceWarmupPeriod: 1543572285742637646,
        maximumScalingStepSize: 2661732831099943416,
        minimumScalingStepSize: 8325060299420976708,
        status: "DISABLED",
        targetCapacity: 2518412263346885298,
      },
      managedTerminationProtection: "ENABLED",
    },
    name: "et",
    tags: [
      {
        key: "dolorem",
        value: "et",
      },
      {
        key: "voluptate",
        value: "iste",
      },
      {
        key: "vitae",
        value: "totam",
      },
    ],
  },
};

sdk.createCapacityProvider(req).then((res: CreateCapacityProviderResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->