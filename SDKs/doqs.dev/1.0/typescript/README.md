# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/doqs.dev/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/doqs.dev/1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createTemplateDesignerTemplatesPost` - Create Template
* `deleteDesignerTemplatesIdDelete` - Delete
* `generatePdfDesignerTemplatesIdGeneratePost` - Generate Pdf
* `listTemplatesDesignerTemplatesGet` - List Templates
* `listTemplatesDesignerTemplatesIdGet` - List Templates
* `previewDesignerTemplatesPreviewPost` - Preview
* `updateTemplateDesignerTemplatesIdPut` - Update Template

### templates

* `create` - Create
* `deleteTemplatesIdDelete` - Delete 
* `fill` - Fill
* `get` - Get Template
* `getFileTemplatesIdFileGet` - Get File
* `list` - List 
* `update` - Update
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

