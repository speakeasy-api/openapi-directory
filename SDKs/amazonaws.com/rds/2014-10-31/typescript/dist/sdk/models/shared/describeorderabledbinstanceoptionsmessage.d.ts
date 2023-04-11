import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * <p/>
 */
export declare class DescribeOrderableDBInstanceOptionsMessage extends SpeakeasyBase {
    availabilityZoneGroup?: string;
    dbInstanceClass?: string;
    engine: string;
    engineVersion?: string;
    filters?: FilterList[];
    licenseModel?: string;
    marker?: string;
    maxRecords?: number;
    vpc?: boolean;
}
