<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { SearchRequest, SearchResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: SearchRequest = {
  queryParams: {
    cursor: "sit",
    expr: "voluptas",
    facet: "culpa",
    format: "sdk",
    fq: "consequuntur",
    highlight: "dolor",
    partial: true,
    pretty: "true",
    q: "fugit",
    qOptions: "et",
    qParser: "simple",
    return: "rerum",
    size: 7837839688282259259,
    sort: "debitis",
    start: 5617773211005988520,
    stats: "et",
  },
  headers: {
    xAmzAlgorithm: "ut",
    xAmzContentSha256: "dolorem",
    xAmzCredential: "et",
    xAmzDate: "voluptate",
    xAmzSecurityToken: "iste",
    xAmzSignature: "vitae",
    xAmzSignedHeaders: "totam",
  },
};

sdk.search(req).then((res: SearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->