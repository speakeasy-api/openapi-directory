<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AddCustomRoutingEndpointsRequest, AddCustomRoutingEndpointsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AddCustomRoutingEndpointsRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "GlobalAccelerator_V20180706.AddCustomRoutingEndpoints",
  },
  request: {
    endpointConfigurations: [
      {
        endpointId: "et",
      },
    ],
    endpointGroupArn: "nihil",
  },
};

sdk.addCustomRoutingEndpoints(req).then((res: AddCustomRoutingEndpointsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->