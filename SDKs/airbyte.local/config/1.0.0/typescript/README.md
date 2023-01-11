# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### connection

* `createConnection` - Create a connection between a source and a destination
* `deleteConnection` - Delete a connection
* `getConnection` - Get a connection
* `getState` - Fetch the current state for a connection.
* `listConnectionsForWorkspace` - Returns all connections for a workspace.
* `resetConnection` - Reset the data for the connection. Deletes data generated by the connection in the destination. Resets any cursors back to initial state.
* `syncConnection` - Trigger a manual sync of the connection
* `updateConnection` - Update a connection

### deployment

* `exportArchive` - Export Airbyte Configuration and Data Archive
* `importArchive` - Import Airbyte Configuration and Data Archive

### destination

* `checkConnectionToDestination` - Check connection to the destination
* `checkConnectionToDestinationForUpdate` - Check connection for a proposed update to a destination
* `createDestination` - Create a destination
* `deleteDestination` - Delete the destination
* `getDestination` - Get configured destination
* `listDestinationsForWorkspace` - List configured destinations for a workspace
* `updateDestination` - Update a destination

### destination_definition

* `createDestinationDefinition` - Creates a destinationsDefinition
* `getDestinationDefinition` - Get destinationDefinition
* `listDestinationDefinitions` - List all the destinationDefinitions the current Airbyte deployment is configured to use
* `listLatestDestinationDefinitions` - List the latest destinationDefinitions Airbyte supports
* `updateDestinationDefinition` - Update destinationDefinition

### destination_definition_specification

* `getDestinationDefinitionSpecification` - Get specification for a destinationDefinition

### health

* `getHealthCheck` - Health Check

### jobs

* `cancelJob` - Cancels a job
* `getJobInfo` - Get information about a job
* `listJobsFor` - Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.

### logs

* `getLogs` - Get logs

### notifications

* `tryNotificationConfig` - Try sending a notifications

### openapi

* `getOpenApiSpec` - Returns the openapi specification

### operation

* `checkOperation` - Check if an operation to be created is valid
* `createOperation` - Create an operation to be applied as part of a connection pipeline
* `deleteOperation` - Delete an operation
* `getOperation` - Returns an operation
* `listOperationsForConnection` - Returns all operations for a connection.
* `updateOperation` - Update an operation

### scheduler

* `executeDestinationCheckConnection` - Run check connection for a given destination configuration
* `executeSourceCheckConnection` - Run check connection for a given source configuration
* `executeSourceDiscoverSchema` - Run discover schema for a given source a source configuration

### source

* `checkConnectionToSource` - Check connection to the source
* `checkConnectionToSourceForUpdate` - Check connection for a proposed update to a source
* `createSource` - Create a source
* `deleteSource` - Delete a source
* `discoverSchemaForSource` - Discover the schema catalog of the source
* `getSource` - Get source
* `listSourcesForWorkspace` - List sources for workspace
* `updateSource` - Update a source

### source_definition

* `createSourceDefinition` - Creates a sourceDefinition
* `getSourceDefinition` - Get source
* `listLatestSourceDefinitions` - List the latest sourceDefinitions Airbyte supports
* `listSourceDefinitions` - List all the sourceDefinitions the current Airbyte deployment is configured to use
* `updateSourceDefinition` - Update a sourceDefinition

### source_definition_specification

* `getSourceDefinitionSpecification` - Get specification for a SourceDefinition.

### web_backend

* `webBackendCreateConnection` - Create a connection
* `webBackendGetConnection` - Get a connection
* `webBackendListConnectionsForWorkspace` - Returns all connections for a workspace.
* `webBackendRecreateDestination` - Recreate a destination
* `webBackendRecreateSource` - Recreate a source
* `webBackendUpdateConnection` - Update a connection

### workspace

* `createWorkspace` - Creates a workspace
* `deleteWorkspace` - Deletes a workspace
* `getWorkspace` - Find workspace by ID
* `getWorkspaceBySlug` - Find workspace by slug
* `listWorkspaces` - List all workspaces registered in the current Airbyte deployment
* `updateWorkspace` - Update workspace state

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
