import { SpeakeasyBase } from "../../../internal/utils";
import { ChildPolicyEnum } from "./childpolicyenum";
import { WorkflowExecutionTerminatedCauseEnum } from "./workflowexecutionterminatedcauseenum";
/**
 * Provides the details of the <code>WorkflowExecutionTerminated</code> event.
 */
export declare class WorkflowExecutionTerminatedEventAttributes extends SpeakeasyBase {
    cause?: WorkflowExecutionTerminatedCauseEnum;
    childPolicy: ChildPolicyEnum;
    details?: string;
    reason?: string;
}
