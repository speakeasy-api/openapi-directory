import { SpeakeasyBase } from "../../../internal/utils";
import { ActivityFailedEventDetails } from "./activityfailedeventdetails";
import { ActivityScheduledEventDetails } from "./activityscheduledeventdetails";
import { ActivityScheduleFailedEventDetails } from "./activityschedulefailedeventdetails";
import { ActivityStartedEventDetails } from "./activitystartedeventdetails";
import { ActivitySucceededEventDetails } from "./activitysucceededeventdetails";
import { ActivityTimedOutEventDetails } from "./activitytimedouteventdetails";
import { ExecutionAbortedEventDetails } from "./executionabortedeventdetails";
import { ExecutionFailedEventDetails } from "./executionfailedeventdetails";
import { ExecutionStartedEventDetails } from "./executionstartedeventdetails";
import { ExecutionSucceededEventDetails } from "./executionsucceededeventdetails";
import { ExecutionTimedOutEventDetails } from "./executiontimedouteventdetails";
import { HistoryEventTypeEnum } from "./historyeventtypeenum";
import { LambdaFunctionFailedEventDetails } from "./lambdafunctionfailedeventdetails";
import { LambdaFunctionScheduledEventDetails } from "./lambdafunctionscheduledeventdetails";
import { LambdaFunctionScheduleFailedEventDetails } from "./lambdafunctionschedulefailedeventdetails";
import { LambdaFunctionStartFailedEventDetails } from "./lambdafunctionstartfailedeventdetails";
import { LambdaFunctionSucceededEventDetails } from "./lambdafunctionsucceededeventdetails";
import { LambdaFunctionTimedOutEventDetails } from "./lambdafunctiontimedouteventdetails";
import { MapIterationEventDetails } from "./mapiterationeventdetails";
import { MapRunFailedEventDetails } from "./maprunfailedeventdetails";
import { MapRunStartedEventDetails } from "./maprunstartedeventdetails";
import { MapStateStartedEventDetails } from "./mapstatestartedeventdetails";
import { StateEnteredEventDetails } from "./stateenteredeventdetails";
import { StateExitedEventDetails } from "./stateexitedeventdetails";
import { TaskFailedEventDetails } from "./taskfailedeventdetails";
import { TaskScheduledEventDetails } from "./taskscheduledeventdetails";
import { TaskStartedEventDetails } from "./taskstartedeventdetails";
import { TaskStartFailedEventDetails } from "./taskstartfailedeventdetails";
import { TaskSubmitFailedEventDetails } from "./tasksubmitfailedeventdetails";
import { TaskSubmittedEventDetails } from "./tasksubmittedeventdetails";
import { TaskSucceededEventDetails } from "./tasksucceededeventdetails";
import { TaskTimedOutEventDetails } from "./tasktimedouteventdetails";
/**
 * Contains details about the events of an execution.
 */
export declare class HistoryEvent extends SpeakeasyBase {
    /**
     * Contains details about an activity that failed during an execution.
     */
    activityFailedEventDetails?: ActivityFailedEventDetails;
    activityScheduleFailedEventDetails?: ActivityScheduleFailedEventDetails;
    /**
     * Contains details about an activity scheduled during an execution.
     */
    activityScheduledEventDetails?: ActivityScheduledEventDetails;
    /**
     * Contains details about the start of an activity during an execution.
     */
    activityStartedEventDetails?: ActivityStartedEventDetails;
    /**
     * Contains details about an activity that successfully terminated during an execution.
     */
    activitySucceededEventDetails?: ActivitySucceededEventDetails;
    /**
     * Contains details about an activity timeout that occurred during an execution.
     */
    activityTimedOutEventDetails?: ActivityTimedOutEventDetails;
    /**
     * Contains details about an abort of an execution.
     */
    executionAbortedEventDetails?: ExecutionAbortedEventDetails;
    /**
     * Contains details about an execution failure event.
     */
    executionFailedEventDetails?: ExecutionFailedEventDetails;
    /**
     * Contains details about the start of the execution.
     */
    executionStartedEventDetails?: ExecutionStartedEventDetails;
    /**
     * Contains details about the successful termination of the execution.
     */
    executionSucceededEventDetails?: ExecutionSucceededEventDetails;
    /**
     * Contains details about the execution timeout that occurred during the execution.
     */
    executionTimedOutEventDetails?: ExecutionTimedOutEventDetails;
    id: number;
    /**
     * Contains details about a Lambda function that failed during an execution.
     */
    lambdaFunctionFailedEventDetails?: LambdaFunctionFailedEventDetails;
    /**
     * Contains details about a failed Lambda function schedule event that occurred during an execution.
     */
    lambdaFunctionScheduleFailedEventDetails?: LambdaFunctionScheduleFailedEventDetails;
    /**
     * Contains details about a Lambda function scheduled during an execution.
     */
    lambdaFunctionScheduledEventDetails?: LambdaFunctionScheduledEventDetails;
    lambdaFunctionStartFailedEventDetails?: LambdaFunctionStartFailedEventDetails;
    lambdaFunctionSucceededEventDetails?: LambdaFunctionSucceededEventDetails;
    /**
     * Contains details about a Lambda function timeout that occurred during an execution.
     */
    lambdaFunctionTimedOutEventDetails?: LambdaFunctionTimedOutEventDetails;
    mapIterationAbortedEventDetails?: MapIterationEventDetails;
    mapIterationFailedEventDetails?: MapIterationEventDetails;
    mapIterationStartedEventDetails?: MapIterationEventDetails;
    mapIterationSucceededEventDetails?: MapIterationEventDetails;
    mapRunFailedEventDetails?: MapRunFailedEventDetails;
    mapRunStartedEventDetails?: MapRunStartedEventDetails;
    mapStateStartedEventDetails?: MapStateStartedEventDetails;
    previousEventId?: number;
    /**
     * Contains details about a state entered during an execution.
     */
    stateEnteredEventDetails?: StateEnteredEventDetails;
    /**
     * Contains details about an exit from a state during an execution.
     */
    stateExitedEventDetails?: StateExitedEventDetails;
    taskFailedEventDetails?: TaskFailedEventDetails;
    taskScheduledEventDetails?: TaskScheduledEventDetails;
    taskStartFailedEventDetails?: TaskStartFailedEventDetails;
    taskStartedEventDetails?: TaskStartedEventDetails;
    taskSubmitFailedEventDetails?: TaskSubmitFailedEventDetails;
    taskSubmittedEventDetails?: TaskSubmittedEventDetails;
    taskSucceededEventDetails?: TaskSucceededEventDetails;
    taskTimedOutEventDetails?: TaskTimedOutEventDetails;
    timestamp: Date;
    type: HistoryEventTypeEnum;
}
