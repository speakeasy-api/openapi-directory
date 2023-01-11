<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AddAttributesToFindingsRequest, AddAttributesToFindingsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AddAttributesToFindingsRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "InspectorService.AddAttributesToFindings",
  },
  request: {
    attributes: [
      {
        key: "et",
        value: "nihil",
      },
    ],
    findingArns: [
      "dicta",
      "debitis",
      "voluptatum",
    ],
  },
};

sdk.addAttributesToFindings(req).then((res: AddAttributesToFindingsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->