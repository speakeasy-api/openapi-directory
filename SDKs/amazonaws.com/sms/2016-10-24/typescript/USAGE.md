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