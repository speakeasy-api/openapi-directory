<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetMediaRequest, GetMediaResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetMediaRequest = {
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
    startSelector: {
      afterFragmentNumber: "voluptas",
      continuationToken: "fugit",
      startSelectorType: "FRAGMENT_NUMBER",
      startTimestamp: "2003-05-13T04:57:12Z",
    },
    streamARN: "rerum",
    streamName: "dicta",
  },
};

sdk.getMedia(req).then((res: GetMediaResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->