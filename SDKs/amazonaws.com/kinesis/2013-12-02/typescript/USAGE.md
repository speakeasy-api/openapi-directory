<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AddTagsToStreamRequest, AddTagsToStreamResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AddTagsToStreamRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "Kinesis_20131202.AddTagsToStream",
  },
  request: {
    streamName: "fugit",
    tags: {
      "nihil": "rerum",
    },
  },
};

sdk.addTagsToStream(req).then((res: AddTagsToStreamResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->