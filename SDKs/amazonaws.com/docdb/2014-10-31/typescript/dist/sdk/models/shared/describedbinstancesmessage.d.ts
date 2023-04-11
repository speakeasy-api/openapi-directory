import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * Represents the input to <a>DescribeDBInstances</a>.
 */
export declare class DescribeDBInstancesMessage extends SpeakeasyBase {
    dbInstanceIdentifier?: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
}
