import { SpeakeasyBase } from "../../../internal/utils";
import { LineageGroupSummary } from "./lineagegroupsummary";
/**
 * Success
 */
export declare class ListLineageGroupsResponse extends SpeakeasyBase {
    lineageGroupSummaries?: LineageGroupSummary[];
    nextToken?: string;
}
