# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/api2pdf.com/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/api2pdf.com/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### headlessChrome

* `chromeFromHtmlPost` - Convert raw HTML to PDF
* `chromeFromUrlGET` - Convert URL to PDF
* `chromeFromUrlPost` - Convert URL to PDF

### libreOffice

* `libreConvertPost` - Convert office document or image to PDF

### mergeCombinePdfs

* `mergePost` - Merge multiple PDFs together

### zxingZebraCrossingBarCodes

* `zebraGET` - Generate bar codes and QR codes with ZXING.

### wkhtmltopdf

* `wkhtmltopdfFromHtmlPost` - Convert raw HTML to PDF
* `wkhtmltopdfFromUrlGET` - Convert URL to PDF
* `wkhtmltopdfFromUrlPost` - Convert URL to PDF
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

