import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * <p/>
 */
export declare class DescribeDBSecurityGroupsMessage extends SpeakeasyBase {
    dbSecurityGroupName?: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
}
