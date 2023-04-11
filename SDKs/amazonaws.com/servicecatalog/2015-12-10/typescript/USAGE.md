<!-- Start SDK Example Usage -->
```typescript
import {
  AcceptPortfolioShareRequest,
  AcceptPortfolioShareResponse,
  AcceptPortfolioShareXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  PortfolioShareTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AcceptPortfolioShareRequest = {
  acceptPortfolioShareInput: {
    acceptLanguage: "corrupti",
    portfolioId: "provident",
    portfolioShareType: PortfolioShareTypeEnum.AwsOrganizations,
  },
  xAmzAlgorithm: "quibusdam",
  xAmzContentSha256: "unde",
  xAmzCredential: "nulla",
  xAmzDate: "corrupti",
  xAmzSecurityToken: "illum",
  xAmzSignature: "vel",
  xAmzSignedHeaders: "error",
  xAmzTarget: AcceptPortfolioShareXAmzTargetEnum.Aws242ServiceCatalogServiceAcceptPortfolioShare,
};

sdk.acceptPortfolioShare(req).then((res: AcceptPortfolioShareResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->