<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateNotificationRuleRequest, CreateNotificationRuleResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateNotificationRuleRequest = {
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
    clientRequestToken: "voluptas",
    detailType: "BASIC",
    eventTypeIds: [
      "nihil",
    ],
    name: "rerum",
    resource: "dicta",
    status: "ENABLED",
    tags: {
      "et": "ut",
    },
    targets: [
      {
        targetAddress: "et",
        targetType: "voluptate",
      },
      {
        targetAddress: "iste",
        targetType: "vitae",
      },
      {
        targetAddress: "totam",
        targetType: "dolores",
      },
    ],
  },
};

sdk.createNotificationRule(req).then((res: CreateNotificationRuleResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->