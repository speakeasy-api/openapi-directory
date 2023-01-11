<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateAppRequest, CreateAppResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateAppRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "AWSServerMigrationService_V2016_10_24.CreateApp",
  },
  request: {
    clientToken: "fugit",
    description: "et",
    name: "nihil",
    roleName: "rerum",
    serverGroups: [
      {
        name: "debitis",
        serverGroupId: "voluptatum",
        serverList: [
          {
            replicationJobId: "ut",
            replicationJobTerminated: true,
            serverId: "et",
            serverType: "VIRTUAL_MACHINE",
            vmServer: {
              vmManagerName: "iste",
              vmManagerType: "VSPHERE",
              vmName: "totam",
              vmPath: "dolores",
              vmServerAddress: {
                vmId: "illum",
                vmManagerId: "debitis",
              },
            },
          },
        ],
      },
      {
        name: "vel",
        serverGroupId: "odio",
        serverList: [
          {
            replicationJobId: "id",
            replicationJobTerminated: true,
            serverId: "accusantium",
            serverType: "VIRTUAL_MACHINE",
            vmServer: {
              vmManagerName: "commodi",
              vmManagerType: "HYPERV-MANAGER",
              vmName: "est",
              vmPath: "aut",
              vmServerAddress: {
                vmId: "odit",
                vmManagerId: "non",
              },
            },
          },
          {
            replicationJobId: "voluptas",
            replicationJobTerminated: true,
            serverId: "aut",
            serverType: "VIRTUAL_MACHINE",
            vmServer: {
              vmManagerName: "sed",
              vmManagerType: "SCVMM",
              vmName: "autem",
              vmPath: "consectetur",
              vmServerAddress: {
                vmId: "nobis",
                vmManagerId: "odio",
              },
            },
          },
        ],
      },
      {
        name: "qui",
        serverGroupId: "recusandae",
        serverList: [
          {
            replicationJobId: "ipsum",
            replicationJobTerminated: true,
            serverId: "modi",
            serverType: "VIRTUAL_MACHINE",
            vmServer: {
              vmManagerName: "inventore",
              vmManagerType: "HYPERV-MANAGER",
              vmName: "exercitationem",
              vmPath: "aut",
              vmServerAddress: {
                vmId: "reprehenderit",
                vmManagerId: "tempore",
              },
            },
          },
          {
            replicationJobId: "maiores",
            replicationJobTerminated: false,
            serverId: "dolor",
            serverType: "VIRTUAL_MACHINE",
            vmServer: {
              vmManagerName: "veritatis",
              vmManagerType: "HYPERV-MANAGER",
              vmName: "et",
              vmPath: "omnis",
              vmServerAddress: {
                vmId: "ipsum",
                vmManagerId: "ex",
              },
            },
          },
        ],
      },
    ],
    tags: [
      {
        key: "placeat",
        value: "vel",
      },
      {
        key: "rerum",
        value: "mollitia",
      },
      {
        key: "voluptas",
        value: "quam",
      },
    ],
  },
};

sdk.createApp(req).then((res: CreateAppResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->