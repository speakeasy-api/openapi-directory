<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AssignInstanceRequest, AssignInstanceResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AssignInstanceRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "OpsWorks_20130218.AssignInstance",
  },
  request: {
    instanceId: "fugit",
    layerIds: [
      "nihil",
    ],
  },
};

sdk.assignInstance(req).then((res: AssignInstanceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->