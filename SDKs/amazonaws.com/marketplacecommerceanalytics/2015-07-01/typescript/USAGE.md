<!-- Start SDK Example Usage -->
```typescript
import {
  GenerateDataSetRequest,
  GenerateDataSetResponse,
  GenerateDataSetXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  DataSetTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GenerateDataSetRequest = {
  generateDataSetRequest: {
    customerDefinedValues: {
      "provident": "distinctio",
      "quibusdam": "unde",
      "nulla": "corrupti",
    },
    dataSetPublicationDate: "2021-09-24T02:21:06.409Z",
    dataSetType: DataSetTypeEnum.DisbursedAmountByCustomerGeo,
    destinationS3BucketName: "deserunt",
    destinationS3Prefix: "suscipit",
    roleNameArn: "iure",
    snsTopicArn: "magnam",
  },
  xAmzAlgorithm: "debitis",
  xAmzContentSha256: "ipsa",
  xAmzCredential: "delectus",
  xAmzDate: "tempora",
  xAmzSecurityToken: "suscipit",
  xAmzSignature: "molestiae",
  xAmzSignedHeaders: "minus",
  xAmzTarget: GenerateDataSetXAmzTargetEnum.MarketplaceCommerceAnalytics20150701GenerateDataSet,
};

sdk.generateDataSet(req).then((res: GenerateDataSetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->