import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowStepSummary } from "./workflowstepsummary";
/**
 * Success
 */
export declare class ListWorkflowStepsResponse extends SpeakeasyBase {
    nextToken?: string;
    workflowStepsSummary: WorkflowStepSummary[];
}
