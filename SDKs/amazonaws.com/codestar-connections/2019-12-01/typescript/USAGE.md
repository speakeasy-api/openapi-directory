<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateConnectionRequest, CreateConnectionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateConnectionRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection",
  },
  request: {
    connectionName: "fugit",
    hostArn: "et",
    providerType: "Bitbucket",
    tags: [
      {
        key: "dicta",
        value: "debitis",
      },
      {
        key: "voluptatum",
        value: "et",
      },
      {
        key: "ut",
        value: "dolorem",
      },
    ],
  },
};

sdk.createConnection(req).then((res: CreateConnectionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->