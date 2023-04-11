# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/entitlement.marketplace/2017-01-11/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/entitlement.marketplace/2017-01-11/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetEntitlementsRequest,
  GetEntitlementsResponse,
  GetEntitlementsXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GetEntitlementsRequest = {
  getEntitlementsRequest: {
    filter: {
      "provident": [
        "quibusdam",
        "unde",
        "nulla",
      ],
      "corrupti": [
        "vel",
        "error",
        "deserunt",
        "suscipit",
      ],
      "iure": [
        "debitis",
        "ipsa",
      ],
    },
    maxResults: 963663,
    nextToken: "tempora",
    productCode: "suscipit",
  },
  xAmzAlgorithm: "molestiae",
  xAmzContentSha256: "minus",
  xAmzCredential: "placeat",
  xAmzDate: "voluptatum",
  xAmzSecurityToken: "iusto",
  xAmzSignature: "excepturi",
  xAmzSignedHeaders: "nisi",
  xAmzTarget: GetEntitlementsXAmzTargetEnum.AWSMPEntitlementServiceGetEntitlements,
};

sdk.getEntitlements(req).then((res: GetEntitlementsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `getEntitlements` - GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

