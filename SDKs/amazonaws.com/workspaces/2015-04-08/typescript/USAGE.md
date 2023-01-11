<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AssociateConnectionAliasRequest, AssociateConnectionAliasResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AssociateConnectionAliasRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "WorkspacesService.AssociateConnectionAlias",
  },
  request: {
    aliasId: "fugit",
    resourceId: "et",
  },
};

sdk.associateConnectionAlias(req).then((res: AssociateConnectionAliasResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->