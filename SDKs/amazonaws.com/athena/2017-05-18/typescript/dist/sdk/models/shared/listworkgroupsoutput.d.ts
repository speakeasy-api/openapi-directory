import { SpeakeasyBase } from "../../../internal/utils";
import { WorkGroupSummary } from "./workgroupsummary";
/**
 * Success
 */
export declare class ListWorkGroupsOutput extends SpeakeasyBase {
    nextToken?: string;
    workGroups?: WorkGroupSummary[];
}
