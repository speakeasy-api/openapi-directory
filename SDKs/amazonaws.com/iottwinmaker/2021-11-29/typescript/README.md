# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/iottwinmaker/2021-11-29/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/iottwinmaker/2021-11-29/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `batchPutPropertyValues` - Sets values for multiple time series properties.
* `createComponentType` - Creates a component type.
* `createEntity` - Creates an entity.
* `createScene` - Creates a scene.
* `createSyncJob` - This action creates a SyncJob.
* `createWorkspace` - Creates a workplace.
* `deleteComponentType` - Deletes a component type.
* `deleteEntity` - Deletes an entity.
* `deleteScene` - Deletes a scene.
* `deleteSyncJob` - Delete the SyncJob.
* `deleteWorkspace` - Deletes a workspace.
* `executeQuery` - Run queries to access information from your knowledge graph of entities within individual workspaces.
* `getComponentType` - Retrieves information about a component type.
* `getEntity` - Retrieves information about an entity.
* `getPricingPlan` - Gets the pricing plan.
* `getPropertyValue` - <p>Gets the property values for a component, component type, entity, or workspace.</p> <p>You must specify a value for either <code>componentName</code>, <code>componentTypeId</code>, <code>entityId</code>, or <code>workspaceId</code>.</p>
* `getPropertyValueHistory` - <p>Retrieves information about the history of a time series property value for a component, component type, entity, or workspace.</p> <p>You must specify a value for <code>workspaceId</code>. For entity-specific queries, specify values for <code>componentName</code> and <code>entityId</code>. For cross-entity quries, specify a value for <code>componentTypeId</code>.</p>
* `getScene` - Retrieves information about a scene.
* `getSyncJob` - Gets the SyncJob.
* `getWorkspace` - Retrieves information about a workspace.
* `listComponentTypes` - Lists all component types in a workspace.
* `listEntities` - Lists all entities in a workspace.
* `listScenes` - Lists all scenes in a workspace.
* `listSyncJobs` - List all SyncJobs.
* `listSyncResources` - Lists the sync resources.
* `listTagsForResource` - Lists all tags associated with a resource.
* `listWorkspaces` - Retrieves information about workspaces in the current account.
* `tagResource` - Adds tags to a resource.
* `untagResource` - Removes tags from a resource.
* `updateComponentType` - Updates information in a component type.
* `updateEntity` - Updates an entity.
* `updatePricingPlan` - Update the pricing plan.
* `updateScene` - Updates a scene.
* `updateWorkspace` - Updates a workspace.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

