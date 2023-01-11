<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetLinesRequest, GetLinesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKeyAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetLinesRequest = {
  queryParams: {
    away: "sit",
    conference: "voluptas",
    gameId: 6050128673802995827,
    home: "expedita",
    seasonType: "consequuntur",
    team: "dolor",
    week: 1774932891286980153,
    year: 6044372234677422456,
  },
};

sdk.betting.getLines(req).then((res: GetLinesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->