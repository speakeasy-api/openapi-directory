<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AddFacetToObjectRequest, AddFacetToObjectResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AddFacetToObjectRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzDataPartition: "voluptas",
  },
  request: {
    objectAttributeList: [
      {
        key: {
          facetName: "et",
          name: "nihil",
          schemaArn: "rerum",
        },
        value: {
          binaryValue: "dicta",
          booleanValue: true,
          datetimeValue: "1981-07-21T06:30:48Z",
          numberValue: "et",
          stringValue: "ut",
        },
      },
    ],
    objectReference: {
      selector: "dolorem",
    },
    schemaFacet: {
      facetName: "et",
      schemaArn: "voluptate",
    },
  },
};

sdk.addFacetToObject(req).then((res: AddFacetToObjectResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->