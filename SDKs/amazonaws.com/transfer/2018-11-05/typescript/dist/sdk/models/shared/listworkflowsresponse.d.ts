import { SpeakeasyBase } from "../../../internal/utils";
import { ListedWorkflow } from "./listedworkflow";
/**
 * Success
 */
export declare class ListWorkflowsResponse extends SpeakeasyBase {
    nextToken?: string;
    workflows: ListedWorkflow[];
}
