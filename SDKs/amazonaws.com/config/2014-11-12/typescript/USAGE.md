<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BatchGetAggregateResourceConfigRequest, BatchGetAggregateResourceConfigResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BatchGetAggregateResourceConfigRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "StarlingDoveService.BatchGetAggregateResourceConfig",
  },
  request: {
    configurationAggregatorName: "fugit",
    resourceIdentifiers: [
      {
        resourceId: "nihil",
        resourceName: "rerum",
        resourceType: "AWS::ApiGateway::Stage",
        sourceAccountId: "debitis",
        sourceRegion: "voluptatum",
      },
    ],
  },
};

sdk.batchGetAggregateResourceConfig(req).then((res: BatchGetAggregateResourceConfigResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->