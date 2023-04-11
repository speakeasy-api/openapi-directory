# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/autoscaling-plans/2018-01-06/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/autoscaling-plans/2018-01-06/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateScalingPlanRequest,
  CreateScalingPlanResponse,
  CreateScalingPlanXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  ScalingMetricTypeEnum,
  MetricStatisticEnum,
  ServiceNamespaceEnum,
  ScalingPolicyUpdateBehaviorEnum,
  ScalableDimensionEnum,
  PredictiveScalingModeEnum,
  PredictiveScalingMaxCapacityBehaviorEnum,
  LoadMetricTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateScalingPlanRequest = {
  createScalingPlanRequest: {
    applicationSource: {
      cloudFormationStackARN: "corrupti",
      tagFilters: [
        {
          key: "distinctio",
          values: [
            "unde",
            "nulla",
            "corrupti",
            "illum",
          ],
        },
        {
          key: "vel",
          values: [
            "deserunt",
            "suscipit",
            "iure",
          ],
        },
        {
          key: "magnam",
          values: [
            "ipsa",
            "delectus",
            "tempora",
            "suscipit",
          ],
        },
      ],
    },
    scalingInstructions: [
      {
        customizedLoadMetricSpecification: {
          dimensions: [
            {
              name: "placeat",
              value: "voluptatum",
            },
            {
              name: "iusto",
              value: "excepturi",
            },
            {
              name: "nisi",
              value: "recusandae",
            },
            {
              name: "temporibus",
              value: "ab",
            },
          ],
          metricName: "quis",
          namespace: "veritatis",
          statistic: MetricStatisticEnum.SampleCount,
          unit: "perferendis",
        },
        disableDynamicScaling: false,
        maxCapacity: 368241,
        minCapacity: 832620,
        predefinedLoadMetricSpecification: {
          predefinedLoadMetricType: LoadMetricTypeEnum.ALBTargetGroupRequestCount,
          resourceLabel: "quo",
        },
        predictiveScalingMaxCapacityBehavior: PredictiveScalingMaxCapacityBehaviorEnum.SetForecastCapacityToMaxCapacity,
        predictiveScalingMaxCapacityBuffer: 870013,
        predictiveScalingMode: PredictiveScalingModeEnum.ForecastOnly,
        resourceId: "maiores",
        scalableDimension: ScalableDimensionEnum.RdsClusterReadReplicaCount,
        scalingPolicyUpdateBehavior: ScalingPolicyUpdateBehaviorEnum.ReplaceExternalPolicies,
        scheduledActionBufferTime: 800911,
        serviceNamespace: ServiceNamespaceEnum.Ec2,
        targetTrackingConfigurations: [
          {
            customizedScalingMetricSpecification: {
              dimensions: [
                {
                  name: "dolorum",
                  value: "dicta",
                },
                {
                  name: "nam",
                  value: "officia",
                },
                {
                  name: "occaecati",
                  value: "fugit",
                },
                {
                  name: "deleniti",
                  value: "hic",
                },
              ],
              metricName: "optio",
              namespace: "totam",
              statistic: MetricStatisticEnum.Average,
              unit: "commodi",
            },
            disableScaleIn: false,
            estimatedInstanceWarmup: 473600,
            predefinedScalingMetricSpecification: {
              predefinedScalingMetricType: ScalingMetricTypeEnum.DynamoDBReadCapacityUtilization,
              resourceLabel: "qui",
            },
            scaleInCooldown: 774234,
            scaleOutCooldown: 736918,
            targetValue: 4561.5,
          },
          {
            customizedScalingMetricSpecification: {
              dimensions: [
                {
                  name: "excepturi",
                  value: "aspernatur",
                },
              ],
              metricName: "perferendis",
              namespace: "ad",
              statistic: MetricStatisticEnum.SampleCount,
              unit: "sed",
            },
            disableScaleIn: false,
            estimatedInstanceWarmup: 612096,
            predefinedScalingMetricSpecification: {
              predefinedScalingMetricType: ScalingMetricTypeEnum.ASGAverageNetworkOut,
              resourceLabel: "natus",
            },
            scaleInCooldown: 386489,
            scaleOutCooldown: 943749,
            targetValue: 9025.99,
          },
          {
            customizedScalingMetricSpecification: {
              dimensions: [
                {
                  name: "in",
                  value: "corporis",
                },
                {
                  name: "iste",
                  value: "iure",
                },
                {
                  name: "saepe",
                  value: "quidem",
                },
              ],
              metricName: "architecto",
              namespace: "ipsa",
              statistic: MetricStatisticEnum.Sum,
              unit: "est",
            },
            disableScaleIn: false,
            estimatedInstanceWarmup: 653140,
            predefinedScalingMetricSpecification: {
              predefinedScalingMetricType: ScalingMetricTypeEnum.RDSReaderAverageCPUUtilization,
              resourceLabel: "dolores",
            },
            scaleInCooldown: 210382,
            scaleOutCooldown: 358152,
            targetValue: 1289.26,
          },
        ],
      },
      {
        customizedLoadMetricSpecification: {
          dimensions: [
            {
              name: "enim",
              value: "omnis",
            },
            {
              name: "nemo",
              value: "minima",
            },
            {
              name: "excepturi",
              value: "accusantium",
            },
            {
              name: "iure",
              value: "culpa",
            },
          ],
          metricName: "doloribus",
          namespace: "sapiente",
          statistic: MetricStatisticEnum.Average,
          unit: "mollitia",
        },
        disableDynamicScaling: false,
        maxCapacity: 208876,
        minCapacity: 635059,
        predefinedLoadMetricSpecification: {
          predefinedLoadMetricType: LoadMetricTypeEnum.ASGTotalCPUUtilization,
          resourceLabel: "repellat",
        },
        predictiveScalingMaxCapacityBehavior: PredictiveScalingMaxCapacityBehaviorEnum.SetMaxCapacityToForecastCapacity,
        predictiveScalingMaxCapacityBuffer: 581850,
        predictiveScalingMode: PredictiveScalingModeEnum.ForecastAndScale,
        resourceId: "commodi",
        scalableDimension: ScalableDimensionEnum.RdsClusterReadReplicaCount,
        scalingPolicyUpdateBehavior: ScalingPolicyUpdateBehaviorEnum.KeepExternalPolicies,
        scheduledActionBufferTime: 244425,
        serviceNamespace: ServiceNamespaceEnum.Rds,
        targetTrackingConfigurations: [
          {
            customizedScalingMetricSpecification: {
              dimensions: [
                {
                  name: "vitae",
                  value: "laborum",
                },
                {
                  name: "animi",
                  value: "enim",
                },
              ],
              metricName: "odit",
              namespace: "quo",
              statistic: MetricStatisticEnum.Average,
              unit: "tenetur",
            },
            disableScaleIn: false,
            estimatedInstanceWarmup: 368725,
            predefinedScalingMetricSpecification: {
              predefinedScalingMetricType: ScalingMetricTypeEnum.RDSReaderAverageCPUUtilization,
              resourceLabel: "possimus",
            },
            scaleInCooldown: 13571,
            scaleOutCooldown: 97101,
            targetValue: 6228.46,
          },
        ],
      },
    ],
    scalingPlanName: "temporibus",
  },
  xAmzAlgorithm: "laborum",
  xAmzContentSha256: "quasi",
  xAmzCredential: "reiciendis",
  xAmzDate: "voluptatibus",
  xAmzSecurityToken: "vero",
  xAmzSignature: "nihil",
  xAmzSignedHeaders: "praesentium",
  xAmzTarget: CreateScalingPlanXAmzTargetEnum.AnyScaleScalingPlannerFrontendServiceCreateScalingPlan,
};

sdk.createScalingPlan(req).then((res: CreateScalingPlanResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createScalingPlan` - Creates a scaling plan. 
* `deleteScalingPlan` - <p>Deletes the specified scaling plan.</p> <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for all of the scalable resources that are covered by the plan.</p> <p>If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</p>
* `describeScalingPlanResources` - Describes the scalable resources in the specified scaling plan.
* `describeScalingPlans` - Describes one or more of your scaling plans.
* `getScalingPlanResourceForecastData` - <p>Retrieves the forecast data for a scalable resource.</p> <p>Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days. </p>
* `updateScalingPlan` - <p>Updates the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

