<!-- Start SDK Example Usage -->
```typescript
import {
  QueryForecastRequest,
  QueryForecastResponse,
  QueryForecastXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: QueryForecastRequest = {
  queryForecastRequest: {
    endDate: "corrupti",
    filters: {
      "distinctio": "quibusdam",
      "unde": "nulla",
      "corrupti": "illum",
    },
    forecastArn: "vel",
    nextToken: "error",
    startDate: "deserunt",
  },
  xAmzAlgorithm: "suscipit",
  xAmzContentSha256: "iure",
  xAmzCredential: "magnam",
  xAmzDate: "debitis",
  xAmzSecurityToken: "ipsa",
  xAmzSignature: "delectus",
  xAmzSignedHeaders: "tempora",
  xAmzTarget: QueryForecastXAmzTargetEnum.AmazonForecastRuntimeQueryForecast,
};

sdk.queryForecast(req).then((res: QueryForecastResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->