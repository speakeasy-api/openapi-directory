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