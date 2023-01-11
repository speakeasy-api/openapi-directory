"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryEvent = void 0;
var utils_1 = require("../../../internal/utils");
var activitytaskcancelrequestedeventattributes_1 = require("./activitytaskcancelrequestedeventattributes");
var activitytaskcanceledeventattributes_1 = require("./activitytaskcanceledeventattributes");
var activitytaskcompletedeventattributes_1 = require("./activitytaskcompletedeventattributes");
var activitytaskfailedeventattributes_1 = require("./activitytaskfailedeventattributes");
var activitytaskscheduledeventattributes_1 = require("./activitytaskscheduledeventattributes");
var activitytaskstartedeventattributes_1 = require("./activitytaskstartedeventattributes");
var activitytasktimedouteventattributes_1 = require("./activitytasktimedouteventattributes");
var canceltimerfailedeventattributes_1 = require("./canceltimerfailedeventattributes");
var cancelworkflowexecutionfailedeventattributes_1 = require("./cancelworkflowexecutionfailedeventattributes");
var childworkflowexecutioncanceledeventattributes_1 = require("./childworkflowexecutioncanceledeventattributes");
var childworkflowexecutioncompletedeventattributes_1 = require("./childworkflowexecutioncompletedeventattributes");
var childworkflowexecutionfailedeventattributes_1 = require("./childworkflowexecutionfailedeventattributes");
var childworkflowexecutionstartedeventattributes_1 = require("./childworkflowexecutionstartedeventattributes");
var childworkflowexecutionterminatedeventattributes_1 = require("./childworkflowexecutionterminatedeventattributes");
var childworkflowexecutiontimedouteventattributes_1 = require("./childworkflowexecutiontimedouteventattributes");
var completeworkflowexecutionfailedeventattributes_1 = require("./completeworkflowexecutionfailedeventattributes");
var continueasnewworkflowexecutionfailedeventattributes_1 = require("./continueasnewworkflowexecutionfailedeventattributes");
var decisiontaskcompletedeventattributes_1 = require("./decisiontaskcompletedeventattributes");
var decisiontaskscheduledeventattributes_1 = require("./decisiontaskscheduledeventattributes");
var decisiontaskstartedeventattributes_1 = require("./decisiontaskstartedeventattributes");
var decisiontasktimedouteventattributes_1 = require("./decisiontasktimedouteventattributes");
var eventtypeenum_1 = require("./eventtypeenum");
var externalworkflowexecutioncancelrequestedeventattributes_1 = require("./externalworkflowexecutioncancelrequestedeventattributes");
var externalworkflowexecutionsignaledeventattributes_1 = require("./externalworkflowexecutionsignaledeventattributes");
var failworkflowexecutionfailedeventattributes_1 = require("./failworkflowexecutionfailedeventattributes");
var lambdafunctioncompletedeventattributes_1 = require("./lambdafunctioncompletedeventattributes");
var lambdafunctionfailedeventattributes_1 = require("./lambdafunctionfailedeventattributes");
var lambdafunctionscheduledeventattributes_1 = require("./lambdafunctionscheduledeventattributes");
var lambdafunctionstartedeventattributes_1 = require("./lambdafunctionstartedeventattributes");
var lambdafunctiontimedouteventattributes_1 = require("./lambdafunctiontimedouteventattributes");
var markerrecordedeventattributes_1 = require("./markerrecordedeventattributes");
var recordmarkerfailedeventattributes_1 = require("./recordmarkerfailedeventattributes");
var requestcancelactivitytaskfailedeventattributes_1 = require("./requestcancelactivitytaskfailedeventattributes");
var requestcancelexternalworkflowexecutionfailedeventattributes_1 = require("./requestcancelexternalworkflowexecutionfailedeventattributes");
var requestcancelexternalworkflowexecutioninitiatedeventattributes_1 = require("./requestcancelexternalworkflowexecutioninitiatedeventattributes");
var scheduleactivitytaskfailedeventattributes_1 = require("./scheduleactivitytaskfailedeventattributes");
var schedulelambdafunctionfailedeventattributes_1 = require("./schedulelambdafunctionfailedeventattributes");
var signalexternalworkflowexecutionfailedeventattributes_1 = require("./signalexternalworkflowexecutionfailedeventattributes");
var signalexternalworkflowexecutioninitiatedeventattributes_1 = require("./signalexternalworkflowexecutioninitiatedeventattributes");
var startchildworkflowexecutionfailedeventattributes_1 = require("./startchildworkflowexecutionfailedeventattributes");
var startchildworkflowexecutioninitiatedeventattributes_1 = require("./startchildworkflowexecutioninitiatedeventattributes");
var startlambdafunctionfailedeventattributes_1 = require("./startlambdafunctionfailedeventattributes");
var starttimerfailedeventattributes_1 = require("./starttimerfailedeventattributes");
var timercanceledeventattributes_1 = require("./timercanceledeventattributes");
var timerfiredeventattributes_1 = require("./timerfiredeventattributes");
var timerstartedeventattributes_1 = require("./timerstartedeventattributes");
var workflowexecutioncancelrequestedeventattributes_1 = require("./workflowexecutioncancelrequestedeventattributes");
var workflowexecutioncanceledeventattributes_1 = require("./workflowexecutioncanceledeventattributes");
var workflowexecutioncompletedeventattributes_1 = require("./workflowexecutioncompletedeventattributes");
var workflowexecutioncontinuedasneweventattributes_1 = require("./workflowexecutioncontinuedasneweventattributes");
var workflowexecutionfailedeventattributes_1 = require("./workflowexecutionfailedeventattributes");
var workflowexecutionsignaledeventattributes_1 = require("./workflowexecutionsignaledeventattributes");
var workflowexecutionstartedeventattributes_1 = require("./workflowexecutionstartedeventattributes");
var workflowexecutionterminatedeventattributes_1 = require("./workflowexecutionterminatedeventattributes");
var workflowexecutiontimedouteventattributes_1 = require("./workflowexecutiontimedouteventattributes");
// HistoryEvent
/**
 * <p>Event within a workflow execution. A history event can be one of these types:</p> <ul> <li> <p> <code>ActivityTaskCancelRequested</code> – A <code>RequestCancelActivityTask</code> decision was received by the system.</p> </li> <li> <p> <code>ActivityTaskCanceled</code> – The activity task was successfully canceled.</p> </li> <li> <p> <code>ActivityTaskCompleted</code> – An activity worker successfully completed an activity task by calling <a>RespondActivityTaskCompleted</a>.</p> </li> <li> <p> <code>ActivityTaskFailed</code> – An activity worker failed an activity task by calling <a>RespondActivityTaskFailed</a>.</p> </li> <li> <p> <code>ActivityTaskScheduled</code> – An activity task was scheduled for execution.</p> </li> <li> <p> <code>ActivityTaskStarted</code> – The scheduled activity task was dispatched to a worker.</p> </li> <li> <p> <code>ActivityTaskTimedOut</code> – The activity task timed out.</p> </li> <li> <p> <code>CancelTimerFailed</code> – Failed to process CancelTimer decision. This happens when the decision isn't configured properly, for example no timer exists with the specified timer Id.</p> </li> <li> <p> <code>CancelWorkflowExecutionFailed</code> – A request to cancel a workflow execution failed.</p> </li> <li> <p> <code>ChildWorkflowExecutionCanceled</code> – A child workflow execution, started by this workflow execution, was canceled and closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionCompleted</code> – A child workflow execution, started by this workflow execution, completed successfully and was closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionFailed</code> – A child workflow execution, started by this workflow execution, failed to complete successfully and was closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionStarted</code> – A child workflow execution was successfully started.</p> </li> <li> <p> <code>ChildWorkflowExecutionTerminated</code> – A child workflow execution, started by this workflow execution, was terminated.</p> </li> <li> <p> <code>ChildWorkflowExecutionTimedOut</code> – A child workflow execution, started by this workflow execution, timed out and was closed.</p> </li> <li> <p> <code>CompleteWorkflowExecutionFailed</code> – The workflow execution failed to complete.</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecutionFailed</code> – The workflow execution failed to complete after being continued as a new workflow execution.</p> </li> <li> <p> <code>DecisionTaskCompleted</code> – The decider successfully completed a decision task by calling <a>RespondDecisionTaskCompleted</a>.</p> </li> <li> <p> <code>DecisionTaskScheduled</code> – A decision task was scheduled for the workflow execution.</p> </li> <li> <p> <code>DecisionTaskStarted</code> – The decision task was dispatched to a decider.</p> </li> <li> <p> <code>DecisionTaskTimedOut</code> – The decision task timed out.</p> </li> <li> <p> <code>ExternalWorkflowExecutionCancelRequested</code> – Request to cancel an external workflow execution was successfully delivered to the target execution.</p> </li> <li> <p> <code>ExternalWorkflowExecutionSignaled</code> – A signal, requested by this workflow execution, was successfully delivered to the target external workflow execution.</p> </li> <li> <p> <code>FailWorkflowExecutionFailed</code> – A request to mark a workflow execution as failed, itself failed.</p> </li> <li> <p> <code>MarkerRecorded</code> – A marker was recorded in the workflow history as the result of a <code>RecordMarker</code> decision.</p> </li> <li> <p> <code>RecordMarkerFailed</code> – A <code>RecordMarker</code> decision was returned as failed.</p> </li> <li> <p> <code>RequestCancelActivityTaskFailed</code> – Failed to process RequestCancelActivityTask decision. This happens when the decision isn't configured properly.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionFailed</code> – Request to cancel an external workflow execution failed.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionInitiated</code> – A request was made to request the cancellation of an external workflow execution.</p> </li> <li> <p> <code>ScheduleActivityTaskFailed</code> – Failed to process ScheduleActivityTask decision. This happens when the decision isn't configured properly, for example the activity type specified isn't registered.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionFailed</code> – The request to signal an external workflow execution failed.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionInitiated</code> – A request to signal an external workflow was made.</p> </li> <li> <p> <code>StartActivityTaskFailed</code> – A scheduled activity task failed to start.</p> </li> <li> <p> <code>StartChildWorkflowExecutionFailed</code> – Failed to process StartChildWorkflowExecution decision. This happens when the decision isn't configured properly, for example the workflow type specified isn't registered.</p> </li> <li> <p> <code>StartChildWorkflowExecutionInitiated</code> – A request was made to start a child workflow execution.</p> </li> <li> <p> <code>StartTimerFailed</code> – Failed to process StartTimer decision. This happens when the decision isn't configured properly, for example a timer already exists with the specified timer Id.</p> </li> <li> <p> <code>TimerCanceled</code> – A timer, previously started for this workflow execution, was successfully canceled.</p> </li> <li> <p> <code>TimerFired</code> – A timer, previously started for this workflow execution, fired.</p> </li> <li> <p> <code>TimerStarted</code> – A timer was started for the workflow execution due to a <code>StartTimer</code> decision.</p> </li> <li> <p> <code>WorkflowExecutionCancelRequested</code> – A request to cancel this workflow execution was made.</p> </li> <li> <p> <code>WorkflowExecutionCanceled</code> – The workflow execution was successfully canceled and closed.</p> </li> <li> <p> <code>WorkflowExecutionCompleted</code> – The workflow execution was closed due to successful completion.</p> </li> <li> <p> <code>WorkflowExecutionContinuedAsNew</code> – The workflow execution was closed and a new execution of the same type was created with the same workflowId.</p> </li> <li> <p> <code>WorkflowExecutionFailed</code> – The workflow execution closed due to a failure.</p> </li> <li> <p> <code>WorkflowExecutionSignaled</code> – An external signal was received for the workflow execution.</p> </li> <li> <p> <code>WorkflowExecutionStarted</code> – The workflow execution was started.</p> </li> <li> <p> <code>WorkflowExecutionTerminated</code> – The workflow execution was terminated.</p> </li> <li> <p> <code>WorkflowExecutionTimedOut</code> – The workflow execution was closed because a time out was exceeded.</p> </li> </ul>
**/
var HistoryEvent = /** @class */ (function (_super) {
    __extends(HistoryEvent, _super);
    function HistoryEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=activityTaskCancelRequestedEventAttributes" }),
        __metadata("design:type", activitytaskcancelrequestedeventattributes_1.ActivityTaskCancelRequestedEventAttributes)
    ], HistoryEvent.prototype, "activityTaskCancelRequestedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=activityTaskCanceledEventAttributes" }),
        __metadata("design:type", activitytaskcanceledeventattributes_1.ActivityTaskCanceledEventAttributes)
    ], HistoryEvent.prototype, "activityTaskCanceledEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=activityTaskCompletedEventAttributes" }),
        __metadata("design:type", activitytaskcompletedeventattributes_1.ActivityTaskCompletedEventAttributes)
    ], HistoryEvent.prototype, "activityTaskCompletedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=activityTaskFailedEventAttributes" }),
        __metadata("design:type", activitytaskfailedeventattributes_1.ActivityTaskFailedEventAttributes)
    ], HistoryEvent.prototype, "activityTaskFailedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=activityTaskScheduledEventAttributes" }),
        __metadata("design:type", activitytaskscheduledeventattributes_1.ActivityTaskScheduledEventAttributes)
    ], HistoryEvent.prototype, "activityTaskScheduledEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=activityTaskStartedEventAttributes" }),
        __metadata("design:type", activitytaskstartedeventattributes_1.ActivityTaskStartedEventAttributes)
    ], HistoryEvent.prototype, "activityTaskStartedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=activityTaskTimedOutEventAttributes" }),
        __metadata("design:type", activitytasktimedouteventattributes_1.ActivityTaskTimedOutEventAttributes)
    ], HistoryEvent.prototype, "activityTaskTimedOutEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancelTimerFailedEventAttributes" }),
        __metadata("design:type", canceltimerfailedeventattributes_1.CancelTimerFailedEventAttributes)
    ], HistoryEvent.prototype, "cancelTimerFailedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancelWorkflowExecutionFailedEventAttributes" }),
        __metadata("design:type", cancelworkflowexecutionfailedeventattributes_1.CancelWorkflowExecutionFailedEventAttributes)
    ], HistoryEvent.prototype, "cancelWorkflowExecutionFailedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=childWorkflowExecutionCanceledEventAttributes" }),
        __metadata("design:type", childworkflowexecutioncanceledeventattributes_1.ChildWorkflowExecutionCanceledEventAttributes)
    ], HistoryEvent.prototype, "childWorkflowExecutionCanceledEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=childWorkflowExecutionCompletedEventAttributes" }),
        __metadata("design:type", childworkflowexecutioncompletedeventattributes_1.ChildWorkflowExecutionCompletedEventAttributes)
    ], HistoryEvent.prototype, "childWorkflowExecutionCompletedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=childWorkflowExecutionFailedEventAttributes" }),
        __metadata("design:type", childworkflowexecutionfailedeventattributes_1.ChildWorkflowExecutionFailedEventAttributes)
    ], HistoryEvent.prototype, "childWorkflowExecutionFailedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=childWorkflowExecutionStartedEventAttributes" }),
        __metadata("design:type", childworkflowexecutionstartedeventattributes_1.ChildWorkflowExecutionStartedEventAttributes)
    ], HistoryEvent.prototype, "childWorkflowExecutionStartedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=childWorkflowExecutionTerminatedEventAttributes" }),
        __metadata("design:type", childworkflowexecutionterminatedeventattributes_1.ChildWorkflowExecutionTerminatedEventAttributes)
    ], HistoryEvent.prototype, "childWorkflowExecutionTerminatedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=childWorkflowExecutionTimedOutEventAttributes" }),
        __metadata("design:type", childworkflowexecutiontimedouteventattributes_1.ChildWorkflowExecutionTimedOutEventAttributes)
    ], HistoryEvent.prototype, "childWorkflowExecutionTimedOutEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=completeWorkflowExecutionFailedEventAttributes" }),
        __metadata("design:type", completeworkflowexecutionfailedeventattributes_1.CompleteWorkflowExecutionFailedEventAttributes)
    ], HistoryEvent.prototype, "completeWorkflowExecutionFailedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=continueAsNewWorkflowExecutionFailedEventAttributes" }),
        __metadata("design:type", continueasnewworkflowexecutionfailedeventattributes_1.ContinueAsNewWorkflowExecutionFailedEventAttributes)
    ], HistoryEvent.prototype, "continueAsNewWorkflowExecutionFailedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=decisionTaskCompletedEventAttributes" }),
        __metadata("design:type", decisiontaskcompletedeventattributes_1.DecisionTaskCompletedEventAttributes)
    ], HistoryEvent.prototype, "decisionTaskCompletedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=decisionTaskScheduledEventAttributes" }),
        __metadata("design:type", decisiontaskscheduledeventattributes_1.DecisionTaskScheduledEventAttributes)
    ], HistoryEvent.prototype, "decisionTaskScheduledEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=decisionTaskStartedEventAttributes" }),
        __metadata("design:type", decisiontaskstartedeventattributes_1.DecisionTaskStartedEventAttributes)
    ], HistoryEvent.prototype, "decisionTaskStartedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=decisionTaskTimedOutEventAttributes" }),
        __metadata("design:type", decisiontasktimedouteventattributes_1.DecisionTaskTimedOutEventAttributes)
    ], HistoryEvent.prototype, "decisionTaskTimedOutEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eventId" }),
        __metadata("design:type", Number)
    ], HistoryEvent.prototype, "eventId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eventTimestamp" }),
        __metadata("design:type", Date)
    ], HistoryEvent.prototype, "eventTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], HistoryEvent.prototype, "eventType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=externalWorkflowExecutionCancelRequestedEventAttributes" }),
        __metadata("design:type", externalworkflowexecutioncancelrequestedeventattributes_1.ExternalWorkflowExecutionCancelRequestedEventAttributes)
    ], HistoryEvent.prototype, "externalWorkflowExecutionCancelRequestedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=externalWorkflowExecutionSignaledEventAttributes" }),
        __metadata("design:type", externalworkflowexecutionsignaledeventattributes_1.ExternalWorkflowExecutionSignaledEventAttributes)
    ], HistoryEvent.prototype, "externalWorkflowExecutionSignaledEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=failWorkflowExecutionFailedEventAttributes" }),
        __metadata("design:type", failworkflowexecutionfailedeventattributes_1.FailWorkflowExecutionFailedEventAttributes)
    ], HistoryEvent.prototype, "failWorkflowExecutionFailedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lambdaFunctionCompletedEventAttributes" }),
        __metadata("design:type", lambdafunctioncompletedeventattributes_1.LambdaFunctionCompletedEventAttributes)
    ], HistoryEvent.prototype, "lambdaFunctionCompletedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lambdaFunctionFailedEventAttributes" }),
        __metadata("design:type", lambdafunctionfailedeventattributes_1.LambdaFunctionFailedEventAttributes)
    ], HistoryEvent.prototype, "lambdaFunctionFailedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lambdaFunctionScheduledEventAttributes" }),
        __metadata("design:type", lambdafunctionscheduledeventattributes_1.LambdaFunctionScheduledEventAttributes)
    ], HistoryEvent.prototype, "lambdaFunctionScheduledEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lambdaFunctionStartedEventAttributes" }),
        __metadata("design:type", lambdafunctionstartedeventattributes_1.LambdaFunctionStartedEventAttributes)
    ], HistoryEvent.prototype, "lambdaFunctionStartedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lambdaFunctionTimedOutEventAttributes" }),
        __metadata("design:type", lambdafunctiontimedouteventattributes_1.LambdaFunctionTimedOutEventAttributes)
    ], HistoryEvent.prototype, "lambdaFunctionTimedOutEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=markerRecordedEventAttributes" }),
        __metadata("design:type", markerrecordedeventattributes_1.MarkerRecordedEventAttributes)
    ], HistoryEvent.prototype, "markerRecordedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recordMarkerFailedEventAttributes" }),
        __metadata("design:type", recordmarkerfailedeventattributes_1.RecordMarkerFailedEventAttributes)
    ], HistoryEvent.prototype, "recordMarkerFailedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestCancelActivityTaskFailedEventAttributes" }),
        __metadata("design:type", requestcancelactivitytaskfailedeventattributes_1.RequestCancelActivityTaskFailedEventAttributes)
    ], HistoryEvent.prototype, "requestCancelActivityTaskFailedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestCancelExternalWorkflowExecutionFailedEventAttributes" }),
        __metadata("design:type", requestcancelexternalworkflowexecutionfailedeventattributes_1.RequestCancelExternalWorkflowExecutionFailedEventAttributes)
    ], HistoryEvent.prototype, "requestCancelExternalWorkflowExecutionFailedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestCancelExternalWorkflowExecutionInitiatedEventAttributes" }),
        __metadata("design:type", requestcancelexternalworkflowexecutioninitiatedeventattributes_1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes)
    ], HistoryEvent.prototype, "requestCancelExternalWorkflowExecutionInitiatedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scheduleActivityTaskFailedEventAttributes" }),
        __metadata("design:type", scheduleactivitytaskfailedeventattributes_1.ScheduleActivityTaskFailedEventAttributes)
    ], HistoryEvent.prototype, "scheduleActivityTaskFailedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scheduleLambdaFunctionFailedEventAttributes" }),
        __metadata("design:type", schedulelambdafunctionfailedeventattributes_1.ScheduleLambdaFunctionFailedEventAttributes)
    ], HistoryEvent.prototype, "scheduleLambdaFunctionFailedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=signalExternalWorkflowExecutionFailedEventAttributes" }),
        __metadata("design:type", signalexternalworkflowexecutionfailedeventattributes_1.SignalExternalWorkflowExecutionFailedEventAttributes)
    ], HistoryEvent.prototype, "signalExternalWorkflowExecutionFailedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=signalExternalWorkflowExecutionInitiatedEventAttributes" }),
        __metadata("design:type", signalexternalworkflowexecutioninitiatedeventattributes_1.SignalExternalWorkflowExecutionInitiatedEventAttributes)
    ], HistoryEvent.prototype, "signalExternalWorkflowExecutionInitiatedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startChildWorkflowExecutionFailedEventAttributes" }),
        __metadata("design:type", startchildworkflowexecutionfailedeventattributes_1.StartChildWorkflowExecutionFailedEventAttributes)
    ], HistoryEvent.prototype, "startChildWorkflowExecutionFailedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startChildWorkflowExecutionInitiatedEventAttributes" }),
        __metadata("design:type", startchildworkflowexecutioninitiatedeventattributes_1.StartChildWorkflowExecutionInitiatedEventAttributes)
    ], HistoryEvent.prototype, "startChildWorkflowExecutionInitiatedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startLambdaFunctionFailedEventAttributes" }),
        __metadata("design:type", startlambdafunctionfailedeventattributes_1.StartLambdaFunctionFailedEventAttributes)
    ], HistoryEvent.prototype, "startLambdaFunctionFailedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startTimerFailedEventAttributes" }),
        __metadata("design:type", starttimerfailedeventattributes_1.StartTimerFailedEventAttributes)
    ], HistoryEvent.prototype, "startTimerFailedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timerCanceledEventAttributes" }),
        __metadata("design:type", timercanceledeventattributes_1.TimerCanceledEventAttributes)
    ], HistoryEvent.prototype, "timerCanceledEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timerFiredEventAttributes" }),
        __metadata("design:type", timerfiredeventattributes_1.TimerFiredEventAttributes)
    ], HistoryEvent.prototype, "timerFiredEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timerStartedEventAttributes" }),
        __metadata("design:type", timerstartedeventattributes_1.TimerStartedEventAttributes)
    ], HistoryEvent.prototype, "timerStartedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workflowExecutionCancelRequestedEventAttributes" }),
        __metadata("design:type", workflowexecutioncancelrequestedeventattributes_1.WorkflowExecutionCancelRequestedEventAttributes)
    ], HistoryEvent.prototype, "workflowExecutionCancelRequestedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workflowExecutionCanceledEventAttributes" }),
        __metadata("design:type", workflowexecutioncanceledeventattributes_1.WorkflowExecutionCanceledEventAttributes)
    ], HistoryEvent.prototype, "workflowExecutionCanceledEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workflowExecutionCompletedEventAttributes" }),
        __metadata("design:type", workflowexecutioncompletedeventattributes_1.WorkflowExecutionCompletedEventAttributes)
    ], HistoryEvent.prototype, "workflowExecutionCompletedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workflowExecutionContinuedAsNewEventAttributes" }),
        __metadata("design:type", workflowexecutioncontinuedasneweventattributes_1.WorkflowExecutionContinuedAsNewEventAttributes)
    ], HistoryEvent.prototype, "workflowExecutionContinuedAsNewEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workflowExecutionFailedEventAttributes" }),
        __metadata("design:type", workflowexecutionfailedeventattributes_1.WorkflowExecutionFailedEventAttributes)
    ], HistoryEvent.prototype, "workflowExecutionFailedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workflowExecutionSignaledEventAttributes" }),
        __metadata("design:type", workflowexecutionsignaledeventattributes_1.WorkflowExecutionSignaledEventAttributes)
    ], HistoryEvent.prototype, "workflowExecutionSignaledEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workflowExecutionStartedEventAttributes" }),
        __metadata("design:type", workflowexecutionstartedeventattributes_1.WorkflowExecutionStartedEventAttributes)
    ], HistoryEvent.prototype, "workflowExecutionStartedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workflowExecutionTerminatedEventAttributes" }),
        __metadata("design:type", workflowexecutionterminatedeventattributes_1.WorkflowExecutionTerminatedEventAttributes)
    ], HistoryEvent.prototype, "workflowExecutionTerminatedEventAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workflowExecutionTimedOutEventAttributes" }),
        __metadata("design:type", workflowexecutiontimedouteventattributes_1.WorkflowExecutionTimedOutEventAttributes)
    ], HistoryEvent.prototype, "workflowExecutionTimedOutEventAttributes", void 0);
    return HistoryEvent;
}(utils_1.SpeakeasyBase));
exports.HistoryEvent = HistoryEvent;
