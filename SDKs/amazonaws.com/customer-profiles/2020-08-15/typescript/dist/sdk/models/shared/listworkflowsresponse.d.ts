import { SpeakeasyBase } from "../../../internal/utils";
import { ListWorkflowsItem } from "./listworkflowsitem";
/**
 * Success
 */
export declare class ListWorkflowsResponse extends SpeakeasyBase {
    items?: ListWorkflowsItem[];
    nextToken?: string;
}
