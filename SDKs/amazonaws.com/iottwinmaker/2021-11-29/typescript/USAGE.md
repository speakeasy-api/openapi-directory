<!-- Start SDK Example Usage -->
```typescript
import {
  BatchPutPropertyValuesRequest,
  BatchPutPropertyValuesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchPutPropertyValuesRequest = {
  requestBody: {
    entries: [
      {
        entityPropertyReference: {
          componentName: "provident",
          entityId: "distinctio",
          externalIdProperty: {
            "unde": "nulla",
            "corrupti": "illum",
            "vel": "error",
            "deserunt": "suscipit",
          },
          propertyName: "iure",
        },
        propertyValues: [
          {
            time: "debitis",
            timestamp: "2022-01-14T06:18:51.036Z",
            value: {
              booleanValue: false,
              doubleValue: 2726.56,
              expression: "suscipit",
              integerValue: 477665,
              listValue: [
                {},
                {},
                {},
                {},
              ],
              longValue: 812169,
              mapValue: {
                "iusto": {},
                "excepturi": {},
                "nisi": {},
              },
              relationshipValue: {
                targetComponentName: "recusandae",
                targetEntityId: "temporibus",
              },
              stringValue: "ab",
            },
          },
          {
            time: "quis",
            timestamp: "2022-05-09T10:00:51.349Z",
            value: {
              booleanValue: false,
              doubleValue: 202.18,
              expression: "ipsam",
              integerValue: 832620,
              listValue: [
                {},
                {},
                {},
                {},
              ],
              longValue: 778157,
              mapValue: {
                "at": {},
              },
              relationshipValue: {
                targetComponentName: "at",
                targetEntityId: "maiores",
              },
              stringValue: "molestiae",
            },
          },
        ],
      },
      {
        entityPropertyReference: {
          componentName: "quod",
          entityId: "quod",
          externalIdProperty: {
            "totam": "porro",
            "dolorum": "dicta",
          },
          propertyName: "nam",
        },
        propertyValues: [
          {
            time: "occaecati",
            timestamp: "2022-06-18T20:36:37.412Z",
            value: {
              booleanValue: false,
              doubleValue: 9446.69,
              expression: "optio",
              integerValue: 521848,
              listValue: [
                {},
              ],
              longValue: 414662,
              mapValue: {
                "modi": {},
                "qui": {},
              },
              relationshipValue: {
                targetComponentName: "impedit",
                targetEntityId: "cum",
              },
              stringValue: "esse",
            },
          },
          {
            time: "ipsum",
            timestamp: "2022-09-24T06:58:38.511Z",
            value: {
              booleanValue: false,
              doubleValue: 187.89,
              expression: "ad",
              integerValue: 617636,
              listValue: [
                {},
              ],
              longValue: 612096,
              mapValue: {
                "natus": {},
              },
              relationshipValue: {
                targetComponentName: "laboriosam",
                targetEntityId: "hic",
              },
              stringValue: "saepe",
            },
          },
          {
            time: "fuga",
            timestamp: "2022-08-22T18:42:38.160Z",
            value: {
              booleanValue: false,
              doubleValue: 6130.64,
              expression: "iure",
              integerValue: 902349,
              listValue: [
                {},
                {},
                {},
              ],
              longValue: 99280,
              mapValue: {
                "reiciendis": {},
              },
              relationshipValue: {
                targetComponentName: "est",
                targetEntityId: "mollitia",
              },
              stringValue: "laborum",
            },
          },
        ],
      },
      {
        entityPropertyReference: {
          componentName: "dolores",
          entityId: "dolorem",
          externalIdProperty: {
            "explicabo": "nobis",
            "enim": "omnis",
          },
          propertyName: "nemo",
        },
        propertyValues: [
          {
            time: "excepturi",
            timestamp: "2022-07-24T21:51:02.112Z",
            value: {
              booleanValue: false,
              doubleValue: 6342.74,
              expression: "doloribus",
              integerValue: 958950,
              listValue: [
                {},
              ],
              longValue: 652790,
              mapValue: {
                "culpa": {},
              },
              relationshipValue: {
                targetComponentName: "consequuntur",
                targetEntityId: "repellat",
              },
              stringValue: "mollitia",
            },
          },
          {
            time: "occaecati",
            timestamp: "2022-08-02T18:07:51.623Z",
            value: {
              booleanValue: false,
              doubleValue: 4663.11,
              expression: "molestiae",
              integerValue: 244425,
              listValue: [
                {},
                {},
                {},
              ],
              longValue: 158969,
              mapValue: {
                "vitae": {},
                "laborum": {},
              },
              relationshipValue: {
                targetComponentName: "animi",
                targetEntityId: "enim",
              },
              stringValue: "odit",
            },
          },
        ],
      },
    ],
  },
  xAmzAlgorithm: "quo",
  xAmzContentSha256: "sequi",
  xAmzCredential: "tenetur",
  xAmzDate: "ipsam",
  xAmzSecurityToken: "id",
  xAmzSignature: "possimus",
  xAmzSignedHeaders: "aut",
  workspaceId: "quasi",
};

sdk.batchPutPropertyValues(req).then((res: BatchPutPropertyValuesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->