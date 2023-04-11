import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowListItem } from "./workflowlistitem";
/**
 * Success
 */
export declare class ListWorkflowsResponse extends SpeakeasyBase {
    items?: WorkflowListItem[];
    nextToken?: string;
}
