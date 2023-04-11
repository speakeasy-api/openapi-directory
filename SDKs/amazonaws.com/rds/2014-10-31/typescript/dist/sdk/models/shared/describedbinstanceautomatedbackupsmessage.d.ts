import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * Parameter input for DescribeDBInstanceAutomatedBackups.
 */
export declare class DescribeDBInstanceAutomatedBackupsMessage extends SpeakeasyBase {
    dbInstanceAutomatedBackupsArn?: string;
    dbInstanceIdentifier?: string;
    dbiResourceId?: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
}
