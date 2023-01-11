<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateSignalingChannelRequest, CreateSignalingChannelResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateSignalingChannelRequest = {
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
    channelName: "voluptas",
    channelType: "SINGLE_MASTER",
    singleMasterConfiguration: {
      messageTtlSeconds: 1543572285742637646,
    },
    tags: [
      {
        key: "rerum",
        value: "dicta",
      },
    ],
  },
};

sdk.createSignalingChannel(req).then((res: CreateSignalingChannelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->