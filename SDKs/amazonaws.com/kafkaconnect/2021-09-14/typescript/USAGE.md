<!-- Start SDK Example Usage -->
```typescript
import {
  CreateConnectorRequest,
  CreateConnectorResponse
} from "openapi/dist/sdk/models/operations";
import {
  KafkaClusterEncryptionInTransitTypeEnum,
  KafkaClusterClientAuthenticationTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateConnectorRequest = {
  requestBody: {
    capacity: {
      autoScaling: {
        maxWorkerCount: 548814,
        mcuCount: 592845,
        minWorkerCount: 715190,
        scaleInPolicy: {
          cpuUtilizationPercentage: 844266,
        },
        scaleOutPolicy: {
          cpuUtilizationPercentage: 602763,
        },
      },
      provisionedCapacity: {
        mcuCount: 857946,
        workerCount: 544883,
      },
    },
    connectorConfiguration: {
      "vel": "error",
      "deserunt": "suscipit",
      "iure": "magnam",
      "debitis": "ipsa",
    },
    connectorDescription: "delectus",
    connectorName: "tempora",
    kafkaCluster: {
      apacheKafkaCluster: {
        bootstrapServers: "suscipit",
        vpc: {
          securityGroups: [
            "minus",
            "placeat",
          ],
          subnets: [
            "iusto",
            "excepturi",
            "nisi",
          ],
        },
      },
    },
    kafkaClusterClientAuthentication: {
      authenticationType: KafkaClusterClientAuthenticationTypeEnum.Iam,
    },
    kafkaClusterEncryptionInTransit: {
      encryptionType: KafkaClusterEncryptionInTransitTypeEnum.Tls,
    },
    kafkaConnectVersion: "ab",
    logDelivery: {
      workerLogDelivery: {
        cloudWatchLogs: {
          enabled: false,
          logGroup: "quis",
        },
        firehose: {
          deliveryStream: "veritatis",
          enabled: false,
        },
        s3: {
          bucket: "deserunt",
          enabled: false,
          prefix: "perferendis",
        },
      },
    },
    plugins: [
      {
        customPlugin: {
          customPluginArn: "repellendus",
          revision: 957156,
        },
      },
      {
        customPlugin: {
          customPluginArn: "quo",
          revision: 140350,
        },
      },
    ],
    serviceExecutionRoleArn: "at",
    workerConfiguration: {
      revision: 870088,
      workerConfigurationArn: "maiores",
    },
  },
  xAmzAlgorithm: "molestiae",
  xAmzContentSha256: "quod",
  xAmzCredential: "quod",
  xAmzDate: "esse",
  xAmzSecurityToken: "totam",
  xAmzSignature: "porro",
  xAmzSignedHeaders: "dolorum",
};

sdk.createConnector(req).then((res: CreateConnectorResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->