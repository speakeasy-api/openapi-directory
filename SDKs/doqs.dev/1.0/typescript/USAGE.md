<!-- Start SDK Example Usage -->
```typescript
import {
  shared.CreateOrUpdateTemplateRequest,
  CreateTemplateDesignerTemplatesPostResponse
} from "openapi/dist/sdk/models/operations";
import {
  OrientationEnum,
  FormatEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: shared.CreateOrUpdateTemplateRequest = {
  components: [
    {
      "distinctio": "quibusdam",
      "unde": "nulla",
      "corrupti": "illum",
    },
    {
      "error": "deserunt",
      "suscipit": "iure",
    },
    {
      "debitis": "ipsa",
      "delectus": "tempora",
    },
  ],
  css: "suscipit",
  footerHtml: "molestiae",
  format: FormatEnum.A5,
  headerHtml: "placeat",
  name: "voluptatum",
  orientation: OrientationEnum.Landscape,
  previewPayload: {
    "nisi": "recusandae",
    "temporibus": "ab",
    "quis": "veritatis",
  },
  templateHtml: "deserunt",
};

sdk.createTemplateDesignerTemplatesPost(req).then((res: CreateTemplateDesignerTemplatesPostResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->