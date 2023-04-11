import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecution } from "./workflowexecution";
import { WorkflowExecutionCancelRequestedCauseEnum } from "./workflowexecutioncancelrequestedcauseenum";
/**
 * Provides the details of the <code>WorkflowExecutionCancelRequested</code> event.
 */
export declare class WorkflowExecutionCancelRequestedEventAttributes extends SpeakeasyBase {
    cause?: WorkflowExecutionCancelRequestedCauseEnum;
    externalInitiatedEventId?: number;
    externalWorkflowExecution?: WorkflowExecution;
}
