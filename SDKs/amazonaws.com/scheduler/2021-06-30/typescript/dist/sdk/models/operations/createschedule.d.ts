import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.
 */
export declare class CreateScheduleRequestBodyFlexibleTimeWindow extends SpeakeasyBase {
    maximumWindowInMinutes?: number;
    mode?: shared.FlexibleTimeWindowModeEnum;
}
/**
 * Specifies whether the schedule is enabled or disabled.
 */
export declare enum CreateScheduleRequestBodyStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
/**
 * The schedule's target. EventBridge Scheduler supports templated target that invoke common API operations, as well as universal targets that you can customize to invoke over 6,000 API operations across more than 270 services. You can only specify one templated or universal target for a schedule.
 */
export declare class CreateScheduleRequestBodyTarget extends SpeakeasyBase {
    arn?: string;
    deadLetterConfig?: shared.DeadLetterConfig;
    ecsParameters?: shared.EcsParameters;
    eventBridgeParameters?: shared.EventBridgeParameters;
    input?: string;
    kinesisParameters?: shared.KinesisParameters;
    retryPolicy?: shared.RetryPolicy;
    roleArn?: string;
    sageMakerPipelineParameters?: shared.SageMakerPipelineParameters;
    sqsParameters?: shared.SqsParameters;
}
export declare class CreateScheduleRequestBody extends SpeakeasyBase {
    /**
     *  Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token, EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
     */
    clientToken?: string;
    /**
     * The description you specify for the schedule.
     */
    description?: string;
    /**
     * The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the <code>EndDate</code> you specify. EventBridge Scheduler ignores <code>EndDate</code> for one-time schedules.
     */
    endDate?: Date;
    /**
     * Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.
     */
    flexibleTimeWindow: CreateScheduleRequestBodyFlexibleTimeWindow;
    /**
     * The name of the schedule group to associate with this schedule. If you omit this, the default schedule group is used.
     */
    groupName?: string;
    /**
     * The Amazon Resource Name (ARN) for the customer managed KMS key that EventBridge Scheduler will use to encrypt and decrypt your data.
     */
    kmsKeyArn?: string;
    /**
     * <p> The expression that defines when the schedule runs. The following formats are supported. </p> <ul> <li> <p> <code>at</code> expression - <code>at(yyyy-mm-ddThh:mm:ss)</code> </p> </li> <li> <p> <code>rate</code> expression - <code>rate(unit value)</code> </p> </li> <li> <p> <code>cron</code> expression - <code>cron(fields)</code> </p> </li> </ul> <p> You can use <code>at</code> expressions to create one-time schedules that invoke a target once, at the time and in the time zone, that you specify. You can use <code>rate</code> and <code>cron</code> expressions to create recurring schedules. Rate-based schedules are useful when you want to invoke a target at regular intervals, such as every 15 minutes or every five days. Cron-based schedules are useful when you want to invoke a target periodically at a specific time, such as at 8:00 am (UTC+0) every 1st day of the month. </p> <p> A <code>cron</code> expression consists of six fields separated by white spaces: <code>(minutes hours day_of_month month day_of_week year)</code>. </p> <p> A <code>rate</code> expression consists of a <i>value</i> as a positive integer, and a <i>unit</i> with the following options: <code>minute</code> | <code>minutes</code> | <code>hour</code> | <code>hours</code> | <code>day</code> | <code>days</code> </p> <p> For more information and examples, see <a href="https://docs.aws.amazon.com/scheduler/latest/UserGuide/schedule-types.html">Schedule types on EventBridge Scheduler</a> in the <i>EventBridge Scheduler User Guide</i>. </p>
     */
    scheduleExpression: string;
    /**
     * The timezone in which the scheduling expression is evaluated.
     */
    scheduleExpressionTimezone?: string;
    /**
     * The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the <code>StartDate</code> you specify. EventBridge Scheduler ignores <code>StartDate</code> for one-time schedules.
     */
    startDate?: Date;
    /**
     * Specifies whether the schedule is enabled or disabled.
     */
    state?: CreateScheduleRequestBodyStateEnum;
    /**
     * The schedule's target. EventBridge Scheduler supports templated target that invoke common API operations, as well as universal targets that you can customize to invoke over 6,000 API operations across more than 270 services. You can only specify one templated or universal target for a schedule.
     */
    target: CreateScheduleRequestBodyTarget;
}
export declare class CreateScheduleRequest extends SpeakeasyBase {
    /**
     * The name of the schedule that you are creating.
     */
    name: string;
    requestBody: CreateScheduleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateScheduleResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createScheduleOutput?: shared.CreateScheduleOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
