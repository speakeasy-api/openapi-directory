# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/fraudlabspro.com/sms-verification/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/fraudlabspro.com/sms-verification/1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetV1VerificationResultRequest,
  GetV1VerificationResultResponse,
  GetV1VerificationResultFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetV1VerificationResultRequest = {
  format: GetV1VerificationResultFormatEnum.Xml,
  key: "provident",
  otp: "distinctio",
  tranId: "quibusdam",
};

sdk.getV1VerificationResult(req).then((res: GetV1VerificationResultResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `getV1VerificationResult` - Verify that an OTP sent by the Send SMS Verification API is valid.
* `postV1VerificationSend` - Send an SMS with verification code and a custom message for authentication purpose.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

