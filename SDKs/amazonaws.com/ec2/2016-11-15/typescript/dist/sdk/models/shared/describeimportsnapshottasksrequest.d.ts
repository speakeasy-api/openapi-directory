import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeImportSnapshotTasksRequest extends SpeakeasyBase {
    dryRun?: boolean;
    filters?: FilterList[];
    importTaskIds?: string[];
    maxResults?: number;
    nextToken?: string;
}
