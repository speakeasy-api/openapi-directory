<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DescribeReportCreationRequest, DescribeReportCreationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: DescribeReportCreationRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "ResourceGroupsTaggingAPI_20170126.DescribeReportCreation",
  },
  request: {
    "et": "nihil",
  },
};

sdk.describeReportCreation(req).then((res: DescribeReportCreationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->