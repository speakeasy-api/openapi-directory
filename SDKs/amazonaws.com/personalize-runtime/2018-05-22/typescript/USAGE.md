<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetPersonalizedRankingRequest, GetPersonalizedRankingResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetPersonalizedRankingRequest = {
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
    campaignArn: "voluptas",
    context: {
      "et": "nihil",
    },
    filterArn: "rerum",
    filterValues: {
      "debitis": "voluptatum",
      "et": "ut",
      "dolorem": "et",
    },
    inputList: [
      "iste",
    ],
    userId: "vitae",
  },
};

sdk.getPersonalizedRanking(req).then((res: GetPersonalizedRankingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->