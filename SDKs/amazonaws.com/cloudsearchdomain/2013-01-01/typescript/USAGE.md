<!-- Start SDK Example Usage -->
```typescript
import {
  SearchRequest,
  SearchResponse,
  SearchFormatEnum,
  SearchPrettyEnum,
  SearchQParserEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: SearchRequest = {
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "provident",
  xAmzCredential: "distinctio",
  xAmzDate: "quibusdam",
  xAmzSecurityToken: "unde",
  xAmzSignature: "nulla",
  xAmzSignedHeaders: "corrupti",
  cursor: "illum",
  expr: "vel",
  facet: "error",
  format: SearchFormatEnum.SDK,
  fq: "deserunt",
  highlight: "suscipit",
  partial: false,
  pretty: SearchPrettyEnum.True,
  q: "iure",
  qOptions: "magnam",
  qParser: SearchQParserEnum.Dismax,
  return: "ipsa",
  size: 963663,
  sort: "tempora",
  start: 383441,
  stats: "molestiae",
};

sdk.search(req).then((res: SearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->