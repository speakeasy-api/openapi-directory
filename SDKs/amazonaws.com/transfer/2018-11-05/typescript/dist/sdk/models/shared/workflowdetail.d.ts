import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.</p> <p>In addition to a workflow to execute when a file is uploaded completely, <code>WorkflowDetails</code> can also contain a workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when a file is open when the session disconnects.</p>
 */
export declare class WorkflowDetail extends SpeakeasyBase {
    executionRole: string;
    workflowId: string;
}
