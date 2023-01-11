<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DescribeServicesRequest, DescribeServicesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: DescribeServicesRequest = {
  queryParams: {
    maxResults: "sit",
    nextToken: "voluptas",
  },
  headers: {
    xAmzAlgorithm: "culpa",
    xAmzContentSha256: "expedita",
    xAmzCredential: "consequuntur",
    xAmzDate: "dolor",
    xAmzSecurityToken: "expedita",
    xAmzSignature: "voluptas",
    xAmzSignedHeaders: "fugit",
    xAmzTarget: "AWSPriceListService.DescribeServices",
  },
  request: {
    formatVersion: "nihil",
    maxResults: 8325060299420976708,
    nextToken: "dicta",
    serviceCode: "debitis",
  },
};

sdk.describeServices(req).then((res: DescribeServicesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->