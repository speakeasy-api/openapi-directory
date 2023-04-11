<!-- Start SDK Example Usage -->
```typescript
import {
  CreateScheduleRequest,
  CreateScheduleResponse,
  CreateScheduleRequestBodyStateEnum,
} from "openapi/dist/sdk/models/operations";
import {
  PropagateTagsEnum,
  PlacementStrategyTypeEnum,
  PlacementConstraintTypeEnum,
  AssignPublicIpEnum,
  LaunchTypeEnum,
  FlexibleTimeWindowModeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateScheduleRequest = {
  name: "corrupti",
  requestBody: {
    clientToken: "provident",
    description: "distinctio",
    endDate: "2021-03-11T23:22:42.658Z",
    flexibleTimeWindow: {
      maximumWindowInMinutes: 857946,
      mode: FlexibleTimeWindowModeEnum.Flexible,
    },
    groupName: "illum",
    kmsKeyArn: "vel",
    scheduleExpression: "error",
    scheduleExpressionTimezone: "deserunt",
    startDate: "2022-07-25T06:44:09.184Z",
    state: CreateScheduleRequestBodyStateEnum.Enabled,
    target: {
      arn: "debitis",
      deadLetterConfig: {
        arn: "ipsa",
      },
      ecsParameters: {
        capacityProviderStrategy: [
          {
            base: 272656,
            capacityProvider: "suscipit",
            weight: 477665,
          },
          {
            base: 791725,
            capacityProvider: "placeat",
            weight: 528895,
          },
          {
            base: 479977,
            capacityProvider: "excepturi",
            weight: 392785,
          },
          {
            base: 925597,
            capacityProvider: "temporibus",
            weight: 71036,
          },
        ],
        enableECSManagedTags: false,
        enableExecuteCommand: false,
        group: "quis",
        launchType: LaunchTypeEnum.Ec2,
        networkConfiguration: {
          awsvpcConfiguration: {
            assignPublicIp: AssignPublicIpEnum.Disabled,
            securityGroups: [
              "ipsam",
            ],
            subnets: [
              "sapiente",
              "quo",
              "odit",
              "at",
            ],
          },
        },
        placementConstraints: [
          {
            expression: "maiores",
            type: PlacementConstraintTypeEnum.DistinctInstance,
          },
          {
            expression: "quod",
            type: PlacementConstraintTypeEnum.MemberOf,
          },
          {
            expression: "esse",
            type: PlacementConstraintTypeEnum.MemberOf,
          },
          {
            expression: "porro",
            type: PlacementConstraintTypeEnum.MemberOf,
          },
        ],
        placementStrategy: [
          {
            field: "nam",
            type: PlacementStrategyTypeEnum.Spread,
          },
        ],
        platformVersion: "occaecati",
        propagateTags: PropagateTagsEnum.TaskDefinition,
        referenceId: "fugit",
        tags: [
          {
            "optio": "totam",
            "beatae": "commodi",
            "molestiae": "modi",
            "qui": "impedit",
          },
          {
            "esse": "ipsum",
            "excepturi": "aspernatur",
            "perferendis": "ad",
          },
          {
            "sed": "iste",
            "dolor": "natus",
            "laboriosam": "hic",
          },
        ],
        taskCount: 902599,
        taskDefinitionArn: "fuga",
      },
      eventBridgeParameters: {
        detailType: "in",
        source: "corporis",
      },
      input: "iste",
      kinesisParameters: {
        partitionKey: "iure",
      },
      retryPolicy: {
        maximumEventAgeInSeconds: 902349,
        maximumRetryAttempts: 697631,
      },
      roleArn: "architecto",
      sageMakerPipelineParameters: {
        pipelineParameterList: [
          {
            name: "reiciendis",
            value: "est",
          },
        ],
      },
      sqsParameters: {
        messageGroupId: "mollitia",
      },
    },
  },
  xAmzAlgorithm: "laborum",
  xAmzContentSha256: "dolores",
  xAmzCredential: "dolorem",
  xAmzDate: "corporis",
  xAmzSecurityToken: "explicabo",
  xAmzSignature: "nobis",
  xAmzSignedHeaders: "enim",
};

sdk.createSchedule(req).then((res: CreateScheduleResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->