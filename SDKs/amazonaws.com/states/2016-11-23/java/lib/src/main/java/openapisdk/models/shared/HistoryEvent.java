package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * HistoryEvent
 * Contains details about the events of an execution.
**/
public class HistoryEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityFailedEventDetails")
    public ActivityFailedEventDetails activityFailedEventDetails;
    public HistoryEvent withActivityFailedEventDetails(ActivityFailedEventDetails activityFailedEventDetails) {
        this.activityFailedEventDetails = activityFailedEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityScheduleFailedEventDetails")
    public ActivityScheduleFailedEventDetails activityScheduleFailedEventDetails;
    public HistoryEvent withActivityScheduleFailedEventDetails(ActivityScheduleFailedEventDetails activityScheduleFailedEventDetails) {
        this.activityScheduleFailedEventDetails = activityScheduleFailedEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityScheduledEventDetails")
    public ActivityScheduledEventDetails activityScheduledEventDetails;
    public HistoryEvent withActivityScheduledEventDetails(ActivityScheduledEventDetails activityScheduledEventDetails) {
        this.activityScheduledEventDetails = activityScheduledEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityStartedEventDetails")
    public ActivityStartedEventDetails activityStartedEventDetails;
    public HistoryEvent withActivityStartedEventDetails(ActivityStartedEventDetails activityStartedEventDetails) {
        this.activityStartedEventDetails = activityStartedEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activitySucceededEventDetails")
    public ActivitySucceededEventDetails activitySucceededEventDetails;
    public HistoryEvent withActivitySucceededEventDetails(ActivitySucceededEventDetails activitySucceededEventDetails) {
        this.activitySucceededEventDetails = activitySucceededEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityTimedOutEventDetails")
    public ActivityTimedOutEventDetails activityTimedOutEventDetails;
    public HistoryEvent withActivityTimedOutEventDetails(ActivityTimedOutEventDetails activityTimedOutEventDetails) {
        this.activityTimedOutEventDetails = activityTimedOutEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionAbortedEventDetails")
    public ExecutionAbortedEventDetails executionAbortedEventDetails;
    public HistoryEvent withExecutionAbortedEventDetails(ExecutionAbortedEventDetails executionAbortedEventDetails) {
        this.executionAbortedEventDetails = executionAbortedEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionFailedEventDetails")
    public ExecutionFailedEventDetails executionFailedEventDetails;
    public HistoryEvent withExecutionFailedEventDetails(ExecutionFailedEventDetails executionFailedEventDetails) {
        this.executionFailedEventDetails = executionFailedEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionStartedEventDetails")
    public ExecutionStartedEventDetails executionStartedEventDetails;
    public HistoryEvent withExecutionStartedEventDetails(ExecutionStartedEventDetails executionStartedEventDetails) {
        this.executionStartedEventDetails = executionStartedEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionSucceededEventDetails")
    public ExecutionSucceededEventDetails executionSucceededEventDetails;
    public HistoryEvent withExecutionSucceededEventDetails(ExecutionSucceededEventDetails executionSucceededEventDetails) {
        this.executionSucceededEventDetails = executionSucceededEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionTimedOutEventDetails")
    public ExecutionTimedOutEventDetails executionTimedOutEventDetails;
    public HistoryEvent withExecutionTimedOutEventDetails(ExecutionTimedOutEventDetails executionTimedOutEventDetails) {
        this.executionTimedOutEventDetails = executionTimedOutEventDetails;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public HistoryEvent withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaFunctionFailedEventDetails")
    public LambdaFunctionFailedEventDetails lambdaFunctionFailedEventDetails;
    public HistoryEvent withLambdaFunctionFailedEventDetails(LambdaFunctionFailedEventDetails lambdaFunctionFailedEventDetails) {
        this.lambdaFunctionFailedEventDetails = lambdaFunctionFailedEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaFunctionScheduleFailedEventDetails")
    public LambdaFunctionScheduleFailedEventDetails lambdaFunctionScheduleFailedEventDetails;
    public HistoryEvent withLambdaFunctionScheduleFailedEventDetails(LambdaFunctionScheduleFailedEventDetails lambdaFunctionScheduleFailedEventDetails) {
        this.lambdaFunctionScheduleFailedEventDetails = lambdaFunctionScheduleFailedEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaFunctionScheduledEventDetails")
    public LambdaFunctionScheduledEventDetails lambdaFunctionScheduledEventDetails;
    public HistoryEvent withLambdaFunctionScheduledEventDetails(LambdaFunctionScheduledEventDetails lambdaFunctionScheduledEventDetails) {
        this.lambdaFunctionScheduledEventDetails = lambdaFunctionScheduledEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaFunctionStartFailedEventDetails")
    public LambdaFunctionStartFailedEventDetails lambdaFunctionStartFailedEventDetails;
    public HistoryEvent withLambdaFunctionStartFailedEventDetails(LambdaFunctionStartFailedEventDetails lambdaFunctionStartFailedEventDetails) {
        this.lambdaFunctionStartFailedEventDetails = lambdaFunctionStartFailedEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaFunctionSucceededEventDetails")
    public LambdaFunctionSucceededEventDetails lambdaFunctionSucceededEventDetails;
    public HistoryEvent withLambdaFunctionSucceededEventDetails(LambdaFunctionSucceededEventDetails lambdaFunctionSucceededEventDetails) {
        this.lambdaFunctionSucceededEventDetails = lambdaFunctionSucceededEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaFunctionTimedOutEventDetails")
    public LambdaFunctionTimedOutEventDetails lambdaFunctionTimedOutEventDetails;
    public HistoryEvent withLambdaFunctionTimedOutEventDetails(LambdaFunctionTimedOutEventDetails lambdaFunctionTimedOutEventDetails) {
        this.lambdaFunctionTimedOutEventDetails = lambdaFunctionTimedOutEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mapIterationAbortedEventDetails")
    public MapIterationEventDetails mapIterationAbortedEventDetails;
    public HistoryEvent withMapIterationAbortedEventDetails(MapIterationEventDetails mapIterationAbortedEventDetails) {
        this.mapIterationAbortedEventDetails = mapIterationAbortedEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mapIterationFailedEventDetails")
    public MapIterationEventDetails mapIterationFailedEventDetails;
    public HistoryEvent withMapIterationFailedEventDetails(MapIterationEventDetails mapIterationFailedEventDetails) {
        this.mapIterationFailedEventDetails = mapIterationFailedEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mapIterationStartedEventDetails")
    public MapIterationEventDetails mapIterationStartedEventDetails;
    public HistoryEvent withMapIterationStartedEventDetails(MapIterationEventDetails mapIterationStartedEventDetails) {
        this.mapIterationStartedEventDetails = mapIterationStartedEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mapIterationSucceededEventDetails")
    public MapIterationEventDetails mapIterationSucceededEventDetails;
    public HistoryEvent withMapIterationSucceededEventDetails(MapIterationEventDetails mapIterationSucceededEventDetails) {
        this.mapIterationSucceededEventDetails = mapIterationSucceededEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mapStateStartedEventDetails")
    public MapStateStartedEventDetails mapStateStartedEventDetails;
    public HistoryEvent withMapStateStartedEventDetails(MapStateStartedEventDetails mapStateStartedEventDetails) {
        this.mapStateStartedEventDetails = mapStateStartedEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previousEventId")
    public Long previousEventId;
    public HistoryEvent withPreviousEventId(Long previousEventId) {
        this.previousEventId = previousEventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateEnteredEventDetails")
    public StateEnteredEventDetails stateEnteredEventDetails;
    public HistoryEvent withStateEnteredEventDetails(StateEnteredEventDetails stateEnteredEventDetails) {
        this.stateEnteredEventDetails = stateEnteredEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateExitedEventDetails")
    public StateExitedEventDetails stateExitedEventDetails;
    public HistoryEvent withStateExitedEventDetails(StateExitedEventDetails stateExitedEventDetails) {
        this.stateExitedEventDetails = stateExitedEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskFailedEventDetails")
    public TaskFailedEventDetails taskFailedEventDetails;
    public HistoryEvent withTaskFailedEventDetails(TaskFailedEventDetails taskFailedEventDetails) {
        this.taskFailedEventDetails = taskFailedEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskScheduledEventDetails")
    public TaskScheduledEventDetails taskScheduledEventDetails;
    public HistoryEvent withTaskScheduledEventDetails(TaskScheduledEventDetails taskScheduledEventDetails) {
        this.taskScheduledEventDetails = taskScheduledEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskStartFailedEventDetails")
    public TaskStartFailedEventDetails taskStartFailedEventDetails;
    public HistoryEvent withTaskStartFailedEventDetails(TaskStartFailedEventDetails taskStartFailedEventDetails) {
        this.taskStartFailedEventDetails = taskStartFailedEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskStartedEventDetails")
    public TaskStartedEventDetails taskStartedEventDetails;
    public HistoryEvent withTaskStartedEventDetails(TaskStartedEventDetails taskStartedEventDetails) {
        this.taskStartedEventDetails = taskStartedEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskSubmitFailedEventDetails")
    public TaskSubmitFailedEventDetails taskSubmitFailedEventDetails;
    public HistoryEvent withTaskSubmitFailedEventDetails(TaskSubmitFailedEventDetails taskSubmitFailedEventDetails) {
        this.taskSubmitFailedEventDetails = taskSubmitFailedEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskSubmittedEventDetails")
    public TaskSubmittedEventDetails taskSubmittedEventDetails;
    public HistoryEvent withTaskSubmittedEventDetails(TaskSubmittedEventDetails taskSubmittedEventDetails) {
        this.taskSubmittedEventDetails = taskSubmittedEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskSucceededEventDetails")
    public TaskSucceededEventDetails taskSucceededEventDetails;
    public HistoryEvent withTaskSucceededEventDetails(TaskSucceededEventDetails taskSucceededEventDetails) {
        this.taskSucceededEventDetails = taskSucceededEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskTimedOutEventDetails")
    public TaskTimedOutEventDetails taskTimedOutEventDetails;
    public HistoryEvent withTaskTimedOutEventDetails(TaskTimedOutEventDetails taskTimedOutEventDetails) {
        this.taskTimedOutEventDetails = taskTimedOutEventDetails;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("timestamp")
    public OffsetDateTime timestamp;
    public HistoryEvent withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonProperty("type")
    public HistoryEventTypeEnum type;
    public HistoryEvent withType(HistoryEventTypeEnum type) {
        this.type = type;
        return this;
    }
}