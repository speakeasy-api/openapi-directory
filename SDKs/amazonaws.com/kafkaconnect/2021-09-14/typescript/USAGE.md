<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateConnectorRequest, CreateConnectorResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateConnectorRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
  },
  request: {
    capacity: {
      autoScaling: {
        maxWorkerCount: 6044372234677422456,
        mcuCount: 8274930044578894929,
        minWorkerCount: 1543572285742637646,
        scaleInPolicy: {
          cpuUtilizationPercentage: 2661732831099943416,
        },
        scaleOutPolicy: {
          cpuUtilizationPercentage: 8325060299420976708,
        },
      },
      provisionedCapacity: {
        mcuCount: 7837839688282259259,
        workerCount: 2518412263346885298,
      },
    },
    connectorConfiguration: {
      "et": "ut",
    },
    connectorDescription: "dolorem",
    connectorName: "et",
    kafkaCluster: {
      apacheKafkaCluster: {
        bootstrapServers: "voluptate",
        vpc: {
          securityGroups: [
            "vitae",
            "totam",
            "dolores",
          ],
          subnets: [
            "debitis",
            "vel",
            "odio",
          ],
        },
      },
    },
    kafkaClusterClientAuthentication: {
      authenticationType: "IAM",
    },
    kafkaClusterEncryptionInTransit: {
      encryptionType: "PLAINTEXT",
    },
    kafkaConnectVersion: "aspernatur",
    logDelivery: {
      workerLogDelivery: {
        cloudWatchLogs: {
          enabled: true,
          logGroup: "totam",
        },
        firehose: {
          deliveryStream: "commodi",
          enabled: true,
        },
        s3: {
          bucket: "est",
          enabled: true,
          prefix: "odit",
        },
      },
    },
    plugins: [
      {
        customPlugin: {
          customPluginArn: "voluptas",
          revision: 4778690082005258714,
        },
      },
      {
        customPlugin: {
          customPluginArn: "aut",
          revision: 6972732843819909978,
        },
      },
      {
        customPlugin: {
          customPluginArn: "sed",
          revision: 7845762441295307478,
        },
      },
    ],
    serviceExecutionRoleArn: "autem",
    workerConfiguration: {
      revision: 8514850266767180993,
      workerConfigurationArn: "nobis",
    },
  },
};

sdk.createConnector(req).then((res: CreateConnectorResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->