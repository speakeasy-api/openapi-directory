import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * <p/>
 */
export declare class DescribeDBClusterBacktracksMessage extends SpeakeasyBase {
    backtrackIdentifier?: string;
    dbClusterIdentifier: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
}
