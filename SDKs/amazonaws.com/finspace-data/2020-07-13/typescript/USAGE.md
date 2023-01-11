<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateChangesetRequest, CreateChangesetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateChangesetRequest = {
  pathParams: {
    datasetId: "sit",
  },
  headers: {
    xAmzAlgorithm: "voluptas",
    xAmzContentSha256: "culpa",
    xAmzCredential: "expedita",
    xAmzDate: "consequuntur",
    xAmzSecurityToken: "dolor",
    xAmzSignature: "expedita",
    xAmzSignedHeaders: "voluptas",
  },
  request: {
    changeType: "REPLACE",
    formatParams: {
      "nihil": "rerum",
    },
    formatType: "XML",
    sourceParams: {
      "voluptatum": "et",
    },
    sourceType: "S3",
    tags: {
      "et": "voluptate",
      "iste": "vitae",
      "totam": "dolores",
    },
  },
};

sdk.createChangeset(req).then((res: CreateChangesetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->