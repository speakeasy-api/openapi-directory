<!-- Start SDK Example Usage -->
```typescript
import {
  AddFacetToObjectRequest,
  AddFacetToObjectResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AddFacetToObjectRequest = {
  requestBody: {
    objectAttributeList: [
      {
        key: {
          facetName: "provident",
          name: "distinctio",
          schemaArn: "quibusdam",
        },
        value: {
          binaryValue: "unde",
          booleanValue: false,
          datetimeValue: "2021-05-14T08:28:11.899Z",
          numberValue: "illum",
          stringValue: "vel",
        },
      },
      {
        key: {
          facetName: "error",
          name: "deserunt",
          schemaArn: "suscipit",
        },
        value: {
          binaryValue: "iure",
          booleanValue: false,
          datetimeValue: "2022-02-09T12:04:06.508Z",
          numberValue: "ipsa",
          stringValue: "delectus",
        },
      },
      {
        key: {
          facetName: "tempora",
          name: "suscipit",
          schemaArn: "molestiae",
        },
        value: {
          binaryValue: "minus",
          booleanValue: false,
          datetimeValue: "2021-05-31T20:38:28.793Z",
          numberValue: "iusto",
          stringValue: "excepturi",
        },
      },
    ],
    objectReference: {
      selector: "nisi",
    },
    schemaFacet: {
      facetName: "recusandae",
      schemaArn: "temporibus",
    },
  },
  xAmzAlgorithm: "ab",
  xAmzContentSha256: "quis",
  xAmzCredential: "veritatis",
  xAmzDate: "deserunt",
  xAmzSecurityToken: "perferendis",
  xAmzSignature: "ipsam",
  xAmzSignedHeaders: "repellendus",
  xAmzDataPartition: "sapiente",
};

sdk.addFacetToObject(req).then((res: AddFacetToObjectResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->