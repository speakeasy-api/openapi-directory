import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetGroupSummary } from "./datasetgroupsummary";
/**
 * Success
 */
export declare class ListDatasetGroupsResponse extends SpeakeasyBase {
    datasetGroups?: DatasetGroupSummary[];
    nextToken?: string;
}
