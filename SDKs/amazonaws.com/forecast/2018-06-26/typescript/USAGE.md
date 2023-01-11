<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateDatasetRequest, CreateDatasetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateDatasetRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "AmazonForecast.CreateDataset",
  },
  request: {
    dataFrequency: "fugit",
    datasetName: "et",
    datasetType: "TARGET_TIME_SERIES",
    domain: "METRICS",
    encryptionConfig: {
      kmsKeyArn: "dicta",
      roleArn: "debitis",
    },
    schema: {
      attributes: [
        {
          attributeName: "et",
          attributeType: "integer",
        },
      ],
    },
    tags: [
      {
        key: "et",
        value: "voluptate",
      },
      {
        key: "iste",
        value: "vitae",
      },
      {
        key: "totam",
        value: "dolores",
      },
    ],
  },
};

sdk.createDataset(req).then((res: CreateDatasetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->