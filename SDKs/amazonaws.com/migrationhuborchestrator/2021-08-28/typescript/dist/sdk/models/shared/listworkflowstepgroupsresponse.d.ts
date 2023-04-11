import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowStepGroupSummary } from "./workflowstepgroupsummary";
/**
 * Success
 */
export declare class ListWorkflowStepGroupsResponse extends SpeakeasyBase {
    nextToken?: string;
    workflowStepGroupsSummary: WorkflowStepGroupSummary[];
}
