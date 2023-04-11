<!-- Start SDK Example Usage -->
```typescript
import {
  GETAddClientIDToOpenIDConnectProviderRequest,
  GETAddClientIDToOpenIDConnectProviderResponse,
  GETAddClientIDToOpenIDConnectProviderActionEnum,
  GETAddClientIDToOpenIDConnectProviderVersionEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GETAddClientIDToOpenIDConnectProviderRequest = {
  action: GETAddClientIDToOpenIDConnectProviderActionEnum.AddClientIDToOpenIDConnectProvider,
  clientID: "corrupti",
  openIDConnectProviderArn: "provident",
  version: GETAddClientIDToOpenIDConnectProviderVersionEnum.TwoThousandAndTen0508,
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
};

sdk.getAddClientIDToOpenIDConnectProvider(req).then((res: GETAddClientIDToOpenIDConnectProviderResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->