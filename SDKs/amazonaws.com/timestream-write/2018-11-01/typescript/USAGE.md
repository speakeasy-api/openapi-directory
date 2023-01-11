<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateDatabaseRequest, CreateDatabaseResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateDatabaseRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "Timestream_20181101.CreateDatabase",
  },
  request: {
    databaseName: "fugit",
    kmsKeyId: "et",
    tags: [
      {
        key: "rerum",
        value: "dicta",
      },
    ],
  },
};

sdk.createDatabase(req).then((res: CreateDatabaseResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->