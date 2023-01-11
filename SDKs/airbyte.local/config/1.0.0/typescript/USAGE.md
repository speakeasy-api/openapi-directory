<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateConnectionRequest, CreateConnectionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
));
    
const req: CreateConnectionRequest = {
  request: {
    destinationId: "sit",
    name: "voluptas",
    namespaceDefinition: "destination",
    namespaceFormat: "expedita",
    operationIds: [
      "dolor",
      "expedita",
      "voluptas",
    ],
    prefix: "fugit",
    resourceRequirements: {
      cpuLimit: "et",
      cpuRequest: "nihil",
      memoryLimit: "rerum",
      memoryRequest: "dicta",
    },
    schedule: {
      timeUnit: "weeks",
      units: 5617773211005988520,
    },
    sourceId: "et",
    status: "deprecated",
    syncCatalog: {
      streams: [
        {
          config: {
            aliasName: "et",
            cursorField: [
              "iste",
            ],
            destinationSyncMode: "append",
            primaryKey: [
              [
                "illum",
              ],
              [
                "vel",
              ],
              [
                "dolore",
              ],
            ],
            selected: false,
            syncMode: "incremental",
          },
          stream: {
            defaultCursorField: [
              "totam",
              "commodi",
              "quis",
            ],
            jsonSchema: {
              "aut": "odit",
              "non": "voluptas",
            },
            name: "omnis",
            namespace: "aut",
            sourceDefinedCursor: true,
            sourceDefinedPrimaryKey: [
              [
                "autem",
                "consectetur",
              ],
              [
                "odio",
              ],
              [
                "recusandae",
              ],
            ],
            supportedSyncModes: [
              "full_refresh",
              "full_refresh",
            ],
          },
        },
        {
          config: {
            aliasName: "modi",
            cursorField: [
              "inventore",
            ],
            destinationSyncMode: "append_dedup",
            primaryKey: [
              [
                "reprehenderit",
                "tempore",
                "maiores",
              ],
              [
                "dolor",
                "beatae",
                "veritatis",
              ],
              [
                "et",
                "omnis",
                "ipsum",
              ],
            ],
            selected: true,
            syncMode: "full_refresh",
          },
          stream: {
            defaultCursorField: [
              "vel",
            ],
            jsonSchema: {
              "mollitia": "voluptas",
              "quam": "reprehenderit",
              "qui": "qui",
            },
            name: "unde",
            namespace: "in",
            sourceDefinedCursor: false,
            sourceDefinedPrimaryKey: [
              [
                "itaque",
                "ab",
                "neque",
              ],
            ],
            supportedSyncModes: [
              "full_refresh",
              "full_refresh",
              "full_refresh",
            ],
          },
        },
        {
          config: {
            aliasName: "architecto",
            cursorField: [
              "velit",
            ],
            destinationSyncMode: "overwrite",
            primaryKey: [
              [
                "voluptates",
                "magni",
              ],
            ],
            selected: false,
            syncMode: "incremental",
          },
          stream: {
            defaultCursorField: [
              "earum",
            ],
            jsonSchema: {
              "omnis": "ut",
            },
            name: "consequatur",
            namespace: "dolor",
            sourceDefinedCursor: true,
            sourceDefinedPrimaryKey: [
              [
                "consectetur",
              ],
            ],
            supportedSyncModes: [
              "incremental",
            ],
          },
        },
      ],
    },
  },
};

sdk.connection.createConnection(req).then((res: CreateConnectionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->