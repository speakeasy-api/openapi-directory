import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowRun } from "./workflowrun";
/**
 * Success
 */
export declare class GetWorkflowRunsResponse extends SpeakeasyBase {
    nextToken?: string;
    runs?: WorkflowRun[];
}
