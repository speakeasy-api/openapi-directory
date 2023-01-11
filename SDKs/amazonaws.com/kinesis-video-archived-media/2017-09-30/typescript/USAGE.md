<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetClipRequest, GetClipResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetClipRequest = {
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
    clipFragmentSelector: {
      fragmentSelectorType: "SERVER_TIMESTAMP",
      timestampRange: {
        endTimestamp: "2011-08-12T10:11:12Z",
        startTimestamp: "2003-05-13T04:57:12Z",
      },
    },
    streamARN: "rerum",
    streamName: "dicta",
  },
};

sdk.getClip(req).then((res: GetClipResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->