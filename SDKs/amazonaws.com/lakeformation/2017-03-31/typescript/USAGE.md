<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AddLfTagsToResourceRequest, AddLfTagsToResourceResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AddLfTagsToResourceRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "AWSLakeFormation.AddLFTagsToResource",
  },
  request: {
    catalogId: "fugit",
    lfTags: [
      {
        catalogId: "nihil",
        tagKey: "rerum",
        tagValues: [
          "debitis",
          "voluptatum",
          "et",
        ],
      },
    ],
    resource: {
      catalog: {
        "dolorem": "et",
        "voluptate": "iste",
        "vitae": "totam",
      },
      dataLocation: {
        catalogId: "dolores",
        resourceArn: "illum",
      },
      database: {
        catalogId: "debitis",
        name: "vel",
      },
      lfTag: {
        catalogId: "odio",
        tagKey: "dolore",
        tagValues: [
          "aspernatur",
          "accusantium",
        ],
      },
      lfTagPolicy: {
        catalogId: "totam",
        expression: [
          {
            tagKey: "quis",
            tagValues: [
              "aut",
              "odit",
            ],
          },
          {
            tagKey: "non",
            tagValues: [
              "omnis",
            ],
          },
        ],
        resourceType: "DATABASE",
      },
      table: {
        catalogId: "illo",
        databaseName: "sed",
        name: "officiis",
        tableWildcard: {
          "consectetur": "nobis",
          "odio": "qui",
        },
      },
      tableWithColumns: {
        catalogId: "recusandae",
        columnNames: [
          "ipsum",
          "eveniet",
        ],
        columnWildcard: {
          excludedColumnNames: [
            "sint",
            "inventore",
          ],
        },
        databaseName: "ut",
        name: "exercitationem",
      },
    },
  },
};

sdk.addLfTagsToResource(req).then((res: AddLfTagsToResourceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->