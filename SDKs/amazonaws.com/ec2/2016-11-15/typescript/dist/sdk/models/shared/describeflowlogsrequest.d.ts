import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeFlowLogsRequest extends SpeakeasyBase {
    dryRun?: boolean;
    filter?: FilterList[];
    flowLogIds?: string[];
    maxResults?: number;
    nextToken?: string;
}
