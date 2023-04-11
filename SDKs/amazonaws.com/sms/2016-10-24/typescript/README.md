# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/sms/2016-10-24/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/sms/2016-10-24/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAppRequest,
  CreateAppResponse,
  CreateAppXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  VmManagerTypeEnum,
  ServerTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateAppRequest = {
  createAppRequest: {
    clientToken: "corrupti",
    description: "provident",
    name: "distinctio",
    roleName: "quibusdam",
    serverGroups: [
      {
        name: "nulla",
        serverGroupId: "corrupti",
        serverList: [
          {
            replicationJobId: "vel",
            replicationJobTerminated: false,
            serverId: "error",
            serverType: ServerTypeEnum.VirtualMachine,
            vmServer: {
              vmManagerName: "deserunt",
              vmManagerType: VmManagerTypeEnum.Scvmm,
              vmName: "iure",
              vmPath: "magnam",
              vmServerAddress: {
                vmId: "debitis",
                vmManagerId: "ipsa",
              },
            },
          },
          {
            replicationJobId: "delectus",
            replicationJobTerminated: false,
            serverId: "tempora",
            serverType: ServerTypeEnum.VirtualMachine,
            vmServer: {
              vmManagerName: "suscipit",
              vmManagerType: VmManagerTypeEnum.Scvmm,
              vmName: "minus",
              vmPath: "placeat",
              vmServerAddress: {
                vmId: "voluptatum",
                vmManagerId: "iusto",
              },
            },
          },
          {
            replicationJobId: "excepturi",
            replicationJobTerminated: false,
            serverId: "nisi",
            serverType: ServerTypeEnum.VirtualMachine,
            vmServer: {
              vmManagerName: "recusandae",
              vmManagerType: VmManagerTypeEnum.HypervManager,
              vmName: "ab",
              vmPath: "quis",
              vmServerAddress: {
                vmId: "veritatis",
                vmManagerId: "deserunt",
              },
            },
          },
          {
            replicationJobId: "perferendis",
            replicationJobTerminated: false,
            serverId: "ipsam",
            serverType: ServerTypeEnum.VirtualMachine,
            vmServer: {
              vmManagerName: "repellendus",
              vmManagerType: VmManagerTypeEnum.HypervManager,
              vmName: "quo",
              vmPath: "odit",
              vmServerAddress: {
                vmId: "at",
                vmManagerId: "at",
              },
            },
          },
        ],
      },
      {
        name: "maiores",
        serverGroupId: "molestiae",
        serverList: [
          {
            replicationJobId: "quod",
            replicationJobTerminated: false,
            serverId: "esse",
            serverType: ServerTypeEnum.VirtualMachine,
            vmServer: {
              vmManagerName: "totam",
              vmManagerType: VmManagerTypeEnum.HypervManager,
              vmName: "dolorum",
              vmPath: "dicta",
              vmServerAddress: {
                vmId: "nam",
                vmManagerId: "officia",
              },
            },
          },
          {
            replicationJobId: "occaecati",
            replicationJobTerminated: false,
            serverId: "fugit",
            serverType: ServerTypeEnum.VirtualMachine,
            vmServer: {
              vmManagerName: "deleniti",
              vmManagerType: VmManagerTypeEnum.HypervManager,
              vmName: "optio",
              vmPath: "totam",
              vmServerAddress: {
                vmId: "beatae",
                vmManagerId: "commodi",
              },
            },
          },
          {
            replicationJobId: "molestiae",
            replicationJobTerminated: false,
            serverId: "modi",
            serverType: ServerTypeEnum.VirtualMachine,
            vmServer: {
              vmManagerName: "qui",
              vmManagerType: VmManagerTypeEnum.HypervManager,
              vmName: "cum",
              vmPath: "esse",
              vmServerAddress: {
                vmId: "ipsum",
                vmManagerId: "excepturi",
              },
            },
          },
          {
            replicationJobId: "aspernatur",
            replicationJobTerminated: false,
            serverId: "perferendis",
            serverType: ServerTypeEnum.VirtualMachine,
            vmServer: {
              vmManagerName: "ad",
              vmManagerType: VmManagerTypeEnum.Scvmm,
              vmName: "sed",
              vmPath: "iste",
              vmServerAddress: {
                vmId: "dolor",
                vmManagerId: "natus",
              },
            },
          },
        ],
      },
      {
        name: "laboriosam",
        serverGroupId: "hic",
        serverList: [
          {
            replicationJobId: "fuga",
            replicationJobTerminated: false,
            serverId: "in",
            serverType: ServerTypeEnum.VirtualMachine,
            vmServer: {
              vmManagerName: "corporis",
              vmManagerType: VmManagerTypeEnum.Scvmm,
              vmName: "iure",
              vmPath: "saepe",
              vmServerAddress: {
                vmId: "quidem",
                vmManagerId: "architecto",
              },
            },
          },
          {
            replicationJobId: "ipsa",
            replicationJobTerminated: false,
            serverId: "reiciendis",
            serverType: ServerTypeEnum.VirtualMachine,
            vmServer: {
              vmManagerName: "est",
              vmManagerType: VmManagerTypeEnum.Scvmm,
              vmName: "laborum",
              vmPath: "dolores",
              vmServerAddress: {
                vmId: "dolorem",
                vmManagerId: "corporis",
              },
            },
          },
          {
            replicationJobId: "explicabo",
            replicationJobTerminated: false,
            serverId: "nobis",
            serverType: ServerTypeEnum.VirtualMachine,
            vmServer: {
              vmManagerName: "enim",
              vmManagerType: VmManagerTypeEnum.Scvmm,
              vmName: "nemo",
              vmPath: "minima",
              vmServerAddress: {
                vmId: "excepturi",
                vmManagerId: "accusantium",
              },
            },
          },
          {
            replicationJobId: "iure",
            replicationJobTerminated: false,
            serverId: "culpa",
            serverType: ServerTypeEnum.VirtualMachine,
            vmServer: {
              vmManagerName: "doloribus",
              vmManagerType: VmManagerTypeEnum.HypervManager,
              vmName: "architecto",
              vmPath: "mollitia",
              vmServerAddress: {
                vmId: "dolorem",
                vmManagerId: "culpa",
              },
            },
          },
        ],
      },
    ],
    tags: [
      {
        key: "repellat",
        value: "mollitia",
      },
    ],
  },
  xAmzAlgorithm: "occaecati",
  xAmzContentSha256: "numquam",
  xAmzCredential: "commodi",
  xAmzDate: "quam",
  xAmzSecurityToken: "molestiae",
  xAmzSignature: "velit",
  xAmzSignedHeaders: "error",
  xAmzTarget: CreateAppXAmzTargetEnum.AWSServerMigrationServiceV20161024CreateApp,
};

sdk.createApp(req).then((res: CreateAppResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createApp` - Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.
* `createReplicationJob` - Creates a replication job. The replication job schedules periodic replication runs to replicate your server to Amazon Web Services. Each replication run creates an Amazon Machine Image (AMI).
* `deleteApp` - Deletes the specified application. Optionally deletes the launched stack associated with the application and all Server Migration Service replication jobs for servers in the application.
* `deleteAppLaunchConfiguration` - Deletes the launch configuration for the specified application.
* `deleteAppReplicationConfiguration` - Deletes the replication configuration for the specified application.
* `deleteAppValidationConfiguration` - Deletes the validation configuration for the specified application.
* `deleteReplicationJob` - <p>Deletes the specified replication job.</p> <p>After you delete a replication job, there are no further replication runs. Amazon Web Services deletes the contents of the Amazon S3 bucket used to store Server Migration Service artifacts. The AMIs created by the replication runs are not deleted.</p>
* `deleteServerCatalog` - Deletes all servers from your server catalog.
* `disassociateConnector` - <p>Disassociates the specified connector from Server Migration Service.</p> <p>After you disassociate a connector, it is no longer available to support replication jobs.</p>
* `generateChangeSet` - Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
* `generateTemplate` - Generates an CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
* `getApp` - Retrieve information about the specified application.
* `getAppLaunchConfiguration` - Retrieves the application launch configuration associated with the specified application.
* `getAppReplicationConfiguration` - Retrieves the application replication configuration associated with the specified application.
* `getAppValidationConfiguration` - Retrieves information about a configuration for validating an application.
* `getAppValidationOutput` - Retrieves output from validating an application.
* `getConnectors` - Describes the connectors registered with the Server Migration Service.
* `getReplicationJobs` - Describes the specified replication job or all of your replication jobs.
* `getReplicationRuns` - Describes the replication runs for the specified replication job.
* `getServers` - <p>Describes the servers in your server catalog.</p> <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>
* `importAppCatalog` - Allows application import from Migration Hub.
* `importServerCatalog` - <p>Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers to import.</p> <p>This call returns immediately, but might take additional time to retrieve all the servers.</p>
* `launchApp` - Launches the specified application as a stack in CloudFormation.
* `listApps` - Retrieves summaries for all applications.
* `notifyAppValidationOutput` - Provides information to Server Migration Service about whether application validation is successful.
* `putAppLaunchConfiguration` - Creates or updates the launch configuration for the specified application.
* `putAppReplicationConfiguration` - Creates or updates the replication configuration for the specified application.
* `putAppValidationConfiguration` - Creates or updates a validation configuration for the specified application.
* `startAppReplication` - Starts replicating the specified application by creating replication jobs for each server in the application.
* `startOnDemandAppReplication` - Starts an on-demand replication run for the specified application.
* `startOnDemandReplicationRun` - <p>Starts an on-demand replication run for the specified replication job. This replication run starts immediately. This replication run is in addition to the ones already scheduled.</p> <p>There is a limit on the number of on-demand replications runs that you can request in a 24-hour period.</p>
* `stopAppReplication` - Stops replicating the specified application by deleting the replication job for each server in the application.
* `terminateApp` - Terminates the stack for the specified application.
* `updateApp` - Updates the specified application.
* `updateReplicationJob` - Updates the specified settings for the specified replication job.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

