import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeDBSubnetGroupsMessage extends SpeakeasyBase {
    dbSubnetGroupName?: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
}
