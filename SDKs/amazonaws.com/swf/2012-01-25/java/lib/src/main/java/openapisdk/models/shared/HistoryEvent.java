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
 * <p>Event within a workflow execution. A history event can be one of these types:</p> <ul> <li> <p> <code>ActivityTaskCancelRequested</code> – A <code>RequestCancelActivityTask</code> decision was received by the system.</p> </li> <li> <p> <code>ActivityTaskCanceled</code> – The activity task was successfully canceled.</p> </li> <li> <p> <code>ActivityTaskCompleted</code> – An activity worker successfully completed an activity task by calling <a>RespondActivityTaskCompleted</a>.</p> </li> <li> <p> <code>ActivityTaskFailed</code> – An activity worker failed an activity task by calling <a>RespondActivityTaskFailed</a>.</p> </li> <li> <p> <code>ActivityTaskScheduled</code> – An activity task was scheduled for execution.</p> </li> <li> <p> <code>ActivityTaskStarted</code> – The scheduled activity task was dispatched to a worker.</p> </li> <li> <p> <code>ActivityTaskTimedOut</code> – The activity task timed out.</p> </li> <li> <p> <code>CancelTimerFailed</code> – Failed to process CancelTimer decision. This happens when the decision isn't configured properly, for example no timer exists with the specified timer Id.</p> </li> <li> <p> <code>CancelWorkflowExecutionFailed</code> – A request to cancel a workflow execution failed.</p> </li> <li> <p> <code>ChildWorkflowExecutionCanceled</code> – A child workflow execution, started by this workflow execution, was canceled and closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionCompleted</code> – A child workflow execution, started by this workflow execution, completed successfully and was closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionFailed</code> – A child workflow execution, started by this workflow execution, failed to complete successfully and was closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionStarted</code> – A child workflow execution was successfully started.</p> </li> <li> <p> <code>ChildWorkflowExecutionTerminated</code> – A child workflow execution, started by this workflow execution, was terminated.</p> </li> <li> <p> <code>ChildWorkflowExecutionTimedOut</code> – A child workflow execution, started by this workflow execution, timed out and was closed.</p> </li> <li> <p> <code>CompleteWorkflowExecutionFailed</code> – The workflow execution failed to complete.</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecutionFailed</code> – The workflow execution failed to complete after being continued as a new workflow execution.</p> </li> <li> <p> <code>DecisionTaskCompleted</code> – The decider successfully completed a decision task by calling <a>RespondDecisionTaskCompleted</a>.</p> </li> <li> <p> <code>DecisionTaskScheduled</code> – A decision task was scheduled for the workflow execution.</p> </li> <li> <p> <code>DecisionTaskStarted</code> – The decision task was dispatched to a decider.</p> </li> <li> <p> <code>DecisionTaskTimedOut</code> – The decision task timed out.</p> </li> <li> <p> <code>ExternalWorkflowExecutionCancelRequested</code> – Request to cancel an external workflow execution was successfully delivered to the target execution.</p> </li> <li> <p> <code>ExternalWorkflowExecutionSignaled</code> – A signal, requested by this workflow execution, was successfully delivered to the target external workflow execution.</p> </li> <li> <p> <code>FailWorkflowExecutionFailed</code> – A request to mark a workflow execution as failed, itself failed.</p> </li> <li> <p> <code>MarkerRecorded</code> – A marker was recorded in the workflow history as the result of a <code>RecordMarker</code> decision.</p> </li> <li> <p> <code>RecordMarkerFailed</code> – A <code>RecordMarker</code> decision was returned as failed.</p> </li> <li> <p> <code>RequestCancelActivityTaskFailed</code> – Failed to process RequestCancelActivityTask decision. This happens when the decision isn't configured properly.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionFailed</code> – Request to cancel an external workflow execution failed.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionInitiated</code> – A request was made to request the cancellation of an external workflow execution.</p> </li> <li> <p> <code>ScheduleActivityTaskFailed</code> – Failed to process ScheduleActivityTask decision. This happens when the decision isn't configured properly, for example the activity type specified isn't registered.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionFailed</code> – The request to signal an external workflow execution failed.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionInitiated</code> – A request to signal an external workflow was made.</p> </li> <li> <p> <code>StartActivityTaskFailed</code> – A scheduled activity task failed to start.</p> </li> <li> <p> <code>StartChildWorkflowExecutionFailed</code> – Failed to process StartChildWorkflowExecution decision. This happens when the decision isn't configured properly, for example the workflow type specified isn't registered.</p> </li> <li> <p> <code>StartChildWorkflowExecutionInitiated</code> – A request was made to start a child workflow execution.</p> </li> <li> <p> <code>StartTimerFailed</code> – Failed to process StartTimer decision. This happens when the decision isn't configured properly, for example a timer already exists with the specified timer Id.</p> </li> <li> <p> <code>TimerCanceled</code> – A timer, previously started for this workflow execution, was successfully canceled.</p> </li> <li> <p> <code>TimerFired</code> – A timer, previously started for this workflow execution, fired.</p> </li> <li> <p> <code>TimerStarted</code> – A timer was started for the workflow execution due to a <code>StartTimer</code> decision.</p> </li> <li> <p> <code>WorkflowExecutionCancelRequested</code> – A request to cancel this workflow execution was made.</p> </li> <li> <p> <code>WorkflowExecutionCanceled</code> – The workflow execution was successfully canceled and closed.</p> </li> <li> <p> <code>WorkflowExecutionCompleted</code> – The workflow execution was closed due to successful completion.</p> </li> <li> <p> <code>WorkflowExecutionContinuedAsNew</code> – The workflow execution was closed and a new execution of the same type was created with the same workflowId.</p> </li> <li> <p> <code>WorkflowExecutionFailed</code> – The workflow execution closed due to a failure.</p> </li> <li> <p> <code>WorkflowExecutionSignaled</code> – An external signal was received for the workflow execution.</p> </li> <li> <p> <code>WorkflowExecutionStarted</code> – The workflow execution was started.</p> </li> <li> <p> <code>WorkflowExecutionTerminated</code> – The workflow execution was terminated.</p> </li> <li> <p> <code>WorkflowExecutionTimedOut</code> – The workflow execution was closed because a time out was exceeded.</p> </li> </ul>
**/
public class HistoryEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityTaskCancelRequestedEventAttributes")
    public ActivityTaskCancelRequestedEventAttributes activityTaskCancelRequestedEventAttributes;
    public HistoryEvent withActivityTaskCancelRequestedEventAttributes(ActivityTaskCancelRequestedEventAttributes activityTaskCancelRequestedEventAttributes) {
        this.activityTaskCancelRequestedEventAttributes = activityTaskCancelRequestedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityTaskCanceledEventAttributes")
    public ActivityTaskCanceledEventAttributes activityTaskCanceledEventAttributes;
    public HistoryEvent withActivityTaskCanceledEventAttributes(ActivityTaskCanceledEventAttributes activityTaskCanceledEventAttributes) {
        this.activityTaskCanceledEventAttributes = activityTaskCanceledEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityTaskCompletedEventAttributes")
    public ActivityTaskCompletedEventAttributes activityTaskCompletedEventAttributes;
    public HistoryEvent withActivityTaskCompletedEventAttributes(ActivityTaskCompletedEventAttributes activityTaskCompletedEventAttributes) {
        this.activityTaskCompletedEventAttributes = activityTaskCompletedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityTaskFailedEventAttributes")
    public ActivityTaskFailedEventAttributes activityTaskFailedEventAttributes;
    public HistoryEvent withActivityTaskFailedEventAttributes(ActivityTaskFailedEventAttributes activityTaskFailedEventAttributes) {
        this.activityTaskFailedEventAttributes = activityTaskFailedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityTaskScheduledEventAttributes")
    public ActivityTaskScheduledEventAttributes activityTaskScheduledEventAttributes;
    public HistoryEvent withActivityTaskScheduledEventAttributes(ActivityTaskScheduledEventAttributes activityTaskScheduledEventAttributes) {
        this.activityTaskScheduledEventAttributes = activityTaskScheduledEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityTaskStartedEventAttributes")
    public ActivityTaskStartedEventAttributes activityTaskStartedEventAttributes;
    public HistoryEvent withActivityTaskStartedEventAttributes(ActivityTaskStartedEventAttributes activityTaskStartedEventAttributes) {
        this.activityTaskStartedEventAttributes = activityTaskStartedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityTaskTimedOutEventAttributes")
    public ActivityTaskTimedOutEventAttributes activityTaskTimedOutEventAttributes;
    public HistoryEvent withActivityTaskTimedOutEventAttributes(ActivityTaskTimedOutEventAttributes activityTaskTimedOutEventAttributes) {
        this.activityTaskTimedOutEventAttributes = activityTaskTimedOutEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelTimerFailedEventAttributes")
    public CancelTimerFailedEventAttributes cancelTimerFailedEventAttributes;
    public HistoryEvent withCancelTimerFailedEventAttributes(CancelTimerFailedEventAttributes cancelTimerFailedEventAttributes) {
        this.cancelTimerFailedEventAttributes = cancelTimerFailedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelWorkflowExecutionFailedEventAttributes")
    public CancelWorkflowExecutionFailedEventAttributes cancelWorkflowExecutionFailedEventAttributes;
    public HistoryEvent withCancelWorkflowExecutionFailedEventAttributes(CancelWorkflowExecutionFailedEventAttributes cancelWorkflowExecutionFailedEventAttributes) {
        this.cancelWorkflowExecutionFailedEventAttributes = cancelWorkflowExecutionFailedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childWorkflowExecutionCanceledEventAttributes")
    public ChildWorkflowExecutionCanceledEventAttributes childWorkflowExecutionCanceledEventAttributes;
    public HistoryEvent withChildWorkflowExecutionCanceledEventAttributes(ChildWorkflowExecutionCanceledEventAttributes childWorkflowExecutionCanceledEventAttributes) {
        this.childWorkflowExecutionCanceledEventAttributes = childWorkflowExecutionCanceledEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childWorkflowExecutionCompletedEventAttributes")
    public ChildWorkflowExecutionCompletedEventAttributes childWorkflowExecutionCompletedEventAttributes;
    public HistoryEvent withChildWorkflowExecutionCompletedEventAttributes(ChildWorkflowExecutionCompletedEventAttributes childWorkflowExecutionCompletedEventAttributes) {
        this.childWorkflowExecutionCompletedEventAttributes = childWorkflowExecutionCompletedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childWorkflowExecutionFailedEventAttributes")
    public ChildWorkflowExecutionFailedEventAttributes childWorkflowExecutionFailedEventAttributes;
    public HistoryEvent withChildWorkflowExecutionFailedEventAttributes(ChildWorkflowExecutionFailedEventAttributes childWorkflowExecutionFailedEventAttributes) {
        this.childWorkflowExecutionFailedEventAttributes = childWorkflowExecutionFailedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childWorkflowExecutionStartedEventAttributes")
    public ChildWorkflowExecutionStartedEventAttributes childWorkflowExecutionStartedEventAttributes;
    public HistoryEvent withChildWorkflowExecutionStartedEventAttributes(ChildWorkflowExecutionStartedEventAttributes childWorkflowExecutionStartedEventAttributes) {
        this.childWorkflowExecutionStartedEventAttributes = childWorkflowExecutionStartedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childWorkflowExecutionTerminatedEventAttributes")
    public ChildWorkflowExecutionTerminatedEventAttributes childWorkflowExecutionTerminatedEventAttributes;
    public HistoryEvent withChildWorkflowExecutionTerminatedEventAttributes(ChildWorkflowExecutionTerminatedEventAttributes childWorkflowExecutionTerminatedEventAttributes) {
        this.childWorkflowExecutionTerminatedEventAttributes = childWorkflowExecutionTerminatedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childWorkflowExecutionTimedOutEventAttributes")
    public ChildWorkflowExecutionTimedOutEventAttributes childWorkflowExecutionTimedOutEventAttributes;
    public HistoryEvent withChildWorkflowExecutionTimedOutEventAttributes(ChildWorkflowExecutionTimedOutEventAttributes childWorkflowExecutionTimedOutEventAttributes) {
        this.childWorkflowExecutionTimedOutEventAttributes = childWorkflowExecutionTimedOutEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completeWorkflowExecutionFailedEventAttributes")
    public CompleteWorkflowExecutionFailedEventAttributes completeWorkflowExecutionFailedEventAttributes;
    public HistoryEvent withCompleteWorkflowExecutionFailedEventAttributes(CompleteWorkflowExecutionFailedEventAttributes completeWorkflowExecutionFailedEventAttributes) {
        this.completeWorkflowExecutionFailedEventAttributes = completeWorkflowExecutionFailedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("continueAsNewWorkflowExecutionFailedEventAttributes")
    public ContinueAsNewWorkflowExecutionFailedEventAttributes continueAsNewWorkflowExecutionFailedEventAttributes;
    public HistoryEvent withContinueAsNewWorkflowExecutionFailedEventAttributes(ContinueAsNewWorkflowExecutionFailedEventAttributes continueAsNewWorkflowExecutionFailedEventAttributes) {
        this.continueAsNewWorkflowExecutionFailedEventAttributes = continueAsNewWorkflowExecutionFailedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("decisionTaskCompletedEventAttributes")
    public DecisionTaskCompletedEventAttributes decisionTaskCompletedEventAttributes;
    public HistoryEvent withDecisionTaskCompletedEventAttributes(DecisionTaskCompletedEventAttributes decisionTaskCompletedEventAttributes) {
        this.decisionTaskCompletedEventAttributes = decisionTaskCompletedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("decisionTaskScheduledEventAttributes")
    public DecisionTaskScheduledEventAttributes decisionTaskScheduledEventAttributes;
    public HistoryEvent withDecisionTaskScheduledEventAttributes(DecisionTaskScheduledEventAttributes decisionTaskScheduledEventAttributes) {
        this.decisionTaskScheduledEventAttributes = decisionTaskScheduledEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("decisionTaskStartedEventAttributes")
    public DecisionTaskStartedEventAttributes decisionTaskStartedEventAttributes;
    public HistoryEvent withDecisionTaskStartedEventAttributes(DecisionTaskStartedEventAttributes decisionTaskStartedEventAttributes) {
        this.decisionTaskStartedEventAttributes = decisionTaskStartedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("decisionTaskTimedOutEventAttributes")
    public DecisionTaskTimedOutEventAttributes decisionTaskTimedOutEventAttributes;
    public HistoryEvent withDecisionTaskTimedOutEventAttributes(DecisionTaskTimedOutEventAttributes decisionTaskTimedOutEventAttributes) {
        this.decisionTaskTimedOutEventAttributes = decisionTaskTimedOutEventAttributes;
        return this;
    }
    @JsonProperty("eventId")
    public Long eventId;
    public HistoryEvent withEventId(Long eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("eventTimestamp")
    public OffsetDateTime eventTimestamp;
    public HistoryEvent withEventTimestamp(OffsetDateTime eventTimestamp) {
        this.eventTimestamp = eventTimestamp;
        return this;
    }
    @JsonProperty("eventType")
    public EventTypeEnum eventType;
    public HistoryEvent withEventType(EventTypeEnum eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalWorkflowExecutionCancelRequestedEventAttributes")
    public ExternalWorkflowExecutionCancelRequestedEventAttributes externalWorkflowExecutionCancelRequestedEventAttributes;
    public HistoryEvent withExternalWorkflowExecutionCancelRequestedEventAttributes(ExternalWorkflowExecutionCancelRequestedEventAttributes externalWorkflowExecutionCancelRequestedEventAttributes) {
        this.externalWorkflowExecutionCancelRequestedEventAttributes = externalWorkflowExecutionCancelRequestedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalWorkflowExecutionSignaledEventAttributes")
    public ExternalWorkflowExecutionSignaledEventAttributes externalWorkflowExecutionSignaledEventAttributes;
    public HistoryEvent withExternalWorkflowExecutionSignaledEventAttributes(ExternalWorkflowExecutionSignaledEventAttributes externalWorkflowExecutionSignaledEventAttributes) {
        this.externalWorkflowExecutionSignaledEventAttributes = externalWorkflowExecutionSignaledEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failWorkflowExecutionFailedEventAttributes")
    public FailWorkflowExecutionFailedEventAttributes failWorkflowExecutionFailedEventAttributes;
    public HistoryEvent withFailWorkflowExecutionFailedEventAttributes(FailWorkflowExecutionFailedEventAttributes failWorkflowExecutionFailedEventAttributes) {
        this.failWorkflowExecutionFailedEventAttributes = failWorkflowExecutionFailedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaFunctionCompletedEventAttributes")
    public LambdaFunctionCompletedEventAttributes lambdaFunctionCompletedEventAttributes;
    public HistoryEvent withLambdaFunctionCompletedEventAttributes(LambdaFunctionCompletedEventAttributes lambdaFunctionCompletedEventAttributes) {
        this.lambdaFunctionCompletedEventAttributes = lambdaFunctionCompletedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaFunctionFailedEventAttributes")
    public LambdaFunctionFailedEventAttributes lambdaFunctionFailedEventAttributes;
    public HistoryEvent withLambdaFunctionFailedEventAttributes(LambdaFunctionFailedEventAttributes lambdaFunctionFailedEventAttributes) {
        this.lambdaFunctionFailedEventAttributes = lambdaFunctionFailedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaFunctionScheduledEventAttributes")
    public LambdaFunctionScheduledEventAttributes lambdaFunctionScheduledEventAttributes;
    public HistoryEvent withLambdaFunctionScheduledEventAttributes(LambdaFunctionScheduledEventAttributes lambdaFunctionScheduledEventAttributes) {
        this.lambdaFunctionScheduledEventAttributes = lambdaFunctionScheduledEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaFunctionStartedEventAttributes")
    public LambdaFunctionStartedEventAttributes lambdaFunctionStartedEventAttributes;
    public HistoryEvent withLambdaFunctionStartedEventAttributes(LambdaFunctionStartedEventAttributes lambdaFunctionStartedEventAttributes) {
        this.lambdaFunctionStartedEventAttributes = lambdaFunctionStartedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaFunctionTimedOutEventAttributes")
    public LambdaFunctionTimedOutEventAttributes lambdaFunctionTimedOutEventAttributes;
    public HistoryEvent withLambdaFunctionTimedOutEventAttributes(LambdaFunctionTimedOutEventAttributes lambdaFunctionTimedOutEventAttributes) {
        this.lambdaFunctionTimedOutEventAttributes = lambdaFunctionTimedOutEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("markerRecordedEventAttributes")
    public MarkerRecordedEventAttributes markerRecordedEventAttributes;
    public HistoryEvent withMarkerRecordedEventAttributes(MarkerRecordedEventAttributes markerRecordedEventAttributes) {
        this.markerRecordedEventAttributes = markerRecordedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordMarkerFailedEventAttributes")
    public RecordMarkerFailedEventAttributes recordMarkerFailedEventAttributes;
    public HistoryEvent withRecordMarkerFailedEventAttributes(RecordMarkerFailedEventAttributes recordMarkerFailedEventAttributes) {
        this.recordMarkerFailedEventAttributes = recordMarkerFailedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestCancelActivityTaskFailedEventAttributes")
    public RequestCancelActivityTaskFailedEventAttributes requestCancelActivityTaskFailedEventAttributes;
    public HistoryEvent withRequestCancelActivityTaskFailedEventAttributes(RequestCancelActivityTaskFailedEventAttributes requestCancelActivityTaskFailedEventAttributes) {
        this.requestCancelActivityTaskFailedEventAttributes = requestCancelActivityTaskFailedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestCancelExternalWorkflowExecutionFailedEventAttributes")
    public RequestCancelExternalWorkflowExecutionFailedEventAttributes requestCancelExternalWorkflowExecutionFailedEventAttributes;
    public HistoryEvent withRequestCancelExternalWorkflowExecutionFailedEventAttributes(RequestCancelExternalWorkflowExecutionFailedEventAttributes requestCancelExternalWorkflowExecutionFailedEventAttributes) {
        this.requestCancelExternalWorkflowExecutionFailedEventAttributes = requestCancelExternalWorkflowExecutionFailedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestCancelExternalWorkflowExecutionInitiatedEventAttributes")
    public RequestCancelExternalWorkflowExecutionInitiatedEventAttributes requestCancelExternalWorkflowExecutionInitiatedEventAttributes;
    public HistoryEvent withRequestCancelExternalWorkflowExecutionInitiatedEventAttributes(RequestCancelExternalWorkflowExecutionInitiatedEventAttributes requestCancelExternalWorkflowExecutionInitiatedEventAttributes) {
        this.requestCancelExternalWorkflowExecutionInitiatedEventAttributes = requestCancelExternalWorkflowExecutionInitiatedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleActivityTaskFailedEventAttributes")
    public ScheduleActivityTaskFailedEventAttributes scheduleActivityTaskFailedEventAttributes;
    public HistoryEvent withScheduleActivityTaskFailedEventAttributes(ScheduleActivityTaskFailedEventAttributes scheduleActivityTaskFailedEventAttributes) {
        this.scheduleActivityTaskFailedEventAttributes = scheduleActivityTaskFailedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleLambdaFunctionFailedEventAttributes")
    public ScheduleLambdaFunctionFailedEventAttributes scheduleLambdaFunctionFailedEventAttributes;
    public HistoryEvent withScheduleLambdaFunctionFailedEventAttributes(ScheduleLambdaFunctionFailedEventAttributes scheduleLambdaFunctionFailedEventAttributes) {
        this.scheduleLambdaFunctionFailedEventAttributes = scheduleLambdaFunctionFailedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signalExternalWorkflowExecutionFailedEventAttributes")
    public SignalExternalWorkflowExecutionFailedEventAttributes signalExternalWorkflowExecutionFailedEventAttributes;
    public HistoryEvent withSignalExternalWorkflowExecutionFailedEventAttributes(SignalExternalWorkflowExecutionFailedEventAttributes signalExternalWorkflowExecutionFailedEventAttributes) {
        this.signalExternalWorkflowExecutionFailedEventAttributes = signalExternalWorkflowExecutionFailedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signalExternalWorkflowExecutionInitiatedEventAttributes")
    public SignalExternalWorkflowExecutionInitiatedEventAttributes signalExternalWorkflowExecutionInitiatedEventAttributes;
    public HistoryEvent withSignalExternalWorkflowExecutionInitiatedEventAttributes(SignalExternalWorkflowExecutionInitiatedEventAttributes signalExternalWorkflowExecutionInitiatedEventAttributes) {
        this.signalExternalWorkflowExecutionInitiatedEventAttributes = signalExternalWorkflowExecutionInitiatedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startChildWorkflowExecutionFailedEventAttributes")
    public StartChildWorkflowExecutionFailedEventAttributes startChildWorkflowExecutionFailedEventAttributes;
    public HistoryEvent withStartChildWorkflowExecutionFailedEventAttributes(StartChildWorkflowExecutionFailedEventAttributes startChildWorkflowExecutionFailedEventAttributes) {
        this.startChildWorkflowExecutionFailedEventAttributes = startChildWorkflowExecutionFailedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startChildWorkflowExecutionInitiatedEventAttributes")
    public StartChildWorkflowExecutionInitiatedEventAttributes startChildWorkflowExecutionInitiatedEventAttributes;
    public HistoryEvent withStartChildWorkflowExecutionInitiatedEventAttributes(StartChildWorkflowExecutionInitiatedEventAttributes startChildWorkflowExecutionInitiatedEventAttributes) {
        this.startChildWorkflowExecutionInitiatedEventAttributes = startChildWorkflowExecutionInitiatedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startLambdaFunctionFailedEventAttributes")
    public StartLambdaFunctionFailedEventAttributes startLambdaFunctionFailedEventAttributes;
    public HistoryEvent withStartLambdaFunctionFailedEventAttributes(StartLambdaFunctionFailedEventAttributes startLambdaFunctionFailedEventAttributes) {
        this.startLambdaFunctionFailedEventAttributes = startLambdaFunctionFailedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTimerFailedEventAttributes")
    public StartTimerFailedEventAttributes startTimerFailedEventAttributes;
    public HistoryEvent withStartTimerFailedEventAttributes(StartTimerFailedEventAttributes startTimerFailedEventAttributes) {
        this.startTimerFailedEventAttributes = startTimerFailedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timerCanceledEventAttributes")
    public TimerCanceledEventAttributes timerCanceledEventAttributes;
    public HistoryEvent withTimerCanceledEventAttributes(TimerCanceledEventAttributes timerCanceledEventAttributes) {
        this.timerCanceledEventAttributes = timerCanceledEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timerFiredEventAttributes")
    public TimerFiredEventAttributes timerFiredEventAttributes;
    public HistoryEvent withTimerFiredEventAttributes(TimerFiredEventAttributes timerFiredEventAttributes) {
        this.timerFiredEventAttributes = timerFiredEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timerStartedEventAttributes")
    public TimerStartedEventAttributes timerStartedEventAttributes;
    public HistoryEvent withTimerStartedEventAttributes(TimerStartedEventAttributes timerStartedEventAttributes) {
        this.timerStartedEventAttributes = timerStartedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workflowExecutionCancelRequestedEventAttributes")
    public WorkflowExecutionCancelRequestedEventAttributes workflowExecutionCancelRequestedEventAttributes;
    public HistoryEvent withWorkflowExecutionCancelRequestedEventAttributes(WorkflowExecutionCancelRequestedEventAttributes workflowExecutionCancelRequestedEventAttributes) {
        this.workflowExecutionCancelRequestedEventAttributes = workflowExecutionCancelRequestedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workflowExecutionCanceledEventAttributes")
    public WorkflowExecutionCanceledEventAttributes workflowExecutionCanceledEventAttributes;
    public HistoryEvent withWorkflowExecutionCanceledEventAttributes(WorkflowExecutionCanceledEventAttributes workflowExecutionCanceledEventAttributes) {
        this.workflowExecutionCanceledEventAttributes = workflowExecutionCanceledEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workflowExecutionCompletedEventAttributes")
    public WorkflowExecutionCompletedEventAttributes workflowExecutionCompletedEventAttributes;
    public HistoryEvent withWorkflowExecutionCompletedEventAttributes(WorkflowExecutionCompletedEventAttributes workflowExecutionCompletedEventAttributes) {
        this.workflowExecutionCompletedEventAttributes = workflowExecutionCompletedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workflowExecutionContinuedAsNewEventAttributes")
    public WorkflowExecutionContinuedAsNewEventAttributes workflowExecutionContinuedAsNewEventAttributes;
    public HistoryEvent withWorkflowExecutionContinuedAsNewEventAttributes(WorkflowExecutionContinuedAsNewEventAttributes workflowExecutionContinuedAsNewEventAttributes) {
        this.workflowExecutionContinuedAsNewEventAttributes = workflowExecutionContinuedAsNewEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workflowExecutionFailedEventAttributes")
    public WorkflowExecutionFailedEventAttributes workflowExecutionFailedEventAttributes;
    public HistoryEvent withWorkflowExecutionFailedEventAttributes(WorkflowExecutionFailedEventAttributes workflowExecutionFailedEventAttributes) {
        this.workflowExecutionFailedEventAttributes = workflowExecutionFailedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workflowExecutionSignaledEventAttributes")
    public WorkflowExecutionSignaledEventAttributes workflowExecutionSignaledEventAttributes;
    public HistoryEvent withWorkflowExecutionSignaledEventAttributes(WorkflowExecutionSignaledEventAttributes workflowExecutionSignaledEventAttributes) {
        this.workflowExecutionSignaledEventAttributes = workflowExecutionSignaledEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workflowExecutionStartedEventAttributes")
    public WorkflowExecutionStartedEventAttributes workflowExecutionStartedEventAttributes;
    public HistoryEvent withWorkflowExecutionStartedEventAttributes(WorkflowExecutionStartedEventAttributes workflowExecutionStartedEventAttributes) {
        this.workflowExecutionStartedEventAttributes = workflowExecutionStartedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workflowExecutionTerminatedEventAttributes")
    public WorkflowExecutionTerminatedEventAttributes workflowExecutionTerminatedEventAttributes;
    public HistoryEvent withWorkflowExecutionTerminatedEventAttributes(WorkflowExecutionTerminatedEventAttributes workflowExecutionTerminatedEventAttributes) {
        this.workflowExecutionTerminatedEventAttributes = workflowExecutionTerminatedEventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workflowExecutionTimedOutEventAttributes")
    public WorkflowExecutionTimedOutEventAttributes workflowExecutionTimedOutEventAttributes;
    public HistoryEvent withWorkflowExecutionTimedOutEventAttributes(WorkflowExecutionTimedOutEventAttributes workflowExecutionTimedOutEventAttributes) {
        this.workflowExecutionTimedOutEventAttributes = workflowExecutionTimedOutEventAttributes;
        return this;
    }
}