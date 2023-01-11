<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GenerateDataSetRequest, GenerateDataSetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GenerateDataSetRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "MarketplaceCommerceAnalytics20150701.GenerateDataSet",
  },
  request: {
    customerDefinedValues: {
      "et": "nihil",
    },
    dataSetPublicationDate: "2004-06-02T10:14:12Z",
    dataSetType: "daily_business_usage_by_instance_type",
    destinationS3BucketName: "et",
    destinationS3Prefix: "ut",
    roleNameArn: "dolorem",
    snsTopicArn: "et",
  },
};

sdk.generateDataSet(req).then((res: GenerateDataSetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->