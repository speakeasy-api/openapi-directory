# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/kafkaconnect/2021-09-14/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/kafkaconnect/2021-09-14/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createConnector` - Creates a connector using the specified properties.
* `createCustomPlugin` - Creates a custom plugin using the specified properties.
* `createWorkerConfiguration` - Creates a worker configuration using the specified properties.
* `deleteConnector` - Deletes the specified connector.
* `deleteCustomPlugin` - Deletes a custom plugin.
* `describeConnector` - Returns summary information about the connector.
* `describeCustomPlugin` - A summary description of the custom plugin.
* `describeWorkerConfiguration` - Returns information about a worker configuration.
* `listConnectors` - Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.
* `listCustomPlugins` - Returns a list of all of the custom plugins in this account and Region.
* `listWorkerConfigurations` - Returns a list of all of the worker configurations in this account and Region.
* `updateConnector` - Updates the specified connector.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

