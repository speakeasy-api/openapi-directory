<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateEventIntegrationRequest, CreateEventIntegrationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateEventIntegrationRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
  },
  request: {
    clientToken: "voluptas",
    description: "fugit",
    eventBridgeBus: "et",
    eventFilter: {
      source: "nihil",
    },
    name: "rerum",
    tags: {
      "debitis": "voluptatum",
      "et": "ut",
      "dolorem": "et",
    },
  },
};

sdk.createEventIntegration(req).then((res: CreateEventIntegrationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->