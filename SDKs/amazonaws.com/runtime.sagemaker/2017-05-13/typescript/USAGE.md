<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { InvokeEndpointRequest, InvokeEndpointResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: InvokeEndpointRequest = {
  pathParams: {
    endpointName: "sit",
  },
  headers: {
    accept: "voluptas",
    contentType: "culpa",
    xAmzAlgorithm: "expedita",
    xAmzContentSha256: "consequuntur",
    xAmzCredential: "dolor",
    xAmzDate: "expedita",
    xAmzSecurityToken: "voluptas",
    xAmzSignature: "fugit",
    xAmzSignedHeaders: "et",
    xAmznSageMakerCustomAttributes: "nihil",
    xAmznSageMakerInferenceId: "rerum",
    xAmznSageMakerTargetContainerHostname: "dicta",
    xAmznSageMakerTargetModel: "debitis",
    xAmznSageMakerTargetVariant: "voluptatum",
  },
  request: {
    body: "et",
  },
};

sdk.invokeEndpoint(req).then((res: InvokeEndpointResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->