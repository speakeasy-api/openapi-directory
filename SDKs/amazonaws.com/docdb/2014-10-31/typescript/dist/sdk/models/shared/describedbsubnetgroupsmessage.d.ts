import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * Represents the input to <a>DescribeDBSubnetGroups</a>.
 */
export declare class DescribeDBSubnetGroupsMessage extends SpeakeasyBase {
    dbSubnetGroupName?: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
}
