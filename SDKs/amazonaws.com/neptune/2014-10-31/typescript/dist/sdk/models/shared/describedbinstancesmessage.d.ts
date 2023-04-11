import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeDBInstancesMessage extends SpeakeasyBase {
    dbInstanceIdentifier?: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
}
