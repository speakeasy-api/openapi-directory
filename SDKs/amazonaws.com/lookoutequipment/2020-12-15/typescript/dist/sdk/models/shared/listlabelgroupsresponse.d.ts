import { SpeakeasyBase } from "../../../internal/utils";
import { LabelGroupSummary } from "./labelgroupsummary";
/**
 * Success
 */
export declare class ListLabelGroupsResponse extends SpeakeasyBase {
    labelGroupSummaries?: LabelGroupSummary[];
    nextToken?: string;
}
