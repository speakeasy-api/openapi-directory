<!-- Start SDK Example Usage -->
```typescript
import {
  DescribeStreamRequest,
  DescribeStreamResponse,
  DescribeStreamXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: DescribeStreamRequest = {
  describeStreamInput: {
    exclusiveStartShardId: "corrupti",
    limit: 592845,
    streamArn: "distinctio",
  },
  xAmzAlgorithm: "quibusdam",
  xAmzContentSha256: "unde",
  xAmzCredential: "nulla",
  xAmzDate: "corrupti",
  xAmzSecurityToken: "illum",
  xAmzSignature: "vel",
  xAmzSignedHeaders: "error",
  xAmzTarget: DescribeStreamXAmzTargetEnum.DynamoDBStreams20120810DescribeStream,
};

sdk.describeStream(req).then((res: DescribeStreamResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->