import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecution } from "./workflowexecution";
import { WorkflowExecutionTimeoutTypeEnum } from "./workflowexecutiontimeouttypeenum";
import { WorkflowType } from "./workflowtype";
/**
 * Provides the details of the <code>ChildWorkflowExecutionTimedOut</code> event.
 */
export declare class ChildWorkflowExecutionTimedOutEventAttributes extends SpeakeasyBase {
    initiatedEventId: number;
    startedEventId: number;
    timeoutType: WorkflowExecutionTimeoutTypeEnum;
    workflowExecution: WorkflowExecution;
    workflowType: WorkflowType;
}
