import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * Represents the input to <a>DescribeOrderableDBInstanceOptions</a>.
 */
export declare class DescribeOrderableDBInstanceOptionsMessage extends SpeakeasyBase {
    dbInstanceClass?: string;
    engine: string;
    engineVersion?: string;
    filters?: FilterList[];
    licenseModel?: string;
    marker?: string;
    maxRecords?: number;
    vpc?: boolean;
}
