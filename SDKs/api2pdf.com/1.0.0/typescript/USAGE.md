<!-- Start SDK Example Usage -->
```typescript
import {
  shared.ChromeHtmlToPdfRequest,
  ChromeFromHtmlPostResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    headerApiKey: "YOUR_API_KEY_HERE",
  },
});

const req: shared.ChromeHtmlToPdfRequest = {
  fileName: "test.pdf",
  html: "<p>Hello World</p>",
  inlinePdf: true,
  options: {
    landscape: "true",
    printBackground: false,
  },
};

sdk.headlessChrome.chromeFromHtmlPost(req).then((res: ChromeFromHtmlPostResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->