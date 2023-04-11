import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribeOrderableDBInstanceOptionsMessage extends SpeakeasyBase {
    dbInstanceClass?: string;
    engine: string;
    engineVersion?: string;
    licenseModel?: string;
    marker?: string;
    maxRecords?: number;
    vpc?: boolean;
}
