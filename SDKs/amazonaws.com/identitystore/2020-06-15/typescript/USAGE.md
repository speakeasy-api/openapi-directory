<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DescribeGroupRequest, DescribeGroupResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: DescribeGroupRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "AWSIdentityStore.DescribeGroup",
  },
  request: {
    groupId: "fugit",
    identityStoreId: "et",
  },
};

sdk.describeGroup(req).then((res: DescribeGroupResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->