# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/scheduler/2021-06-30/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/scheduler/2021-06-30/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createSchedule` - Creates the specified schedule.
* `createScheduleGroup` - Creates the specified schedule group.
* `deleteSchedule` - Deletes the specified schedule.
* `deleteScheduleGroup` - <p>Deletes the specified schedule group. Deleting a schedule group results in EventBridge Scheduler deleting all schedules associated with the group. When you delete a group, it remains in a <code>DELETING</code> state until all of its associated schedules are deleted. Schedules associated with the group that are set to run while the schedule group is in the process of being deleted might continue to invoke their targets until the schedule group and its associated schedules are deleted.</p> <note> <p> This operation is eventually consistent. </p> </note>
* `getSchedule` - Retrieves the specified schedule.
* `getScheduleGroup` - Retrieves the specified schedule group.
* `listScheduleGroups` - Returns a paginated list of your schedule groups.
* `listSchedules` - Returns a paginated list of your EventBridge Scheduler schedules.
* `listTagsForResource` - Lists the tags associated with the Scheduler resource.
* `tagResource` - Assigns one or more tags (key-value pairs) to the specified EventBridge Scheduler resource. You can only assign tags to schedule groups.
* `untagResource` - Removes one or more tags from the specified EventBridge Scheduler schedule group.
* `updateSchedule` - <p> Updates the specified schedule. When you call <code>UpdateSchedule</code>, EventBridge Scheduler uses all values, including empty values, specified in the request and overrides the existing schedule. This is by design. This means that if you do not set an optional field in your request, that field will be set to its system-default value after the update. </p> <p> Before calling this operation, we recommend that you call the <code>GetSchedule</code> API operation and make a note of all optional parameters for your <code>UpdateSchedule</code> call. </p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

