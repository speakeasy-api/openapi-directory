<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { QueryForecastRequest, QueryForecastResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: QueryForecastRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "AmazonForecastRuntime.QueryForecast",
  },
  request: {
    endDate: "fugit",
    filters: {
      "nihil": "rerum",
    },
    forecastArn: "dicta",
    nextToken: "debitis",
    startDate: "voluptatum",
  },
};

sdk.queryForecast(req).then((res: QueryForecastResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->